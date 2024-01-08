import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const KEPALADESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
          <div className="bg-gray-300 flex flex-row items-center justify-start max-w-[1107px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
              onClick={() => navigate("/halamanstrukturdesa")}
            />
            <Text
              className="common-pointer ml-[7px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
              onClick={() => navigate("/halamanstrukturdesa")}
            >
              <span className="text-black-900_99 font-poppins text-left font-normal">
                /{" "}
              </span>
              <span className="text-green-600 font-poppins text-left font-normal">
                Struktur Organisasi
              </span>
              <span className="text-black-900_99 font-poppins text-left font-normal">
                {" "}
              </span>
            </Text>
            <Text
              className="ml-[34px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Nama Jabatan
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-8 items-center justify-start mt-[34px] md:px-5 w-2/5 md:w-full">
            <List
              className="flex flex-col gap-1 w-[30%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center justify-start my-0 w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start w-full"
                  onClick={() => navigate("/halamanstrukturdesa")}
                >
                  <div className="flex flex-row items-start justify-start w-[57%] md:w-full">
                    <Img
                      className="h-2 mt-0.5 w-2"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                    <Text
                      className="ml-1 text-[9px] text-green-600"
                      size="txtPoppinsLight9"
                    >
                      Struktur Organisasi{" "}
                    </Text>
                  </div>
                  <Line className="bg-teal-900_7f h-px mt-0.5 w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-2/5 md:w-full">
                    <Img
                      className="h-2 mt-0.5 w-2"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                    <Text
                      className="ml-1 text-[9px] text-green-600"
                      size="txtPoppinsLight9"
                    >
                      Kepala Desa
                    </Text>
                  </div>
                  <Line className="bg-teal-900_7f h-px mt-0.5 w-full" />
                </div>
              </div>
            </List>
            <div className="flex flex-col items-start justify-start w-[65%] sm:w-full">
              <Text
                className="text-[22px] text-green-600 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Struktur Organisasi{" "}
              </Text>
              <Line className="bg-teal-900 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[3px] md:px-5 w-[12%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-start w-[48%] md:w-full">
                <Img
                  className="h-2 mt-[3px] w-2"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
                <Text
                  className="ml-[3px] text-[9px] text-green-600"
                  size="txtPoppinsLight9"
                >
                  Sekertaris Desa
                </Text>
              </div>
              <Line className="bg-teal-900_7f h-px mt-[3px] w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1115px] mt-[3px] mx-auto md:px-5 w-full">
            <Input
              name="sekertarisdesa_One"
              placeholder="Kaur Umum"
              className="font-light leading-[normal] p-0 placeholder:text-green-600 sm:pr-5 text-[9px] text-left w-full"
              wrapClassName="flex md:flex-1 pr-[35px] w-[16%] md:w-full"
              prefix={
                <div className="h-2 mt-[3px] mb-0.5 mr-[3px] w-2 bg-teal-900_7f">
                  <Img
                    className="h-2 my-auto"
                    src="images/img_overflowmenu.svg"
                    alt="overflow_menu"
                  />
                </div>
              }
              color="teal_900_7f"
              size="xs"
              variant="underline"
            ></Input>
            <div className="md:h-3.5 h-4 relative w-[82%] md:w-full">
              <Text
                className="absolute left-[0] text-[9px] text-green-600 top-[0]"
                size="txtPoppinsRegular9Green600"
              >
                Jabatan
              </Text>
              <div className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto w-full">
                <Text
                  className="absolute left-[16%] text-[9px] text-green-600 top-[0]"
                  size="txtPoppinsRegular9Green600"
                >
                  : Ipsum Lorem Dorum
                </Text>
                <Line className="absolute bg-teal-900_7f bottom-[0] h-px inset-x-[0] mx-auto w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1115px] mt-[3px] mx-auto md:px-5 w-full">
            <Input
              name="kaurpemerintaha"
              placeholder="Kaur Perencanaan"
              className="font-light leading-[normal] p-0 placeholder:text-green-600 sm:pr-5 text-[9px] text-left w-full"
              wrapClassName="flex md:flex-1 pr-[35px] w-[16%] md:w-full"
              prefix={
                <div className="h-2 mt-[3px] mb-0.5 mr-1 w-2 bg-teal-900_7f">
                  <Img
                    className="h-2 my-auto"
                    src="images/img_overflowmenu.svg"
                    alt="overflow_menu"
                  />
                </div>
              }
              color="teal_900_7f"
              size="xs"
              variant="underline"
            ></Input>
            <div className="md:h-3.5 h-4 relative w-[82%] md:w-full">
              <Text
                className="absolute left-[0] text-[9px] text-green-600 top-[0]"
                size="txtPoppinsRegular9Green600"
              >
                Nama
              </Text>
              <div className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto w-full">
                <Text
                  className="mb-[-0.03px] ml-[143px] text-[9px] text-green-600 z-[1]"
                  size="txtPoppinsRegular9Green600"
                >
                  : Ipsum Lorem Dorum
                </Text>
                <Line className="bg-teal-900_7f h-px mt-auto mx-auto w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1115px] mt-1 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[16%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-start w-[48%] md:w-full">
                  <Img
                    className="h-2 w-2"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu_One"
                  />
                  <Text
                    className="ml-1 text-[9px] text-green-600"
                    size="txtPoppinsLight9"
                  >
                    Kaur Keuangan
                  </Text>
                </div>
                <Line className="bg-teal-900_7f h-px w-full" />
              </div>
            </div>
            <div className="md:h-3.5 h-4 relative w-[82%] md:w-full">
              <Text
                className="absolute h-3.5 left-[0] text-[9px] text-green-600 top-[0]"
                size="txtPoppinsRegular9Green600"
              >
                NIP
              </Text>
              <div className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto w-full">
                <Text
                  className="mb-[-0.03px] ml-[143px] text-[9px] text-green-600 z-[1]"
                  size="txtPoppinsRegular9Green600"
                >
                  : Ipsum Lorem Dorum
                </Text>
                <Line className="bg-teal-900_7f h-px mt-auto mx-auto w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1115px] mt-1 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[16%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-[58%] md:w-full">
                    <Img
                      className="h-2 mt-0.5 w-2"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu_Two"
                    />
                    <Text
                      className="ml-1 text-[9px] text-green-600"
                      size="txtPoppinsLight9"
                    >
                      Kasi Kesejahteraan
                    </Text>
                  </div>
                  <Line className="bg-teal-900_7f h-px mt-0.5 w-full" />
                </div>
              </div>
              <Input
                name="kaurkesejahtera"
                placeholder="Kasi Pemerintahan"
                className="font-light leading-[normal] p-0 placeholder:text-green-600 sm:pr-5 text-[9px] text-left w-full"
                wrapClassName="flex mt-[3px] pr-[35px] w-full"
                prefix={
                  <div className="h-2 mt-[3px] mb-0.5 mr-1 w-2 bg-teal-900_7f">
                    <Img
                      className="h-2 my-auto"
                      src="images/img_overflowmenu.svg"
                      alt="overflow_menu"
                    />
                  </div>
                }
                color="teal_900_7f"
                size="xs"
                variant="underline"
              ></Input>
              <div className="flex flex-col items-center justify-start mt-1 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-[83%] md:w-full">
                    <Img
                      className="h-2 mt-0.5 w-2"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu_Three"
                    />
                    <Text
                      className="ml-1 text-[9px] text-green-600"
                      size="txtPoppinsLight9"
                    >
                      Kepala Kepelaksaan Wilayah
                    </Text>
                  </div>
                  <Line className="bg-teal-900_7f h-px mt-0.5 w-full" />
                </div>
              </div>
              <Input
                name="kaurumum"
                placeholder="Nama Jabatan"
                className="font-light leading-[normal] p-0 placeholder:text-green-600 sm:pr-5 text-[9px] text-left w-full"
                wrapClassName="flex mt-[3px] pr-[35px] w-full"
                prefix={
                  <div className="h-2 mt-[3px] mb-0.5 mr-1 w-2 bg-teal-900_7f">
                    <Img
                      className="h-2 my-auto"
                      src="images/img_overflowmenu.svg"
                      alt="overflow_menu"
                    />
                  </div>
                }
                color="teal_900_7f"
                size="xs"
                variant="underline"
              ></Input>
              <Input
                name="kepaladusun"
                placeholder="Nama Jabatan"
                className="font-light leading-[normal] p-0 placeholder:text-green-600 sm:pr-5 text-[9px] text-left w-full"
                wrapClassName="flex mt-[3px] pr-[35px] w-full"
                prefix={
                  <div className="h-2 mt-[3px] mb-0.5 mr-1 w-2 bg-teal-900_7f">
                    <Img
                      className="h-2 my-auto"
                      src="images/img_overflowmenu.svg"
                      alt="overflow_menu"
                    />
                  </div>
                }
                color="teal_900_7f"
                size="xs"
                variant="underline"
              ></Input>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[82%] md:w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <Line className="bg-teal-900_66 h-[102px] md:h-px md:w-full w-px" />
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-[7px] text-green-600"
                    size="txtPoppinsRegular7"
                  >
                    Secara eksplisit Pasal 26 ayat (1) mengatur empat tugas
                    utama *Nama Jabatan yaitu :
                  </Text>
                  <Text
                    className="text-[7px] text-green-600"
                    size="txtPoppinsRegular7"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      <br />
                      <br />
                      Dengan tugas yang diberikan, *Nama Jabatan diharapkan bisa
                      membawa desa ke arah yang diharapkan oleh UU ini.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center mt-[175px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default KEPALADESAPage;
