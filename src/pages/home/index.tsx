import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table, Tabs } from "flowbite-react";
import { useMonitoringStore } from "@store";
import { GlobalPagination, TableSkeleton } from "@ui";
import { getDataFromCookie } from "@cookie";

const TableHeader = [
  { key: "FullName", value: "Full Name" },
  { key: "position", value: "Position" },
  { key: "blacklisted_at", value: "Blacklisted at" },
  { key: "reason", value: "Reason" },
];

import { Accordion } from "flowbite-react";

const TableContent = ({
  data,
  isLoading,
  totalCount,
  changePage,
  curPage,
}: any) => {
  return (
    <div>
      <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
        <Table.Head>
          {TableHeader.map((item: any) => (
            <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
          {!isLoading ? (
            data?.length > 0 ? (
              data?.map((row: any) => (
                <Table.Row
                  key={row.Id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {TableHeader.map((header: any) => (
                    <Table.Cell key={header.key}>
                      {header.key === "blacklisted_at" ||
                      header.key === "DateOfBirth" ? (
                        row[header.key].substring(0, 10)
                      ) : header.key === "reason" ? (
                        <Accordion collapseAll>
                          <Accordion.Panel>
                            <Accordion.Title>dqew qweaew</Accordion.Title>
                            <Accordion.Content>adfsdf</Accordion.Content>
                          </Accordion.Panel>
                        </Accordion>
                      ) : (
                        row[header.key]
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell
                  colSpan={TableHeader.length}
                  className="text-center"
                >
                  No data available
                </Table.Cell>
              </Table.Row>
            )
          ) : (
            <TableSkeleton count={3} />
          )}
        </Table.Body>
      </Table>
      {totalCount > 1 && (
        <GlobalPagination
          currentPage={curPage}
          totalPages={totalCount}
          onPageChange={changePage}
        />
      )}
    </div>
  );
};

export default function Home() {
  const {
    get_all_data,
    isLoading,
    dailydata,
    weeklydata,
    monthlydata,
    alldata,
    AtotalCount,
    DtotalCount,
    WtotalCount,
    MtotalCount,
  } = useMonitoringStore();

  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState({ offset: 1, limit: 10 });
  const role = getDataFromCookie("role") !== "user" && "employee";

  useEffect(() => {
    get_all_data(params);
  }, [params, get_all_data]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("offset");
    const pageNumber = page ? parseInt(page) : 1;
    setParams((prevParams) => ({
      ...prevParams,
      offset: pageNumber,
    }));
  }, [location.search]);

  const changePage = useCallback((value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  }, []);

  const handleChange = useCallback(() => {
    const params = new URLSearchParams(location.search);
    params.set("offset", "1");
    navigate(`?${params}`);
  }, [location.search, navigate]);

  const tabsData = [
    { title: "All", data: alldata, totalCount: AtotalCount },
    { title: "Daily", data: dailydata, totalCount: DtotalCount },
    { title: "Weekly", data: weeklydata, totalCount: WtotalCount },
    { title: "Monthly", data: monthlydata, totalCount: MtotalCount },
  ];

  return (
    <div className="m-4 md:ml-[275px] mt-[60px] rounded-xl">
      <div className="relative overflow-x-auto p-1">
        <Tabs aria-label="Default tabs" className="custom-tabs w-full">
          {role &&
            tabsData.map((tab, index) => (
              <Tabs.Item
                key={index}
                active={index === 0}
                title={tab.title}
                onClick={handleChange}
              >
                <TableContent
                  data={tab.data}
                  isLoading={isLoading}
                  totalCount={tab.totalCount}
                  changePage={changePage}
                  curPage={params.offset}
                />
              </Tabs.Item>
            ))}
        </Tabs>
      </div>
    </div>
  );
}
