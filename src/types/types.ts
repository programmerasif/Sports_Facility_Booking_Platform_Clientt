import { MotionValue } from 'framer-motion'

export type TQueryParam = {
    name: string;
    value: string | number | boolean;
  };

 export interface ScrollCardProps {
    i: number
    title: string
    description: string
    src: string
    url: string
    color: string
    progress: MotionValue<number>
    range: [number, number]
    targetScale: number
  }

export interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage: FileList; 
  phone:number
}
export interface TUser {
  name: string,
  email:string,
  role:string,
  image:string,
  phone:string,
  address?:string,
  token:string
}
export type TInitialState = {
  user: TUser[];
};
