import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";

export interface IDropDown {
  listAction: React.ReactNode[];
  content: string | React.ReactNode;
}

export default function Dropdown(props: IDropDown) {
  const { listAction, content } = props;

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
