import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const DOWNLOADPage = () => {
  const tableData = React.useRef([
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
    {
      file: "Deskripsi File",
      typefile: "application/pdf",
      ukuranfile: "41.41 KB",
      downloadTwo: "Download",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("file", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start pb-[9px] px-[9px]">
            <Text
              className="text-[10px] text-black-900"
              size="txtPoppinsLight10"
            >
              Nama File{" "}
            </Text>
            <Text className="text-[8px] text-black-900" size="txtPoppinsLight8">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[516px] text-[12.5px] text-black-900_b2"
            size="txtPoppinsRegular125"
          >
            File
          </Text>
        ),
      }),
      tableColumnHelper.accessor("typefile", {
        cell: (info) => (
          <Text
            className="py-[13px] text-[8px] text-black-900"
            size="txtPoppinsLight8"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[246px] pl-1.5 text-[12.5px] text-black-900_b2"
            size="txtPoppinsRegular125"
          >
            Type FIle
          </Text>
        ),
      }),
      tableColumnHelper.accessor("ukuranfile", {
        cell: (info) => (
          <Text
            className="sm:pl-5 pl-[26px] py-[13px] text-[8px] text-black-900"
            size="txtPoppinsLight8"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[242px] text-[12.5px] text-black-900_b2"
            size="txtPoppinsRegular125"
          >
            Ukuran File
          </Text>
        ),
      }),
      tableColumnHelper.accessor("downloadTwo", {
        cell: (info) => (
          <Text
            className="border border-black-900_59 border-solid pl-[9px] py-[13px] rounded-sm text-[8px] text-black-900_b2"
            size="txtPoppinsRegular8Black900b2"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[108px] text-[12.5px] text-black-900_b2"
            size="txtPoppinsRegular125"
          >
            Download
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
              <div className="h-[45px] md:ml-[0] ml-[141px] md:px-5 relative w-[16%] md:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[8.5px] text-black-900"
                      size="txtPoppinsSemiBold85"
                    >
                      INFORMASI DESA RAWA BANGUN RENGAT
                    </Text>
                    <Text
                      className="text-[8px] text-black-900"
                      size="txtPoppinsLight8"
                    >
                      Kec. Indragiri Hulu Prov. Riau
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[45px] inset-y-[0] left-[0] my-auto object-cover w-[45px]"
                  src="images/img_rectangle14.png"
                  alt="rectangleFourteen"
                />
              </div>
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[460px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
                <Text
                  className="text-[8.5px] text-green-600"
                  size="txtPoppinsSemiBold85Green600"
                >
                  PROFILE DESA
                </Text>
                <Img
                  className="h-1 md:h-auto object-cover w-1"
                  src="images/img_rectangle43.png"
                  alt="rectangleFortyThree"
                />
              </div>
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
                <Text
                  className="text-[8.5px] text-green-600"
                  size="txtPoppinsSemiBold85Green600"
                >
                  PEMERINTAHAN
                </Text>
                <Img
                  className="h-1 md:h-auto object-cover w-1"
                  src="images/img_rectangle43.png"
                  alt="rectangleFortyFour"
                />
              </div>
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[6%] md:w-full">
                <Text
                  className="text-[8.5px] text-green-600"
                  size="txtPoppinsSemiBold85Green600"
                >
                  INFORMASI PUBLIK
                </Text>
                <Img
                  className="h-1 md:h-auto object-cover w-1"
                  src="images/img_rectangle43.png"
                  alt="rectangleFortyFive"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5">
                <Text
                  className="text-[8.5px] text-green-600"
                  size="txtPoppinsSemiBold85Green600"
                >
                  DESTINASI WISATA
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-row gap-2 items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
            />
            <Text
              className="text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Download
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[163px] mt-8 md:px-5">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Download
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[135px] items-center mt-3.5 w-full">
          <div className="overflow-auto md:px-5 w-[78%]">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DOWNLOADPage;
