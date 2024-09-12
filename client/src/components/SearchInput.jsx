import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useChats } from "../zustand/useChats.jsx";
import { useGetChats } from "../hooks/useGetChats.jsx";
import toast from "react-hot-toast";

export const SearchInput = () => {
  const [search,setSearch]=useState("")
  const {setSelectedChats}=useChats()
  const {chats}=useGetChats()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length <3){
      return toast.error("search term must be at least 3 characters long")
    }
const chat =chats.find((c)=> c.username.toLowerCase().includes(search.toLowerCase()))
if(chat){
  setSelectedChats(chat)
  setSearch('')
}else{
  toast.error(`No user found with name ${search} `)
}
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center g-2">
        <input type="text " placeholder="search.." className="form-control " 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className=" rounded-circle text-white bg-black mx-2"><FaSearch />
        </button>
    </form>
    </>
  )
}


//starter code 
// export const SearchInput = () => {
//     return (
//       <>
//       <form className="d-flex align-items-center justify-content-center g-2">
//           <input type="text " placeholder="search.." className="form-control " />
//           <button type="submit" className=" rounded-circle text-white bg-black mx-2"><FaSearch />
//           </button>
//       </form>
//       </>
//     )
//   }