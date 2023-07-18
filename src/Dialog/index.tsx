import React from "react";
interface DialogProps {
  content: React.ReactNode;
}
function Dialog(props: DialogProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { content } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <dialog id="my_modal_2" className="modal" open={checked}>
      <input
        ref={ref}
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <form method="dialog" className="modal-box">
        {content}
      </form>
      <form
        method="dialog"
        className="modal-backdrop bg-[rgba(30,35,52,0.24)] backdrop-blur-sm"
        onClick={() => setChecked(false)}
      ></form>
    </dialog>
  );
}

export default React.forwardRef(Dialog);
