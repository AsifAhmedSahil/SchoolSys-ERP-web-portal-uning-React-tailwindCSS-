import { SidebarItem } from "./SidebarItem";
import { SidebarSubItem } from "./SidebarSubItem";
import logo from "../assets/logo.png";
import { useState } from "react";
import { SidebarItemMain } from "./SidebarItemMain";

export const Sidebar = ({ onNavigate = () => {} }) => {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  // Helper function to create navigation path
  const navigate = (parent, child = null) => {
    const path = [{ title: parent }];
    if (child) {
      path.push({ title: child, active: true });
    }
    onNavigate(path);
  };

  const sidebarConfig = [
    {
      title: "Student Affairs",
      icon: "academic", // or a special STAD icon if you want
      children: [
        {
          title: "Front Office",
          icon: "office",
          children: [
            "Admission Book",
            "Complain Box",
            "Visitor's Book",
            "Employee's Contact",
            "Postal Records",
            "Event & News",
          ],
        },
        {
          title: "Admission Process",
          icon: "admission",
          children: [
            "Form Sell",
            "Applicant List",
            "Admission Test",
            "Eligible Student",
            "New Enrolment",
          ],
        },
        {
          title: "Student Information",
          icon: "student",
          children: [
            "Student Details",
            "Siblings Information",
            "Student Exit",
            "Alumni Student",
          ],
        },
      ],
    },
    {
      title: "Academic Info",
      icon: "academic",
    },
    {
      title: "Department Hub",
      icon: "department",
    },
    {
      title: "Student Performance",
      icon: "performance",
    },
    {
      title: "Student Progress",
      icon: "progress",
    },
    {
      title: "Examination",
      icon: "exam",
    },
  ];

  return (
    <div className="w-full  flex flex-col h-full bg-[#ECEFF3]">
      <div className="p-4  flex items-center gap-2 ">
        <img src={logo} alt="SchoolSys Logo" className="w-50 object-contain" />
      </div>

      <div
        className="flex-1 overflow-y-auto "
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <div className="mx-3 my-3">
          <button
            className="w-full bg-[#0055cc] text-white py-3 rounded-md font-medium"
            onClick={() => onNavigate([])} // Empty array for dashboard
          >
            Dashboard
          </button>
        </div>

        {sidebarConfig.map((item) => {
          if (item.children) {
            // It's a group like STAD
            return (
              <SidebarItemMain
                key={item.title}
                // icon={item.icon}
                title={item.title}
                expanded={openGroups[item.title]}
                onClick={() => toggleGroup(item.title)}
              >
                {item.children.map((subItem) => (
                  <SidebarItem
                    key={subItem.title}
                    icon={subItem.icon}
                    title={subItem.title}
                    onClick={() => navigate(subItem.title)}
                  >
                    {subItem.children?.map((subSubTitle) => (
                      <SidebarSubItem
                        key={subSubTitle}
                        title={subSubTitle}
                        onClick={() => navigate(subItem.title, subSubTitle)}
                      />
                    ))}
                  </SidebarItem>
                ))}
              </SidebarItemMain>
            );
          }

          // Simple one-level item
          return (
            <SidebarItemMain
              key={item.title}
              //   icon={item.icon}
              title={item.title}
              onClick={() => navigate(item.title)}
            />
          );
        })}
      </div>
    </div>
  );
};
