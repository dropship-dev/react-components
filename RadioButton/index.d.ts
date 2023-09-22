/// <reference types="react" />
interface IRadioButton {
    data: {
        id: string;
        value: string;
    }[];
    defaultValue?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
declare const RadioButton: (props: IRadioButton) => import("react/jsx-runtime").JSX.Element;
export default RadioButton;
