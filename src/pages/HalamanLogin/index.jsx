import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const HalamanLoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-green-600 font-poppins h-[1024px] mx-auto p-[132px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="h-[760px] m-auto"
          src="images/img_bglogin.svg"
          alt="bglogin"
        />
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-[21%]">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
              size="txtPoppinsMedium25"
            >
              Login
            </Text>
            <Text
              className="text-[9.5px] text-center text-gray-600"
              size="txtPoppinsMedium95Gray600"
            >
              administrator
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-6 w-[69%] md:w-full">
            <Img
              className="h-16 md:h-auto object-cover w-16"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
            <Text
              className="mt-3 text-[15px] text-center text-gray-900"
              size="txtPoppinsMedium15Gray900"
            >
              Desa Rawa Bangun Rengat
            </Text>
            <Text
              className="text-[15px] text-center text-gray-900"
              size="txtPoppinsMedium15Gray900"
            >
              Indragiri Hulu
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[72px] w-full">
            <div className="flex flex-col justify-start w-full">
              <Text
                className="md:ml-[0] ml-[7px] text-[15.5px] text-center text-gray-700"
                size="txtPoppinsMedium155"
              >
                Email
              </Text>
              <Input
                name="groupFiftySeven"
                placeholder="Masukkan Email"
                className="!placeholder:text-gray-400_01 !text-gray-400_01 font-medium leading-[normal] p-0 text-center text-xs w-full"
                wrapClassName="border border-gray-500 border-solid shadow-bs2 w-full"
                type="email"
                shape="round"
                size="xl"
              ></Input>
            </div>
            <div className="flex flex-col justify-start mt-[19px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] text-[15.5px] text-center text-gray-700"
                size="txtPoppinsMedium155"
              >
                Password
              </Text>
              <Input
                name="groupFiftySix"
                placeholder="Masukkan Password"
                className="!placeholder:text-gray-400_01 !text-gray-400_01 font-medium leading-[normal] p-0 text-center text-xs w-full"
                wrapClassName="border border-gray-500 border-solid flex shadow-bs2 w-full"
                type="password"
                suffix={
                  <Img
                    className="h-5 ml-[35px] my-auto"
                    src="images/img_hide.png"
                    alt="Hide"
                  />
                }
                shape="round"
                size="xl"
              ></Input>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] min-w-[130px] mt-[21px] text-[15.5px] text-center text-green-600"
              onClick={() => navigate("/halamanlupapassword")}
            >
              Lupa Password ?
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[200px] mt-[17px] outline outline-[1px] outline-green-600 shadow-bs2 text-[15.5px] text-center"
              shape="round"
              color="green_600"
              size="md"
              variant="fill"
            >
              Masuk
            </Button>
            <div className="flex flex-row items-center justify-center mt-1.5 w-[59%] md:w-full">
              <Text
                className="text-center text-gray-900 text-xs"
                size="txtPoppinsMedium12"
              >
                Kembali{" "}
              </Text>
              <Text
                className="ml-1 text-center text-green-600 text-xs"
                size="txtPoppinsMedium12Green600"
              >
                Ke Halaman Utama
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanLoginPage;
