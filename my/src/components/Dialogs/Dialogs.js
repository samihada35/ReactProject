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

  let messageData = [
    { id: 1, message: "hi", name: "Igor" },
    { id: 2, message: "hi!", name: "Vlad" },
    { id: 3, message: "hi, no?", name: "Ilia" }
  ];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>
        <DialogPreview
          name={dialogData[0].name}
          messagePreview={dialogData[0].messagePreview}
          id={dialogData[0].id}
        />
        <DialogPreview
          name={dialogData[1].name}
          messagePreview={dialogData[1].messagePreview}
          id={dialogData[1].id}
        />
        <DialogPreview
          name={dialogData[2].name}
          messagePreview={dialogData[2].messagePreview}
          id={dialogData[2].id}
        />
        <DialogPreview
          name={dialogData[3].name}
          messagePreview={dialogData[3].messagePreview}
          id={dialogData[3].id}
        />
      </div>

      <div className={style.dialogContent}>
        <DialogContent
          name={messageData[0].name}
          message={messageData[0].message}
        />
        <DialogContent
          name={messageData[1].name}
          message={messageData[1].message}
        />
        <DialogContent
          name={messageData[2].name}
          message={messageData[2].message}
        />
      </div>
    </div>
  );
};

export default Dialogs;
