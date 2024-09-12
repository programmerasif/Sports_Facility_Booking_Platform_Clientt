
// export default ProductAddModal;
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";




import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LoadingComponent from "./LoadingComponent";
import { useCreateProductsMutation } from "@/redux/feature/product/productApi";
import Swal from "sweetalert2";
import { useAppSelector } from "@/redux/api/hook";

// Replace with your actual UI component library

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading,setLoading] = useState(false)
  const { user } = useAppSelector((state) => state?.user);
    const token = user?.token;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

const [createFacility] = useCreateProductsMutation()
  interface FormData {
    
    name: string;
    pricePerHour: number;
    location:string,
    description: string;
    category:string,
    image: FileList;
  }
  
  
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (Object.keys(errors).length === 0) {
      
      console.log("Form data:", data);
      const API_KEY = "4794790c9ff21535c43001d589261473";
      const file = data.image[0];
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        const facility = {
          image: result.data.url,
          name: data.name,
          pricePerHour: Number(data.pricePerHour),
          description: data.description,
          location: data.location,
        };
        
        setLoading(true)
        const res = await createFacility({facility,token}).unwrap();
        if (res.success) {
          setLoading(false)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Create Facility SucessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res);
      } else {
        console.error("Upload failed:", result);
        setLoading(false)
      }
      setIsOpen(false);
      setIsOpen(false);
      reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setIsOpen(true)}
        >
          <div className="flex justify-center text-sm items-center gap-2">
            <span>Add Facility </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-full h-[450px]">
        <DialogHeader>
          <DialogTitle className="text-[#12143D]">Add New Facility</DialogTitle>
          <DialogDescription>
            You have to give all the information here
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          {/* loading component is here */}
          {
            isLoading && <LoadingComponent />
          }
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 py-4 w-full"
          >
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="title" className="text-left">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Add Name"
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
                {...register("name", { required: true })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="price" className="text-left">
                Price
              </Label>
              <Input
                id="pricePerHour"
                placeholder="Add Price PerHour"
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                  errors.pricePerHour ? "border-2 border-red-500" : ""
                }`}
                {...register("pricePerHour", { required: true })}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                id="description"
                placeholder="Add Description"
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                  errors.description ? "border-2 border-red-500" : ""
                }`}
                {...register("description", { required: true })}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="location" className="text-left">
              Location
              </Label>
              <Input
                id="location"
                placeholder="Add location"
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                  errors.location ? "border-2 border-red-500" : ""
                }`}
                {...register("location", { required: true })}
              />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input
                id="image"
                type="file"
                {...register("image", { required: true })}
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                  errors.image ? "border-2 border-red-500" : ""
                }`}
              />
            </div>
            <div className="grid grid-cols-1 mt-5">
              <Button type="submit" className="bg-[#12143D] hover:bg-[#12143dd4]">
                Add Facility 
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
