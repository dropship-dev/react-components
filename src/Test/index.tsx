import React from "react";
import { Drawer } from "..";

export default function Test() {
  const drawerRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => drawerRef.current?.click()}>open</button>
      <Drawer content={<div>content</div>} ref={drawerRef} />
    </>
  );
}
