import { Routes, Route, Link } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  return (
    <>
      <div>Profile</div>
      <nav style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default Profile;