import React, { useState } from "react";
import { StackedBarChart } from "./BarChart.tsx";
import { IoTriangleSharp } from "react-icons/io5";
import { TableComponent } from "./TableComponent.tsx";

export const Dashboard = ({ openSidebar }: { openSidebar: boolean }) => {
  return (
    <>
      <div className="h-[2000px] w-full flex">
        <div
          className={`flex-1 pl-4 mt-4 pr-4 ${
            openSidebar ? "ml-[266px]" : "ml-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="border border-gray-100 px-2 py-2 rounded-sm">
              <div className="flex items-center gap-1">
                <div className="bg-gray-100 px-2 py-1 rounded-sm text-sm">
                  24 Jan 2024
                </div>
                <p>to</p>
                <div className="bg-gray-100 px-2 py-1 rounded-sm text-sm">
                  20 Mar 2024
                </div>
              </div>
            </div>
            <div className="border border-gray-100 px-2 py-2 rounded-sm">
              <div className="flex items-center justify-center">
                <div className="px-2 py-1 bg-gray-100 text-md text-sm">
                  Download Report
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-12 gap-8 mt-4">
            {/* TotalLeadsChart */}
            <div className="w-full bg-white border-b border-r rounded-2xl h-[370px] pr-2 pl-4 py-2 flex-col flex justify-between shadow-sm shadow-gray-300 col-span-7">
              <div className="flex items-center justify-between">
                <div className="text-xl">
                  <div className="font-bold text-2xl">Total Leads</div>
                  <div className="-mt-2">100</div>
                </div>
                <div className="text-sm text-gray-500 self-start">100%</div>
              </div>
              <div className="flex flex-row justify-between flex-1">
                <div className="mt-auto">
                  <div className="font-medium text-lg">122</div>
                  <div className="text-md -mt-3">per month</div>
                </div>
                <div className="bg-gradient-to-b from-gray-100 to-gray-50 h-full w-2/3 rounded-xl pl-4 pr-2 py-2 flex-col flex justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold">Total Demos</div>
                      <div className="text-lg -mt-1">40</div>
                    </div>
                    <div className="text-sm text-gray-500 self-start">40%</div>
                  </div>
                  <div className="flex flex-row justify-between flex-1">
                    <div className="mt-auto">
                      <div className="font-medium text-lg">35</div>
                      <div className="-mt-3">per month</div>
                    </div>
                    <div className="bg-gradient-to-b from-gray-100 border-l-2 border-t-2 border-r-2 border-white to-gray-50  h-full w-2/3 rounded-xl pl-4 pr-2 flex-col flex justify-between py-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-md font-bold">
                            Total Closures
                          </div>
                          <div className="text-md -mt-1">10</div>
                        </div>
                        <div className="text-sm text-gray-500 self-start">
                          25%
                        </div>
                      </div>
                      <div className="flex flex-row justify-between flex-1">
                        <div className="mt-auto">
                          <div className="font-medium text-md">8</div>
                          <div className="-mt-3">per month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DealConversionChart */}
            <div className="col-span-4 bg-gray-50 bg-opacity-30 border-b border-r rounded-2xl h-[370px] pr-2 pl-4 py-2 flex-col flex shadow-sm shadow-gray-300">
              <div className="font-bold text-xl">Deal Conversion</div>
              <div className="mt-4 h-full overflow-hidden flex items-center justify-center relative">
                <div className="h-full aspect-square bg-gray-50 border-2 border-white flex items-end justify-center rounded-full shadow-sm shadow-gray-200 relative">
                  <div className="absolute top-2">
                    <img src="/svg1.svg" />
                  </div>
                  <div className="h-[85%] bg-gray-100 aspect-square rounded-full flex items-end justify-center border-2 border-white relative">
                    <div className="absolute -top-2 text-[11px] font-semibold">
                      50%
                    </div>
                    <div className="absolute top-4">
                      <img src="/svg1.svg" />
                    </div>
                    <div className="h-[80%] bg-gray-50 aspect-square rounded-full flex items-end justify-center border-2 border-white relative">
                      <div className="absolute -top-2 text-[11px] font-semibold">
                        50%
                      </div>
                      <div className="absolute top-5">
                        <img src="/svg1.svg" />
                      </div>
                      <div className="h-[75%] bg-gray-100 aspect-square rounded-full flex items-end justify-center border-2 border-white relative">
                        <div className="absolute -top-2 text-[11px] font-semibold">
                          50%
                        </div>
                        <div className="absolute top-5">
                          <img src="/svg1.svg" />
                        </div>
                        <div className="h-[70%] bg-gray-50 aspect-square rounded-full flex items-end justify-center border-2 border-white relative">
                          <div className="absolute -top-2 text-[11px] font-semibold">
                            50%
                          </div>
                          <div className="absolute top-4">
                            <img src="/svg1.svg" />
                          </div>
                          <div className="h-[65%] bg-gray-100 aspect-square rounded-full flex items-end justify-center border-2 border-white relative">
                            <div className="absolute -top-2 text-[11px] font-semibold">
                              50%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 grid grid-cols-11 h-[400px] gap-6">
            <div className="col-span-7 shadow-sm shadow-gray-300 bg-gray-50 py-4 px-5 rounded-xl">
              <StackedBarChart />
            </div>
            <div className="col-span-4 overflow-x-hidden">
              <div className="flex gap-6">
                <div className="px-4 py-4 bg-gray-50 w-fit h-fit rounded-2xl shadow-md shadow-gray-200 border-gray-100 border">
                  <div className="font-bold text-2xl flex">
                    <p>$ </p>
                    <p className="ml-2">239,760</p>
                  </div>
                  <div className="text-md mt-1">Total MIB</div>
                </div>
                <div className="px-4 py-4 bg-gray-50 h-fit rounded-2xl shadow-md shadow-gray-200 border-gray-100 border w-fit">
                  <div className="font-bold text-2xl">3</div>
                  <div className="text-md mt-1">Average Deal Duration</div>
                </div>
              </div>
              <div className="flex gap-6 mt-4">
                <div className="px-4 py-4 bg-gray-50 w-fit h-fit rounded-2xl shadow-md shadow-gray-200 border-gray-100 border">
                  <div className="font-bold text-2xl flex">
                    <p>$ </p>
                    <p className="ml-2">239,760</p>
                  </div>
                  <div className="flex items-center  gap-1 mt-2">
                    <IoTriangleSharp className="fill-red-600 text-sm" />
                    <p className="font-bold text-sm text-red-600">12%</p>
                  </div>
                  <div className="text-md">Average Deal Value</div>
                </div>
                <div className="px-4 py-4 bg-gray-50 h-fit rounded-2xl shadow-md shadow-gray-200 border-gray-100 border w-fit">
                  <div className="font-bold text-2xl">3</div>
                  <div className="flex items-center  gap-1 mt-2">
                    <IoTriangleSharp className="fill-green-600 text-sm" />
                    <p className="font-bold text-sm text-green-600">12%</p>
                  </div>
                  <div className="text-md">Revenue(per month)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <TableComponent />
          </div>
        </div>
      </div>
    </>
  );
};
