import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

// Images Import
 import logo from '../../assets/img/logo.jpeg'
 import logoDark from '../../assets/img/logo-dark.jpeg'
import slide_test_4 from '../../assets/img/demo-page/pages/slide_test_4.jpg'
import testbg from '../../assets/img/demo-page/pages/slide_test_7.jpg'
// import coming from '../../assets/img/demo-page/coming-soon.jpg'
import home1 from '../../assets/img/demo-page/pages/slide_test_1.jpg'
import home2 from '../../assets/img/demo-page/pages/slide_test_6.jpg'
// import about from '../../assets/img/demo-page/pages/about.jpg'
// import team from '../../assets/img/demo-page/pages/team.jpg'
// import teamDetails from '../../assets/img/demo-page/pages/team-details.jpg'
// import service from '../../assets/img/demo-page/pages/service.jpg'
// import serviceDetails from '../../assets/img/demo-page/pages/service-details.jpg'
// import blogGrid from '../../assets/img/demo-page/pages/blog-grid.jpg'
// import blogGridRight from '../../assets/img/demo-page/pages/blog-r-g.jpg'
// import blogGridLeft from '../../assets/img/demo-page/pages/blog-l-g.jpg'
// import blogListLeft from '../../assets/img/demo-page/pages/blog-l-l.jpg'
// import blogListRight from '../../assets/img/demo-page/pages/blog-l-r.jpg'
// import blogDetails from '../../assets/img/demo-page/pages/blog-details.jpg'
// import contact from '../../assets/img/demo-page/pages/contact.jpg'
// import reactLogo from '../../assets/img/demo-page/react.svg'
import bootstrap from '../../assets/img/demo-page/bootstrap.png'
import scss from '../../assets/img/demo-page/sass.png'
import jquery from '../../assets/img/demo-page/jquery.png'
import responsive from '../../assets/img/demo-page/responsive.png'
import slick from '../../assets/img/demo-page/slick.jpg'
import fa from '../../assets/img/demo-page/fontawesome.png'
import gf from '../../assets/img/demo-page/google-font.png'
// import cleanCode from '../../assets/img/demo-page/code.png'
import speed from '../../assets/img/demo-page/speed.png'
// import documented from '../../assets/img/demo-page/document.png'
// import support from '../../assets/img/demo-page/support.png'
import Footer from "../../components/Footer";
class DemoPage extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    render() {
        return (
            <Fragment>
                <div className="header-section section fixed-top">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6">
                                <div className="logo">
                                    <img className={'logo-light'} src={logo} alt="logo"/>
                                    <img className={'logo-dark'} src={logoDark} alt="Stikcy Logo"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="buy-btn-area text-right">
                                    <a className="btn-outline d-inline-block"
                                       href={`${process.env.PUBLIC_URL + "/contact"}`}>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-section" style={{backgroundImage: `url(${testbg})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="hero-content-wrap">
                                    <div className="hero-content text-center">
                                        <h1><strong>Monitor</strong> Corporate Business </h1>
                                        <p>Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo-section sm-top-wt" id="demo-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-style">
                                    <div className="section-title text-center">
                                        <h2>Our Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mtn-20">
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <Link to={`${process.env.PUBLIC_URL + "/home-one"}`} className="image" target="_blank">
                                        <img src={slide_test_4} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </Link>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/home-one"}`} target="_blank" rel="noopener noreferrer">IT Consulting</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <Link to={`${process.env.PUBLIC_URL + "/home-two"}`} className="image" target="_blank">
                                        <img src={home2} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </Link>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/home-two"}`} target="_blank" rel="noopener noreferrer">Marketing Strategy</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item coming">
                                    <a href={`${process.env.PUBLIC_URL + "/"}`} className="coming" target="_blank" rel="noopener noreferrer">
                                        <img src={home1} alt="Demo Images"/>
                                    </a>
                                    <h4 className="title"><a href={`${process.env.PUBLIC_URL + "/"}`} target="_blank" rel="noopener noreferrer">Logistics</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="demo-section sm-top-wt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-style">
                                    <div className="section-title">
                                        <h2>Other pages</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mtn-20">
                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/about"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={about} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/about"}`} target="_blank" rel="noopener noreferrer">About</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/team"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={team} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/team"}`} target="_blank" rel="noopener noreferrer">Team</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/team-member/bernard-arnault?id=1"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={teamDetails} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/team-member/bernard-arnault?id=1"}`} target="_blank" rel="noopener noreferrer">Team Details</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/services"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={service} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/services"}`} target="_blank" rel="noopener noreferrer">Service</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/service/creative-ideas?id=1"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={serviceDetails} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/service/creative-ideas?id=1"}`} target="_blank" rel="noopener noreferrer">Service Details</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogGrid} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog Grid</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogGridRight} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog Right Sidebar</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogGridLeft} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog Left Sidebar</a></h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogListLeft} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog List Left Sidebar</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogListRight} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`} target="_blank" rel="noopener noreferrer">Blog List Right Sidebar</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/new-business-strategy?id=1"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={blogDetails} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/new-business-strategy?id=1"}`} target="_blank" rel="noopener noreferrer">Blog
                                        Details</a>
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="demo-item">
                                    <a href={`${process.env.PUBLIC_URL + "/contact"}`} className="image" target="_blank" rel="noopener noreferrer">
                                        <img src={contact} alt="Demo Images"/>
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                    <h4 className="title">
                                        <a href={`${process.env.PUBLIC_URL + "/contact"}`} target="_blank" rel="noopener noreferrer">Contact</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="bg-offwhite sp-y sm-top" id="core-feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <div className="section-title text-center">
                                    <h2>Monitor Partners</h2>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mtn-30">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={speed} alt="businex" style={{width: 112}}/>
                                    <h4>React</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={scss} alt="businex"/>
                                    <h4>Moov</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={jquery} alt="businex"/>
                                    <h4>SOciété Générale</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={bootstrap} alt="businex"/>
                                    <h4>Orange</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={responsive} alt="businex"/>
                                    <h4>Vincy</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={slick} alt="businex"/>
                                    <h4>Test</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={fa} alt="businex"/>
                                    <h4>Test</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={gf} alt="businex"/>
                                    <h4>Test</h4>
                                </div>
                            </div>

                            {/* <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={cleanCode} alt="businex"/>
                                    <h4>Clean Code</h4>
                                </div>
                            </div> */}

                            {/* <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={speed} alt="businex"/>
                                    <h4>Speed Optimized</h4>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={documented} alt="businex"/>
                                    <h4>Well Documented</h4>
                                </div>
                            </div> */}

                            {/* <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="feature-item">
                                    <img src={support} alt="businex"/>
                                    <h4>24/7 Support</h4>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="footer-section bg-brand">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-content text-center">
                                    <h3>Find the best collaborators to build your projects.</h3>
                                    <a className="btn-outline"
                                       href={`${process.env.PUBLIC_URL + "/contact"}`}
                                       target="_blank" rel="noreferrer noopener">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </Fragment>
        );
    }
}

export default DemoPage;