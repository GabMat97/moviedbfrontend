import React from "react";
import UpdateFilm from './UpdateFilm'
import RemoveFilm from './RemoveFilm'

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.modalRef = React.createRef();
      this.closeModal = this.closeModal.bind(this);
      this.showModal = this.showModal.bind(this);
    }
  
    closeModal() {
      this.modalRef.current.style.display = "none";
    }
  
    showModal() {
      this.modalRef.current.style.display = "block";
    }
  
    render() {
      const film = this.props.film || { title: '', film_id: ''};
      return (
        <div
            className="Modal"
            ref={this.modalRef}
          >
           <div className="modal-content">
            <h2 className="Title">{ film.title }</h2>
            <UpdateFilm className="UpdateFilm" film={ film } closeModal={this.closeModal} />
            <RemoveFilm className="RemoveFilm" film={ film } closeModal={this.closeModal} />
            <h2 className="Title"
            onClick={this.closeModal}
            >
              Cancel
            </h2>
          </div>
        </div>
      );
    }
  }

  export default Modal;
  