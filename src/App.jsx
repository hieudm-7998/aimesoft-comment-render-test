import UserPost from './components/UserPost'
import CommentList from "./components/CommentList";
import commentsData from "./data/comments.json";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto rounded shadow-lg">
      <UserPost />
      <CommentList comments={commentsData} />
    </div>
  );
}

export default App;
