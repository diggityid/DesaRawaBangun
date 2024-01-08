import React from "react";

import { Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const GALERIDESAPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[461px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
          <div className="bg-gray-300 flex flex-row gap-2 items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
            />
            <Text
              className="text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Galeri Desa
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[163px] mt-[31px] md:px-5 w-[39%] md:w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Galeri Desa
          </Text>
          <Line className="bg-teal-900 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[177px] items-center mt-[85px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1113px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-green-600 flex flex-1 flex-col gap-[17px] justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangleNinetySeven"
                  />
                  <Text
                    className="mb-3 md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-[17px] justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle100.png"
                    alt="rectangle100"
                  />
                  <Text
                    className="mb-3 md:ml-[0] ml-[94px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-[17px] justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle100.png"
                    alt="rectangle102"
                  />
                  <Text
                    className="mb-3 md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle104"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle106"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[94px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle108"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle110"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle112"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[94px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
                <div className="bg-green-600 flex flex-1 flex-col gap-3.5 justify-start p-1 rounded-[3px] w-full">
                  <Img
                    className="h-[159px] sm:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_rectangle97.png"
                    alt="rectangle114"
                  />
                  <Text
                    className="mb-[15px] md:ml-[0] ml-[98px] text-[15px] text-white-A700"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Judul Content
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default GALERIDESAPage;
