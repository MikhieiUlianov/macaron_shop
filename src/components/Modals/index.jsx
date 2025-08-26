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
      onClose(); // trigger closing logic (e.g., dispatch Redux action)
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // prevent closing when clicking inside modal
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
