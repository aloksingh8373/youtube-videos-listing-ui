import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-5">
      {videos.map((video) => (
        <VideoCard key={video.items.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;