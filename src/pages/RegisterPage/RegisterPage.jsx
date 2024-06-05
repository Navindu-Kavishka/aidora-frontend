import React from 'react';

function RegisterPage() {
  return (
    <div className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(src/backgroundreg.jpg)', minHeight: '100vh'}}>
      <div className='mask gradient-custom-3'></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-10 col-md-8 col-lg-6'>
          <div className='text-center mb-5'>
  <img src='/src/assets/donorImg/logo.png' alt='Logo' style={{ width: '150px', padding: '10px' }} />
</div>

            <div className='bg-white p-4 rounded shadow-sm'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2> 
              <div className='mb-4'>
                <label htmlFor='form1' className='form-label'>First Name</label>
                <input className='form-control form-control-lg' id='form1' type='text'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form2' className='form-label'>Last Name</label>
                <input className='form-control form-control-lg' id='form2' type='text'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form3' className='form-label'>NIC</label>
                <input className='form-control form-control-lg' id='form3' type='text'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form4' className='form-label'>Your Email</label>
                <input className='form-control form-control-lg' id='form4' type='email'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form5' className='form-label'>Password</label>
                <input className='form-control form-control-lg' id='form5' type='password'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form6' className='form-label'>Repeat your password</label>
                <input className='form-control form-control-lg' id='form6' type='password'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form7' className='form-label'>Phone Number</label>
                <input className='form-control form-control-lg' id='form7' type='tel'/>
              </div>
              <div className='mb-4'>
                <label htmlFor='form8' className='form-label'>Address</label>
                <input className='form-control form-control-lg' id='form8' type='text'/>
              </div>
              <div className='mb-4'>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' id='flexCheckDefault'/>
                  <label className='form-check-label' htmlFor='flexCheckDefault'>
                    I agree all statements in Terms of service
                  </label>
                </div>
              </div>
              <button style={{ backgroundColor: '#15803d', borderColor: '#15803d' }} className="btn btn-lg btn-primary mb-4 w-100">Register</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
