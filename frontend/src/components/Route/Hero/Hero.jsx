import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif')",
        }}
      >
        <div
          className={`flex justify-end ${styles.section} w-[90%] 800px:w-[80%]`}
        >
          <div className="w-[100%] md:w-[40%]"> {/* Updated width for mobile */}
            <h1
              className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
            >
              Best One Stop Shop<br />For Multiple Vendor Products
            </h1>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;



     {/* Mobile Header */}
{/* <div className="relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat">
  <img
    src="https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif"
    alt=""
    className="w-full h-auto"
  />
  <div className="absolute top-0 left-0 w-full h-[50vh] bg-black opacity-50"></div>
  <div className="absolute top-0 left-0 w-full h-[50vh] flex flex-col justify-center">
    <div className="ml-4">
      <h1 className="text-2xl md:text-4xl text-white font-semibold">
        Best One Stop Shop<br />For Multiple Vendor Products
      </h1>
      <Link to="/products" className="inline-block mt-2">
      <div className={`${styles.button} mt-5`}>
          <span className="text-white font-semibold text-lg">Shop Now</span>
        </div>
      </Link>
    </div>
  </div>
</div> */}