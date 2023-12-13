import React from 'react'
import student from '../../Assets/img/student.jpg'


const Formation = () => {
  return (

    // <div classNameName='formation p0 mt-5'>
    //   <div classNameName="container">
    //     <div classNameName="row">
    //     <div classNameName='Section__title m-5'>
    //         <h3> Formation</h3>
    //     </div>
    //       <div classNameName="col col-md-6">
    //           <lottie-player
    //                 autoplay
    //                 loop
    //                 mode="normal"
    //                 // src="https://lottie.host/7d5c2098-6709-42c7-9442-c942dd89434c/w7raLHpjvb.json"
    //                 src="https://lottie.host/50df6a9c-5ae8-458a-96ad-5f127ca2dad5/kWiMyot0u6.json"
    //                 style={{ width: '50'}}
    //             ></lottie-player>
    //       </div>
    //       <div classNameName="col col-md-6">
    //             <ul>
    //                 <li>Apprennez simplement chez nous ou dans nos locaux</li>
    //                 <li>Des formations qui s'adapte à votre besoin</li>
    //                 <li>Des formations qui s'adapte à votre besoin</li>
    //                 <li>Des formations qui s'adapte à votre besoin</li>
    //                 <li>Des formations qui s'adapte à votre besoin</li>
    //                 <li>Des formations qui s'adapte à votre besoin</li>
    //             </ul>
    //             <div>
    //    <div classNameName="logos">
    //   <div classNameName="logos-slide">
    //     <img src={logo1} alt='logo'/>
    //     <img src={logo2} alt='logo' />
    //     <img src={logo3} alt='logo' />
    //     <img src={logo4} alt='logo'/>
    //     <img src={logo5} alt='logo' />
    //     <img src={logo6} alt='logo'/>
    //     <img src={logo7} alt='logo' />
    //     <img src={logo1} alt='logo'/>
    //   </div>

    //   <div classNameName="logos-slide">
    //         <img src={logo1} alt='logo'/>
    //         <img src={logo2} alt='logo' />
    //         <img src={logo3} alt='logo'/>
    //         <img src={logo4} alt='logo' />
    //         <img src={logo5} alt='logo'/>
    //         <img src={logo6} alt='logo' />
    //         <img src={logo7} alt='logo' />
    //         <img src={logo1} alt='logo'/>
    //   </div>
    //     </div>
    //    </div>
    //    <div classNameName='m-3'>
    //                 <a classNameName="btn__main" href="{#}">
    //                     <span classNameName="top-key"></span>
    //                     <span classNameName="text">EN SAVOIR PLUS</span>
    //                     <span classNameName="bottom-key-1"></span>
    //                     <span classNameName="bottom-key-2"></span>
    //                 </a>
    //                 </div> 
    //       </div>
    //     </div>
    // </div>
    // <div classNameName="container-fluid">
    //   <div classNameName="formation__motivation"> <p>Il n'est jamais trop trad pour commancé a apprendre.</p> </div>
    // </div>
    // </div>
    // <!-- ======= Call To Action Section ======= -->
    <>
    <section id="cta" className="cta mt-5">
      <div className="section-header">
          <span>// Nos formations</span>
          <h2>// Nos formations</h2>
        </div>
      <div className="container" data-aos="zoom-out">
        <div className="row g-5">

          <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>Alias sunt quas <em>Cupiditate</em> oluptas hic minima</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>

            <a className="main-btn--blue" href="{#}">
                                  <span className="top-key"></span>
                                  <span className="text">EN SAVOIR PLUS</span>
                                  <span className="bottom-key-1"></span>
                                  <span className="bottom-key-2"></span>
                              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
              <img src={student} alt="" className="img-fluid"/>
            </div>
          </div>

        </div>

      </div>
    </section>
  
    
    </>

  )
}

export default Formation