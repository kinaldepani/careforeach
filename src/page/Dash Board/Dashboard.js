import React from 'react'
import "../Dash Board/Dashboard.css"
import image01 from '../image/Vector1.png'
import image02 from '../image/photo.png'
// import image1 from '../image/box-image-1.png'
import image2 from '../image/box-image-2.png'
import image3 from '../image/box-image-3.png'
import image4 from '../image/box-image-4.png'
import image5 from '../image/box-image-5.png'
import image6 from '../image/box-image-6.png'
import image7 from '../image/box-image-7.png'
import image8 from '../image/box-image-8.png'
import image9 from '../image/box-image-9.png'
import image10 from '../image/box-image-10.png'
import image11 from '../image/box-image-11.png'
import image12 from '../image/box-image-12.png'
import image13 from '../image/box-image-13.png'
// import image14 from '../image/box-image-14.png'
import Navbar from '../Navbar/Navbar'

function Dashboard() {
    return (
        <>
            <div className='d-flex'>
                <Navbar />
                <div className=' main-section-dashboard'>
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
                            <h1>Dash Board</h1>
                        </div>
                        <div className='main-section-bg'>
                            <div className='welcom-bg-section ms-md-auto mt-md-0'>
                                <div className='row d-flex justify-content-center px-0'>

                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small'>
                                            <img src={image2} />
                                            <h5>Order</h5>
                                        </div>
                                    </div>

                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small'>
                                            <img src={image3} />
                                            <h5>Attendence</h5>
                                        </div>
                                    </div>

                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main'>
                                        <div className='image-small'>
                                            <img src={image4} />
                                            <h5>Employee</h5>
                                        </div>
                                    </div>


                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main'>
                                        <div className='image-small-six'>
                                            <img src={image5} />
                                            <h5>Ginnie Box</h5>
                                        </div>
                                    </div>

                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main'>
                                        <div className='image-small-six'>
                                            <img src={image6} />
                                            <h5>Visitor</h5>
                                        </div>
                                    </div>

                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image7} />
                                            <h5>Product</h5>
                                        </div>
                                    </div>


                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image8} />
                                            <h5>Leave </h5>
                                        </div>
                                    </div>


                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image9} />
                                            <h5>Category</h5>
                                        </div>
                                    </div>


                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image13} />
                                            <h5>Report</h5>
                                        </div>
                                    </div>


                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image11} />
                                            <h5>Message</h5>
                                        </div>
                                    </div>



                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image12} />
                                            <h5>Complaint</h5>
                                        </div>
                                    </div>



                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 d-flex  justify-content-center icon-bg-color-main '>
                                        <div className='image-small-six'>
                                            <img src={image10} />
                                            <h5>Sub Category</h5>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}

export default Dashboard
