import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Table, Tabs } from "flowbite-react";
import { useMonitoringStore } from "@store";
import { GlobalPagination, TableSkeleton } from "@ui";
import { getDataFromCookie } from "@cookie";

const TableContent = ({
  data,
  headers,
  isLoading,
  totalCount,
  changePage,
}: any) => {
  return (
    <div>
      <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
        <Table.Head>
          {headers.map((item: any) => (
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
                  {headers.map((header: any) => (
                    <Table.Cell key={header.key}>
                      {header.key === "blacklisted_at" ||
                      header.key === "DateOfBirth"
                        ? row[header.key].substring(0, 10)
                        : header.key === "reason"
                        ? `${row[header.key].substring(0, 30)}`
                        : row[header.key]}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={headers.length} className="text-center">
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
          currentPage={1}
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
  const [params, setParams] = useState({ offset: 1, limit: 10 });
  const role = getDataFromCookie("role") !== "user" && "employee";

  useEffect(() => {
    get_all_data(params);
  }, [params]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("offset");
    const pageNumber = page ? parseInt(page) : 1;
    setParams((prevParams) => ({
      ...prevParams,
      offset: pageNumber,
    }));
  }, [location.search]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  };

  const TableHeader = [
    { key: "FullName", value: "Full Name" },
    { key: "position", value: "Position" },
    { key: "blacklisted_at", value: "Blacklisted at" },
    { key: "reason", value: "Reason" },
  ];

  return (
    <div className="m-4 md:ml-[275px] mt-[60px] rounded-xl">
      <div className="relative overflow-x-auto p-1">
        <Tabs aria-label="Default tabs" className="custom-tabs w-full">
          {role && (
            <Tabs.Item active title="All">
              <TableContent
                data={alldata}
                headers={TableHeader}
                isLoading={isLoading}
                totalCount={AtotalCount}
                changePage={changePage}
              />
            </Tabs.Item>
          )}
          <Tabs.Item title="Daily">
            <TableContent
              data={dailydata}
              headers={TableHeader}
              isLoading={isLoading}
              totalCount={DtotalCount}
              changePage={changePage}
            />
          </Tabs.Item>
          <Tabs.Item title="Weekly">
            <TableContent
              data={weeklydata}
              headers={TableHeader}
              isLoading={isLoading}
              totalCount={WtotalCount}
              changePage={changePage}
            />
          </Tabs.Item>
          <Tabs.Item title="Monthly">
            <TableContent
              data={monthlydata}
              headers={TableHeader}
              isLoading={isLoading}
              changePage={changePage}
              totalCount={MtotalCount}
            />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}
