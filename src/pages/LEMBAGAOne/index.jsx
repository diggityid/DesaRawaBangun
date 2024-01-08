import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const LEMBAGAOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-3.5 w-full">
            <div className="h-[45px] md:h-[47px] mb-0.5 md:ml-[0] ml-[142px] md:px-5 relative w-[16%] md:w-full">
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
            className="h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
            src="images/img_rectangle55.png"
            alt="rectangleFiftyFive"
          />
          <Text
            className="ml-[7px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
          >
            <span className="text-black-900_99 font-poppins text-left font-normal">
              /{" "}
            </span>
            <span className="text-green-600 font-poppins text-left font-normal">
              Lembaga Desa
            </span>
          </Text>
          <Text
            className="ml-[30px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
          >
            / Nama Lembaga
          </Text>
        </div>
        <div className="flex flex-col items-start mt-8 md:px-10 sm:px-5 px-[163px] w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-[22px] text-green-600 sm:text-lg md:text-xl"
              size="txtPoppinsSemiBold22"
            >
              NAMA LEMBAGA DESA
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1115px] mt-9 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
            <Img
              className="h-[120px] md:h-auto object-cover"
              src="images/img_rectangle74.png"
              alt="rectangleSeventyFour"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row gap-[202px] items-center justify-start w-[46%] md:w-full">
                <Text
                  className="text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  Nama Lembaga
                </Text>
                <Text
                  className="text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  : Lorem Ipsum Dorrem
                </Text>
              </div>
              <Line className="bg-teal-900_a5 h-0.5 w-full" />
              <div className="h-[21px] md:h-[25px] mt-[7px] relative w-full">
                <Text
                  className="absolute h-max inset-y-[0] left-[32%] my-auto text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  : Lorem Ipsum Dorrem
                </Text>
                <Text
                  className="absolute left-[0] text-[11.5px] text-green-600 top-[0]"
                  size="txtPoppinsRegular115"
                >
                  Singkatan
                </Text>
                <Line className="absolute bg-teal-900_a5 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
              </div>
              <div className="flex flex-row gap-[115px] items-start justify-start mt-1 w-[46%] md:w-full">
                <Text
                  className="text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  Dasar Hukum/SK Pembentukan
                </Text>
                <Text
                  className="text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  : Lorem Ipsum Dorrem
                </Text>
              </div>
              <Line className="bg-teal-900_a5 h-0.5 w-full" />
              <div className="flex flex-row gap-[213px] items-start justify-start mt-2.5 w-[46%] md:w-full">
                <Text
                  className="mb-0.5 text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  Alamat Kantor{" "}
                </Text>
                <Text
                  className="mt-0.5 text-[11.5px] text-green-600"
                  size="txtPoppinsRegular115"
                >
                  : Lorem Ipsum Dorrem
                </Text>
              </div>
              <Line className="bg-teal-900_a5 h-0.5 w-full" />
            </div>
          </div>
        </div>
        <div className="h-[474px] max-w-[1115px] mt-[50px] mx-auto md:px-5 relative w-full">
          <Input
            name="groupForty"
            placeholder="Profile *Lembaga"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-[15.5px] text-left w-full z-[1]"
            wrapClassName="mb-[-13px] mx-auto w-full z-[1]"
            shape="round"
            color="green_600"
            size="xl"
          ></Input>
          <div className="bg-white-A700 border border-green-600 border-solid h-[437px] mt-auto mx-auto rounded-bl-[5px] rounded-br-[5px] w-full"></div>
        </div>
        <div className="h-40 max-w-[1115px] mt-[38px] mx-auto md:px-5 relative w-full">
          <Input
            name="groupThirtyNine"
            placeholder="Visi & Misi *Lembaga"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-[15.5px] text-left w-full z-[1]"
            wrapClassName="mb-[-13px] mx-auto w-full z-[1]"
            shape="round"
            color="green_600"
            size="xl"
          ></Input>
          <div className="bg-white-A700 border border-green-600 border-solid h-[123px] mt-auto mx-auto rounded-bl-[5px] rounded-br-[5px] w-full"></div>
        </div>
        <div className="h-[474px] max-w-[1115px] mt-[38px] mx-auto md:px-5 relative w-full">
          <Input
            name="groupThirtyEight"
            placeholder="Tugas Pokok & Fungsi *Lembaga"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-[15.5px] text-left w-full z-[1]"
            wrapClassName="mb-[-13px] mx-auto w-full z-[1]"
            shape="round"
            color="green_600"
            size="xl"
          ></Input>
          <div className="bg-white-A700 border border-green-600 border-solid h-[437px] mt-auto mx-auto rounded-bl-[5px] rounded-br-[5px] w-full"></div>
        </div>
        <div className="h-[237px] max-w-[1115px] mt-[38px] mx-auto md:px-5 relative w-full">
          <Input
            name="groupThirtySeven"
            placeholder="Kepengurusan *Lembaga"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-[15.5px] text-left w-full z-[1]"
            wrapClassName="mb-[-13px] mx-auto w-full z-[1]"
            shape="round"
            color="green_600"
            size="xl"
          ></Input>
          <div className="bg-white-A700 border border-green-600 border-solid h-[200px] mt-auto mx-auto rounded-bl-[5px] rounded-br-[5px] w-full"></div>
        </div>
        <Footer1 className="bg-green-600 flex items-center justify-center mt-[99px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default LEMBAGAOnePage;
