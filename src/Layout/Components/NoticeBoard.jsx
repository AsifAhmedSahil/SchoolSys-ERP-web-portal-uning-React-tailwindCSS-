import { ArrowUpRight, Filter } from "lucide-react"

export const NoticeBoard = () => {
  // Array of notice data
  const notices = [
    {
      id: 1,
      date: { day: 20, month: "MAR" },
      title: "Ramadan Holiday",
      description:
        "As the blessed month of Ramadan approaches, we would like to inform all students and parents that the school will remain closed from 20th March to 25th March for Ramadan holidays.",
    },
    {
      id: 2,
      date: { day: 21, month: "FEB" },
      title: "Mother Language Day",
      description:
        "As the blessed month of Ramadan approaches, we would like to celebrate International Mother Language Day with various cultural activities and programs.",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Notice Board</h3>
        <div className="flex items-center gap-2">
          <button>
            <ArrowUpRight className="h-4 w-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold">{notice.date.day}</div>
              <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">{notice.date.month}</div>
            </div>

            <div className="flex-1 border-l-2 border-blue-500 pl-4">
              <h4 className="font-medium">{notice.title}</h4>
              <p className="text-sm text-gray-500 line-clamp-1">{notice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
