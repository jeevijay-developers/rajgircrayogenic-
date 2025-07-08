import BreadCrumb from '@/components/common/BreadCrumb'
import HPCL from '@/components/HPCL/HPCL'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
    return (
      <Wrapper>
        <HeaderOne headerTop={false} />
        <BreadCrumb title="HPCL" />
        <HPCL />
        <FooterOne />

      </Wrapper>
    );
}

export default page