import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return new Promise((resolve) => {
    resolve([
      {
        id: "728ed52f",
        amount: 1,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 2,
        status: "pending",
        email: "c@example.com",
      },
      {
        id: "728ed52f",
        amount: 3,
        status: "pending",
        email: "l@example.com",
      },
      {
        id: "728ed52f",
        amount: 4,
        status: "pending",
        email: "b@example.com",
      },
      {
        id: "728ed52f",
        amount: 5,
        status: "pending",
        email: "j@example.com",
      },
      {
        id: "728ed52f",
        amount: 6,
        status: "pending",
        email: "a@example.com",
      },
      {
        id: "728ed52f",
        amount: 7,
        status: "pending",
        email: "d@example.com",
      },
      {
        id: "728ed52f",
        amount: 8,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 9,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 10,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 10,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 10,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
    ]);
  });
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
