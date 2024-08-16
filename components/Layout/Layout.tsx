import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
