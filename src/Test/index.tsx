import React from "react";
import { Dialog, Drawer, Button } from "..";

export default function Test() {
  const drawerRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => drawerRef.current?.click()}>open</button>
      <Dialog
        content={
          <div>
            content
            <Button
              onClick={() => drawerRef.current?.click()}
              content="Close"
              hierachy="secondary"
              color="destructive"
            />
          </div>
        }
        ref={drawerRef}
      />
    </>
  );
}
