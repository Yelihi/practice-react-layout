import './write.scss';

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="./images/blog/my.jpeg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon bx bxs-file-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
