import type { ReactNode } from "react";

import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-shades-gray-00 dark:bg-shades-gray-100 h-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
