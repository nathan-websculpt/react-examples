"use client";
import { useState } from "react";
import {
  Address,
  Email,
  Phone,
  User,
  TUser,
} from "../../utils/person-data/data";
import fetchData from "../../utils/person-data/fetchData";
import Rows from "./components/rows";

export default function PersonDataDemo() {
  const [personData, setPersonData] = useState<TUser[]>([]);

  const generateData = () => {
    setPersonData(fetchData(3));
  };

  const testtest1 = () => {
    console.log("test one");
    let newUserObj = User();
    let newEmailObj = Email();
    let newPhoneObj = Phone();
    let newAddressObj = Address();

    console.log("user", newUserObj);
    console.log("email", newEmailObj);
    console.log("phone", newPhoneObj);
    console.log("addr", newAddressObj);
  };

  const testtest2 = () => {
    console.log("test two");
  };

  return (
    <>
      <div className="min-h-screen px-24 pt-5 bg-neutral">
        <a href="/" className="underline">
          GO BACK
        </a>
        <h1>some text here</h1>
        <h1>some more text over there</h1>
        <div className="flex w-24 gap-2">
          <button className="btn btn-primary" onClick={() => generateData()}>
            SPIN UP
          </button>

          <button className="btn btn-primary" onClick={() => testtest1()}>
            TEST ONE
          </button>

          <button className="btn btn-primary" onClick={() => testtest2()}>
            TEST Two
          </button>
        </div>

        <div className="min-h-screen px-24 pt-5 bg-neutral">
          <div className="flex justify-center w-11/12 mt-9 max-w-11/12 sm:mx-auto">
            <div className="w-full overflow-x-auto">
              <table className="table text-xl md:table-md table-sm">
                <thead>
                  <tr className="text-sm rounded-xl text-primary-content">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
