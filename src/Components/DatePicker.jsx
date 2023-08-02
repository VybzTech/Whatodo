import React from "react";
// Initialization for ES Users
import { Datepicker, Input, initTE } from "tw-elements";

const DatePick = ({ name,change,val }) => {
  // initTE({ Datepicker, Input });
  // const datepickerDisablePast = document.getElementById(
  //   "datepicker-disable-past"
  // );
  // new Datepicker(datepickerDisablePast, {
  //   disablePast: true,
  // });

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        name={name}
        className="text-md text-gray-400 mb-1.5 font-semibold"
      >
        {name} Date
      </label>

      <input 
      onChange={(e) => {
        change(e.target.value);
      }}
      value={val}
      placeholder="dd/mm/yyyy"
      className="text-sm w-90 px-4 py-2 bg-white font-normal rounded rounded-md Capitalize border border-1.5 bg-gray-50 placeholder:opacity-40 placeholder:tracking-wide focus:outline-none placeholder:text-small placeholder:tracking-xs"
      type="date" name={name} id={name} />
      {/* <div
        className="relative mb-3"
        data-te-datepicker-init
        id="datepicker-disable-past"
        // data-te-inline="true"
        data-te-format="dd mmm, yyyy"
        // data-te-input-wrapper-init
      >
        <input
          type="text"
          //min-h-[auto]  w-90 px-3 py-[0.32rem] leading-[1.6]
          className="min-h-[auto] w-full px-3 py-[0.32rem] leading-[1.6] peer block rounded border-0 bg-transparent  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date"
        />
        <label
          for="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Select a date
        </label>
      </div> */}
    </div>
  );
};

export default DatePick;
