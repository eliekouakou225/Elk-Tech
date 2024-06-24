import {React, useEffect} from 'react'

const Stackedcard = () => {
    useEffect(() => {
    let cards = document.querySelectorAll(".card");
    let stackArea = document.querySelector(".stack-area");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle = angle - 10;
        }
      });
    }
    rotateCards();


    window.addEventListener("scroll", () => {
      let proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        let n = cards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        rotateCards();
      }
    });
});


  return (
    <div className='stackedcard'>
        <div class="container d-flex align-item-center">
      <div class="stack-area">
        <div class="left">
          {/* <div class="title">Our Features</div> */}
          <div class="sub-title">
          <h2 > <span>Nos</span><span>Services</span></h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            qui quis, facere, cupiditate, doloremque natus ex perspiciatis
            ratione hic corrupti adipisci ea doloribus!
            <br />
            <a className="btn__main" href="{#}">
                            <span className="top-key"></span>
                            <span className="text">EN SAVOIR PLUS</span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </a>
          </div>
        </div>
        <div class="right">
          <div class="cards">
            <div class="card">
              <div class="sub">Simplified</div>
              <div class="content">Complex tasks are now simple</div>
            </div>
            <div class="card">
              <div class="sub">Simplified</div>
              <div class="content">Complex tasks are now simple</div>
            </div><div class="card">
              <div class="sub">Simplified</div>
              <div class="content">Complex tasks are now simple</div>
            </div>
            <div class="card">
              <div class="sub">Boost Productivity</div>
              <div class="content">Perform Tasks in less time</div>
            </div>
            <div class="card">
              <div class="sub">Facilitated learning</div>
              <div class="content">train anyone from anywhere</div>
            </div>
            <div class="card">
              <div class="sub">Support</div>
              <div class="content">Now its 24/7 support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Stackedcard