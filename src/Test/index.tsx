import React from "react";
import { Dialog } from "..";

export default function Test() {
  const Ref = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => Ref.current?.click()}>Open</button>
      <Dialog
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
