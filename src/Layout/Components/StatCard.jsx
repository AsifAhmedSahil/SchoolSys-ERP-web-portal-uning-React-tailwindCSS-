import { ArrowUpRight } from "lucide-react";

export const StatCard = ({
  title,
  value,
  percentage,
  icon,
  iconAlt,
  showArrow,
}) => {
  return (
    <div className="bg-white rounded-lg ml-2 ">
      <div className="flex justify-between items-start px-6">

      {icon && (
          <div className=" relative ">
            <img
              src={icon || "/placeholder.svg"}
              alt={iconAlt || "Icon"}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        )}

        <div className="my-3">
          <div className="flex gap-3">
          <h3 className="text-sm font-medium ">{title}</h3>
          {showArrow && <ArrowUpRight className="h-5 w-5 text-gray-400" />}
          </div>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {percentage && (
            <p className="text-xs  mt-1">{percentage}</p>
          )}
        </div>

        

      </div>
    </div>
  );
};
