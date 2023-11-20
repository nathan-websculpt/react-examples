"use client";
import { useState } from "react";
import { TUser } from "../../../utils/person-data/data";
import ExpandedRow from "./expandedRow";

interface RowsProps {
  row: TUser;
}
export default function Rows(person: RowsProps) {
  const [rowOpen, setRowOpen] = useState(false);
  return (
    <>
      {/* VISIBLE ROW */}
      <tr className="text-sm" key={person.row.id.toString()}>
        <td className="w-1/12 md:py-4">
          <svg
            className={`w-6 h-6 z-40  ${rowOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setRowOpen(!rowOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </td>
        <td className="w-1/12 md:py-4">{person.row.id.toString()}</td>
        <td className="w-1/12 md:py-4">{person.row.name}</td>
        <td className="w-1/12 md:py-4">{person.row.email}</td>
        <td className="w-1/12 md:py-4">{person.row.phone}</td>
      </tr>
      {/* END: VISIBLE ROW */}

      {/* HIDDEN ROW */}
      <tr
        className={` ${rowOpen ? "rowOpen" : "hidden"} `}
        key={((person.row.id + 1) * 2.4).toString()} //  TODO: Not sure what the key will be here, yet
      >
        {/* drillable, nested table */}
        <td colSpan={5}>
          <ExpandedRow row={person.row} />
        </td>
      </tr>
      {/* END: HIDDEN ROW */}
    </>
  );
}
// TODO: drillable table needs to display a user's list of addresses
//https://www.tailwindtap.com/components/table/nested-table
