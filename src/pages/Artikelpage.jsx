import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ArtikelKesehatanAnjing1 from "../assets/img/artikel/ArtikelKesehatanAnjing1.png";
import ArtikelKesehatanAnjing2 from "../assets/img/artikel/ArtikelKesehatanAnjing2.png";
import ArtikelKesehatanAnjing3 from "../assets/img/artikel/ArtikelKesehatanAnjing3.png";
import ArtikelKesehatanKucing1 from "../assets/img/artikel/ArtikelKesehatanKucing1.png";
import ArtikelKesehatanKucing2 from "../assets/img/artikel/ArtikelKesehatanKucing2.png";
import ArtikelMerawatAnjing1 from "../assets/img/artikel/ArtikelMerawatAnjing1.png";
import ArtikelMerawatAnjing2 from "../assets/img/artikel/ArtikelMerawatAnjing2.png";
import ArtikelMerawatAnjing3 from "../assets/img/artikel/ArtikelMerawatAnjing3.png";
import ArtikelMerawatKucing1 from "../assets/img/artikel/ArtikelMerawatKucing1.png";
import ArtikelMerawatKucing2 from "../assets/img/artikel/ArtikelMerawatKucing2.png";
import ArtikelMerawatKucing3 from "../assets/img/artikel/ArtikelMerawatKucing3.png";
import ArtikelTerbaru1 from "../assets/img/artikel/ArtikelTerbaru1.png";
import ArtikelTerbaru2 from "../assets/img/artikel/ArtikelTerbaru2.png";
import ArtikelTerbaru3 from "../assets/img/artikel/ArtikelTerbaru3.png";
import ArtikelTerbaru4 from "../assets/img/artikel/ArtikelTerbaru4.png";

