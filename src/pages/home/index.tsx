import { Table, Tabs } from "flowbite-react";
import { useMonitoringStore } from "@store";
import { useEffect } from "react";
import { TableSkeleton } from "@ui";

export default function Home() {
  const {
    get_daily,
    get_weekly,
    get_monthly,
    isLoading,
    dailydata,
    weeklydata,
    monthlydata,
  } = useMonitoringStore();
  const params = { offset: 1, limit: 0 };

  useEffect(() => {
    get_daily(params);
    get_weekly(params);
    get_monthly(params);
  }, []);

  const TableHeader = [
    { key: "full_name", value: "Full Name" },
    { key: "blacklisted_at", value: "Blacklisted at" },
  ];

  return (
    <div className="m-4 md:ml-[275px] mt-[60px] rounded-xl">
      <Tabs aria-label="Default tabs" className="custom-tabs">
        <Tabs.Item active title="Daily">
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
                            ? `${row[header.key].substring(0, 10)}`
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
          Weekly
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
                            ? `${row[header.key].substring(0, 10)}`
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
          Monthly
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
                            ? `${row[header.key].substring(0, 10)}`
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
