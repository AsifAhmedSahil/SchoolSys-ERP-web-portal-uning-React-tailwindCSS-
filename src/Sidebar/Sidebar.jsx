import { SidebarItem } from "./SidebarItem";
import { SidebarSubItem } from "./SidebarSubItem";
import logo from "../assets/logo.png";

export function Sidebar() {
  return (
    <div className="w-full bg-white flex flex-col h-full border-r">
      <div className="p-4 border-b flex items-center gap-3 bg-white">
        <img src={logo} alt="SchoolSys Logo" className="w-50 object-contain" />
        {/* <span className="font-bold text-lg">SchoolSys</span> */}
      </div>

      <div
        className="flex-1 overflow-y-auto bg-white"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <div className="mx-3 my-3">
          <button className="w-full bg-[#0055cc] text-white py-3 rounded-md font-medium">
            Dashboard
          </button>
        </div>

        <SidebarItem icon="office" title="Front Office" expanded>
          <SidebarSubItem title="Admission Book" />
          <SidebarSubItem title="Complain Box" />
          <SidebarSubItem title="Visitor's Book" />
          <SidebarSubItem title="Employee's Contact" />
          <SidebarSubItem title="Postal Records" />
          <SidebarSubItem title="Event & News" />
        </SidebarItem>

        <SidebarItem icon="admission" title="Admission Process">
          <SidebarSubItem title="Form Sell" />
          <SidebarSubItem title="Applicant List" />
          <SidebarSubItem title="Admission Test" />
          <SidebarSubItem title="Eligible Student" />
          <SidebarSubItem title="New Enrolment" />
        </SidebarItem>

        <SidebarItem icon="student" title="Student Information">
          <SidebarSubItem title="Student Details" />
          <SidebarSubItem title="Siblings Information" />
          <SidebarSubItem title="Student Exit" />
          <SidebarSubItem title="Alumni Student" />
        </SidebarItem>

        <SidebarItem icon="academic" title="Academic Info" />
        <SidebarItem icon="department" title="Department Hub" />
        <SidebarItem icon="performance" title="Student Performance" />
        <SidebarItem icon="progress" title="Student Progress" />
        <SidebarItem icon="exam" title="Examination" />
      </div>
    </div>
  );
}
