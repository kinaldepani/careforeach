import React from 'react'
import image01 from '../image/Vector1.png'
import image02 from '../image/photo.png'
import Navbar from '../Navbar/Navbar'
import img1 from '../image/photo-man.png'
import image001 from '../image/main-image-order.png'

function Ginnieboxproductdetail() {
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
                                    <h1>Ginnie Box Product Detail   </h1>
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


                    {/* <div className='main-section-bg'>
                        <div className='welcom-bg-section ms-md-auto mt-md-0'>
                            <div className='row d-flex m-5 gy-3 '>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 m-1 gy-1 d-flex m-1 icon-bg-color-main-two '>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='main-section-bg'>
                        <div className='welcom-bg-section ms-md-auto mt-md-0'>
                            <div className='row d-flex m-5 gy-3 '>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 gy-1 d-flex icon-bg-color-main-three'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section'>
                                            <h5 >HIGHLANDER</h5>
                                            <h6>Product Code : rtx34<br />
                                                Quantity : 20<br />
                                                Price : ₹ 19980<br />
                                                Description : loremloremloremlorem<br />
                                            </h6>
                                        </div>
                                    </div>

                                </div>


                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 gy-1 d-flex icon-bg-color-main-three'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section'>
                                            <h5 >HIGHLANDER</h5>
                                            <h6>Product Code : rtx34<br />
                                                Quantity : 20<br />
                                                Price : ₹ 19980<br />
                                                Description : loremloremloremlorem<br />
                                            </h6>
                                        </div>
                                    </div>

                                </div>


                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 gy-1 d-flex icon-bg-color-main-three'>
                                    <div className='d-flex'>
                                        <div className='main-image-order-section'>
                                            <img src={image001}></img>
                                        </div>

                                        <div className='HIGHLANDER-text-section'>
                                            <h5 >HIGHLANDER</h5>
                                            <h6>Product Code : rtx34<br />
                                                Quantity : 20<br />
                                                Price : ₹ 19980<br />
                                                Description : loremloremloremlorem<br />
                                            </h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}


        </>
    )
}

export default Ginnieboxproductdetail
