const sidebar2 = () => {
  return <div>sidebar2</div>;
};
export default sidebar2;

// "use client";

// import { Drawer, Sidebar } from "flowbite-react";
// import { useState } from "react";

// import router from "@routes";
// import { useLocation } from "react-router-dom";
// import { DarkModeButton } from "@dark-mode";
// import { SettingsIcon } from "@drawer-icons";

// import {
//   HiChartPie,
//   HiClipboard,
//   HiCollection,
//   HiInformationCircle,
//   HiLogin,
//   HiPencil,
//   HiSearch,
//   HiShoppingBag,
//   HiUserGroup,
// } from "react-icons/hi";

// import { MenuIcon } from "@drawer-icons";

// export function SidebarComponent() {
//   const [isOpen, setIsOpen] = useState(true);
//   const location = useLocation();

//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//       <div className="flex min-h-[50vh] items-center justify-center">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         >
//           {MenuIcon}
//         </button>
//       </div>

//       <Drawer open={isOpen} onClose={handleClose}>
//         <Drawer.Header title="MENU" titleIcon={() => <></>} />
//         <Drawer.Items>
//           <Sidebar
//             aria-label="Sidebar with multi-level dropdown example"
//             className="[&>div]:bg-transparent [&>div]:p-0"
//           >
//             <div className="flex h-full flex-col justify-between py-2">
//               <div>
//                 <Sidebar.Items>
//                   <Sidebar.ItemGroup>
//                     {router.map((item, index) => (
//                       <Sidebar.Item
//                         key={index}
//                         href={item.path}
//                         icon={HiUserGroup}
//                       >
//                         <div className="bg-slate-300">{item.content}</div>
//                       </Sidebar.Item>
//                     ))}
//                   </Sidebar.ItemGroup>
//                 </Sidebar.Items>
//               </div>
//             </div>
//             <DarkModeButton />
//           </Sidebar>
//         </Drawer.Items>
//       </Drawer>
//     </>
//   );
// }
