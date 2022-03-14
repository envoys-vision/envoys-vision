import React from 'react'
import styled from 'styled-components'
import AddNews from '../../components/AdminComponents/AddNews'
import SignIn from '../../components/AdminComponents/SignIn'
import { Container, Flex } from '../../uikit/uikit'



const Admin:React.FC = () => {
    const [signIn, setSignIn] = React.useState(false)

  return (
    <Container>
        {signIn?<AddNews/>:<SignIn signIn={setSignIn}/>}
    </Container>
  )
}

export default Admin