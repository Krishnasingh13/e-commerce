import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container px-4 py-5 sm:px-6 lg:px-8">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
