import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const HalamanLupaPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-green-600 font-poppins h-[1024px] mx-auto p-[132px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="h-[760px] m-auto"
          src="images/img_bglogin.svg"
          alt="bglogin"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[73px] h-max inset-[0] items-center justify-center m-auto w-[21%]">
          <Img
            className="h-[200px] md:h-auto object-cover w-[200px]"
            src="images/img_icon.png"
            alt="icon"
          />
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                size="txtPoppinsMedium25"
              >
                Lupa Password ?
              </Text>
              <Text
                className="text-[12.5px] text-center text-gray-900"
                size="txtPoppinsMedium125Gray900"
              >
                Masukkan email yang sudah terdaftar
              </Text>
            </div>
            <Input
              name="email"
              placeholder="exsample@gmail.com"
              className="!placeholder:text-gray-400_01 !text-gray-400_01 font-medium leading-[normal] p-0 text-center text-xs w-full"
              wrapClassName="border border-gray-500 border-solid mt-[27px] shadow-bs2 w-full"
              type="email"
              shape="round"
              size="xl"
            ></Input>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[200px] md:ml-[0] ml-[50px] mt-7 outline outline-[1px] outline-green-600 shadow-bs2 text-[15.5px] text-center"
              shape="round"
              color="green_600"
              size="md"
              variant="fill"
            >
              Kirim
            </Button>
            <div
              className="common-pointer flex flex-row items-start justify-center md:ml-[0] ml-[99px] mt-[5px] w-[36%] md:w-full"
              onClick={() => navigate("/halamanlogin")}
            >
              <Text
                className="text-center text-gray-900 text-xs"
                size="txtPoppinsMedium12"
              >
                Kembali
              </Text>
              <Text
                className="ml-1 text-center text-gray-900 text-xs"
                size="txtPoppinsMedium12"
              >
                <span className="text-gray-900 font-poppins font-medium">
                  {" "}
                </span>
                <span className="text-green-600 font-poppins font-medium">
                  Ke Login
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanLupaPasswordPage;
