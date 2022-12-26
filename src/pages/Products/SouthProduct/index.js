import React, { Component } from 'react';
import '../NorthProduct/NorthProduct.css'
import ColumnSection from '../../../component/ColumnSection'
import FooterSection from '../../../component/FooterSection'
import Header from '../../../component/Header';
import doolin_house_dublin01 from '../../../assets/img/index/doolin-house-dublin01.jpeg'
import glasnevin_dublin01 from '../../../assets/img/index/glasnevin-dublin01.jpeg'
import templeogue_dublin01 from '../../../assets/img/index/templeogue-dublin01.jpeg'
import charlotte_quay_dublin01 from '../../../assets/img/index/charlotte-quay-dublin01.jpeg'
import killinick_wexford01 from '../../../assets/img/index/killinick-wexford01.jpeg'


export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="local-property-card-section pt-md-5">
                    <h1>Các dự án ở phía Nam</h1>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="box1">
                                    <img src={doolin_house_dublin01} className="img-fluid" alt="Doolin House, Dublin" />
                                    <div className="text">
                                        <span>1.800.000.000 đ</span>
                                        <hr />
                                        <h3>Hà Nội Melody Residences</h3>
                                        <hr />
                                        <div className="property-details justify-content-between d-flex align-self-center">
                                            <div>
                                                <i className="fas fa-bed mr-2 align-self-center" />
                                                <span className>1</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-bath mr-2 align-self-center" />
                                                <span>1</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-ruler-combined mr-2 align-self-center" />
                                                <span>54 mét vuông</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <a href="projects.html">Thêm dự án<i className="fas fa-long-arrow-alt-right ml-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="box1">
                                    <img src={glasnevin_dublin01} className="img-fluid" alt="Glasnevin, Dublin" />
                                    <div className="text">
                                        <span>4.250.000.000 đ</span>
                                        <hr />
                                        <h3>De La Sol</h3>
                                        <hr />
                                        <div className="property-details justify-content-between d-flex align-self-center">
                                            <div>
                                                <i className="fas fa-bed mr-2 align-self-center" />
                                                <span className="mr-3">3</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-bath mr-2 align-self-center" />
                                                <span>1</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-ruler-combined mr-2 align-self-center" />
                                                <span>160 mét vuông</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <a href="projects.html">Thêm dự án<i className="fas fa-long-arrow-alt-right ml-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="box1">
                                    <img src={templeogue_dublin01} className="img-fluid" alt="Templeogue, Dublin" />
                                    <div className="text">
                                        <span>4.750.000.000 đ</span>
                                        <hr />
                                        <h3>Zenity</h3>
                                        <hr />
                                        <div className="property-details justify-content-between d-flex align-self-center">
                                            <div>
                                                <i className="fas fa-bed mr-2 align-self-center" />
                                                <span className="mr-3">3</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-bath mr-2 align-self-center" />
                                                <span>2</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-ruler-combined mr-2 align-self-center" />
                                                <span>180 mét vuông</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <a href="projects.html">Thêm dự án<i className="fas fa-long-arrow-alt-right ml-2" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="box1">
                                    <img src={charlotte_quay_dublin01} className="img-fluid" alt="Charlotte Quay Dublin" />
                                    <div className="text">
                                        <span>6.000.000.000 đ</span>
                                        <hr />
                                        <h3>Fiato Premier</h3>
                                        <hr />
                                        <div className="property-details justify-content-between d-flex align-self-center">
                                            <div>
                                                <i className="fas fa-bed mr-2 align-self-center" />
                                                <span className="mr-3">3</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-bath mr-2 align-self-center" />
                                                <span>2</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-ruler-combined mr-2 align-self-center" />
                                                <span>81 mét vuông</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <a href="projects.html">Thêm dự án<i className="fas fa-long-arrow-alt-right ml-2" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="box1">
                                    <img src={killinick_wexford01} className="img-fluid" alt="Ballyfinogue House, Killinick, Wexford" />
                                    <div className="text">
                                        <span>7.450.000.000 đ</span>
                                        <hr />
                                        <h3>The Crown - Vinhomes Ocean Park 3</h3>
                                        <hr />
                                        <div className="property-details justify-content-between d-flex align-self-center">
                                            <div>
                                                <i className="fas fa-bed mr-2 align-self-center" />
                                                <span className="mr-3">5</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-bath mr-2 align-self-center" />
                                                <span>2</span>
                                            </div>
                                            <div className="border-right dorder-danger" />
                                            <div>
                                                <i className="fas fa-ruler-combined mr-2 align-self-center" />
                                                <span>220 mét vuông</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <a href="projects.html">Thêm dự án<i className="fas fa-long-arrow-alt-right ml-2" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ColumnSection></ColumnSection>
                <FooterSection></FooterSection>
            </div>
        );
    }
}
