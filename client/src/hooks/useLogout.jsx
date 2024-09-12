import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

export const useLogout = () => {
  const [loading,setLoading]=useState(false);
  const { setAuthUser}=useAuthContext()
const logout= async ()=>{

    setLoading(true)
    try{
        const res = await fetch('/graphql/users', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: `
      mutation {
        logout
      }
    `,
             
            })
          });

        const data= await res.json()
        
        if (data.error) {
            throw new Error(data.errors[0].message);
          }
    
        
          toast.success('Log-Out successful!');
          localStorage.removeItem('chat-user')
          setAuthUser(null)
    }
    catch(error){

        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  }
  return {loading,logout}
}


