import React from "react";

import Button from "../../../components/ui/Button";

function Cta() {
  return (
    <div className="h-auto w-full bg-cta-pattern md:h-full">
      <div className="mx-auto h-full max-w-5xl">
        <div className="flex h-full flex-col-reverse md:flex-row">
          <div className="h-full w-full md:w-1/2">
            <div className="flex h-full items-center">
              <div className="flex w-full flex-col p-2">
                <h1 className="whitespace-pre-wrap text-4xl font-bold">
                  {`Online Resume Builder\nCreate your own Professional Resume`}
                </h1>
                <span className="text-gray-600">
                  Create your beautiful resume easily.
                </span>
                <div className="text-center md:text-left">
                  <a href="#">
                    <Button text="Build a RESUME" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full p-2 md:h-full md:w-1/2">
            <img
              src="note-takeing.svg"
              alt="note taking"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
