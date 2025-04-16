

import { SidebarItem } from "./SidebarItem"
import { SidebarSubItem } from "./SidebarSubItem"


export const Sidebar = ({ onNavigate = () => {} })=> {
  // Helper function to create navigation path
  const navigate = (parent, child = null) => {
    const path = [{ title: parent }]
    if (child) {
      path.push({ title: child, active: true })
    }
    onNavigate(path)
  }

  return (
    <div className="w-full bg-white flex flex-col h-full border-r">
      <div className="p-4 border-b flex items-center gap-2 bg-white">
        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
        <span className="font-bold text-lg">SchoolSys</span>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="mx-3 my-3">
          <button
            className="w-full bg-[#0055cc] text-white py-3 rounded-md font-medium"
            onClick={() => onNavigate([])} // Empty array for dashboard
          >
            Dashboard
          </button>
        </div>

        <SidebarItem icon="office" title="Front Office" expanded onClick={() => navigate("Front Office")}>
          <SidebarSubItem title="Admission Book" onClick={() => navigate("Front Office", "Admission Book")} />
          <SidebarSubItem title="Complain Box" onClick={() => navigate("Front Office", "Complain Box")} />
          <SidebarSubItem title="Visitor's Book" onClick={() => navigate("Front Office", "Visitor's Book")} />
          <SidebarSubItem title="Employee's Contact" onClick={() => navigate("Front Office", "Employee's Contact")} />
          <SidebarSubItem title="Postal Records" onClick={() => navigate("Front Office", "Postal Records")} />
          <SidebarSubItem title="Event & News" onClick={() => navigate("Front Office", "Event & News")} />
        </SidebarItem>

        <SidebarItem icon="admission" title="Admission Process" onClick={() => navigate("Admission Process")}>
          <SidebarSubItem title="Form Sell" onClick={() => navigate("Admission Process", "Form Sell")} />
          <SidebarSubItem title="Applicant List" onClick={() => navigate("Admission Process", "Applicant List")} />
          <SidebarSubItem title="Admission Test" onClick={() => navigate("Admission Process", "Admission Test")} />
          <SidebarSubItem title="Eligible Student" onClick={() => navigate("Admission Process", "Eligible Student")} />
          <SidebarSubItem title="New Enrolment" onClick={() => navigate("Admission Process", "New Enrolment")} />
        </SidebarItem>

        <SidebarItem icon="student" title="Student Information" onClick={() => navigate("Student Information")}>
          <SidebarSubItem title="Student Details" onClick={() => navigate("Student Information", "Student Details")} />
          <SidebarSubItem
            title="Siblings Information"
            onClick={() => navigate("Student Information", "Siblings Information")}
          />
          <SidebarSubItem title="Student Exit" onClick={() => navigate("Student Information", "Student Exit")} />
          <SidebarSubItem title="Alumni Student" onClick={() => navigate("Student Information", "Alumni Student")} />
        </SidebarItem>

        <SidebarItem icon="academic" title="Academic Info" onClick={() => navigate("Academic Info")} />
        <SidebarItem icon="department" title="Department Hub" onClick={() => navigate("Department Hub")} />
        <SidebarItem icon="performance" title="Student Performance" onClick={() => navigate("Student Performance")} />
        <SidebarItem icon="progress" title="Student Progress" onClick={() => navigate("Student Progress")} />
        <SidebarItem icon="exam" title="Examination" onClick={() => navigate("Examination")} />
      </div>
    </div>
  )
}
