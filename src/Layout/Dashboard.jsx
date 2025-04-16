import { Sidebar } from '../Sidebar/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%] flex flex-col overflow-hidden p-4">
        {/* <Header />
        <DashboardContent /> */}
      </div>
    </div>
  )
}

export default Dashboard