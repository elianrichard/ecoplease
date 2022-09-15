import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { server } from "../../../config";

import { ProductsType } from "../types/ProductsType";

const useProductsQuery = () => {
  const { data, isLoading } = useQuery(
    ["products"],
    (): Promise<AxiosResponse<ProductsType[]>> => {
      return axios.get(`${server}/wp-json/wp/v2/products`);
    },
    {
      refetchOnMount: false,
      keepPreviousData: true,
    }
  );
  return { data, isLoading };
};

export default useProductsQuery;
