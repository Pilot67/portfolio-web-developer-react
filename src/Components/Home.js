import React from "react";

function Home() {
  return (
    // <!-- <section class="cardBodyWideProfile" id="stuarts"> -->
    <div className="container">
      <section className="cardBodyWide aside-left" id="stuarts">
        <aside className="cardText cardTextAbout">
          <div>
            <h1 className="text-center">Portfolio</h1>
            <h3 className="text-center">Stuart Simmons</h3>
            <br />
            <h3 className="text-center">Complete Website Development</h3>
            <p>
              With a myriad of experience in the industrial sector, my strengths
              lie in creating accessible, easy to use and functional
              applications whilst incorporating the latest developments in
              back-end programming.
              <br />
              Coming from a background in mechanical engineering, factory
              automation and aviation I have developed the maturity and skills
              to understand your exact requirements whilst listening and working
              closely with you to provide easy web-space deployment.
            </p>
          </div>
        </aside>

        {/* <!-- Hero image --> */}
        <div className="cardImage">
          <img
            src={require("./images/heroImage-1024.png")}
            alt="Stuart Simmons"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
