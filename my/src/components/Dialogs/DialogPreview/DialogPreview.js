import React from 'react';
import style from './DialogPreview.module.css';

const DialogPreview = (props) => {
    return (
        <div className={style.dialogPreview}>
            <img className={ `${style.avatarNews}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM" alt="avatar"/>
            <div className={style.name}>{props.name}</div>
            <div className={style.messagePreview}>{props.messagePreview}</div>
        </div>
    )
}

export default DialogPreview;