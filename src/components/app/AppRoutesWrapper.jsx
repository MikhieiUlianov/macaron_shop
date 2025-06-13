const MainPage = lazy(() => import("@/components/pages/MainPage"));
const CatalogPage = lazy(() => import("@/components/pages/CataloogPage"));

const AppRoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="catalog" element={<CatalogPage />} />
    </Routes>
  );
};

export default AppRoutesWrapper;
