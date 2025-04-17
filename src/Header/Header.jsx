import { Bell, Calendar } from "lucide-react"
import { Breadcrumb } from "./Breadcrumb"
import NoticeIcon from "../assets/notice.svg"
import CalenderIcon from "../assets/calender.svg"


export const Header = ({ breadcrumbItems }) => {
  return (
    <div className="h-10 bg-white rounded-lg flex items-center justify-between px-4 ">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-center gap-4">
        
        <button className="p-2  flex justify-center items-center gap-2 cursor-pointer">
          <img src={NoticeIcon} className="h-5 w-5 text-gray-500" />
          <span className="text-[#565656] ">Notice</span>
        </button>
        <button className="p-2  flex justify-center items-center gap-2 cursor-pointer">
          <img src={CalenderIcon} className="h-5 w-5 text-gray-500" />
          <span className="text-[#565656]">Calender</span>
        </button>
        <button className="p-2 relative cursor-pointer">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
          JW
        </div>
      </div>
    </div>
  )
}
