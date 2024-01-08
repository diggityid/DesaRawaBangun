import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const PERANGKATDESAOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
          <div className="bg-gray-300 flex flex-row items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
              onClick={() => navigate("/halamanperangkatdesa")}
            />
            <Text
              className="common-pointer ml-[7px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
              onClick={() => navigate("/halamanperangkatdesa")}
            >
              <span className="text-black-900_99 font-poppins text-left font-normal">
                /{" "}
              </span>
              <span className="text-green-600 font-poppins text-left font-normal">
                Perangkat Desa
              </span>
              <span className="text-black-900_99 font-poppins text-left font-normal">
                {" "}
              </span>
            </Text>
            <Text
              className="ml-[31px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Nama Jabatan
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[165px] mt-[34px] md:px-5">
            <Text
              className="text-[22px] text-green-600 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              Nama Pegawai
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-center justify-start max-w-[1115px] mt-[31px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs w-[22%] md:w-full">
              <Img
                className="h-60 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
            </div>
            <div className="bg-white-A700 border border-solid border-teal-900_72 flex md:flex-1 flex-col items-center justify-start shadow-bs w-[73%] md:w-full">
              <div className="bg-white-A700 border border-solid border-teal-900_72 flex flex-row sm:gap-10 gap-[115px] items-center justify-start p-[5px] w-full">
                <Text
                  className="ml-[11px] text-[10px] text-black-900_99"
                  size="txtPoppinsSemiBold10"
                >
                  Nama
                </Text>
                <Text
                  className="mt-[3px] text-[10px] text-black-900_99"
                  size="txtPoppinsRegular10"
                >
                  : Lorem Ipsum Dorum
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-teal-900_72 flex flex-row sm:gap-10 gap-[103px] items-start justify-start p-1.5 w-full">
                <Text
                  className="ml-2.5 text-[10px] text-black-900_99"
                  size="txtPoppinsSemiBold10"
                >
                  Jabatan
                </Text>
                <Text
                  className="text-[10px] text-black-900_99"
                  size="txtPoppinsRegular10"
                >
                  : Lorem Ipsum Dorum
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-teal-900_72 flex flex-row sm:gap-10 gap-[130px] items-center justify-start p-1.5 w-full">
                <Text
                  className="mb-0.5 ml-[11px] text-[10px] text-black-900_99"
                  size="txtPoppinsSemiBold10"
                >
                  NIP
                </Text>
                <Text
                  className="text-[10px] text-black-900_99"
                  size="txtPoppinsRegular10"
                >
                  : Lorem Ipsum Dorum
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-teal-900_72 flex flex-col items-start justify-center p-[38px] sm:px-5 w-full">
                <Text
                  className="mt-[15px] text-[10px] text-black-900_99"
                  size="txtPoppinsRegular10"
                >
                  Lulusan S1 Ekonomi
                </Text>
                <Text
                  className="text-[10px] text-black-900_99"
                  size="txtPoppinsRegular10"
                >
                  Lulusan S2 Ilmu Hukum
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-teal-900_72 flex flex-col items-start justify-start p-1.5 w-full">
                <Text
                  className="mb-0.5 ml-8 md:ml-[0] text-[9px] text-black-900_99"
                  size="txtPoppinsLight9Black90099"
                >
                  )* Last Updated :{" "}
                </Text>
              </div>
            </div>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center mt-[108px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PERANGKATDESAOnePage;
