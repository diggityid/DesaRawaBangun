import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const HALAMANSTRUKTURDESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-3.5 w-full">
            <div className="h-[45px] md:h-[47px] mb-0.5 md:ml-[0] ml-[141px] md:px-5 relative w-[16%] md:w-full">
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
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[463px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
              onClick={() => navigate("/halamantentangdesa")}
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
            / Struktur Organisasi Desa{" "}
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start max-w-[1115px] mt-[34px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[51%] md:w-full">
            <Text
              className="text-[22px] text-green-600 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              Struktur Organisasi{" "}
            </Text>
            <Line className="bg-teal-900 h-px mt-1 w-full" />
          </div>
          <div className="md:h-[1311px] h-[731px] sm:h-[780px] relative w-full">
            <Img
              className="h-[731px] m-auto object-cover w-full"
              src="images/img_rectangle56_731x1115.png"
              alt="rectangleFiftySix"
            />
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-[51%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[192px] outline outline-[1px] outline-black-900 text-[13px] text-center"
                      shape="square"
                      color="teal_900"
                      size="lg"
                      variant="fill"
                    >
                      BPD
                    </Button>
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kepala Desa
                      </Text>
                      <Text
                        className="my-[5px] text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        ASWADI,S.Pd.I
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-teal-900 flex flex-col items-center justify-start md:ml-[0] ml-[692px] mt-14 outline outline-[1px] outline-black-900 p-4 shadow-bs"
                    onClick={() => navigate("/kepaladesa")}
                  >
                    <Text
                      className="text-[13px] text-center text-white-A700"
                      size="txtPoppinsSemiBold13"
                    >
                      Sekertaris Desa
                    </Text>
                    <Text
                      className="mb-2 mt-1 text-[11px] text-center text-white-A700"
                      size="txtPoppinsMedium11"
                    >
                      TRIO SUWENDA
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[82px] w-full">
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[18px] shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kasi Kesejahteraan
                      </Text>
                      <Text
                        className="mb-1.5 mt-[3px] text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        NUR FAIZUN
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start md:ml-[0] ml-[11px] outline outline-[1px] outline-black-900 p-4 shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kasi Pemerintahan
                      </Text>
                      <Text
                        className="mb-2 mt-1 text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        SUSILAWATI
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start md:ml-[0] ml-[53px] outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kaur Umum
                      </Text>
                      <Text
                        className="mb-2 mt-1 text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        RISTANTI FITRIYANI
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start md:ml-[0] ml-[11px] outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kaur Perencanaan
                      </Text>
                      <Text
                        className="mb-2 mt-1 text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        ANI FATUS SANIYAH
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-teal-900 flex flex-col items-center justify-start ml-3 md:ml-[0] outline outline-[1px] outline-black-900 p-[19px] shadow-bs"
                      onClick={() => navigate("/kepaladesa")}
                    >
                      <Text
                        className="text-[13px] text-center text-white-A700"
                        size="txtPoppinsSemiBold13"
                      >
                        Kaur Keuangan
                      </Text>
                      <Text
                        className="mb-1.5 mt-0.5 text-[11px] text-center text-white-A700"
                        size="txtPoppinsMedium11"
                      >
                        PUSPITA SARI
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer bg-teal-900 flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[155px] mr-[336px] mt-[27px] outline outline-[1px] outline-black-900 p-3.5 shadow-bs"
                  onClick={() => navigate("/kepaladesa")}
                >
                  <Text
                    className="text-[13px] text-center text-white-A700"
                    size="txtPoppinsSemiBold13"
                  >
                    KEPALA KEPELAKSANAAN KEWILAYAHAN/KEPALA DUSUN
                  </Text>
                  <Text
                    className="mb-2.5 text-[11px] text-center text-white-A700"
                    size="txtPoppinsMedium11"
                  >
                    Lorem Ipsum Dorem S.Pd
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-center justify-start md:ml-[0] ml-[83px] mt-[82px] w-[69%] md:w-full">
                  <div
                    className="common-pointer bg-teal-900 flex flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                    onClick={() => navigate("/kepaladesa")}
                  >
                    <Text
                      className="text-[13px] text-center text-white-A700"
                      size="txtPoppinsSemiBold13"
                    >
                      Dusun I
                    </Text>
                    <Text
                      className="mb-[7px] mt-1 text-[11px] text-center text-white-A700"
                      size="txtPoppinsMedium11"
                    >
                      HERU WIDODO
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-teal-900 flex flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                    onClick={() => navigate("/kepaladesa")}
                  >
                    <Text
                      className="text-[13px] text-center text-white-A700"
                      size="txtPoppinsSemiBold13"
                    >
                      Dusun II
                    </Text>
                    <Text
                      className="mb-[7px] mt-1 text-[11px] text-center text-white-A700"
                      size="txtPoppinsMedium11"
                    >
                      DENI ARNOLD SAMOSIR
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-teal-900 flex flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[17px] shadow-bs"
                    onClick={() => navigate("/kepaladesa")}
                  >
                    <Text
                      className="text-[13px] text-center text-white-A700"
                      size="txtPoppinsSemiBold13"
                    >
                      Dusun III
                    </Text>
                    <Text
                      className="mb-[7px] mt-1 text-[11px] text-center text-white-A700"
                      size="txtPoppinsMedium11"
                    >
                      HENDRA KURNIAWAN
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-green-600 flex items-center justify-center mt-[216px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HALAMANSTRUKTURDESAPage;
