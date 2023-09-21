import React from 'react'
import { AppForm, FormBtn, FormDropdown, FormInput } from '../shared/form'
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(25).required().label("First name"),
    last_name: Yup.string().max(25).required().label("Last name"),
    country: Yup.string().required().label("Country / Region"),
    address: Yup.string().required().label("Address"),
    city: Yup.string().required().label("City"),
    zip: Yup.string().required().label("ZIP / Postal code"),
    phone: Yup.string().required().label("Phone"),
    email: Yup.string().email().required().label("Email"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("password"),
})

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState(true)

    const HandleLoginSignup = (values) => {
        console.log(values);
         }
         const COUNTRIES = [
            { title: "United States" }, { title: "United Kingdom" }, { title: "Canada" }, { title: "Australia" }, { title: "Bangladesh" }, { title: "France" }, { title: "Italy" }, { title: "Spain" }, { title: "Netherlands" }, { title: "Belgium" }, { title: "Austria" }, { title: "Switzerland" }, { title: "Sweden" }, { title: "Norway" }, { title: "Denmark" }, { title: "Finland" }, { title: "Ireland" }, { title: "New Zealand" }, { title: "Japan" }, { title: "China" }, { title: "Hong Kong" }, { title: "Singapore" }, { title: "India" }, { title: "Brazil" }, { title: "Mexico" }, { title: "Argentina" }, { title: "Chile" }, { title: "Colombia" }, { title: "Peru" }, { title: "Venezuela" }, { title: "South Africa" }, { title: "Egypt" }, { title: "Western" }
        ]

    
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
                    first_name:  '',
                    last_name:  '',
                    phone:'',
                    email:'',
                    password: "",
                    country: '',
                    address: '',
                    city: '',
                    zip:'',
                }}
                onSubmit={HandleLoginSignup}
                validationSchema={validationSchema}
                
                >
                    {isLogin ? <>
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

                    </> : <>

                    <FormInput
                    name="first_name"
                    placeholder="First Name" 
                    /> 
                    <FormInput
                        name="last_name"
                        placeholder="Last name"
                    />
                    <FormDropdown
                        name="country"
                        placeholder="Country / Region"
                        items={COUNTRIES}
                    />
                    <FormInput
                        name="address"
                        placeholder="Street address" 
                    />
                    <FormInput
                        name="city"
                        placeholder="Town / City"
                    />
                    <FormInput
                        name="zip"
                        placeholder="ZIP / Postal code"
                    />
                    <FormInput
                        name="phone"
                        placeholder="Phone"
                    />
                    <FormInput
                        name="email"
                        placeholder="Email address"
                        type="email"
                    />
                    <FormInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    />

                    </> }
                    
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