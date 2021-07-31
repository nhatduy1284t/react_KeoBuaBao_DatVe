import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => action.ghe.soGhe === gheDangDat.soGhe
      );
      if (index !== -1) {//Người dùng click vào mà  có trong mảng rồi thì remove
        danhSachGheDangDatUpdate.splice(index, 1);
      } 
      else {//ko thì push
        danhSachGheDangDatUpdate.push(action.ghe)
      }
      state.danhSachGheDangDat=danhSachGheDangDatUpdate;
    }

    case HUY_GHE : {
      let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat];
      let indexCanHuy = danhSachGheDangDatUpdate.findIndex(gheDangDat =>gheDangDat.soGhe===action.soGhe );

      if(indexCanHuy!==-1) {
        danhSachGheDangDatUpdate.splice(indexCanHuy,1);
      }
      state.danhSachGheDangDat=danhSachGheDangDatUpdate;
    }

    default: {
      return { ...state };
    }
  }
return {...state};
  
};

export default BaiTapDatVeReducer;