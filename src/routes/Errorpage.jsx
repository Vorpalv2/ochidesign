const ErrorPage = ({ message = "Unable to find the page" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl mb-4 font-bold text-center">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-4 text-center">{message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
