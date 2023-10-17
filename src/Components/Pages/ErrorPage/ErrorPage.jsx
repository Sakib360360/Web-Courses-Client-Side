
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className="error-page mt-8">
        <img className="error-img" src="https://i.ibb.co/j4XYjpr/5546.jpg" alt="Error" />
        <Link className="go-to-home" to="/">
          <button className="btn btn-active btn-secondary">Go to Home Page</button>
        </Link>
      </div>
    );
};

export default ErrorPage;