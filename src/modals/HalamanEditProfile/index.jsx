import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const HalamanEditProfileModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-300_01 border-black-900_33 border-l border-solid border-t flex flex-col items-center justify-start p-[38px] md:px-5 rounded-[10px] w-full">
          <div className="flex sm:flex-col flex-row sm:gap-[45px] items-start justify-between mb-[5px] w-[96%] md:w-full">
            <div className="h-[219px] relative w-[62%] sm:w-full">
              <Button
                className="border-black-900_33 border-solid border-t border-x cursor-pointer font-medium leading-[normal] mb-[-1px] min-w-[70px] rounded-tl-[10px] rounded-tr-[10px] text-[6px] text-center z-[1]"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                Unggah Foto
              </Button>
              <div className="bg-blue_gray-100 border-black-900_33 border-l border-solid border-t flex flex-col gap-[5px] items-center justify-center mt-auto mx-auto p-[73px] md:px-10 sm:px-5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shadow-bs2 w-full">
                <Text
                  className="mt-4 text-[4px] text-black-900"
                  size="txtPoppinsLight4"
                >
                  Select an image from your computer (JPEG or PNG)
                </Text>
                <Text
                  className="bg-blue_gray-100 h-2 justify-center mb-[18px] outline outline-[1px] outline-black-900_7f px-[7px] rounded-sm text-[4px] text-black-900 text-center w-[29px]"
                  size="txtPoppinsLight4"
                >
                  Browse
                </Text>
              </div>
            </div>
            <Img
              className="h-[110px] md:h-auto sm:mt-0 mt-[23px] object-cover w-[110px]"
              src="images/img_rectangle45.png"
              alt="rectangleFortyFive"
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default HalamanEditProfileModal;
