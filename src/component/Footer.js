import React from "react";
import Footerlogo from "../assets/img/footerlog.svg";

function Footer() {
  return (
    <footer className="bg-[#f5f5f5] -mt-24">
      <div class="xl:mx-24 px-4">
        <div class="container relative ">
          <div class="flex flex-wrap pt-9 2xl:pt-36 pb-5 2xl:pb-24">
            <div class="w-1/3 lg:w-2/12 px-2 lg:p-0">
              <div class="pb-4 2xl:pb-12">
                <p class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-bold leading-normal">
                  Company
                </p>
              </div>
              <div>
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal  leading-normal"
                    href="/"
                  >
                    Home
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                    href="/about-us/"
                  >
                    About
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                    href="/blog/"
                  >
                    Blog
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
              </div>
            </div>
            <div class="w-1/3 lg:w-3/12 px-2 lg:p-0">
              <div class="pb-4 2xl:pb-12">
                <p class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-bold leading-normal">
                  Quick Link
                </p>
              </div>
              <div >
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                    href="/"
                  >
                    Scolage App
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                    href="/b2b/"
                  >
                    College-Registration
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
              </div>
            </div>
            <div class="w-1/3 lg:w-3/12 px-2 lg:p-0">
              <div class="pb-4 2xl:pb-12">
                <p class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-bold leading-normal">
                  Reach Us
                </p>
              </div>
              <div >
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    href="mailto:info@scolage.com"
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                  >
                    info@scolage.com
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
                <div class="py-3 2xl:py-6 relative after:content-[&#x27;&#x27;] after:absolute after:w-full after:max-w-[100px] 2xl:after:max-w-[180px] after:h-[1px] after:bg-secondary after:bottom-0 after:left-0">
                  <a
                    href="tel:+91 78425 81008"
                    class="text-sm lg:text-xl 2xl:text-1x2 text-[#707070] font-normal leading-normal"
                  >
                    +91 78425 81008
                  </a>
                </div>
                <hr className="md:w-28 w-20 border-t-1 border-[#707070]" />
              </div>
            </div>
            <div class="w-full lg:w-4/12 -order-1 lg:order-1 pb-16 2xl:p-0">
              <div class="pb-4 2xl:pb-10">
                <h4 class="text-[42px] 2xl:text-[45px] text-[#707070] italic font-normal leading-normal text-center">
                  Get in Touch :)
                </h4>
              </div>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  class="w-full h-[49px] 2xl:h-[55px] border border-solid border-secondary bg-[#f5f5f5] px-6 2xl:px-9 rounded-[20px] outline-none text-sm lg:text-lg 2xl:text-xl text-secondary font-normal leading-normal mb-3"
                  value=""
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  class="w-full h-[49px] 2xl:h-[55px] border border-solid border-secondary bg-[#f5f5f5] px-6 2xl:px-9 rounded-[20px] outline-none text-sm lg:text-lg 2xl:text-xl text-secondary font-normal leading-normal mb-3"
                  value=""
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  class="w-full h-[49px] 2xl:h-[55px] border border-solid border-secondary bg-[#f5f5f5] px-6 2xl:px-9 rounded-[20px] outline-none text-sm lg:text-lg 2xl:text-xl text-secondary font-normal leading-normal mb-3"
                  value=""
                />
                <textarea
                  placeholder="Subject"
                  class="resize-none w-full h-28 2xl:h-[150px] border border-solid border-secondary bg-[#f5f5f5] p-6 2xl:p-9 rounded-[20px] outline-none text-sm 2xl:text-xl text-secondary font-normal leading-normal mb-3"
                ></textarea>
                <div class="flex justify-center lg:justify-end pt-5">
                  <button
                    type="submit"
                    class="p-3 bg-[#60269E] text-white text-[15px] 2xl:text-[25px] font-normal leading-normal rounded-[20px] min-w-[125px] 2xl:min-w-[190px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex lg:hidden items-center justify-end gap-3 2xl:gap-8 pb-12">
            <a target="_blank" href="https://www.linkedin.com/company/scolage/">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[25px] 2xl:text-[47px]" color="#707070" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://m.facebook.com/ScolageAbetterWay/">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[25px] 2xl:text-[47px]" color="#707070" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/scolage.insta/?hl=en">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[25px] 2xl:text-[47px]" color="#707070" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="/">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[25px] 2xl:text-[47px]" color="#707070" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-[#707070] "></div>
      <div className="py-14  ">
        <div className="container relative px-7">
          <div className="flex items-center flex-around flex-col lg:flex-row">
            <div className="w-full lg:w-3/12 ">
              <a className="max-w-[253px] lg:max-w-[200px] 2xl:max-w-[200px] w-full block  xl:mx-20 md:mx-auto lg:m-0">
                <img
                  alt="Scolage"
                  loading="lazy"
                  width="253"
                  height="74"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src={Footerlogo}
                ></img>
              </a>
            </div>
            <div className="w-full lg:w-6/12 pt-4 lg:p-0 ">
              <p className="text-sm lg:text-xl 2xl:text-3xl text-secondary leading-normal font-normal text-center">
                © Copyright 2022 , GetUp-RiseUp Pvt. Ltd.
              </p>
            </div>
            <div className="w-3/12 hidden lg:block">
              <div className="flex items-center justify-end gap-5 2xl:gap-8">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/scolage/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-[25px] lg:text-[33px] 2xl:text-[47px]"
                    color="#707070"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#707070" }}
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://m.facebook.com/ScolageAbetterWay/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-[25px] lg:text-[33px] 2xl:text-[47px]"
                    color="#707070"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#707070" }}
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/scolage.insta/?hl=en"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-[25px] lg:text-[33px] 2xl:text-[47px]"
                    color="#707070"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#707070" }}
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-[25px] lg:text-[33px] 2xl:text-[47px]"
                    color="#707070"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#707070" }}
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
