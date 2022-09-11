import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { MediaType } from "../types/MediaType";

const useMediaQuery = (id: number) => {
  const { data, isLoading } = useQuery(
    ["featured-media", id],
    (): Promise<AxiosResponse<MediaType>> => {
      return axios.get(
        `https://ecoplease.hrefid.com/wp-json/wp/v2/media/${id}`
      );
    }
  );
  return { data, isLoading };
};

export default useMediaQuery;
