"use client";
import { TEmail } from "../../../utils/person-data/data";

interface RowsProps {
  rows: TEmail[];
}
export default function EmailsTable(emails: RowsProps) {
  return (
    <>
      <table className="px-10 mx-auto w-fit">
        <thead>
          <tr className="text-sm rounded-xl text-base-content">
            <th className="bg-primary">ID</th>
            <th className="bg-primary">Account</th>
            <th className="bg-primary">Email</th>
          </tr>
        </thead>
        <tbody>
          {emails?.rows?.map((emailData) => (
            <tr key={emailData.id}>
              <td className="px-4 py-3">{emailData?.id}</td>
              <td className="px-4 py-3">{emailData?.account}</td>
              <td className="px-4 py-3">{emailData?.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
