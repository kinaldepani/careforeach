import React from 'react'
import "../Product/Product.css"
import image01 from '../image/Vector1.png'
import image02 from '../image/photo.png'
import Navbar from '../Navbar/Navbar'
import image001 from '../image/main-image-order.png'
import img001 from '../image/plus.png'


function Product() {
    return (
        <>
            <div className='d-flex'>
                <Navbar />
                <div className='main-section-dashboard'>
                    <div className="container-fluid">
                        <div className='dash-back-color d-flex'>
                            <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>


                            <div className='d-flex dropdwo-section-main ms-md-auto mt-md-0 mt-3'>
                                <div className='commant-btn'>
                                    <img src={image01}></img>
                                </div>
                                <div className='commant-btn'>
                                    <i class="fa fa-bell-o" aria-hidden="true" style={{ color: "white", fontSize: "20px" }}></i>
                                </div>

                                <div className='photo-section'>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={image02} />&nbsp;<span>Your Profile</span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='welcom-text'>
                            <p>Welcome to Care For Each</p>

                            <div className='d-flex'>
                                <div className='welcom-text'>
                                    <h1>Product</h1>
                                </div>

                                <div className='d-flex ms-auto'>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            All
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">All</a></li>
                                            <li><a class="dropdown-item" href="#">All This Year</a></li>
                                            <li><a class="dropdown-item" href="#">This month</a></li>
                                            <li><a class="dropdown-item" href="#">Today</a></li>
                                        </ul>
                                    </div>

                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            All Employee
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#"> ABC</a></li>
                                            <li><a class="dropdown-item" href="#">DEF</a></li>
                                            <li><a class="dropdown-item" href="#"> GHI </a></li>
                                            <li><a class="dropdown-item" href="#"> JKL</a></li>
                                            <li><a class="dropdown-item" href="#">  MNO </a></li>
                                            <li><a class="dropdown-item" href="#"> PQR</a></li>
                                            <li><a class="dropdown-item" href="#">STU</a></li>
                                            <li><a class="dropdown-item" href="#"> VWX </a></li>
                                            <li><a class="dropdown-item" href="#"> YZ </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main-section-bg'>
                        <div className='welcom-bg-section ms-md-auto mt-md-0'>
                            <div className='row d-flexd gy-3 product-box-section'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>



                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>



                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>



                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 gy-1 d-flex icon-bg-color-main-six'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section-one'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section-one'>
                                            {/* <h6 >HIGHLANDER</h6> */}
                                            <small>Name :  kagkuh<br />
                                                Code : my09e<br />
                                                Stock : 9082<br />
                                                Price : 1305<br />
                                                Description : sftctc diufvb iuvfb
                                            </small>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className='product-btn'>
                                <button type="button" class="btn">Add Product <img src={img001} /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
