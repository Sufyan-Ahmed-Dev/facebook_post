
import Post from "./components/Post";

function App() {
 const post = {
  "post1":{
   "userName" : "Sufyan",
   "userDate" : "2 july 2023",
   "userText" : "This is my post and i am in Seaveiw",
   "userImage" : "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?resize=768x576&vertical=center" 
  },
  "post2":{
    "userName" : "Sufyan",
    "userDate" : "2 july 2023",
    "userText" : "This is my post and i am in Seaveiw",
    "userImage" : "https://www.pexels.com/photo/tree-branches-with-flowers-11719842/" 
   },
   "post3":{
    "userName" : "Sufyan",
    "userDate" : "2 july 2023",
    "userText" : "This is my post and i am in Seaveiw",
    "userImage" : "https://www.pexels.com/photo/a-blooming-cherry-blossom-branch-16166872/" 
   }
 }
  return (
 <>
 <Post name={post.post1.userName} date = {post.post1.userDate} text ={post.post1.userText} Image={post.post1.userImage}></Post>
 </>
  );
}

export default App;
