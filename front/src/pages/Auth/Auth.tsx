import {useState} from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { $api } from '../../components/api/api'
import Field from "../../components/Field/Field"
import Title from '../../components/Title/Title'
import Button from '../../components/UI/Button/Button'

import './Auth.scss'

const Auth = ():JSX.Element => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState('auth')

    const history = useNavigate()

    const {mutate: register,error} = useMutation('Registration',() => $api(
        {url:'/users',
        type: 'POST', 
        body: {email,password}, 
        auth: false
    }),{
        onSuccess(data){
            localStorage.setItem('token', data.token)
            console.log(data)
        }
    })

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(type === 'auth'){
            console.log('Auth')
        }
        else{
            register()
            
            setEmail('')
            setPassword('')

            history('/')

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
                    {error && <Alert type='error' text={`${error}`}/>}
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