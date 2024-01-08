import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const HALAMANPERANGKATDESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
              <div className="h-[45px] ml-36 md:ml-[0] md:px-5 relative w-[16%] md:w-full">
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
              / Perangkat Desa{" "}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[163px] mt-[35px] md:px-5 w-2/5 md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-[22px] text-green-600 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Perangkat Desa
              </Text>
              <Line className="bg-teal-900 h-px w-full" />
            </div>
          </div>
          <div className="md:gap-5 gap-[46px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1115px] min-h-[auto] mt-[55px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-1.5 text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Aswadi,S.Pd.I
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KEPALA DESA
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  TRIO SUWENDA
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  SEKERTARIS DESA
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  RISTANTI FITRIYANI
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KAUR UMUM
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  ANI FATUS SANIYAH
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KAUR PERENCANAAN
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  PUSPITA SARI
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KAUR KEUANGAN
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  NUR FAIZUN
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KASI KESEJAHTERAAN
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  SUSILAWATI
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  KASI PEMERINTAHAN
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  HERU WIDODO
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  DUSUN I
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  DENI ARNOLD SAMOSIR
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  DUSUN II
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-40 md:h-auto object-cover w-full"
                src="images/img_rectangle79.png"
                alt="rectangleSeventyNine"
              />
              <div
                className="common-pointer bg-green-600 border border-green-600_99 border-solid flex flex-col items-center justify-end p-1.5 w-full"
                onClick={() => navigate("/perangkatdesaone")}
              >
                <Text
                  className="mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  HENDRA KURNIAWAN
                </Text>
                <Text
                  className="text-[9px] text-center text-white-A700"
                  size="txtPoppinsRegular9"
                >
                  DUSUN III
                </Text>
              </div>
            </div>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center mt-[527px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HALAMANPERANGKATDESAPage;
