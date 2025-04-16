
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
          {/* <div className="relative w-[300px] h-[100px]">
            <Image
              src="/placeholder.svg?height=100&width=300"
              alt="School illustration"
              width={300}
              height={100}
              className="object-contain"
            />
          </div> */}
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className=" h-12 rounded-none bg-transparent w-full justify-start px-6 gap-8">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full"
          >
            Overview
          </TabsTrigger> 
          <TabsTrigger
            value="academic"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full"
          >
            Academic
          </TabsTrigger>
          <TabsTrigger
            value="accounts"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full"
          >
            Accounts
          </TabsTrigger>
          <TabsTrigger
            value="store"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full"
          >
            Store
          </TabsTrigger>
          <TabsTrigger
            value="hris"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-full"
          >
            HRIS
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
