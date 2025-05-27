import React from "react";
import banner from "../../assets/b9_banner.png";
import chat from "../../assets/b9_chat.png";
import img1 from "../../assets/b9_img1.png";
import img2 from "../../assets/b9_img2.png";
import img3 from "../../assets/b9_img3.png";
import img4 from "../../assets/b9_img4.png";
import logo from "../../assets/b9_logo.png";
import turn from "../../assets/b9_turn.png";
import avt from "../../assets/b9_avt.png";
import left from "../../assets/b9_left.png";
import right from "../../assets/b9_right.png";
import "./b9.scss";
import { useNavigate } from "react-router-dom";

const Btvn9 = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <div className="btvn9">
      <div className="b9Header">
        <img src={logo} alt="" className="b9Header_logo" />
        <div className="b9Header_btn">
          {localStorage.getItem("token") ? (
            <>
              <button className="b9Header_btn_signIn">Profile</button>
              <button className="b9Header_btn_signIn" onClick={() => logOut()}>Log out</button>
            </>
          ) : (
            <button
              className="b9Header_btn_signIn"
              onClick={() => navigate("/B9Login")}
            >
              Log in
            </button>
          )}
        </div>
      </div>

      <div className="b9Banner">
        <div className="b9Banner_content">
          <h1 className="b9Banner_content-h1">Save your data storage here.</h1>
          <p className="b9Banner_content-p">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="b9Banner_content-btn">Learn more</button>
        </div>
        <div className="b9Banner_bg">
          <img src={banner} alt="" className="b9Banner_bg-img" />
        </div>
      </div>

      <div className="b9Features">
        <h2 className="b9Features_title">Features</h2>
        <p className="b9Features_des">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
        <div className="b9Features_items1">
          <div className="b9Features_items1_item1">
            <img src={img1} alt="" className="b9Features_items1_item1-img" />
            <div className="b9Features_items1_item1_content">
              <h3 className="b9Features_items1_item1_content-h3">
                Search Data
              </h3>
              <p className="b9Features_items1_item1_content-p">
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <div className="b9Features_items1_item1_content_more">
                <p className="b9Features_items1_item1_content_more-p">
                  Learn more
                </p>
                <img
                  src={turn}
                  className="b9Features_items1_item1_content_more-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="b9Features_items1_item1">
            <img src={img2} alt="" className="b9Features_items1_item1-img" />
            <div className="b9Features_items1_item1_content">
              <h3 className="b9Features_items1_item1_content-h3">
                24 Hours Access
              </h3>
              <p className="b9Features_items1_item1_content-p">
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
              <div className="b9Features_items1_item1_content_more">
                <p className="b9Features_items1_item1_content_more-p">
                  Learn more
                </p>
                <img
                  src={turn}
                  className="b9Features_items1_item1_content_more-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="b9Features_items1">
          <div className="b9Features_items1_item1">
            <img src={img3} alt="" className="b9Features_items1_item1-img" />
            <div className="b9Features_items1_item1_content">
              <h3 className="b9Features_items1_item1_content-h3">Print Out</h3>
              <p className="b9Features_items1_item1_content-p">
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
              <div className="b9Features_items1_item1_content_more">
                <p className="b9Features_items1_item1_content_more-p">
                  Learn more
                </p>
                <img
                  src={turn}
                  className="b9Features_items1_item1_content_more-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="b9Features_items1_item1">
            <img src={img4} alt="" className="b9Features_items1_item1-img" />
            <div className="b9Features_items1_item1_content">
              <h3 className="b9Features_items1_item1_content-h3">
                Security Code
              </h3>
              <p className="b9Features_items1_item1_content-p">
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
              <div className="b9Features_items1_item1_content_more">
                <p className="b9Features_items1_item1_content_more-p">
                  Learn more
                </p>
                <img
                  src={turn}
                  className="b9Features_items1_item1_content_more-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b9Testimonials">
        <h2 className="b9Testimonials_title">Testimonials</h2>
        <div className="b9Testimonials_content">
          <img src={left} alt="" className="b9Testimonials_content_left" />
          <div className="b9Testimonials_content_main">
            <img src={avt} alt="" className="b9Testimonials_content_main-img" />
            <div>
              <h5 className="b9Testimonials_content_main-h5">John Fang</h5>
              <a href="#" className="b9Testimonials_content_main-a">
                wordfaang.com
              </a>
              <p className="b9Testimonials_content_main-p">
                Suspendisse ultrices at diam lectus nullam.
                <br /> Nisl, sagittis viverra enim erat tortor ultricies
                <br /> massa turpis. Arcu pulvinar aenean nam laoreet
                <br /> nulla.
              </p>
            </div>
          </div>
          <img src={right} alt="" className="b9Testimonials_content_right" />
        </div>
        <div className="b9Testimonials_nav">
          <p className="b9Testimonials_nav_item b9Testimonials_nav_spe"></p>
          <p className="b9Testimonials_nav_item"></p>
          <p className="b9Testimonials_nav_item"></p>
          <p className="b9Testimonials_nav_item"></p>
        </div>
      </div>

      <div className="b9Footer">
        <div className="b9Footer_main">
          <div className="b9Footer_main_col1">
            <div className="b9Footer_main_col1_brand">
              <img src={logo} alt="" className="b9Footer_main_col1_brand-img" />
              <h5 className="b9Footer_main_col1_brand-h5">DataWarehouse</h5>
            </div>
            <p className="b9Footer_main_col1-p1">
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </p>
            <p className="b9Footer_main_col1-p2">
              info@warehouse.project <br />
              1-232-3434 (Main)
            </p>
          </div>

          <div className="b9Footer_main_col2">
            <h5 className="b9Footer_main_col2-h5">About</h5>
            <p className="b9Footer_main_col2-p">Profile</p>
            <p className="b9Footer_main_col2-p">Features</p>
            <p className="b9Footer_main_col2-p">Careers</p>
            <p className="b9Footer_main_col2-p">DW News</p>
          </div>

          <div className="b9Footer_main_col3">
            <h5 className="b9Footer_main_col2-h5">Help</h5>
            <p className="b9Footer_main_col2-p">Support</p>
            <p className="b9Footer_main_col2-p">Sign up</p>
            <p className="b9Footer_main_col2-p">Guide</p>
            <p className="b9Footer_main_col2-p">Reports</p>
            <p className="b9Footer_main_col2-p">Q&A</p>
          </div>

          <div className="b9Footer_main_col4">
            <h5 className="b9Footer_main_col4-h5">Social Media</h5>
            <div className="b9Footer_main_col4-group">
              <p className="b9Footer_main_col4-p"></p>
              <p className="b9Footer_main_col4-p"></p>
              <p className="b9Footer_main_col4-p"></p>
            </div>
          </div>
        </div>

        <div className="b9Footer_bonus">
          <p className="b9Footer_bonus-p">
            © Datawarehouse™, 2020. All rights reserved.
            <br />
            Company Registration Number: 21479524.
          </p>
          <img src={chat} alt="" className="b9Footer_bonus-img" />
        </div>
      </div>
    </div>
  );
};

export default Btvn9;
