import React from 'react'
import AddNews from '../../components/AdminComponents/AddNews'
import SignIn from '../../components/AdminComponents/SignIn'
import { Container, Flex } from '../../uikit/uikit'



const Admin:React.FC = () => {
    const [signIn, setSignIn] = React.useState(false)

    if(signIn){
      return <AddNews/>
    } 
    return <SignIn signIn={setSignIn}/>
}

export default Admin