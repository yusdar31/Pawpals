import {Navbar, Container, Nav, Image, Row, Col, Form} from "react-bootstrap"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {artikelHomepage, testimonial } from "../data/index.js"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import StarRating from '../components/StarRating.jsx';
import FooterComponent from "../components/FooterComponent.jsx";


const Homepage = () => {
    return (
        <div className="homepage" style={{ backgroundColor: '#ffffff' }}>
            <header>
                <div className="header-container">
                    <div className="content-container">
                        <div className="text-container">
                            <div className="title">
                                Hewan peliharaanmu,<br />prioritas kami
                            </div>
                            <div className="subtitle">
                                Paw Pals memberikan bantuan kepada pemilik hewan peliharaan untuk merawat hewan peliharaannya dengan lebih baik.
                            </div>
                            <div className="feature">
                                <img className="icon" src="../public/checklisticon.png" alt="Checklist" />
                                <div className="feature-text">
                                    Temukan banyak artikel dengan mendapatkan informasi yang banyak.
                                </div>
                            </div>
                            <div className="feature">
                                <img className="icon" src="../public/checklisticon.png" alt="Checklist" />
                                <div className="feature-text">
                                    Komunitas yang memungkinkan pengguna untuk berbagi pengalaman satu sama lain.
                                </div>
                            </div>
                        </div>
                        <img className="hero-image" src="../public/HeroImage.png" alt="Hero" />
                    </div>
                </div>
            </header>
            <Container className="artikel pt-5">
                <div className="artikel-title py-5">
                    <div className="artikel-header">Artikel</div>
                    <div className="artikel-description">Baca artikel untuk menambah pengetahuan Anda dalam merawat hewan peliharaan</div>
                </div>
                <Row>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    }}
                    modules={[Pagination]}
                    className="swiperArtikel"
                >
                    {artikelHomepage.map((data) => {
                        return <SwiperSlide className="slideArtikel shadow" key={data.id} style={{ border: '1px solid black' }} >
                            <Row>
                                <Col>
                                    <img className="artikelImage" src={data.image} alt="" />
                                </Col>
                                <Col className="artikelDesk">
                                    <h5 className="artikelTitle fw-bold">{data.title}</h5>
                                    <p className="desk">{data.desk}</p>
                                    <button style={{padding:'5px 15px 5px 15px', color: 'white', background: '#ED6A09', borderRadius: 25, border: 'none'}}>Baca Selengkapnya</button>
                                </Col>
                            </Row>
                        </SwiperSlide>;           
                    })}
                    
                </Swiper>
                </Row>
            </Container>
            <Container className="komunitasHomepage pt-5">
                <Row className="pt-5">
                    <Col>
                        <div style={{ width: 400, height: 400, background: '#E38B54', borderRadius: 9999, position: 'relative' }}>
                            <img style={{ width: 500, height: 500, position: 'absolute', top: '-100px', left: '-25px' }} src="../public/komunitasHomepage.png" />
                        </div>
                    </Col>
                    <Col>
                        <div style={{paddingBottom:'20px',width: '100%', color: 'black', fontSize: 35, fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '500', wordWrap: 'break-word'}}>Bagikan banyak pengalaman dalam merawat anabul kesayanganmu bersama banyak teman baru melalui layanan komunitas.</div>
                        <button
                            className="ButtonKomunitas"
                            style={{
                            padding:'10px 30px 10px 30px',
                            textAlign: 'center',
                            background: '#ED6A09',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            wordWrap: 'break-word',
                            borderRadius: 15, 
                            border: 'none'
                            }}
                        >
                            Gabung Komunitas
                        </button>
                    </Col>
                </Row>
            </Container>
            <div className="testimoni mt-5 py-5" style={{ backgroundColor: '#E38B54' }}>
            <Container>
                <div className="artikel-title">
                    <div className="artikel-header">Ulasan Anda</div>
                    <div className="artikel-description">Beritahu kami ulasan Anda tentang fitur kami dan berikan saran terbaik untuk memberikan hasil yang Anda inginkan</div>
                </div>
                <Row>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    }}
                    modules={[Pagination]}
                    className="swiperTestimoni py-5"
                >
                    {testimonial.map((data) => {
                        return <SwiperSlide key={data.id} className="slideArtikel shadow bg-white" style={{ borderRadius: '20px', padding:'15px 15px 0px 15px'}}>
                            <div className="d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "50px auto auto" }}>
                                <div className="profileImage g-0 m-0">
                                    <img style={{width: '50px', height: '50px', borderRadius: 9999}} src={data.image} />
                                </div>
                                <div className="name fw-bold ">
                                    <p className="g-0 m-0">{data.name}</p>
                                </div>
                                <div className="star m-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <i className={data.star1} style={{ color: "yellow" }}></i>
                                    <i className={data.star2} style={{ color: "yellow" }}></i>
                                    <i className={data.star3} style={{ color: "yellow" }}></i>
                                    <i className={data.star4} style={{ color: "yellow" }}></i>
                                    <i className={data.star5} style={{ color: "yellow" }}></i>
                                    <i className={data.star6} style={{ color: "yellow" }}></i>
                                </div>
                            </div>
                            <Row>
                                <p className="pt-3">{data.desc}</p>
                            </Row>
                            <Row>
                                <p className="date text-end">{data.date}</p>
                            </Row>
                        </SwiperSlide>;           
                    })}
                </Swiper>
                </Row>
            </Container>
            </div>
            <div className="beriUlasan mt-5 py-5 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="titleUlasan py-3">Beri Rating dan Ulasan Website Ini</h3>
                    <StarRating/>
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        style={{
                            margin:'20px 0px 0px 0px',
                            padding:'10px 10px',
                            width: '50%', 
                            height: '50%',
                            border: '1px solid black',
                            borderRadius: '15px',
                        }} 
                        />
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        style={{
                            margin:'20px 0px 0px 0px',
                            padding:'10px 10px',
                            width: '50%', 
                            height: '50%',
                            border: '1px solid black',
                            borderRadius: '15px',
                        }} 
                        />
                    <Form.Control className='Formcontrol mt-3' placeholder="Tuliskan Kesan Pesan Kamu Kepada Kami :)" style={{ width: '50%', height: '50%', background: 'white', borderRadius: 15, border: '1px #A1A1A1 solid' }} as="textarea" rows={3} />
                    <button
                            className="ButtonRating"
                            style={{
                            margin:'20px 0px 0px 0px',
                            padding:'10px 50px 10px 50px',
                            textAlign: 'center',
                            background: '#ED6A09',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'IBM Plex Sans, sans-serif',
                            wordWrap: 'break-word',
                            borderRadius: 15, 
                            border: 'none'
                            }}
                        >
                            Kirim Ulasan
                        </button>
            </div>
        </div>
    );
}

export default Homepage;
