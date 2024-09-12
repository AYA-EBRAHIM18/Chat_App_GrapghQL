import { useEffect, useState } from "react"
import toast from "react-hot-toast";
 import { useChats } from "../zustand/useChats.jsx";

export const useGetMsg = () => {
  const [loading,setLoading]=useState(false);
  const {messages,setMessages,selectedChats}=useChats()
 useEffect(()=>{
    const getMsg=async()=>{
        setLoading(true)
    try{
        const res = await fetch('/graphql/chats', { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query:`
          query GetChat( $receiverId: String!) {
  getChat(receiverId: $receiverId) {
    messages {
      senderId
      message
      createdAt
  
    }
  }
}

          `,
              variables: { receiverId:selectedChats?.id }
            })
          
          });

        const data= await res.json()
        
        if (data.errors) {
            throw new Error(data.errors[0].message);
          }  
          setMessages(data.data.getChat.messages);
         
        
          
    }
    catch(error){

        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  
    };
    if(selectedChats?.id) {
        getMsg()
    }
 },[selectedChats?.id,setMessages])
 
  return {loading,messages}
}


