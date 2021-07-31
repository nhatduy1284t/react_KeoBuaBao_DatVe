import {combineReducers,createStore} from 'redux';
import BaiTapOanTuTiReducer  from './BaiTapOanTuTiReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer'
const rootReducer = combineReducers({

    BaiTapOanTuTiReducer:BaiTapOanTuTiReducer,
    BaiTapDatVeReducer:BaiTapDatVeReducer
    
})

export const store=createStore(rootReducer);