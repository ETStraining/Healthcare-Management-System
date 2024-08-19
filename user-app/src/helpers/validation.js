// This file will contain all validation rules
export const validatePatientName = (name) => {
  if (typeof name !== 'string') {
    return 'Patient name must be a string';
  }
  if (name.trim().length < 8) {
    return 'Patient name must be at least 8 characters long';
  }
  return '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }
  return ''; // Corrected 'ruturn' to 'return'
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{10,}$/;
  if (typeof phoneNumber !== 'string') {
    return 'Phone number must be a string';
  }
  if (!phoneRegex.test(phoneNumber.trim())) { // Corrected 'phonenumber' to 'phoneNumber'
    return 'Phone number must contain at least 10 digits';
  }
  return '';
};
