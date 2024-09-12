import { useSocketContext } from "../context/socketContext.jsx"
import { useChats } from "../zustand/useChats.jsx"

export const Chat = ({chat,lastIdx}) => {
 const {selectedChats,setSelectedChats}= useChats()
 const isSelected=selectedChats?.id === chat.id
 const {onlineUsers}=useSocketContext()
 const isOnline=onlineUsers.includes(chat.id)
  return (
    <>
    <div className={`
      ${isSelected ? "selected-chat" : ""}  `}
      onClick={()=>{setSelectedChats(chat)}}
      >
       
       <div className="chat-item">
      <div className="chat-name-container">
        {isOnline ? (<span className="online-indicator"></span>) :  " "} {/* Online indicator */}
        <span className="chat-name fs-5">{chat.username}</span>
        <span className="fs-6 text-white ">🤗</span>
      </div>
    
    </div>
    {!lastIdx && <div className=" py-0 my-0"><hr  /></div> }
    </div>
  
    </>
  )
}

{/* <div className="d-flex justify-content-between align-items-center w-100  ">
<div className="chat-avatar" style={{ backgroundColor: isOnline ? '#4caf50' : '#ccc' }}> */}
{/* Placeholder for avatar, replace with actual avatar if available */}
// </div>
//     <span className=" fw-bold fs-5  text-white">{chat.username}</span>
//     <span className="fs-6 text-white">🤗</span>
// </div>

// {!lasIdx && <div className=" py-0 my-0"><hr  /></div> }


//starter code

// export const Chat = () => {
//     return (
//       <>
//       <div className="d-flex align-items-center chat rounded-1 p-2   my-1">
         
//               <div className="d-flex justify-content-between w-100  ">
//                   <p className=" fw-bold text-white">John Doe</p>
//                   <span className="fs-6 text-white">🤗</span>
//               </div>
        
//       </div>
//       <div className=" py-0 my-0"><hr class="hr" /></div>
//       </>
//     )
//   }