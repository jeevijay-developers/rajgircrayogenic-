import BreadCrumb from '@/components/common/BreadCrumb'
import DryIcePage from '@/components/DryIce/DryIce'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
    return (
      <Wrapper>
        <HeaderOne headerTop={false} />
        <BreadCrumb title="DRY ICE" />
        <DryIcePage />
        <FooterOne />
      </Wrapper>
    );
}

export default page