import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HALAMANTENTANGDESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
              <div className="h-[45px] md:ml-[0] ml-[140px] md:px-5 relative w-[16%] md:w-full">
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
                className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[466px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
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
              / Profile Desa
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1115px] mt-[35px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-[22px] text-green-600 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Tentang Desa Rawa Bangun{" "}
              </Text>
              <Line className="bg-teal-900 h-px md:ml-[0] ml-[3px] w-1/2" />
              <Text
                className="mt-8 text-[15px] text-black-900_99 text-justify w-full"
                size="txtPoppinsLight15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mt-[75px] w-[99%] md:w-full">
              <Text
                className="text-[22px] text-green-600 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Visi & Misi
              </Text>
              <Line className="bg-teal-900 h-px w-1/2" />
              <Text
                className="md:ml-[0] ml-[30px] mt-6 text-green-600 text-lg"
                size="txtPoppinsSemiBold18"
              >
                Visi
              </Text>
              <Text
                className="text-[15px] text-black-900_99 text-justify"
                size="txtPoppinsLight15"
              >
                <>
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipiscing elit <br />
                  sed do eiusmod tempor incididunt ut labore et dolore <br />
                  magna aliqua. Ut enim ad minim veniam, <br />
                  quis nostrud exercitation ullamco laboris nisi ut <br />
                  aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
                  <br />
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </>
              </Text>
              <Text
                className="md:ml-[0] ml-[30px] mt-[25px] text-green-600 text-lg"
                size="txtPoppinsSemiBold18"
              >
                Misi
              </Text>
              <Text
                className="text-[15px] text-black-900_99 text-justify"
                size="txtPoppinsLight15"
              >
                <>
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipiscing elit <br />
                  sed do eiusmod tempor incididunt ut labore et dolore <br />
                  magna aliqua. Ut enim ad minim veniam, <br />
                  quis nostrud exercitation ullamco laboris nisi ut <br />
                  aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
                  <br />
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
                  <br />
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  <br />
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mt-[54px] w-[99%] md:w-full">
              <Text
                className="text-[22px] text-green-600 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Sejarah Desa Rawa Bangun Rengat
              </Text>
              <Line className="bg-teal-900 h-px w-1/2" />
              <Text
                className="mt-[25px] text-[15px] text-black-900_99 text-justify w-full"
                size="txtPoppinsLight15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[155px] mt-[57px] md:px-5 w-[37%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-[22px] text-green-600 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              Kantor
            </Text>
            <div className="flex sm:flex-col flex-row gap-[22px] items-start justify-start w-[77%] md:w-full">
              <Line className="bg-green-600_99 sm:h-0.5 h-[281px] w-0.5 sm:w-full" />
              <div className="flex flex-col gap-6 items-start justify-start w-[94%] sm:w-full">
                <Text
                  className="text-[15px] text-black-900_b2"
                  size="txtPoppinsRegular15"
                >
                  Desa Rawa Bangun Rengat - Indragilir Hulu - Riau
                </Text>
                <div className="flex flex-row gap-[69px] items-center justify-start w-[71%] md:w-full">
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsRegular125"
                  >
                    <>
                      Alamat
                      <br />
                      <br />
                      Kode POS
                      <br />
                      <br />
                      No. Telpn
                      <br />
                      <br />
                      Fax
                      <br />
                      <br />
                      Email
                      <br />
                      <br />
                      Website
                    </>
                  </Text>
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsRegular125"
                  >
                    <>
                      : Lorem ipsum dorum
                      <br />
                      <br />: XXXXXXXXXXXXXXXX
                      <br />
                      <br />: 0XXXXXXXXXXXXXXX
                      <br />
                      <br />: Lorem ipsum dorum
                      <br />
                      <br />: Lorem ipsum dorum
                      <br />
                      <br />: Lorem ipsum dorum
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-between mt-8 w-full">
              <div className="flex flex-col relative w-[35%] sm:w-full">
                <Text
                  className="text-[22px] text-green-600 sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Kepala Desa
                </Text>
                <Line className="bg-green-600_99 h-[281px] mt-[-2.26px] w-0.5 z-[1]" />
                <Img
                  className="h-[210px] mb-[35px] ml-auto mt-[-NaNpx] object-cover rounded-[5px] w-[83%] z-[1]"
                  src="images/img_rectangle57.png"
                  alt="rectangleFiftySeven"
                />
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[66px] w-[58%] sm:w-full">
                <div className="bg-blue_gray-50 flex flex-row gap-[45px] items-center justify-start p-1 rounded-sm w-full">
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    Nama
                  </Text>
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    : Lorem ipsum dorum
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-16 items-center justify-start p-1 rounded-sm w-full">
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    NIP
                  </Text>
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    : 20XXXXXXXXXXXXX
                  </Text>
                </div>
                <div className="bg-blue_gray-50 flex flex-row gap-[30px] items-start justify-start p-1 rounded-sm w-full">
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    Jabatan
                  </Text>
                  <Text
                    className="text-[12.5px] text-black-900_b2"
                    size="txtPoppinsMedium125"
                  >
                    : Lorem ipsum dorum
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[121px] w-full">
          <Footer className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HALAMANTENTANGDESAPage;
