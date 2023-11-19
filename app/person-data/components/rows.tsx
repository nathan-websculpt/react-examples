"use client";
import { useState } from "react";
import { userObj } from "../../../utils/person-data/data";

interface RowsProps {
  row: userObj;
}
export default function Rows(person: RowsProps) {
  const [rowOpen, setRowOpen] = useState(false);
  return (
    <>
      <tr className="text-sm" key={person.row.id.toString()}>
        <td className="w-1/12 md:py-4">
          <svg
            className={`text-black w-6 h-6 z-40  ${
              rowOpen ? "rotate-180" : "rotate-0"
            }`}
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

        {/* drillable nested table */}
        <td colSpan={9}>
          {/* TODO: three tabs with tables */}
          <div
            className={`px-10 w-fit  ${rowOpen ? "block" : "hidden"} mx-auto`}
          >
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Addresses"
                // checked
                // onChange={() => console.log('tab 1 selected')}
              />
              <div
                role="tabpanel"
                className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
              >

                {/* TODO: new component */}
                <table
                  className={`px-10 w-fit  ${
                    rowOpen ? "block" : "hidden"
                  } mx-auto`}
                >
                  <thead>
                    <tr className="text-sm rounded-xl text-base-content">
                      <th className="bg-primary">ID</th>
                      <th className="bg-primary">Address</th>
                      <th className="bg-primary">Zip</th>
                      <th className="bg-primary">State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {person.row.addresses?.map((addrData) => (
                      <tr key={addrData.id}>
                        <td className="px-4 py-3">{addrData?.id}</td>
                        <td className="px-4 py-3">{addrData?.address}</td>
                        <td className="px-4 py-3">{addrData?.zip}</td>
                        <td className="px-4 py-3">{addrData?.state}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>


              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Emails"
              />
              <div
                role="tabpanel"
                className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
              >
                
                {/* TODO: new component */}
                <table
                  className={`px-10 w-fit  ${
                    rowOpen ? "block" : "hidden"
                  } mx-auto`}
                >
                  <thead>
                    <tr className="text-sm rounded-xl text-base-content">
                      <th className="bg-primary">ID</th>
                      <th className="bg-primary">Account</th>
                      <th className="bg-primary">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {person.row.emails?.map((emailData) => (
                      <tr key={emailData.id}>
                        <td className="px-4 py-3">{emailData?.id}</td>
                        <td className="px-4 py-3">{emailData?.account}</td>
                        <td className="px-4 py-3">{emailData?.emailAddress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Phones"
              />
              <div
                role="tabpanel"
                className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
              >
                
                
                {/* TODO: new component */}
                <table
                  className={`px-10 w-fit  ${
                    rowOpen ? "block" : "hidden"
                  } mx-auto`}
                >
                  <thead>
                    <tr className="text-sm rounded-xl text-base-content">
                      <th className="bg-primary">ID</th>
                      <th className="bg-primary">Number</th>
                      <th className="bg-primary">Monthly Bill</th>
                    </tr>
                  </thead>
                  <tbody>
                    {person.row.phones?.map((phoneData) => (
                      <tr key={phoneData.id}>
                        <td className="px-4 py-3">{phoneData?.id}</td>
                        <td className="px-4 py-3">{phoneData?.phoneNumber}</td>
                        <td className="px-4 py-3">${phoneData?.monthlyBill}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>


              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
// TODO: drillable table needs to display a user's list of addresses
//https://www.tailwindtap.com/components/table/nested-table
