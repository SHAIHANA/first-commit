import React from 'react'
import { Link } from 'react-router-dom';
import { SiPolymerproject } from "react-icons/si";
import { registerAPI } from '../Services/AllApis';
import { useState } from 'react';
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({ register }) {
    console.log(register);


    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })
    console.log(userData);
    const handleRegister = async () => {
        const { username, email, password } = userData
        if (!username || !email || !password) {
           
            toast.error('please fill the details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
                });
        }
        else {
            //api fetching
            const response = await registerAPI(userData)
            console.log(response);

            if (response.status == 200) {
                toast.success('Register Successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                   
                    });
                setUserData({username:"",email:"",password:""})
            }
            else {
                // alert(response.data)/
                toast.warn(response.response.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                   
                    });
            }

        }
    }
    return (


        <div className='m-5 px-5' style={{ display: 'flex' }}>

            <div className='row border border-1 shadow text-light m-5 rounded' >

                <div className='col-6'>
                    <img width={'100%'} src="https://static-00.iconduck.com/assets.00/user-login-icon-1948x2048-nocsasoq.png" alt="" />
                </div>


                <div className='col-6  text-center text-dark '>

                    <SiPolymerproject style={{ fontSize: '30px' }} className='mt-4' />
                    <h3 className='mt-2' >Project Fair</h3>
                    <h5>Sign {register ? "Up" : "In"} your account</h5>

                    <form className='p-5'>
                        {
                            register &&
                            <input onChange={(e) => setUserData({ ...userData, username: e.target.value })} className='form-control mb-3 ' placeholder='Username' type="text" />
                        }

                        <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="text" className='mb-3 form-control ' placeholder='Email' /> <br />
                        <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="password" className='mb-3 form-control ' placeholder='Password' />

                    </form>
                    {
                        register ?
                            <div>
                                <button onClick={handleRegister} className='btn text-dark bg-warning mb-3  ' >Register</button>
                                <p>Alreaady Registerd? <Link to={'/login'}>Login here...</Link></p>


                            </div>
                            :
                            <div>
                                <button className='btn btn-outline-dark mb-3 '>Login</button>
                                <p>New To here? <Link to={'/register'}>Please register here...</Link></p>


                            </div>
                    }




                </div>





            </div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </div>
    )
}

export default Auth