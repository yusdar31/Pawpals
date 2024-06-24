import React from 'react';
import { Container } from 'react-bootstrap';

function KontakPage() {
    const styles = {
        bgCustom: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '20px',
        border: '1px solid #000000',
        },
        lead: {
        fontFamily: "'IBM Plex Sans', sans-serif",
        },
        main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '50px',
        },
        container: {
        maxWidth: '960px',
        margin: '20px auto',
        },
        formControl: {
        marginBottom: '15px',
        backgroundColor: '#EAEBF6',
        },
    };

    return (
        <div style={styles.main}>
        <div className="col-md-6" style={styles.bgCustom}>
            <Container style={styles.container} className="mb-3">
            <h1>Kontak</h1>
            <p style={styles.lead}>
                Pemilik Hewan Peliharaan yang terhormat, terima kasih telah memilih
                kami. Saat ini kami mengalami jumlah kontak yang tinggi sehingga waktu
                tunggu mungkin lebih lama dari biasanya. Kesehatan dan kesejahteraan
                hewan peliharaan adalah prioritas tertinggi kami dan kami berharap
                dapat kabar dari Anda.
            </p>
            </Container>
            <hr />

            <Container style={styles.container} className="mt-5">
            <h2>Informasi Kontak</h2>
            <form>
                <div className="row form-row">
                <div className="col">
                    <input type="text" className="form-control" style={styles.formControl} placeholder="Nama Depan" />
                </div>
                <div className="col">
                    <input type="password" className="form-control" style={styles.formControl} placeholder="Nama Belakang" />
                </div>
                </div>
                <div className="row form-row">
                <div className="col">
                    <input type="text" className="form-control" style={styles.formControl} placeholder="Email" name="Email" />
                </div>
                </div>
                <div className="row form-row">
                <div className="col">
                    <input type="text" className="form-control" style={styles.formControl} placeholder="Alamat Lengkap" />
                </div>
                </div>
                <div className="row form-row">
                <div className="col">
                    <input type="text" className="form-control" style={styles.formControl} placeholder="Judul" />
                </div>
                </div>
                <div className="row form-row">
                <div className="col">
                    <textarea className="form-control" style={styles.formControl} rows="5" placeholder="Komentar" name="text"></textarea>
                </div>
                </div>
                <div className="row form-row">
                <div className="col-md-6">
                    <label htmlFor="gambarInput" className="form-label">Pilih Gambar</label>
                    <input type="file" className="form-control" id="gambarInput" />
                </div>
                </div>
                <div className="row form-check">
                <div className="col">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck1" required />
                    <label className="form-check-label" htmlFor="invalidCheck1">
                        Kirim Lewat Pembaruan Email
                    </label>
                    </div>
                </div>
                </div>
                <div className="row form-check">
                <div className="col">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                        Kirim Saya Pesan Teks
                    </label>
                    </div>
                </div>
                </div>
                <div className="row form-btn">
                <div className="col">
                    <button type="button" className="btn btn-danger"
                    style={{ 
                        padding: '5px 35px',
                        margin: '10px 0px',
                        background: '#ED6A09', 
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'flex-start', 
                        alignItems: 'center',
                        gap: '14px',
                        border: 'none',
                    }}>
                        Kirim</button>
                </div>
                </div>
            </form>
            </Container>
        </div>
        </div>
    );
}

export default KontakPage;
