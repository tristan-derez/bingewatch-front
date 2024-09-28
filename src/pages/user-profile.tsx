import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user-profile")({
  component: UserProfilePage,
});

function UserProfilePage() {
  return <div>User Profile Page Content</div>;
}

export default UserProfilePage;
