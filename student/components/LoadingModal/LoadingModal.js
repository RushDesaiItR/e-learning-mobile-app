import React, { Component } from "react";

import "./LoadingModal.scss";

class LoadingModal extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.stopLoading ? (
          <div className="component-loading-modal">
            <div className="component-loading-modal-main">
              <div className="component-loading-modal-block">
                <div className="component-loading-modal-dot dot1"></div>
                <div className="component-loading-modal-dot dot2"></div>
                <div className="component-loading-modal-dot dot3"></div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default LoadingModal;
