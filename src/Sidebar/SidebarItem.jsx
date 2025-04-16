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

export const SidebarItem = ({ icon, title, children, expanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(expanded)

  const getIcon = () => {
    switch (icon) {
      case "office":
        return <Building className="h-5 w-5" />
      case "admission":
        return <BookOpen className="h-5 w-5" />
      case "student":
        return <Users className="h-5 w-5" />
      case "academic":
        return <BookMarked className="h-5 w-5" />
      case "department":
        return <Building className="h-5 w-5" />
      case "performance":
        return <BarChart2 className="h-5 w-5" />
      case "progress":
        return <LineChart className="h-5 w-5" />
      case "exam":
        return <Award className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <div>
      <div
        className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {getIcon()}
          <span className="text-sm font-medium">{title}</span>
        </div>
        {children && (isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
      </div>

      {isExpanded && children && <div className="pl-4 bg-gray-50">{children}</div>}
    </div>
  )
}
