import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserSidebarMenu.css";

function UserSidebarMenu({ history, userProfileItems }) {
  const { handleLogOut } = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    if (window.innerWidth < 960) {
      toggleDropdown();
    }
    history.push("/userprofile/userinfo");
  }

  function handleMenuClick(item) {
    if (item.path === "logout") {
      handleLogOut();
    }
    history.push(item.path);
    handleResize();
  }

  function handleResize() {
    if (window.innerWidth > 960) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className='user-dropdown'>
      <button className='user-dropdown__toggle' onClick={handleTopClick}>
        My Profile
      </button>
      {isOpen && (
        <ul className='user-dropdown__menu'>
          {userProfileItems.map((item) => (
            <li
              key={item.text}
              className='user-dropdown__item'
              onClick={() => handleMenuClick(item)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserSidebarMenu;
