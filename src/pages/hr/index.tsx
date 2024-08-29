// import { useEffect } from "react";
import { GlobalSearch } from "@ui";
import { AddEmpoyleeModal } from "@modals";
import { Table } from "flowbite-react";
// import { useAuthStore } from "@store";
// import { GetAllUsers } from "@auth-interface";

const TableHeader = [
  { key: "Fullname", value: "Full Name" },
  { key: "Username", value: "User Name" },
  { key: "Role", value: "Role" },
  { key: "Email", value: "Email" },
  { key: "DateOfBirth", value: "Date Of Birth" },
];

const UsersPage = () => {
  // const { get_all_users, data } = useAuthStore();

  // const params: GetAllUsers = {
  //   username: "",
  //   full_name: "",
  //   limit: 10,
  //   offset: 1,
  // };

  // useEffect(() => {
  // const resData = get_all_users(params);
  // }, []);

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
              <Table.Row>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
