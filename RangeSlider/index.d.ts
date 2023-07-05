export interface IRangeSlider {
    className?: string;
    onChange?: any;
    min: number;
    max: number;
    defaultValue?: number[];
}
export declare function Slider(props: IRangeSlider): import("react/jsx-runtime").JSX.Element;
