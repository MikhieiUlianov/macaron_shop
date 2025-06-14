const MainPage = lazy(() => import("@/components/pages/MainPage"));
const PopularSetsPage = lazy(() =>
  import("@/components/pages/PopularSetsPage")
);
const NewsPage = lazy(() => import("@/components/pages/newsPage/NewsPage"));
const GuaranteesPage = lazy(() =>
  import("@/components/pages/guaranteesPage/GuaranteesPage")
);

const AppRoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog/popular-sets" element={<PopularSetsPage />} />
      <Route path="/catalog/news" element={<NewsPage />} />
      <Route path="/guarantees" element={<GuaranteesPage />} />
    </Routes>
  );
};

export default AppRoutesWrapper;
