import React from 'react'
import { Container, Col, Row, Card, Form } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogoPawpals from '../assets/img/Pawpalsmobile.png'
import { komunitas } from "../data/index.js"
import { FaCommentDots , FaEye } from "react-icons/fa";

function Komunitaspage() {
    return (
        <Container className='komunitas py-5' >
            <Row>
            <Col>
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                style={{
                    border: '1px solid black',
                    borderRadius: '15px',
                }} 
                />
                {komunitas.map((data) => (
                    <Card 
                    className="Card-Komunitas" 
                    style={{ 
                        width: '50rem', 
                        padding: '5px 10px',
                        margin: '20px 0px 0px 0px',
                        background: '#ffffff',
                        borderRadius: '15px',
                        border: '1px solid black',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#F3D2B5'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = '#ffffff'; }} 
                    key={data.id}
                    >
                    <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
                        <img 
                        src={data.image} 
                        style={{
                            width: '123px', 
                            height: '118px', 
                            borderRadius: '15px' 
                        }} 
                        alt="Komunitas Card"
                        />
                        <div style={{ flexDirection: 'column', gap: '10px' }}>
                        <div style={{ color: 'black', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            {data.category} {/* Menampilkan kategori */}
                        </div>
                        <Card.Title className='kategorikomunitas' style={{ color: '#E38B54', fontSize: '28px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            {data.desc} {/* Menampilkan deskripsi */}
                        </Card.Title>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'black', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            {data.member} {/* Menampilkan jumlah anggota */}
                            </div>
                            <div style={{ padding: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {/* ... (ikon komentar tidak berubah) ... */}
                            <div style={{ color: 'black', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                                {data.comment} {/* Menampilkan jumlah komentar */}
                            </div>
                            </div>
                        </div>
                        </div> 
                    </Card.Body>
                    </Card>
                ))}
                </Col>
            <Col>
                <Card className="Card-Information1" style={{ 
                    width: '18rem', // Pertahankan lebar yang sama
                    background: '#E38B54',
                    borderRadius: '15px',
                    }}>
                    <Card.Body style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '10px',
                    }}>
                        <div style={{ color: 'white', fontSize: '28px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            Forum Chat
                        </div>
                            <div style={{ display: 'flex', gap: '29px' }}>
                                <div style={{ color: 'white', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                                    <span style={{ fontWeight: '600' }}>1.2</span> <span style={{ fontWeight: '400' }}>posts</span>
                                </div>
                                <div style={{ color: 'white', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                                    <span style={{ fontWeight: '600' }}>60</span> <span style={{ fontWeight: '400' }}>members</span>
                                </div>
                            </div>
                        <Card.Text style={{ width: '250px', color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '400' }}>
                        Komunitas forum yang didedikasikan untuk pemilik dan penggemar ras kucing. Bergabunglah dalam diskusi tentang ras, pelatihan, anak kucing, ulasan makanan, penyelamatan, dan banyak lagi.
                        </Card.Text>
                        <Link to="/detailkomunitaspage"style={{textDecoration: 'none',}}>
                        <button style={{ 
                            padding: '5px 60px', 
                            background: '#ED6A09', 
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'flex-start', 
                            alignItems: 'center',
                            gap: '14px',
                            border: 'none',
                        }}>
                            <div style={{ color: 'white', fontSize: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                                Join Community
                            </div>
                        </button>
                        </Link>
                    </Card.Body>
                    </Card>
                    <Card className="Card-Information2" 
                        style={{ 
                            width: '18rem', 
                            margin: '20px 0', 
                            background: '#E38B54',
                            borderRadius: '15px', 
                            overflow: 'hidden',
                        }}
                        >
                        <Card.Body style={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            gap: '12px', // Gap antara elemen utama
                            padding: 0, // Menghapus padding default Card.Body
                        }}>
                            <div style={{ 
                            padding: '20px', // Padding internal bagian atas
                            color: 'white', 
                            fontSize: '28px', 
                            fontFamily: 'IBM Plex Sans, sans-serif', 
                            fontWeight: '600', 
                            }}>
                            Our Top Forum
                            </div>
                            
                            <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '9px', // Gap antara sub-bagian
                            padding: '0 20px 20px 20px', // Padding internal bagian bawah
                            }}>
                            <div className="TitleForum" style={{ color: 'white', fontSize: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                                Health and Nutrition
                            </div> 
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> 
                                    <div style={{ width: '13px', height: '12px', position: 'relative' }}>
                                        <FaCommentDots style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }}/>
                                    </div>
                                        <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>100K</div>
                                    <div style={{ width: '16px', height: '14px', position: 'relative' }}>
                                        <FaEye style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }} />
                                    </div>
                                    <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>110K</div>
                                </div>
                            <div className="TitleForum" style={{ color: 'white', fontSize: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                                Cat and Dog
                            </div> 
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> 
                                    <div style={{ width: '13px', height: '12px', position: 'relative' }}>
                                        <FaCommentDots style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }}/>
                                    </div>
                                        <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>100K</div>
                                    <div style={{ width: '16px', height: '14px', position: 'relative' }}>
                                        <FaEye style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }} />
                                    </div>
                                    <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>110K</div>
                                </div>
                            <div className="TitleForum" style={{ color: 'white', fontSize: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                                Petcare and Shelter
                            </div> 
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> 
                                    <div style={{ width: '13px', height: '12px', position: 'relative' }}>
                                        <FaCommentDots style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }}/>
                                    </div>
                                        <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>100K</div>
                                    <div style={{ width: '16px', height: '14px', position: 'relative' }}>
                                        <FaEye style={{width: '15px', height: '15px', position: 'absolute', color: 'white' }} />
                                    </div>
                                    <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>110K</div>
                                </div>
                            </div>
                        </Card.Body>
                        </Card>
                        <Card 
                            className="Card-Information3" 
                            style={{ 
                                width: '18rem', 
                                margin: '20px 0', 
                                background: '#E38B54',
                                borderRadius: '15px', 
                                overflow: 'hidden',
                            }}
                            >
                            <Card.Body style={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', // Pusatkan item secara horizontal
                                justifyContent: 'center', // Pusatkan item secara vertikal
                                gap: '20px', // Tambahkan jarak antara elemen
                                padding: '30px', // Padding internal yang lebih besar
                            }}>

                                <div style={{ 
                                color: 'white', 
                                fontSize: '28px', 
                                fontFamily: 'IBM Plex Sans, sans-serif', 
                                fontWeight: '600', 
                                textAlign: 'center' // Pusatkan teks
                                }}>
                                Download Our Mobile App
                                </div>

                                <img 
                                src={LogoPawpals} 
                                alt="Logo Pawpals" 
                                style={{ width: 'auto', height: 'auto', filter: 'drop-shadow(0px 4px 40px #ffffff)'}} 
                                />

                                <button style={{ 
                                padding: '5px 30px', 
                                background: '#ED6A09', 
                                borderRadius: '15px',
                                border: 'none',
                                color: 'white',
                                fontSize: '16px',
                                fontFamily: 'IBM Plex Sans, sans-serif',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                }}>
                                    Download Here
                                </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Komunitaspage