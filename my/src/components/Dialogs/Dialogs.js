import React from "react";
import style from "./Dialogs.module.css";
import DialogPreview from "./DialogPreview/DialogPreview.js";
import DialogContent from "./DialogContent/DialogContent.js";

const Dialogs = props => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>
        <DialogPreview name="Igor" messagePreview="hi" id="1" />
        <DialogPreview name="Vlad" messagePreview="hi!" id="2" />
        <DialogPreview name="Ilia" messagePreview="hi, no?" id="3" />
        <DialogPreview name="Jane" messagePreview="hi, Yury" id="4" />
      </div>

      <div className={style.dialogContent}>
        <DialogContent name="Igor" message="Hi!" />
        <DialogContent name="Igor" message="Hi, Alex!" />
        <DialogContent name="Igor" message="Hi, how are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
