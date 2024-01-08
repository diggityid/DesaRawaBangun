import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const KategoriTagPage = () => {
  const table2Data = React.useRef([
    {
      rowno: "alumni",
      rowrectanglesixtythree: "2",
      rowartikelone: "Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "alumni",
      rowrectanglesixtythree: "2",
      rowartikelone: "Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "berproses",
      rowrectanglesixtythree: "2",
      rowartikelone: "Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "berproses",
      rowrectanglesixtythree: "2",
      rowartikelone: "Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "bidang keperempuanan",
      rowrectanglesixtythree: "2",
      rowartikelone: "Tidak Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "bidang keperempuanan",
      rowrectanglesixtythree: "2",
      rowartikelone: "Tidak Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
    {
      rowno: "alumni",
      rowrectanglesixtythree: "2",
      rowartikelone: "Tidak Dipakai",
      rowstatusone: "images/img_rectangle66.png",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowno", {
        cell: (info) => (
          <div className="flex flex-col justify-start p-2.5">
            <div className="flex flex-row gap-[25px] items-start justify-start mr-[364px] w-[17%] md:w-full">
              <Text
                className="text-center text-gray-700 text-xs"
                size="txtPoppinsMedium12Gray700"
              >
                1
              </Text>
              <Text
                className="text-gray-700 text-xs"
                size="txtPoppinsMedium12Gray700"
              >
                Alumni
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[30px] text-[9px] text-gray-700"
              size="txtPoppinsMedium9"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-4 items-center justify-start min-w-[459px] p-[3px]">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              No
            </Text>
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Nama
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowrectanglesixtythree", {
        cell: (info) => (
          <Text
            className="pb-[23px] pt-[15px] text-gray-700 text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[22px] pr-[7px] py-[7px]">
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyThree"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowartikelone", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-center pr-[15px] py-[15px]">
            <div className="bg-green-A700_01 h-5 mb-[7px] rounded-[10px] w-[19px]"></div>
            <Text
              className="ml-1 mr-[195px] text-gray-700 text-xs"
              size="txtPoppinsMedium12Gray700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[152px] items-center justify-center min-w-[225px] pr-0.5 py-0.5">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Artikel
            </Text>
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyOne"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowstatusone", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-center pr-[15px] py-[15px]">
            <Img
              className="h-5 md:h-auto mb-[7px] object-cover rounded-[5px] w-5"
              src="images/img_rectangle65.png"
              alt="rectangleSixtyFive"
            />
            <Img
              className="h-5 md:h-auto mb-[7px] ml-1 mr-[186px] object-cover rounded-[5px] w-5"
              alt="rectangleSixtySix"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[206px] items-center justify-center min-w-[279px] pr-[3px] py-[3px]">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Status
            </Text>
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleFiftyEight"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("aksi", {
        cell: (info) => <div className=""></div>,
        header: (info) => (
          <Text
            className="min-w-[245px] py-[3px] text-[15px] text-center text-gray-700"
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
      <div className="bg-white-A700 flex flex-col font-poppins gap-[25px] items-start justify-start mx-auto p-[23px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[53px] md:px-5 w-[45%] md:w-full">
          <Text
            className="md:mt-0 mt-1 text-3xl sm:text-[26px] md:text-[28px] text-gray-700"
            size="txtPoppinsMedium30"
          >
            Artikel Tag
          </Text>
          <Line className="bg-gray-700 md:h-0.5 h-[45px] md:ml-[0] ml-[54px] md:mt-0 my-0.5 w-0.5 md:w-full" />
          <Text
            className="mb-[3px] md:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            Halaman Utama
          </Text>
          <Text
            className="mb-1 ml-2.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
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
            <div className="flex flex-row md:gap-10 items-end justify-between ml-1 md:ml-[0] w-full">
              <Text
                className="mb-0.5 mt-[7px] text-gray-700 text-xl"
                size="txtPoppinsMedium20Gray700"
              >
                Tabel Artikel Tag
              </Text>
              <Text
                className="bg-green-A700 border border-solid border-white-A700_3f h-10 justify-center px-[18px] py-2 rounded-[5px] text-[15px] text-white-A700 w-[115px]"
                size="txtPoppinsMedium15WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  +
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                  Tambah{" "}
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
            <div className="overflow-auto mb-24 ml-1 md:ml-[0] mt-[31px] w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
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

export default KategoriTagPage;
