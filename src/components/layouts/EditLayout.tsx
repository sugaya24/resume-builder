import React, { useState } from "react";

import Editor from "../../features/editor/components";
import { DateYMString } from "../../features/editor/types";
import Preview from "../../features/preview/components";

export type TProfileState = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  summary: string;
  address: string;
  phoneNumber: string;
  email: string;
  github: {
    name: string;
    url: string;
  };
  linkedin: {
    name: string;
    url: string;
  };
  website: {
    name: string;
    url: string;
  };
};
export type TSkill = {
  name: string[];
  category: string;
};
export type TProject = {
  name: string;
  url: string;
  description: string;
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
    address: "",
    email: "",
    phoneNumber: "",
    github: {
      name: "",
      url: "",
    },
    linkedin: {
      name: "",
      url: "",
    },
    website: {
      name: "",
      url: "",
    },
  });
  const [skills, setSkills] = useState<TSkill[]>([]);
  const [projectList, setProjectList] = useState<TProject[]>([]);
  const [workList, setWorkList] = useState<TWorkHistory[]>([]);
  const [educationList, setEducationList] = useState<TEducation[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreviewVisible = () => {
    setPreviewVisible(!previewVisible);
  };

  return (
    <>
      <div className="h-screen w-full">
        <label
          htmlFor="preview visible button"
          className="btn btn-circle visible absolute right-8 bottom-8 z-10 md:invisible"
          onClick={handlePreviewVisible}
        >
          {previewVisible ? "????" : "????"}
        </label>
        <div className="flex h-full flex-col">
          <div className="grow overflow-hidden">
            <div className="flex h-full">
              <div className="h-full w-full md:w-1/2">
                <Editor
                  profileState={profileState}
                  setProfileState={setProfileState}
                  skills={skills}
                  setSkills={setSkills}
                  projectList={projectList}
                  setProjectList={setProjectList}
                  workList={workList}
                  setWorkList={setWorkList}
                  educationList={educationList}
                  setEducationList={setEducationList}
                />
              </div>
              <div
                className={`${
                  previewVisible ? "visible" : "invisible"
                } absolute h-full w-full md:visible md:relative md:w-1/2`}
              >
                <Preview
                  profileState={profileState}
                  skills={skills}
                  projectList={projectList}
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
