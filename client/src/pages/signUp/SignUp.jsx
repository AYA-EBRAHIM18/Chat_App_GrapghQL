import { Link } from "react-router-dom"
import { GenderCheckBox } from "./genderCheckBox.jsx"
import { useState } from "react"
import { useSignUp } from "../../hooks/useSignUp.jsx";

export const SignUp = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const {loading,signUp}=useSignUp()
  const handleBoxChange=(gender)=>{
    setInputs({...inputs,gender})

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    await signUp(inputs)
   
  
    
  }
  return (
    <>
    <div className="w-50 d-flex justify-content-center align-items-center ">
        <div className="w-100 bg-body-tertiary bg-opacity-50 p-5 rounded-3 ">
            <h1 className="text-white text-center fs-2">Sign Up   
                <span className="text-primary"> Chat App</span></h1>

                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Username</span>
                      </label>
                      <input type="text" placeholder="Enter Username.." className="form-control mb-3"
                       value={inputs.username} 
                      onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                      />

                    </div>
                   <GenderCheckBox onCheckBoxChange={handleBoxChange} selectedGender={inputs.gender}/>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Password</span>
                      </label>
                      <input type="password" placeholder="Enter Password.." className="form-control mb-3" 
                      value={inputs.password} 
                      onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
                    </div>

                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Confirm Password.." className="form-control mb-3" 
                      value={inputs.confirmPassword} 
                      onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
                    </div>
                    <Link to={"/login"} className="link">Already have an account?</Link>
                    <div className="">
                        <button disabled={loading} className="btn btn-primary mt-3 w-100"> {!loading ? "Sign Up":(
         <div className="spinner-border" role="status"></div>
      ) }</button>
                    </div>
                </form>
         
        </div>
    </div>
    </>
  )
}



//started code 
// export const SignUp = () => {
//   return (
//     <>
//     <div className="w-50 d-flex justify-content-center align-items-center ">
//         <div className="w-100 bg-body-tertiary bg-opacity-50 p-5 rounded-3 ">
//             <h1 className="text-white text-center fs-2">Sign Up   
//                 <span className="text-primary"> Chat App</span></h1>

//                 <form>
//                     <div>
//                       <label htmlFor="" className="p-2 form-label">
//                         <span className="text-white fs-5">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter Username.." className="form-control mb-3" />

//                     </div>
//                    <GenderCheckBox/>
//                     <div>
//                       <label htmlFor="" className="p-2 form-label">
//                         <span className="text-white fs-5">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password.." className="form-control mb-3" />
//                     </div>
//                     <div>
//                       <label htmlFor="" className="p-2 form-label">
//                         <span className="text-white fs-5">Confirm Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password.." className="form-control mb-3" />
//                     </div>
//                     <a href="" className="link">Already have an account?</a>
//                     <div className="">
//                         <button className="btn btn-primary mt-3 w-100">signUp</button>
//                     </div>
//                 </form>
         
//         </div>
//     </div>
//     </>
//   )
// }