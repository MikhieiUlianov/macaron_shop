import { createApi } from "@reduxjs/toolkit/query/react";
import siteData from "../components/Data";

const fakeBaseQuery = async () => {
  return { data: siteData };
};

export const apiSlice = createApi({
  reducerPath: "siteDataApi",
  baseQuery: fakeBaseQuery,
  tagTypes: ["CatalogDesserts, Cart"],
  endpoints: (builder) => ({
    postData: builder.mutation({
      queryFn: async (newRequest) => {
        // Генерируем id
        const id = Math.random().toString(16).slice(2, 6);
        const requestWithId = { id, ...newRequest };

        // Добавляем в массив "requests"
        siteData.requests.push(requestWithId);

        return { data: requestWithId };
      },
    }),
    getPromos: builder.query({
      queryFn: () => ({ data: siteData.promos }),
    }),
    getPagesLinks: builder.query({
      queryFn: () => ({ data: siteData.pagesLinks }),
    }),
    getPromotionSlides: builder.query({
      queryFn: () => ({ data: siteData.promotionSlides }),
    }),
    getHolidays: builder.query({
      queryFn: () => ({ data: siteData.holidays }),
    }),
    getNews: builder.query({
      queryFn: () => ({ data: siteData.news }),
    }),
    getFooter: builder.query({
      queryFn: () => ({ data: siteData.footer }),
    }),
    getSocial: builder.query({
      queryFn: () => ({ data: siteData.social }),
    }),
    /*     getPopularSets: builder.query({
      query: ({ offset = 0, limit = 4 }) =>
        `popularSets?offset=${offset}&limit=${limit}`,
    }), */
    getPopularSets: builder.query({
      queryFn: ({ offset = 0, limit = 4 }) => {
        const slicedData = siteData.popularSets.slice(offset, offset + limit);
        return { data: slicedData };
      },
    }),
    getContacts: builder.query({
      queryFn: () => ({ data: siteData.contacts }),
    }),
    getCatalogDesserts: builder.query({
      queryFn: () => ({ data: siteData.catalogDesserts }),
      providesTags: ["CatalogDesserts"],
    }),
    getTry: builder.query({
      queryFn: () => ({ data: siteData.try }),
    }),

    getProductInfo: builder.query({
      queryFn: (productId) => {
        const product = siteData.productPage.find((p) => p.id === productId);
        if (product) {
          return { data: product };
        }
      },
    }),
    getCart: builder.query({
      queryFn: () => ({ data: siteData.cart }),
      providesTags: ["Cart"],
    }),
    getSomePresents: builder.query({
      queryFn: () => ({ data: siteData.somePresents }),
    }),
    getCompletedOrders: builder.query({
      queryFn: () => ({ data: siteData.completedOrdets }),
    }),
    getAnswers: builder.query({
      queryFn: () => ({ data: siteData.answers }),
    }),
    getOurSuggestions: builder.query({
      queryFn: () => ({ data: siteData.ourSuggestions }),
    }),
    getRecommendation: builder.query({
      queryFn: () => ({ data: siteData.recommendation }),
    }),
    getWeddingSets: builder.query({
      queryFn: () => ({ data: siteData.weddingSets }),
    }),
    getAssemble: builder.query({
      queryFn: () => ({ data: siteData.assemble }),
    }),
    getTastes: builder.query({
      queryFn: () => ({ data: siteData.tastes }),
    }),
    getAdditionally: builder.query({
      queryFn: () => ({ data: siteData.additionally }),
    }),
  }),
});

export const {
  usePostDataMutation,
  useGetPromosQuery,
  useGetPagesLinksQuery,
  useGetPromotionSlidesQuery,
  useGetPopularSetsQuery,
  useGetHolidaysQuery,
  useGetNewsQuery,
  useGetFooterQuery,
  useGetSocialQuery,
  useGetCatalogDessertsQuery,
  useGetContactsQuery,
  useGetTryQuery,
  useGetProductInfoQuery,
  useGetCartQuery,
  useGetSomePresentsQuery,
  useGetCompletedOrdersQuery,
  useGetAnswersQuery,
  useGetOurSuggestionsQuery,
  useGetRecommendationQuery,
  useGetWeddingSetsQuery,
  useGetAssembleQuery,
  useGetTastesQuery,
  useGetAdditionallyQuery,
} = apiSlice;
