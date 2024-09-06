import { IoMdSend } from "react-icons/io";

export const MessageInput = () => {
  return (
    <>
    <form action="" className="px-4 my-3">
      <div className="w-100 d-flex position-relative ">
        <input type="text" className="form-control  " placeholder="Send a message..." />
        <button type="submit" className="btn  d-flex  align-items-center pe-3 position-absolute end-0"><IoMdSend className="send fs-4" />
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