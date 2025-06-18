import Applications from '@/components/Applications/Applications'
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'
export const metadata = {
  title: "Applications | Rajgir Cryogenic Gases",
};
const page = () => {
  return (
    <Wrapper>
      <HeaderOne headerTop={false} />
      <Applications />
    </Wrapper>
  );
}

export default page