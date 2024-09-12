import { useGetChats } from "../hooks/useGetChats.jsx"
import { Chat } from "./Chat.jsx"

export const Chats = () => {
  const { loading,chats}=useGetChats()
  
  return (
    <>
    <div className="d-flex flex-column py-2 overflow-auto ">

      {chats.map((chat,idx)=>(
        <Chat 
        key={chat._id || idx} 
        chat={chat}
        lastIdx={idx === chats.length -1}
        />
      ))}
{loading ?  <div className="spinner-border" role="status"></div> : null}
        
    </div>
    </>
  )
}
