import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Notification.module.scss';

const Notification = ({ message }) => {
  const notificationRoot = document.getElementById('notification-root');

  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.notification}>{message}</div>,
        notificationRoot
      )}
    </>
  );
};

export default Notification;
