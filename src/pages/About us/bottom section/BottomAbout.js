import React from 'react';
import './BottomAbout.css'


const BottomAbout = () => {

    return (
        <div className='bottom-about'>
            <div className='container'>
                <div className='row text-center'>
                    <p>Why Choose Us</p>
                    <h2 className='about-title text-primary mb-5'>Providing Care For The Sickest</h2>
                    <div className='row gap-5 ms-5'>
                        <div className='col-lg-3 col-sm-12'>
                            <div class="card about-card" style={{width: '18rem'}}>
                                <div className='row pt-3 ps-3 mb-3'>
                                    <div className='col-6 text-center fs-2'>
                                        {<i className="fas fa-user-md icon"></i>}
                                    </div>
                                    <p className='col-6 text-center fs-2'>01</p>
                                </div>
                                <div class ="card-body">
                                <h5 class ="card-title">Qualified Doctors</h5>
                                <p class ="card-text">Our doctors are the best in this country they act so politely and care so much of their patient</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                        <div class="card about-card" style={{width: '18rem'}}>
                                <div className='row pt-3 ps-3 mb-3'>
                                    <div className='col-6 text-center fs-2'>
                                        {<i class="fas fa-eye icon"></i>}
                                    </div>
                                    <p className='col-6 text-center fs-2'>02</p>
                                </div>
                                <div class ="card-body">
                                <h5 class ="card-title">Eye Examination</h5>
                                <p class ="card-text">An eye examination is a series of tests performed to assess vision and ability to focus on.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                        <div class="card about-card" style={{width: '18rem'}}>
                                <div className='row pt-3 ps-3 mb-3'>
                                    <div className='col-6 text-center fs-2'>
                                        {<i class="fas fa-user icon"></i>}
                                    </div>
                                    <p className='col-6 text-center fs-2'>03</p>
                                </div>
                                <div class ="card-body">
                                <h5 class ="card-title">Contact Lenses</h5>
                                <p class ="card-text">Contact lenses, or simply contacts, are thin lenses placed directly on the surface of the eyes.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                        <div class="card about-card" style={{width: '18rem'}}>
                                <div className='row pt-3 ps-3 mb-3'>
                                    <div className='col-6 text-center fs-2'>
                                        {<i className="fas fa-user-md icon"></i>}
                                    </div>
                                    <p className='col-6 text-center fs-2'>04</p>
                                </div>
                                <div class ="card-body">
                                <h5 class ="card-title">Laser Eye Correction</h5>
                                <p class ="card-text">Laser eye surgery, or laser vision correction, involves using lasers to reshape the front surface</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BottomAbout;