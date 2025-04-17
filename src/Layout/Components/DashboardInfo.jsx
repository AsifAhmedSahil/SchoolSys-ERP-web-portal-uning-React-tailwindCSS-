import React from "react";
import { ClassChart } from "./CLassChart";
import { NoticeBoard } from "./NoticeBoard";
import { CalendarWidget } from "./Calender";

const DashboardInfo = () => {
  return (
    <div className="grid grid-cols-10 ">
      <div className="col-span-4 flex flex-col gap-5">
        <ClassChart />
        <NoticeBoard />
      </div>

      <div className="col-span-6">
        <CalendarWidget />
      </div>
    </div>
  );
};

export default DashboardInfo;
