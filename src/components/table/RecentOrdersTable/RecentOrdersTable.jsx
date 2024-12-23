import * as React from "react";
import TableHeader from "./TableHeader";
import OrderRow from "./OrderRow";
import TablePagination from "./TablePagination";

const orders = [
  {
    product: {
      name: "Handmade Pouch",
      additionalInfo: "+3 other products",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/217a03265e48683dc7b317a79bc84934f116562c50b3e878d9b27a71f59baffc?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df",
    },
    customer: {
      name: "John Bushmill",
      email: "Johnb@mail.com",
    },
    total: "$121.00",
    status: "Processing",
    statusColor: "orange",
  },
  {
    product: {
      name: "Smartwatch E2",
      additionalInfo: "+1 other products",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0697c08479403ad16a0c8d82eb307e7baf239db98749aa96bb429e6647f31517?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df",
    },
    customer: {
      name: "Ilham Budi Agung",
      email: "ilahmbudi@mail.com",
    },
    total: "$590.00",
    status: "Processing",
    statusColor: "orange",
  },
  {
    product: {
      name: "Smartwatch E1",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa1f4eb3073617b626692a9375c81f3f9666964ebc78e1f59fb5f970ae6f36b6?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df",
    },
    customer: {
      name: "Mohammad Karim",
      email: "m_karim@mail.com",
    },
    total: "$125.00",
    status: "Shiped",
    statusColor: "sky",
  },
  {
    product: {
      name: "Headphone G1 Pro",
      additionalInfo: "+1 other products",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ea036dcb0e212282904a49c83c0620568a103e6e0bd24208808253b6ddeef17?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df",
    },
    customer: {
      name: "Linda Blair",
      email: "lindablair@mail.com",
    },
    total: "$348.00",
    status: "Shiped",
    statusColor: "sky",
  },
  {
    product: {
      name: "Iphone X",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0365744eb4be55fac430390130ee7ae25b510fe2785f33dbbc157cdc588c43a1?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df",
    },
    customer: {
      name: "Josh Adam",
      email: "josh_adam@mail.com",
    },
    total: "$607.00",
    status: "Delivered",
    statusColor: "teal",
  },
];

function RecentOrdersTable() {
  return (
    <div className="flex overflow-hidden flex-col rounded-lg shadow-lg max-w-[744px]">
      <TableHeader />
      <div className="flex overflow-hidden flex-wrap items-start w-full max-md:max-w-full">
        {orders.map((order, index) => (
          <OrderRow key={index} {...order} />
        ))}
      </div>
      <TablePagination />
    </div>
  );
}

export default RecentOrdersTable;
