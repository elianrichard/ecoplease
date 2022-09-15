import axios, { AxiosResponse } from "axios";
import { useQueries } from "@tanstack/react-query";

import { server } from "../../../config";
import { MediaType } from "../types/MediaType";

const useMediaQueries = (imageIds: number[]) => {
  const fetchMediaById = (id: number): Promise<AxiosResponse<MediaType>> => {
    return axios.get(`${server}/wp-json/wp/v2/media/${id}`);
  };

  const mediaQueries = useQueries({
    queries: imageIds.map((id) => ({
      queryKey: ["media", id],
      queryFn: () => fetchMediaById(id),
      refetchOnMount: false,
      keepPreviousData: true,
    })),
  });

  return mediaQueries;
};

export default useMediaQueries;
