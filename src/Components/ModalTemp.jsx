import React from "react";
import ReactDOM from "react-dom";
const ModalTemp = ({ id, heading, body, footer, showModal, setShowModal }) => {
  if (showModal) {
    document?.getElementById("portal").classList.add("sized");
  } else {
    document?.getElementById("portal").classList.remove("sized");
  }
  return (
    <React.Fragment>
      {showModal
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div
                className="portal h-full overflow-x-hidden overflow-y-auto outline-none bg-filter-blur-1 bg-opacity-50  backdrop-blur-sm bg-gray-200 backdrop-opacity-75"
                id={id}
                aria-labelledby={`${id}Title`}
                role="dialog"
              >
                <div className="pt-14 pb-8 w-auto transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px] min-h-[calc(100%-1rem)] translate-y-[-50px] items-center pointer-events-none">
                  <div className=" pointer-events-auto relative flex flex-col rounded-md border-none bg-white bg-clip-padding shadow-lg outline-none dark:bg-neutral-600">
                    <div className="p-4 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-30  dark:border-opacity-50">
                      {/* <!--Modal title--> */}
                      <h5
                        className="text-2xl pl-3 font-semibold  text-neutral-800 dark:text-neutral-200"
                        id={`${id}ScrollableLabel`}
                      >
                        {heading}
                      </h5>
                      {/* <!--Close button--> */}
                      <button
                        type="button"
                        className="box-content rounded-none border-none p-1 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        aria-label="Close"
                        onClick={() => {
                          setShowModal((m) => !m);
                        }}
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
                    <div className="relative">{body}</div>
                    {footer}
                  </div>
                </div>
              </div>
            </React.Fragment>,
            document.getElementById("portal")
          )
        : ""}
    </React.Fragment>
  );
};

export default ModalTemp;
