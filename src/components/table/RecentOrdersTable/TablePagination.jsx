import * as React from "react";

function TablePagination() {
  return (
    <div className="flex flex-wrap gap-3 items-center px-6 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto text-sm font-medium tracking-normal leading-none text-gray-500 basis-0 max-md:max-w-full">
        Showing 1-5 from 100
      </div>
      <div className="flex gap-2 items-start self-stretch my-auto">
        <button
          aria-label="Previous page"
          className="flex overflow-hidden gap-1 justify-center items-center px-1.5 w-8 h-8 bg-blue-50 rounded-lg min-h-[32px]"
        >
          <div className="flex gap-2 justify-center items-center self-stretch p-0.5 my-auto w-5 min-h-[20px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa1786a24f6e59c0ed649f797d980c25c1d520a318de93d0bb50a3e691ef6081?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </button>
        <button className="overflow-hidden flex-1 shrink gap-1 self-stretch px-1.5 w-8 h-8 text-sm font-semibold tracking-normal leading-none text-center text-white whitespace-nowrap bg-cyan-600 rounded-lg min-h-[32px]">
          1
        </button>
        <button className="overflow-hidden flex-1 shrink gap-1 self-stretch px-1.5 w-8 h-8 text-sm font-semibold tracking-normal leading-none text-center text-cyan-600 whitespace-nowrap bg-blue-50 rounded-lg min-h-[32px]">
          2
        </button>
        <button className="overflow-hidden flex-1 shrink gap-1 self-stretch px-1.5 w-8 h-8 text-sm font-semibold tracking-normal leading-none text-center text-cyan-600 whitespace-nowrap bg-blue-50 rounded-lg min-h-[32px]">
          3
        </button>
        <button className="overflow-hidden flex-1 shrink gap-1 self-stretch px-1.5 w-8 h-8 text-sm font-semibold tracking-normal leading-none text-center text-cyan-600 whitespace-nowrap bg-blue-50 rounded-lg min-h-[32px]">
          ...
        </button>
        <button
          aria-label="Next page"
          className="flex overflow-hidden gap-1 justify-center items-center px-1.5 w-8 h-8 bg-blue-50 rounded-lg min-h-[32px]"
        >
          <div className="flex gap-2 justify-center items-center self-stretch p-0.5 my-auto w-5 min-h-[20px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33b3dce6310cd55cf4ddb9fe97f5258402c8376397c7c567d6ae60a1f4f6acab?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default TablePagination;
