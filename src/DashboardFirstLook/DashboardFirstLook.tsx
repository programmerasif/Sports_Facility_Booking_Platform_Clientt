/* eslint-disable @typescript-eslint/no-unused-vars */


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dumbbell, Users } from "lucide-react";
import { Overview } from "@/ComoneComponent/Overview";
import { RecentBookings } from "@/ComoneComponent/RecentBookings";
const DashboardFirstLook = () => {

  return (
    <>
    <div className="md:hidden">
      <img
        src="/examples/dashboard-light.png"
        width={1280}
        height={866}
        alt="Dashboard"
        className="block dark:hidden"
      />
      <img
        src="/examples/dashboard-dark.png"
        width={1280}
        height={866}
        alt="Dashboard"
        className="hidden dark:block"
      />
    </div>
    <div className="hidden flex-col md:flex">
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
         
        </div>
     
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Bookings
                  </CardTitle>
                  {/* <CalendarDays className="h-4 w-4 text-muted-foreground" /> */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">573</div>
                  <p className="text-xs text-muted-foreground">
                    +180 since last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Available Facilities
                  </CardTitle>
                  <Dumbbell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14</div>
                  <p className="text-xs text-muted-foreground">
                    3 under maintenance
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>
                    You have 265 bookings this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentBookings />
                </CardContent>
              </Card>
            </div>
          
      </div>
    </div>
  </>
  );
};

export default DashboardFirstLook;
{/* <div className="">
<div className="flex justify-between items-center gap-5">
  <div className="min-w-[70%] bg- text-white bg-gradient-to-r from-[#2d3298] to-[#4a50c9] min-h-[32vh] rounded-md">
    <div className="flex justify-between items-center w-full">
      <div className="p-10 flex flex-col justify-between items-start h-[32vh] w-[50%]">
        <div>
          <div className=" flex justify-start items-center gap-2">
            <div className="text-sm md:text-base">Sunny day</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </div>
          </div>
          <div>{formattedDate} </div>
        </div>
        <div className="w-full">
          <h5 className="text-sm md:text-2xl xl:text-4xl w-full font-semibold">
            Welcome Backe, Asif{" "}
          </h5>
          <span className="text-xs xl:text-sm">We are happy to have you allways connect with us </span>
        </div>
      </div>

      <div className="flex justify-end md:pe-20 w-[60%] xl:w-[50%]">
        <img src={welcome} alt="" className="xl:w-[50%]" />
      </div>
    </div>
  </div>
<div className="w-[30%] hidden 2xl:block">
    <Calendar handlePickDate={function (_date: Date): void {
     
      
      throw new Error("Function not implemented.");
    } } />
  </div>
</div>
<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-5 h-[1px] w-full" />
<div className="flex justify-between items-start">
    <div className="min-w-[50%]">hello</div>
    <div>
    <CommonFacality  facality={data}/>
    </div>
</div>
</div> */}