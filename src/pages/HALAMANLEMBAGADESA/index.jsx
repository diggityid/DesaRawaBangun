import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const HALAMANLEMBAGADESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
              <div className="h-[45px] md:ml-[0] ml-[141px] md:px-5 relative w-[16%] md:w-full">
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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[463px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
              / Lembaga Desa{" "}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[163px] mt-[35px] md:px-5 w-[39%] md:w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Lembaga Desa{" "}
          </Text>
          <Line className="bg-teal-900 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[183px] items-center mt-[53px] w-full">
          <div className="flex flex-col justify-start max-w-[1115px] mx-auto md:px-5 w-full">
            <div className="flex flex-row sm:gap-10 gap-[448px] items-start justify-start md:ml-[0] ml-[11px] w-[58%] md:w-full">
              <Text
                className="text-[12.5px] text-black-900_8c"
                size="txtPoppinsRegular125Black9008c"
              >
                Nama Lembaga
              </Text>
              <Text
                className="text-[12.5px] text-black-900_8c"
                size="txtPoppinsRegular125Black9008c"
              >
                Alamat Kantor
              </Text>
            </div>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div
                className="common-pointer bg-gray-300 flex flex-1 flex-col items-start justify-start my-0 pb-0.5 px-0.5 w-full"
                onClick={() => navigate("/lembagaone")}
              >
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] w-[62%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                  </div>
                  <div className="h-[11px] relative w-[4%]">
                    <div className="absolute bg-teal-900 h-[11px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[12%] my-auto text-[7px] text-white-A700"
                      size="txtPoppinsLight7"
                    >
                      BPD
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 w-full">
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                  </div>
                  <div className="h-[11px] relative w-[4%]">
                    <div className="absolute bg-teal-900 h-[11px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[12%] my-auto text-[7px] text-white-A700"
                      size="txtPoppinsLight7"
                    >
                      BPD
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-gray-300 flex flex-1 flex-col items-start justify-start my-0 w-full"
                onClick={() => navigate("/lembagaone")}
              >
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                  </div>
                  <div className="h-[11px] relative w-[4%]">
                    <div className="absolute bg-teal-900 h-[11px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[12%] my-auto text-[7px] text-white-A700"
                      size="txtPoppinsLight7"
                    >
                      BPD
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 w-full">
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                  </div>
                  <div className="h-[11px] relative w-[4%]">
                    <div className="absolute bg-teal-900 h-[11px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[12%] my-auto text-[7px] text-white-A700"
                      size="txtPoppinsLight7"
                    >
                      BPD
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-gray-300 flex flex-1 flex-col items-start justify-start my-0 w-full"
                onClick={() => navigate("/lembagaone")}
              >
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                    <Text
                      className="text-[9.5px] text-teal-900"
                      size="txtPoppinsLight95Teal900"
                    >
                      LOREM IPSUM DORUM LOREM
                    </Text>
                  </div>
                  <div className="h-[11px] relative w-[4%]">
                    <div className="absolute bg-teal-900 h-[11px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[12%] my-auto text-[7px] text-white-A700"
                      size="txtPoppinsLight7"
                    >
                      BPD
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HALAMANLEMBAGADESAPage;
