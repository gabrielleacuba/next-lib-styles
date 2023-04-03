import type { ReactNode } from "react";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { LayoutContainer } from "./style";

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
    <LayoutContainer>
      <Navbar blackNavebar={blackNavebar} />
      <main>{children}</main>
    </LayoutContainer>
  );
};

export default Layout;
