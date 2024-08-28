import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import DashBoardMenu from "@/Const/Dashboardlinks";
import { DashboardLogo } from "@/components/ui/DashboardLogo";
import DashboardInterface from "../DashboardInterface/DashboardInterface";

const MainDashboard= () => {
  
  const [open, setOpen] = useState(false);

  
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-full mx-auto   overflow-hidden",
        "h-[100vh]" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden py-4">
            <>
              <DashboardLogo />
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {DashBoardMenu.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <DashboardInterface />
    </div>
  );
}

export default MainDashboard





