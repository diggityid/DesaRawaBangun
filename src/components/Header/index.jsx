import React from "react";

import { Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row items-start justify-center md:ml-[0] ml-[300px] md:mt-0 my-[15px] w-[8%] md:w-full">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
          <Text
            className="ml-[5px] mt-0.5 text-white-A700 text-xs"
            size="txtPoppinsMedium12WhiteA700"
          >
            021-8098018
          </Text>
        </div>
        <Line className="bg-white-A700 h-[25px] md:h-px ml-5 md:ml-[0] md:mt-0 my-[15px] md:w-full w-px" />
        <div className="flex flex-row items-start justify-center md:ml-[0] ml-[17px] md:mt-0 my-[15px] w-[13%] md:w-full">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_rectangle11.png"
            alt="rectangleEleven"
          />
          <Text
            className="ml-[5px] mt-1 text-white-A700 text-xs underline"
            size="txtPoppinsMedium12WhiteA700"
          >
            admin.web@bkkbn.go.id
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center md:ml-[0] ml-[321px] mr-[305px] md:mt-0 my-[15px] w-[14%] md:w-full">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_rectangle12.png"
            alt="rectangleTwelve"
          />
          <Text
            className="md:ml-[0] ml-[5px] md:mt-0 mt-1 text-white-A700 text-xs"
            size="txtPoppinsMedium12WhiteA700"
          >
            Indragiri Hilir, Provinsi Riau
          </Text>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
