import React, { Component } from 'react';
import './modal.css' ;


class Modal extends Component {

    // close = ()=>{
    // //   const el =   document.getElementById('close');
    // //   const modal = document.getElementById('myModal');
    // //   modal.style.display = 'none' ;
    // }

    checkAccept = ()=>{
        return 
    }

    render() {

        return (
            <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-header">
                <h3>Warning!</h3>
               <span className="close" id="close" onClick={this.props.closeModal}>&times;</span>
                   
                </div>
                <div className="modal-body">
                    <p className="text-center">You Will Make Deletion Process..Are You Sure ?</p>
                    <div>
                        <button className="bg-danger" onClick={this.props.closeModelWithDeletion}>Yes</button>
                        <button className="bg-primary" onClick={this.props.closeModal}>NO</button>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default Modal;