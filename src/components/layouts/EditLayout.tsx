import React, { useState } from "react";

import Editor from "../../features/editor/components";
import Preview from "../../features/preview/components";

export type TProfileState = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  summary: string;
};
export default function EditPage() {
  const [profileState, setProfileState] = useState<TProfileState>(
    {} as TProfileState,
  );

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
                />
              </div>
              <div className="w-1/2">
                <Preview profileState={profileState} />
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
