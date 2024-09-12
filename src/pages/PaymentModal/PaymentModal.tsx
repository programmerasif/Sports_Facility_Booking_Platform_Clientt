import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogTrigger, DialogClose } from "@radix-ui/react-dialog";

const PaymentModal = ({isAvailable}) => {
  console.log(isAvailable, 'from payment page ');
  
  return (
    <div className="w-[100%]">
      <Dialog>
        <DialogTrigger className="w-full">Select Slot</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Maye your Payment</DialogTitle>
            {
              !isAvailable && <DialogDescription className="text-center pt-4">
              Opps! Sorry this facility is not available time slot, or user booked recently, chose for another day.
            </DialogDescription>
            }
          </DialogHeader>
          {/* Close Button */}
          <div className={`flex justify-end mt-4 ${isAvailable ? "hidden" : "flex"}`}>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-[#4a50c9] text-white rounded-md w-full">Close</button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentModal;