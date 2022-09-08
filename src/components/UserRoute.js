import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export { UserRoute };

function UserRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);
    if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login"/>
    }
    // authorized so return child components
    return children;
}

export default UserRoute