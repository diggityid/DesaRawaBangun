import React from "react";

import { Img, Input, Line, Radio, RadioGroup, Text } from "components";

const DaftarArtikelPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[31px] items-start justify-start mx-auto p-[23px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[53px] md:px-5 w-[53%] md:w-full">
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
              Daftar Artikel
            </span>
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[1286px] mb-[43px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x md:h-[808px] h-[856px] p-5 relative rounded-[10px] shadow-bs2 w-full">
            <div className="absolute bg-green-A700_02 bottom-[4%] flex flex-col items-center justify-start p-2.5 right-[4%] rounded-[5px] w-[8%]">
              <div className="flex flex-row items-start justify-center w-[85%] md:w-full">
                <Img
                  className="h-5 md:h-auto object-cover w-5"
                  src="images/img_rectangle69.png"
                  alt="rectangleSixtyNine"
                />
                <Text
                  className="text-center text-white-A700 text-xs"
                  size="txtPoppinsSemiBold12"
                >
                  Simpan
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[10%] flex sm:flex-col flex-row gap-[38px] items-center justify-center right-[10%] w-[39%]">
              <div className="flex flex-col items-start justify-start w-1/2 sm:w-full">
                <Text
                  className="text-center text-gray-700 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Tanggal Artikel
                </Text>
                <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-row items-center justify-between p-1.5 rounded-[5px] w-full">
                  <Text
                    className="ml-[3px] text-[17px] text-center text-gray-700"
                    size="txtPoppinsRegular17Gray700"
                  >
                    30/12/2023
                  </Text>
                  <Img
                    className="h-5 md:h-auto mr-[3px] object-cover w-5"
                    src="images/img_rectangle67.png"
                    alt="rectangleSixtySeven"
                  />
                </div>
                <Text
                  className="text-center text-gray-700 text-xs"
                  size="txtPoppinsRegular12Gray700"
                >
                  Sabtu 30 Desember 2023
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start w-[43%] sm:w-full">
                <Text
                  className="text-center text-gray-700 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Publiskasikan Artikel :
                </Text>
                <RadioGroup
                  className="flex flex-col w-[36%]"
                  name="radiogroupsimpanOne"
                >
                  <Radio
                    value="Simpan"
                    className="leading-[normal] text-center text-gray-700 text-xs"
                    inputClassName="bg-gray-50 border border-black-900_4c border-solid h-5 mr-[5px] w-5"
                    checked={false}
                    name="radiogroupsimpanOne"
                    label="Simpan"
                    id="Simpan"
                  ></Radio>
                  <Radio
                    value="Publish"
                    className="leading-[normal] mr-1 mt-3.5 text-center text-gray-700 text-xs"
                    inputClassName="bg-white-A700 border-[5px] border-blue-A400 border-solid h-5 mr-[5px] w-5"
                    checked={false}
                    name="radiogroupsimpanOne"
                    label="Publish"
                    id="Publish"
                  ></Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="absolute bottom-[22%] flex flex-col items-start justify-start right-[4%] w-[45%]">
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtPoppinsRegular20"
              >
                Tag Artikel
              </Text>
              <div className="bg-white-A700 border border-black-900_33 border-solid h-[60px] rounded-[5px] w-full"></div>
            </div>
            <div className="absolute bottom-[34%] flex flex-col items-start justify-start right-[4%] w-[45%]">
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtPoppinsRegular20"
              >
                Kategori Artikel
              </Text>
              <div className="bg-white-A700 border border-black-900_33 border-solid h-[60px] rounded-[5px] w-full"></div>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[4%] top-[36%] w-[45%]">
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtPoppinsRegular20"
              >
                Kilasan / Cuplikan Artikel
              </Text>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-end justify-end rounded-[5px] w-full">
                <Img
                  className="h-3 mt-[106px]"
                  src="images/img_edit.svg"
                  alt="edit"
                />
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[4%] top-[22%] w-[45%]">
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtPoppinsRegular20"
              >
                Slug
              </Text>
              <div className="bg-white-A700 border border-black-900_33 border-solid h-10 rounded-[5px] w-full"></div>
              <Text
                className="text-gray-700 text-xs"
                size="txtPoppinsRegular12Gray700"
              >
                <>
                  *Slug Digunakan untuk akses artikel lewat url atau alamat web,
                  slug diatas tidak boleh sama
                  <br /> dengan nama artikel yang lain.
                </>
              </Text>
            </div>
            <div className="flex flex-col h-full items-start justify-start ml-auto mr-[33px] mt-[84px] w-[45%]">
              <Text
                className="text-center text-gray-700 text-xl"
                size="txtPoppinsRegular20"
              >
                Nama Artikel
              </Text>
              <Input
                name="rectangleFifty"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-black-900_33 border-solid flex h-10 w-full"
                shape="round"
              ></Input>
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[92%]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-700"
                size="txtPoppinsMedium25Gray700"
              >
                FORM UBAH ARTIKEL
              </Text>
              <Line className="bg-black-900_4c h-px w-full" />
              <Img
                className="h-[755px] mt-3.5"
                src="images/img_kolomubahartikel.svg"
                alt="kolomubahartike"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarArtikelPage;
