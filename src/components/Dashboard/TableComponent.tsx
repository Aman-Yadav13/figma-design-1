import { select } from "d3";
import React from "react";
import DataTableBase from "./CustomDataTable.tsx";

const columns = [
  {
    name: "Account Name",
    selector: (row: { account_name: any }) => row.account_name,
    sortable: true,
  },
  {
    name: "Legal Name",
    selector: (row: { legal_name: any }) => row.legal_name,
    sortable: true,
  },
  {
    name: "Value",
    selector: (row: { value: any }) => row.value,
    sortable: true,
  },
  {
    name: "Contract Stage",
    selector: (row: { contract_stage: any }) => row.contract_stage,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: { status: any }) => row.status,
    sortable: true,
  },
  {
    name: "Product sold/purchased",
    selector: (row: { sales: any }) => row.sales,
    sortable: true,
  },
  {
    name: "Industry",
    selector: (row: { industry: any }) => row.industry,
    sortable: true,
  },
  {
    name: "Contract Type",
    selector: (row: { type: any }) => row.type,
    sortable: true,
  },
  {
    name: "Activity",
    selector: (row: { activity: any }) => row.activity,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    account_name: "Kaushik",
    legal_name: "Kaushik",
    value: "1,00,000",
    contract_stage: (
      <select
        id="countries_disabled"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>tag1</option>
        <option value="US">option1</option>
        <option value="CA">option2</option>
        <option value="FR">option3</option>
        <option value="DE">option4</option>
      </select>
    ),
    status: (
      <select
        id="countries_disabled"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
      >
        <option selected>tag2</option>
        <option value="US">option1</option>
        <option value="CA">option2</option>
        <option value="FR">option3</option>
        <option value="DE">option4</option>
      </select>
    ),
    sales: "XCEYWFRYY",
    industry: "CEYW@FRYY",
    type: "CEYW@FRYY",
    activity: "",
  },
];

export const TableComponent = () => {
  return <DataTableBase columns={columns} data={data} />;
};
