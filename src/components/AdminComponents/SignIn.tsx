import React from 'react'
import Firebase from '../../fireBaseConfig/Config'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn } from '../homeComponents/banner/BannerSC'
import { FromD, InputD } from './AdminSC'


type Props = {
    signIn: any;
}

const SignIn:React.FC<Props> = (props) => {
    const [adminEmail, setAdminEmail] = React.useState('')
    const [adminPas, setAdminPas] = React.useState('')

    const [error, setError] = React.useState('')

    function signInHandler(e:React.FormEvent){
        e.preventDefault()      
        const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZW52b3lzLXZpc2lvbi1uZXdzIiwiYXVkIjoiZW52b3lzLXZpc2lvbi1uZXdzIiwiYXV0aF90aW1lIjoxNjQ2OTk2Nzc4LCJ1c2VyX2lkIjoiMmwwZlk0R2dybVNSdmlTV1VXZE9xWFZUSkdyMiIsInN1YiI6IjJsMGZZNEdncm1TUnZpU1dVV2RPcVhWVEpHcjIiLCJpYXQiOjE2NDY5OTY3NzgsImV4cCI6MTY0NzAwMDM3OCwiZW1haWwiOiJiYWt5dHV1bHViZWtzdWx0YW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImJha3l0dXVsdWJla3N1bHRhbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OF1NwmUMXtxSFsfRk3o_ZbjxY-9lPIBVlRArUwC5H1smU0XRMLw9LxyrTL5A0vl9Gl29GORLsnxvIOZzozkdEd8b0yTGCwyhtgsVsD_4iHSfoyQi6xBDdw5VufexOxfRtvbjwDJZ0Qb9G2evvILr9f0G94IJI6hN-IBxqNF0ZHbs2VekXDylePi19pfvH_WGBW-3zsVvg5b9t1c_XaS5ly8Kz6cdDZfAU2T6V1jcpLZVaR2eBUCPiJywFey9RlCLZ9j1Drgdx6G_Eywz4AvImIDOKyY-WwsgY6D-o1KzhUOeQlvGhtRkJA14wwQUqjF0eEl8Updh1fATUQCvkOfTKw'
        Firebase.auth()
        .signInWithEmailAndPassword(adminEmail, adminPas)
            .then((res:any) => {
                if(res.user['_delegate'].accessToken === token){
                    props.signIn(true)    
                    setAdminEmail('')
                    setAdminPas('')
                }
            }).catch(err => {
                setError(String(err))
                setAdminPas('')
            }).finally(() => {
                setAdminPas('')
            })

    }
    
    return (
        <Container>
            <Flex style={{height: '60vh'}} align='center' justify='center' direction='column'>
                {error.length>0?<h3 style={{color: 'red'}}>{error}</h3>:<></>}
                <FromD action="#" onSubmit={e => signInHandler(e)}>
                    <InputD type={'email'} placeholder={'Введите email'} onChange={e => setAdminEmail(e.target.value)}/>
                    <InputD type={'password'} placeholder={'Введите пароль'}  onChange={e => setAdminPas(e.target.value)}/>
                    <BannerBtn style={{marginTop: '20px', borderRadius: '5px', fontSize: '18px'}} onSubmit={(e) => signInHandler(e)}>Войти</BannerBtn>
                </FromD>
            </Flex>
        </Container>
    )
}

export default SignIn