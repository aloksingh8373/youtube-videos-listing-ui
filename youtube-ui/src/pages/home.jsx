import { useEffect, useState } from "react";
import { fetchVideos } from "../services/api";
import Navbar from "../components/Navbar";
import VideoGrid from "../components/VideoGrid";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos();

      setVideos(data);

      setLoading(false);
    };

    getVideos();
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />

      {loading ? (
        <h1 className="text-center mt-10 text-2xl">
          Loading...
        </h1>
      ) : (
        <VideoGrid videos={videos} />
      )}
    </div>
  );
};

export default Home;