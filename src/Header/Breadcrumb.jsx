import { ChevronRight, Folder, FileText } from "lucide-react"
import DashboardFolder from "../assets/dashboardFolder.svg"

export const Breadcrumb = ({ items = [] }) => {
  
  if (items.length === 0) {
    return (
      <div className="flex items-center gap-2">
        <img src={DashboardFolder} className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700">Dashboard</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}

          <div className="flex items-center gap-2">
            {index === items.length - 1 ? (
              <FileText className="h-5 w-5 text-gray-500" />
            ) : (
              <Folder className="h-5 w-5 text-gray-500" />
            )}

            <span className={`${item.active ? "text-gray-700" : "text-gray-700"}`}>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
