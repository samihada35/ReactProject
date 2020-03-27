import React from "react";
import style from "./Dialogs.module.css";
import DialogPreview from "./DialogPreview/DialogPreview.js";
import DialogContent from "./DialogContent/DialogContent.js";

const Dialogs = (props) => {

  let dialogItem = props.dialogData.map(dialog => (
    <DialogPreview
      name={dialog.name}
      messagePreview={dialog.messagePreview}
      id={dialog.id}
    />
  ));

  let messageItem = props.messageData.map(message => (
    <DialogContent name={message.name} message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>{dialogItem}</div>

      <div className={style.dialogContent}>{messageItem}</div>
    </div>
  );
};

export default Dialogs;
