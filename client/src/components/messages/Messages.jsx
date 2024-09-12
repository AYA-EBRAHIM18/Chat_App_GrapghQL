import { useEffect, useRef } from "react"
import { useGetMsg } from "../../hooks/useGetMessages.jsx"
import { Message } from "./Message.jsx"
import useListenMessages from "../../hooks/useListenMessages.js"

export const Messages = () => {
  const {loading,messages}=useGetMsg()
     useListenMessages()
  const lastMsgRef= useRef()
  useEffect(()=>{
    setTimeout(() => {
			lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <>
    <div className="d-flex flex-column px-4 overflow-auto  bg-opacity-50 messages">
    {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : messages.length === 0 ? (
        <p className="text-center">Send a message to start the conversation</p>
      ) : (
        messages.map((message,idx) => (
          <div  key={message.id || idx} ref={lastMsgRef}>
            <Message message={message}/>
          </div>
        ))
      )}
        
         
    </div>
    </>
  )
}


//starter code

// export const Messages = () => {
//     return (
//       <>
//       <div className="d-flex flex-column px-4 overflow-auto  bg-opacity-50 messages">
  
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//       </div>
//       </>
//     )
//   }