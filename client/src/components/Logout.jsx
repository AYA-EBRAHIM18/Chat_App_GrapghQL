import { CiLogout } from "react-icons/ci";
import { useLogout } from "../hooks/useLogout.jsx";

export const Logout = () => {
  const {loading,logout}=useLogout()
  return (
    <>
    <div className="mt-auto logout-btn ">
      {!loading ? (<CiLogout className="text-white fs-4 fw-bold" onClick={logout} />) :(
         <div className="spinner-border" role="status"></div>
      ) }
     
    </div>
    </>
  )
}
