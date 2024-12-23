import * as React from "react";

function OrderRow({ product, customer, total, status, statusColor }) {
  return (
    <>
      <div className="flex flex-col w-[217px]">
        <div className="flex gap-2 items-center px-6 py-5 w-full bg-white border-b border-solid border-b-gray-100 max-md:px-5">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <div className="flex shrink-0 self-stretch my-auto w-11 h-11 rounded-lg bg-zinc-200" />
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-sm font-medium tracking-normal leading-none text-neutral-800">
                {product.name}
              </div>
              {product.additionalInfo && (
                <div className="mt-1 text-xs tracking-normal text-gray-500">
                  {product.additionalInfo}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[166px]">
        <div className="flex gap-2 items-center px-6 py-5 w-full bg-white border-b border-solid border-b-gray-100 max-md:px-5">
          <div className="flex gap-2 items-center self-stretch my-auto min-h-[44px]">
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="text-sm font-medium tracking-normal leading-none text-neutral-800">
                {customer.name}
              </div>
              <div className="mt-1 text-xs tracking-normal text-gray-500">
                {customer.email}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink text-sm font-medium tracking-normal leading-none text-gray-500 whitespace-nowrap basis-0">
        <div className="flex gap-2 items-center px-6 py-5 w-full bg-white border-b border-solid border-b-gray-100 max-md:px-5">
          <div className="gap-1 self-stretch my-auto min-h-[44px]">{total}</div>
        </div>
      </div>
      <div className="flex flex-col text-sm font-semibold tracking-normal leading-none whitespace-nowrap w-[138px]">
        <div className="flex gap-2 items-start px-6 py-5 w-full text-center bg-white border-b border-solid border-b-gray-100 max-md:px-5">
          <div className="flex gap-2 justify-center items-center min-h-[44px]">
            <div
              className={`self-stretch px-2.5 py-1 my-auto bg-${statusColor}-50 rounded-lg text-${statusColor}-500`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[98px]">
        <div className="flex gap-2 items-start px-6 py-5 w-full bg-white border-b border-solid border-b-gray-100 max-md:px-5">
          <div className="flex gap-3 justify-center items-center min-h-[44px]">
            <button aria-label="View details">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea036dcb0e212282904a49c83c0620568a103e6e0bd24208808253b6ddeef17?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
            </button>
            <button aria-label="Delete">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0365744eb4be55fac430390130ee7ae25b510fe2785f33dbbc157cdc588c43a1?placeholderIfAbsent=true&apiKey=510dc7b22b894686a8344502cc9e06df"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderRow;
