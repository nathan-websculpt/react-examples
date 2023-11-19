"use client";
import { useState } from "react";
import { userObj } from "../../utils/person-data/data";
import fetchData from "../../utils/person-data/fetchData";
import Rows from "./components/rows";

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

        <div className="min-h-screen px-24 pt-5 bg-neutral">
          <div className="flex justify-center w-11/12 mt-9 max-w-11/12 sm:mx-auto">
            <div className="w-full overflow-x-auto">
              <table className="table w-full text-xl md:table-md table-sm">
                <thead>
                  <tr className="text-sm rounded-xl text-base-content">
                    <th className="bg-primary"></th>
                    <th className="bg-primary">ID</th>
                    <th className="bg-primary">Name</th>
                    <th className="bg-primary">Email</th>
                    <th className="bg-primary">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {personData?.map((person) => (
                    <Rows row={person} key={person.id} />
                  ))}
                  <tr>
                    <td colSpan={5}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// TODO: drillable table needs to display a user's list of addresses
