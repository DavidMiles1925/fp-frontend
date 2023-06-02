# Final Project: Merchandise Sales Site

Frontend Repository: [Frontend Repo](https://github.com/DavidMiles1925/fp-frontend).

## Table Of Contents

**1 - Project Features**
**-- 1.1 -** Code Layout and Semantics  
-- -- 1.1.1 BEM Methodology  
-- -- 1.1.2 Naming Conventions  
**-- 1.2 -** React App  
-- -- 1.2.1 Functional Components  
-- -- 1.2.2 Contexts  
**-- 1.3 -** Notable Features  
-- -- 1.4.1 Embeded Content  
-- -- 1.4.1 Animations  
-- -- 1.4..1 Form Validation  
**-- 1.4 -** Responsive Design  
-- -- 1.4.1 Flexbox  
-- -- 1.4.2 Grid Layout

**2 - Future Development**
**-- 2.1 -** User Profile  
-- -- 2.1.1 Sales API  
-- -- 2.1.2 Order Tracker  
-- -- 2.1.3 Change Password  
**-- 2.2 -** Physical Product Development  
-- -- 2.1.1 Clothing  
-- -- 2.1.1 Trinkets

**3 - Documentation**
**-- 3.1 -** Components

-- -- 3.1.1 App  
-- -- -- 3.1.1.1 Variables  
-- -- -- -- 3.1.1.1.1 isAdmin  
-- -- -- -- 3.1.1.1.1 isDevMode  
-- -- -- -- 3.1.1.1.1 isLoading  
-- -- -- -- 3.1.1.1.1 isLoggedIn  
-- -- -- -- 3.1.1.1.1 activeCard  
-- -- -- -- 3.1.1.1.1 activeMenuSelection  
-- -- -- -- 3.1.1.1.1 activeModal  
-- -- -- -- 3.1.1.1.1 alternateAvatar  
-- -- -- -- 3.1.1.1.1 chuckJoke  
-- -- -- -- 3.1.1.1.1 currentUser  
-- -- -- -- 3.1.1.1.1 disableButton  
-- -- -- -- 3.1.1.1.1 errorDisplay  
-- -- -- -- 3.1.1.1.1 productList  
-- -- -- 3.1.1.2 Fuctions  
-- -- -- -- 3.1.1.2.2 adjustCartTotalForPriceChanges  
-- -- -- -- 3.1.1.2.2 closeActiveModal  
-- -- -- -- 3.1.1.2.2 closeModal  
-- -- -- -- 3.1.1.2.2 convertToFloat  
-- -- -- -- 3.1.1.2.2 generateJoke  
-- -- -- -- 3.1.1.2.1 getUserFirstLetter  
-- -- -- -- 3.1.1.2.2 handleAddToCart  
-- -- -- -- 3.1.1.2.2 handleCardClick  
-- -- -- -- 3.1.1.2.2 handleLoginSubmit  
-- -- -- -- 3.1.1.2.2 handleLogOut  
-- -- -- -- 3.1.1.2.2 handleUpdateClick  
-- -- -- -- 3.1.1.2.2 handleUpdateSubmit  
-- -- -- -- 3.1.1.2.2 handleRemoveFromCart  
-- -- -- -- 3.1.1.2.2 handleSignUpSubmit  
-- -- -- -- 3.1.1.2.2 handleToggleAdmin  
-- -- -- -- 3.1.1.2.2 handleToggleLogin  
-- -- -- -- 3.1.1.2.2 selectLogin  
-- -- -- -- 3.1.1.2.2 selectSignUp  
-- -- -- -- 3.1.1.2.2 handleModalErrorDislay  
-- -- 3.1.2 CardSection  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts  
-- -- 3.1.3 CardViewModal  
-- -- -- 3.1.3.1 params  
-- -- 3.1.2 ContactInfo  
-- -- 3.1.2 CreatorInfo  
-- -- 3.1.2 DeveloperPanel  
-- -- -- 3.1.2.1 params  
-- -- 3.1.2 DividerCard  
-- -- 3.1.2 Footer  
-- -- 3.1.2 Header  
-- -- -- 3.1.2.1 params  
-- -- 3.1.2 JokeGenerator  
-- -- -- 3.1.2.1 params  
-- -- 3.1.2 LoginModal  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts  
-- -- 3.1.2 Main  
-- -- -- 3.1.2.1 params  
-- -- 3.1.2 ModalWithForm  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts  
-- -- 3.1.2 ProductCard  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts  
-- -- 3.1.2 ProductsPage  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 varialbes  
-- -- 3.1.2 ProductViewModal  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts  
-- -- -- 3.1.2.2 varialbes  
-- -- 3.1.2 ProtectedRoute  
-- -- -- 3.1.2.1 params  
-- -- 3.1.2 RegisterModal  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 handlePhoneChange  
-- -- -- -- 3.1.1.2.2 handleSubmit  
-- -- 3.1.2 ShoppingCart  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.2 variables  
-- -- 3.1.2 SideBarMenu  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.1 variables  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 handleCategoryClick  
-- -- -- -- 3.1.1.2.2 handleResize  
-- -- -- -- 3.1.1.2.2 handleTopClick  
-- -- -- -- 3.1.1.2.2 toggleDropdown  
-- -- 3.1.2 StillBuilding  
-- -- 3.1.2 UserDropdownMenu  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.1 variables  
-- -- -- -- 3.1.1.2.2 isOpen  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 handleLinkClick  
-- -- -- -- 3.1.1.2.2 handleTopClick  
-- -- -- -- 3.1.1.2.2 toggleDropdown  
-- -- 3.1.2 UserInformationPage  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.1 variables  
-- -- -- -- 3.1.1.2.2 formattedPhoneNumber  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 formatPhoneNumber  
-- -- 3.1.2 UserProfilePage  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.1 variables  
-- -- 3.1.2 UserSidebarMenu  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.1 variables  
-- -- -- -- 3.1.1.2.2 formattedPhoneNumber  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 handleMenuClick  
-- -- -- -- 3.1.1.2.2 handleResize  
-- -- -- -- 3.1.1.2.2 handleTopClick  
-- -- -- -- 3.1.1.2.2 toggleDropdown  
-- -- 3.1.2 UserUpdateProfileModal  
-- -- -- 3.1.2.1 params  
-- -- -- 3.1.2.2 contexts/tools  
-- -- -- 3.1.2.2 functions  
-- -- -- -- 3.1.1.2.2 formatPhoneNumber  
-- -- -- -- 3.1.1.2.2 handlePhoneChange  
-- -- -- -- 3.1.1.2.2 handleSubmit

-- -- 3.1.3 Change Password  
**-- 2.2 -** Physical Product Development  
-- -- 2.11 Clothing  
-- -- 2.11 Trinkets
