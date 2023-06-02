# Final Project: Merchandise Sales Site

Frontend Repository: [Frontend Repo](https://github.com/DavidMiles1925/fp-frontend).
Backend Repository: [Backend Repo](https://github.com/DavidMiles1925/fp-backend).

## Table Of Contents

**1 - Project Features**  
**-- 1.1 -** Code Layout and Semantics  
-- 1.1.1 BEM Methodology  
-- 1.1.2 Naming Conventions  
**-- 1.2 -** React App  
-- 1.2.1 Functional Components  
-- 1.2.2 Contexts  
**-- 1.3 -** Notable Features  
-- 1.3.1 Embeded Content  
-- 1.3.2 Animations  
-- 1.3.3 Form Validation  
-- 1.3.4 Dropdown Menu  
-- 1.3.4 Chuck NorrisJoke Generator  
-- 1.3.5 Passing Images Through JSON  
-- 1.3.6 Responsive Design  
**-- 1.4 -** Responsive Design  
-- 1.4.1 Flexbox  
-- 1.4.2 Grid Layout

**2 - Future Development Plans**  
**-- 2.1 -** User Profile  
-- 2.1.1 Sales API  
-- 2.1.2 Order Tracker  
-- 2.1.3 Change Password  
**-- 2.2 -** Physical Product Development  
-- 2.1.1 Clothing  
-- 2.1.1 Trinkets  
**-- 2.3 -** Complete Documentation
**-- 2.4 -** Main Page Content

**3 - Documentation**
**-- 3.1 -** Components
-- 3.1.1 App  
-- -- Variables  
-- -- 3.1.1.1 isAdmin  
-- -- 3.1.1.2 isDevMode  
-- -- 3.1.1.3 isLoading  
-- -- 3.1.1.4 isLoggedIn  
-- -- 3.1.1.5 activeCard  
-- -- 3.1.1.6 activeMenuSelection  
-- -- 3.1.1.7 activeModal  
-- -- 3.1.1.8 alternateAvatar  
-- -- 3.1.1.9 chuckJoke  
-- -- 3.1.1.10 currentUser  
-- -- 3.1.1.11 disableButton  
-- -- 3.1.1.12 errorDisplay  
-- -- 3.1.1.13 productList  
-- -- Fuctions  
-- -- 3.1.1.14 adjustCartTotalForPriceChanges  
-- -- 3.1.1.15 closeActiveModal  
-- -- 3.1.1.16 closeModal  
-- -- 3.1.1.17 convertToFloat  
-- -- 3.1.1.18 generateJoke  
-- -- 3.1.1.19 getUserFirstLetter  
-- -- 3.1.1.20 handleAddToCart  
-- -- 3.1.1.21 handleCardClick  
-- -- 3.1.1.22 handleLoginSubmit  
-- -- 3.1.1.23 handleLogOut  
-- -- 3.1.1.24 handleUpdateClick  
-- -- 3.1.1.25 handleUpdateSubmit  
-- -- 3.1.1.26 handleRemoveFromCart  
-- -- 3.1.1.27 handleSignUpSubmit  
-- -- 3.1.1.28 handleToggleAdmin  
-- -- 3.1.1.29 handleToggleLogin  
-- -- 3.1.1.30 selectLogin  
-- -- 3.1.1.31 selectSignUp  
-- -- 3.1.1.32 handleModalErrorDislay  
-- 3.1.2 CardSection  
-- 3.1.3 CardViewModal  
-- 3.1.4 ContactInfo  
-- 3.1.5 CreatorInfo  
-- 3.1.6 DeveloperPanel  
-- 3.1.7 DividerCard  
-- 3.1.8 Footer  
-- 3.1.9 Header  
-- 3.1.10 JokeGenerator  
-- 3.1.11 LoginModal  
-- 3.1.12 Main  
-- 3.1.13 ModalWithForm  
-- 3.1.14 ProductCard  
-- 3.1.15 ProductsPage  
-- 3.1.16 ProductViewModal  
-- 3.1.17 ProtectedRoute  
-- 3.1.18 RegisterModal  
-- -- 3.1.1.2.2 handlePhoneChange  
-- -- 3.1.1.2.2 handleSubmit  
-- 3.1.19 ShoppingCart  
-- 3.1.20 SideBarMenu  
-- -- 3.1.1.2 handleCategoryClick  
-- -- 3.1.1.2 handleResize  
-- -- 3.1.1.2 handleTopClick  
-- -- 3.1.1.2 toggleDropdown  
-- 3.1.21 StillBuilding  
-- 3.1.22 UserDropdownMenu  
-- -- 3.1.22.1 isOpen  
-- -- 3.1.22.2 handleLinkClick  
-- -- 3.1.22.3 handleTopClick  
-- -- 3.1.22.4 toggleDropdown  
-- 3.1.23 UserInformationPage  
-- -- 3.1.23.1 formattedPhoneNumber  
-- -- 3.1.23.2 formatPhoneNumber  
-- 3.1.24 UserProfilePage  
-- 3.1.25 UserSidebarMenu  
-- -- 3.1.25.1 formattedPhoneNumber  
-- -- 3.1.25.2 handleMenuClick  
-- -- 3.1.25.3 handleResize  
-- -- 3.1.25.4 handleTopClick  
-- -- 3.1.25.5 toggleDropdown  
-- 3.1.26 UserUpdateProfileModal  
-- -- 3.1.26.1 formatPhoneNumber  
-- -- 3.1.26.2 handlePhoneChange  
-- -- 3.1.26.3 handleSubmit

**-- 3.2 -** Contexts  
-- 3.2.1 CurrentUserContext  
-- 3.2.3 FilterContext  
-- 3.2.3 ValidationContext

**-- 3.3 -** Utils  
-- 3.3.1 api  
-- -- 3.3.1.1 createProduct  
-- -- 3.3.1.2 deleteProduct  
-- -- 3.3.1.3 getProducts  
-- -- 3.3.1.4 processServerReponse  
-- -- 3.3.1.5 request  
-- 3.3.2 auth  
-- -- 3.3.2.1 addToCart
-- -- 3.3.2.2 checkToken
-- -- 3.3.2.3 removeFromCart
-- -- 3.3.2.4 signin
-- -- 3.3.2.5 signup
-- -- 3.3.2.6 updateCartTotal
-- -- 3.3.2.7 updateUser
-- 3.3.3 chuckNorrisApi  
-- -- 3.3.3.1 getJoke  
-- 3.3.4 constants  
-- -- 3.3.4.1 Text Constants  
-- -- 3.3.4.2 Dropdown Menus  
-- 3.3.5 useFormAndValidation  
-- -- 3.3.5.1 values  
-- -- 3.3.5.2 errors  
-- -- 3.3.5.3 isValid  
-- -- 3.3.5.4 handleChange  
-- -- 3.3.5.5 resetForm

**-- 3.4 -** Dependencies

## 1 - Product Features

### 1.1 - Code Layout and Semantics

**-- 1.1.1** BEM Methodology  
**-- 1.1.2** Naming Conventions

### 1.2 - React App

**-- 1.2.1** Functional Components  
**-- 1.2.2** Contexts

### 1.3 - Notable Features

**-- 1.3.1** Embeded Content  
**-- 1.3.2** Animations  
**-- 1.3.3** Form Validation  
**-- 1.3.4** Dropdown Menu  
**-- 1.3.4** Chuck NorrisJoke Generator  
**-- 1.3.5** Passing Images Through JSON  
**-- 1.3.6** Responsive Design

### 1.4 - Responsive Design

-- 1.4.1 Flexbox  
-- 1.4.2 Grid Layout

### 2.1 User Profile

**-- 2.1.1** Sales API  
**-- 2.1.2** Order Tracker  
**-- 2.1.3** Change Password

### 2.2 -\*\* Physical Product Development

**-- 2.1.1** Clothing  
**-- 2.1.2** Trinkets

### 2.3 -\*\* Complete Documentation

### 2.4 -\*\* Main Page Content

## 3 - Documentation

### 3.1 - Components

**-- 3.1.1 `App`**  
-- -- Variables  
-- -- 3.1.1.1 `isAdmin`  
-- -- 3.1.1.2 `isDevMode`  
-- -- 3.1.1.3 `isLoading`  
-- -- 3.1.1.4 `isLoggedIn`  
-- -- 3.1.1.5 `activeCard`  
-- -- 3.1.1.6 `activeMenuSelection`  
-- -- 3.1.1.7 `activeModal`  
-- -- 3.1.1.8 `alternateAvatar`  
-- -- 3.1.1.9 `chuckJoke`  
-- -- 3.1.1.10 `currentUser`  
-- -- 3.1.1.11 `disableButton`  
-- -- 3.1.1.12 `errorDisplay`  
-- -- 3.1.1.13 `productList`  
-- -- Fuctions  
-- -- 3.1.1.14 `adjustCartTotalForPriceChanges`  
-- -- 3.1.1.15 `closeActiveModal`  
-- -- 3.1.1.16 `closeModal`  
-- -- 3.1.1.17 `convertToFloat`  
-- -- 3.1.1.18 `generateJoke`  
-- -- 3.1.1.19 `getUserFirstLetter`  
-- -- 3.1.1.20 `handleAddToCart`  
-- -- 3.1.1.21 `handleCardClick`  
-- -- 3.1.1.22 `handleLoginSubmit`  
-- -- 3.1.1.23 `handleLogOut`  
-- -- 3.1.1.24 `handleUpdateClick`  
-- -- 3.1.1.25 `handleUpdateSubmit`  
-- -- 3.1.1.26 `handleRemoveFromCart`  
-- -- 3.1.1.27 `handleSignUpSubmit`  
-- -- 3.1.1.28 `handleToggleAdmin`  
-- -- 3.1.1.29 `handleToggleLogin`  
-- -- 3.1.1.30 `selectLogin`  
-- -- 3.1.1.31 `selectSignUp`  
-- -- 3.1.1.32 `handleModalErrorDislay`  
**-- 3.1.2 `CardSection`**  
**-- 3.1.3 `CardViewModal`**  
**-- 3.1.4 `ContactInfo`**  
**-- 3.1.5 `CreatorInfo`**  
**-- 3.1.6 `DeveloperPanel`**  
**-- 3.1.7 `DividerCard`**  
**-- 3.1.8 `Footer`**  
**-- 3.1.9 `Header`**  
**-- 3.1.10 `JokeGenerator`**  
**-- 3.1.11 `LoginModal`**  
**-- 3.1.12 `Main`**  
**-- 3.1.13 `ModalWithForm`**  
**-- 3.1.14 `ProductCard`**  
**-- 3.1.15 `ProductsPage`**  
**-- 3.1.16 `ProductViewModal`**  
**-- 3.1.17 `ProtectedRoute`**  
**-- 3.1.18 `RegisterModal`**  
-- -- 3.1.1.2.2 `handlePhoneChange`  
-- -- 3.1.1.2.2 `handleSubmit`  
**-- 3.1.19 `ShoppingCart`**  
**-- 3.1.20 `SideBarMenu`**  
-- -- 3.1.1.2 `handleCategoryClick`  
-- -- 3.1.1.2 `handleResize`  
-- -- 3.1.1.2 `handleTopClick`  
-- -- 3.1.1.2 `toggleDropdown`  
**-- 3.1.21 `StillBuilding`**  
**-- 3.1.22 `UserDropdownMenu`**  
-- -- 3.1.22.1 `isOpen`  
-- -- 3.1.22.2 `handleLinkClick`  
-- -- 3.1.22.3 `handleTopClick`  
-- -- 3.1.22.4 `toggleDropdown`  
**-- 3.1.23 `UserInformationPage`**  
-- -- 3.1.23.1 `formattedPhoneNumber`  
-- -- 3.1.23.2 `formatPhoneNumber`  
**-- 3.1.24 `UserProfilePage`**  
**-- 3.1.25 `UserSidebarMenu`**  
-- -- 3.1.25.1 `formattedPhoneNumber`  
-- -- 3.1.25.2 `handleMenuClick`  
-- -- 3.1.25.3 `handleResize`  
-- -- 3.1.25.4 `handleTopClick`  
-- -- 3.1.25.5 `toggleDropdown`  
**-- 3.1.26 `UserUpdateProfileModal`**  
-- -- 3.1.26.1 `formatPhoneNumber`  
-- -- 3.1.26.2 `handlePhoneChange`  
-- -- 3.1.26.3 `handleSubmit`

### 3.2 - Contexts

**-- 3.2.1** `CurrentUserContext`  
**-- 3.2.3** `FilterContext`  
**-- 3.2.3** `ValidationContext`

### 3.3 - Utils

**-- 3.3.1** `api`  
-- -- 3.3.1.1 `createProduct`  
-- -- 3.3.1.2 `deleteProduct`  
-- -- 3.3.1.3 `getProducts`  
-- -- 3.3.1.4 `processServerReponse`  
-- -- 3.3.1.5 `request`  
**-- 3.3.2 `auth`**  
-- -- 3.3.2.1 `addToCart`
-- -- 3.3.2.2 `checkToken`
-- -- 3.3.2.3 `removeFromCart`
-- -- 3.3.2.4 `signin`
-- -- 3.3.2.5 `signup`
-- -- 3.3.2.6 `updateCartTotal`
-- -- 3.3.2.7 `updateUser`
**-- 3.3.3 `chuckNorrisApi`**  
-- -- 3.3.3.1 `getJoke`  
**-- 3.3.4 `constants`**  
-- -- 3.3.4.1 `Text Constants`  
-- -- 3.3.4.2 `Dropdown Menus`  
**-- 3.3.5 `useFormAndValidation`**  
-- -- 3.3.5.1 `values`  
-- -- 3.3.5.2 `errors`  
-- -- 3.3.5.3 `isValid`  
-- -- 3.3.5.4 `handleChange`  
-- -- 3.3.5.5 `resetForm`
