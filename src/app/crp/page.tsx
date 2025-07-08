import CO2RecoveryPage from '@/components/CO2RecPlant/CO2RecPlant'
import BreadCrumb from '@/components/common/BreadCrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
      <HeaderOne headerTop={false} />

      <BreadCrumb title="CO₂ Recovery" />
      <CO2RecoveryPage />
      <FooterOne />
    </Wrapper>
  );
}

export default page