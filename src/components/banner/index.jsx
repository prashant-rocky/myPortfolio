import '../../assets/style.css'
import banner from '../../assets/banner.jpeg'

const Banner = () => {
    return (
        <>
            <section className="banner position-relative" style={{ backgroundImage: `url(${banner})` }}>
                <div className="container position-relative">
                    <div className='row justify-content-center vh-100 align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='display-1 text-capitalize text-white ff fw-bolder'>I am prashant kumar.</h2>
                            <p className='text-capitalize fs-1 text-white ff fw-semibold'>A web developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;