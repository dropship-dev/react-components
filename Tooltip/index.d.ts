/// <reference types="react" />
type Props = {
    children: React.ReactNode;
    content: string;
    side?: "top" | "bottom" | "right" | "left";
};
export default function TooltipComponentCustom(props: Props): import("react/jsx-runtime").JSX.Element;
export * from "./tooltip";
