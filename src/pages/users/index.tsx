import { useEffect, useState } from "react";
import { useAuthStore } from "@store";
import { GetAllUsers } from "@auth-interface";
import { GlobalPagination, GlobalSearch, TableSkeleton } from "@ui";
import { AddEmployeeModal, AskModal } from "@modals";
import { Table, Tooltip } from "flowbite-react";
import { banIcon, changeRoleIcon, deleteIcon, eyeIcon } from "@global-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { setDataToCookie } from "@cookie";

const TableHeader = [
  { key: "FullName", value: "Full Name" },
  { key: "Username", value: "User Name" },
  { key: "Email", value: "Email" },
  { key: "DateOfBirth", value: "Date Of Birth" },
];

const UsersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { get_all_users, data, isLoading, totalCount } = useAuthStore();
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
  }, [params]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: value,
    }));
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      // await deleteUser(userId);
      console.log(`User with ID ${userId} deleted.`);

      // get_all_users(params);
      return true;
    } catch (error) {
      console.error("Delete user error:", error);
    }
  };

  return (
    <div className="p-4 md:pl-[275px] w-full h-[110vh] pt-[70px]">
      <div>
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between p-3 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
          <GlobalSearch />
          <AddEmployeeModal />
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
                data?.length > 0 ? (
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
                        <Tooltip content="Look">
                          <button
                            onClick={() => {
                              setDataToCookie("user_id", row.Id);
                              navigate(`user:${row.Id}`);
                              window.location.reload();
                            }}
                          >
                            {eyeIcon}
                          </button>
                        </Tooltip>
                        <AskModal
                          onDelete={() => handleDeleteUser(row.Id)}
                          title="Are you sure you want to change this user's role to HR?"
                          tooltip="Change role to HR"
                          icon={changeRoleIcon}
                          btncolor="blue"
                        />
                        <AskModal
                          onDelete={() => handleDeleteUser(row.id)}
                          title="Are you sure you want to block this user?"
                          tooltip="Block"
                          icon={banIcon}
                        />
                        <AskModal
                          onDelete={() => handleDeleteUser(row.id)}
                          title="Are you sure you want to delete this user?"
                          tooltip="Delete"
                          icon={deleteIcon}
                        />
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
