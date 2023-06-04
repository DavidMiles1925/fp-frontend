import UserSidebarMenu from "../UserSidebarMenu/UserSidebarMenu";
import { userSidebar } from "../../utils/constants";
import "./UserProfilePage.css";

function UserProfilePage({ history }) {
  const userProfileItems = userSidebar;
  return (
    <div className='user-profile'>
      <div className='user-profile__sidebar-container'>
        <UserSidebarMenu
          history={history}
          userProfileItems={userProfileItems}
        />
      </div>
    </div>
  );
}

export default UserProfilePage;
