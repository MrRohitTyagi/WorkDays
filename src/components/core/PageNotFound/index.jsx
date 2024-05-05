import "./pageNotFound.css";
import image from "@/assets/not-found-page.jpg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img src={image} height="400px" alt="404 Page not Found" />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
