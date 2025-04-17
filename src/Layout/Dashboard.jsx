import { useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"
import { Header } from "../Header/Header"
import { DashboardContent } from "./DashboardContent"


export const Dashboard = () => {
  // This would normally come from your router or state management
  const [currentPath, setCurrentPath] = useState([])

  // This function would be called when a sidebar item is clicked
  const handleNavigation = (path) => {
    setCurrentPath(path)
  }
  

  return (
    <div className="flex h-screen bg-[#ECEFF3]">
      <div className="w-[17%]">
        <Sidebar onNavigate={handleNavigation} />
      </div>
      <div className="w-[83%] flex flex-col overflow-hidden p-4 h-[95%] rounded-2xl shadow-lg border border-gray-300 bg-white m-4 ">
        <Header breadcrumbItems={currentPath} />
        <DashboardContent />
      </div>
    </div>
  )
}
