const ChevronUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(!open && "rotate-180")}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41205 6.91205C9.73748 6.58661 10.2651 6.58661 10.5906 6.91205L15.5906 11.912C15.916 12.2375 15.916 12.7651 15.5906 13.0906C15.2651 13.416 14.7375 13.416 14.412 13.0906L10.0013 8.67981L5.59056 13.0906C5.26512 13.416 4.73748 13.416 4.41205 13.0906C4.08661 12.7651 4.08661 12.2375 4.41205 11.912L9.41205 6.91205Z"
        fill="#354053"
      />
    </svg>
  );
};

export default ChevronUpIcon;
