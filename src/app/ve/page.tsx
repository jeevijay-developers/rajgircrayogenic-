import BreadCrumb from '@/components/common/BreadCrumb'
import VesselsAndEquipmentPage from '@/components/VesselAndEquipment/VesselAndEquipment'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <BreadCrumb title="Vessels And Equipment" />
      <VesselsAndEquipmentPage />
      <FooterOne />
    </Wrapper>
  );
}

export default page