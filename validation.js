const validator = require("validator");
const registerInput = (data) => {
  let errors = {};

  if (data.Username) {
    if (!validator.isLength(data.Username.trim(), { min: 6, max: 30 })) {
      errors.Username = "Username must be between 6 and 30 charaters";
    }
  } else {
    errors.Username = "Username is required";
  }
  if (data.Password) {
    if (!validator.isLength(data.Password.trim(), { min: 6, max: 30 })) {
      errors.Password = "Password must be between 6 and 30 charaters";
    }
  } else {
    errors.Password = "Password is required";
  }

  if (data.Firstname) {
    if (!validator.isAlpha(data.Firstname.trim())) {
      errors.Firstname = "First Name Not Valid";
    }
  } else {
    errors.Firstname = "FirstName Is Required";
  }

  if (data.Lastname) {
    if (!validator.isAlpha(data.Lastname.trim())) {
      errors.Firstname = "Last Name Not Valid";
    }
  } else {
    errors.Firstname = "LastName Is Required";
  }

  if (data.Role) {
    if (!validator.isUppercase(data.Role.charAt(0))) {
      errors.Role = "First Character Uppercase";
    }
  } else {
    errors.Role = "Role Is Required";
  }

  if (data.Gender) {
    if (!validator.isAlpha(data.Gender.trim())) {
      errors.Gender = "Gender Not Valid";
    }
  } else {
    errors.Gender = "LastName Is Required";
  }

  if (data.DateofBirth) {
    if (!validator.isDate(data.DateofBirth.trim())) {
      errors.DateofBirth = "Date of Birth Not Valid";
    }
  } else {
    errors.DateofBirth = "Date of Birth Is Required";
  }

  if (data.Email) {
    if (!validator.isEmail(data.Email.trim())) {
      errors.Email = "Email Not Valid";
    }
  } else {
    errors.Email = "Email Is Required";
  }
  if (data.Mobile) {
    if (!validator.isLength(data.Mobile.trim(), { min: 10, max: 10 })) {
      errors.Mobile = "Mobile Number 10";
    } else if (!validator.isInt(data.Mobile)) {
      errors.Mobile = "Mobile Number Not Valid";
    }
  } else {
    errors.Mobile = "Mobile Is Required";
  }

  if (data.Address) {
    if (!validator.isLength(data.Address.trim(), { min: 3, max: 30 })) {
      errors.Address = "Address must be between 3 and 30 charaters";
    }
  } else {
    errors.Address = "Address is required";
  }

  if (data.Professional) {
    if (!validator.isAlpha(data.Professional.trim())) {
      errors.Professional = "Professional Not Valid";
    }
  } else {
    errors.Professional = "Professional Is Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};
module.exports = { registerInput };
