import { Button } from "@/components/ui/button";

import invoce from "@/assets/invoce.png";
import invoice from "@/assets/invoice.png";

import React from "react";

const Accounting = () => {

  const bills = [
    {
      id: 1,
      name: "Bill 1",
      amount: 100,
      date: "2021-01-01",
      img: invoce
    },
    {
      id: 2,
      name: "Bill 2",
      amount: 200,
      date: "2021-02-01",
      img: invoce
    },
    {
      id: 3,
      name: "Bill 3",
      amount: 300,
      date: "2021-03-01",
      img: invoce
    },
    {
      id: 4,
      name: "Bill 4",
      amount: 400,
      date: "2021-04-01",
      img: invoce
    },
    {
      id: 5,
      name: "Bill 5",
      amount: 100,
      date: "2021-01-01",
      img: invoce
    },
    {
      id: 6,
      name: "Bill 6",
      amount: 200,
      date: "2021-02-01",
      img: invoce
    },
    {
      id: 7,
      name: "Bill 7",
      amount: 300,
      date: "2021-03-01",
      img: invoce
    },
    {
      id: 8,
      name: "Bill 8",
      amount: 400,
      date: "2021-04-01",
      img: invoce
    }
  ]

  return (
    <div className=" flex flex-col rounded-2xl bg-white p-4">
      <div className="flex justify-end">
        <Button className="bg-[#603AE5]">Add to Expenses Report</Button>
      </div>
      <div className="flex mt-6">
        <div className="w-1/3 pr-4">
          <div className="flex justify-between mb-6">
            <Button className="w-1/3" variant={"ghost"}>All Document</Button>
            <Button className="w-1/3" variant={"outline"}>Bills</Button>
            <Button className="w-1/3" variant={"ghost"}>Receipts</Button>
          </div>
          <div className="border-1 rounded-2xl overflow-hidden">
            {bills.map((bill) => (
              <div className="flex justify-items-start items-center gap-4 border-1 p-2" key={bill.id}>
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <img src={bill.img} alt="invoice" className="w-[100%]"/>
                </div>
                <div>
                  <p className="text-[#603AE5] text-[14px]">{bill.name}</p>
                  <p className="text-muted-foreground text-[12px]">${bill.amount}</p>
                  <p className="text-muted-foreground text-[12px]">{bill.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 border-1 border-dashed rounded-2xl">
            <div className="w-full h-full rounded-[5rem] overflow-hidden p-4">
              <img src={invoice} alt="Invoice" className="w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
