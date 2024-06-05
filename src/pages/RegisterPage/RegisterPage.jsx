import React, { useState } from 'react';

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

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);
    if (!isValidEmail) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    // Password validation
    if (passwordValue.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleRepeatPasswordChange = (e) => {
    const repeatPasswordValue = e.target.value;
    setRepeatPassword(repeatPasswordValue);
    // Repeat password validation
    if (repeatPasswordValue !== password) {
      setRepeatPasswordError('Passwords do not match');
    } else {
      setRepeatPasswordError('');
    }
  };

  const handleFirstNameChange = (e) => {
    const firstNameValue = e.target.value;
    setFirstName(firstNameValue);
    // First name validation
    if (!/^[a-zA-Z]*$/.test(firstNameValue)) {
      setFirstNameError('First name should only contain letters');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (e) => {
    const lastNameValue = e.target.value;
    setLastName(lastNameValue);
    // Last name validation
    if (!/^[a-zA-Z]*$/.test(lastNameValue)) {
      setLastNameError('Last name should only contain letters');
    } else {
      setLastNameError('');
    }
  };

  const handleNicChange = (e) => {
    const nicValue = e.target.value;
    setNic(nicValue);
    // NIC validation
    const nicRegex = /^(\d{9}[vV]|\d{12})$/;
    if (!nicRegex.test(nicValue)) {
      setNicError('Please enter a valid NIC number (e.g., 123456789v or 123456789012)');
    } else {
      setNicError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    // Check if the entered value starts with '+94'
    if (phoneNumberValue.startsWith('+94')) {
      // If yes, remove the country code
      const restNumber = phoneNumberValue.replace('+94', '');
      // If the length is more than 9, truncate it to 9 digits
      if (restNumber.length > 9) {
        setPhoneNumberRest(restNumber.slice(0, 9));
      } else {
        setPhoneNumberRest(restNumber);
      }
    } else {
      setPhoneNumberRest(phoneNumberValue);
    }
    // Phone number validation
    if (!/^\d{9}$/.test(phoneNumberValue)) {
      setPhoneNumberError('Please enter a valid phone number with 9 digits');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleAddressChange = (e) => {
    const addressValue = e.target.value;
    setAddress(addressValue);
    // Address validation (if needed)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if there are no errors before submitting
    if (!emailError && !passwordError && !repeatPasswordError && !firstNameError && !lastNameError && !nicError && !phoneNumberError && !addressError) {
      // Your registration submission logic here
      console.log('Form submitted');
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
                  <input className={`form-control form-control-lg ${firstNameError ? 'is-invalid' : ''}`} id='form1' type='text' value={firstName} onChange={handleFirstNameChange}/>
                  {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form2' className='form-label'>Last Name</label>
                  <input className={`form-control form-control-lg ${lastNameError ? 'is-invalid' : ''}`} id='form2' type='text' value={lastName} onChange={handleLastNameChange}/>
                  {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form3' className='form-label'>NIC</label>
                  <input className={`form-control form-control-lg ${nicError ? 'is-invalid' : ''}`} id='form3' type='text' value={nic} onChange={handleNicChange}/>
                  {nicError && <div className="invalid-feedback">{nicError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form4' className='form-label'>Your Email</label>
                  <input className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`} id='form4' type='email' value={email} onChange={handleEmailChange}/>
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form5' className='form-label'>Password</label>
                  <input className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`} id='form5' type='password' value={password} onChange={handlePasswordChange}/>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form6' className='form-label'>Repeat your password</label>
                  <input className={`form-control form-control-lg ${repeatPasswordError ? 'is-invalid' : ''}`} id='form6' type='password' value={repeatPassword} onChange={handleRepeatPasswordChange}/>
                  {repeatPasswordError && <div className="invalid-feedback">{repeatPasswordError}</div>}
                </div>
                <div className='mb-4'>
                  <label htmlFor='form7' className='form-label'>Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">Country Code</span>
                    <select className={`form-select form-select-lg ${phoneNumberError ? 'is-invalid' : ''}`} value={phoneNumberCountryCode} onChange={(e) => setPhoneNumberCountryCode(e.target.value)}>
                      <option value="+94">+94</option>
                      {/* Add more options if needed */}
                    </select>
                    <input className={`form-control form-control-lg ${phoneNumberError ? 'is-invalid' : ''}`} id='form7' type='tel' value={phoneNumberRest} onChange={handlePhoneNumberChange}/>
                    {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                  </div>
                </div>
                <div className='mb-4'>
                  <label htmlFor='form8' className='form-label'>Address</label>
                  <input className={`form-control form-control-lg ${addressError ? 'is-invalid' : ''}`} id='form8' type='text' value={address} onChange={handleAddressChange}/>
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

