import Carrer from "@/components/carrer/Carrer";
import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
export const metadata = {
  title: "Career | Rajgir Cryogenic Gases",
};
const Page = () => {
  return (
    <div>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Carrer Page" />
      <Carrer />
      <FooterOne />
    </div>
  );
};

export default Page;
