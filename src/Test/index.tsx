import React from "react";
import { Dialog, Drawer } from "..";

export default function Test() {
  const Ref = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => Ref.current?.click()}>Open</button>
      <Drawer
        content={
          <div>
            Dialog
            <button onClick={() => Ref.current?.click()}>close</button>
          </div>
        }
        ref={Ref}
      />
    </>
  );
}
