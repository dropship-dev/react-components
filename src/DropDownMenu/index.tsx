import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";

export interface IDropDown {
  listAction: React.ReactNode[];
  content: string | React.ReactNode;
  className: string;
}

export default function Dropdown(props: IDropDown) {
  const { listAction, content, className } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{content}</DropdownMenuTrigger>
      <DropdownMenuContent className={className}>
        {listAction.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export * from "./components/dropdown-menu";
