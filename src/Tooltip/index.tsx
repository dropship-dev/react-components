import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
};

export default function TooltipComponent(props: Props) {
  const { children, content } = props;
  return (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <div>{content}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
