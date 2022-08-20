import React from "react";

import Cta from "../../features/cta/components";
import Header from "../../features/header/components";

export default function HomePage() {
  return (
    <>
      <div className="h-screen">
        <div className="flex h-full flex-col">
          <Header />
          <main className="flex-grow">
            <Cta />
          </main>
        </div>
      </div>
    </>
  );
}

export function getHomeLayout(
  layoutProps?: any,
): (page: React.ReactElement) => React.ReactNode {
  return function getLayout(page: React.ReactElement) {
    return <HomePage {...layoutProps}>{page}</HomePage>;
  };
}
