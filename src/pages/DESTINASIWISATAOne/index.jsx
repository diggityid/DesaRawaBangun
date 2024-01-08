import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const DESTINASIWISATAOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-green-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] w-full">
              <div className="h-[45px] md:ml-[0] ml-[142px] md:px-5 relative w-[16%] md:w-full">
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
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[458px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full">
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
          <div className="bg-gray-300 flex flex-row items-start justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
            <Img
              className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
              onClick={() => navigate("/destinasiwisata")}
            />
            <Text
              className="common-pointer ml-[7px] text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
              onClick={() => navigate("/destinasiwisata")}
            >
              <span className="text-black-900_99 font-poppins text-left font-normal">
                /{" "}
              </span>
              <span className="text-green-600 font-poppins text-left font-normal">
                Destinasi Wisata
              </span>
            </Text>
            <Text
              className="ml-8 text-[8px] text-black-900_99"
              size="txtPoppinsRegular8"
            >
              / Judul Berita
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[163px] mt-[31px] md:px-5">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Nama Destinasi Wisata
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-36 items-center mt-11 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1115px] mx-auto md:px-5 w-full">
            <Text
              className="text-[10px] text-black-900"
              size="txtPoppinsLight10"
            >
              Nov 01, 2020
            </Text>
            <Img
              className="h-[340px] sm:h-auto object-cover w-full"
              src="images/img_rectangle87_1.png"
              alt="rectangle124"
            />
            <Text
              className="mt-[109px] text-[12.5px] text-black-900_99 text-justify"
              size="txtPoppinsRegular125Black90099"
            >
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
                ante in nibh mauris cursus. Tincidunt arcu non sodales neque
                sodales ut etiam sit amet. Pellentesque eu tincidunt tortor
                aliquam nulla facilisi cras fermentum odio. Lectus nulla at
                volutpat diam ut. Blandit turpis cursus in hac habitasse.
                Pellentesque id nibh tortor id aliquet. Aliquet nibh praesent
                tristique magna sit amet. Sed egestas egestas fringilla
                phasellus. Parturient montes nascetur ridiculus mus mauris vitae
                ultricies leo integer. Tortor at risus viverra adipiscing at.
                Non tellus orci ac auctor augue mauris. In tellus integer
                feugiat scelerisque. Aliquet nec ullamcorper sit amet risus.
                Ante in nibh mauris cursus. Aliquam id diam maecenas ultricies.
                Vitae justo eget magna fermentum iaculis eu. Pulvinar etiam non
                quam lacus suspendisse faucibus interdum. Viverra justo nec
                ultrices dui sapien.
                <br />
                <br />
                Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                quam. Sit amet commodo nulla facilisi nullam vehicula. Amet
                porttitor eget dolor morbi. Magna etiam tempor orci eu lobortis
                elementum nibh tellus molestie. Amet nisl suscipit adipiscing
                bibendum est ultricies integer quis auctor. Quisque non tellus
                orci ac. Nunc eget lorem dolor sed viverra ipsum. Vitae aliquet
                nec ullamcorper sit amet. Bibendum ut tristique et egestas quis
                ipsum suspendisse ultrices gravida. Nulla facilisi cras
                fermentum odio eu feugiat pretium. Lacus luctus accumsan tortor
                posuere. Interdum consectetur libero id faucibus nisl tincidunt
                eget nullam non. Semper quis lectus nulla at. Aliquam sem
                fringilla ut morbi.
                <br />
                <br />
                Eget nulla facilisi etiam dignissim diam quis enim. Ut diam quam
                nulla porttitor. Et pharetra pharetra massa massa ultricies.
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                pellentesque. Nunc mattis enim ut tellus. Facilisi cras
                fermentum odio eu feugiat pretium nibh ipsum consequat. Quam
                quisque id diam vel quam elementum. Velit sed ullamcorper morbi
                tincidunt ornare massa eget egestas purus. Dui faucibus in
                ornare quam viverra orci sagittis eu volutpat. Viverra nibh cras
                pulvinar mattis. Luctus accumsan tortor posuere ac ut consequat
                semper. Tellus mauris a diam maecenas sed enim ut sem. Sem
                viverra aliquet eget sit amet. Pretium lectus quam id leo in
                vitae turpis massa. At auctor urna nunc id cursus metus aliquam
                eleifend.
                <br />
                <br />
                Lorem donec massa sapien faucibus et molestie ac feugiat. Sit
                amet consectetur adipiscing elit ut aliquam. Lacus sed turpis
                tincidunt id aliquet. Amet tellus cras adipiscing enim eu
                turpis. Non curabitur gravida arcu ac tortor. Venenatis lectus
                magna fringilla urna. Adipiscing tristique risus nec feugiat in
                fermentum posuere urna nec. Tellus elementum sagittis vitae et
                leo. Imperdiet nulla malesuada pellentesque elit eget gravida
                cum. Arcu non sodales neque sodales. Aliquet nibh praesent
                tristique magna sit.
                <br />
                <br />
                Amet consectetur adipiscing elit pellentesque habitant morbi
                tristique senectus et. Justo donec enim diam vulputate ut
                pharetra. Sed arcu non odio euismod lacinia at quis. Mauris
                augue neque gravida in fermentum et. Laoreet non curabitur
                gravida arcu ac. Neque volutpat ac tincidunt vitae semper quis
                lectus nulla. Est ultricies integer quis auctor elit sed
                vulputate. Euismod quis viverra nibh cras pulvinar. Viverra
                accumsan in nisl nisi. Pulvinar proin gravida hendrerit lectus
                a. Pretium nibh ipsum consequat nisl. Auctor neque vitae tempus
                quam pellentesque nec nam. Arcu dui vivamus arcu felis bibendum
                ut tristique et. Nisl nisi scelerisque eu ultrices. Velit
                egestas dui id ornare arcu odio ut. Pharetra vel turpis nunc
                eget lorem dolor sed. Velit laoreet id donec ultrices tincidunt
                arcu.
              </>
            </Text>
          </div>
          <Footer1 className="bg-green-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DESTINASIWISATAOnePage;
