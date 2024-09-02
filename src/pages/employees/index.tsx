import { useEffect, useState } from "react";
import { useEmpStore } from "@store";
import { GetAllEmployees } from "@emp-intf";
import { GlobalPagination, GlobalSearch, TableSkeleton } from "@ui";
import { DeleteEmpModal, EmployeeActionModal } from "@modals";
import { Table, Tooltip } from "flowbite-react";
import { eyeIcon } from "@global-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { setDataToCookie } from "@cookie";

const TableHeader = [
  { key: "FullName", value: "Full Name" },
  { key: "Email", value: "Email" },
  { key: "DateOfBirth", value: "Date Of Birth" },
  { key: "position", value: "Position" },
];

const UsersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { empdata, isLoading, totalCount, get_all_emp } = useEmpStore();
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<GetAllEmployees>({
    position: search,
    limit: 10,
    offset: 1,
  });  

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("offset");
    const pageNumber = page ? parseInt(page) : 1;
    const searchu = params.get("search") || "";
    setSearch(searchu);
    setParams((prevParams) => ({
      ...prevParams,
      offset: pageNumber,
      position: searchu,
    }));
  }, [location.search]);

  useEffect(() => {
    get_all_emp(params);
  }, [params]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  };

  return (
    <div className="p-4 md:pl-[275px] pt-[70px]">
      <div>
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between p-3 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
          <GlobalSearch />
        </div>
        <div className="relative overflow-x-auto">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-b-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                empdata?.length > 0 ? (
                  empdata?.map((row) => (
                    <Table.Row
                      key={row.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header) => (
                        <Table.Cell key={header.key}>
                          {header.key === "DateOfBirth"
                            ? `${row[header.key].substring(0, 10)}`
                            : row[header.key]}
                        </Table.Cell>
                      ))}
                      <Table.Cell className="flex gap-3">
                        <Tooltip content="Look">
                          <button
                            onClick={() => {
                              setDataToCookie("emp_id", row.id);
                              navigate(`employee:${row.id}`);
                              window.location.reload();
                            }}
                          >
                            {eyeIcon}
                          </button>
                        </Tooltip>
                        <EmployeeActionModal id={row.id}  isBlock={row.is_blocked}/>
                        <DeleteEmpModal id={row.id} />
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No data available
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

export default UsersPage;
