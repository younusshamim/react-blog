import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/4560148/pexels-photo-4560148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Blog Post"
        className="postImg"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat"> Life</span>
        </div>

        <span className="postTitle">
          <Link to="/post/dynmicID" className="link">
            Lorem ipsum dolor sit amet.
          </Link>
        </span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
        repudiandae, nostrum totam culpa nesciunt natus rem molestias sed quod.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
        repudiandae, nostrum totam culpa nesciunt natus rem molestias sed quod.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
        repudiandae, nostrum totam culpa nesciunt natus rem molestias sed quod.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
        repudiandae, nostrum totam culpa nesciunt natus rem molestias sed quod.
      </p>
    </div>
  );
};

export default Post;
