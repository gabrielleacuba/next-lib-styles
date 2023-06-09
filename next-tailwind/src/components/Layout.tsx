import type { ReactNode } from "react";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [blackNavebar, setBlackNavebar] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 20 ? setBlackNavebar(true) : setBlackNavebar(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
    }

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <div className="bg-sys-color-surface-background-default dark:sys-color-surface-background-dark h-auto">
        <Navbar blackNavebar={blackNavebar} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