function ArtikelPage() {
    const articleSectionStyle = {
        margin: 0,
        padding: '40px 0',
        backgroundColor: '#f9f9f9',
        width: '100%',
        };
        
        const articleCategoryStyle = {
            marginBottom: '80px',
        };
        
        const articleCategoryTitleStyle = {
            marginBottom: '50px',
        };

        const cardContainerStyle = {
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
            };
            
            const cardStyle = {
                display: "block",
                width: "249px",
                height: "485px",
                padding: "17px 21px",
                borderRadius: "15px",
                background: "#FFF",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textDecoration: "none", // Add this to remove default link underline
                color: "inherit",  
            };
            
            const cardImageStyle = {
                width: "100%",
                height: "auto",
                maxHeight: "192px",
                flexShrink: 0,
                borderRadius: "15px",
                marginBottom: "32px",
            };
            
            const cardTitleStyle = {
                fontSize: "20px",
                marginBottom: "20px",
            };
            
            const cardSummaryStyle = {
                fontSize: "16px",
                margin: 0,
            };

        const categories = [
                {
                title: "Artikel Terbaru",
                articles: [
                    { title: "Cara Mengatasi Kucing Sembelit dan Obat Tradisional Yang Aman", img: ArtikelTerbaru4, link: "/artikelsatu", summary: "Sebelum menemukan obat sembelit kucing yang cocok, ada baiknya untuk kita mengenal gejala sembelit pada kucing." },
                    { title: "Cara Merawat Kesehatan Anjing Dewasa", img: ArtikelTerbaru3, link: "/artikelsatu", summary: "Kehamilan dan menyusui bukan hanya menyebabkan banyak perubahan dalam tubuh anjing, tetapi juga perubahan gaya hidupnya." },
                    { title: "Dasar-Dasar Seputar Anak Kucing: Cara Menjaga Kesehatan Anak Kucing", img: ArtikelTerbaru2, link: "/artikelsatu", summary: "Persyaratan untuk menjaga kesehatan anak kucing Anda." },
                    { title: "Sumber Protein Lengkap untuk Anjing", img: ArtikelTerbaru1, link: "/artikelsatu", summary: "Sebagai protein hewani, ayam dapat membantu menjaga struktur otot anjing Anda dan secara alami menyediakan semua asam amino esensial untuk hewan karnivora seperti anjing." },
                ],
                },
                {
                title: "Artikel Merawat Kucing",
                articles: [
                    { title: "4 Tips Memberi Makan Anak Kucing", img: ArtikelMerawatKucing1, link: "/artikelsatu", summary: "Sebagai orang tua hewan peliharaan baru, salah satu hal terpenting yang perlu pahami adalah cara memberi makan anak kucing dengan benar." },
                    { title: "Cara Merawat Kucing untuk Pemula", img: ArtikelMerawatKucing2, link: "#", summary: "Ajak bermain, Kucing suka bermain dan ahli dalam menciptakan permainan mereka sendiri." },
                    { title: "Bagaimana Merawat Kucing Kesayanganmu?", img: ArtikelMerawatKucing3, link: "/artikelsatu", summary: "Merawat kucing dengan benar tidak hanya memberikan manfaat bagi kucing itu sendiri, tetapi juga bagi pemiliknya." },
                    { title: "Panduan Pemberian Makan dan Nutrisi", img: ArtikelMerawatKucing1, link: "#", summary: "Sebagai orang tua hewan peliharaan baru, salah satu hal terpenting yang perlu pahami adalah cara memberi makan anak kucing dengan benar." },
                ],
                },
                {
                title: "Artikel Merawat Anjing",
                articles: [
                    { title: "Cara Menjaga Anjing dari Kutu dan Tungau", img: ArtikelMerawatAnjing1, link: "/artikelsatu", summary: "Anjing adalah sahabat yang membawa kebahagiaan yang besar bagi kita." },
                    { title: "Cara Merawat Kesehatan Anjing Dewasa", img: ArtikelMerawatAnjing2, link: "/artikelsatu", summary: "Kehamilan dan menyusui bukan hanya menyebabkan banyak perubahan dalam tubuh anjing, tetapi juga perubahan gaya hidupnya." },
                    { title: "Menjaga Kesehatan Kulit Anak Anjing", img: ArtikelTerbaru3, link: "/artikelsatu", summary: "Kulit kering bisa menjadi masalah yang sangat menyakitkan bagi anak anjing." },
                    { title: "4 Cara Menjaga Sendi Anjing Tetap Sehat", img: ArtikelMerawatAnjing3, link: "#", summary: "Anjing dilahirkan sebagai hewan yang senang bermain dan aktif, Anda mungkin tidak akan pernah melihat mereka beristirahat untuk waktu yang lama." },
                ],
                },
                {
                title: "Artikel Kesehatan Kucing",
                articles: [
                    { title: "Kekuatan Pengayaan : Menjaga Anak Kucing Anda Tetap Sehat Secara Mental dan Fisik.", img: ArtikelKesehatanKucing1, link: "/artikelsatu", summary: "Sebagai orang tua anak kucing, Anda pasti menginginkan yang terbaik untuk teman kucing ." },
                    { title: "Dasar-Dasar Seputar Anak Kucing", img: ArtikelTerbaru4, link: "/artikelsatu", summary: "Persyaratan untuk menjaga kesehatan anak kucing Anda." },
                    { title: "Cara Mengatasi Kucing Sembelit", img: ArtikelTerbaru2, link: "/artikelsatu", summary: "Sebelum menemukan obat sembelit kucing yang cocok, ada baiknya untuk kita mengenal gejala sembelit pada kucing." },
                    { title: "Apakah Anak Kucing Mengalami Hairball?", img: ArtikelKesehatanKucing2, link: "/artikelsatu", summary: "Sebagian besar kucing menghabiskan waktu yang lama untuk melakukan grooming terhadap bulu mereka." },
                ],
                },
                {
                title: "Artikel Kesehatan Anjing",
                articles: [
                    { title: "Nutrisi untuk Anjing", img: ArtikelTerbaru3, link: "/artikelsatu", summary: "Seperti kita manusia, anjing juga membutuhkan protein untuk menjaga tubuh mereka." },
                    { title: "Bagaimana Makanan Merawat Gigi Anjing", img: ArtikelKesehatanAnjing1, link: "/artikelsatu", summary: "Saat gigi mengunyah makanan, kotoran menumpuk di permukaan gigi dan menarik bakteri." },
                    { title: "Mengapa Anjing Membutuhkan Antioksidan", img: ArtikelKesehatanAnjing2, link: "/artikelsatu", summary: "Antioksidan adalah nutrisi yang terdapat secara alami dalam tubuh dan tanaman seperti buah-buahan dan sayur-sayuranan." },
                    { title: "Cara Merawat Kesehatan Anjing Dewasa", img: ArtikelKesehatanAnjing3, link: "/artikelsatu", summary: "Kehamilan dan menyusui bukan hanya menyebabkan banyak perubahan dalam tubuh anjing, tetapi juga perubahan gaya hidupnya." },
                ],
                },
            ];
    
return (
        <div>
        <header style={{ width: "100%", height: "620px", backgroundColor: "#E38B54" }}>
            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
            <Row>
                <Col>
                <div className="header-content" style={{ paddingTop: "110.5px" }}> {/* Added style here */}
                    <h3>
                    <span style={{ 
                        fontSize: "42px", 
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        marginBottom: "30px",
                        color:"#ffffff"
                    }}>
                        Cara merawat anjing agar tetap sehat
                    </span>
                    </h3>
                    <p style={{ 
                        fontSize: "28px", 
                        fontStyle: "normal", 
                        fontWeight: 400,
                        marginBottom: "50px",
                        color:"#ffffff"
                    }}>
                    Berikan Makan yang Bernutrisi. Cara merawat anak anjing hingga
                    dewasa adalah dengan memberikan makanan yang tepat. Tujuannya
                    agar perkembangan hewan dapat sesuai dengan usianya.
                    </p>
                    <button style={{ 
                        borderRadius: "15px",
                        background: "#D05440",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                    }}>Baca selengkapnya</button>
                </div>
                </Col>
                <Col>
                <img src="../public/komunitasHomepage.png" alt="Hero-img" className="header-image" />
                </Col>
            </Row>
            </div>
        </header>
        <div className="articles-section" style={articleSectionStyle}>
        <Container fluid style={{ paddingLeft: '80px' }}>
            {categories.map((category, index) => (
                <div className="article-category" key={index} style={articleCategoryStyle}>
                <h2 style={articleCategoryTitleStyle}>{category.title}</h2>
                <Row>
                    {category.articles.map((article, idx) => (
                    <Col md={3} key={idx}>
                        <a href={article.link} className="card" style={cardStyle}> {/* Apply the style to the <a> tag */}
                        <img src={article.img} alt={article.title} style={cardImageStyle} />
                        <h3 style={cardTitleStyle}>{article.title}</h3>
                        <p style={cardSummaryStyle}>{article.summary}</p>
                        </a>
                    </Col>
                    ))}
                </Row>
                </div>
            ))}
            </Container>
        </div>
        </div>
    );
}

export default ArtikelPage;
