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
        Firebase.auth()
        .signInWithEmailAndPassword(adminEmail, adminPas)
            .then((res:any) => {
                // if(res.user['_delegate'].accessToken === token){
                    console.log(res);
                    
                    props.signIn(true)    
                    setAdminEmail('')
                    setAdminPas('')
                // }
            }).catch(err => {
                alert('ошибка')
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