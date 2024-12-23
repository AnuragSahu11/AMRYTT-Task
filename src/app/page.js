"use client";

import RecentOrdersTable from "@/components/table/RecentOrdersTable/RecentOrdersTable";
import Image from "next/image";
// import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="w-full">
        <div>
          <p className="text-[28px] font-medium">Welcome Back Jenil</p>
          <p className="text-lg text-slate-400 font-normal">
            Lorem ipsum dolor si amet welcome back jenil
          </p>
        </div>
      </div>
      <div className="flex gap-6 w-full">
        <DashboardCard
          cardData={{
            name: "Total Project",
          }}
        />
        <DashboardCard
          cardData={{
            name: "In Progress",
            img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734952312/Badge.svg",
          }}
        />
        <DashboardCard
          cardData={{
            name: "Finished",
            img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734952312/Badge_1.svg",
          }}
        />
        <DashboardCard
          cardData={{
            name: "Unfinished",
            img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734952312/Badge_2.svg",
          }}
        />
      </div>
      <div className="flex gap-6 h-[372px]">
        <RevenueTarget />
        <RevenueTargetChart />
      </div>
      <div className="flex w-full gap-6 h-[498px]">
        <TopProductFirst />
        <TopProduct />
        <TopProductThird />
      </div>
      <div>
        <RecentOrdersTable />
      </div>
    </div>
  );
}

const DashboardCard = ({ cardData }) => {
  const { name, img } = cardData;
  return (
    <div className="bg-white h-[146px] w-full shadow-sm rounded-xl p-[20px]">
      <div className="flex items-center h-full justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium text-fontsec">{name}</h2>
          <div className="text-[32px] font-semibold text-gray-900">6,784</div>
          <div className="flex items-center align-middle gap-2">
            <div className="flex items-center text-green-500 gap-2">
              <span className="ml-1 font-medium">10%</span>
              <img src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734840266/varrow22.svg" />
            </div>
            <div className="text-sm text-fontsec">+$150 today</div>
          </div>
        </div>
        <div className="h-full">
          <img
            className="w-[36px] h-[36px]"
            src={
              img
                ? img
                : "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734804767/Badge222.svg"
            }
          />
        </div>
      </div>
    </div>
  );
};

