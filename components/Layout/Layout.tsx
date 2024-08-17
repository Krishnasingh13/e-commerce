import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">{children}</div>
    </div>
  );
};

export default Layout;
