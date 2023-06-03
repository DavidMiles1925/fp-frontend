// ********** Fonts **********
import "../../fonts/fonts.css";

// ********** Tools **********
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

// ********** API **********
import { database } from "../../utils/mockServer";
import { getJoke } from "../../utils/chuckNorrisApi";

// ********** Contexts **********
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ValidationContext } from "../../contexts/ValidationContext";

// ********** Main Site Components **********
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import ProductsPage from "../ProductsPage/ProductsPage";

// ********** User Profile Components **********
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { userDropdown } from "../../utils/constants";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import UserInformationPage from "../UserInformationPage/UserInformationPage";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// ********** Developer Components **********
import StillBuilding from "../StillBuilding/StillBuilding";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";

// ********** Modals **********
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import UserUpdateProfileModal from "../UserUpdateProfileModal/UserUpdateProfileModal";
import { useFormAndValidation } from "../../utils/useFormAndValidation";

function App() {
  const [isDevMode, setIsDevMode] = useState(false);

  // ********** Server **********
  const [productList, setProductList] = useState([]);
  const [chuckJoke, setChuckJoke] = useState("");

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

  function convertToFloat(string) {
    var floatValue = +string;
    return floatValue;
  }

  function generateJoke() {
    setIsLoading(true);
    getJoke()
      .then((res) => {
        setChuckJoke(JSON.parse(JSON.stringify(res.joke)));
      })
      .catch((err) => {
        console.log(err);
        setChuckJoke("Could not reach server.");
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  function handleUpdateClick() {
    setActiveModal("update");
  }

  // ********** Submission Handlers **********
  function handleLoginSubmit(user) {
    setIsLoading(true);
    if (user.email === "user@host.com" && user.password === "password") {
      const user = database.users[0];
      setCurrentUser(user);
      setAlternateAvatar(getUserFirstLetter(user.name));
      setIsLoggedIn(true);
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

  function handleUpdateSubmit(values) {
    console.log(values);
  }

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

  function handleAddToCart(_id) {
    console.log(_id);
    if (isLoggedIn) {
      closeModal();
      history.push("building");
    } else {
      setActiveModal("signup");
    }
  }

  function handleRemoveFromCart() {}

  function adjustCartTotalForPriceChanges(cartItems) {
    let currentTotal = 0;

    for (let item = 0; item < cartItems.length; item++) {
      currentTotal = currentTotal + convertToFloat(cartItems[item].price);
    }

    currentTotal = String(currentTotal);

    if (currentTotal !== currentUser.cartTotal) {
      console.log(
        "An item in your cart has experienced a price change, or has been discontinued."
      );

      /*
      const token = localStorage.getItem("token");
      updateCartTotal(String(currentTotal), token)
        .then((user) => {
          setCurrentUser(user);
          console.log(
            "An item in your cart has experienced a price change, or has been discontinued."
          );
        })
        .catch((err) => {
          console.log(err);
        });
        */
    }
  }

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
    generateJoke();
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
          <Route path='/main'>
            <Main
              generateJoke={generateJoke}
              chuckJoke={chuckJoke}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/products'>
            <ProductsPage
              productList={productList}
              handleCardClick={handleCardClick}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <ProtectedRoute path='/userprofile'>
            <div className='app__profile-page-container'>
              <UserProfilePage history={history} />
              <Switch>
                <ProtectedRoute exact path='/userprofile/building'>
                  <StillBuilding />
                </ProtectedRoute>
                <ProtectedRoute exact path='/userprofile/userinfo'>
                  <UserInformationPage handleUpdateClick={handleUpdateClick} />
                </ProtectedRoute>
                <ProtectedRoute exact path='/userprofile/usercart'>
                  <ShoppingCart
                    productList={productList}
                    handleCardClick={handleCardClick}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    adjustCartTotalForPriceChanges={
                      adjustCartTotalForPriceChanges
                    }
                    history={history}
                  />
                </ProtectedRoute>
                <Route path='/'>
                  <Main
                    generateJoke={generateJoke}
                    chuckJoke={chuckJoke}
                    isLoading={isLoading}
                  />
                </Route>
              </Switch>
            </div>
          </ProtectedRoute>
          <Main
            generateJoke={generateJoke}
            chuckJoke={chuckJoke}
            isLoading={isLoading}
          />
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
