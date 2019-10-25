import React from 'react';
import style from './Dialogs.module.css';
import DialogPreview from './DialogPreview/DialogPreview.js';
import DialogContent from './DialogContent/DialogContent.js'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <DialogPreview name='Igor' messagePreview='hi' />
                <DialogPreview name='Gleb' messagePreview='hi, where are you?' />
                <DialogPreview name='Artem' messagePreview='hi, how are you?' />
                <DialogPreview name='Inna' messagePreview='hi, could you tell me plz...' />
            </div>

            <div className={style.dialogContent}>
                <DialogContent name='Igor' message='Hi!' />
            </div>
        </div>
    )
}

export default Dialogs;