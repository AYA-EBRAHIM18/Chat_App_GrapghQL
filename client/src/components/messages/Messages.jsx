import { Message } from "./Message.jsx"

export const Messages = () => {
  return (
    <>
    <div className="d-flex flex-column px-4 overflow-auto  bg-opacity-50 messages">

        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
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