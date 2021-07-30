import React, { Component } from "react";
import "./BaiTapOanTuTi.css";
import Computer from "./Computer";
import Player from "./Player";
import KetQuaTroChoi from "./KetQuaTroChoi";
import { connect } from "react-redux";
export class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                const action = {
                  type: "RAN_DOM",
                };

                let count = 0;

                let randomComputerItem = setInterval(() => {
                  this.props.dispatch(action);
                  if (count > 10) {
                 
                    clearInterval(randomComputerItem);
                    const actionEndGame = {
                        type:'END_GAME',
                    }
                    this.props.dispatch(actionEndGame);
                  }
                  count++;
                }, 100);
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BaiTapOanTuTi);
