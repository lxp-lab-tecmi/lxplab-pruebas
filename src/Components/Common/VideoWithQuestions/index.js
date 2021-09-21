import { VideoWithQuestions } from "./VideoWithQuestions";
import { VideoProvider } from "./Context/VideoContext";

export default function index(props) {
  return (
    <VideoProvider>
      <VideoWithQuestions {...props}></VideoWithQuestions>
    </VideoProvider>
  );
}
