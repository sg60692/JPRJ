import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { $CombinedState } from 'redux';
import { createInquiry, resetColor } from '../../actions/index.js';
import './Contact.scoped.css';
const Contact=() => {
    const [inquiryData,setInquiryData]=useState({
        Phone: '',
        message: '',
        Name: '',
        email: '',
    })
    const dispatch = useDispatch();
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(createInquiry(inquiryData));
        clear();
    };
    const clear=()=>{
        setInquiryData({Phone:'',Name:'',message:'',email:''});
    }    
    const status = useSelector(state => state.status);
    const resetState=(event)=>{
        event.preventDefault();
        console.log(status);
        dispatch(resetColor());
        console.log(status);
    }
    return (
        <div id="Contact">
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase" style={{textAlign:'center',marginBottom:'30px'}}>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" id="name" type="text" 
                                            placeholder="Your Name *" required="required" 
                                            onChange={(e)=>setInquiryData({...inquiryData,Name:e.target.value})}
                                            value={inquiryData.Name}
                                            data-validation-required-message="Please enter your name."/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="email" type="email" 
                                            placeholder="Your Email *" required="required" 
                                            onChange={(e)=>setInquiryData({...inquiryData,email:e.target.value})}
                                            value={inquiryData.email}
                                            data-validation-required-message="Please enter your email address."/>
                                            <p className="help-block text-danger"></p>
                                        </div> 
                                        <div className="form-group">
                                            <input className="form-control" id="phone" type="tel" 
                                            placeholder="Your Phone *" required="required" 
                                            onChange={(e)=>setInquiryData({...inquiryData,Phone:e.target.value})}
                                            value={inquiryData.Phone}
                                            data-validation-required-message="Please enter your phone number."/>
                                            <p className="help-block text-danger"></p>
                                        </div>                    
                                    </div>                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" 
                                            placeholder="Your Message *" required="required"
                                            onChange={(e)=>setInquiryData({...inquiryData,message:e.target.value})}
                                            value={inquiryData.message} 
                                            data-validation-required-message="Please enter a message.">                                            
                                            </textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                    </div>
                                    <div className="relative w-full mb-3 mt-8" style={{display:`${status==1 ? 'block' : 'none'}`,marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
                                        <div class="alert alert-danger" role="alert">
                                            Some error was encountered!
                                            <button type="button" class="close" 
                                            data-dismiss="alert" aria-label="Close"
                                            onClick={resetState}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative w-full mb-3 mt-8" style={{display:`${status==2 ? 'block' : 'none'}`,marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
                                        <div class="alert alert-success" role="alert">
                                            Your message has been sent successfully!
                                            <button type="button" class="close" 
                                            data-dismiss="alert" aria-label="Close" 
                                            onClick={resetState}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>     
            </section>            
        </div>  
    )
};

export default Contact;