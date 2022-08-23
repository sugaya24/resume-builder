import { format } from "date-fns";
import React, { Dispatch, SetStateAction, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import {
  TProfileState,
  TWorkHistory,
} from "../../../components/layouts/EditLayout";
import Input from "../../../components/ui/Input";
import { DateYMString } from "../types";

type PersonalDetailProps = {
  profileState: TProfileState;
  setProfileState: Dispatch<SetStateAction<TProfileState>>;
};
function PersonalDetail({
  profileState,
  setProfileState,
}: PersonalDetailProps) {
  return (
    <form className="flex w-full flex-col gap-8">
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={profileState.jobTitle}
            labelText="Job Title"
            labelFor="job-title"
            type="text"
            placeholder="Job Title"
            onChange={(e) =>
              setProfileState({ ...profileState, jobTitle: e.target.value })
            }
          />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={profileState.firstName}
            labelText="First Name"
            labelFor="first-name"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setProfileState({ ...profileState, firstName: e.target.value })
            }
          />
        </div>
        <div className="w-1/2">
          <Input
            value={profileState.lastName}
            labelText="Last Name"
            labelFor="last-name"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setProfileState({ ...profileState, lastName: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="summary"
        >
          Summary
        </label>
        <textarea
          name="personal summary"
          className="w-full rounded-lg border p-4 shadow"
          rows={10}
          onChange={(e) =>
            setProfileState({ ...profileState, summary: e.target.value })
          }
        />
      </div>
    </form>
  );
}

function Work({
  id,
  workList,
  setWorkList,
}: {
  id: number;
  workList: TWorkHistory[];
  setWorkList: Dispatch<SetStateAction<TWorkHistory[]>>;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="mb-4 rounded-lg border bg-white p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold">
              {workList[id].jobTitle || "(Job Title)"}
              {workList[id].employer && ` at ${workList[id].employer}`}
            </h2>
            {workList[id].startDate && workList[id].endDate && (
              <span className="font-light text-gray-400">
                {`${format(
                  new Date(workList[id].startDate as DateYMString),
                  "MMM yyyy",
                )} - 
                ${format(
                  new Date(workList[id].endDate as DateYMString),
                  "MMM yyyy",
                )}`}
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
              value={workList[id].jobTitle}
              onChange={(e) => {
                const updateList = workList.map((work, i) => {
                  if (id === i) {
                    work.jobTitle = e.target.value;
                  }
                  return work;
                });
                setWorkList(updateList);
              }}
            />
            <Input
              labelText="Employer"
              labelFor="employer"
              type="text"
              placeholder="Employer"
              value={workList[id].employer}
              onChange={(e) => {
                const updateList = workList.map((work, i) => {
                  if (id === i) {
                    work.employer = e.target.value;
                  }
                  return work;
                });
                setWorkList(updateList);
              }}
            />
            <div className="flex w-full flex-row gap-8">
              <div className="w-1/2">
                <Input
                  labelText="Start Date"
                  placeholder="Date Picker"
                  type="month"
                  value={
                    workList[id].startDate
                      ? format(
                          new Date(workList[id].startDate as DateYMString),
                          "yyyy-MM",
                        )
                      : ""
                  }
                  labelFor=""
                  onChange={(e) => {
                    const updateList = workList.map((work, i) => {
                      if (id === i) {
                        work.startDate = e.target.value as DateYMString;
                      }
                      return work;
                    });
                    setWorkList(updateList);
                  }}
                />
              </div>
              <div className="w-1/2">
                <Input
                  labelText="End Date"
                  placeholder="Date Picker"
                  type="month"
                  value={
                    workList[id].endDate
                      ? format(
                          new Date(workList[id].endDate as DateYMString),
                          "yyyy-MM",
                        )
                      : ""
                  }
                  labelFor=""
                  onChange={(e) => {
                    const updateList = workList.map((work, i) => {
                      if (id === i) {
                        work.endDate = e.target.value as DateYMString;
                      }
                      return work;
                    });
                    setWorkList(updateList);
                  }}
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
                value={workList[id].description}
                onChange={(e) => {
                  const updateList = workList.map((work, i) => {
                    if (id === i) {
                      work.description = e.target.value;
                    }
                    return work;
                  });
                  setWorkList(updateList);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function WorkHistory({
  workList,
  setWorkList,
}: {
  workList: TWorkHistory[];
  setWorkList: Dispatch<SetStateAction<TWorkHistory[]>>;
}) {
  return (
    <div>
      {workList.map((_work, id) => (
        <Work key={id} id={id} workList={workList} setWorkList={setWorkList} />
      ))}
      <span
        className="cursor-pointer text-sky-600"
        onClick={() =>
          setWorkList((works) => [
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

type EditorProps = {
  profileState: TProfileState;
  setProfileState: Dispatch<SetStateAction<TProfileState>>;
  workList: TWorkHistory[];
  setWorkList: Dispatch<SetStateAction<TWorkHistory[]>>;
};
function Editor({
  profileState,
  setProfileState,
  workList,
  setWorkList,
}: EditorProps) {
  const [educationList, setEducationList] = useState<TEducation[]>([]);

  return (
    <div className="h-full grow-0 overflow-y-scroll bg-slate-50">
      <div className="mb-8 p-4">
        <h1 className="mb-8 text-3xl font-bold">Personal Detail</h1>
        <PersonalDetail
          profileState={profileState}
          setProfileState={setProfileState}
        />
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Work History</h1>
        <WorkHistory workList={workList} setWorkList={setWorkList} />
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
