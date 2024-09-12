import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

export const useLogin = () => {
  const [loading,setLoading]=useState(false);
  const { setAuthUser}=useAuthContext()
  const login= async (username,password)=>{
    const success= handleInputErrors(username,password)
    if(!success) return ;
   
    setLoading(true)
    try{
        const res = await fetch('/graphql/users', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query:`
            query Login($username: String!, $password: String!) {
              login(username: $username, password: $password) {
                id
                username
                token
              }
            }
          `,
              variables: { username, password }
            })
          
          });

        const data= await res.json()
        
        if (data.errors) {
            throw new Error(data.errors[0].message);
          }
    
        
          toast.success('Log-in successful!');
          localStorage.setItem('chat-user',JSON.stringify(data))
          setAuthUser(data)
    }
    catch(error){

        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  }
  return {loading,login}
}


function handleInputErrors(username,password){
    if(!username || !password ){
        toast.error("Please fill in all fields.")
        return false
    }
   
   
return true

}