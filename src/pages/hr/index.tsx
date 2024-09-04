import { useEffect, useState } from "react";
import { useHRstore } from "@store";
import { GetAllHR } from "@hr-intf";
import { GlobalPagination, TableSkeleton } from "@ui";
import { DeleteHRModal } from "@modals";
import { Table, Tooltip } from "flowbite-react";
import { eyeIcon } from "@global-icons";
import { useNavigate } from "react-router-dom";
import { setDataToCookie } from "@cookie";

const TableHeader = [
  { key: "FullName", value: "Full Name" },
  { key: "Email", value: "Email" },
  { key: "DateOfBirth", value: "Date Of Birth" },
  { key: "created_at", value: "Created at" },
];

const HRsPage = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { get_all_hr, hrdata, isLoading, totalCount } = useHRstore();
  const [params, setParams] = useState<GetAllHR>({
    limit: 10,
    offset: 1,
  });

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const page = params.get("offset");
  //   const pageNumber = page ? parseInt(page) : 1;
  //   setParams((prevParams) => ({
  //     ...prevParams,
  //     offset: pageNumber,
  //   }));
  // }, [location.search]);

  useEffect(() => {
    get_all_hr(params);
  }, [params]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  };

  return (
    <div className="p-4 md:pl-[275px] w-full h-[110vh] pt-[62px]">
      <div className=" rounded-lg">
        {/* <div className="w-full flex flex-col md:flex-row gap-3 justify-between p-3 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
          <GlobalSearch />
        </div> */}
        <div className="relative overflow-x-auto">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                hrdata?.length > 0 ? (
                  hrdata?.map((row) => (
                    <Table.Row
                      key={row.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header) => (
                        <Table.Cell key={header.key}>
                          {header.key === "DateOfBirth" ||
                          header.key === "created_at"
                            ? `${row[header.key].substring(0, 10)}`
                            : row[header.key]}
                        </Table.Cell>
                      ))}
                      <Table.Cell className="flex gap-3">
                        <Tooltip content="Look">
                          <button
                            onClick={() => {
                              setDataToCookie("hr_id", row.id);
                              navigate(`id:${row.id}`);
                              window.location.reload();
                            }}
                          >
                            {eyeIcon}
                          </button>
                        </Tooltip>
                        <DeleteHRModal id={row.id} />
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No hrdata available
                    </Table.Cell>
                  </Table.Row>
                )
              ) : (
                <TableSkeleton count={params.limit} />
              )}
            </Table.Body>
          </Table>
          {totalCount > 1 && (
            <GlobalPagination
              currentPage={params.offset}
              totalPages={totalCount}
              onPageChange={changePage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HRsPage;
