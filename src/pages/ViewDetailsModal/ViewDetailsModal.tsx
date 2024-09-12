/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";

import { DialogTrigger } from "@radix-ui/react-dialog";
import React from 'react';

interface ModalData {
  status: string;
  price: number;
  description: string;
  img: string;
  name:string
}

interface ViewDetailsModalProps {
  modalData: ModalData;
}

const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({ modalData }) => {
  const { status, price, description, img,name } = modalData;
 
  return (
    <div className="w-[100%]">
      <Dialog>
  <DialogTrigger className="text-center w-full">Details</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      
      <DialogDescription>
      <div className="max-w-full rounded-xl overflow-hidden shadow-lg bg-[#EBF5FB] p-4">
      <img className="w-32 h-24 object-cover mx-auto" src={img} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-gray-900">{name}</div>
        <p className="text-gray-500 text-sm">
        {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="block text-lg font-semibold">Price: {price}</span>
        <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mt-2 bg-green-500 ${status == "canceled" ? "bg-red-500" : "bg-green-500"}`}>
          {status}
        </span>
      </div>
    </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  );
};

export default ViewDetailsModal;