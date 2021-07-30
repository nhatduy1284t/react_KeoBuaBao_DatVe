import React, { Component } from "react";
import { connect } from "react-redux";
export class Player extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            style={{ width: 100, height: 100, transform: "rotate(-120deg)" }}
            src={this.props.mangDatCuoc.find((item) => item.datCuoc == true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img height={250} width={250} src={"./img/gameOanTuTi/player.png"} alt="./img.ganeOanTuTi/player.png" />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "6px solid orange" };
            }

            return (
              <div className="col-4">
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    const action = {
                      type:'CHON_KEO_BUA_BAO',
                      maCuoc:item.ma
                    };
                    console.log("dispatch",item.ma)
                    this.props.dispatch(action)
                  }}
                >
                  <img className="w-100" src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc,
  };
};

export default connect(mapStateToProps)(Player);
