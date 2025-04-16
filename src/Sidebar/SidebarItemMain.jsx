

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

export const SidebarItemMain = ({  title, children, expanded = false, onClick = () => {} }) => {
  const [isExpanded, setIsExpanded] = useState(expanded)

  

  const handleClick = () => {

    if (children) {
      setIsExpanded(!isExpanded)
    }
    onClick()
  }

  return (
    <div>
      <div className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <div className="flex items-center gap-3">
        
          <span className="text-sm font-medium">{title}</span>
        </div>
        {children && (isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
      </div>

      {isExpanded && children && <div className="pl-4 bg-[#ECEFF3]">{children}</div>}
    </div>
  )
}
