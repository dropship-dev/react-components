import React from "react";
interface DialogProps {
  content: React.ReactNode;
}
function Dialog(props: DialogProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { content } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <input
        ref={ref}
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <dialog id="my_modal_2" className="modal" open={checked}>
        <form method="dialog" className="modal-box">
          {content}
        </form>
        <form method="dialog" className="modal-backdrop bg-transparent"></form>
      </dialog>
    </div>
  );
}

export default React.forwardRef(Dialog);
