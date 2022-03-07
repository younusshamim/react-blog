import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/1089462/pexels-photo-1089462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Write Page"
        className="writeImg"
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story.."
            type="text"
            className="writeInput writeText"
          />
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
