import { Bell, Calendar } from "lucide-react"
import { Breadcrumb } from "./Breadcrumb"


export const Header = ({ breadcrumbItems }) => {
  return (
    <div className="h-16 bg-white rounded-lg flex items-center justify-between px-4 ">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Calendar className="h-5 w-5 text-gray-500" />
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
          JW
        </div>
      </div>
    </div>
  )
}
