/// <reference types="react" />
type Props = {
    children: React.ReactNode;
    content: string;
    side?: "top" | "bottom" | "right" | "left";
};
export default function TooltipComponent(props: Props): import("react/jsx-runtime").JSX.Element;
export * from "./tooltip";
