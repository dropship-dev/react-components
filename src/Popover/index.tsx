import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ComboBox/components/popover";
export default function PopoverNoti(props: {
  triger: React.ReactNode;
  content: React.ReactNode;
}) {
  const { triger, content } = props;

  return (
    <Popover>
      <PopoverTrigger>{triger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
