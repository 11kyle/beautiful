import  React from 'react';

const Modal = ({show, children }) => {
  const showHideClassName = show ? 'modal-fixed show' : 'modal-fixed d-none';

  return (
    <div className={showHideClassName}>
        {children}
    </div>
  );
};

export default Modal;
