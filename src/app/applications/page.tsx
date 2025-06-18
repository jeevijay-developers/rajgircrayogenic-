import Applications from '@/components/Applications/Applications'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
        <HeaderTwo />
        <Applications />
    </Wrapper>
  )
}

export default page