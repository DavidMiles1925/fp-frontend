import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserDropdownMenu.css";

const UserDropdownMenu = ({ dropdownItems, history }) => {
  const {
    currentUser,
    handleLogOut,
    activeMenuSelection,
    setActiveMenuSelection,
    alternateAvatar,
  } = useContext(CurrentUserContext);

  const { id } = activeMenuSelection;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    toggleDropdown();
  }

  function handleLinkClick(item) {
    if (item.path === "logout") {
      handleLogOut();
    }
    toggleDropdown();
    history.push(item.path);

    setActiveMenuSelection(item);
  }

  return (
    <section className='dropdown'>
      <div className='dropdown__title-container'>
        <button className='dropdown__toggle' onClick={handleTopClick} key={id}>
          {currentUser.name}
        </button>
        <p className='dropdown__default-avatar'>{alternateAvatar}</p>
      </div>
      {isOpen && (
        <ul className='dropdown__menu'>
          {dropdownItems.map((item) => {
            return (
              <li
                key={item.path}
                className='dropdown__item'
                onClick={() => handleLinkClick(item)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default UserDropdownMenu;
