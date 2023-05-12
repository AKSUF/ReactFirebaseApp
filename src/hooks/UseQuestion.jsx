import { getDatabase, ref, query, orderByKey, get } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        setLoading(true);
        setError(false);

        const db = getDatabase();
        const quizRef = ref(db, `quiz/${videoID}/questions`);
        const quizQuery = query(quizRef, orderByKey());
        const snapshot = await get(quizQuery);

        setLoading(false);

        if (snapshot.exists()) {
          const snapshotValue = snapshot.val();
          const questionsArray = Object.values(snapshotValue);
          setQuestions((prevQuestions) => [...prevQuestions, ...questionsArray]);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
