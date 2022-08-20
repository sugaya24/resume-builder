import React from "react";

import Input from "../../../components/ui/Input";

function PersonalDetail() {
  return (
    <form className="w-full">
      <div className="mb-8 flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            labelText="Job Title"
            labelFor="job-title"
            type="text"
            placeholder="Job Title"
          />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            labelText="First Name"
            labelFor="first-name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="w-1/2">
          <Input
            labelText="Last Name"
            labelFor="last-name"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
    </form>
  );
}

function PersonalSummary() {
  return (
    <form className="w-full">
      <textarea
        name="personal summary"
        className="w-full rounded-lg border p-4 shadow"
        rows={10}
      ></textarea>
    </form>
  );
}

function Editor() {
  return (
    <div className="h-full grow-0 overflow-y-scroll bg-slate-50">
      <div className="mb-8 p-4">
        <h1 className="mb-8 text-3xl font-bold">Personal Detail</h1>
        {PersonalDetail()}
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Personal Summary</h1>
        {PersonalSummary()}
      </div>
    </div>
  );
}

export default Editor;
