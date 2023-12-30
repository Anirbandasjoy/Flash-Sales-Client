import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-7">
        <h1 className="text-6xl ">404 Not Found</h1>
        <p className="text-sm">
          Your visited page not found. You may go home page.
        </p>
        <Link
          to="/"
          className="btn bg-red-500 text-xs hover:bg-red-400 text-white rounded-sm"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
