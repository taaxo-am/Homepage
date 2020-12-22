import React from 'react';
import img1 from './f-img1.png'
import img2 from './f-img2.png'
import img3 from './f-img3.png'
import './footer.css'

const Footer = () => {
    return (
        <footer className='row border-top border-secondary pt-3'>
            <h2 className='col-12 text-center text-dark mt-4 fw-bold'>NAGU SAABSAN</h2>
            <div className='col-12 d-flex justify-content-center mt-3 about'>
                <small className='text-center'>Ganacsiga Online-ka ah ayaa isbeddel ku keenaya dhammaan sida looga adeegto
                    caalamka, Hadaba waxa dalkeena inooga hirgalisay Muraadso inaad kusoo
                    dalban kartid online alaabta aad u baahantay, Maxaad u daydayi alaabta aad
                    doonaysid adigoo kolba dukaan galaya adigoo raadinaya taleefankii ugu
                    dambeeyay adigoo ku heli kara hal taabasho website muraadso? maha mobilada
                    oo kaliya. Muraadso wuxuu ku yaalaa wax kasta oo aad suurtogal u maleyn
                    karto, laga bilaabo elektarooniga noocyadii u danbeeyay ee imika socda sida
                    laptops, tablets, taleefannada casriga ah, iyo qalabka moobiilka illaa, TV-yada,
                    AC-yada, casiirka miiraha miiraha iyo jikada kale ee waqtiga ilaashada iyo
                    qalabka yaryar; ilaa alaabta caruurtu ku ciyaarto, waadna ku kalsoonaan kartaa
                    inaad ka wada hesho halkan. Kuwa idinka mid ah ee leh saacado shaqo oo aan
                    hagaagsaneyn, Muraadso ayaa ah kan kuugu fiican. Ka adeego habeenkii ama
                    subaxdii. waxa intaa ku sii dheer, qiimo aad u macquula oo aan la diidi karin.
                    Waxanan hubnaa inaad naga heli doontid adoo adeeganaya wax ka badan wixii
                    aad maskaxda ku haysay</small>
            </div>

            <div className='col-12 bg-red-darken row row-cols-3 justify-content-around text-center p-2 mt-5 process'>
                <div className='col d-flex flex-column justify-content-around align-items-center text-white'>
                    <img style={{width: '50px'}} src={img1} alt=""/>
                    <small className='fw-bold mt-1'>AAMINAAD</small>
                </div>

                <div className='col d-flex flex-column justify-content-around align-items-center text-white'>
                    <img style={{width: '50px'}} src={img2} alt=""/>
                    <small className='fw-bold mt-1'>QAADISTU WAA BILAASH</small>
                </div>


                <div className='col d-flex flex-column justify-content-around align-items-center text-white'>
                    <img style={{width: '50px'}} src={img3} alt=""/>
                    <small className='fw-bold mt-1'>SI FUDUD NAGULA SOO XIDHIIDH</small>
                </div>
            </div>

            <div className='col-12 row row-cols-2 justify-content-between bg-red text-white py-3 px-3 px-md-5'>
                <div className='col'>
                    <p className='fw-bold'>Muraadso Services</p>
                    <ul className='mt-3 p-0' style={{listStyleType: 'none'}}>
                        <li><small>Adeega U Iibinta</small></li>
                        <li><small>Adeega Ka Iisashada</small></li>
                        <li><small>Adeega Isku Bedelka</small></li>
                        <li><small>Adeega Dalabaadka Dibada</small></li>
                    </ul>
                </div>

                <div className='col text-end'>
                    <p className='fw-bold'>CONTACT US</p>
                    <ul className='mt-3 p-0' style={{listStyleType: 'none'}}>
                        <li><small>524783 | 0633333471</small></li>
                        <li><small>info@muraadso.com</small></li>
                    </ul>
                </div>
            </div>

            <div className='col-12 bg-red text-white text-center pb-3'>
                <p className='fw-bold mt-3 mtd-md-0' style={{fontSize: '20px'}}>Follow Us On</p>
                <div className='d-flex justify-content-center mt-2 p-2'>
                    <i className='fab fa-facebook pe-4' style={{fontSize: '22px'}}/>
                    <i className='fa fa-youtube' style={{fontSize: '22px'}}/>
                    <i className='fa fa-instagram px-4' style={{fontSize: '22px'}}/>
                    <i className='fab fa-tiktok' style={{fontSize: '22px'}}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
