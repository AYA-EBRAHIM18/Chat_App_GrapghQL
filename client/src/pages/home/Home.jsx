import { MessageContainer } from "../../components/messages/MessageContainer.jsx"
import { Sidebar } from "../../components/Sidebar.jsx"

export const Home = () => {
  return (
    <>
    <div className=" homepage row w-75  overflow-hidden rounded-3 bg-body-tertiary bg-opacity-50 p-3">
      <div className="col-md-4 h-100 ">
        <Sidebar/>
      </div>
      <div className="col-md-8 h-100 ">
        <MessageContainer/>
      </div>
    </div>
    </>
  )
}
