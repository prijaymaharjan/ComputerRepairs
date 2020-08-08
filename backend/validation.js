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
      errors.Lastname = "Last Name Not Valid";
    }
  } else {
    errors.Lastname = "LastName Is Required";
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

  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};

const appointmentInput = (data) => {
  let errors = {};
  if (data.Date) {
    if (!validator.isDate(data.Date)) {
      errors.Date = "Date of Not Valid";
    }
  } else {
    errors.DateofBirth = "Date Is Required";
  }
  if (data.Address) {
    if (!validator.isLength(data.Address.trim(), { min: 3, max: 30 })) {
      errors.Address = "Address must be between 3 and 30 charaters";
    }
  } else {
    errors.Address = "Address is required";
  }

  if (data.City) {
    if (!validator.isLength(data.City.trim(), { min: 3, max: 30 })) {
      errors.City = "City must be between 3 and 30 charaters";
    }
  } else {
    errors.City = "City is required";
  }

  if (!data.Time) {
    errors.Time = "Time is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};

const itemInput = (data) => {
  let errors = {};
  if (data.Detail) {
    if (!validator.isLength(data.Detail.trim(), { min: 3, max: 60 })) {
      errors.Detail = "Detail must be between 6 and 60 charaters";
    }
  } else {
    errors.Detail = "Detail is required";
  }
  if (data.Price) {
    if (!validator.isInt(data.Price)) {
      errors.Price = "Price InValid";
    }
  } else {
    errors.Price = "Price is required";
  }
  if (data.Quantity) {
    if (!validator.isInt(data.Quantity)) {
      errors.Quantity = "Quantity InValid";
    }
  } else {
    errors.Quantity = "Quantity is required";
  }

  if (data.Total) {
    if (!validator.isInt(data.Total)) {
      errors.Quantity = "Total InValid";
    }
  } else {
    errors.Quantity = "Total is required";
  }
  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};

const laptopInput = (data) => {
  let errors = {};
  if (data.Model) {
    if (!validator.isLength(data.Model.trim(), { min: 3, max: 60 })) {
      errors.Model = "Model must be between 6 and 60 charaters";
    }
  } else {
    errors.Model = "Model is required";
  }
  if (data.Description) {
    if (!validator.isLength(data.Description.trim(), { min: 3, max: 60 })) {
      errors.Description = "Description must be between 6 and 60 charaters";
    }
  } else {
    errors.Description = "Description is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};

const repairInput = (data) => {
  let errors = {};
  if (data.Detail) {
    if (!validator.isLength(data.Detail.trim(), { min: 3, max: 60 })) {
      errors.Detail = "Detail must be between 6 and 60 charaters";
    }
  } else {
    errors.Detail = "Detail is required";
  }
  if (data.Paymentmethod) {
    if (!validator.isInt(data.Paymentmethod)) {
      errors.Paymentmethod = "Payment Method Invalid";
    }
  } else {
    errors.Paymentmethod = "Payment is required";
  }
  if (data.Totalamount) {
    if (!validator.isInt(data.Totalamount)) {
      errors.Totalamount = "Total Amount Invalid";
    }
  } else {
    errors.Totalamount = "Total Amount is required";
  }

  if (data.Date) {
    if (!validator.isDate(data.Date)) {
      errors.Date = "Date Not Valid";
    }
  } else {
    errors.Date = "Date Is Required";
  }
  return {
    errors,
    isValid: Object.keys(errors).length == 0,
  };
};

module.exports = {
  registerInput,
  appointmentInput,
  itemInput,
  repairInput,
  laptopInput,
};
