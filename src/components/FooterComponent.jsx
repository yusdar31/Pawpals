import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <footer className="d-flex flex-column align-items-center" style={{ backgroundColor: '#E38B54', padding: '40px 0' }}> {/* Tambahkan background dan padding */}
        <Container>
            <Row className="justify-content-between"> {/* Gunakan justify-content-between untuk meratakan kolom */}
            <Col xs={12} md={3} lg={2}> 
            <img
                src="../public/PawpalsLogo.png"
                alt="PawPals Logo"
                style={{ width: '160px', 
                        height: 'auto',
                        filter: 'drop-shadow(0px 4px 40px #ffff)',
                    }} 
                />
            </Col>

            <Col xs={12} md={4} lg={3} className="text-center d-flex flex-column align-items-center">
                <h6 style={{color: 'white'}}>Download PawPals Mobile</h6>
                <img style={{ width: '120px', height: 'auto' }} src="../public/BarcodeFooter.png" alt="Barcode" />
            </Col>

            <Col xs={12} md={3} lg={2} className="d-flex flex-column">
                <NavLink to="/" style={linkStyle}>Beranda</NavLink>
                <NavLink to="/artikel" style={linkStyle}>Artikel</NavLink>
                <NavLink to="/komunitas" style={linkStyle}>Komunitas</NavLink>
                <NavLink to="/kontak" style={linkStyle}>Kontak</NavLink>
            </Col>

            <Col xs={10} md={4} lg={3}>
                <div style={contactStyle}>
                    <div>Kontak Kami</div>
                <div>
                    (+62) 889766789834
                </div>
                    <div>pawpals@gmail.com</div>
                </div>
            </Col>
            </Row>
        </Container>
        </footer>
    );
};

const linkStyle = {
    color: 'White', 
    fontSize: 28, 
    fontFamily: 'IBM Plex Sans, sans-serif', 
    fontWeight: '500', 
    wordWrap: 'break-word',
    marginBottom: '2px' // Tambahkan margin bawah
};

const contactStyle = {
    color: 'White', 
    fontSize: 24, 
    fontFamily: 'IBM Plex Sans, sans-serif', 
    fontWeight: '500', 
    wordWrap: 'break-word'
};

export default FooterComponent;
