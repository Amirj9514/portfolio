import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Dagree = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1MOzsy0RciXy9Gy4FmTTgrV5k_RG0vdDM' className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1VFrIVe1wJpwlIPuYCYjMdfngo-lqll7z' className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1kGafZzkPo6mx1xCQE2ikU7XqJMVheBA8' className="img-fluid" alt='img' />

                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1lXi94J1xO5t4ZT28pnp06MbUSJvn86Vv' className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=112w9kVOOU_vsPQD4DysFQmrxZ_cANagg' style={{ marginTop: '25px' }} className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1wBKC2pfXRxLizk02SIxxWBM2ncIJ8N8F' style={{ marginTop: '27px' }} className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1sDhZ5ihkA2gUNOjeeT6Va96p1lOgsd-Q' style={{ marginTop: '25px' }} className="img-fluid" alt='img' />
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1mnkEGgMaC1EVuwB-SqKj-3ZRJuJdzSPw' className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1VFrIVe1wJpwlIPuYCYjMdfngo-lqll7z' className="img-fluid" alt='img' />
                        <LazyLoadImage src='https://drive.google.com/uc?export=view&id=1uB_V90KvBMgapboNfZnr-tL1i_ZQaKo2' className="img-fluid" alt='img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dagree