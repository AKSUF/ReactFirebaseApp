import React from 'react';
import useVideoList from '../hooks/UseVideoList';
import classes from '../styles/Videos.moduls.css';
import Video from './Video';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";

export default function Videos() {
  const { loading, error, videos, hasMore } = useVideoList(0);
  const [page, setPage] = React.useState(1);

  return (
    <div className={classes.videos}>
      {videos.length > 0 && (
        <InfiniteScroll 
          dataLength={videos.length}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) => (
            <React.Fragment key={video.youtubeID}>
              {video.noq === 0 ? (
                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
              ) : (
                <Link to={`/quiz/${video.youtubeID}`}>
                  <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                </Link>
              )}
            </React.Fragment>
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading......</div>}
    </div>
  );
}
