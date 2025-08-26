import "./modals.scss";
const Modal = ({ active, children, onClose }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const handleOverlayClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${active ? "active" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__overlay"></div>
      <div className="modal__content" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
