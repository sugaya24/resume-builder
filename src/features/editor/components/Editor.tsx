import { format } from "date-fns";
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import Input from "../../../components/ui/Input";
import { DateYMString } from "../types";

function PersonalDetail() {
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange =
    (setValue: any) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

  return (
    <form className="w-full">
      <div className="mb-8 flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={jobTitle}
            labelText="Job Title"
            labelFor="job-title"
            type="text"
            placeholder="Job Title"
            onChange={(e) => handleChange(setJobTitle)(e)}
          />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={firstName}
            labelText="First Name"
            labelFor="first-name"
            type="text"
            placeholder="First Name"
            onChange={(e) => handleChange(setFirstName)(e)}
          />
        </div>
        <div className="w-1/2">
          <Input
            value={lastName}
            labelText="Last Name"
            labelFor="last-name"
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleChange(setLastName)(e)}
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

function Work({ work }: { work: WorkHistory }) {
  const [isEditing, setIsEditing] = useState(false);
  const [jobTitle, setJobTitle] = useState(work.jobTitle);
  const [employer, setEmployer] = useState(work.employer);
  const [startDate, setStartDate] = useState(work.startDate);
  const [endDate, setEndDate] = useState(work.endDate);

  const handleChange =
    (setValue: React.Dispatch<React.SetStateAction<string | DateYMString>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

  return (
    <>
      <div className="mb-4 rounded-lg border bg-white p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold">
              {jobTitle || "(Job Title)"}
              {employer && ` at ${employer}`}
            </h2>
            {startDate && endDate && (
              <span className="font-light text-gray-400">
                {`${format(new Date(startDate), "MMM yyyy")} - 
                ${format(new Date(endDate), "MMM yyyy")}`}
              </span>
            )}
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? <HiChevronUp /> : <HiChevronDown />}
          </div>
        </div>
        {isEditing && (
          <div className="mt-4 flex flex-col gap-4">
            <Input
              labelText="Job Title"
              labelFor="job title"
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => handleChange(setJobTitle)(e)}
            />
            <Input
              labelText="Employer"
              labelFor="employer"
              type="text"
              placeholder="Employer"
              value={employer}
              onChange={(e) => handleChange(setEmployer)(e)}
            />
            <div className="flex w-full flex-row gap-8">
              <div className="w-1/2">
                <Input
                  labelText="Start Date"
                  placeholder="Date Picker"
                  type="month"
                  value={
                    startDate ? format(new Date(startDate), "yyyy-MM") : ""
                  }
                  labelFor=""
                  onChange={(e) => setStartDate(e.target.value as DateYMString)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  labelText="End Date"
                  placeholder="Date Picker"
                  type="month"
                  value={endDate ? format(new Date(endDate), "yyyy-MM") : ""}
                  labelFor=""
                  onChange={(e) => setEndDate(e.target.value as DateYMString)}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="Description"
              >
                Description
              </label>
              <textarea
                name="work description"
                className="w-full rounded-lg border p-4 shadow"
                rows={10}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

type WorkHistory = {
  jobTitle: string;
  employer: string;
  startDate: DateYMString | null;
  endDate: DateYMString | null;
  city: string;
  description: string;
};
function WorkHistory({
  works,
  setWorks,
}: {
  works: WorkHistory[];
  setWorks: React.Dispatch<React.SetStateAction<WorkHistory[]>>;
}) {
  return (
    <div>
      {works.map((work) => (
        <Work key={work.jobTitle} work={work} />
      ))}
      <span
        className="cursor-pointer text-sky-600"
        onClick={() =>
          setWorks((works) => [
            ...works,
            {
              jobTitle: "",
              employer: "",
              city: "",
              startDate: null,
              endDate: null,
              description: "",
            },
          ])
        }
      >
        + Add History
      </span>
    </div>
  );
}

function Education({ education }: { education: TEducation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [school, setSchool] = useState(education.school);
  const [degree, setDegree] = useState(education.degree);
  const [city, setCity] = useState(education.city);
  const [startDate, setStartDate] = useState(education.startDate);
  const [endDate, setEndDate] = useState(education.endDate);
  const [description, setDescription] = useState(education.description);

  const handleChange =
    (setValue: React.Dispatch<React.SetStateAction<any>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

  return (
    <>
      <div className="mb-4 rounded-lg border bg-white p-4">
        <div className="flex justify-between">
          <div>
            <h2>{school || "(School)"}</h2>
            {startDate && endDate && (
              <span className="font-light text-gray-400">
                {`${format(new Date(startDate), "MMM yyyy")} - 
                ${format(new Date(endDate), "MMM yyyy")}`}
              </span>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? <HiChevronUp /> : <HiChevronDown />}
          </div>
        </div>
        {isEditing && (
          <div className="mt-4 flex flex-col gap-4">
            <Input
              labelText="School"
              labelFor="school"
              type="text"
              placeholder="School"
              value={school}
              onChange={(e) => handleChange(setSchool)(e)}
            />
            <Input
              labelText="Degree"
              labelFor="degree"
              type="text"
              placeholder="Degree"
              value={degree}
              onChange={(e) => handleChange(setDegree)(e)}
            />
            <Input
              labelText="City"
              labelFor="city"
              type="text"
              placeholder="City"
              value={city || ""}
              onChange={(e) => handleChange(setCity)(e)}
            />
            <div className="flex w-full flex-row gap-8">
              <div className="w-1/2">
                <Input
                  labelText="Start Date"
                  placeholder="Date Picker"
                  type="month"
                  value={
                    startDate ? format(new Date(startDate), "yyyy-MM") : ""
                  }
                  labelFor="start date"
                  onChange={(e) => setStartDate(e.target.value as DateYMString)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  labelText="End Date"
                  placeholder="Date Picker"
                  type="month"
                  value={endDate ? format(new Date(endDate), "yyyy-MM") : ""}
                  labelFor="end date"
                  onChange={(e) => setEndDate(e.target.value as DateYMString)}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="Description"
              >
                Description
              </label>
              <textarea
                name="work description"
                className="w-full rounded-lg border p-4 shadow"
                rows={10}
                onChange={(e) => setDescription(e.target.value)}
              >
                {description}
              </textarea>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

type TEducation = {
  school: string;
  degree: string;
  startDate: DateYMString | null;
  endDate: DateYMString | null;
  city?: string;
  description?: string;
};
function EducationList({
  educationList,
  setEducationList,
}: {
  educationList: TEducation[];
  setEducationList: React.Dispatch<React.SetStateAction<TEducation[]>>;
}) {
  return (
    <div>
      {educationList.map((education) => (
        <Education key={education.school} education={education} />
      ))}
      <span
        className="cursor-pointer text-sky-600"
        onClick={() =>
          setEducationList((educationList) => [
            ...educationList,
            {
              school: "",
              degree: "",
              startDate: null,
              endDate: null,
              city: "",
              description: "",
            },
          ])
        }
      >
        + Add History
      </span>
    </div>
  );
}

function Editor() {
  const [works, setWorks] = useState<WorkHistory[]>([]);
  const [educationList, setEducationList] = useState<TEducation[]>([]);

  return (
    <div className="h-full grow-0 overflow-y-scroll bg-slate-50">
      <div className="mb-8 p-4">
        <h1 className="mb-8 text-3xl font-bold">Personal Detail</h1>
        <PersonalDetail />
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Personal Summary</h1>
        <PersonalSummary />
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Work History</h1>
        <WorkHistory works={works} setWorks={setWorks} />
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Education</h1>
        <EducationList
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </div>
    </div>
  );
}

export default Editor;
