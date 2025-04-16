
import { ArrowUpRight } from "lucide-react"


export const StatCard = ({ title, value, percentage, icon, iconAlt, showArrow }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-start ">
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {percentage && <p className="text-xs text-gray-500 mt-1">{percentage}</p>}
        </div>

        {icon && (
          <div className="h-16 w-16 relative">
            <img
              src={icon || "/placeholder.svg"}
              alt={iconAlt || "Icon"}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        )}

        {showArrow && <ArrowUpRight className="h-5 w-5 text-gray-400" />}
      </div>
    </div>
  )
}
