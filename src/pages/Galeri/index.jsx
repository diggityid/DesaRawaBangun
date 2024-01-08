import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";

const GaleriPage = () => {
  const table3Data = React.useRef([
    {
      no: "1",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Ditapmpilkan",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "2",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Ditampilkan",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "3",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Ditampilkan",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "4",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Tidak Ditampilkan",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "5",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Tidak Ditampilkan ",
      aksi: "images/img_rectangle66.png",
    },
    {
      no: "6",
      rownama: "makrab 2023",
      rowlihat: "images/img_rectangle64.png",
      rowtanggal: "30-12-2023",
      rowlokasi: "Jl. babarsari, Kota Yogyakarta",
      rowstatusone: "Tidak Ditampilkan",
      aksi: "images/img_rectangle66.png",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("no", {
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
            className="min-w-[41px] pl-1 py-[3px] text-[15px] text-center text-gray-700"
            size="txtPoppinsBold15"
          >
            No
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("rownama", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-center p-0.5">
            <Text
              className="mt-[7px] text-gray-700 text-xs"
              size="txtPoppinsMedium12Gray700"
            >
              Makrab 2023 hari ke-2 Panitia
            </Text>
            <Text
              className="mb-1.5 mt-0.5 text-gray-700 text-xs"
              size="txtPoppinsMedium12Gray700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[194px] items-center justify-center min-w-[266px] pr-[3px] py-[3px]">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Nama
            </Text>
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyThree"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlihat", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-[9px]">
            <Img
              className="h-5 md:h-auto mb-[17px] object-cover rounded-[5px] w-5"
              alt="rectangleSixtyFour"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[67px] items-start justify-start min-w-[129px] pr-0.5 py-0.5">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Lihat
            </Text>
            <Img
              className="h-[15px] md:h-auto mt-0.5 object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyTwo"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowtanggal", {
        cell: (info) => (
          <Text
            className="pb-7 pt-[9px] text-gray-700 text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[67px] items-center justify-start min-w-[156px]">
            <Text
              className="mt-[3px] text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Tanggal
            </Text>
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyOne"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlokasi", {
        cell: (info) => (
          <Text
            className="pb-[26px] pt-[11px] text-gray-700 text-justify text-xs"
            size="txtPoppinsMedium12Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[284px] items-center justify-center min-w-[357px] pr-0.5 py-0.5">
            <Text
              className="text-[15px] text-center text-gray-700"
              size="txtPoppinsBold15"
            >
              Lokasi
            </Text>
            <Img
              className="h-[15px] md:h-auto object-cover w-[15px]"
              src="images/img_rectangle63.png"
              alt="rectangleFiftyNine"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowstatusone", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-center pr-2.5 py-2.5">
            <div className="bg-green-A700_01 h-5 mb-4 rounded-[50%] w-5"></div>
            <Text
              className="mr-[72px] text-gray-700 text-xs"
              size="txtPoppinsMedium12Gray700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[115px] items-center justify-center min-w-[190px] pr-[3px] py-[3px]">
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
      table3ColumnHelper.accessor("aksi", {
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
      <div className="bg-white-A700 flex flex-col font-poppins gap-7 items-start justify-start mx-auto p-6 sm:px-5 w-full">
        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[52px] md:px-5 w-[29%] md:w-full">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-700"
            size="txtPoppinsMedium30"
          >
            Galeri
          </Text>
          <Line className="bg-gray-700 sm:h-0.5 h-[45px] sm:ml-[0] ml-[27px] w-0.5 sm:w-full" />
          <Text
            className="sm:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-green-600"
            size="txtPoppinsMedium30Green600"
          >
            Halaman Utama
          </Text>
        </div>
        <div className="flex flex-col items-center max-w-[1286px] mb-[45px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-black-900_33 border-solid border-t border-x flex flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] shadow-bs2 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between ml-1 md:ml-[0] w-full">
              <Text
                className="text-gray-700 text-xl"
                size="txtPoppinsMedium20Gray700"
              >
                Data Galeri
              </Text>
              <Input
                name="buttontambahart"
                placeholder="+ Tambah Artikel"
                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-[15px] text-left w-full"
                wrapClassName="border border-solid border-white-A700_3f"
                shape="round"
                color="green_A700"
                size="md"
              ></Input>
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
            <div className="overflow-auto mb-[159px] ml-1 md:ml-[0] mt-[31px] w-full">
              <ReactTable
                columns={table3Columns}
                data={table3Data.current}
                rowClass={"bg-gray-200 border border-black-900_4c"}
                headerClass="bg-white-A700 border border-black-900_4c"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GaleriPage;
