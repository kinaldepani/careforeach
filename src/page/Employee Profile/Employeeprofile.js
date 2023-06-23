import React from 'react'
import "../Employee Profile/Employeeprofile.css"
import image01 from '../image/Vector1.png'
import image02 from '../image/photo.png'
import Navbar from '../Navbar/Navbar'
import img01 from '../image/photo-man.png'


function Employeeprofile() {
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
                                    <h1>Add Employees</h1>
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



                        <div className='main-section-bg'>
                            <div className="container-fluid">
                                <div className='welcom-bg-section-one'>
                                    <div className='white-bg-color-main-section'>
                                        <div className='row'>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                                <div>
                                                    <div class="mb-4 d-flex justify-content-center mt-5 uplode-img-section">
                                                        <img src={img01} alt="example placeholder" />
                                                    </div>

                                                    <div className='text-input-bg-color-main'>
                                                        <div className='text-input-section'>
                                                            <div class="form-floating mb-1">
                                                                <input type="text" class="form-control" id="text" placeholder="Employee Name" />
                                                                <label for="email">Employee Name</label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='text-input-bg-color-main'>
                                                        <div className='text-input-section m-3'>
                                                            <div class="form-floating mb-1">
                                                                <input type="email" class="form-control" id="email" placeholder="Email" />
                                                                <label for="email">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='text-input-bg-color-main'>
                                                        <div className='text-input-section m-3'>
                                                            <div class="form-floating mb-1">
                                                                <input type="text" class="form-control" id="text" placeholder="Designation" />
                                                                < label for="email" > Designation</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Employee-Profile-section-main'>
                                                <div className='text-input-bg-color-main'>
                                                    <div className='text-input-section m-3'>
                                                        <div class="form-floating mb-1">
                                                            <input type="text" class="form-control" id="text" placeholder="Email" />
                                                            <label for="email">Joining Date</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='text-input-bg-color-main'>
                                                    <div className='text-input-section m-3'>
                                                        <div class="form-floating mb-1">
                                                            <input type="text" class="form-control" id="text" placeholder="Email" />
                                                            <label for="email">Date of Birth</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='text-input-bg-color-main'>
                                                    <div className='text-input-section m-3'>
                                                        <div class="form-floating mb-1">
                                                            <input type="tel" class="form-control" id="phone" placeholder="Email" />
                                                            <label for="email">Mob No.</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='text-input-bg-color-main'>
                                                    <div className='text-input-section m-3'>
                                                        <div class="form-floating mb-1">
                                                            <input type="text" class="form-control" id="text" placeholder="Email" />
                                                            <label for="email">Address</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='text-input-bg-color-main'>
                                                    <div className='text-input-section m-3'>
                                                        <div class="form-floating mb-1">
                                                            <input type="text" class="form-control" id="text" placeholder="Email" />
                                                            <label for="email">Education</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='Delete-profile-section text-center'>
                                                <button type="button" class="btn">Delete Profile</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Employeeprofile
