
import { BottomGradient } from "@/components/ui/BottomGradient";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";
import { useAppSelector } from "@/redux/api/hook";
import { useCreateAdminMutation } from "@/redux/feature/auth/authApi";
import { FormValues } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const CreateAdmin = () => {

  const [creteAdmin] = useCreateAdminMutation()
  const {user} = useAppSelector(state => state?.user)
  const { register, handleSubmit,watch, reset,formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      
  
      const API_KEY = "4794790c9ff21535c43001d589261473";
      const file = data.profileImage[0];
  
      if (!file) {
        console.error("No file selected");
        return;
      }
  
      const formData = new FormData();
      formData.append("image", file);
  
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
  
      const result = await response.json();
      const hostedImage = result.data.url
      if (hostedImage) {
       
        const fullName = `${data?.firstname} ${data?.lastname}`
        const userData = {
            name: fullName,
            email: data?.email,
            password: data?.password,
            phone: data?.phone,
            role: 'admin',
            image: hostedImage,
            address:data?.address
        }
        
        
        const res = await creteAdmin({userData,token:user?.token})
        
        if (res.data?.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          reset()
        }
        
        
      }
    } catch (error) {
      console.error( error);
    }
  };
  return (
    <div className=" flex relative justify-center items-center">
     
    
        <div className=" rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Asif"
                  type="text"
                  {...register("firstname", { required: "First name is required" })}
                />
                {errors.firstname && <p className="text-red-600 text-xs">{errors.firstname.message}</p>}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Khan"
                  type="text"
                  {...register("lastname", { required: "Last name is required" })}
                />
                {errors.lastname && <p className="text-red-600 text-xs">{errors.lastname.message}</p>}
              </LabelInputContainer>
            </div>
            
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="asifkhan.dev2@gmail.com"
                type="email"
                {...register("email", { 
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" }
                })}
              />
              {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                placeholder="••••••••"
                type="password"
                {...register("confirmPassword", { 
                  required: "Confirm password is required",
                  validate: value => value === watch('password') || "Passwords do not match"
                })}
              />
              {errors.confirmPassword && <p className="text-red-600 text-xs">{errors.confirmPassword.message}</p>}
            </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input id="profileImage" type="file" accept="image/*" {...register("profileImage", { required: "profileImage is required" })} />
              {errors.profileImage && <p className="text-red-600 text-xs">{errors.profileImage.message}</p>}
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
             <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Phone Number</Label>
              <Input
                id="phone"
                placeholder="+8801721xxxxxx"
                type="number"
                {...register("phone", { 
                  required: "Phone Number is required",
                 
                })}
              />
              {errors.phone && <p className="text-red-600 text-xs">{errors.phone.message}</p>}
            </LabelInputContainer> 
            <LabelInputContainer>
                <Label htmlFor="lastname">Address</Label>
                <Input
                  id="address"
                  placeholder="Address"
                  type="text"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.lastname && <p className="text-red-600 text-xs">{errors.lastname.message}</p>}
              </LabelInputContainer>
            </div>
            <button
              className="bg-gradient-to-br relative group/btn bg-[#24287a] w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Create Admin &rarr;
              <BottomGradient />
            </button> 
          </form>
          </div>
     
      
      
    </div>
  );
};
export default CreateAdmin;
