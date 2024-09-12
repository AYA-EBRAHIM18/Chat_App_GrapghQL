import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

export const useSignUp = () => {
  const [loading,setLoading]=useState(false);
  const { setAuthUser}=useAuthContext()
  const signUp= async ({username,password,confirmPassword,gender})=>{
    const success= handleInputErrors({username,password,confirmPassword,gender})
    if(!success) return ;
    const mutation = `
    mutation Register($username: String!, $password: String!, $confirmPassword: String!, $gender: String!) {
        register(username: $username, password: $password, confirmPassword: $confirmPassword, gender: $gender) {
            id
            username
            token
        }
    }
`;

const variables = {
    username,
    password,
    confirmPassword,
    gender
};
    setLoading(true)
    try{
        const res = await fetch('/graphql/users', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: mutation,
              variables: variables
            })
          });

        const data= await res.json()
        
        if (data.errors) {
            throw new Error(data.errors[0].message);
          }
    
        
          toast.success('Sign-up successful!');
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
  return {loading,signUp}
}


function handleInputErrors({username,password,confirmPassword,gender}){
    if(!username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all fields.")
        return false
    }
    if(password !== confirmPassword){
        toast.error("Passwords don't match.")
        return false
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters.")
        return false
    }
return true

}