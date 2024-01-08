import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Input, Text } from "components";

const EditJabatanModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[32%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-black-900_99 pb-[39px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-row items-start justify-between outline outline-[1px] outline-black-900_99 rounded-tl-[10px] rounded-tr-[10px] w-full">
              <Text
                className="ml-[26px] mt-[23px] text-[15px] text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Ubah Bidang
              </Text>
              <Text
                className="mr-[26px] mt-[21px] text-[15px] text-gray-700"
                size="txtPoppinsRegular15Gray700"
              >
                X
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Nama *
                </Text>
                <Input
                  name="rectangleSeventyFive"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-1 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Akun Sebagai *
                </Text>
                <Input
                  name="rectangleSeventyFive_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-0.5 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[15px] w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  No Urut *
                </Text>
                <Input
                  name="rectangleSeventyFive_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-[3px] w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  <span className="text-gray-700 font-poppins font-medium">
                    Pilih Bidang{" "}
                  </span>
                  <span className="text-red-A700 font-poppins font-medium">
                    *
                  </span>
                </Text>
                <Input
                  name="rectangleSeventyFive_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-0.5 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Slug *
                </Text>
                <Input
                  name="rectangleSeventyFive_Four"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-0.5 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Slogan{" "}
                </Text>
                <Input
                  name="groupFiftyThree"
                  placeholder="yogyakarta"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid mt-0.5 w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] mt-[15px] w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Status *
                </Text>
                <Input
                  name="groupFiftyFour"
                  placeholder="bukber"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid mt-[3px] w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] mt-[15px] w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  Foto
                </Text>
                <Input
                  name="groupFiftyFive"
                  placeholder="Chose File"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid mt-[3px] w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[231px] mt-[59px] w-[42%] md:w-full">
                <div className="bg-green-600 flex flex-col items-center justify-end p-[3px] rounded-[5px] w-[70%]">
                  <div className="flex flex-row items-center justify-center w-[78%] md:w-full">
                    <Img
                      className="h-2.5 md:h-auto object-cover w-2.5"
                      src="images/img_rectangle69.png"
                      alt="rectangleSeventyEight"
                    />
                    <Text
                      className="text-[7.5px] text-center text-white-A700"
                      size="txtPoppinsMedium75"
                    >
                      Simpan Perubahan
                    </Text>
                  </div>
                </div>
                <Text
                  className="bg-gray-50_01 border border-black-900_4c border-solid h-5 justify-center px-[5px] py-[3px] rounded-[5px] text-[7.5px] text-center text-gray-700 w-[45px]"
                  size="txtPoppinsMedium75Gray700"
                >
                  Batalkan
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default EditJabatanModal;
