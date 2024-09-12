import { Chats } from "./Chats.jsx"
import { Logout } from "./Logout.jsx"
import { SearchInput } from "./SearchInput.jsx"

export const Sidebar = () => {
  return (
    <>
    <div className="">
      <SearchInput/>
      <div className=""><hr /></div>
      <Chats/>
      <Logout/>
    </div>
    </>
  )
}



//starter code

// export const Sidebar = () => {
//   return (
//     <>
//     <div className="">
//       <SearchInput/>
//       <div className=""><hr class="hr" /></div>
//       <Chats/>
//       <Logout/>
//     </div>
//     </>
//   )
// }