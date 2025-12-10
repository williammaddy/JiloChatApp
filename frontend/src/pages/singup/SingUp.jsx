import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSingup from '../../hooks/useSingup';

const SingUp = () => {
  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  const {loading,singup}=useSingup()
  const handleCheckboxChange = (gender)=>{
    setInputs({
      ...inputs,gender
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await singup(inputs)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100'">
        <h1 className='text-3xl font-semibold text-center text-gray-800'>
                Sign Up <span className='text-blue-700'>JiloChatz</span>
            </h1>
          <form onSubmit={handleSubmit}>
            {/*Fullname*/}
            <div>
              <label className='label p-2'>
               <span className='text-gray-800 label-text'>Full name</span>
               </label>
               <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' 
                value={inputs.fullName}
                onChange={(e)=>setInputs({
                  ...inputs,fullName:e.target.value
                })}
               />
            </div>
            {/*Username*/}
            <div>
              <label className='label p-2'>
               <span className='text-gray-800 label-text'>Username</span>
               </label>
               <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' 
               value={inputs.username}
               onChange={(e)=>setInputs({
                ...inputs,username:e.target.value
               })}
               />
            </div>
            {/*Password*/}
            <div>
                    <label className='label p-2'>
                        <span className='text-gray-800 label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' 
                    value={inputs.password}
               onChange={(e)=>setInputs({
                ...inputs,password:e.target.value
               })}
                    />
            </div>
            {/*Confirm Password*/}

              <div>
                    <label className='label p-2'>
                        <span className='text-gray-800 label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' 
                    
                    value={inputs.confirmPassword}
                    onChange={(e)=>setInputs({
                     ...inputs,confirmPassword:e.target.value
                    })}
                    
                    />
            </div>

          {/*Gender check box */}
          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          {/*have an acc*/}
          <Link to="/login" className='text-sm text-blue-700 hover:underline hover:text-gray-800 mt-2 inline-block'>You already have an account?</Link>

          {/*button*/}
            <div>
              <button className="btn btn-block btn-500 mt-2"
              disabled={loading}
              >{loading?<span className='loading loading-spinner'></span>:"Sign Up"}</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default SingUp;





  {/*return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100'">
        <h1 className='text-3xl font-semibold text-center text-gray-800'>
                Sign Up <span className='text-blue-700'>JiloChatz</span>
            </h1>
          <form>
            
            <div>
              <label className='label p-2'>
               <span className='text-gray-800 label-text'>Full name</span>
               </label>
               <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' />
            </div>
            
            <div>
              <label className='label p-2'>
               <span className='text-gray-800 label-text'>Username</span>
               </label>
               <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
            </div>
           
            <div>
                    <label className='label p-2'>
                        <span className='text-gray-800 label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
            </div>
            

              <div>
                    <label className='label p-2'>
                        <span className='text-gray-800 label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
            </div>

          
          <GenderCheckBox/>

          
          <a href="#" className='text-sm text-blue-700 hover:underline hover:text-gray-800 mt-2 inline-block'>You already have an account?</a>

         
            <div>
              <button className="btn btn-block btn-500 mt-2">Sign Up</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default SingUp;
*/}

