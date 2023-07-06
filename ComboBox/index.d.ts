export interface ICombobox {
    data: {
        value: string;
        label: string;
    }[];
    content: string;
}
export default function Combobox(props: ICombobox): import("react/jsx-runtime").JSX.Element;
