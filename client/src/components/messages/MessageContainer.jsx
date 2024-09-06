import { MessageInput } from "./MessageInput.jsx"
import { Messages } from "./Messages.jsx"
import { TiMessages } from "react-icons/ti";

export const MessageContainer = () => {
    const noChatSelected=true
  return (
    <>
    <div className="d-flex flex-column  ">
        {noChatSelected ? <NoChatSelected/> : (
            <>
            <div className="px-4 py-2 mb-2 bg-body-secondary bg-opacity-50">
             <span >TO:</span> <span className="text-black">John Doe</span>
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
    return (
      <>
      <div className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="px-4 text-center d-flex flex-column  text-white">
            <p className="fs-4 fw-bold">Welcome👋John Doe🍁</p>
            <p className="fs-4">Select a chat to start messaging</p>
            <TiMessages className=" fs-1 text-center w-100"/>

        </div>
      </div>
      </>
    )
  }