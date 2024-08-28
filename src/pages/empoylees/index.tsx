import { GlobalSearch } from "@ui";
import { AddEmpoyleeModal } from "@modals";
import { Table } from "flowbite-react";

const Empoylees = () => {
  return (
    <div className="p-4 md:pl-[275px] w-full h-[110vh] pt-[70px]">
      <div className="overflow-x-auto w-full">
        <div className="w-full flex justify-between p-3 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
          <GlobalSearch />
          <AddEmpoyleeModal />
        </div>
        <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-b-lg">
          <Table.Head>
            <Table.HeadCell>1</Table.HeadCell>
            <Table.HeadCell>1</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
            <Table.Row className="">
              <Table.Cell>WWW</Table.Cell>
              <Table.Cell>WWW</Table.Cell>
            </Table.Row>
            <Table.Row className="">
              <Table.Cell>WWW</Table.Cell>
              <Table.Cell>WWW</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Empoylees;
