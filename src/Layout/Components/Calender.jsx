// ✅ Make sure this is imported in your app's entry or layout
import "react-big-calendar/lib/css/react-big-calendar.css";

import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/Tabs";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const sampleEvents = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(12, 0, 0, 0)),
    resourceType: "personal",
  },
  {
    id: 2,
    title: "Science Exhibition",
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
    resourceType: "academic",
  },
  {
    id: 3,
    title: "Annual Sports Day",
    start: new Date(new Date().setDate(new Date().getDate() + 3)),
    end: new Date(new Date().setDate(new Date().getDate() + 3)),
    resourceType: "academic",
  },
  {
    id: 4,
    title: "Staff Meeting",
    start: new Date(new Date().setDate(new Date().getDate() - 2)),
    end: new Date(new Date().setDate(new Date().getDate() - 2)),
    resourceType: "personal",
  },
  {
    id: 5,
    title: "Math Quiz Competition",
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
    resourceType: "academic",
  },
];

export const CalendarWidget = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const filteredEvents =
    activeTab === "all"
      ? sampleEvents
      : sampleEvents.filter((event) => event.resourceType === activeTab);

  const formattedDate = format(new Date(), "EEEE, MMMM d, yyyy 'at' h:mm:ss a");

  const EventComponent = ({ event }) => (
    <div className="text-xs truncate px-1 py-0.5 rounded bg-blue-100 border-l-2 border-blue-500 text-black">
      {event.title}
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-4 h-full flex flex-col border-1 border-gray-300  mr-6">
      {/* Header with date and tabs in one row */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="font-medium text-[20px]">
          Calendar –{" "}
          <span className="text-[#565656] text-[16px]">{formattedDate}</span>
        </h3>
        <div className="bg-gray-100 rounded-lg px-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex gap-2 ">
              {["all", "personal", "academic"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-xs px-4 py-2 rounded-lg transition-colors 
                     bg-transparent 
                     data-[state=active]:bg-white 
                     data-[state=active]:text-black
                     data-[state=active]:shadow-sm cursor-pointer"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Calendar with default toolbar (includes Today, Back, Next, View) */}
      <div className="flex-1 min-h-[500px]">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", width: "100%" }}
          views={["month", "week", "day", "agenda"]}
          view="month"
          components={{
            event: EventComponent,
            toolbar: () => null, // 👈 hides the default toolbar
          }}
          popup
          className="school-calendar"
        />
      </div>
    </div>
  );
};
