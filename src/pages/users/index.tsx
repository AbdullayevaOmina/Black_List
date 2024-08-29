import { useEffect, useState } from "react";
import { useAuthStore } from "@store";
import { GetAllUsers } from "@auth-interface";
import { GlobalPagination, GlobalSearch, TableSkeleton } from "@ui";
import { AddEmpoyleeModal } from "@modals";
import { Dropdown, Table } from "flowbite-react";
import { adjustmentIcon, banIcon } from "@global-icons";
import { useLocation } from "react-router-dom";

const TableHeader = [
  { key: "FullName", value: "Full Name" },
  { key: "Username", value: "User Name" },
  { key: "Email", value: "Email" },
  { key: "DateOfBirth", value: "Date Of Birth" },
];

const UsersPage = () => {
  const { get_all_users, data, isLoading, totalCount } = useAuthStore();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<GetAllUsers>({
    username: search,
    full_name: search,
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
      full_name: searchu,
      username: searchu,
    }));
  }, [location.search]);

  useEffect(() => {
    get_all_users(params);
  }, [params, search]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  };

  return (
    <div className="p-4 md:pl-[275px] w-full h-[110vh] pt-[70px]">
      <div className="overflow-x-auto w-full">
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between p-3 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
          <GlobalSearch />
          <AddEmpoyleeModal />
        </div>
        <div className="relative overflow-x-auto">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-b-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                data?.map((row) => (
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
                      <Dropdown
                        arrowIcon={false}
                        color="transparent"
                        label={adjustmentIcon}
                      >
                        <Dropdown.Item>{banIcon} Block</Dropdown.Item>
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <TableSkeleton />
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
