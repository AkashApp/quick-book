import { ComboboxDemo } from "./components/Combobox";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Settings, UserRound, ChevronDown } from "lucide-react";

const NavigationWeb = () => {
  return (
    // fixed top-0 left-[5.25rem]
    <div className="min-w-3/4 h-21 flex items-center justify-between pl-2 pr-2 bg-white fixed top-0 left-[5.25rem]">
      <div className="flex items-center gap-1">
        <p className="text-[16px] weight-700">Review</p>
        <ComboboxDemo />
        <Badge
          variant="secondary"
          className="w-30 h-8 bg-[#40E1FA1A] text-[#2CA01D]"
        >
          Quickbook’s Data
        </Badge>
      </div>
      <div className="flex items-center gap-1">
        <Badge
          variant="secondary"
          className="size-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          <Search />
        </Badge>
        <Badge
          variant="secondary"
          className="w-30 h-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          Export to Excel
        </Badge>
        <Badge
          variant="secondary"
          className="w-30 h-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          Add Document
        </Badge>
        <Badge
          variant="secondary"
          className="w-30 h-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          Connect <ChevronDown />
        </Badge>
        <Badge
          variant="secondary"
          className="size-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          <Bell />
        </Badge>
        <Badge
          variant="secondary"
          className="size-12 bg-[#603AE51A] text-[#603AE5]"
        >
          <Settings />
        </Badge>
        <Badge
          variant="secondary"
          className="size-12 bg-[#603AE51A] text-[#603AE5] text-[14px]"
        >
          <UserRound />
        </Badge>
      </div>
    </div>
  );
};

export default NavigationWeb;
