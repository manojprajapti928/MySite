import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import { Button } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Contact");
  };
  return (
    <>
      <div className="body">
        <div className="home">
          <div className="text">
            <h1>MANOJ IT SOLUTION</h1>
            <br />
            <h3>IT Services & Web Development & App Development &</h3>
            <h3> Digital Marketing Services & Consulting</h3>
            <br />
            <button className="contact-now" onClick={handleClick}> Contact Now</button>
          </div>

          <div className="home-img">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/020/371/781/small_2x/call-center-and-customer-care-support-concept-consultant-manager-sitting-at-her-computer-and-talking-with-client-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="choice-us">
            <h4>WHY CHOOOSE US</h4>
            <h2>Boosts Your Business With Us</h2>
            <p>
              Choose us for your IT needs because we offer a winning combination
              of expertise, reliability, and tailored solutions. Our experienced
              team delivers cutting-edge technologies, seamless integration, and
              24/7 support. We prioritize customer satisfaction, ensuring your
              business stays ahead in the digital age. Trust us to drive your
              success.
            </p>
            <button className="home-btn">DISCOVER MORE</button>
          </div>

          <div className="Cards">
            <div className="Card">
              <div className="red"></div>
              <h1>Discover, Explore the Product</h1>
            </div>
            <div className="Card">
              <div className="blue"></div>
              <h1>Art Direction & Brand Strategy</h1>
            </div>
            <div className="Card">
              <div className="green"></div>
              <h1>Product UX, Design & Development</h1>
            </div>
            <div className="Card">
              <div className="purple"></div>
              <h1>Marketing Strategy & SEO Campaigns</h1>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <div className="offer">
          <center>
            <h5>WHY CHOOSE US</h5>
            <h2>What We Offer</h2>
          </center>
        </div>
        <div>
          <div className="offer-bg">
            <div className="offer-card">
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    className="offer-card-logo"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png"
                    alt=""
                  />

                  <h2>Web Development</h2>
                </div>

                <p>
                  Professional website development services tailored to your
                  business needs. Boost your online presence and drive growth
                  with our expert team.
                </p>
              </div>

              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://5.imimg.com/data5/OY/CS/HG/SELLER-41013994/logo-design-service.png"
                    alt=""
                  />
                  <h2>Graphic Design</h2>
                </div>

                <p>
                  Creative and professional graphic design services that bring
                  your vision to life. Stand out with stunning visuals and
                  captivating designs
                </p>
              </div>

              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6470/6470993.png"
                    alt=""
                  />
                  <h2>App Devlopment</h2>
                </div>

                <p>
                  Unlock the potential of your business with our expert App
                  Development Service. Transform ideas into reality. Contact us
                  today!
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-digital-Marketing.png"
                    alt=""
                  />
                  <h2>Digital Marketing</h2>
                </div>

                <p>
                  Boost your online presence and drive results with our expert
                  digital marketing services. Get ahead of the competition
                  today!
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    margin-left={-25}
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/paid-ads-4085873-3379670.png?f=webp"
                    alt=""
                  />
                  <h2>Paid Ads</h2>
                </div>

                <p>
                  Supercharge your business with our unbeatable paid ads
                  service. Maximize ROI, boost conversions, and dominate your
                  market today!
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/673/211/non_2x/checkout-shopping-list-with-price-discounted-ecommerce-3d-icon-illustration-design-png.png"
                    alt=""
                  />
                  <h2>Ecommerce Listing</h2>
                </div>

                <p>
                  Boost your sales with our expert eCommerce listing service.
                  Optimize your product listings for maximum visibility and
                  conversions.
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://png.pngtree.com/png-vector/20221004/ourmid/pngtree-video-and-animation-class-isolated-cartoon-vector-illustration-png-image_6254753.png"
                    alt=""
                  />
                  <h2>Animation Video</h2>
                </div>

                <p>
                  Transform ideas into captivating animations. Our expert team
                  brings stories to life with creativity and precision. Elevate
                  your message today!
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://hello24.ai/wp-content/uploads/2022/12/whatsapp-bulk-marketing.png"
                    alt=""
                  />
                  <h2>WhatsApp Bulk</h2>
                </div>

                <p>
                  Reach more customers with our WhatsApp Bulk Service! Instantly
                  connect, engage, and grow your business. Try it now!
                </p>
              </div>
              <div className="offer-card-1">
                <div className="offer-card-title">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/010/872/229/small/3d-job-applicant-illustration-png.png"
                    alt=""
                  />
                  <h2>Consulting</h2>
                </div>

                <p>
                  Streamline your IT infrastructure. Maximize efficiency and
                  security. Partner with our trusted IT consulting experts.
                  Elevate your business today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
