import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HALAMANGEOGRAFISPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
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
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[465px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
              onClick={() => navigate("/")}
            >
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
            <div
              className="common-pointer flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[50px] md:mt-0 mt-[11px] md:px-5 w-[5%] md:w-full"
              onClick={() => navigate("/halamanstrukturdesa")}
            >
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
        <div className="bg-gray-300 flex flex-row items-center justify-start max-w-[1115px] mx-auto p-[5px] md:px-5 rounded-[5px] w-full">
          <Img
            className="common-pointer h-[15px] md:h-auto ml-1.5 object-cover w-[2%]"
            src="images/img_rectangle55.png"
            alt="rectangleFiftyFive"
            onClick={() => navigate("/halamantentangdesa")}
          />
          <Text
            className="common-pointer ml-[7px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
            onClick={() => navigate("/halamantentangdesa")}
          >
            <span className="text-black-900_99 font-poppins text-left font-normal">
              /{" "}
            </span>
            <span className="text-green-600 font-poppins text-left font-normal">
              Profile Desa{" "}
            </span>
          </Text>
          <Text
            className="ml-[25px] text-[8px] text-black-900_99"
            size="txtPoppinsRegular8"
          >
            / Geografis dan Demografis
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1103px] mt-[34px] mx-auto md:px-5 w-full">
          <Text
            className="text-[22px] text-green-600 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Geografis Desa Rawa Bangun{" "}
          </Text>
          <Line className="bg-teal-900 h-px w-[51%]" />
          <Text
            className="mt-7 text-[15px] text-black-900_99 text-justify w-full"
            size="txtPoppinsLight15"
          >
            <>
              Secara administratif, Desa Rawa Bangun terletak di Kecamatan
              Rengat, Kabupaten Indragiri Hulu, Provinsi Riau. Secara geografis,
              Desa Rawa Bangun dikelilingi oleh tanggul dan berbatasan dengan
              Desa Sungai Raya baik dari sebelah Utara, Selatan, dan Barat,
              sedangkan sebelah Timurnya berbatasan dengan Desa Rawa Asri. Desa
              Rawa Bangun merupakan desa transmigrasi yang pembukaan lahannya
              dilakukan pada tahun 1999 yang memiliki luas wilayah + 800
              hektare. Desa Rawa Bangun berkembang hingga kini secara terbagi
              dalam 11 RT, 4 RW, dan 3 Dusun. Desa Rawa Bangun memiliki kontur
              yang landai/datar sehingga tidak ada bagian wilayah yang berbukit.
              Secara geografis, Desa Rawa Bangun berada pada koordinat 0°
              24&#39; 54,73&quot; LS - 0° 26&#39; 39,22&quot; LS dan 102°
              33&#39; 51,19&quot; BT - 102° 35&#39; 49,54&quot; BT.
            </>
          </Text>
          <Img
            className="h-[616px] sm:h-auto mt-[102px] object-cover w-full"
            src="images/img_rectangle56.png"
            alt="rectangleFiftySix"
          />
          <Text
            className="mt-14 text-[15px] text-black-900_99 text-justify"
            size="txtPoppinsLight15"
          >
            <span className="text-black-900_99 font-poppins font-light">
              <>
                {" "}
                Di Desa ini dari awal juga membentuk kepemimpinan sebelum Bapak
                Aswadi S.Pd.i Menjabat Sebagai Kepala Desa ada beberapa orang
                yang memimpin desa ini yaitu :<br /> 1. Bapak Samijo Pada Tahun
                1999 - 2001
                <br /> 2. Bapak Giran Pada Tahun 2002 - 2004
                <br /> 3. Bapak Gelundung Pada Tahun 2005 – 2017
                <br /> 4. Bapak Aswadi S.Pd.i Pada Tahun 2018 sampai sekarang
                <br /> Dan di Desa ini juga meiliki Dusun diantaranya Yaitu :
                <br /> 1. Margo Utomo (Dusun 1) Kepala Dusunnya Heru Widodo
                <br /> 2. Sidomulyo (Dusun 2) Kepala Dusunnya Deni Arnold
                Samosir
                <br /> 3. Sidodadi (Dusun 3) Kepala Dusunnya Hendra Kurniawan
                <br />
                <br /> Dataran wilayah Desa Rawa Bangun berdasarkan jenis
                tanahnya terbagi menjadi dua yaitu tanah gambut dan tanah
                alluvial. Luas tanah alluvial yang ada di Desa Rawa Bangun
                adalahsebesar 850,19 hektare. Tanah alluvial di Desa Rawa Bangun
                tersebar di jalur 8 yang memanjang ke arah selatan di area
                perkebunan kelapa sawit. Secara fisik, tanah aluvial mempunyai
                tekstur yang padat dan berwarna putih kecoklatan. Berdasarkan
                asal bahan pembentuk tanahnya, tanah di alam dibedakan atas
                tanah organik (tanah gambut) dan tanah mineral. Tanah organik
                dibedakan lebih rinci berdasarkan tingkat dekomposisi, komposisi
                bahan penyusun dan kedalaman tanahnya. Sedangkan tanah mineral
                dibedakan berdasarkan perkembangan morfologinya, terdiri atas:{" "}
              </>
            </span>
            <a
              href="javascript:"
              className="text-black-900_99 font-poppins font-light underline"
            >
              [1]
            </a>
            <span className="text-black-900_99 font-poppins font-light">
              <>
                {" "}
                <br />
                a. Tanah-tanah dangkal atau belum berkembang seperti Litosol,
                Ranker, Renzina, Aluvial, Regosol, Grumusol;
                <br />
                b. Tanah-tanah yang sudah berkembang, seperti Podsolik Merah
                Kuning, Mediteran, Latosol, Andosol.
                <br />
                <br /> Tanah Aluvial terbentuk dari bahan endapan muda hasil
                dari aktivitas sungai (aluvium), pada profilnya masih tampak
                jelas adanya lapisan-lapisan tanah yang baru terbentuk. Tanah
                ini tersebar sepanjang jalur aliran sungai atau pada dataran
                aluvial.
              </>
            </span>
            <a
              href="javascript:"
              className="text-black-900_99 font-poppins font-light underline"
            >
              <>
                [2]
                <br />
              </>
            </a>
            <span className="text-black-900_99 font-poppins font-light">
              {" "}
              Bagian terbesar dari lahan yang ada di Desa Rawa Bangun adalah
              terselimuti oleh tanah gambut.Lebih dari separuh luas wilayah Desa
              Rawa Bangun adalah ditutupi dengan gambut dengan luasan sebesar
              850,19 hektare. Pemanfaatan lahan di atas tanah gambut sebagian
              besar adalah digunakan untuk perkebunan sawitseluas 610,94
              hektare, kebun karet seluas 2,22 hektare, kebun campuran seluas
              68,42 hektare, pemukiman wargaseluas 84.34 hektare dan semak-semak
              yang merupakan bekas hutan dan kebun sawit yang terbakar seluas
              97,37 hektare.
            </span>
          </Text>
        </div>
        <Footer className="bg-green-600 flex items-center justify-center mt-[315px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HALAMANGEOGRAFISPage;
