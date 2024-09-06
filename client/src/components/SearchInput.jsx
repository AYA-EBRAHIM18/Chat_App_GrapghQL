import { FaSearch } from "react-icons/fa";

export const SearchInput = () => {
  return (
    <>
    <form className="d-flex align-items-center justify-content-center g-2">
        <input type="text " placeholder="search.." className="form-control " />
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