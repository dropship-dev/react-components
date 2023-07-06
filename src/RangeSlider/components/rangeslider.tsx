import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import { cn } from "../../lib/utils";
const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => (
        <div
          {...props}
          className="h-[16px] w-[16px] rounded-full bg-primary-500"

          // cn({
          // "h-[16px]": !isVertical,
          // "w-[16px]": isVertical,
          // // "aspect-square rounded-full bg-primary-500 cursor-grab focus-visible:ring"
          // "": true,
          // })}
        >
          {/* {state.valueNow} */}
        </div>
      )}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index != 0;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn(
              (isMulti ? isFirst || isLast : isLast)
                ? "bg-gray-300"
                : "bg-primary-500",
              {
                "h-1/4 top-1/2 -translate-y-1/2": !isVertical,
                "w-1/4 left-1/2 -translate-x-1/2": isVertical,
                "rounded-full": true,
                // "bg-gray-300": isMulti ? isFirst || isLast : isLast,
                // "bg-primary-500": isMulti ? !isFirst || !isLast : isFirst,
                // "bg-gray-300": isMulti ? isFirst || isLast : isLast,
                // "bg-primary-500": isMulti ? !isFirst || !isLast : isFirst,
              }
            )}
          ></div>
        );
      }}
      renderMark={(props) => {
        return (
          <div
            {...props}
            className={cn({
              "top-1/2 -translate-y-1/2": !isVertical,
              "left-1/2 -translate-x-1/2": isVertical,
              "h-1 w-1": true,
              "rounded-full bg-red-500": true,
            })}
          ></div>
        );
      }}
    />
  );
};
export default RangeSlider;