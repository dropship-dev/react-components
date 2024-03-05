import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";

export interface IDropDown {
  listAction: React.ReactNode[];
  content: string | React.ReactNode;
  open?: boolean;
}

export default function Dropdown(props: IDropDown) {
  const { listAction, content, open } = props;
  if (open !== undefined) {
    return (
      <DropdownMenu open={open}>
        <DropdownMenuTrigger>{content}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {listAction.map((item, index) => (
            <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{content}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {listAction.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
