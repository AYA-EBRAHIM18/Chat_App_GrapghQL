import { IoMdSend } from "react-icons/io";
import { useSendMsg } from "../../hooks/useSendMessage.jsx";
import { useState } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

export const MessageInput = () => {
  const [message,setMessage]=useState("")

 const {loading, sendMsg}=useSendMsg()
  const handleSubmit= async (e)=>{
e.preventDefault();
if(!message) return;
await sendMsg(message)
setMessage("")
  }
  useListenMessages()
  return (
    <>
    <form onSubmit={handleSubmit} className="px-4 my-3">
     
      <div className="w-100 d-flex position-relative my-3">
      <p className="typing " id="typing"></p>
        <input type="text" className="form-control  " id="chatInput" placeholder="Send a message..."
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button disabled={loading} type="submit" className="btn  d-flex  align-items-center pe-3 position-absolute end-0">
         {!loading ? ( <IoMdSend className="send fs-4" /> ):(
         <div className="spinner-border" role="status"></div>
      ) }
        </button>
      </div>
      </form> 
         </>
  )
}


//starter code

// export const MessageInput = () => {
//   return (
//     <>
//     <form action="" className="px-4 my-3">
//       <div className="w-100 d-flex ">
//         <input type="text" className="form-control " placeholder="Send a message..." />
//         <button type="submit" className="btn  d-flex align-items-center pe-3"><IoMdSend className="send" />
//         </button>
//       </div>
//       </form> 
//          </>
//   )
// }