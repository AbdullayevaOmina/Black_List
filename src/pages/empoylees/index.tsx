import { AddEmpoyleeModal } from "@modals";
import { Table } from "flowbite-react";
const Empoylees = () => {
  return (
    <div className="p-4 md:pl-[275px] w-full h-[110vh] pt-[75px]">
      <div className="flex justify-end mb-3">
        <AddEmpoyleeModal />
      </div>
      <div className="overflow-x-auto w-full">
        <Table>
          <Table.Head>
            <Table.HeadCell>1</Table.HeadCell>
            <Table.HeadCell>2</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-black dark:text-white">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
