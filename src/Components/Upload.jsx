import "./Upload.css";
const Upload = () => {
  return (
    <>
      <label for="images" class="drop-container" id="dropcontainer">
        <span class="drop-title">Drop files here</span>
        or
        <input type="file" id="images" accept="image/*" required />
      </label>
    </>
  );
};

export default Upload;
