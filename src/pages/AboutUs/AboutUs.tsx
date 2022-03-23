import React from 'react'
import { Container } from '../../uikit/uikit'
import AboutUsAch from '../../components/AboutUsComponents/AboutUsAch'
import AboutUsAdmin from '../../components/AboutUsComponents/AboutUsAdmin'
import AboutUsHeader from '../../components/AboutUsComponents/AboutUsHeader'
import AboutUsServices from '../../components/AboutUsComponents/AboutUsServices'
import AboutUsValues from '../../components/AboutUsComponents/AboutUsValues'

const AboutUs:React.FC = () =>  {
  return (
        <>
          <AboutUsHeader/>
          <AboutUsAdmin/>
          {/* <AboutUsAch/> */}
          <AboutUsServices/> 
          <AboutUsValues/>
        </>
  )
}

export default AboutUs