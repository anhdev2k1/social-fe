import "./loading.scss"
const Loading = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="spanner">
        <div className="loader"></div>
        <p>Đang tải trang, đợi tý nhé!...</p>
      </div>
    </>
  );
};

export default Loading;
