import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin.jsx"

export const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const {loading, login}=useLogin()
  const handleSubmit= async (e)=>{
   e.preventDefault();
   await login(username,password)
  }
  return (
    <>
    <div className="w-50 d-flex justify-content-center align-items-center ">
        <div className="w-100 bg-body-tertiary bg-opacity-50 p-5 rounded-3 ">
            <h1 className="text-white text-center fs-2">Login   
                <span className="text-primary"> Chat App</span></h1>

                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Username</span>
                      </label>
                      <input type="text" placeholder="Enter Username.." className="form-control mb-3"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Password</span>
                      </label>
                      <input type="password" placeholder="Enter Password.." className="form-control mb-3"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <Link to={"/signUp"} className="link">Don't have an account?</Link>
                    <div className="">
                        <button disabled={loading} className="btn btn-primary mt-3 w-100">
                           {!loading ? "Login":(
         <div className="spinner-border" role="status"></div>
      ) }</button>
                    </div>
                </form>
         
        </div>
    </div>
    </>
  )
}


//stater code
// export const Login = () => {
//     return (
//       <>
//       <div className="w-50 d-flex justify-content-center align-items-center ">
//           <div className="w-100 bg-body-tertiary bg-opacity-50 p-5 rounded-3 ">
//               <h1 className="text-white text-center fs-2">Login   
//                   <span className="text-primary"> Chat App</span></h1>
  
//                   <form>
//                       <div>
//                         <label htmlFor="" className="p-2 form-label">
//                           <span className="text-white fs-5">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter Username.." className="form-control mb-3" />
//                       </div>
//                       <div>
//                         <label htmlFor="" className="p-2 form-label">
//                           <span className="text-white fs-5">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password.." className="form-control mb-3" />
//                       </div>
//                       <a href="" className="link">Don't have and account?</a>
//                       <div className="">
//                           <button className="btn btn-primary mt-3 w-100">Login</button>
//                       </div>
//                   </form>
           
//           </div>
//       </div>
//       </>
//     )
//   }
  