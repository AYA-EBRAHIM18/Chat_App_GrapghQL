import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

import { useChats } from "../../zustand/useChats.jsx";
import { MessageInput } from "./MessageInput.jsx"
import { Messages } from "./Messages.jsx"
import { TiMessages } from "react-icons/ti";

export const MessageContainer = () => {

    const {selectedChats,setSelectedChats}=useChats();
   
    useEffect(()=>{
      //cleanup function
      return ()=> setSelectedChats(null)
    },[setSelectedChats])
  return (
    <>
    <div className="d-flex flex-column  ">
        {!selectedChats ? <NoChatSelected/> : (
            <>
            <div className="px-4 py-2 mb-2 bg-body-secondary bg-opacity-50">
             <span >TO:</span> <span className="text-black">{selectedChats.username}</span>
               </div>

<Messages/>
<MessageInput/>
            </>
        )}
    </div>
    </>
  )
}


 const NoChatSelected = () => {
  const {authUser}=useAuthContext()
    return (
      <>
      <div className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="px-4 text-center d-flex flex-column  text-white">
            <p className="fs-4 fw-bold">Welcome👋{authUser.data.login.username}🍁</p>
            <p className="fs-4">Select a chat to start messaging</p>
            <TiMessages className=" fs-1 text-center w-100"/>

        </div>
      </div>
      </>
    )
  }