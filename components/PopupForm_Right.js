import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class PopupForm_Right extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
              <style jsx>{`
              .addProject {
                width : 200px;
                color : red;
                font-size : 20px;
                padding : 5px;
                margin-top : 20px;
                margin-left : 10px;
                margin-right : 10px;
                display : flex;
                flex-direction : column;
                align-items : center;
                opacity : 0.7;

              }

              .addProject:hover {
                opacity : 1;
              }
              `}</style>
                <input className="addProject" type="button" value="프로젝트 추가하기" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
