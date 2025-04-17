import { StatCard } from "./StatCard";
import StudentIcon from "../../assets/student.svg";


export const StatisticsSection = () => {
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
  ];

  const firstSection = statistics.slice(0, 2);
  const secondSection = statistics.slice(2);

  return (
    <div className="flex gap-6  bg-white border border-[#E0E0E0] rounded-[12px] m-6">
      {/* First section: two cards with a vertical divider */}
      <div className="flex w-2/5 items-center justify-between ">
        <div className="flex-1 flex items-center h-[120px] ">
          <StatCard
            title={firstSection[0].title}
            value={firstSection[0].value}
            percentage={firstSection[0].percentage}
            icon={firstSection[0].icon}
            iconAlt={firstSection[0].iconAlt}
            showArrow={firstSection[0].showArrow}
          />
        </div>

        {/* Vertical line */}
        <div className="h-20 w-[2px] bg-[#C5C5C5] mx-4" />

        <div className="flex-1 flex items-center h-[120px] ml-4">
          <StatCard
            title={firstSection[1].title}
            value={firstSection[1].value}
            percentage={firstSection[1].percentage}
            icon={firstSection[1].icon}
            iconAlt={firstSection[1].iconAlt}
            showArrow={firstSection[1].showArrow}
          />
        </div>
      </div>

      {/* Second section: 3 cards */}
      <div className="grid grid-cols-3 gap-4 w-3/5">
        {secondSection.map((stat) => (
          <div key={stat.id} className="flex items-center h-[120px]">
            <StatCard
              title={stat.title}
              value={stat.value}
              percentage={stat.percentage}
              icon={stat.icon}
              iconAlt={stat.iconAlt}
              showArrow={stat.showArrow}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
