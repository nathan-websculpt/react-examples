"use client";
import { useState } from "react";
import { userObj } from "../../utils/person-data/data";
import fetchData from "../../utils/person-data/fetchData";

export default function PersonDataDemo() {
  const [personData, setPersonData] = useState<userObj[]>([]);

  const generateData = () => {
    setPersonData(fetchData(3));
  };

  return (
    <>
      <div className="min-h-screen px-24 pt-5 bg-neutral">
        <a href="/" className="underline">
          GO BACK
        </a>
        <h1>some text here</h1>
        <h1>some more text over there</h1>

        <button className="btn btn-primary" onClick={() => generateData()}>
          SPIN UP
        </button>

        <div className="flex justify-center w-11/12 mt-9 max-w-11/12 sm:mx-auto">
          <div className="w-full overflow-x-auto">
            <table className="table w-full text-xl table-zebra md:table-md table-sm">
              <thead>
                <tr className="text-sm rounded-xl text-base-content">
                  <th className="bg-primary">ID</th>
                  <th className="bg-primary">Name</th>
                  <th className="bg-primary">Email</th>
                  <th className="bg-primary">Phone</th>
                </tr>
              </thead>
              <tbody>
                {personData?.map((person) => (
                  <tr className="text-sm" key={person.id.toString()}>
                    <td className="w-1/12 md:py-4">{person.id.toString()}</td>
                    <td className="w-1/12 md:py-4">{person.name}</td>
                    <td className="w-1/12 md:py-4">{person.email}</td>
                    <td className="w-1/12 md:py-4">{person.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
// TODO: drillable table needs to display a user's list of addresses