import React from "react";
interface DialogProps {
  content: React.ReactNode;
  open: boolean;
  sizePopup?: boolean;
  onClose: () => void;
  classNameContent?: string;
  styleContent?: React.CSSProperties;
}
function Dialog(props: DialogProps) {
  const { content, onClose, open, sizePopup, classNameContent, styleContent } =
    props;
  if (!sizePopup) {
    return (
      <dialog id="my_modal_2" className="modal" open={open}>
        <div
          className={`modal-box dark:bg-white bg-white ${classNameContent}`}
          style={{ zIndex: 1000, ...styleContent }}
        >
          {content}
        </div>
        <form
          style={{ zIndex: 900 }}
          method="dialog"
          className="modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm"
          onClick={() => {
            onClose();
          }}
        />
      </dialog>
    );
  } else
    return (
      <dialog id="my_modal_2" className="modal" open={open}>
        <div
          className={`modal-box dark:bg-white bg-white w-11/12 max-w-[765px] ${classNameContent}`}
          style={{ ...styleContent }}
        >
          {content}
        </div>
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
