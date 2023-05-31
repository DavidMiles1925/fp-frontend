// ********** Tools **********
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

// ********** API **********
import { database } from "../../utils/mockServer";
import "../../fonts/fonts.css";

// ********** Contexts **********
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ValidationContext } from "../../contexts/ValidationContext";

// ********** Site Components **********
import { userDropdown } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import StillBuilding from "../StillBuilding/StillBuilding";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";

// ********** Modals **********
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import UserUpdateProfileModal from "../UserUpdateProfileModal/UserUpdateProfileModal";

function App() {
  const [isDevMode, setIsDevMode] = useState(false);

  // ********** Server **********
  const [productList, setProductList] = useState([]);

  // ********** User Context **********
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeMenuSelection, setActiveMenuSelection] = useState({});
  const [alternateAvatar, setAlternateAvatar] = useState("");

  // ********** Active Modal **********
  const [activeModal, setActiveModal] = useState("T");
  const [activeCard, setActiveCard] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function getUserFirstLetter(name) {
    const firstletter = name.slice(0, 1);
    return firstletter;
  }

  // ********** User Selections **********
  function selectLogin() {
    setActiveModal("login");
  }

  function selectSignUp() {
    setActiveModal("signup");
  }

  function handleCardClick(card) {
    setActiveModal("productpreview");
    setActiveCard(card);
  }

  // ********** Submission Handlers **********
  function handleLoginSubmit(user) {
    setIsLoading(true);
    if (user.email === "user@host.com" && user.password === "password") {
      const user = database.users[0];
      setCurrentUser(user);
      setAlternateAvatar(getUserFirstLetter(user.name));
      setIsLoggedIn(true);
      setActiveMenuSelection(userDropdown[0]);
      closeModal();
    } else {
      setErrorDisplay({ value: true, message: "Invalid email or password." });
    }
    setIsLoading(false);
  }

  function handleSignUpSubmit() {
    history.push("/building");
    closeModal();
  }

  function handleUpdateSubmit() {}

  function handleLogOut() {
    setIsLoggedIn(false);
    history.push("/");
  }

  function handleToggleLogin() {
    setIsLoggedIn(!isLoggedIn);
    setActiveMenuSelection(userDropdown[0]);
  }

  function handleToggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    if (isLoggedIn) {
      closeModal();
      history.push("building");
    } else {
      setActiveModal("signup");
    }
  }

  function handleRemoveFromCart() {}

  // ********** Modal Tools **********

  function closeActiveModal(evt) {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close") ||
      evt.target.classList.contains("modal__cancel")
    ) {
      closeModal();
    }
  }

  function closeModal() {
    setActiveModal(null);
    handleModalErrorDisplay(false, "");
  }

  function handleModalErrorDisplay(value, message) {
    setErrorDisplay({ value, message });
  }

  // ********** Authentication **********
  /*function getLocalToken() {
    try {
      const jwt = localStorage.getItem("token");
      return jwt;
    } catch {
      return null;
    }
  }*/

  // ********** Listeners **********
  useEffect(() => {
    setActiveMenuSelection(userDropdown[0]);
  }, []);

  useEffect(() => {
    setCurrentUser({
      cart: [],
    });
  }, []);

  useEffect(() => {
    setProductList(database.products);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  return (
    <div className='App'>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          alternateAvatar,
          isLoggedIn,
          activeMenuSelection,
          isAdmin,
          isDevMode,
          handleLogOut,
          setActiveMenuSelection,
        }}
      >
        <Header
          selectLogin={selectLogin}
          selectSignUp={selectSignUp}
          history={history}
        />
        <Switch>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/building'>
            <StillBuilding />
          </Route>
        </Switch>
        <Footer />
        {isDevMode ? (
          <DeveloperPanel
            handleToggleLogin={handleToggleLogin}
            handleToggleAdmin={handleToggleAdmin}
          />
        ) : (
          <></>
        )}
        {activeModal === "login" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleLoginSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <LoginModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "signup" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleSignUpSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <RegisterModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "update" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleUpdateSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <UserUpdateProfileModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "productpreview" && (
          <ProductViewModal
            card={activeCard}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            closeActiveModal={closeActiveModal}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
