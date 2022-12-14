import autoAnimate from "@formkit/auto-animate";
import { format } from "date-fns";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiTrash } from "react-icons/bi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

import {
  TEducation,
  TProfileState,
  TProject,
  TSkill,
  TWorkHistory,
} from "../../../components/layouts/EditLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Modal from "../../../components/ui/Modal";
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
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={profileState.phoneNumber || ""}
            labelText="Phone"
            labelFor="phone-number"
            type="text"
            placeholder="Phone Number"
            onChange={(e) =>
              setProfileState({ ...profileState, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="w-1/2">
          <Input
            value={profileState.email || ""}
            labelText="Email"
            labelFor="email"
            type="text"
            placeholder="Email"
            onChange={(e) =>
              setProfileState({ ...profileState, email: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={profileState.address || ""}
            labelText="Address"
            labelFor="address"
            type="text"
            placeholder="Address"
            onChange={(e) =>
              setProfileState({ ...profileState, address: e.target.value })
            }
          />
        </div>
        <div className="w-1/2">
          <Input
            value={profileState.github.name || ""}
            labelText="GitHub"
            labelFor="github"
            type="text"
            placeholder="GitHub"
            onChange={(e) =>
              setProfileState({
                ...profileState,
                github: {
                  ...profileState.github,
                  name: e.target.value,
                },
              })
            }
          />
          <Input
            value={profileState.github.url}
            labelText={""}
            labelFor={"github link"}
            type={"text"}
            placeholder={"URL"}
            onChange={(e) =>
              setProfileState({
                ...profileState,
                github: {
                  ...profileState.github,
                  url: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          <Input
            value={profileState.linkedin.name || ""}
            labelText="LinkedIn"
            labelFor="linkedin"
            type="text"
            placeholder="LinkedIn"
            onChange={(e) =>
              setProfileState({
                ...profileState,
                linkedin: {
                  ...profileState.linkedin,
                  name: e.target.value,
                },
              })
            }
          />
          <Input
            value={profileState.linkedin.url}
            labelText={""}
            labelFor={"Linkedin link"}
            type={"text"}
            placeholder="URL"
            onChange={(e) =>
              setProfileState({
                ...profileState,
                linkedin: {
                  ...profileState.linkedin,
                  url: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="w-1/2">
          <Input
            value={profileState.website.name || ""}
            labelText="Website"
            labelFor="website"
            type="text"
            placeholder="Website"
            onChange={(e) =>
              setProfileState({
                ...profileState,
                website: {
                  ...profileState.website,
                  name: e.target.value,
                },
              })
            }
          />
          <Input
            value={profileState.website.url}
            labelText={""}
            labelFor={"Website link"}
            type={"text"}
            placeholder="URL"
            onChange={(e) =>
              setProfileState({
                ...profileState,
                website: {
                  ...profileState.website,
                  url: e.target.value,
                },
              })
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

type SkillProps = {
  id: number;
  skills: TSkill[];
  setSkills: Dispatch<SetStateAction<TSkill[]>>;
};
function Skill({ id, skills, setSkills }: SkillProps) {
  const [isEditing, setIsEditing] = useState(true);
  const [skill, setSkill] = useState("");
  const skillParent = useRef(null);

  useEffect(() => {
    skillParent.current && autoAnimate(skillParent.current);
  }, [skillParent]);

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (skill.length < 1) {
      return;
    }
    const updateSkills = skills.map((s, i) => {
      if (id === i) {
        s.name = [...s.name, skill];
      }
      return s;
    });
    setSkills(updateSkills);
    setSkill("");
  };

  return (
    <div className="mb-4 rounded-lg border bg-white p-4" ref={skillParent}>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          {skills[id].category || "(Category)"}
        </h2>
        <div className="flex flex-row gap-2">
          <div className="h-8 w-8">
            <label
              htmlFor={`${id}-skill-delete-modal`}
              className="modal-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-200"
            >
              <BiTrash />
            </label>
            <input
              type="checkbox"
              id={`${id}-skill-delete-modal`}
              className="modal-toggle"
            />
            <Modal htmlFor={`${id}-skill-delete-modal`}>
              <h3 className="text-2xl font-bold">Delete Entry</h3>
              <p className="mb-4">Are you sure to delete this item?</p>
              <div className="flex flex-row gap-4">
                <label
                  htmlFor={`${id}-skill-delete-modal`}
                  className="btn modal-action btn-warning"
                  onClick={() => {
                    const updateList = skills.filter((_s, i) => id !== i);
                    setSkills(updateList);
                  }}
                >
                  Delete
                </label>
                <label
                  htmlFor={`${id}-skill-delete-modal`}
                  className="btn modal-action btn-outline"
                >
                  Cancel
                </label>
              </div>
            </Modal>
          </div>
          <div
            className="h-8 w-8 cursor-pointer rounded-lg border duration-100 hover:bg-slate-200"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <button className="flex h-8 w-8 items-center justify-center">
              {isEditing ? <HiChevronUp width={"100%"} /> : <HiChevronDown />}
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="mt-4 flex flex-col gap-4">
          <input
            className="mr-4 w-full rounded-lg border py-2 px-4 shadow"
            type="text"
            value={skills[id].category}
            placeholder="Category"
            onChange={(e) => {
              const updateSkills = skills.map((s, i) => {
                if (id === i) {
                  s.category = e.target.value;
                }
                return s;
              });
              setSkills(updateSkills);
            }}
          />
          <div className="flex flex-wrap gap-4">
            {skills[id].name.map((s, i) => (
              <span
                key={s}
                className="inline-flex w-fit items-center rounded-full border py-1 pl-4 text-gray-800"
              >
                {s}
                <div
                  className="ml-2 cursor-pointer rounded-full p-2 duration-100 hover:bg-gray-200"
                  onClick={() => {
                    const updated = skills.map((s, j) => {
                      if (id === j) {
                        s.name = s.name.filter((_item, k) => i !== k);
                      }
                      return s;
                    });
                    setSkills(updated);
                  }}
                >
                  <RiCloseCircleLine />
                </div>
              </span>
            ))}
          </div>
          <div className="relative flex w-full items-center justify-end">
            <input
              className="mr-4 w-full rounded-lg border py-2 px-4 shadow"
              value={skill}
              type="text"
              placeholder="Skill"
              onChange={(e) => {
                setSkill(e.target.value);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.nativeEvent.isComposing || e.key !== "Enter") {
                  return;
                }
                handleSubmit(e);
              }}
            />
            <Button
              text={"Add"}
              onClick={(
                e:
                  | React.KeyboardEvent<HTMLInputElement>
                  | React.MouseEvent<HTMLButtonElement, MouseEvent>,
              ) => handleSubmit(e)}
              onSubmit={(
                e:
                  | React.KeyboardEvent<HTMLInputElement>
                  | React.MouseEvent<HTMLButtonElement, MouseEvent>,
              ) => handleSubmit(e)}
            />
          </div>
        </div>
      )}
      {!isEditing && (
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            {skills[id].name.map((s) => (
              <span
                key={s}
                className="inline-flex w-fit rounded-full border py-2 px-4"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type SkillListProps = {
  skills: TSkill[];
  setSkills: Dispatch<SetStateAction<TSkill[]>>;
};
function SkillList({ skills, setSkills }: SkillListProps) {
  const skillListParent = useRef(null);

  useEffect(() => {
    skillListParent.current && autoAnimate(skillListParent.current);
  }, [skillListParent]);

  return (
    <div ref={skillListParent}>
      {skills.map((_skill, i) => (
        <Skill key={i} id={i} skills={skills} setSkills={setSkills} />
      ))}
      <div>
        <span
          className="cursor-pointer text-sky-600"
          onClick={() => {
            setSkills([
              ...skills,
              {
                name: [],
                category: "",
              },
            ]);
          }}
        >
          + Add Category
        </span>
      </div>
    </div>
  );
}

type ProjectProps = {
  id: number;
  projectList: TProject[];
  setProjectList: Dispatch<SetStateAction<TProject[]>>;
};
function Project({ id, projectList, setProjectList }: ProjectProps) {
  const [isEditing, setIsEditing] = useState(true);
  const projectParent = useRef(null);

  useEffect(() => {
    projectParent.current && autoAnimate(projectParent.current);
  }, [projectParent]);

  return (
    <div className="mb-4 rounded-lg border bg-white p-4" ref={projectParent}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">
            {projectList[id].name || "(Project name)"}
          </h2>
          <div className="mt-2">{projectList[id].url}</div>
        </div>
        <div className="flex flex-row gap-2">
          <label
            htmlFor={`${id}-project-delete-modal`}
            className="modal-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-200"
          >
            <BiTrash />
          </label>
          <input
            type="checkbox"
            id={`${id}-project-delete-modal`}
            className="modal-toggle"
          />
          <Modal htmlFor={`${id}-project-delete-modal`}>
            <h3 className="text-2xl font-bold">Delete Entry</h3>
            <p className="mb-4">Are you sure to delete this item?</p>
            <div className="flex flex-row gap-4">
              <label
                htmlFor={`${id}-project-delete-modal`}
                className="btn modal-action btn-warning"
                onClick={() => {
                  const updateList = projectList.filter((_p, i) => id !== i);
                  setProjectList(updateList);
                }}
              >
                Delete
              </label>
              <label
                htmlFor={`${id}-project-delete-modal`}
                className="btn modal-action btn-outline"
              >
                Cancel
              </label>
            </div>
          </Modal>
          <div className="h-8 w-8">
            <div
              className="h-8 w-8 cursor-pointer rounded-lg border duration-100 hover:bg-slate-200"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              <button className="flex h-8 w-8 items-center justify-center">
                {isEditing ? <HiChevronUp /> : <HiChevronDown />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="mt-4">
          <input
            className="mb-4 mr-4 w-full rounded-lg border py-2 px-4 shadow"
            type="text"
            value={projectList[id].name}
            placeholder="Project name"
            onChange={(e) => {
              const updateList = projectList.map((project, i) => {
                if (id === i) {
                  project.name = e.target.value;
                }
                return project;
              });
              setProjectList(updateList);
            }}
          />
          <input
            className="mb-4 mr-4 w-full rounded-lg border py-2 px-4 shadow"
            type="text"
            value={projectList[id].url}
            placeholder="Project URL"
            onChange={(e) => {
              const updateList = projectList.map((project, i) => {
                if (id === i) {
                  project.url = e.target.value;
                }
                return project;
              });
              setProjectList(updateList);
            }}
          />
          <div className="">
            <textarea
              className="w-full rounded-lg border p-4 shadow"
              value={projectList[id].description}
              rows={5}
              placeholder="Description"
              onChange={(e) => {
                const updateList = projectList.map((project, i) => {
                  if (id === i) {
                    project.description = e.target.value;
                  }
                  return project;
                });
                setProjectList(updateList);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

type ProjectListProps = {
  projectList: TProject[];
  setProjectList: Dispatch<SetStateAction<TProject[]>>;
};
function ProjectList({ projectList, setProjectList }: ProjectListProps) {
  const projectListParent = useRef(null);

  useEffect(() => {
    projectListParent.current && autoAnimate(projectListParent.current);
  }, [projectListParent]);

  return (
    <div ref={projectListParent}>
      {projectList.map((_project, i) => (
        <Project
          key={i}
          id={i}
          projectList={projectList}
          setProjectList={setProjectList}
        />
      ))}
      <div>
        <span
          className="cursor-pointer text-sky-600"
          onClick={() => {
            setProjectList([
              ...projectList,
              {
                name: "",
                url: "",
                description: "",
              },
            ]);
          }}
        >
          + Add Project
        </span>
      </div>
    </div>
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
  const workParent = useRef(null);

  useEffect(() => {
    workParent.current && autoAnimate(workParent.current);
  }, [workParent]);

  return (
    <div className="mb-4 rounded-lg border bg-white p-4" ref={workParent}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
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

        <div className="flex flex-row gap-2">
          <label
            htmlFor={`${id}-work-delete-modal`}
            className="modal-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-200"
          >
            <BiTrash />
          </label>
          <input
            type="checkbox"
            id={`${id}-work-delete-modal`}
            className="modal-toggle"
          />
          <Modal htmlFor={`${id}-work-delete-modal`}>
            <h3 className="text-2xl font-bold">Delete Entry</h3>
            <p className="mb-4">Are you sure to delete this item?</p>
            <div className="flex flex-row gap-4">
              <label
                htmlFor={`${id}-work-delete-modal`}
                className="btn modal-action btn-warning"
                onClick={() => {
                  const updateList = workList.filter((_w, i) => id !== i);
                  setWorkList(updateList);
                }}
              >
                Delete
              </label>
              <label
                htmlFor={`${id}-work-delete-modal`}
                className="btn modal-action btn-outline"
              >
                Cancel
              </label>
            </div>
          </Modal>
          <div
            className="h-8 w-8 cursor-pointer rounded-lg border duration-100 hover:bg-slate-200"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <button className="flex h-8 w-8 items-center justify-center">
              {isEditing ? <HiChevronUp /> : <HiChevronDown />}
            </button>
          </div>
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
  );
}

function WorkHistory({
  workList,
  setWorkList,
}: {
  workList: TWorkHistory[];
  setWorkList: Dispatch<SetStateAction<TWorkHistory[]>>;
}) {
  const workHistoryParent = useRef(null);

  useEffect(() => {
    workHistoryParent.current && autoAnimate(workHistoryParent.current);
  }, [workHistoryParent]);

  return (
    <div ref={workHistoryParent}>
      {workList.map((_work, id) => (
        <Work key={id} id={id} workList={workList} setWorkList={setWorkList} />
      ))}
      <div>
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
          + Add Work History
        </span>
      </div>
    </div>
  );
}

type EducationProps = {
  id: number;
  educationList: TEducation[];
  setEducationList: Dispatch<SetStateAction<TEducation[]>>;
};
function Education({ id, educationList, setEducationList }: EducationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const educationParent = useRef(null);

  useEffect(() => {
    educationParent.current && autoAnimate(educationParent.current);
  }, [educationParent]);

  const handleOnChange =
    (key: keyof TEducation) =>
    (id: number) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const updatedList = educationList.map((education, i) => {
        if (id === i) {
          education[key] = e.target.value as string & DateYMString;
        }
        return education;
      });
      setEducationList(updatedList);
    };

  return (
    <div className="mb-4 rounded-lg border bg-white p-4" ref={educationParent}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {educationList[id].school || "(School)"}
          </h2>
          {educationList[id].startDate && educationList[id].endDate && (
            <span className="font-light text-gray-400">
              {`${format(
                new Date(educationList[id].startDate as DateYMString),
                "MMM yyyy",
              )} - 
                ${format(
                  new Date(educationList[id].endDate as DateYMString),
                  "MMM yyyy",
                )}`}
            </span>
          )}
        </div>
        <div className="flex flex-row gap-2">
          <label
            htmlFor={`${id}-education-delete-modal`}
            className="modal-button flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-200"
          >
            <BiTrash />
          </label>
          <input
            type="checkbox"
            id={`${id}-education-delete-modal`}
            className="modal-toggle"
          />
          <Modal htmlFor={`${id}-education-delete-modal`}>
            <h3 className="text-2xl font-bold">Delete Entry</h3>
            <p className="mb-4">Are you sure to delete this item?</p>
            <div className="flex flex-row gap-4">
              <label
                htmlFor={`${id}-education-delete-modal`}
                className="btn modal-action btn-warning"
                onClick={() => {
                  const updateList = educationList.filter((_e, i) => id !== i);
                  setEducationList(updateList);
                }}
              >
                Delete
              </label>
              <label
                htmlFor={`${id}-education-delete-modal`}
                className="btn modal-action btn-outline"
              >
                Cancel
              </label>
            </div>
          </Modal>
          <div
            className="h-8 w-8 cursor-pointer rounded-lg border duration-100 hover:bg-slate-200"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <button className="flex h-8 w-8 items-center justify-center">
              {isEditing ? <HiChevronUp /> : <HiChevronDown />}
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="mt-4 flex flex-col gap-4">
          <Input
            labelText="School"
            labelFor="school"
            type="text"
            placeholder="School"
            value={educationList[id].school}
            onChange={(e) => handleOnChange("school")(id)(e)}
          />
          <Input
            labelText="Degree"
            labelFor="degree"
            type="text"
            placeholder="Degree"
            value={educationList[id].degree}
            onChange={(e) => handleOnChange("degree")(id)(e)}
          />
          <Input
            labelText="City"
            labelFor="city"
            type="text"
            placeholder="City"
            value={educationList[id].city || ""}
            onChange={(e) => handleOnChange("city")(id)(e)}
          />
          <div className="flex w-full flex-row gap-8">
            <div className="w-1/2">
              <Input
                labelText="Start Date"
                placeholder="Date Picker"
                type="month"
                value={
                  educationList[id].startDate
                    ? format(
                        new Date(educationList[id].startDate as DateYMString),
                        "yyyy-MM",
                      )
                    : ""
                }
                labelFor="start date"
                onChange={(e) => handleOnChange("startDate")(id)(e)}
              />
            </div>
            <div className="w-1/2">
              <Input
                labelText="End Date"
                placeholder="Date Picker"
                type="month"
                value={
                  educationList[id].endDate
                    ? format(
                        new Date(educationList[id].endDate as DateYMString),
                        "yyyy-MM",
                      )
                    : ""
                }
                labelFor="end date"
                onChange={(e) => handleOnChange("endDate")(id)(e)}
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
              value={educationList[id].description}
              onChange={(e) => handleOnChange("description")(id)(e)}
            >
              {educationList[id].description}
            </textarea>
          </div>
        </div>
      )}
    </div>
  );
}

function EducationList({
  educationList,
  setEducationList,
}: {
  educationList: TEducation[];
  setEducationList: React.Dispatch<React.SetStateAction<TEducation[]>>;
}) {
  const educationListParent = useRef(null);

  useEffect(() => {
    educationListParent.current && autoAnimate(educationListParent.current);
  }, [educationListParent]);

  return (
    <div ref={educationListParent}>
      {educationList.map((_education, id) => (
        <Education
          key={id}
          id={id}
          educationList={educationList}
          setEducationList={setEducationList}
        />
      ))}
      <div>
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
          + Add Education
        </span>
      </div>
    </div>
  );
}

type EditorProps = {
  profileState: TProfileState;
  setProfileState: Dispatch<SetStateAction<TProfileState>>;
  skills: TSkill[];
  setSkills: Dispatch<SetStateAction<TSkill[]>>;
  projectList: TProject[];
  setProjectList: Dispatch<SetStateAction<TProject[]>>;
  workList: TWorkHistory[];
  setWorkList: Dispatch<SetStateAction<TWorkHistory[]>>;
  educationList: TEducation[];
  setEducationList: Dispatch<SetStateAction<TEducation[]>>;
};
function Editor({
  profileState,
  setProfileState,
  skills,
  setSkills,
  projectList,
  setProjectList,
  workList,
  setWorkList,
  educationList,
  setEducationList,
}: EditorProps) {
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
        <h1 className="mb-8 text-3xl font-bold">Skill</h1>
        <SkillList skills={skills} setSkills={setSkills} />
      </div>
      <div className="p-4">
        <h1 className="mb-8 text-3xl font-bold">Projects</h1>
        <ProjectList
          projectList={projectList}
          setProjectList={setProjectList}
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
