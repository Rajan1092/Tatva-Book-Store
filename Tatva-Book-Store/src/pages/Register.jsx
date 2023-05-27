import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState, useEffect, } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const [allExistingUsers, setAllExistingUsers] = useState(() => [])
    const navigate = useNavigate()
    const notify = () => toast("Registered Successfully");

    useEffect(() => {
        fetch('https://book-e-sell-node-api.vercel.app/api/user/all')
            .then((response) => response.json())
            .then((responseData) => setAllExistingUsers(responseData.result))
    }, [])

    const allExistingUsersEmails = allExistingUsers.map((existingUserData) => existingUserData.email)
 

    const allUserRoleTypes = allExistingUsers.map((existingUserData) => [existingUserData.roleId, existingUserData.role])
    const allUniqueUserRoleTypes = Array.from(new Set(allUserRoleTypes.map(JSON.stringify))).map(JSON.parse)
    const roleOptionsElements = allUniqueUserRoleTypes.map((roleTypeData) => {
        return (
            <option key={roleTypeData[0] + ' ' + roleTypeData[1]} value={roleTypeData[0] + ' ' + roleTypeData[1]}>{roleTypeData[1]}</option>
        )
    })

    const validate = (values) => {
        const errors = {}

        if (!values.firstName) {
            errors.firstName = 'Field is required.'
        }

        if (!values.lastName) {
            errors.lastName = 'Field is required.'
        }

        if (!values.email) {
            errors.email = 'Field is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        } else if (allExistingUsersEmails.includes(values.email)) {
            errors.email = 'User with this email already exist.'
        }

        if (!values.role) {
            errors.role = 'Selection of role is must.'
        }

        if (!/(?=.*[a-z])/.test(values.password)) {
            errors.password = 'Password must contain at least one lowercase letter';
        } else if (!/(?=.*[A-Z])/.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
        } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
            errors.password = 'Password must contain at least one special character';
        } else if (!/^.{8,20}$/.test(values.password)) {
            errors.password = 'Password must be between 8 and 20 characters long';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Field is required'
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Confirm password must be same as password.'
        }

        return errors
    }

    const [newUser, setNewUser] = useState(() => { })

    const createNewUser = async(userData) => {
         await fetch('https://book-e-sell-node-api.vercel.app/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => {
                // alert(password + email);
                if (res.data === "exist") {
                  alert("user alreadry exists");
                } else if (res.data === "notexist") {
                  navigate('/auth/login')
                 console.log(res)
                } else {
                //   alert("Registered Succesfully");
           
                notify()
                    //   navigate('/auth/login')
          
                    
                
                }
              })
            .then((responseData) => setNewUser(responseData))
            .catch((error) => {
                console.log('Error occurred.')
                console.log(error)
               
            })
    }
    

    const registerFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: (values) => {
            const roleArray = values.role.split(' ')
            const [roleId, role] = [parseInt(roleArray[0]), roleArray[1]]

            const registerFormData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                roleId: roleId,
                password: values.password
            }

            createNewUser(registerFormData)
            // submit11()
        }
    })

    console.log(newUser)

    return (
        <main className="py-12 px-12 sm:px-12 md:px-12 lg:px-28 xl:px-28 text-[#414141]">
            <div className="mb-12 flex gap-4 justify-center items-center text-lg font-light">
                <Link className="hover:text-[#f14d54] transition" to="/">Home</Link>
                <span>&gt;</span>
                <Link className="text-[#f14d54]" to="/auth/register">Create an Account</Link>
            </div>
            <h1 className="text-center text-3xl font-semibold leading-tight">Login or Create an Account</h1>
            <div className="w-[10%] mx-auto mt-6 h-0.5 bg-[#f14d54] min-w-[100px] mb-12"></div>
            <form onSubmit={registerFormik.handleSubmit} noValidate>
                <div>
                    <h3 className="text-xl font-medium mb-5">Personal Information</h3>
                    <hr className="mb-4" />
                    <p className="text-[#838383] font-light mb-5">Please enter the following information to create an account.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2 xl:grid-cols-2 gap-10 mb-16">
                        <div>
                            <label className="block mb-4" htmlFor='first-name'>First Name <span className="text-[#f14d54]">*</span></label>
                            <input className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" id="first-name" name="firstName" value={registerFormik.values.firstName} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} />
                            {registerFormik.touched.firstName && registerFormik.errors.firstName ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.firstName}</div> : <div>&nbsp;</div>}
                        </div>
                        <div>
                            <label className="block mb-4" htmlFor='last-name'>Last Name <span className="text-[#f14d54]">*</span></label>
                            <input className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" id="last-name" name="lastName" value={registerFormik.values.lastName} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} />
                            {registerFormik.touched.lastName && registerFormik.errors.lastName ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.lastName}</div> : <div>&nbsp;</div>}
                        </div>
                        <div>
                            <label className="block mb-4" htmlFor='email'>Email <span className="text-[#f14d54]">*</span></label>
                            <input className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" type="email" id="email" name="email" value={registerFormik.values.email} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} />
                            {registerFormik.touched.email && registerFormik.errors.email ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.email}</div> : <div>&nbsp;</div>}
                        </div>
                        <div>
                            <label className="block mb-4" htmlFor='role'>Role <span className="text-[#f14d54]">*</span></label>
                            <select className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" id="role" name="role" value={registerFormik.values.role} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur}>
                                <option value="">Select an option</option>
                                {roleOptionsElements}
                            </select>
                            {registerFormik.touched.role && registerFormik.errors.role ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.role}</div> : <div>&nbsp;</div>}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-5">Login Information</h3>
                    <hr className="mb-4" />
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2 xl:grid-cols-2 gap-10 mb-16">
                        <div>
                            <label className="block mb-4" htmlFor='password'>Password <span className="text-[#f14d54]">*</span></label>
                            <input className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" type="password" id="password" name="password" value={registerFormik.values.password} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} />
                            {registerFormik.touched.password && registerFormik.errors.password ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.password}</div> : <div>&nbsp;</div>}
                        </div>
                        <div>
                            <label className="block mb-4" htmlFor='confirm-password'>Confirm Password <span className="text-[#f14d54]">*</span></label>
                            <input className="w-full rounded-sm border border-gray-300 text-sm py-2 px-5" type="password" id="confirm-password" name="confirmPassword" value={registerFormik.values.confirmPassword} onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} />
                            {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword ? <div className="text-[#f14d54] font-light text-sm">{registerFormik.errors.confirmPassword}</div> : <div>&nbsp;</div>}
                        </div>
                    </div>
                </div>
                <button className="inline-block mb-8 bg-[#f14d54] bg-opacity-90 hover:bg-opacity-100 transition py-2 px-6 rounded-sm text-white font-semibold" type="submit">Register</button>
                <ToastContainer />
            </form>
        </main>
    )
}

export default Register