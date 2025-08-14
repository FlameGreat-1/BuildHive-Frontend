export const validateEmail = (email: string): true | string => {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email format";
  return true;
};

export const validatePassword = (password: string): true | string => {
  // const errorMsg = "Password must includeat least 1 uppercase letter, 1 character and 1 number."
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/\d/.test(password)) return "Password must include at least one number";
  if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter";
  if (!/[^A-Za-z0-9]/.test(password)) return "Password must include a special character (!@#$%^&*)";
  return true;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): true | string => {
  if (!confirmPassword) return "Please confirm your password";
  if (password !== confirmPassword) return "Passwords do not match";
  return true;
};

export const validateUsername = (username: string): true | string => {
  if (!username) return "Username is required";
  if (username.length < 8) return "Username must be at least 8 characters long";
  return true;
};

export const validateOtp = (otp: string): true | string => {
  if (!otp) return "OTP is required";
  if (!/^\d{6}$/.test(otp)) return "OTP must be 6 digits";
  return true;
};

export const validatePhone = (phone: string): true | string => {
  if (!phone) return "Phone number is required";
  if (!/^\d{10,15}$/.test(phone)) return "Invalid phone number format";
  return true;
};

export const validateRequired = (
  value: string,
  fieldName: string = "This field"
): true | string => {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return true;
};