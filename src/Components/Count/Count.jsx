import React from 'react'
import Gotop from '../Gotop/Gotop'

const Count = () => {
  return (
    <section id="counts" ClassName="counts">
      <div ClassName="container" data-aos="fade-up">

        <div ClassName="row gy-4">
          <div ClassName="col-lg-3 col-md-6">
            <div ClassName="count-box">
              <i ClassName="bi bi-emoji-smile"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" ClassName="purecounter"></span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div ClassName="col-lg-3 col-md-6">
            <div ClassName="count-box">
              <i ClassName="bi bi-journal-richtext" style={{ color: "#ee6c20" }}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" ClassName="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div ClassName="col-lg-3 col-md-6">
            <div ClassName="count-box">
              <i ClassName="bi bi-headset" style={{ color: "#15be56" }}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" ClassName="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div ClassName="col-lg-3 col-md-6">
            <div ClassName="count-box">
              <i ClassName="bi bi-people" style={{ color: "#bb0852" }}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" ClassName="purecounter"></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </section>
  )
}

export default Count