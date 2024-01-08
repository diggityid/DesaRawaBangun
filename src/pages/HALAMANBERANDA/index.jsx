import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HALAMANBERANDAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[13px] w-full">
            <div className="h-[45px] md:h-[49px] mb-1 md:ml-[0] ml-[142px] md:px-5 relative w-[16%] md:w-full">
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
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[466px] md:px-5 w-[5%] md:w-full"
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
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:px-5 w-[5%] md:w-full"
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
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:px-5 w-[6%] md:w-full"
              onClick={() => navigate("/pengumuman")}
            >
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
            <Button
              className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[79px] md:ml-[0] ml-[50px] text-[8.5px] text-center text-green-600"
              onClick={() => navigate("/destinasiwisata")}
            >
              DESTINASI WISATA
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <Img
            className="h-[478px] mx-auto object-cover w-full"
            src="images/img_imagebanner.png"
            alt="imagebanner"
          />
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-51px] mx-auto p-[22px] sm:px-5 rounded-[10px] shadow-bs w-[78%] z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[27px] w-[91%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-green-600"
                    size="txtPoppinsMedium15"
                  >
                    <span className="text-green-600 font-poppins text-left font-light">
                      Berita
                    </span>
                    <span className="text-green-600 font-poppins text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-green-600 font-poppins text-left font-semibold">
                      Terkini{" "}
                    </span>
                  </Text>
                  <Line className="bg-green-600 h-0.5 mt-[5px] w-full" />
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-[27px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[48%] md:w-full">
                      <div className="h-[150px] relative w-full">
                        <Img
                          className="h-[150px] m-auto object-cover w-full"
                          src="images/img_rectangle15.png"
                          alt="rectangleFifteen"
                        />
                        <div className="absolute bg-green-600_b2 bottom-[0] h-2.5 left-[0] w-[21%]"></div>
                      </div>
                      <div className="h-[150px] relative w-full">
                        <Img
                          className="h-[150px] m-auto object-cover w-full"
                          src="images/img_rectangle15.png"
                          alt="rectangleSixteen"
                        />
                        <div className="absolute bg-green-600_b2 bottom-[0] h-2.5 left-[0] w-[21%]"></div>
                      </div>
                      <div className="h-[150px] relative w-full">
                        <Img
                          className="h-[150px] m-auto object-cover w-full"
                          src="images/img_rectangle15.png"
                          alt="rectangleSeventeen"
                        />
                        <div className="absolute bg-green-600_b2 bottom-[0] h-2.5 left-[0] w-[21%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[17px] text-green-600"
                        size="txtPoppinsRegular17"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                      <Text
                        className="mt-[3px] text-[9.5px] text-black-900 text-justify w-full"
                        size="txtPoppinsLight95"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                      <Text
                        className="mt-[93px] text-[17px] text-green-600"
                        size="txtPoppinsRegular17"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                      <Text
                        className="mt-[3px] text-[9.5px] text-black-900 text-justify w-full"
                        size="txtPoppinsLight95"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                      <Text
                        className="mt-[93px] text-[17px] text-green-600"
                        size="txtPoppinsRegular17"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                      <Text
                        className="mt-[3px] text-[9.5px] text-black-900 text-justify w-full"
                        size="txtPoppinsLight95"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-center justify-start w-[23%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[93%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-green-600"
                      size="txtPoppinsLight15Green600"
                    >
                      Pengumuman
                    </Text>
                    <Line className="bg-green-600 h-0.5 mt-0.5 w-full" />
                    <div className="bg-green-600 h-5 mt-[27px] rounded-[5px] w-full"></div>
                    <div className="bg-green-600 h-5 mt-3.5 rounded-[5px] w-full"></div>
                    <div className="bg-green-600 h-5 mt-[15px] rounded-[5px] w-full"></div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-green-600"
                          size="txtPoppinsLight15Green600"
                        >
                          <span className="text-green-600 font-poppins text-left font-light">
                            Agenda{" "}
                          </span>
                          <span className="text-green-600 font-poppins text-left font-semibold">
                            Kegiatan
                          </span>
                          <span className="text-green-600 font-poppins text-left font-light">
                            {" "}
                          </span>
                        </Text>
                        <List
                          className="flex flex-col gap-[7.5px] w-[96%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <div className="bg-green-600 flex flex-col items-center justify-start p-[5px]">
                              <Text
                                className="text-[9.5px] text-white-A700"
                                size="txtPoppinsMedium95"
                              >
                                <>
                                  Oktober
                                  <br />
                                  24 2023
                                </>
                              </Text>
                            </div>
                            <div className="md:h-3.5 h-7 relative w-[70%]">
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[10px] text-green-600 top-[0] w-max"
                                size="txtPoppinsMedium10"
                              >
                                orem ipsum dolor sit amet
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[0] text-[9px] text-green-600"
                                size="txtPoppinsLight9"
                              >
                                <span className="text-green-600 font-poppins text-left font-light">
                                  Lokasi :{" "}
                                </span>
                                <span className="text-green-600 font-poppins text-left font-normal">
                                  orem ipsum{" "}
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-0.5 bg-green-600 w-full" />
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <div className="bg-green-600 flex flex-col items-center justify-start p-[5px]">
                              <Text
                                className="text-[9.5px] text-white-A700"
                                size="txtPoppinsMedium95"
                              >
                                <>
                                  Oktober
                                  <br />
                                  24 2023
                                </>
                              </Text>
                            </div>
                            <div className="md:h-3.5 h-7 relative w-[70%]">
                              <Text
                                className="absolute bottom-[0] left-[0] text-[9px] text-green-600"
                                size="txtPoppinsLight9"
                              >
                                <span className="text-green-600 font-poppins text-left font-light">
                                  Lokasi :{" "}
                                </span>
                                <span className="text-green-600 font-poppins text-left font-normal">
                                  orem ipsum{" "}
                                </span>
                              </Text>
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[10px] text-green-600 top-[0] w-max"
                                size="txtPoppinsMedium10"
                              >
                                orem ipsum dolor sit amet
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="text-[15px] text-green-600"
                        size="txtPoppinsLight15Green600"
                      >
                        <span className="text-green-600 font-poppins text-left font-light">
                          Struktur{" "}
                        </span>
                        <span className="text-green-600 font-poppins text-left font-medium">
                          Organisasi
                        </span>
                      </Text>
                      <Line className="bg-green-600 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[15px]"
                        src="images/img_backbutton.png"
                        alt="backbutton"
                      />
                      <Img
                        className="h-[201px] md:h-auto object-cover rounded-[5px] w-[84%]"
                        src="images/img_rectangle26.png"
                        alt="rectangleTwentySix"
                      />
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[15px]"
                        src="images/img_rectangle50.png"
                        alt="nextbutton"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] justify-start max-w-[1115px] mt-7 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] w-[24%] md:w-full">
            <Text
              className="text-[15px] text-green-600"
              size="txtPoppinsLight15Green600"
            >
              <span className="text-green-600 font-poppins text-left font-light">
                Galeri{" "}
              </span>
              <span className="text-green-600 font-poppins text-left font-medium">
                Foto & Vidio
              </span>
            </Text>
            <Line className="bg-green-600 h-0.5 mt-0.5 w-full" />
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs1 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle27.png"
                    alt="rectangleTwentySeven"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle28.png"
                    alt="rectangleTwentyEight"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle29.png"
                    alt="rectangleTwentyNine"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle30.png"
                    alt="rectangleThirty"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyOne"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="h-[150px] relative w-full">
                  <Img
                    className="h-[150px] m-auto object-cover w-full"
                    src="images/img_rectangle32.png"
                    alt="rectangleThirtyTwo"
                  />
                  <Text
                    className="absolute bg-green-600_b2 bottom-[0] h-[15px] inset-x-[0] justify-center mx-auto pl-0.5 sm:pr-5 pr-[35px] text-[9px] text-justify text-white-A700 w-max"
                    size="txtPoppinsLight9WhiteA700"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[29px] w-full">
          <div className="h-[440px] md:px-5 relative w-[67%] md:w-full">
            <Img
              className="h-[440px] m-auto object-cover w-full"
              src="images/img_rectangle47.png"
              alt="rectangleFortySeven"
            />
            <div className="absolute bg-gray-400 bottom-[8%] flex flex-col items-center justify-start py-[5px] right-[2%] rounded-[5px] w-[5%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-justify text-white-A700 text-xl"
                  size="txtPoppinsMedium20"
                >
                  +
                </Text>
                <Line className="bg-white-A700 h-px mt-1 w-full" />
              </div>
              <Text
                className="text-justify text-white-A700 text-xl"
                size="txtPoppinsMedium20"
              >
                -
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-[45px] md:px-5 w-[34%] md:w-full">
            <Text
              className="mb-[62px] mt-[65px] text-[13.5px] text-justify text-teal-900"
              size="txtPoppinsRegular135"
            >
              <>
                Kode PUM
                <br />
                Tahun Pembentukan
                <br />
                Dasar Hukum <br />
                Tipologi
                <br />
                Klasifikasi
                <br />
                Kategori <br />
                Luas Wilayah
                <br />
                Batas Sebelah Utara <br />
                Batas Sebelah Selatan
                <br />
                Batas Sebelah Timur
                <br />
                Batas Sebelah Barat{" "}
              </>
            </Text>
            <Text
              className="mb-[62px] mr-[23px] mt-[65px] text-[13.5px] text-justify text-teal-900"
              size="txtPoppinsRegular135"
            >
              <>
                : Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
                <br />: Lorem Ipsum Dolor
              </>
            </Text>
          </div>
        </div>
        <Footer className="bg-green-600 flex items-center justify-center mt-[29px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HALAMANBERANDAPage;
