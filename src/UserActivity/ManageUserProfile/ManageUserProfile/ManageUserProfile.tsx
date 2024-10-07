import { useAppSelector } from "@/redux/api/hook";

const ManageUserProfile = () =>{
  const { user } = useAppSelector((state) => state?.user);


    return (
        <div className="min-h-[80vh] bg-gray-100 flex flex-col justify-center items-center px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:w-3/4 items-center lg:items-start lg:space-x-12 space-y- lg:space-y-0">
            {/* Profile Picture */}
            <div className="flex justify-center lg:w-1/3">
              <img
                className="rounded-full w-40 h-40 lg:w-64 lg:h-64 object-cover"
                src={user?.image ? user?.image : "https://i.ibb.co.com/1fsKYRf/3237472.png"}
                alt="Profile"
              />
            </div>
    
            {/* Profile Details */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Name:</p>
                <p className="text-gray-600">{user?.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Email:</p>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Phone Number:</p>
                <p className="text-gray-600">+880 {user?.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Location:</p>
                <p className="text-gray-600">{user?.address}</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Website:</p>
                <p className="text-gray-600">www.example.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Experience:</p>
                <p className="text-gray-600">5 years in web development</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Skills:</p>
                <p className="text-gray-600">React, Node.js, TypeScript, MongoDB</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-gray-800">Education:</p>
                <p className="text-gray-600">B.Sc. in Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      );
}
export default ManageUserProfile