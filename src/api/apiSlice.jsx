import { createApi } from "@reduxjs/toolkit/query/react";
import siteData from "../components/Data";

const fakeBaseQuery = async () => {
  return { data: siteData };
};

export const apiSlice = createApi({
  reducerPath: "siteDataApi",
  baseQuery: fakeBaseQuery,
  tagTypes: ["CatalogDesserts"],
  endpoints: (builder) => ({
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
  }),
});

export const {
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
} = apiSlice;
