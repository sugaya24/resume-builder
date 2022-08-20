import React, { ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
