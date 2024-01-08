import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const AGENDAKEGIATANPage = () => {
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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[460px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
              / Agenda Kegiatan
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[163px] mt-[34px] md:px-5 w-[38%] md:w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Agenda Kegiatan
          </Text>
          <Line className="bg-teal-900 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[306px] items-center mt-[73px] w-full">
          <List
            className="flex flex-col gap-[33px] items-center max-w-[1095px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x279.png"
                  alt="rectangleEightySeven"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Kegiatan
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <div className="h-[72px] ml-0.5 md:ml-[0] mt-5 relative w-full">
                    <div className="flex flex-row items-start justify-evenly mb-[-3.93px] w-[11%] z-[1]">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[23%]"
                        src="images/img_rectangle96.png"
                        alt="rectangleNinetySix"
                      />
                      <Text
                        className="text-[12.5px] text-black-900_b2 text-justify"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Aula Desa
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mb-[undefinedpx] w-[41%] z-[1]">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[7%]"
                        src="images/img_rectangle96.png"
                        alt="rectangleNinetySix_One"
                      />
                      <Text
                        className="text-[12.5px] text-black-900_b2 text-justify"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Aula Desa
                      </Text>
                      <Text
                        className="ml-[38px] text-[12.5px] text-black-900_b2 text-justify"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Jun, 20, 2020 s/d jun, 22, 2020
                      </Text>
                    </div>
                    <Text
                      className="mb-[undefinedpx] mt-auto mx-auto text-[12.5px] text-black-900_99 text-justify w-full z-[1]"
                      size="txtPoppinsRegular125Black90099"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[147px] mt-[22px] text-[10px] text-center"
                    onClick={() => navigate("/agendakegiatanone")}
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
              <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle87_180x279.png"
                  alt="rectangleEightyEight"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15.5px] text-green-600"
                    size="txtPoppinsSemiBold155"
                  >
                    Judul Kegiatan
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-[12.5px] text-black-900_99 text-justify"
                    size="txtPoppinsRegular125Black90099"
                  >
                    Jun, 20, 2020
                  </Text>
                  <div className="h-[72px] md:h-[77px] ml-0.5 md:ml-[0] mt-5 relative w-full">
                    <div className="absolute md:h-[57px] h-[71px] inset-[0] justify-center m-auto w-full">
                      <Text
                        className="absolute left-[16%] text-[12.5px] text-black-900_b2 text-justify top-[0]"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Jun, 20, 2020 s/d jun, 22, 2020
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[12.5px] text-black-900_99 text-justify w-full"
                        size="txtPoppinsRegular125Black90099"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </div>
                    <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[0] w-[11%]">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[23%]"
                        src="images/img_rectangle96.png"
                        alt="rectangleNinetySix"
                      />
                      <Text
                        className="text-[12.5px] text-black-900_b2 text-justify"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Aula Desa
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[147px] ml-0.5 md:ml-[0] mt-[22px] text-[10px] text-center"
                    onClick={() => navigate("/agendakegiatanone")}
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
              <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-full">
                <Img
                  className="h-[180px] md:h-auto object-cover"
                  src="images/img_rectangle89_180x279.png"
                  alt="rectangleEightyNine"
                />
                <div className="flex flex-col gap-5 items-start justify-start">
                  <div className="md:h-[23px] h-[41px] relative w-[16%]">
                    <Text
                      className="absolute bottom-[0] left-[2%] text-[12.5px] text-black-900_99 text-justify"
                      size="txtPoppinsRegular125Black90099"
                    >
                      Jun, 20, 2020
                    </Text>
                    <Text
                      className="absolute inset-x-[0] mx-auto text-[15.5px] text-green-600 top-[0] w-max"
                      size="txtPoppinsSemiBold155"
                    >
                      Judul Kegiatan
                    </Text>
                  </div>
                  <div className="md:h-[57px] h-[72px] ml-0.5 md:ml-[0] relative w-full">
                    <div className="absolute md:h-[57px] h-[71px] inset-[0] justify-center m-auto w-full">
                      <Text
                        className="absolute left-[16%] text-[12.5px] text-black-900_b2 text-justify top-[0]"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Jun, 20, 2020 s/d jun, 22, 2020
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[12.5px] text-black-900_99 text-justify w-full"
                        size="txtPoppinsRegular125Black90099"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Text>
                    </div>
                    <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[0] w-[11%]">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[23%]"
                        src="images/img_rectangle96.png"
                        alt="rectangleNinetySix"
                      />
                      <Text
                        className="text-[12.5px] text-black-900_b2 text-justify"
                        size="txtPoppinsSemiBold125Black900b2"
                      >
                        Aula Desa
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[147px] ml-0.5 md:ml-[0] text-[10px] text-center"
                    onClick={() => navigate("/agendakegiatanone")}
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

export default AGENDAKEGIATANPage;
