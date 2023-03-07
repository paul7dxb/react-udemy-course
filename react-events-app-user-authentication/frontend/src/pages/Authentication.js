import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  // Get mode
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  // Throw error if user entered a different url
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  // Get form data
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Send POST to backend
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  // Check response
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json(
      { message: "Could not authenticate the user." },
      { status: 500 }
    );
  }

  // Get token from response and store in local storage
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  // Calculate expiration of token
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  // Redirect user
  return redirect("/");
}
