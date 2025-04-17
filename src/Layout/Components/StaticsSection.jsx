import { StatCard } from "./StatCard"
import StudentIcon from "../../assets/student.svg"

export const StatisticsSection = () => {
  // Array of statistics data
  const statistics = [
    {
      id: 1,
      title: "Total Student",
      value: "576",
      icon: StudentIcon,
      iconAlt: "Student icon",
      showArrow: true,
    },
    {
      id: 2,
      title: "Present Today",
      value: "423",
      percentage: "70% of total student",
    },
    {
      id: 3,
      title: "Absent Today",
      value: "153",
      percentage: "30% of total student",
    },
    {
      id: 4,
      title: "Male Student",
      value: "357",
      percentage: "60% of total student",
    },
    {
      id: 5,
      title: "Female Student",
      value: "219",
      percentage: "40% of total student",
    },
  ]

  return (
    <div className="grid grid-cols-5 gap-4 m-6  bg-white border-1 border-gray-300 rounded-lg">
      {statistics.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          icon={stat.icon}
          iconAlt={stat.iconAlt}
          showArrow={stat.showArrow}
        />
      ))}
    </div>
  )
}
