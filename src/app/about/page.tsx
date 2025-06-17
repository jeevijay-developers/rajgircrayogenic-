// import About from "@/components/inner-pages/about";
import BreadCrumb from "@/components/common/BreadCrumb";
import About from "@/components/homes/home-one/About";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Rajgit cryogenics",
};
const index = () => {
  return (
    <Wrapper>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="About Us" />
      <About />
      <FooterOne />
    </Wrapper>
  );
};

export default index;
