import { Button } from "@/components/ui/button";

import invoce from "@/assets/invoce.png";
import invoice from "@/assets/invoice.png";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CloudUpload, Copy } from "lucide-react";

const Accounting = () => {
  const bills = [
    {
      id: 1,
      name: "Bill 1",
      amount: 100,
      date: "2021-01-01",
      img: invoce,
    },
    {
      id: 2,
      name: "Bill 2",
      amount: 200,
      date: "2021-02-01",
      img: invoce,
    },
    {
      id: 3,
      name: "Bill 3",
      amount: 300,
      date: "2021-03-01",
      img: invoce,
    },
    {
      id: 4,
      name: "Bill 4",
      amount: 400,
      date: "2021-04-01",
      img: invoce,
    },
    {
      id: 5,
      name: "Bill 5",
      amount: 100,
      date: "2021-01-01",
      img: invoce,
    },
    {
      id: 6,
      name: "Bill 6",
      amount: 200,
      date: "2021-02-01",
      img: invoce,
    },
    {
      id: 7,
      name: "Bill 7",
      amount: 300,
      date: "2021-03-01",
      img: invoce,
    },
    {
      id: 8,
      name: "Bill 8",
      amount: 400,
      date: "2021-04-01",
      img: invoce,
    },
  ];

  return (
    <div className=" flex flex-col rounded-2xl bg-white p-4">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#603AE5] hover:bg-[#603AE5] hover:opacity-90">
              Add to Expenses Report
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[645px]">
            <DialogHeader>
              <DialogTitle>
                <div className="flex justify-between w-11/12">
                  <Button variant={"ghost"} className="text-muted-foreground">
                    EasyUpload
                  </Button>
                  <Button variant={"ghost"} className="">
                    Bills
                  </Button>
                  <Button variant={"outline"} className="text-[#603AE5]">
                    Receipts
                  </Button>
                  <Button variant={"ghost"} className="">
                    Bank
                  </Button>
                </div>
              </DialogTitle>
              <DialogDescription>
                <div className="flex justify-between gap-2">
                  <div className="w-1/2 border-b-1">
                    <div className="grid w-full items-center gap-3 mt-4">
                      <Label htmlFor="bill">Document Owner</Label>
                      <p id="bill" className="font-bold text-black">
                        Accountant 01
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 border-b-1">
                    <div className="mt-4">
                      <Label className="mb-1.5" htmlFor="date">
                        Client
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full border-none">
                          <SelectValue placeholder="Select Client" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Client</SelectLabel>
                            <SelectItem value="client1">Client 1</SelectItem>
                            <SelectItem value="client2">Client 2</SelectItem>
                            <SelectItem value="client3">Client 3</SelectItem>
                            <SelectItem value="client4">Client 4</SelectItem>
                            <SelectItem value="client5">Client 5</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full flex justify-center items-center gap-4 border-dashed border-1 p-4 rounded-2xl cursor-pointer">
                {/* <Input className="-z-10 w-5/6 h-18 fixed" id="picture" type="file" placeholder=""/> */}
                <div className="w-18 h-18 bg-[#603AE51A] rounded-2xl flex justify-center items-center text-[#603AE5]">
                  <CloudUpload />
                </div>
                <div>
                  <p className="text-center text-[12px] text-[#603AE5] font-bold">
                    Drag & Drop or Choose file to upload
                  </p>
                  <p className="text-center text-[12px] text-[#603AE5]">
                    JPG, PNG, PDF, CSV
                  </p>
                </div>
              </div>
              <Button
                type="submit"
                className="w-1/3 bg-[#603AE5] hover:bg-[#603AE5] hover:opacity-90 p-6 mt-4"
              >
                Add Receipt
              </Button>
            </div>
            <div className="flex flex-col justify-start gap-2 mb-12 mt-4 text-[14px]">
              <p className="text-muted-foreground">Send Over Email</p>
              <div className="flex font-bold gap-2">
                <p>Single :</p>
                <p className="text-[#603AE5]">abc.single@gmail.com</p>
                <Copy />
              </div>
              <div className="flex font-bold gap-2">
                <p>Multiple :</p>
                <p className="text-[#603AE5]">abc.multiple@gmail.com</p>
                <Copy />
              </div>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex mt-6">
        <div className="w-1/3 pr-4">
          <div className="flex justify-between mb-6">
            <Button className="w-1/3" variant={"ghost"}>
              All Document
            </Button>
            <Button className="w-1/3" variant={"outline"}>
              Bills
            </Button>
            <Button className="w-1/3" variant={"ghost"}>
              Receipts
            </Button>
          </div>
          <div className="border-1 rounded-2xl overflow-hidden">
            {bills.map((bill) => (
              <div
                className="flex justify-items-start items-center gap-4 border-1 p-2"
                key={bill.id}
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <img src={bill.img} alt="invoice" className="w-[100%]" />
                </div>
                <div>
                  <p className="text-[#603AE5] text-[14px]">{bill.name}</p>
                  <p className="text-muted-foreground text-[12px]">
                    ${bill.amount}
                  </p>
                  <p className="text-muted-foreground text-[12px]">
                    {bill.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 border-1 border-dashed rounded-2xl">
          <div className="w-full h-full rounded-[5rem] overflow-hidden p-4">
            <img src={invoice} alt="Invoice" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
