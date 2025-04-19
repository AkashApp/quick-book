import React from "react";
import vectorQb from "@/assets/VectorQb.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SideSection = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="w-[calc(25%-5.25rem)] bg-white p-4">
      <div className="flex flex-col p-4 gap-4 border-1">
        <div className="flex justify-between">
          <div className="flex">
            <div className="size-10 rounded-full bg-[#2CA01C] flex items-center justify-center">
              <img src={vectorQb} alt="QB" />
            </div>
            <div>
              <p className="pl-2 text-[16px] font-bold">Quickbooks</p>
              <p className="pl-2 text-[12px] text-muted-foreground">
                16 June,2024
              </p>
              <p className="pl-2 text-[12px] text-muted-foreground">8:15 PM</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="pl-2 text-[12px] text-muted-foreground">
              Publishing...
            </p>
            <p className="pl-2 text-[12px] text-muted-foreground">
              Jimmy Jason
            </p>
          </div>
        </div>
        <div className="flex justify-between pr-10">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Auto-sync
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save Config
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 mb-4">
        <Button className="w-1/2" variant={"outline"}>
          Comment
        </Button>
        <Button className="w-1/2" variant={"ghost"}>
          Query
        </Button>
      </div>

      <div className="grid w-full gap-4 mb-6">
        <Label
          className="pl-3 text-muted-foreground font-bold"
          htmlFor="message-2"
        >
          Type Comment
        </Label>
        <Textarea
          className="border-none"
          placeholder="Start typing..."
          id="message-2"
        />
        <Button variant={"secondary"}>Add Comment</Button>
      </div>

      <Button className="bg-[#603AE5] w-full hover:bg-[#603AE5] hover:opacity-90">View Line Items</Button>

      <div className="w-full pr-12 pl-12 mt-6 pb-4 border-b-1">
        <Carousel className="w-full">
          <CarouselPrevious />
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="ml-[30%]">Payment Details</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>

      <div className="p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Payment Details</AccordionTrigger>
            <AccordionContent>
              <div>
                <div className="border-b-1 pb-4">
                  <RadioGroup
                    defaultValue="paid"
                    className="flex justify-between pr-40"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="r1" />
                      <Label htmlFor="r1">Paid</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unpaid" id="r2" />
                      <Label htmlFor="r2">Unpaid</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Bill Number</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="mt-4">
                  <Label className="mb-1.5" htmlFor="date">
                    Bill Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal border-none",
                          !date && "text-muted-foreground"
                        )}
                        id="date"
                      >
                        <CalendarIcon />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Pick bill date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Paid Amount</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="$ 1900.00"
                  />
                </div>

                <div className="mt-4">
                  <Label className="mb-1.5" htmlFor="date">
                    Paid Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal border-none",
                          !date && "text-muted-foreground"
                        )}
                        id="date"
                      >
                        <CalendarIcon />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Pick paid date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mt-4">
                  <Label className="mb-1.5" htmlFor="date">
                    Due Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal border-none",
                          !date && "text-muted-foreground"
                        )}
                        id="date"
                      >
                        <CalendarIcon />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Pick due date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mt-4">
                  <Label className="mb-1.5" htmlFor="date">
                    Payment Mode
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full border-none">
                      <SelectValue placeholder="Select Payment Mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Payment Mode</SelectLabel>
                        <SelectItem value="banktransfer">
                          Bank Transfer
                        </SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="internetbanking">
                          Internet Banking
                        </SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-4">
                  <Label className="mb-1.5" htmlFor="date">
                    Currency
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full border-none">
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Currency</SelectLabel>
                        <SelectItem value="doller">Doller</SelectItem>
                        <SelectItem value="yen">Yen</SelectItem>
                        <SelectItem value="inr">INR</SelectItem>
                        <SelectItem value="eus">EUS</SelectItem>
                        <SelectItem value="dinnar">Dinnar</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Bank Transaction Ref</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Total Amount</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Tax Amount</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Total Amount (GBP) </Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Tax Amount (GBP)</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 mt-4">
                  <Label htmlFor="bill">Fix Rate</Label>
                  <Input
                    className="border-none"
                    type="text"
                    id="bill"
                    placeholder="Start Typing"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              <div>
                <div className="border-b-1 pb-4">
                  <Label className="mb-4" htmlFor="date">
                    Line Item
                  </Label>
                  <RadioGroup
                    defaultValue="single"
                    className="flex justify-between pr-40"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="r1" />
                      <Label htmlFor="r1">Single</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="multiple" id="r2" />
                      <Label htmlFor="r2">Multiple</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid w-full gap-2 mb-6 mt-4">
                  <Label htmlFor="message-2">Description</Label>
                  <Textarea
                    className="border-none"
                    placeholder="Start typing..."
                    id="message-2"
                  />
                </div>

                <div className="w-full pr-12 pl-12 mt-6 pb-6 border-b-1">
                  <Carousel className="w-full">
                    <CarouselPrevious />
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="ml-[40%] flex gap-1">
                            <div className="size-2 rounded-full bg-[#603AE5]"></div>
                            <div className="size-2 rounded-full bg-[#b3b1b1]"></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button variant={"secondary"} className="w-full mb-6 mt-2 text-[#603AE5]">Save</Button>
        <Button className="bg-[#603AE5] w-full hover:bg-[#603AE5] hover:opacity-90">Publish</Button>
      </div>
    </div>
  );
};

export default SideSection;
