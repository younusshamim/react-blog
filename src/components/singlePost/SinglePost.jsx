import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/4560148/pexels-photo-4560148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Blog Post"
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Younus</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          fuga dicta id unde doloribus eius ullam at iusto quam delectus libero
          cumque quasi quisquam, obcaecati cupiditate esse nam tempore
          molestiae, consequuntur veritatis provident numquam porro inventore.
          Quaerat iusto cum amet non quos. Iusto corporis necessitatibus
          deleniti dignissimos commodi laudantium ea quas quasi distinctio est
          provident tempore laborum possimus veritatis a, pariatur, fugiat
          asperiores beatae minus tempora alias. Voluptatem, reprehenderit
          dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis alias asperiores ratione vitae exercitationem. Cupiditate
          eveniet beatae impedit ea debitis quaerat molestiae, quas nostrum
          adipisci, aspernatur quos earum perspiciatis ut autem? Soluta sunt
          nihil maxime asperiores aut nulla cum veniam explicabo itaque
          blanditiis, nam nisi labore quasi dolorem at quidem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Atque numquam rerum, labore
          similique dolorem laborum libero culpa nulla. <br /> <br />
          Sed magni, ipsa corporis aperiam culpa fugit quas eum harum ipsam
          laborum quis possimus obcaecati quibusdam dignissimos fuga asperiores
          labore eius rem, quaerat maiores sapiente perferendis, odit quasi aut!
          Modi eveniet beatae voluptatibus magnam, dolores neque sit, ullam ex
          odit quis iste incidunt et obcaecati blanditiis quia! Vero ratione
          quidem qui laborum! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Consequuntur quam amet alias soluta. Necessitatibus
          eius ipsam sapiente fugiat molestias itaque non iure molestiae
          quibusdam maiores unde dolor excepturi tenetur sequi, dolore id quae
          cum cumque quos. Voluptatem fugiat ex veritatis tenetur est. Eius
          praesentium corporis at, perferendis temporibus, numquam tempore
          repellat est tempora minima nesciunt impedit! Placeat quas labore,
          accusamus laborum sint dolore cumque assumenda a? Quibusdam rerum
          reiciendis doloremque quas, assumenda alias unde. Eos, saepe. Illo
          quam neque totam cumque, ab omnis aspernatur consequuntur iure ullam
          sapiente nostrum dicta ratione, architecto delectus sunt commodi
          dolore. Modi voluptatum eaque vel.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
