/// <reference types="react" />
export interface IDropDown {
    listAction: React.ReactNode[];
    content: string | React.ReactNode;
}
export default function Dropdown(props: IDropDown): import("react/jsx-runtime").JSX.Element;
export * from "./components/dropdown-menu";
