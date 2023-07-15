import React from "react";

export interface DrawerProps {
  content: React.ReactNode;
}
function Dialog(props: DrawerProps, ref: React.ForwardedRef<HTMLInputElement>) {
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
          if (e.target.checked) window.my_modal_2.showModal();
          else window.my_modal_2.close();
        }}
      />
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          {content}
        </form>
        <form method="dialog" className="modal-backdrop bg-transparent"></form>
      </dialog>
    </div>
  );
}

export default React.forwardRef(Dialog);
