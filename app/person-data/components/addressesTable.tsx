"use client";
import { TAddress } from "../../../utils/person-data/data";

interface RowsProps {
  rows: TAddress[];
}
export default function AddressesTable(addresses: RowsProps) {
  return (
    <>
      <table className="table bg-neutral">
        <thead>
          <tr className="text-sm rounded-xl text-primary-content">
            <th className="bg-primary">ID</th>
            <th className="bg-primary">Address</th>
            <th className="bg-primary">Zip</th>
            <th className="bg-primary">State</th>
          </tr>
        </thead>
        <tbody>
          {addresses?.rows?.map((addrData) => (
            <tr key={addrData.id}>
              <td className="px-4 py-3">{addrData?.id}</td>
              <td className="px-4 py-3">{addrData?.address}</td>
              <td className="px-4 py-3">{addrData?.zip}</td>
              <td className="px-4 py-3">{addrData?.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
