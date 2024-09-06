import { GenderCheckBox } from "./genderCheckBox.jsx"

export const SignUp = () => {
  return (
    <>
    <div className="w-50 d-flex justify-content-center align-items-center ">
        <div className="w-100 bg-body-tertiary bg-opacity-50 p-5 rounded-3 ">
            <h1 className="text-white text-center fs-2">Sign Up   
                <span className="text-primary"> Chat App</span></h1>

                <form>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Username</span>
                      </label>
                      <input type="text" placeholder="Enter Username.." className="form-control mb-3" />

                    </div>
                   <GenderCheckBox/>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Password</span>
                      </label>
                      <input type="password" placeholder="Enter Password.." className="form-control mb-3" />
                    </div>
                    <div>
                      <label htmlFor="" className="p-2 form-label">
                        <span className="text-white fs-5">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Enter Password.." className="form-control mb-3" />
                    </div>
                    <a href="" className="link">Already have an account?</a>
                    <div className="">
                        <button className="btn btn-primary mt-3 w-100">signUp</button>
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