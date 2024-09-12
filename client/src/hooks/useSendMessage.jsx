import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useChats } from "../zustand/useChats.jsx";

export const useSendMsg = () => {
  const [loading,setLoading]=useState(false);
  const {messages,setMessages,selectedChats}=useChats()

  const sendMsg= async (message)=>{
    setLoading(true)
    try{
        const res = await fetch('/graphql/messages', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query:`
           mutation CreateMessage($receiverId: String!, $message: String!) {
  createMsg(receiverId: $receiverId, message: $message) {
    id
    senderId
    receiverId
    message
    createdAt
  }
}
          `,
              variables: { receiverId:selectedChats.id, message }
            })
          
          });

        const data= await res.json()
        
        if (data.errors) {
            throw new Error(data.errors[0].message);
          }
    setMessages([...messages,data.data.createMsg])
        
          
    }
    catch(error){

        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  }
  return {loading,sendMsg}
}


