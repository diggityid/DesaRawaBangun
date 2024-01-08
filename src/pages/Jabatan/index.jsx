import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const JabatanPage = () => {
  const table4Data = React.useRef([
    {
      no: "1",
      foto: "images/img_rectangle36.png",
      nama: "Lorem ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "2",
      foto: "images/img_rectangle36.png",
      nama: "Lorem Ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "3",
      foto: "images/img_rectangle36.png",
      nama: "Lorem Ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "4",
      foto: "images/img_rectangle36.png",
      nama: "Lorem Ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "5",
      foto: "images/img_rectangle36.png",
      nama: "Lorem Ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "6",
      foto: "images/img_rectangle36.png",
      nama: "Lorem Ipsum",
      kontak: "08XXXXXXXXXX",
      tgllahir: "12-12-2012",
      aksi: "images/img_rectangle66.png",
    },
  ]);
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("no", {
        cell: (info) => (
          <Text
            className="pb-6 pl-[9px] pt-2 text-[15px] text-center text-gray-700"
            size="txtPoppinsMedium15Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[54px] pl-1 py-[3px] text-[15px] text-center text-gray-700"
            size="txtPoppinsBold15"
          >
            No
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("foto", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start">
            <Img
              className="h-10 md:h-auto my-[7px] object-cover w-10"
              alt="rectangleEighty"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[80px] pl-1.5 py-[3px] text-[15px] text-gray-700"
            size="txtPoppinsBold15"
          >
            Foto
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("nama", {
        cell: (info) => (
          <Text
            className="pb-[27px] pt-2.5 text-gray-700 text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[458px] py-[3px] text-[15px] text-gray-700"
            size="txtPoppinsBold15"
          >
            Nama
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("kontak", {
        cell: (info) => (
          <Text
            className="pb-7 pt-[9px] text-gray-700 text-justify text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[292px] py-[3px] text-[15px] text-gray-700 text-justify"
            size="txtPoppinsBold15"
          >
            Kontak
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("tgllahir", {
        cell: (info) => (
          <Text
            className="pb-7 pt-[9px] text-gray-700 text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[255px] py-[3px] text-[15px] text-gray-700"
            size="txtPoppinsBold15"
          >
            Tgl Lahir
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("aksi", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-center pr-2.5 py-2.5">
            <Img
              className="h-5 md:h-auto mb-4 object-cover rounded-[5px] w-5"
              src="images/img_rectangle65.png"
              alt="rectangleSixtyFive"
            />
            <Img
              className="h-5 md:h-auto mb-4 mr-[35px] object-cover rounded-[5px] w-5"
              alt="rectangleSixtySix"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[91px] py-[3px] text-[15px] text-center text-gray-700"
            size="txtPoppinsBold15"
          >
            Aksi
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[25px] items-start justify-start mx-auto p-6 sm:px-5 w-full">
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[52px] md:px-5 w-[39%] md:w-full">
          <Text
            className="sm:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700"
            size="txtPoppinsMedium30"
          >
            Bidang Kabinet
          </Text>
          <Line className="bg-gray-700 sm:h-0.5 h-[45px] mb-[3px] ml-7 sm:ml-[0] w-0.5 sm:w-full" />
          <Text
            className="mb-[3px] sm:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            Halaman Utama
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[1286px] mb-[45px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x flex flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-1 md:ml-[0] w-full">
              <Text
                className="mb-0.5 md:mt-0 mt-[7px] text-gray-700 text-xl"
                size="txtPoppinsMedium20Gray700"
              >
                Data Bidang Kabinet
              </Text>
              <Text
                className="bg-gray-700 border border-solid border-white-A700_3f h-10 justify-center md:ml-[0] ml-[651px] sm:px-5 px-[33px] py-2 rounded-[5px] text-[15px] text-white-A700 w-[180px]"
                size="txtPoppinsMedium15WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  -
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  Hapus
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                  Artikel
                </span>
              </Text>
              <Text
                className="bg-green-A700 border border-solid border-white-A700_3f h-10 justify-center ml-2.5 md:ml-[0] sm:px-5 px-[25px] py-2 rounded-[5px] text-[15px] text-white-A700 w-[180px]"
                size="txtPoppinsMedium15WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  +
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                  Tambah Artikel
                </span>
              </Text>
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
              <div className="bg-white-A700 border border-black-900_59 border-solid flex md:flex-1 flex-row gap-2.5 items-center justify-center ml-1.5 md:ml-[0] md:mt-0 my-[5px] p-0.5 rounded-[5px] w-[5%] md:w-full">
                <Text
                  className="ml-[5px] text-[15px] text-center text-gray-700"
                  size="txtPoppinsMedium15Gray700"
                >
                  100
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
            <div className="overflow-auto mb-[159px] ml-1 md:ml-[0] mt-[31px] w-full">
              <ReactTable
                columns={table4Columns}
                data={table4Data.current}
                rowClass={
                  "odd:bg-gray-200 even:bg-white-A700 border border-black-900_4c"
                }
                headerClass="bg-white-A700 border border-black-900_4c"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JabatanPage;
