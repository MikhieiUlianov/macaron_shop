const MainPage = lazy(() => import("@/components/pages/MainPageFile"));
const PopularSetsPage = lazy(() =>
  import("@/components/pages/PopularSetsPageFile")
);
const NewsPage = lazy(() => import("@/components/pages/NewsPageFolder/page"));
const GuaranteesPage = lazy(() =>
  import("@/components/pages/GuaranteesPageFolder/page")
);
const DeliveryPage = lazy(() =>
  import("@/components/pages/DeliveryPageFolder/page")
);
const NewsNewsPage = lazy(() =>
  import("@/components/pages/NewsNewsPageFolder/page")
);
const ContactsPage = lazy(() =>
  import("@/components/pages/ContactsPageFolder/page")
);
const Page404 = lazy(() => import("@/components/pages/Page404Folder/page"));
const Policy = lazy(() => import("@/components/pages/PolicyFolder/page"));
const CatalogDessertsPage = lazy(() =>
  import("@/components/pages/CatalogDessertsPageFile")
);
const ProductPage = lazy(() => import("@/components/pages/ProductPageFile"));
const CartPage = lazy(() => import("@/components/pages/CartPageFile"));
const CorporatePage = lazy(() =>
  import("@/components/pages/CorporatePageFile")
);
const SuggestionsPage = lazy(() =>
  import("@/components/pages/SuggestionsPageFile")
);
const WeddingPage = lazy(() => import("@/components/pages/WeddingPageFile"));
const AssemblePage = lazy(() => import("@/components/pages/AssemblePageFile"));
const TastesPage = lazy(() => import("@/components/pages/TastesPageFile"));
const AdditionallyPage = lazy(() =>
  import("@/components/pages/AdditionallyPageFile")
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
