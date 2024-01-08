import React from "react";

import { Img, Line, Text } from "components";

const EditSejarahDesaPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-6 sm:px-5 w-full">
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[52px] md:px-5 w-[42%] md:w-full">
          <Text
            className="sm:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700"
            size="txtPoppinsMedium30"
          >
            Halaman Sejarah
          </Text>
          <Line className="bg-gray-700 sm:h-0.5 h-[45px] mb-0.5 ml-7 sm:ml-[0] w-0.5 sm:w-full" />
          <Text
            className="mb-[3px] sm:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            Halaman Utama
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[1286px] mt-[11px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start w-full">
            <div className="h-[61px] relative w-[49%] md:w-full">
              <Text
                className="mb-[-1.69px] text-[15px] text-center text-red-A700 z-[1]"
                size="txtPoppinsMedium15RedA700"
              >
                Judul Halaman Sejarah *
              </Text>
              <div className="bg-white-A700 border border-black-900_59 border-solid h-10 mt-auto mx-auto rounded-[5px] w-full"></div>
            </div>
            <div className="h-[61px] relative w-[49%] md:w-full">
              <Text
                className="mb-[-1.69px] text-[15px] text-center text-red-A700 z-[1]"
                size="txtPoppinsMedium15RedA700"
              >
                Sub Judul di Halaman Sejarah *
              </Text>
              <div className="bg-white-A700 border border-black-900_59 border-solid h-10 mt-auto mx-auto rounded-[5px] w-full"></div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[52px] mt-[18px] text-[15px] text-center text-gray-700"
          size="txtPoppinsMedium15Gray700"
        >
          Deskripsi :
        </Text>
        <div className="flex flex-col items-center max-w-[1286px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x h-[768px] rounded-[10px] shadow-bs2 w-full"></div>
        </div>
        <div className="bg-green-600 flex flex-col items-center justify-end md:ml-[0] ml-[52px] mt-[25px] p-[3px] md:px-5 rounded-[5px] w-[9%] md:w-full">
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
      </div>
    </>
  );
};

export default EditSejarahDesaPage;
