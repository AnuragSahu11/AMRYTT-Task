import * as React from "react";

function TableHeader() {
  return (
    <div className="flex flex-wrap gap-3 items-center px-6 py-5 w-full bg-white border-b border-solid border-b-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto font-semibold basis-7 min-w-[240px]">
        <div className="self-stretch my-auto text-xl tracking-wide text-neutral-800">
          Recent Orders
        </div>
        <div className="self-stretch px-2.5 py-1 my-auto text-sm tracking-normal leading-none text-center text-teal-600 bg-emerald-50 rounded-lg">
          +2 Orders
        </div>
      </div>
      <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3.5 py-2.5 my-auto bg-white rounded-lg border border-solid border-zinc-200">
        <div className="flex gap-2 justify-center items-center self-stretch p-0.5 my-auto w-5 min-h-[20px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/217a03265e48683dc7b317a79bc84934f116562c50b3e878d9b27a71f59baffc?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
            alt=""
            className="object-contain self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="self-stretch my-auto text-sm tracking-normal leading-none text-gray-400">
          Select Date
        </div>
      </div>
      <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3.5 py-2.5 my-auto bg-white rounded-lg border border-solid border-zinc-200">
        <div className="flex gap-2 justify-center items-center self-stretch p-0.5 my-auto w-5 min-h-[20px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0697c08479403ad16a0c8d82eb307e7baf239db98749aa96bb429e6647f31517?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
            alt=""
            className="object-contain self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="self-stretch my-auto text-sm font-medium tracking-normal leading-none text-gray-500">
          Filters
        </div>
      </div>
      <button className="overflow-hidden gap-2 self-stretch px-3.5 py-2.5 my-auto text-sm font-semibold tracking-normal leading-none text-cyan-600 bg-blue-50 rounded-lg">
        See All
      </button>
    </div>
  );
}

export default TableHeader;
