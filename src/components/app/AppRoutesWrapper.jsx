const MainPage = lazy(() => import("@/components/pages/MainPage"));
const PopularSetsPage = lazy(() =>
  import("@/components/pages/PopularSetsPage")
);
const NewsPage = lazy(() => import("@/components/pages/NewsPage/page"));
const GuaranteesPage = lazy(() =>
  import("@/components/pages/GuaranteesPage/page")
);
const DeliveryPage = lazy(() => import("@/components/pages/DeliveryPage/page"));
const NewsNewsPage = lazy(() => import("@/components/pages/NewsNewsPage/page"));
const ContactsPage = lazy(() => import("@/components/pages/ContactsPage/page"));
const Page404 = lazy(() => import("@/components/pages/Page404/page"));
const Policy = lazy(() => import("@/components/pages/Policy/page"));
const CatalogDessertsPage = lazy(() =>
  import("@/components/pages/CatalogDessertsPage")
);
const ProductPage = lazy(() => import("@/components/pages/ProductPage"));
const CartPage = lazy(() => import("@/components/pages/CartPage"));
const CorporatePage = lazy(() => import("@/components/pages/CorporatePage"));
const SuggestionsPage = lazy(() =>
  import("@/components/pages/SuggestionsPage")
);
const WeddingPage = lazy(() => import("@/components/pages/WeddingPage"));
const AssemblePage = lazy(() => import("@/components/pages/AssemblePage"));
const TastesPage = lazy(() => import("@/components/pages/TastesPage"));
const AdditionallyPage = lazy(() =>
  import("@/components/pages/AdditionallyPage")
);

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
      <Route path="/suggestions" element={<SuggestionsPage />} />
      <Route path="/wedding" element={<WeddingPage />} />
      <Route
        path="/assemble-custom-set/select-amount"
        element={<AssemblePage />}
      />
      <Route
        path="/assemble-custom-set/select-amount/tastes"
        element={<TastesPage />}
      />
      <Route
        path="/assemble-custom-set/select-amount/tastes/additionally"
        element={<AdditionallyPage />}
      />
    </Routes>
  );
};
export default AppRoutesWrapper;
