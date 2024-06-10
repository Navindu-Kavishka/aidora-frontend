import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phoneNumberCountryCode, setPhoneNumberCountryCode] = useState('+94');
  const [phoneNumberRest, setPhoneNumberRest] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [nicError, setNicError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [addressError, setAddressError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);
    if (!isValidEmail) {
      setEmailError('Please enter a valid Email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleRepeatPasswordChange = (e) => {
    const repeatPasswordValue = e.target.value;
    setRepeatPassword(repeatPasswordValue);
    if (repeatPasswordValue !== password) {
      setRepeatPasswordError('Passwords do not match');
    } else {
      setRepeatPasswordError('');
    }
  };

  const handleFirstNameChange = (e) => {
    const firstNameValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(firstNameValue)) {
      setFirstName(firstNameValue);
      setFirstNameError('');
    } else {
      setFirstNameError('First name should only contain letters');
    }
  };

  const handleLastNameChange = (e) => {
    const lastNameValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(lastNameValue)) {
      setLastName(lastNameValue);
      setLastNameError('');
    } else {
      setLastNameError('Last name should only contain letters');
    }
  };

  const handleNicChange = (e) => {
    const nicValue = e.target.value;
    const sanitizedValue = nicValue.replace(/[^0-9vV]/gi, '');
    setNic(sanitizedValue);

    const nicRegex = /^(\d{9}[vV]|\d{12})$/;
    if (!nicRegex.test(sanitizedValue)) {
      setNicError('Please enter a valid NIC number (e.g., 123456789v or 123456789012)');
    } else {
      setNicError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value.replace(/\D/g, '');
    if (phoneNumberValue.startsWith('+94')) {
      const restNumber = phoneNumberValue.replace('+94', '');
      if (restNumber.length > 9) {
        setPhoneNumberRest(restNumber.slice(0, 9));
      } else {
        setPhoneNumberRest(restNumber);
      }
    } else {
      if (phoneNumberValue.length > 9) {
        setPhoneNumberRest(phoneNumberValue.slice(0, 9));
      } else {
        setPhoneNumberRest(phoneNumberValue);
      }
    }
    if (!/^\d{9}$/.test(phoneNumberValue)) {
      setPhoneNumberError('Please enter a valid phone number with exactly 9 digits');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleAddressChange = (e) => {
    const addressValue = e.target.value;
    setAddress(addressValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      !firstName ||
      !lastName ||
      !nic ||
      !email ||
      !password ||
      !repeatPassword ||
      !phoneNumberCountryCode ||
      !phoneNumberRest ||
      !address
    ) {
      setFirstNameError('First name is required');
      setLastNameError('Last name is required');
      setNicError('NIC is required');
      setEmailError('Email is required');
      setPasswordError('Password is required');
      setRepeatPasswordError('Repeat password is required');
      setPhoneNumberError('Phone number is required');
      setAddressError('Address is required');
      console.log('Please fill all fields');
      return;
    }

    if (
      !emailError &&
      !passwordError &&
      !repeatPasswordError &&
      !firstNameError &&
      !lastNameError &&
      !nicError &&
      !phoneNumberError &&
      !addressError
    ) {
      const userData = {
        firstName,
        lastName,
        nic,
        email,
        password,
        phoneNumberCountryCode,
        phoneNumberRest,
        address
      };

      try {
        const response = await axios.post('http://localhost:5000/api/users/register', userData);
        const { token } = response.data;

        // Store the token in local storage
        localStorage.setItem('token', token);

        

        // Redirect to the homepage 
        navigate('/');
      } catch (error) {
        console.error('Error during registration:', error);
        // Handle errors here (show error messages to the user)
      }
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(src/assets/donorImg/backgroundreg.jpg)', minHeight: '100vh'}}>
      <div className='mask gradient-custom-3'></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6'>
            <div className='text-center mb-5'>
              <img src='/src/assets/donorImg/logo.png' alt='Logo' style={{ width: '150px', padding: '10px' }} />
            </div>

            <div className='bg-white p-4 rounded shadow-sm'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2> 
              <form onSubmit={handleSubmit} className="row g-3">
                <div className='mb-4'>
                  <label htmlFor='form1' className='form-label'>First Name</label>
                  <input
                    className={`form-control form-control-lg ${firstNameError ? 'is-invalid' : ''}`}
                    id='form1'
                    type='text'
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder='Enter your first name'
                  />
                  {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form2' className='form-label'>Last Name</label>
                  <input
                    className={`form-control form-control-lg ${lastNameError ? 'is-invalid' : ''}`}
                    id='form2'
                    type='text'
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder='Enter your last name'
                  />
                  {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form3' className='form-label'>NIC</label>
                  <input
                    className={`form-control form-control-lg ${nicError ? 'is-invalid' : ''}`}
                    id='form3'
                    type='text'
                    value={nic}
                    onChange={handleNicChange}
                    placeholder='Enter your NIC number'
                  />
                  {nicError && <div className="invalid-feedback">{nicError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form4' className='form-label'>Email</label>
                  <input
                    className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                    id='form4'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email address'
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form5' className='form-label'>Password</label>
                  <input
                    className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
                    id='form5'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='Enter your password'
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form6' className='form-label'>Repeat your password</label>
                  <input
                    className={`form-control form-control-lg ${repeatPasswordError ? 'is-invalid' : ''}`}
                    id='form6'
                    type='password'
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    placeholder='Repeat your password'
                  />
                  {repeatPasswordError && <div className="invalid-feedback">{repeatPasswordError}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="form7" className="form-label">Phone Number</label>
                  <div className="input-group">
                    <select
                      className={`form-select form-select-lg ${phoneNumberError ? "is-invalid" : ""}`}
                      value={phoneNumberCountryCode}
                      onChange={(e) => setPhoneNumberCountryCode(e.target.value)}
                      style={{ maxWidth: "100px" }}
                    >
                      <option value="+94">+94</option>
                      {/* Add more options if needed */}
                    </select>
                    <input
                      className={`form-control form-control-lg ${phoneNumberError ? "is-invalid" : ""}`}
                      id="form7"
                      type="tel"
                      value={phoneNumberRest}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter your phone number"
                      style={{ maxWidth: "calc(100% - 80px)" }}
                    />
                    {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                  </div>
                </div>
                <div className='mb-4'>
                  <label htmlFor='form8' className='form-label'>Address</label>
                  <input
                    className={`form-control form-control-lg ${addressError ? 'is-invalid' : ''}`}
                    id='form8'
                    type='text'
                    value={address}
                    onChange={handleAddressChange}
                    placeholder='Enter your address'
                  />
                  {addressError && <div className="invalid-feedback">{addressError}</div>}
                </div>
                {/* Agreement checkbox */}
                <div className='mb-4'>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' id='flexCheckDefault'/>
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      I agree to all statements in the Terms of Service
                    </label>
                  </div>
                </div>
                <button style={{ backgroundColor: '#15803d', borderColor: '#15803d' }} className="btn btn-lg btn-primary mb-4 w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
