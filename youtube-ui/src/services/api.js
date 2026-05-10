const API_URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};