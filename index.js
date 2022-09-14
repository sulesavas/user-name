import axios from "axios";

async function getData(userId) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  user.posts = posts;
  return user;
}

export default getData;
