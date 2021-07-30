import {combineReducers,createStore} from 'redux'
import BaiTapOanTuTiReducer  from'./BaiTapOanTuTiReducer'
const rootReducer = combineReducers({

    BaiTapOanTuTiReducer:BaiTapOanTuTiReducer
})

export const store=createStore(rootReducer);