export const emailRegex = (email) => {
  const ruleEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (ruleEmail.test(email)) {
    return true;
  }else{
    return false
  }
};
