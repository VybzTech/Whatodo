import React from "react";
import { Modal, Ripple, initTE } from "tw-elements";
const ModalTemp = ({ id, heading, body, footer }) => {
  initTE({ Modal, Ripple });
  return (
    <div
      data-te-modal-init
      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-filter-blur-1 bg-opacity-50 bg-neutral-800"
      // className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-filter-blur-1 bg-opacity-50 bg-neutral-800 "
      //   id="CreateTodoForm"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Title`}
      aria-modal="true"
      role="dialog"
    >
      {" "}
      <div
        data-te-modal-dialog-ref
        className="pt-12 pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-30 p-4 dark:border-opacity-50">
            {/* <!--Modal title--> */}
            <h5
              className="text-xl pl-3 font-semibold leading-tight text-neutral-800 dark:text-neutral-200"
              id={`${id}ScrollableLabel`}
            >
              {heading}
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* <!--Modal body--> */}
          <div className="relative p-1">{body}</div>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default ModalTemp;
