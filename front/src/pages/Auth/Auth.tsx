import {useState} from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { $api } from '../../components/api/api'
import Field from "../../components/Field/Field"
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'
import { useAuth } from '../../hooks/useAuth'

import './Auth.scss'

const Auth = ():JSX.Element => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState('auth')
    const {setIsAuth} = useAuth()

    const history = useNavigate()

    const successLogin = (token:string) => {
        localStorage.setItem('token', token)
        setIsAuth(true)

                    
        setEmail('')
        setPassword('')

        history('/')
    }

    const {mutate: register,error: errReg} = useMutation('Registration',() => $api(
        {url:'/users',
        type: 'POST', 
        body: {email,password}, 
        auth: false
    }),{
        onSuccess(data){
            successLogin(data.token)
        }
    })

    const {mutate: auth,error: errAuth} = useMutation('Auth',() => $api(
        {url:'/users/login',
        type: 'POST', 
        body: {email,password}, 
        auth: false
    }),{
        onSuccess(data){
            successLogin(data.token)
        }
    })



    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(type === 'auth'){
            auth()
        }
        else{
            register()
        }
    }
    
    const emailHandler = (e:any) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e:any) => {
        setPassword(e.target.value)
    }

    return (
        <div className='auth'>
            <Title tag='h2' side='c'>
                auth || register
            </Title>
            <form onSubmit={handleSubmit} className="auth__form">
                <>
                    {errReg && <Alert type='error' text={`${errReg}`}/>}
                    {errAuth && <Alert type='error' text={`${errAuth}`}/>}
                </>
                <Field required={true} type="email" placeHolder="Enter email" value={email} changeValue={emailHandler}/>
                <Field required={true} type='text' placeHolder="Enter password" value={password} changeValue={passwordHandler}/>
                <div className='auth__form_btns'>
                    <Button onClick={() => setType('auth')} className="btn__main">
                        Sign in
                    </Button>
                    <Button onClick={() => setType('req')} className="btn__main">
                        Sign up
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Auth