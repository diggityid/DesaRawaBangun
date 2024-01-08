import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const BERITADESAOnePage = () => {
  const navigate = useNavigate();

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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[459px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
              / Berita Desa
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[163px] mt-[31px] md:px-5 w-[39%] md:w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Berita Desa
          </Text>
          <Line className="bg-teal-900 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[247px] items-center mt-[72px] w-full">
          <List
            className="flex flex-col gap-[31px] items-center max-w-[1114px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x284.png"
                  alt="rectangleEightySeven"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Berita Desa
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <Text
                    className="mt-0.5 text-[12.5px] text-black-900_99 text-justify w-full"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[149px] mt-9 text-[10px] text-center"
                    onClick={() => navigate("/beritadesa")}
                    shape="round"
                    color="green_600"
                    size="xs"
                    variant="fill"
                  >
                    <>Selengkapnya &gt;</>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x284.png"
                  alt="rectangleEightyEight"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Berita Desa
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <Text
                    className="mt-0.5 text-[12.5px] text-black-900_99 text-justify w-full"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[149px] ml-0.5 md:ml-[0] mt-9 text-[10px] text-center"
                    onClick={() => navigate("/beritadesa")}
                    shape="round"
                    color="green_600"
                    size="xs"
                    variant="fill"
                  >
                    <>Selengkapnya &gt;</>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x284.png"
                  alt="rectangleEightyNine"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Berita Desa
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-[12.5px] text-black-900_99 text-justify w-full"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[149px] ml-0.5 md:ml-[0] mt-9 text-[10px] text-center"
                    onClick={() => navigate("/beritadesa")}
                    shape="round"
                    color="green_600"
                    size="xs"
                    variant="fill"
                  >
                    <>Selengkapnya &gt;</>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x284.png"
                  alt="rectangleEightyNine"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Berita Desa
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-[12.5px] text-black-900_99 text-justify w-full"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[149px] ml-0.5 md:ml-[0] mt-9 text-[10px] text-center"
                    onClick={() => navigate("/beritadesa")}
                    shape="round"
                    color="green_600"
                    size="xs"
                    variant="fill"
                  >
                    <>Selengkapnya &gt;</>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x284.png"
                  alt="rectangleEightyNine"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Berita Desa
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-0.5 text-[12.5px] text-black-900_99 text-justify w-full"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[149px] ml-0.5 md:ml-[0] mt-9 text-[10px] text-center"
                    onClick={() => navigate("/beritadesa")}
                    shape="round"
                    color="green_600"
                    size="xs"
                    variant="fill"
                  >
                    <>Selengkapnya &gt;</>
                  </Button>
                </div>
              </div>
            </div>
          </List>
          <Footer1 className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BERITADESAOnePage;
