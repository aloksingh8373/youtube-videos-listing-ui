const VideoCard = ({ video }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">

      <img
        src={video?.items?.snippet?.thumbnails?.high?.url}
        alt="thumbnail"
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg line-clamp-2 text-black">
          {video?.items?.snippet?.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {video?.items?.snippet?.channelTitle}
        </p>

        <p className="text-gray-500 text-sm">
          {video?.items?.statistics?.viewCount} views
        </p>
      </div>

    </div>
  );
};

export default VideoCard;