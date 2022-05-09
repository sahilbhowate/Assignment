import { useParams } from "react-router-dom";

function UserPosts() {

  //collecting the post id using useParams()
  let { id } = useParams();

  return (
    <h1>{`Now showing ${id}`}</h1>
  );

}

export default UserPosts;