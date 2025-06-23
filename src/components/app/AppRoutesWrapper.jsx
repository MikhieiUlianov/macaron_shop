const MainPage = lazy(() => import("@/components/pages/MainPage"));
const PopularSetsPage = lazy(() =>
  import("@/components/pages/PopularSetsPage")
);
const NewsPage = lazy(() => import("@/components/pages/NewsPage/NewsPage"));
const GuaranteesPage = lazy(() =>
  import("@/components/pages/GuaranteesPage/GuaranteesPage")
);
const DeliveryPage = lazy(() =>
  import("@/components/pages/DeliveryPage/DeliveryPage")
);
const NewsNewsPage = lazy(() =>
  import("@/components/pages/NewsNewsPage/NewsNewsPage")
);
const ContactsPage = lazy(() =>
  import("@/components/pages/ContactsPage/ContactsPage")
);
const Page404 = lazy(() => import("@/components/pages/Page404/Page404"));
const Policy = lazy(() => import("@/components/pages/Policy/Policy"));
const CatalogDessertsPage = lazy(() =>
  import("@/components/pages/CatalogDessertsPage")
);
const ProductPage = lazy(() => import("@/components/pages/ProductPage"));
const CartPage = lazy(() => import("@/components/pages/CartPage"));
const CorporatePage = lazy(() => import("@/components/pages/CorporatePage"));

const AppRoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog/popular-sets" element={<PopularSetsPage />} />
      <Route path="/catalog/news" element={<NewsPage />} />

      <Route path="/news/:newsPageId" element={<NewsNewsPage />} />
      <Route path="/guarantees" element={<GuaranteesPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/catalog/desserts" element={<CatalogDessertsPage />} />
      <Route path="/popularSets/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/corporate" element={<CorporatePage />} />
    </Routes>
  );
};
/* if (isError) {
  return <Navigate to={"/404"} />;
}
 */
export default AppRoutesWrapper;
