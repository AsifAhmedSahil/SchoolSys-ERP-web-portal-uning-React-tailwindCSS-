
export const SidebarSubItem = ({ title, onClick = () => {} })=> {
  return (
    <div className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer" onClick={onClick}>
      {title}
    </div>
  )
}
