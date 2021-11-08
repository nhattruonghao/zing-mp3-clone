import axiosClient from "./axiosClient";
export const shazamApi = {
  getArtistTopTracks: () => {
    const url = "charts/track";
    return axiosClient.get(url, {
      params: {
        locale: 'en-US',
        pageSize: "20",
        startFrom: "0",
      },
    });
  },
};
