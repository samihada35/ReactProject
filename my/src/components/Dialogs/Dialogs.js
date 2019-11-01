import React from "react";
import style from "./Dialogs.module.css";
import DialogPreview from "./DialogPreview/DialogPreview.js";
import DialogContent from "./DialogContent/DialogContent.js";

const Dialogs = props => {
  let dialogData = [
    { id: 1, messagePreview: "hi", name: "Igor" },
    { id: 2, messagePreview: "hi!", name: "Vlad" },
    { id: 3, messagePreview: "hi, no?", name: "Ilia" },
    { id: 4, messagePreview: "hi, Yury", name: "Jane" }
  ];

  let dialogItem = dialogData.map(dialog => (
    <DialogPreview
      name={dialog.name}
      messagePreview={dialog.messagePreview}
      id={dialog.id}
    />
  ));

  let messageData = [
    { id: 1, message: "hi", name: "Igor" },
    { id: 2, message: "hi!", name: "Vlad" },
    { id: 3, message: "hi, no?", name: "Ilia" }
  ];

  let messageItem = messageData.map(message => (
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
