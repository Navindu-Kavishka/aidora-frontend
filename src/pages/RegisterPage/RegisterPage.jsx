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

    // Check for empty fields and set errors
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

    // Check for errors before making the API call
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
        address,
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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(src/assets/donorImg/backgroundreg.jpg)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))'
      }}></div>
      <div style={{ zIndex: 1, width: '100%', maxWidth: '600px', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src='/src/assets/donorImg/logo.png' alt='Logo' style={{ width: '150px', padding: '10px' }} />
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form1' style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
              <input
                style={{ width: '100%', padding: '10px', border: firstNameError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form1'
                type='text'
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder='Enter your first name'
              />
              {firstNameError && <div style={{ color: 'red', fontSize: '12px' }}>{firstNameError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form2' style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
              <input
                style={{ width: '100%', padding: '10px', border: lastNameError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form2'
                type='text'
                value={lastName}
                onChange={handleLastNameChange}
                placeholder='Enter your last name'
              />
              {lastNameError && <div style={{ color: 'red', fontSize: '12px' }}>{lastNameError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form3' style={{ display: 'block', marginBottom: '5px' }}>NIC</label>
              <input
                style={{ width: '100%', padding: '10px', border: nicError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form3'
                type='text'
                value={nic}
                onChange={handleNicChange}
                placeholder='Enter your NIC number'
              />
              {nicError && <div style={{ color: 'red', fontSize: '12px' }}>{nicError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form4' style={{ display: 'block', marginBottom: '5px' }}>Email</label>
              <input
                style={{ width: '100%', padding: '10px', border: emailError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form4'
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter your email address'
              />
              {emailError && <div style={{ color: 'red', fontSize: '12px' }}>{emailError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form5' style={{ display: 'block', marginBottom: '5px' }}>Password</label>
              <input
                style={{ width: '100%', padding: '10px', border: passwordError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form5'
                type='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='Enter your password'
              />
              {passwordError && <div style={{ color: 'red', fontSize: '12px' }}>{passwordError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form6' style={{ display: 'block', marginBottom: '5px' }}>Repeat your password</label>
              <input
                style={{ width: '100%', padding: '10px', border: repeatPasswordError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form6'
                type='password'
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                placeholder='Repeat your password'
              />
              {repeatPasswordError && <div style={{ color: 'red', fontSize: '12px' }}>{repeatPasswordError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form7' style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
              <div style={{ display: 'flex' }}>
                <select
                  style={{ padding: '10px', border: phoneNumberError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px', marginRight: '10px', width: '100px' }}
                  value={phoneNumberCountryCode}
                  onChange={(e) => setPhoneNumberCountryCode(e.target.value)}
                >
                  <option value="+94">+94</option>
                  {/* Add more options if needed */}
                </select>
                <input
                  style={{ width: '100%', padding: '10px', border: phoneNumberError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                  id='form7'
                  type='tel'
                  value={phoneNumberRest}
                  onChange={handlePhoneNumberChange}
                  placeholder='Enter your phone number'
                />
              </div>
              {phoneNumberError && <div style={{ color: 'red', fontSize: '12px' }}>{phoneNumberError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor='form8' style={{ display: 'block', marginBottom: '5px' }}>Address</label>
              <input
                style={{ width: '100%', padding: '10px', border: addressError ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
                id='form8'
                type='text'
                value={address}
                onChange={handleAddressChange}
                placeholder='Enter your address'
              />
              {addressError && <div style={{ color: 'red', fontSize: '12px' }}>{addressError}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  style={{ marginRight: '10px' }}
                  className='form-check-input'
                  type='checkbox'
                  id='flexCheckDefault'
                />
                <label htmlFor='flexCheckDefault'>I agree to all statements in the Terms of Service</label>
              </div>
            </div>
            <button style={{
              backgroundColor: '#15803d',
              borderColor: '#15803d',
              padding: '10px 20px',
              color: 'white',
              borderRadius: '4px',
              width: '100%',
              cursor: 'pointer'
            }} type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
