export const validatePatientName = (name) => {
  if (name.trim().length < 8) {
    return false;
  }
  return '';
};

