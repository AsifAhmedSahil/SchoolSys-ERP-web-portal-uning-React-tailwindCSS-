import DashboardInfo from "./Components/DashboardInfo";
import { StatisticsSection } from "./Components/StaticsSection";
import { WelcomeSection } from "./Components/WelcomeSection";


export const DashboardContent = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <WelcomeSection />
      <StatisticsSection/>
      <DashboardInfo/>
      
    </div>
  )
}