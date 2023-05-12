import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get, startAt, limitToFirst } from "firebase/database";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
const[hasMore,setHasmore]=useState(true);
  useEffect(() => {
    // Database related work
    async function fetchVideos() {
      try {
        setLoading(true);
        setError(false);

        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videoQuery = query(videosRef, orderByKey(),startAt(""+page),limitToFirst(8));
        const snapshot = await get(videoQuery)
        setLoading(false);

        if (snapshot.exists()) {
          const videoData = Object.values(snapshot.val());
          setVideos(videoData);
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

  setTimeout(()=>{
    fetchVideos();
  },2000)
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore
  };
}
