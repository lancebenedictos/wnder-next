import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type propTypes = {
  tooltipMessage: string;
  trigger: React.ReactNode;
};

function MenuButton({ trigger, tooltipMessage }: propTypes) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Popover>
            <PopoverTrigger>
              <button className="bg-[#c57ee9] rounded-full p-3">
                {trigger}
              </button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default MenuButton;
