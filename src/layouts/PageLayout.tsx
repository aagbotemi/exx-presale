import { Fragment, ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface IChildren {
  children: ReactNode
}

const PageLayout = ({children}: IChildren) => {
  return (
    <Fragment>
      <div className="max-w-[1440px] w-full mx-auto px-[24px] md:px-[50px] lg:px-[100px] border-2 border-primary">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export { PageLayout as default };
