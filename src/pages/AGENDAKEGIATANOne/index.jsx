import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const AGENDAKEGIATANOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
          <div className="bg-gray-300 flex flex-row items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
              onClick={() => navigate("/agendakegiatan")}
            />
            <Text
              className="common-pointer ml-[7px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
              onClick={() => navigate("/agendakegiatan")}
            >
              <span className="text-black-900_99 font-poppins text-left font-normal">
                /{" "}
              </span>
              <span className="text-green-600 font-poppins text-left font-normal">
                Agenda Kegiatan
              </span>
              <span className="text-black-900_99 font-poppins text-left font-normal">
                {" "}
              </span>
            </Text>
            <Text
              className="ml-[33px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Judul Agenda Kegiatan
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[163px] mt-[34px] md:px-5 w-[39%] md:w-full">
            <Text
              className="text-[22px] text-green-600 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              Judul Agenda Kegiatan
            </Text>
            <Line className="bg-teal-900 h-px w-full" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1115px] mt-[54px] mx-auto md:px-5 w-full">
            <div className="h-[788px] md:h-[789px] relative w-1/2 md:w-full">
              <div className="flex flex-row h-full items-start justify-start mt-[281px] w-[56%]">
                <Img
                  className="h-[15px] md:h-auto object-cover w-[7%]"
                  src="images/img_rectangle96.png"
                  alt="rectangleNinetySix"
                />
                <Text
                  className="text-[12.5px] text-black-900_b2 text-justify"
                  size="txtPoppinsSemiBold125Black900b2"
                >
                  Aula Desa
                </Text>
                <Text
                  className="ml-10 text-[12.5px] text-black-900_b2 text-justify"
                  size="txtPoppinsSemiBold125Black900b2"
                >
                  Jun, 20, 2020 s/d jun, 22, 2020
                </Text>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                <Text
                  className="text-[12.5px] text-black-900_99 text-justify"
                  size="txtPoppinsRegular125Black90099"
                >
                  Jun, 20, 2020
                </Text>
                <Img
                  className="h-[220px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle87_180x279.png"
                  alt="rectangleEightySeven"
                />
                <Text
                  className="mt-[75px] text-[12.5px] text-black-900_99 text-justify"
                  size="txtPoppinsRegular125Black90099"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[18px] w-[30%] md:w-full">
              <Input
                name="language_One"
                placeholder="   DAFTAR AGENDA KEGIATAN"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-[12.5px] text-justify w-full"
                wrapClassName="rounded-tl-[5px] rounded-tr-[5px] shadow-bs w-full"
                color="green_600"
                size="sm"
              ></Input>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[27px] sm:px-5 rounded-bl-[5px] rounded-br-[5px] shadow-bs w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-col gap-[29px] items-center justify-start w-[37%]">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-full"
                      src="images/img_rectangle89_180x279.png"
                      alt="rectangleNinetyThree"
                    />
                    <Img
                      className="h-[70px] md:h-auto object-cover w-full"
                      src="images/img_rectangle89_180x279.png"
                      alt="rectangleNinetyFour"
                    />
                    <Img
                      className="h-[70px] md:h-auto object-cover w-full"
                      src="images/img_rectangle89_180x279.png"
                      alt="rectangleNinetyFive"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="common-pointer text-[12.5px] text-green-600"
                      size="txtPoppinsSemiBold125"
                      onClick={() => navigate("/agendakegiatantwo")}
                    >
                      Judul Agenda Kegiatan
                    </Text>
                    <Text
                      className="text-[12.5px] text-black-900_99 text-justify"
                      size="txtPoppinsRegular125Black90099"
                    >
                      Jun, 20, 2020
                    </Text>
                    <Text
                      className="common-pointer mt-[61px] text-[12.5px] text-green-600"
                      size="txtPoppinsSemiBold125"
                      onClick={() => navigate("/agendakegiatantwo")}
                    >
                      Judul Agenda Kegiatan
                    </Text>
                    <Text
                      className="text-[12.5px] text-black-900_99 text-justify"
                      size="txtPoppinsRegular125Black90099"
                    >
                      Jun, 20, 2020
                    </Text>
                    <Text
                      className="common-pointer mt-[63px] text-[12.5px] text-green-600"
                      size="txtPoppinsSemiBold125"
                      onClick={() => navigate("/agendakegiatantwo")}
                    >
                      Judul Agenda Kegiatan{" "}
                    </Text>
                    <Text
                      className="text-[12.5px] text-black-900_99 text-justify"
                      size="txtPoppinsRegular125Black90099"
                    >
                      Jun, 20, 2020
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center mt-[142px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AGENDAKEGIATANOnePage;
