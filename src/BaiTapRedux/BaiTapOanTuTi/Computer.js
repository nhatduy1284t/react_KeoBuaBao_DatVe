import React, { Component } from "react";
import { connect } from "react-redux";
export class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -15px;}
      25% {top: 15px;}
      50% {top: -15px;}
      75% {top: 15px;}
      75% {top: 0;}
    }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink position-relative">
          <img
            className="mt-3"
            style={{ width: 100, height: 100,left:'30%', transform: "rotate(-120deg)",position:'absolute', animation: `randomItem${Date.now()} 0.5s` }}
            src={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img height={250} width={250} src={"./img/gameOanTuTi/playerComputer.png"} alt="./img.ganeOanTuTi/player.png" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
