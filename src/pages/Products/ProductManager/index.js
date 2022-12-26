import React, { Component } from 'react';
import '../ProductManager/ProductManager.css'
import Header from '../../../component/Header'
import FooterSection from '../../../component/FooterSection'
import abroad from '../../../assets/img/index/abroad-classic01.jpg'
import advice from '../../../assets/img/index/abroad-unique02.jpg';


export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container content-section">
                    <hr />
                    <h2 className="section-header"><i className="bx bx-building-house" /> Dự án đã thêm </h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">DỰ ÁN</span>
                        <span className="cart-price cart-header cart-column">GIÁ</span>
                        <span className="cart-quantity cart-header cart-column">SỐ LƯỢNG</span>
                    </div>
                    <div className="cart-items">
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={abroad} width="100px" height="100px" />
                                <span className="cart-item-title">COLD-BREWED</span>
                            </div>
                            <span className="cart-price cart-column">2.900.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={abroad} width="100px" height="100px" />
                                <span className="cart-item-title">COLD-BREWED</span>
                            </div>
                            <span className="cart-price cart-column">2.900.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={abroad} width="100px" height="100px" />
                                <span className="cart-item-title">COLD-BREWED</span>
                            </div>
                            <span className="cart-price cart-column">2.900.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={advice} width="100px" height="100px" />
                                <span className="cart-item-title">Khu tích hợp đô thị mới LanMark</span>
                            </div>
                            <span className="cart-price cart-column">3.999.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={advice} width="100px" height="100px" />
                                <span className="cart-item-title">Khu tích hợp đô thị mới LanMark</span>
                            </div>
                            <span className="cart-price cart-column">3.999.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={advice} width="100px" height="100px" />
                                <span className="cart-item-title">Khu tích hợp đô thị mới LanMark</span>
                            </div>
                            <span className="cart-price cart-column">3.999.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                        <div className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt='' src={advice} width="100px" height="100px" />
                                <span className="cart-item-title">Khu tích hợp đô thị mới LanMark</span>
                            </div>
                            <span className="cart-price cart-column">3.999.000.000 đ</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" defaultValue={1} />
                                <button className="btn btn-danger" type="button">Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-total">
                        <strong className="cart-total-title">Tổng</strong>
                        <span className="cart-total-price">3.000.000.000 đ</span>
                    </div>
                </div>
                <FooterSection />
            </div>
        );
    }
}
