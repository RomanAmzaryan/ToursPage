import { NavLink, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import { SIGNIN_PAGE_PATH } from "../../routes/path";
import { UseGenerationID } from "../../hook/UseGenerationID";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/usersDataSlice";
import { addNewUser } from "../../store/slices/usersData/API";

const RegistrationPage = () => {
  const usersState = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName: { value: firstName },
      lastName: { value: lastName },
      email: { value: email },
      gender: { value: gender },
      dateOfBirth: { value: dateOfBirth },
      passport: { value: passport },
      cardNumber: { value: cardNumber },
      cardType: { value: cardType },
      cvv: { value: cvv },
      cardValidationName: { value: cardValidationName },
      password: { value: password },
      confirmPassword: { value: confirmPassword },
    } = e.target;
    let newUser = {
      id: UseGenerationID(),
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      passport,
      cardNumber,
      cardType,
      cvv,
      cardValidationName,
      password,
      confirmPassword,
    };
    if (usersState.usersData.find((user) => user.email === email) || confirmPassword !== password) return alert("wrong email");
    dispatch(addNewUser(newUser));
    navigate("/" + SIGNIN_PAGE_PATH);
  };

  return (
    <div>
      <div className='registrationTitle'>
        <h1>Registration</h1>
      </div>
      <div className='registrationHeader'>
        <h3>Sign Up</h3>
        <h1>Connect with us for Better Tour</h1>
      </div>
      <form
        className='registrationForm'
        onSubmit={handlerSubmit}>
        <h3>Registration Form</h3>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
        />
        <input
          type='text'
          placeholder='Gender'
          name='gender'
        />
        <input
          type='date'
          placeholder='Date of Birth'
          name='dateOfBirth'
        />
        <input
          type='text'
          placeholder='Passport'
          name='passport'
        />
        <input
          type='text'
          placeholder='Card Number'
          name='cardNumber'
        />
        <input
          type='text'
          placeholder='Card Type'
          name='cardType'
        />
        <input
          type='text'
          placeholder='CVV'
          name='cvv'
        />
        <input
          type='text'
          placeholder='Card Validation Name'
          name='cardValidationName'
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
        />
        <input
          type='text'
          placeholder='Confirm Password'
          name='confirmPassword'
        />
        <button
          type='submit'
          className='btn-div'>
          Submit
        </button>
        <p>
          Already have an account?
          <NavLink
            to={"/" + SIGNIN_PAGE_PATH}
            className='signInLink'>
            Sign In
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
