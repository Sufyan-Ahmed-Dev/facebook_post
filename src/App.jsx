import Post from "./components/Post";

function App() {
  const post = {
    post1: {
      userName: "Sufyan",
      userDate: "2 july 2023",
      userText: "This is my post and i am in Seaveiw",
      userImage:
        "https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?resize=768x576&vertical=center",
    },
    post2: {
      userName: "Ahmed",
      userDate: "3 july 2023",
      userText:
        "I am Ahmed and  I am the author of the book instructions on how to contact your server administrator for further instructions on how to contact your",

      userImage:
        "https://media.istockphoto.com/id/1313353553/photo/concept-cryptographic-nft-on-a-hundred-dollar-bill-franklin-in-glasses.webp?s=1024x1024&w=is&k=20&c=AxWAoZnr3KiugnObf2qfQTkc7N7rERbIbUQEwMdhIWk=",
    },
    post3: {
      userName: "Faizan",
      userDate: "3 july 2023",
      userText:
        "I have received the following message from your server and will be sent to you in the future   for further  instructions on how to contact your server administrator for further instructions on how to contact your server administrator for further instructions on how to contact your server administrator for further instructions",
      userImage:
        "https://media.istockphoto.com/id/1450227842/photo/growth-chart-on-face-of-one-hundred-dollar-bill.webp?s=1024x1024&w=is&k=20&c=6vBOj8P4-kPmNcC2Ve3ZSGGJrUpY_8Jgu7q9GCtZcLs=",
    },
  };
  return (
    <>
      <Post
        name={post.post1.userName}
        date={post.post1.userDate}
        text={post.post1.userText}
        Image={post.post1.userImage}
      ></Post>
      <Post
        name={post.post2.userName}
        date={post.post2.userDate}
        text={post.post2.userText}
        Image={post.post2.userImage}
      ></Post>
      <Post
        name={post.post3.userName}
        date={post.post3.userDate}
        text={post.post3.userText}
        Image={post.post3.userImage}
      ></Post>
    </>
  );
}

export default App;
