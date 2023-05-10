import Answers from "../components/Answers";
import Miniplayer from "../components/Miniplayer";
import ProgressBar from "../components/ProgressBar";
export default function Quiz(){
    return(
        <>
          <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answers/>
        <Miniplayer/>
        <ProgressBar/>
        </>
    )
}