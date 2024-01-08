import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Input, Text } from "components";

const EditGaleriModal = (props) => {
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
            <div className="bg-white-A700 flex flex-row items-start justify-between outline outline-[1px] outline-black-900_99 p-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full">
              <Text
                className="ml-6 mt-[19px] text-[15px] text-gray-700"
                size="txtPoppinsMedium15Gray700"
              >
                Ubah Galeri
              </Text>
              <Text
                className="mr-6 mt-5 text-[15px] text-gray-700"
                size="txtPoppinsRegular15Gray700"
              >
                X
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Nama *
                </Text>
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Nama *
                </Text>
                <Input
                  name="groupTen"
                  placeholder="alumni"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid mt-[3px] w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Slug *
                </Text>
                <Input
                  name="groupFifteen"
                  placeholder="alumni"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid mt-0.5 w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Icon Foto Id Google Drive *
                </Text>
                <Input
                  name="rectangleSeventyFive"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-0.5 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  <span className="text-gray-700 font-poppins font-medium">
                    Folder Id Google Drive{" "}
                  </span>
                  <span className="text-red-A700 font-poppins font-medium">
                    *
                  </span>
                </Text>
                <Input
                  name="rectangleSeventyFive_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_4c border-solid flex h-[30px] mt-0.5 w-full"
                  shape="round"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-4 w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Tanggal *
                </Text>
                <Input
                  name="date"
                  placeholder="12/12/2012"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid ml-0.5 md:ml-[0] mt-0.5 w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-3.5 w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Lokasi *
                </Text>
                <Input
                  name="groupTwelve"
                  placeholder="yogyakarta"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid ml-0.5 md:ml-[0] mt-1 w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Keterangan *
                </Text>
                <Input
                  name="groupThirteen"
                  placeholder="bukber"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid ml-0.5 md:ml-[0] w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[15px] w-full">
                <Text
                  className="text-[15px] text-center text-red-A700"
                  size="txtPoppinsMedium15RedA700"
                >
                  Status *
                </Text>
                <Input
                  name="groupFourteen"
                  placeholder="tampilkan"
                  className="leading-[normal] p-0 placeholder:text-gray-700 text-center text-xs w-full"
                  wrapClassName="border border-black-900_4c border-solid ml-0.5 md:ml-[0] mt-[3px] w-full"
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

export default EditGaleriModal;
