import React from "react";
interface DialogProps {
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
function Dialog(props: DialogProps) {
  const { content, onClose, open } = props;

  return (
    <dialog id="my_modal_2" className="modal" open={open}>
      <div className="modal-box dark:bg-white bg-white">{content}</div>
      <form
        method="dialog"
        className="modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm"
        onClick={() => {
          onClose();
        }}
      />
    </dialog>
  );
}

export default Dialog;
