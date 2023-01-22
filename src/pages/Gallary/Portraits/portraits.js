import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Portraits = () => {
    return (
        <>
            <div className='container-fluid'>
                {/* <div className='row'>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065187/faces/DSC05459_rogkph.jpg' className="img-fluid" alt='img' />

                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065190/faces/IMG_8970_btudig.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065084/faces/IMG_8989_soeuzs.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065112/faces/IMG_9239_hxlir8.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065163/faces/IMG_9812_azagkx.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065134/faces/IMG_9894_qnpsze.jpg' className="img-fluid" alt='img' />

                        <img loading='lazy'src={img11} className="img-fluid" alt='img' />
                        <img loading='lazy'src={img12} className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065116/faces/DSC05457_gntizu.jpg' className="img-fluid" alt='img' />

                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">

                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065091/faces/IMG_0002_jxrrtc.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065090/faces/IMG_0057_qzrmx1.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065141/faces/IMG_8974_2_rgnaku.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065092/faces/IMG_9057_qnrbkw.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065136/faces/IMG_9788_tfnpum.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065116/faces/IMG_9815_tjhkab.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065084/faces/IMG_9888_kw5rev.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065154/faces/IMG_9903_pzkdig.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src={img22} className="img-fluid" alt='img' />
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">

                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065161/faces/IMG_0003_uciote.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065185/faces/IMG_0073_we5ij9.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065179/faces/IMG_8974_w0yhuq.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065091/faces/IMG_9092_z1m7fv.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src={img30} className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065179/faces/IMG_9817_nzgynl.jpg' className="img-fluid" alt='img' />

                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065112/faces/IMG_9891_vlfkwf.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src='https://res.cloudinary.com/dafvzitjy/image/upload/v1669065182/faces/IMG_9924_uwqphz.jpg' className="img-fluid" alt='img' />
                        <img loading='lazy'src={img36} className="img-fluid" alt='img' />


                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1uVBUrj6tTKWdiXG5fGgpHqCghzjtiY4i' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1YOYFTsDSRZ8gbDeWtJIQ44AiuTO8QJVD' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1CLi1acuEEhFPC5O3v0so9HJIm5aZmYF0' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1jGP7LdmsrwJi5uumNvrafjZP5tV7LPU8' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1CBoMT65S-A056cMM1jYJyRhgpE40Edom' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1YiUCSnhVwQgJn1rZcVwkarfeCN1tysCc' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1gpCzJggC6PtkYroPxqTCcN8_seuc78xY' alt='portraits' width='100%' style={{ marginTop: '35px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1AP7ujvEp0emnFOiHtLLmlxF8hEqsTjzV' alt='portraits' width='100%' style={{ marginTop: '36px' }} />

                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1ztWpdGckM0e21Zu8dCJfIJKxAnUbMlb1' alt='portraits' width='100%' style={{ marginTop: '28px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1dxTKrK8Rzg2pcOWXLJumkDmEnuUAaaze' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1YJ51wwSjjH8Jab11MyKtzP1daQVdxDmr' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=16wDvNGjbz0ZMIryuC9_FnSMLs3jrqDmw' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1YGjIhIGeKLbt3KM7r2lblLsw5hnn7MKC' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1i5zVZXbBmlOek9ZlFOVaOFc3jMiNZbnt' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1Tq3yTRH8deRYOc_OxcFclqVLQmpL5Ibf' alt='portraits' width='100%' style={{ marginTop: '30px' }} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1kZUgHYrbH3Ul3xnt4vvUnC1WvPX6k2IG' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1e3LkLYxMNAYbHjsu_rD7xYAucmR4AxrK' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1MaOtJwCsyk9T4lQ-VpEloayCQykMm3VF' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1DqQWSxmjmynsnHB8KAq9Kt_qHJVrBS2s' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1e32ZJKJQMFbLU_FPaRl0YK0ukUJFo-RG' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1rezHLsjDInDP-h_lj6l7rg9s_Ie6sYWW' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1F2ISfRFKoPyKs8kyQ-PUQ-IgOF4HeMBr' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1Kr0WHncACaktmHDGFCPxb45ilhqy3b_h' alt='portraits' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1oQI6HfVQglT0qGFRxa4yf-4EDFsVUFy-' alt='portraits' width='100%' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6  col-md- 6 col-sm-6 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1YDNxq9zjxy_So9zPCKatuUu_-mOeZQPh' alt='portraits' width='100%' />
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1W4BDzFLBb-Y-h4u5SeC6zN_d45_oDQGG' alt='portraits' width='100%' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-8  col-md-8 col-sm-8 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1pFW4XBMt3sNlfKoHYWI-WqQY_wCAMwiS' alt='' width='100%' />
                    </div>
                    <div className='col-lg-4  col-md-4 col-sm-4 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1wEdDLBVWpw5fhDtSlZvJKb7cvL-AA89c' alt='' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1Ga4m1CSPv90zgqhTrtoqnFiZDw6H7rk5' alt='' width='100%' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4  col-md-4 col-sm-4 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1uJt2PUSpWitnAI1Wdby7BWutm3yKTj5X' alt='' width='100%' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1KYOBN4EBGSZ9PyTuOoHIkH2eXdW4W-oZ' alt='' width='100%' />
                    </div>
                    <div className='col-lg-8  col-md-8 col-sm-8 col-xs-6'>
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1oSiHeKRhDtDU9eIhNODX0TJLqw3BCHS6' alt='' width='100%' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portraits