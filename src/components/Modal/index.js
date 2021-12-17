import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

const Modal = ({ className, getImg, imgState }) => {
  return (
    <div className={className}>
      <div
        onClick={() => getImg("")}
        className={imgState.modal ? `modal open` : `modal`}
      >
        <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${imgState.imageSrc}`} alt="full-image"/>
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  getImg: PropTypes.func,
  imgState: PropTypes.object,
};

export default Modal;
