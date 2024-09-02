
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BottomGradient } from "@/components/ui/BottomGradient";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";
// import login from '../../assets/login2.png';
import Lottie from "lottie-react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValues } from "@/types/types";
import { useCreatUserMutation } from "@/redux/feature/auth/authApi";
import { NavLink} from "react-router-dom";
import login from '../../assets/login.json'

const Register: React.FC = () => {
    const [creteUser] = useCreatUserMutation()
  const { register, handleSubmit,watch, formState: { errors } } = useForm<FormValues>();

  

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("Form data:", data?.email);
  
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
            role: 'user',
            image: hostedImage
        }
        const res = await creteUser(userData)
        console.log(res);
        

      }
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <div className=" flex relative">
      <NavLink to={'/'} className="absolute top-10 left-10 p-2 border rounded-full hover:border-[#12143d] duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

      </NavLink>
      <div className="min-h-[100vh] w-full md:w-[50%] flex justify-center items-center bg-gray-100">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to GameSpace
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Login to aceternity to book your facility
          </p>

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
                {errors.firstname && <p className="text-red-600">{errors.firstname.message}</p>}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Khan"
                  type="text"
                  {...register("lastname", { required: "Last name is required" })}
                />
                {errors.lastname && <p className="text-red-600">{errors.lastname.message}</p>}
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
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
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
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
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
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </LabelInputContainer>
            </div>
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
              {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input id="profileImage" type="file" accept="image/*" {...register("profileImage", { required: "profileImage is required" })} />
              {errors.profileImage && <p className="text-red-600">{errors.profileImage.message}</p>}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn bg-[#24287a] w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button> 
          </form>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Already have an Account? <NavLink to='/login' className="text-blue-500 underline">Signin</NavLink></p>
        </div>
      </div>
      
      <div className="w-[50%] bg-[#12143d] text-white hidden md:flex justify-center items-center pt-16 ">
        <div className="flex justify-between items-center flex-col gap-5 bg-white p-8 rounded-md">
          
          <Lottie animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;