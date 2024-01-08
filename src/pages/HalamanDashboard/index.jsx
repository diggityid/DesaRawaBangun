import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, List, Text } from "components";

const HalamanDashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-5 md:h-auto object-cover w-5"
          src="images/img_rectangle11_1.png"
          alt="rectangleEleven_One"
        />
      ),
      label: (
        <>
          <Text>Artikel</Text>
          <Img
            className="h-[15px] md:h-auto object-cover w-[15px]"
            src="images/img_listview.png"
            alt="listview"
          />
        </>
      ),
      href: "/artikel",
      active: window.location.pathname === "/artikel",
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto mb-0.5 object-cover w-5"
          src="images/img_rectangle11_2.png"
          alt="rectangleEleven_Two"
        />
      ),
      label: <Text>Tentang Desa</Text>,
      href: "/halamantentangdesa",
      active: window.location.pathname === "/halamantentangdesa",
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto object-cover w-5"
          src="images/img_rectangle11_3.png"
          alt="rectangleEleven_Three"
        />
      ),
      label: <Text>Visi & Misi Desa</Text>,
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto object-cover w-5"
          src="images/img_rectangle11_4.png"
          alt="rectangleEleven_Four"
        />
      ),
      label: <Text>Sejarah Desa</Text>,
      href: "/editsejarahdesa",
      active: window.location.pathname === "/editsejarahdesa",
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto mb-0.5 object-cover w-5"
          src="images/img_rectangle11_5.png"
          alt="rectangleEleven_Five"
        />
      ),
      label: <Text>Geografi Desa</Text>,
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto mb-0.5 object-cover w-5"
          src="images/img_rectangle11_6.png"
          alt="rectangleEleven_Six"
        />
      ),
      label: <Text>Demografi Desa</Text>,
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto object-cover w-5"
          src="images/img_rectangle11_7.png"
          alt="rectangleEleven_Seven"
        />
      ),
      label: <Text>Galeri</Text>,
      href: "/galeridesa",
      active: window.location.pathname === "/galeridesa",
    },
  ];
  const sideBarMenu1 = [
    {
      icon: (
        <Img
          className="h-[17px] md:h-auto object-cover w-[17px]"
          src="images/img_rectangle11_17x17.png"
          alt="rectangleEleven_Eight"
        />
      ),
      label: "Kepengurusan",
    },
    {
      icon: (
        <Img
          className="h-[17px] md:h-auto object-cover w-[17px]"
          src="images/img_rectangle11_8.png"
          alt="rectangleEleven_Nine"
        />
      ),
      label: "Jabatan",
      href: "/jabatan",
      active: window.location.pathname === "/jabatan",
    },
    {
      icon: (
        <Img
          className="h-5 md:h-auto mb-0.5 object-cover w-5"
          src="images/img_rectangle11_9.png"
          alt="rectangleEleven_Ten"
        />
      ),
      label: "Anggota",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 border-b border-black-900_3f border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between shadow-bs3 w-full">
            <div className="bg-white-A700 border-b border-black-900_3f border-r border-solid h-[60px] md:px-5 w-[13%]"></div>
            <div className="bg-white-A700 border-b border-black-900_3f border-l border-solid flex flex-row gap-[9px] items-center justify-center p-[7px] md:px-5">
              <Img
                className="h-[45px] md:h-auto ml-2 rounded-[50%] w-[45px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <div className="md:h-[17px] h-[31px] mr-[27px] relative w-[58%]">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xs top-[0] w-max"
                  size="txtPoppinsRegular12Black900"
                >
                  Lorem Ipsum Dorum
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-[10px] text-black-900_66"
                  size="txtPoppinsRegular10Black90066"
                >
                  administrator
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[183px] bg-white-A700 border-black-900_3f border-r border-solid flex h-screen md:hidden justify-start overflow-auto shadow-bs2 top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "9px 9px 9px 25px",
                    gap: "10px",
                    borderColor: "transparent",
                    borderBottomWidth: "1px",
                    borderRightWidth: "1px",
                    borderStyle: "solid",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: 500,
                    fontSize: "12px",
                    [`&:hover, &.ps-active`]: {
                      borderColor: "#0000003f",
                      backgroundColor: "#ffffffff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[330px] mt-6 pt-[11px] w-full"
              >
                <div className="flex flex-col items-center justify-start pb-2.5 w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_rectangle11_20x20.png"
                        alt="rectangleEleven"
                      />
                    }
                  >
                    <Text>Halaman Utama</Text>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_rectangle11_20x20.png"
                        alt="rectangleTwelve"
                      />
                    }
                  >
                    <Text>Admin Dashboard</Text>
                  </MenuItem>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start mt-[15px] w-full">
                  <Text
                    className="text-[13px] text-black-900_66"
                    size="txtPoppinsSemiBold13Black90066"
                  >
                    MEDIA DAN INFORMASI
                  </Text>
                  <div className="flex flex-col gap-[-1.57px] items-center justify-start w-full">
                    {sideBarMenu?.map((menu, i) => (
                      <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                        {menu.label}
                      </MenuItem>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-end mt-[25px] w-full">
                  <Text
                    className="text-[13px] text-black-900_66"
                    size="txtPoppinsSemiBold13Black90066"
                  >
                    STRUKTUR ORGANISASI
                  </Text>
                  <div className="flex flex-col gap-[1.85px] items-center justify-start w-full">
                    {sideBarMenu1?.map((menu, i) => (
                      <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                        {menu.label}
                      </MenuItem>
                    ))}
                  </div>
                </div>
              </Menu>
            </Sidebar>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:mt-0 mt-[35px] w-[84%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-red-500 flex flex-col items-end justify-start pl-3 rounded-[10px] w-full">
                <div className="bg-white-A700 border-black-900_4c border-solid border-t flex flex-col gap-[11px] items-start justify-center p-[15px] rounded-[10px]">
                  <Text
                    className="mt-0.5 text-[15px] text-gray-700"
                    size="txtPoppinsMedium15Gray700"
                  >
                    Jumlah Artikel
                  </Text>
                  <Text
                    className="mb-[9px] sm:text-[21px] md:text-[23px] text-[25px] text-red-500"
                    size="txtPoppinsBold25"
                  >
                    10
                  </Text>
                </div>
              </div>
              <div className="bg-light_blue-A200 flex flex-col items-end justify-start pl-3 rounded-[10px] w-full">
                <div className="bg-white-A700 border-black-900_33 border-solid border-t flex flex-col gap-[9px] items-start justify-center p-[15px] rounded-[10px]">
                  <Text
                    className="mt-[5px] text-[15px] text-gray-700"
                    size="txtPoppinsMedium15Gray700"
                  >
                    Jumlah Pengumuman
                  </Text>
                  <Text
                    className="mb-2 sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-A200"
                    size="txtPoppinsBold25LightblueA200"
                  >
                    10
                  </Text>
                </div>
              </div>
              <div className="bg-teal-A400 flex flex-col items-end justify-start pl-3 rounded-[10px] w-full">
                <div className="bg-white-A700 border-black-900_33 border-solid border-t flex flex-col gap-[9px] items-start justify-center p-[15px] rounded-[10px]">
                  <Text
                    className="mt-[5px] text-[15px] text-gray-700"
                    size="txtPoppinsMedium15Gray700"
                  >
                    Jumlah Kegiatan
                  </Text>
                  <Text
                    className="mb-2 sm:text-[21px] md:text-[23px] text-[25px] text-teal-A400"
                    size="txtPoppinsBold25TealA400"
                  >
                    10
                  </Text>
                </div>
              </div>
              <div className="bg-yellow-A400 flex flex-col items-end justify-start pl-3 rounded-[10px] w-full">
                <div className="bg-white-A700 border-black-900_33 border-solid border-t flex flex-col gap-[9px] items-start justify-center p-[15px] rounded-[10px]">
                  <Text
                    className="mt-[5px] text-[15px] text-gray-700"
                    size="txtPoppinsMedium15Gray700"
                  >
                    Jumlah Pengunjung
                  </Text>
                  <Text
                    className="mb-2 sm:text-[21px] md:text-[23px] text-[25px] text-yellow-A400"
                    size="txtPoppinsBold25YellowA400"
                  >
                    255
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanDashboardPage;
