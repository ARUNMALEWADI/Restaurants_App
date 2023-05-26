import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return (
      <div className={classes.backdrop}></div>
    )
  }
  


const Overlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  );
}



const helper=document.getElementById('overlays');

const Modal = (props) => {
   
  return <Fragment>
   { ReactDOM.createPortal(<Backdrop/>,helper)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay> ,helper)}
  </Fragment>
}
export default Modal;
