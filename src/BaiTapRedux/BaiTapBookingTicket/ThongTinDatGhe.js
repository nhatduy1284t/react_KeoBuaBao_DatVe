import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/actions/BaiTapDatVeActions'
export class ThongTinDatGhe extends Component {
    renderTongTien=() => {

      
        return this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=> {
            return tongTien+=gheDangDat.gia;
        },0)

    }
    render() {
        return (
            <div>
            <div className="mt-5">
                <button className="gheDuocChon"></button>
                <span className="text-light" style={{fontSize:'30px'}}>Ghế đã đặt</span>
                <br/>
                <button className="gheDangChon"></button>
                <span className="text-light" style={{fontSize:'30px'}}>Ghế đang đặt</span>
                <br/>
                <button className="ghe ml-0"></button>
                <span className="text-light" style={{fontSize:'30px'}}>Ghế chưa đặt</span>
            </div>
            <div className="mt-5">
                <table className="table" border='2'>
                    <thead>
                        <tr className="text-light" style={{fontSize:25}}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Huỷ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((gheDangDat,index) => {
                            return <tr style={{fontSize:'25px'}} className="firstChar" key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia.toLocaleString()}</td>
                                <td><button className='btn text-danger' onClick={()=> {
                                    this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                }}>X</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr >
                            <td className="text-light">Tổng tiền</td>
                            <td className="text-warning" style={{fontSize:'30px'}}>{this.renderTongTien().toLocaleString()}</td>
                            <td></td>
                        </tr>

                    </tfoot>
                </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);