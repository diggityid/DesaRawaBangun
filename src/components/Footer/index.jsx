import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[38px] ml-[286px] mr-[300px] mt-[35px] w-3/5">
          <div className="flex flex-col gap-[11px] items-center justify-center w-full">
            <div className="h-[45px] mr-[638px] relative w-[26%]">
              <div className="absolute md:h-3 h-[23px] inset-y-[0] my-auto right-[0] w-[81%]">
                <Text
                  className="absolute bottom-[0] left-[0] text-[8px] text-white-A700"
                  size="txtPoppinsRegular8WhiteA700"
                >
                  Kec. Indragiri Hulu Prov. Riau
                </Text>
                <Text
                  className="absolute inset-x-[0] mx-auto text-[8.5px] text-white-A700 top-[0] w-max"
                  size="txtPoppinsSemiBold85WhiteA700"
                >
                  INFORMASI DESA RAWA BANGUN RENGAT
                </Text>
              </div>
              <Img
                className="absolute h-[45px] inset-y-[0] left-[0] my-auto object-cover w-[45px]"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen_One"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[42px] w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[42%] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18"
                  >
                    Profile{" "}
                  </Text>
                  <div className="md:h-[101px] h-[118px] mt-0.5 relative w-full">
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-justify text-white-A700 w-full"
                      size="txtPoppinsLight13"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text
                      className="absolute left-[0] text-[13px] text-justify text-white-A700 top-[0]"
                      size="txtPoppinsMedium13"
                    >
                      Desa Rawa Bangun Rengat, Indragiri Hulu, Riau
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-10 w-[31%] md:w-full">
                    <Text
                      className="common-pointer text-[13px] text-justify text-white-A700"
                      size="txtPoppinsLight13"
                      onClick={() => navigate("/halamantentangdesa")}
                    >
                      Selengkapnya
                    </Text>
                    <Img
                      className="h-[11px] md:h-auto mt-1 object-cover w-[11px]"
                      src="images/img_rectangle50.png"
                      alt="rectangleFifty"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[24%] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsSemiBold18WhiteA700"
                  >
                    Kontak Kami
                  </Text>
                  <Text
                    className="text-[13px] text-justify text-white-A700 w-full"
                    size="txtPoppinsMedium13"
                  >
                    Rw. Bangun, Kec. Rengat, Kabupaten Indragiri Hulu, Riau
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-[17px] w-[42%] md:w-full">
                    <Img
                      className="h-3 md:h-auto mt-0.5 object-cover w-3"
                      src="images/img_rectangle10.png"
                      alt="rectangleFiftyOne"
                    />
                    <Text
                      className="ml-[3px] text-[10px] text-justify text-white-A700"
                      size="txtPoppinsLight10WhiteA700"
                    >
                      021 - 8098018
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-1.5 w-[71%] md:w-full">
                    <Img
                      className="h-3 md:h-auto object-cover w-3"
                      src="images/img_rectangle11.png"
                      alt="rectangleFiftyTwo"
                    />
                    <Text
                      className="ml-[3px] text-[10px] text-justify text-white-A700"
                      size="txtPoppinsLight10WhiteA700"
                    >
                      admin.web@bkkbn.go.id
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
