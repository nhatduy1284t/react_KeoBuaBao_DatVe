import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      

      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position:'relative',
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
        className="bookingMovie"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM CYBERLEARN</div>

                <div className="mt-5 text-light display-4" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>

                <div className="d-flex flex-column align-items-center mt-1">
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>

              <div className="col-4">
                <div className="text-light mt-2" style={{ fontSize: "35px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
