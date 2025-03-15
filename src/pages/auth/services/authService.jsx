const API_URL = "https://cardlabs.pythonanywhere.com/api/v1";

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) throw new Error("Invalid credentials");

    const data = await response.json();
    return data.user.role; // Returns "landlord" or "caretaker"
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register/landlord/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};