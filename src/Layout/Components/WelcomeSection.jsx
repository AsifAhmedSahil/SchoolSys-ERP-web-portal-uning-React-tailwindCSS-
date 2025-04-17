
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dashboardImage from "../../assets/dashboard.png"

export function WelcomeSection() {
  return (
    <div className="bg-white  overflow-hidden ">
      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Hi, Welcome to</h1>
            <h2 className="text-2xl font-semibold">Al-Hidaayah International School</h2>
            <p className="text-gray-500 mt-4 text-lg">Here's whats happening with your school today!</p>
          </div>
          <div className="relative w-[600px] h-[100px] ">
            <img
              src={dashboardImage}
              alt="School illustration"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-[96%] mx-auto border-b border-[#E5E5E5] ">
        
        <TabsList className=" h-12 rounded-none bg-transparent w-full justify-start  gap-8">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full text-[16px] "
          >
            Overview
          </TabsTrigger> 
          <TabsTrigger
            value="academic"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full text-[16px]"
          >
            Academic
          </TabsTrigger>
          <TabsTrigger
            value="accounts"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full text-[16px]"
          >
            Accounts
          </TabsTrigger>
          <TabsTrigger
            value="store"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full text-[16px]"
          >
            Store
          </TabsTrigger>
          <TabsTrigger
            value="hris"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full text-[16px]"
          >
            HRIS
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
