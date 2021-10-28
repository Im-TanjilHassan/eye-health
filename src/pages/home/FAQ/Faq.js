import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='container'>
                <div className='row'>
                    <p className='fw-bold text-center text-light pt-5'>FAQ</p>
                    <h2 className='text-center text-white pt-3'>Frequently Asked Questions</h2>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                01. Can lasik get rid of my reading glasses?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                A nearsighted eye will focus near objects by itself without reading glasses. LASIK surgery removes this near focus because the nearsightedness has been corrected
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                02. At what age can you get Lasik?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    In general, the average age range for getting LASIK is between 20 and 40 years of age.The FDA has approved LASIK eye surgery
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                03. What is a glasses prescription only good for one year?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                Eyeglass lens prescriptions typically are valid for a minimum of one year, or the minimum required by state law. It's very common for the expiration date on.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                04. Do I need to leave my glasses with you if I just want new lenses?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                You can put old lenses in new frames in most cases, as long as the new frames are the same ones you used to have.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                05. What are the best vision correction options available for my eyes?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                <div className="accordion-body">
                                LASIK is a type of refractive eye surgery. In general, most people who have laser-assisted in situ keratomileusis (LASIK) eye surgery.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Faq;