import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 3;
  const fieldsetsRef = useRef([]);
  const progressBarRef = useRef(null);

 

  const stepNames = [
    "Create",
    "Submit for Approval",
    "Verified",
   
  ];

  return (

    <div className="progress-bar-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <div className="progress-bar-inner" style={{ width: '90%', maxWidth: '500px', textAlign: 'center', padding: '0', marginTop: '30px', marginBottom: '20px' }}>
        <div className="progress-bar-form-wrapper" style={{ padding: '0 0 20px 0', marginTop: '30px', marginBottom: '30px' }}>
          <form id="progress-bar-form">
            <ul id="progress-bar-list" style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', color: 'lightgrey', marginBottom: '30px', padding: 0 }}>
              {[1, 2, 3].map((s) => (
                <li key={s} id={`progressbar-step-${s}`} style={{ textAlign: 'center', width: '25%', position: 'relative', color: currentStep >= s ? '#2F8D46' : 'lightgrey' }}>
                  <div className="progress-bar-step-circle" style={{ width: '50px', height: '50px', lineHeight: '45px', display: 'block', fontSize: '20px', color: '#ffffff', background: currentStep >= s ? '#2F8D46' : 'lightgray', borderRadius: '50%', margin: '0 auto 10px auto' }}>{s}</div>
                  <strong>{stepNames[s - 1]}</strong>
                  {s < 3 && <div className="progress-bar-step-line" style={{ content: '', width: '100%', height: '2px', background: currentStep >= s ? '#2F8D46' : 'lightgray', position: 'absolute', left: 0, top: '25px', zIndex: -1 }}></div>}
                </li>
              ))}
            </ul>
            <div className="progress-bar-background" style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '13px', overflow: 'hidden', marginBottom: '20px' }}>
              <div ref={progressBarRef} className="progress-bar-fill" style={{ height: '20px', backgroundColor: '#2F8D46', borderRadius: '13px', width: `${((currentStep / steps) * 100)}%` }}></div>
            </div>
            {[1, 2, 3].map((s, index) => (
              <fieldset
                key={s}
                ref={(el) => (fieldsetsRef.current[index] = el)}
                className={`progress-bar-fieldset-${s}`}
                style={{
                  background: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxSizing: 'border-box',
                  width: '100%',
                  margin: 0,
                  paddingBottom: '10px',
                  display: currentStep === s ? 'block' : 'none',
                  position: currentStep === s ? 'relative' : 'absolute'
                }}
              >
              
              </fieldset>
            ))}
           
             
          </form>
        </div>
      </div>

    </div>

  );
};

export default ProgressBar;
