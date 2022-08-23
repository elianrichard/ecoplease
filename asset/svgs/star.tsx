import * as React from "react";

function StarSVG(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 .288l2.833 8.718H24l-7.417 5.389 2.833 8.718L12 17.725l-7.417 5.388 2.833-8.718L0 9.006h9.167z" />
    </svg>
  );
}

export default StarSVG;
