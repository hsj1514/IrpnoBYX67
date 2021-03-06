import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Form_Repair from "../components/Form_Repair.js"


export default class RepairButton extends Component {

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
                width : 50px;
                color : black;
                font-size : 12px;
                padding : 5px;
                margin-left : 90%;
                margin-right : 20px;
                display : flex;
                flex-direction : column;
                align-items : center;
              }

              .addTodo:hover {
                opacity : 0.7;
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
                <input className="addTodo" type="button" value="수정" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="500"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1 className="title">계획 수정하기</h1>
                        <Form_Repair />
                        <a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}>닫기</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
