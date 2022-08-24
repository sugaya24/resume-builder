import React, { useState } from "react";

import Editor from "../../features/editor/components";
import { DateYMString } from "../../features/editor/types";
import Preview from "../../features/preview/components";

export type TProfileState = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  summary: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  website?: string;
};
export type TWorkHistory = {
  jobTitle: string;
  employer: string;
  startDate: DateYMString | null;
  endDate: DateYMString | null;
  city: string;
  description: string;
};
export type TEducation = {
  school: string;
  degree: string;
  startDate: DateYMString | null;
  endDate: DateYMString | null;
  city?: string;
  description?: string;
};
export default function EditPage() {
  const [profileState, setProfileState] = useState<TProfileState>({
    jobTitle: "",
    firstName: "",
    lastName: "",
    summary: "",
  });
  const [workList, setWorkList] = useState<TWorkHistory[]>([]);
  const [educationList, setEducationList] = useState<TEducation[]>([]);

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex h-full flex-col">
          <div className="grow overflow-hidden">
            <div className="flex h-full">
              <div className="h-full w-1/2">
                <Editor
                  profileState={profileState}
                  setProfileState={setProfileState}
                  workList={workList}
                  setWorkList={setWorkList}
                  educationList={educationList}
                  setEducationList={setEducationList}
                />
              </div>
              <div className="w-1/2">
                <Preview
                  profileState={profileState}
                  workList={workList}
                  educationList={educationList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getEditLayout(
  layoutProps?: any,
): (page: React.ReactElement) => React.ReactNode {
  return function getLayout(page: React.ReactElement) {
    return <EditPage {...layoutProps}>{page}</EditPage>;
  };
}