const RevenueTarget = () => {
  return (
    <div className="bg-white min-w-[360px] p-4 rounded-lg shadow-md">
      <div className="px-2 pb-2">
        <div className="font-bold text-[20px] mb-1">Target</div>
        <p className="text-fontsec text-[14px]">Revenue Target</p>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="">
          <img src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734892517/Chart_1.svg" />
        </div>
      </div>
      <div className="text-center text-gray-600 text-[14px] mt-4">
        You succeed earn $240 today, its higher than yesterday
      </div>
      <div className="flex justify-between mt-4 mx-8">
        <div className="text-center">
          <div className="text-fontsec text-sm">Target</div>
          <div className="text-gray-600 text-[20px] font-bold flex">
            $20k
            <img
              className="ml-1"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734951945/fi-rr-arrow-small-down.svg"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="text-fontsec text-sm">Revenue</div>
          <div className="text-gray-600 text-[20px] font-bold flex">
            $16k
            <img
              className="ml-1"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734951945/fi-rr-arrow-small-up.svg"
            />
          </div>{" "}
        </div>
        <div className="text-center">
          <div className="text-fontsec text-sm">Today</div>
          <div className="text-gray-600 text-[20px] font-bold flex">
            $1.5k
            <img
              className="ml-1"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734951945/fi-rr-arrow-small-up.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  { month: "Jan", revenue: 600, sales: 500 },
  { month: "Feb", revenue: 500, sales: 600 },
  { month: "Mar", revenue: 300, sales: 700 },
  { month: "Apr", revenue: 750, sales: 650 },
  { month: "May", revenue: 450, sales: 750 },
  { month: "Jun", revenue: 1240, sales: 430 },
  { month: "Jul", revenue: 900, sales: 830 },
  { month: "Aug", revenue: 950, sales: 1050 },
  { month: "Sep", revenue: 1000, sales: 900 },
  { month: "Oct", revenue: 850, sales: 750 },
  { month: "Nov", revenue: 400, sales: 900 },
  { month: "Dec", revenue: 500, sales: 600 },
];

const RevenueTargetChart = () => {
  return (
    <div className="bg-white min-w-[60%] w-full p-4 rounded-lg shadow-md">
      <div className="px-2 pb-2">
        <div className="font-bold text-[20px] mb-1">Statistic</div>
        <p className="text-fontsec text-[14px]">Revenue and Sales</p>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid XAxis={null} strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
              <Line type="monotone" dataKey="sales" stroke="#f97316" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const TopProduct = () => {
  const products = [
    { name: "Logic+ Wireless Mouse", category: "Mouse", price: "$1,240" },
    { name: "PS Wireless Controller", category: "Smartphone", price: "$1,189" },
    {
      name: "Ximi Mechanical Keyboard",
      category: "Smartphone",
      price: "$1,100",
    },
    { name: "Audia Tech Earphone", category: "Earphone", price: "$908" },
    { name: "Sams S14 Pro", category: "Tablet", price: "$900" },
    { name: "Sams A13 5G", category: "Smartphone", price: "$870" },
    { name: "Jsound P01 TWS", category: "Earphone", price: "$870" },
  ];
  return (
    <div className="max-w-sm w-[360px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 pt-4 pb-2">
        <div className="font-bold text-[20px] mb-1">Top Product</div>
        <p className="text-fontsec text-[14px]">Top Product in This Month</p>
      </div>
      <ul className="">
        {products.map((product, index) => (
          <li
            key={index}
            className="px-6 py-2 flex justify-between items-center"
          >
            <div className="flex gap-4">
              <img src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734844534/Img.svg" />
              <div>
                <div className="font-medium text-sm">{product.name}</div>
                <div className="text-[12px] text-fontsec">
                  {product.category}
                </div>
              </div>
            </div>
            <div className="text-gray-900 text-sm font-semibold">
              {product.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopProductThird = () => {
  const products = [
    {
      name: "Smartphone",
      category: "Mouse",
      price: "1,240",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734852402/Bagde.svg",
    },
    {
      name: "Tablet",
      category: "Smartphone",
      price: "1,189",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953006/Bagde_2.svg",
    },
    {
      name: "Earphone",
      category: "Smartphone",
      price: "1,100",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953006/Bagde_3.svg",
    },
    {
      name: "Laptop & PC",
      category: "Earphone",
      price: "908",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953006/Bagde_4.svg",
    },
    {
      name: "Mouse",
      category: "Tablet",
      price: "900",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953006/Bagde_5.svg",
    },
    {
      name: "Hardisk & USB Drive",
      category: "Smartphone",
      price: "870",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953006/Bagde_6.svg",
    },
    {
      name: "Camera",
      category: "Earphone",
      price: "870",
      img: "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734953005/Bagde_7.svg",
    },
  ];
  return (
    <div className=" w-[360px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 pt-4 pb-2">
        <div className="font-bold text-[20px] mb-1">Top Category</div>
        <p className="text-fontsec text-[14px]">Top Category in This Month</p>
      </div>
      <ul className="">
        {products.map((product, index) => (
          <li
            key={index}
            className="px-6 py-2 flex justify-between items-center"
          >
            <div className="flex gap-4">
              <img
                src={
                  product?.img
                    ? product.img
                    : "https://res.cloudinary.com/dym0xfe7y/image/upload/v1734844534/Img.svg"
                }
              />{" "}
              <div className="flex items-center">
                <div className="font-medium text-sm">{product.name}</div>
                {/* <div className="text-[12px] text-fontsec">
                  {product.category}
                </div> */}
              </div>
            </div>
            <div className="text-gray-900 text-sm font-semibold flex">
              {product.price}{" "}
              <div className="ml-2 self-stretch px-1 py-1 my-auto text-sm tracking-normal leading-none text-center text-teal-600 bg-emerald-50 rounded-lg">
                +2%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopProductFirst = () => {
  return (
    <div className=" w-[360px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 pt-4 pb-2">
        <div className="font-bold text-[20px] mb-1">Sales Source</div>
      </div>
      <div className="px-6 flex justify-between">
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734886001/Chart.svg"
        />
      </div>
      <div className="px-6 pt-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="mr-2"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734887018/Dot_3.svg"
            />
            Official Website
          </div>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="mr-2"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734887019/Dot.svg"
            />
            Offline Store
          </div>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="mr-2"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734887018/Dot_1.svg"
            />
            Amazon Store
          </div>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="mr-2"
              src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734887018/Dot_2.svg"
            />
            Official Website
          </div>
          <p>$10,000</p>
        </div>
      </div>
    </div>
  );
};
