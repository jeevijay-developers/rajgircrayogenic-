import VesselsAndEquipmentPage from '@/components/VesselAndEquipment/VesselAndEquipment'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
        <HeaderTwo />
        <VesselsAndEquipmentPage />
    </Wrapper>
  )
}

export default page