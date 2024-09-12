import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export const useGetChats=()=>{

const [loading,setLoading]=useState(false)
const [chats,setChats]=useState([])
useEffect(()=>{
    const getChats=async ()=>{
setLoading(true)
        try{
            const res = await fetch("/graphql/chats", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query: `
                    query {
                      usersWithChats {
                        id
                        username
                        gender
                      }
                    }
                  `
                })
              });
      
            const data= await res.json()
        
        if (data.errors) {
            console.error('GraphQL errors:', data.errors);
          throw new Error(data.errors[0].message);
          }
        
         setChats(data.data.usersWithChats);
        }
        catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    getChats()
},[])
return {loading,chats}
}