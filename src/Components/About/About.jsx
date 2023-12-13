import React from 'react'
import aboutImg from '../../Assets/img/about.jpg'
// import aboutBgImg from '../../Assets/img/about-bg.png'

const About = () => {
  return (

      <>
      <section id="about" className="about mt-5">
      <div className="container">

      <div className="section-header">
          <span>// Our Services</span>
          <h2>// Our Services</h2>
        </div>

        <div className="row g-4 g-lg-5" >

          <div className="col-lg-5">
            <div className="about-img">
              <img src={aboutImg} className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="pt-0 pt-lg-5">Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>

            {/* <!-- Tabs --> */}
            <ul className="nav nav-pills mb-3">
              <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">Saepe fuga</a></li>
              <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Voluptates</a></li>
              <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Corrupti</a></li>
            </ul>
            {/* <!-- End Tabs --> */}

            {/* <!-- Tab Content --> */}
            <div className="tab-content">

              <div className="tab-pane fade show active" id="tab1">

                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                </div>
                <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>

              </div>
              {/* <!-- End Tab 1 Content --> */}

              <div className="tab-pane fade show" id="tab2">

                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                </div>
                <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>

              </div>
              {/* <!-- End Tab 2 Content --> */}

              <div className="tab-pane fade show" id="tab3">

                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                </div>
                <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>

              </div>
              {/* <!-- End Tab 3 Content --> */}

            </div>

          </div>

        </div>

      </div>
    </section>

      </>
  )
}

export default About