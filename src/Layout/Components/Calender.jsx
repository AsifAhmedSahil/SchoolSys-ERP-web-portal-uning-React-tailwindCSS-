import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const CalendarWidget = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Generate calendar data
  const generateCalendarData = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()

    // First day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()

    // Last day of the month
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate()

    // Last day of previous month
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()

    const calendarDays = []

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      calendarDays.push({
        day: prevMonthLastDay - i,
        month: "prev",
        isToday: false,
      })
    }

    // Current month days
    for (let i = 1; i <= lastDay; i++) {
      calendarDays.push({
        day: i,
        month: "current",
        isToday: i === today.getDate(),
      })
    }

    // Next month days
    const remainingDays = 42 - calendarDays.length // 6 rows * 7 columns
    for (let i = 1; i <= remainingDays; i++) {
      calendarDays.push({
        day: i,
        month: "next",
        isToday: false,
      })
    }

    return calendarDays
  }

  const calendarData = generateCalendarData()

  // Current date for display
  const currentDate = new Date()
  const formattedDate =
    currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " at " +
    currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

  return (
    <div className="bg-white rounded-lg p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Calendar</h3>
        <div className="text-sm text-gray-500">{formattedDate}</div>
      </div>

      <Tabs defaultValue="personal" className="w-full flex-1 flex flex-col">
        <div className="flex justify-end mb-4">
          <TabsList className="h-8">
            <TabsTrigger value="personal" className="text-xs h-8 px-3">
              Personal
            </TabsTrigger>
            <TabsTrigger value="academic" className="text-xs h-8 px-3">
              Academic
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="grid grid-cols-7 gap-0 flex-1">
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-medium py-2">
              {day}
            </div>
          ))}

          {calendarData.map((date, i) => (
            <div
              key={i}
              className={`text-center py-3 text-sm border-t 
                ${i % 7 === 6 ? "border-r-0" : "border-r"} 
                ${Math.floor(i / 7) === 5 ? "border-b-0" : "border-b"} 
                ${date.isToday ? "bg-blue-50" : ""} 
                ${date.month !== "current" ? "text-gray-400" : ""}`}
            >
              {date.day}
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
