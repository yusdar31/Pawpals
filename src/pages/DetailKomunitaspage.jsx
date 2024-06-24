import React from 'react'
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import komunitasCard from '../assets/img/komunitas/komunitasCard.png';
import LogoPawpals from '../assets/img/Pawpalsmobile.png'
import { FaCommentDots , FaEye } from "react-icons/fa";

function DetailKomunitasPage() {
    return (
        <Container className='detailkomunitas py-5' >
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
                    <Card className="Card-form" style={{
                        width: '50rem',
                        padding: '20px', // Increased padding for spacing
                        margin: '20px 0',
                        background: '#ffffff',
                        borderRadius: '15px',
                        border: '1px solid #000000',
                    }}>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src={komunitasCard} alt="Komunitas Card" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                <Form.Control as="textarea" rows={3} placeholder="Apa yang ingin kamu bagikan?" style={{ width: '35rem', border: '1px solid black', resize: 'none' }} />
                            </div>
                                <Button variant="warning" style={{ color:'#ffffff',background: '#F27A09', borderRadius: '15px' }}>
                                    Upload
                                </Button>
                        </Card.Body>
                    </Card>
                </Col>
            <Col>
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

export default DetailKomunitasPage