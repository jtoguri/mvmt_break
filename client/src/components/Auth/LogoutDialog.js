import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../UserContext';

export default function LogoutDialog ({ isOpen, setOpen }) {
  const [dialog, setDialog] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setDialog( 
        <dialog open>
          Are you sure you would like to sign out?

          <div>
            <button onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </dialog>
      )
    } else {
      setDialog(null);
    }
  }, [isOpen]);

  return (
    <>
      {dialog}
    </>
  )
}
