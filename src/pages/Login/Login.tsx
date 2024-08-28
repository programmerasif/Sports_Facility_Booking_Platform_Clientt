import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BottomGradient } from "@/components/ui/BottomGradient";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";
import login from "../../assets/login2.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "@/types/types";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
import { NavLink } from "react-router-dom";
import { setUserInfo } from "@/redux/feature/userInfo/userInfoSlice";
import { useAppDispatch } from "@/redux/api/hook";


const Login: React.FC = () => {
  const [signIn] = useLoginMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    try {
      
      const userData = {
        email: data?.email,
        password: data?.password,
      };
      const res = await signIn(userData);
      const token = res?.data?.token;
      const user = {
        _id: res?.data?.data?._id,
          name: res?.data?.data?.name,
          email:res?.data?.data?.email,
          role:res?.data?.data?.role,
          image:res?.data?.data?.image,
          phone:res?.data?.data?.phone,
          address:res?.data?.data?.address,
          token:token
      }
      dispatch(setUserInfo(user))
     
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-16 flex ">
      <div className="min-h-[100%] w-[50%] py-32">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to GameSpace
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Login to aceternity to book your facility
          </p>

          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="asifkhan.dev2@gmail.com"
                type="email"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn bg-[#24287a] w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign in &rarr;
              <BottomGradient />
            </button>
          </form>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Dont have an Account? <NavLink to='/register' className="text-blue-500 underline">Refister</NavLink></p>
        </div>
      </div>

      <div className="w-[50%] bg-[#12143d] text-white flex justify-center items-center pt-16">
        <div className="flex justify-between items-center flex-col gap-5 w">
          <img src={login} alt="" className="w-[60%] xl:w-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
