import { Table, Tabs } from "flowbite-react";
import { useMonitoringStore } from "@store";
import { useEffect } from "react";
import { TableSkeleton } from "@ui";

export default function Home() {
  const {
    get_daily,
    get_weekly,
    get_monthly,
    get_all,
    isLoading,
    dailydata,
    weeklydata,
    monthlydata,
    alldata,
  } = useMonitoringStore();
  const params = { offset: 1, limit: 100 };

  useEffect(() => {
    get_daily(params);
    get_weekly(params);
    get_monthly(params);
    get_all(params);
  }, []);

  const TableAllHeader = [
    { key: "FullName", value: "Full Name" },
    // { key: "DateOfBirth", value: "Date Of Birth" },
    { key: "position", value: "Position" },
    { key: "blacklisted_at", value: "Blacklisted at" },
    { key: "reason", value: "Reason" },
  ];

  const TableHeader = [
    { key: "full_name", value: "Full Name" },
    { key: "blacklisted_at", value: "Blacklisted at" },
  ];

  const formatDate = (dateString: string | undefined) => {
    return dateString ? dateString.substring(0, 10) : "N/A";
  };

  return (
    <div className="m-4 md:ml-[275px] mt-[60px] rounded-xl">
      <Tabs aria-label="Default tabs" className="custom-tabs">
        <Tabs.Item active title="All">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
            <Table.Head>
              {TableAllHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                alldata?.length > 0 ? (
                  alldata?.map((row) => (
                    <Table.Row
                      key={row.Id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableAllHeader.map((header) => (
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
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No alldata available
                    </Table.Cell>
                  </Table.Row>
                )
              ) : (
                <TableSkeleton count={3} />
              )}
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Daily">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                dailydata?.length > 0 ? (
                  dailydata?.map((row) => (
                    <Table.Row
                      key={row.Id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header) => (
                        <Table.Cell key={header.key}>
                          {header.key === "blacklisted_at"
                            ? formatDate(row[header.key])
                            : row[header.key]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No dailydata available
                    </Table.Cell>
                  </Table.Row>
                )
              ) : (
                <TableSkeleton count={3} />
              )}
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Weekly">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                weeklydata?.length > 0 ? (
                  weeklydata?.map((row) => (
                    <Table.Row
                      key={row.Id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header) => (
                        <Table.Cell key={header.key}>
                          {header.key === "blacklisted_at"
                            ? formatDate(row[header.key])
                            : row[header.key]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No weeklydata available
                    </Table.Cell>
                  </Table.Row>
                )
              ) : (
                <TableSkeleton count={3} />
              )}
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Monthly">
          <Table className="bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg">
            <Table.Head>
              {TableHeader.map((item) => (
                <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y w-full divide-gray-300 dark:divide-gray-600 text-black dark:text-white">
              {!isLoading ? (
                monthlydata?.length > 0 ? (
                  monthlydata?.map((row) => (
                    <Table.Row
                      key={row.Id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header) => (
                        <Table.Cell key={header.key}>
                          {header.key === "blacklisted_at"
                            ? formatDate(row[header.key])
                            : row[header.key]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={TableHeader.length + 1}
                      className="text-center"
                    >
                      No monthlydata available
                    </Table.Cell>
                  </Table.Row>
                )
              ) : (
                <TableSkeleton count={3} />
              )}
            </Table.Body>
          </Table>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
