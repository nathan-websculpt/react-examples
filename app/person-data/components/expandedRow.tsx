"use client";
import { TUser } from "../../../utils/person-data/data";
import EmailsTable from "./emailsTable";
import PhonesTable from "./phonesTable";
import AddressesTable from "./addressesTable";

interface RowsProps {
  row: TUser;
}
export default function ExpandedRow(person: RowsProps) {
  return (
    <>
      {/* 3 tabs, each holding their own table */}
      <div className="w-11/12">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name={`my_tabs_${ person.row.id }`}
            role="tab"
            className="tab"
            aria-label="Addresses"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
          >
            <AddressesTable rows={person.row.addresses} />
          </div>

          <input
            type="radio"
            name={`my_tabs_${ person.row.id }`}
            role="tab"
            className="tab"
            aria-label="Emails"
          />
          <div
            role="tabpanel"
            className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
          >
            <EmailsTable rows={person.row.emails} />
          </div>

          <input
            type="radio"
            name={`my_tabs_${ person.row.id }`}
            role="tab"
            className="tab"
            aria-label="Phones"
          />
          <div
            role="tabpanel"
            className="p-10 tab-content bg-base-100 border-base-300 rounded-box"
          >
            <PhonesTable rows={person.row.phones} />
          </div>
        </div>
      </div>
    </>
  );
}
