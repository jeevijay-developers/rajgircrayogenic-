import Carrer from "@/components/carrer/Carrer";
import BreadCrumb from "@/components/common/BreadCrumb";
import QualityAssurance from "@/components/quality-assuance/QualityAssurance";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
export const metadata = {
  title: "Quality Assurance | Rajgir Cryogenic Gases",
};
const Page = () => {
  return (
    <div>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Quality Assurance" />
      <QualityAssurance />
      <FooterOne />
    </div>
  );
};

export default Page;