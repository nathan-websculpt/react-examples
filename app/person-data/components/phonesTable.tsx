"use client";
import { TPhone } from "../../../utils/person-data/data";

interface RowsProps {
  rows: TPhone[];
}
export default function PhonesTable(phones: RowsProps) {
  return (
    <>
      <table className="table bg-neutral">
        <thead>
          <tr className="text-sm rounded-xl text-primary-content">
            <th className="bg-primary">ID</th>
            <th className="bg-primary">Number</th>
            <th className="bg-primary">Monthly Bill</th>
          </tr>
        </thead>
        <tbody>
          {phones?.rows?.map((phoneData) => (
            <tr key={phoneData.id}>
              <td className="px-4 py-3">{phoneData?.id}</td>
              <td className="px-4 py-3">{phoneData?.phoneNumber}</td>
              <td className="px-4 py-3">${phoneData?.monthlyBill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
