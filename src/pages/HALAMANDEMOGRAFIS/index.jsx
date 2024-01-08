import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HALAMANDEMOGRAFISPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
            <div className="h-[45px] md:ml-[0] ml-[142px] md:px-5 relative w-[16%] md:w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[8.5px] text-black-900"
                    size="txtPoppinsSemiBold85"
                  >
                    INFORMASI DESA RAWA BANGUN RENGAT
                  </Text>
                  <Text
                    className="text-[8px] text-black-900"
                    size="txtPoppinsLight8"
                  >
                    Kec. Indragiri Hulu Prov. Riau
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[45px] inset-y-[0] left-[0] my-auto object-cover w-[45px]"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen"
              />
            </div>
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[461px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
              onClick={() => navigate("/")}
            >
              <Text
                className="text-[8.5px] text-green-600"
                size="txtPoppinsSemiBold85Green600"
              >
                PROFILE DESA
              </Text>
              <Img
                className="h-1 md:h-auto object-cover w-1"
                src="images/img_rectangle43.png"
                alt="rectangleFortyThree"
              />
            </div>
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
              onClick={() => navigate("/halamanstrukturdesa")}
            >
              <Text
                className="text-[8.5px] text-green-600"
                size="txtPoppinsSemiBold85Green600"
              >
                PEMERINTAHAN
              </Text>
              <Img
                className="h-1 md:h-auto object-cover w-1"
                src="images/img_rectangle43.png"
                alt="rectangleFortyFour"
              />
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[6%] md:w-full">
              <Text
                className="text-[8.5px] text-green-600"
                size="txtPoppinsSemiBold85Green600"
              >
                INFORMASI PUBLIK
              </Text>
              <Img
                className="h-1 md:h-auto object-cover w-1"
                src="images/img_rectangle43.png"
                alt="rectangleFortyFive"
              />
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5">
              <Text
                className="text-[8.5px] text-green-600"
                size="txtPoppinsSemiBold85Green600"
              >
                DESTINASI WISATA
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 flex flex-row items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
          <Img
            className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
            src="images/img_rectangle55.png"
            alt="rectangleFiftyFive"
            onClick={() => navigate("/halamantentangdesa")}
          />
          <Text
            className="common-pointer ml-[7px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
            onClick={() => navigate("/halamantentangdesa")}
          >
            <span className="text-black-900_99 font-poppins text-left font-normal">
              /{" "}
            </span>
            <span className="text-green-600 font-poppins text-left font-normal">
              Profile Desa{" "}
            </span>
          </Text>
          <Text
            className="ml-[25px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
          >
            / Geografis dan Demografis
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1115px] mt-[34px] mx-auto md:px-5 w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Demografis Desa Rawa Bangun{" "}
          </Text>
          <Line className="bg-teal-900 h-px w-[51%]" />
          <Text
            className="mt-7 text-[15px] text-black-900_99 text-justify"
            size="txtPoppinsLight15"
          >
            <>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </>
          </Text>
          <Img
            className="h-[1140px] sm:h-auto mt-[79px] object-cover w-full"
            src="images/img_rectangle56_1140x1113.png"
            alt="rectangleFiftySix"
          />
        </div>
        <Footer className="bg-green-600 flex items-center justify-center mt-[455px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HALAMANDEMOGRAFISPage;
