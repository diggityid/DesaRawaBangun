import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const ArtikelPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-7 items-start justify-start mx-auto p-[23px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[53px] md:px-5 w-[46%] md:w-full">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-700"
            size="txtPoppinsMedium30"
          >
            Daftar Artikel
          </Text>
          <Line className="bg-gray-700 md:h-0.5 h-[45px] ml-7 md:ml-[0] w-0.5 md:w-full" />
          <Text
            className="md:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            Halaman Utama
          </Text>
          <Text
            className="ml-2.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            <span className="text-gray-700 font-poppins text-left font-medium">
              /
            </span>
            <span className="text-green-600 font-poppins text-left font-medium">
              {" "}
            </span>
            <span className="text-gray-700 font-poppins text-left font-medium">
              Artikel
            </span>
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[1286px] mb-[46px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x flex flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] shadow-bs2 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-1 md:ml-[0] w-full">
              <Text
                className="text-gray-700 text-xl"
                size="txtPoppinsMedium20Gray700"
              >
                Tabel Daftar Artikel
              </Text>
              <Input
                name="buttontambahart"
                placeholder="+ Tambah Artikel"
                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-[15px] text-left w-full"
                wrapClassName="border border-solid border-white-A700_3f sm:flex-1 sm:w-full"
                shape="round"
                color="green_A700"
                size="md"
              ></Input>
            </div>
            <div className="bg-blue_gray-100 flex flex-row md:gap-10 items-center justify-between ml-1 md:ml-[0] mt-3.5 p-[7px] rounded-[5px] w-full">
              <Text
                className="ml-3 text-[15px] text-center text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Filter Data
              </Text>
              <Img
                className="h-5 md:h-auto mr-2 object-cover w-5"
                src="images/img_rectangle51.png"
                alt="rectangleFiftyOne"
              />
            </div>
            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] mt-[27px] w-[12%] md:w-full">
              <Text
                className="text-[15px] text-center text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Status
              </Text>
              <Button
                className="border border-black-900_59 border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] text-[15px] text-center"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Semua
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1 md:ml-[0] mt-7 w-full">
              <Text
                className="text-[15px] text-center text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Tampilkan
              </Text>
              <div className="bg-white-A700 border border-black-900_59 border-solid flex md:flex-1 flex-row gap-[17px] items-center justify-center ml-1.5 md:ml-[0] md:mt-0 my-[5px] p-0.5 rounded-[5px] w-[5%] md:w-full">
                <Text
                  className="ml-2 text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  10
                </Text>
                <Img
                  className="h-2.5 md:h-auto mr-1 object-cover w-2.5"
                  src="images/img_rectangle54.png"
                  alt="rectangleFiftyFour"
                />
              </div>
              <Text
                className="ml-1.5 md:ml-[0] text-[15px] text-center text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Entri
              </Text>
              <Text
                className="md:ml-[0] ml-[765px] text-[15px] text-center text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Cari :
              </Text>
              <div className="bg-white-A700 border border-black-900_59 border-solid h-10 md:ml-[0] ml-[9px] rounded-[5px] w-[19%]"></div>
            </div>
            <div className="bg-white-A700 border-b border-black-900_4c border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1 md:ml-[0] mt-[31px] w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                No
              </Text>
              <Text
                className="ml-4 md:ml-[0] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Nama
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[110px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyThree"
              />
              <Text
                className="md:ml-[0] ml-[9px] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Lihat
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[9px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyTwo"
              />
              <Text
                className="md:ml-[0] ml-[9px] md:mt-0 mt-[3px] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Slug
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[204px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyOne"
              />
              <Text
                className="md:ml-[0] ml-[9px] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Kilasan
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[263px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleSixty"
              />
              <Text
                className="md:ml-[0] ml-[9px] md:mt-0 mt-[3px] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Tanggal
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[9px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleFiftyNine"
              />
              <Text
                className="md:ml-[0] ml-[9px] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Status
              </Text>
              <Img
                className="h-[15px] md:h-auto md:ml-[0] ml-[102px] md:mt-0 mt-[5px] object-cover w-[15px]"
                src="images/img_rectangle63.png"
                alt="rectangleFiftyEight"
              />
              <Text
                className="ml-6 md:ml-[0] text-[15px] text-center text-gray-700"
                size="txtPoppinsBold15"
              >
                Aksi
              </Text>
            </div>
            <div className="bg-gray-200 border-b border-black-900_4c border-solid flex flex-col items-center justify-start ml-1 md:ml-[0] p-2 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[18px] mt-[5px] w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  1
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Img
                  className="h-[30px] md:h-auto md:mt-0 mt-3 object-cover rounded-[5px] w-[30px]"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour"
                />
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-justify text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:mt-0 mt-0.5 text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  30-12-2023
                </Text>
                <div className="flex flex-col gap-3.5 items-end justify-start">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="bg-green-A700_01 h-5 mb-[7px] mt-[3px] rounded-[50%] w-5"></div>
                    <Text
                      className="ml-1.5 mt-[3px] text-gray-700 text-xs"
                      size="txtPoppinsMedium12Gray700"
                    >
                      Dipublish
                    </Text>
                    <Img
                      className="h-[30px] md:h-auto ml-[109px] object-cover rounded-[5px] w-[30px]"
                      src="images/img_rectangle65.png"
                      alt="rectangleSixtyFive"
                    />
                  </div>
                  <Img
                    className="h-[30px] md:h-auto object-cover rounded-[5px] w-[30px]"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 border-b border-black-900_4c border-solid flex flex-col items-center justify-start ml-1 md:ml-[0] p-2 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[18px] mt-1 w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  2
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Img
                  className="h-[30px] md:h-auto md:mt-0 mt-3 object-cover rounded-[5px] w-[30px]"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour_One"
                />
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-justify text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:mt-0 mt-0.5 text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  30-12-2023
                </Text>
                <div className="flex flex-col gap-3.5 items-end justify-start">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="bg-green-A700_01 h-5 mb-[7px] mt-[3px] rounded-[50%] w-5"></div>
                    <Text
                      className="ml-1.5 mt-[3px] text-gray-700 text-xs"
                      size="txtPoppinsMedium12Gray700"
                    >
                      Dipublish
                    </Text>
                    <Img
                      className="h-[30px] md:h-auto ml-[109px] object-cover rounded-[5px] w-[30px]"
                      src="images/img_rectangle65.png"
                      alt="rectangleSixtyFive_One"
                    />
                  </div>
                  <Img
                    className="h-[30px] md:h-auto object-cover rounded-[5px] w-[30px]"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix_One"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 border-b border-black-900_4c border-solid flex flex-col items-center justify-start ml-1 md:ml-[0] p-2 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[18px] mt-1 w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  3
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Img
                  className="h-[30px] md:h-auto md:mt-0 mt-3 object-cover rounded-[5px] w-[30px]"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour_Two"
                />
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-justify text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:mt-0 mt-0.5 text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  30-12-2023
                </Text>
                <div className="flex flex-col gap-3.5 items-end justify-start">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="bg-red-A700 h-5 mb-[7px] mt-[3px] rounded-[50%] w-5"></div>
                    <Text
                      className="ml-1.5 mt-[3px] text-gray-700 text-xs"
                      size="txtPoppinsMedium12Gray700"
                    >
                      Belum Dipublish
                    </Text>
                    <Img
                      className="h-[30px] md:h-auto ml-[68px] object-cover rounded-[5px] w-[30px]"
                      src="images/img_rectangle65.png"
                      alt="rectangleSixtyFive_Two"
                    />
                  </div>
                  <Img
                    className="h-[30px] md:h-auto object-cover rounded-[5px] w-[30px]"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix_Two"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 border-b border-black-900_4c border-solid flex flex-col items-center justify-start mb-[43px] ml-1 md:ml-[0] p-[7px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[19px] mt-1.5 w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  4
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Img
                  className="h-[30px] md:h-auto md:mt-0 mt-3 object-cover rounded-[5px] w-[30px]"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour_Three"
                />
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit
                </Text>
                <Text
                  className="md:mt-0 mt-[3px] text-gray-700 text-justify text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:mt-0 mt-0.5 text-gray-700 text-xs"
                  size="txtPoppinsMedium12Gray700"
                >
                  30-12-2023
                </Text>
                <div className="flex flex-col gap-3.5 items-end justify-start">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="bg-red-A700_01 h-5 mb-[7px] mt-[3px] rounded-[50%] w-5"></div>
                    <Text
                      className="ml-1.5 mt-[3px] text-gray-700 text-xs"
                      size="txtPoppinsMedium12Gray700"
                    >
                      Belum Dipublish
                    </Text>
                    <Img
                      className="h-[30px] md:h-auto ml-[68px] object-cover rounded-[5px] w-[30px]"
                      src="images/img_rectangle65.png"
                      alt="rectangleSixtyFive_Three"
                    />
                  </div>
                  <Img
                    className="h-[30px] md:h-auto object-cover rounded-[5px] w-[30px]"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix_Three"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtikelPage;
