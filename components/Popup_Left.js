import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Form_Add from "../components/Form_Add.js"


export default class Popup_Left extends Component {

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
              .addTodo {
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

              .addTodo:hover {
                opacity : 1;
              }

              .title {
                margin-left : 10px;
              }

              .close {
                margin-left : 10px;
                margin-bottom : 10px;
                text-decoration : none;
                color : red;
              }
              `}</style>
                <input className="addTodo" type="button" value="계획 추가하기" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="500"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1 className="title">계획 추가하기</h1>
                        <Form_Add />
                        <a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}>닫기</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
