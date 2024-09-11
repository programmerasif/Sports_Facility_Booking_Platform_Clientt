import {  IconBookmarks, IconBrandTabler, IconUserBolt } from "@tabler/icons-react";
import { Activity } from "lucide-react";


export const AdminDashBoardMenu = [
  {
    label: "Home Page",
    href: "/",
    icon: <IconBrandTabler className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Manage user",
    href: "manage-user",
    icon: (
      <IconUserBolt className="text-white h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Create Admin",
    href: "create-admin",
    icon: (
      <IconUserBolt className="text-white h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Facality Management",
    href: "facality-management",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 text-white"
      >
        <path
          fillRule="evenodd"
          d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
          clipRule="evenodd"
        />
        <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
        <path
          fillRule="evenodd"
          d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Booking Management",
    href: "booking-management",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 text-white"
      >
        <path
          fillRule="evenodd"
          d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    label: "Account Logout",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 text-white"
      >
        <path
          fillRule="evenodd"
          d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const UserDashBoardMenu = [
  {
    label: "Home Page",
    href: "/",
    icon: <IconBrandTabler className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Manage Profile",
    href: "manage-user-profile",
    icon: <IconUserBolt className="text-white h-5 w-5 flex-shrink-0" />
  },
  {
    label: "Manage Booking",
    href: "manage-users-booking",
    icon: (
      <IconBookmarks className="text-white h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "My Bookings",
    href: "booked-list",
    icon: (
      <IconUserBolt className="text-white h-5 w-5 flex-shrink-0" />
    ),
  }
];

