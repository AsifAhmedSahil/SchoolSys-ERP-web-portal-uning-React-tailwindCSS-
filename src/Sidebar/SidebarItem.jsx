

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Users,
  BarChart2,
  LineChart,
  Award,
  BookMarked,
  Building,
} from "lucide-react"

export const SidebarItem = ({ icon, title, children, expanded = false, onClick = () => {} }) => {
  const [isExpanded, setIsExpanded] = useState(expanded)

  const getIcon = () => {
    switch (icon) {
      case "office":
        return <Building className="h-4 w-4" />
      case "admission":
        return <BookOpen className="h-4 w-4" />
      case "student":
        return <Users className="h-4 w-4" />
      case "academic":
        return <BookMarked className="h-4 w-4" />
      case "department":
        return <Building className="h-4 w-4" />
      case "performance":
        return <BarChart2 className="h-4 w-4" />
      case "progress":
        return <LineChart className="h-4 w-4" />
      case "exam":
        return <Award className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const handleClick = () => {

    if (children) {
      setIsExpanded(!isExpanded)
    }
    onClick()
  }

  return (
    <div className="bg-[#ECEFF3]">
      <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer " onClick={handleClick}>
        <div className="flex items-center gap-2 ">
          {getIcon()}
          <span className="text-sm font-medium">{title}</span>
        </div>
        {children && (isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
      </div>

      {isExpanded && children && <div className="pl-4 bg-[#ECEFF3]">{children}</div>}
    </div>
  )
}
