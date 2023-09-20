import React from 'react'
import { AppForm, FormBtn, FormInput } from '../shared/form'
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("password"),
})

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState(true)

    const HandleLoginSignup = (values) => {
        console.log(values);
         

    }

    
  return (
    <div className='p-5'>
        <div className="mx-auto max-w-[300px] rounded-md  bg-gray-200 my-10 p-5">
            <div className="flex items-center gap-5 text-2xl pb-5 border-b border-b-gray-300 uppercase font-semibold justify-center">
                <h1 className={`${isLogin ? "text-gray-700" : "text-gray-400"} cursor-pointer `} onClick={() => setIsLogin(true)} >Login</h1>
                <h1 className={`${!isLogin ? "text-gray-700" : "text-gray-400"} cursor-pointer `} onClick={() => setIsLogin(false)} >Register</h1>
            </div>
            <div className="py-5">
                <p className="text-center text-color mb-3"> {isLogin ? 'Login to Your Account' : 'Create a New Account'} </p>
                <AppForm
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={HandleLoginSignup}
                validationSchema={validationSchema}
                
                >
                    <FormInput
                    name="email"
                    placeholder="Email"
                    type='email'
                    />
                    <FormInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    />
                    <FormBtn
                    title={isLogin ? "Login" : "Register"}
                    />

                </AppForm>
                <div>
                    <p className="text-center mt-5">Or</p>
                    <div className="flex items-center justify-center mt-4 gap-5">
                        <button className='bg-red-600 text-white text-xl py-1 px-3 rounded'>Google</button>
                        <button className='bg-indigo-700 text-white text-xl py-1 px-3 rounded'>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth