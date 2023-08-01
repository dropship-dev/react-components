interface RatingProps {
    rating: number;
    setRating: (value: number) => void;
    size?: "xs" | "sm";
}
export default function Rating(props: RatingProps): import("react/jsx-runtime").JSX.Element;
export {};
