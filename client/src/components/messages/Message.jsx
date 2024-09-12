import { useAuthContext } from "../../context/AuthContext.jsx"
import { extractTime } from "../../utilities/extractTime.js"
import { useChats } from "../../zustand/useChats.jsx"

export const Message = ({message}) => {
  const {authUser}=useAuthContext()
  const {selectedChats}=useChats()
  const formattedTime=extractTime(message.createdAt)
  const fromMe=message.senderId ===authUser.data.login.id
  const chatClassName= fromMe ? "chat-end" : "chat-start"
  const chatBg=fromMe ? "chat-end-bg" : "chat-start-bg"
  return (
    <>
   
    <div >
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" style="width: 45px; height: 100%;"> */}
                    <div className={` h-auto w-auto ${chatClassName}`}>
                      <p className={`small p-2 ms-3 mb-1 rounded-3  text-white ${chatBg}`}> {message.message}</p>
                      <p className="small ms-3 mb-3 rounded-3 text-mutes " >{formattedTime}</p>
                    </div>
                  </div>

    
                  
            
    </>
  )
}




//strater code

// export const Message = () => {
//     return (
//       <>
     
//       <div class="d-flex flex-row justify-content-start">
//                       {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//                         alt="avatar 1" style="width: 45px; height: 100%;"> */}
//                       <div>
//                         <p class="small p-2 ms-3 mb-1 rounded-3 message-right">Duis aute
//                           irure
//                           dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                         </p>
//                         <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
//                       </div>
//                     </div>
  
      
//                     <div class="d-flex flex-row justify-content-end">
//                       <div>
//                         <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-body-tertiary bg-opacity-25">Ut enim ad minim veniam,
//                           quis
//                           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                         <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
//                       </div>
//                       {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                         alt="avatar 1" style="width: 45px; height: 100%;"> */}
//                     </div>
              
//       </>
//     )
//   }
  