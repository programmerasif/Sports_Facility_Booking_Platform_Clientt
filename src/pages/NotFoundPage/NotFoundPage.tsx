import { Link } from "react-router-dom"

const NotFoundPage = () =>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="text-gray-700 mt-4">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    )
}
export default NotFoundPage