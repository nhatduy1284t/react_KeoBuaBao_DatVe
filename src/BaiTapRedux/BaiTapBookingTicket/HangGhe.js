import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/actions/BaiTapDatVeActions";
export class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      if (this.props.hangGhe.hang === "") {
        return <span className="rowNumber text-center" key={index}>{ghe.soGhe}</span>;
      }
      //Trạng thái ghế đã bị đặt
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat === true) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      //Xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
          onClick={() => {
            this.props.dispatch(datGheAction(ghe));
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.hangGhe.hang === "") {
      return <span style={{ opacity: 0 }}>0</span>;
    }
    return <span>{this.props.hangGhe.hang}</span>;
  };
  render() {
    return (
      <div className="text-light text-left ml-5 mb-3 d-flex justify-content-around">
        {this.renderHangGhe()}
        {this.renderGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(HangGhe);
