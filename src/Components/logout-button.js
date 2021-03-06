import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PersonIcon from '@mui/icons-material/Person';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <PersonIcon />Log Out
    </button>
  );
};

export default LogoutButton;