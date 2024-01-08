import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Jabatan = React.lazy(() => import("pages/Jabatan"));
const EditSejarahDesa = React.lazy(() => import("pages/EditSejarahDesa"));
const Galeri = React.lazy(() => import("pages/Galeri"));
const KategoriTag = React.lazy(() => import("pages/KategoriTag"));
const KategoriArtikel = React.lazy(() => import("pages/KategoriArtikel"));
const DaftarArtikel = React.lazy(() => import("pages/DaftarArtikel"));
const Artikel = React.lazy(() => import("pages/Artikel"));
const HalamanUbahProfile = React.lazy(() => import("pages/HalamanUbahProfile"));
const HalamanDashboard = React.lazy(() => import("pages/HalamanDashboard"));
const HalamanLupaPassword = React.lazy(
  () => import("pages/HalamanLupaPassword"),
);
const HalamanLogin = React.lazy(() => import("pages/HalamanLogin"));
const DOWNLOAD = React.lazy(() => import("pages/DOWNLOAD"));
const DESTINASIWISATAOne = React.lazy(() => import("pages/DESTINASIWISATAOne"));
const DESTINASIWISATA = React.lazy(() => import("pages/DESTINASIWISATA"));
const BERITADESA = React.lazy(() => import("pages/BERITADESA"));
const BERITADESAOne = React.lazy(() => import("pages/BERITADESAOne"));
const GALERIDESA = React.lazy(() => import("pages/GALERIDESA"));
const AGENDAKEGIATANTwo = React.lazy(() => import("pages/AGENDAKEGIATANTwo"));
const AGENDAKEGIATANOne = React.lazy(() => import("pages/AGENDAKEGIATANOne"));
const AGENDAKEGIATAN = React.lazy(() => import("pages/AGENDAKEGIATAN"));
const ISIPENGUMUMANTwo = React.lazy(() => import("pages/ISIPENGUMUMANTwo"));
const ISIPENGUMUMANOne = React.lazy(() => import("pages/ISIPENGUMUMANOne"));
const PENGUMUMAN = React.lazy(() => import("pages/PENGUMUMAN"));
const PERANGKATDESAOne = React.lazy(() => import("pages/PERANGKATDESAOne"));
const KEPALADESA = React.lazy(() => import("pages/KEPALADESA"));
const LEMBAGAOne = React.lazy(() => import("pages/LEMBAGAOne"));
const HALAMANLEMBAGADESA = React.lazy(() => import("pages/HALAMANLEMBAGADESA"));
const HALAMANPERANGKATDESA = React.lazy(
  () => import("pages/HALAMANPERANGKATDESA"),
);
const HALAMANSTRUKTURDESA = React.lazy(
  () => import("pages/HALAMANSTRUKTURDESA"),
);
const HALAMANDEMOGRAFIS = React.lazy(() => import("pages/HALAMANDEMOGRAFIS"));
const HALAMANTENTANGDESA = React.lazy(() => import("pages/HALAMANTENTANGDESA"));
const HALAMANBERANDA = React.lazy(() => import("pages/HALAMANBERANDA"));
const HALAMANGEOGRAFIS = React.lazy(() => import("pages/HALAMANGEOGRAFIS"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HALAMANBERANDA />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/halamangeografis" element={<HALAMANGEOGRAFIS />} />
          <Route path="/halamantentangdesa" element={<HALAMANTENTANGDESA />} />
          <Route path="/halamandemografis" element={<HALAMANDEMOGRAFIS />} />
          <Route
            path="/halamanstrukturdesa"
            element={<HALAMANSTRUKTURDESA />}
          />
          <Route
            path="/halamanperangkatdesa"
            element={<HALAMANPERANGKATDESA />}
          />
          <Route path="/halamanlembagadesa" element={<HALAMANLEMBAGADESA />} />
          <Route path="/lembagaone" element={<LEMBAGAOne />} />
          <Route path="/kepaladesa" element={<KEPALADESA />} />
          <Route path="/perangkatdesaone" element={<PERANGKATDESAOne />} />
          <Route path="/pengumuman" element={<PENGUMUMAN />} />
          <Route path="/isipengumumanone" element={<ISIPENGUMUMANOne />} />
          <Route path="/isipengumumantwo" element={<ISIPENGUMUMANTwo />} />
          <Route path="/agendakegiatan" element={<AGENDAKEGIATAN />} />
          <Route path="/agendakegiatanone" element={<AGENDAKEGIATANOne />} />
          <Route path="/agendakegiatantwo" element={<AGENDAKEGIATANTwo />} />
          <Route path="/galeridesa" element={<GALERIDESA />} />
          <Route path="/beritadesaone" element={<BERITADESAOne />} />
          <Route path="/beritadesa" element={<BERITADESA />} />
          <Route path="/destinasiwisata" element={<DESTINASIWISATA />} />
          <Route path="/destinasiwisataone" element={<DESTINASIWISATAOne />} />
          <Route path="/download" element={<DOWNLOAD />} />
          <Route path="/halamanlogin" element={<HalamanLogin />} />
          <Route
            path="/halamanlupapassword"
            element={<HalamanLupaPassword />}
          />
          <Route path="/halamandashboard" element={<HalamanDashboard />} />
          <Route path="/halamanubahprofile" element={<HalamanUbahProfile />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/daftarartikel" element={<DaftarArtikel />} />
          <Route path="/kategoriartikel" element={<KategoriArtikel />} />
          <Route path="/kategoritag" element={<KategoriTag />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/editsejarahdesa" element={<EditSejarahDesa />} />
          <Route path="/jabatan" element={<Jabatan />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
