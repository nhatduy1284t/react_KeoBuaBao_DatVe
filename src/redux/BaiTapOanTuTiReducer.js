const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png" },
};

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];

      for (let item of mangCuocUpdate) {
        item.datCuoc = false;
      }

      let indexCuoc = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);

      if (indexCuoc !== -1) {
        mangCuocUpdate[indexCuoc].datCuoc = true;
      }

      state.mangDatCuoc = mangCuocUpdate;

      return { ...state };
    }
    case "RAN_DOM": {
      console.log(action);
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let player = {...state.mangDatCuoc.find((item) => item.datCuoc == true) };    
      let computer = { ...state.computer };
      let thang = "You were never a god";
      let hoa = "Hoà nhau!!!";
      let thua = "thua sml";

      state.soBanChoi++;
      
      switch (player.ma) {
        case "keo":
          {
            if (computer.ma == "keo") {
              state.ketQua = hoa;
            } else if (computer.ma == "bua") {
              state.ketQua = thua;
            } else {
              state.ketQua = thang;
              state.soBanThang++;
            }
          }
          break;
        case "bua":
          {
            if (computer.ma == "bua") {
              state.ketQua = hoa;
            } else if (computer.ma == "bao") {
              state.ketQua = thua;
            } else {
              state.ketQua = thang;
              state.soBanThang++;
            }
          }
          break;
        case "bao":
          {
            if (computer.ma == "bao") {
              state.ketQua = hoa;
            } else if (computer.ma == "keo") {
              state.ketQua = thua;
            } else {
              state.ketQua = thang;
              state.soBanThang++;
            }
          }
          break;
          default:{
            state.ketQua=hoa;
          }
      }
    }
    default:
      return { ...state };
  }
  
};

export default BaiTapOanTuTiReducer;
