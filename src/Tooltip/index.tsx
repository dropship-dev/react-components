import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom" | "right" | "left";
};

export default function TooltipComponentCustom(props: Props) {
  const { children, content, side } = props;
  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side || "top"}>
          <div>{content}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export * from "./tooltip";
