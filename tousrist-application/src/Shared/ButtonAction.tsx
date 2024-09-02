import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectPage: (value: SelectedPage) => void;
};

const ButtonAction = ({ children, setSelectPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectPage(SelectedPage.ContactUs)} // Updated to ContactUs
      href={`#${SelectedPage.ContactUs}`} // Updated to ContactUs
    >
      {children}
    </AnchorLink>
  );
};

export default ButtonAction;
