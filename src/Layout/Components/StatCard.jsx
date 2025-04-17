import { ArrowUpRight } from "lucide-react";
// import arrowup from "../../assets/arrowup.svg";

export const StatCard = ({
  title,
  value,
  percentage,
  icon,
  iconAlt,
  showArrow,
}) => {
  return (
    <div className="  rounded-[12px]  w-full ">
      <div className="flex justify-between items-start ">

      {icon && (
          <div className=" relative bg-white rounded-[12px] ">
            <img
              src={icon || "/placeholder.svg"}
              alt={iconAlt || "Icon"}
              width={300}
              height={300}
              className="h-[120px] w-[120px] object-contain "
            />
          </div>
        )}

        <div className="my-3 ">
          <div className="flex gap-3 wfu" >
          <div className="text-lg font-medium w-full">{title}</div>
          {showArrow && <ArrowUpRight className="h-10 w-10 text-gray-400" />}
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
