import React from "react";

import { Button, Img, Line, Text } from "components";

const HalamanUbahProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[15px] items-center justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start w-[12%] md:w-full">
          <Img
            className="h-[110px] md:h-auto rounded-[50%] w-[110px]"
            src="images/img_ellipse2.png"
            alt="ellipseTwo"
          />
          <div className="flex flex-row items-center justify-start mt-[7px] w-[73%] md:w-full">
            <Text
              className="text-[10px] text-green-600"
              size="txtPoppinsRegular10Green600"
            >
              Beranda
            </Text>
            <Text
              className="ml-0.5 text-[10px] text-gray-700"
              size="txtPoppinsRegular10Gray700"
            >
              / Profil Admin
            </Text>
          </div>
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
            size="txtPoppinsSemiBold25"
          >
            Profil Admin
          </Text>
        </div>
        <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x flex flex-col items-center justify-start mb-[72px] p-[29px] md:px-5 rounded-[10px] shadow-bs2 w-[57%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[15px] w-[99%] md:w-full">
            <div className="h-[130px] relative w-[130px]">
              <Img
                className="h-[130px] m-auto object-cover w-[130px]"
                src="images/img_rectangle36.png"
                alt="rectangleThirtySix"
              />
              <Img
                className="absolute bottom-[0] h-5 object-cover right-[0] w-5"
                src="images/img_rectangle37.png"
                alt="rectangleThirtySeven"
              />
            </div>
            <div className="flex flex-col items-center justify-start mt-[22px] w-[49%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-8 items-center justify-start w-[54%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-700"
                    size="txtPoppinsSemiBold15"
                  >
                    Informasi Admin
                  </Text>
                  <Text
                    className="text-[10px] text-green-600"
                    size="txtPoppinsRegular10Green600"
                  >
                    Edit
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Nama
                  </Text>
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Lorem Ipsum Dorum
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[21px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900_66 h-px w-full" />
                <div className="flex flex-row gap-[57px] items-center justify-start mt-2.5 w-[27%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-700"
                    size="txtPoppinsSemiBold15"
                  >
                    Alamat Email
                  </Text>
                  <Text
                    className="text-[10px] text-green-600"
                    size="txtPoppinsRegular10Green600"
                  >
                    Edit
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[7px] w-1/2 md:w-full">
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Email
                  </Text>
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Exsample@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-1 w-[44%] md:w-full">
                  <Text
                    className="mt-0.5 text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Password
                  </Text>
                  <Text
                    className="mb-0.5 text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    **************
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-7 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900_66 h-px w-full" />
                <div className="flex flex-row gap-3.5 items-start justify-start mt-3 w-[27%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-700"
                    size="txtPoppinsSemiBold15"
                  >
                    Nomor Handphone
                  </Text>
                  <Text
                    className="text-[10px] text-green-600"
                    size="txtPoppinsRegular10Green600"
                  >
                    Edit
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[5px] w-[47%] md:w-full">
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    Nomor HP
                  </Text>
                  <Text
                    className="text-[11px] text-gray-700"
                    size="txtPoppinsMedium11Gray700"
                  >
                    08XXXXXXXXXXXX
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[155px] w-full">
              <div className="bg-green-600 border-black-900_33 border-l border-solid border-t flex flex-row items-center justify-center p-1.5 rounded-[10px] shadow-bs2">
                <Img
                  className="h-2.5 md:h-auto ml-[13px] object-cover w-2.5"
                  src="images/img_rectangle39.png"
                  alt="rectangleThirtyNine"
                />
                <Text
                  className="ml-[3px] mr-4 text-[10px] text-center text-white-A700"
                  size="txtPoppinsSemiBold10WhiteA700"
                >
                  Keluar
                </Text>
              </div>
              <Button
                className="border-black-900_33 border-l border-solid border-t cursor-pointer font-semibold leading-[normal] min-w-[90px] rounded-[10px] shadow-bs2 text-[10px] text-center"
                color="green_600"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUbahProfilePage;
