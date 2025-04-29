
import React, { useState } from 'react';
import './SignInForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="main">
          <div className="logo">
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5084_40515)">
                <path d="M20.5378 0.5H5.46218C2.4455 0.5 0 2.9455 0 5.96218V21.0378C0 24.0545 2.4455 26.5 5.46218 26.5H20.5378C23.5545 26.5 26 24.0545 26 21.0378V5.96218C26 2.9455 23.5545 0.5 20.5378 0.5Z" fill="#337BFF" />
                <path d="M7.70166 5.74376C7.70166 5.62309 7.79949 5.52527 7.92015 5.52527H9.41471C11.2247 5.52527 12.692 6.99258 12.692 8.80258V16.902C12.692 17.0227 12.5942 17.1205 12.4735 17.1205H11.3613C9.34015 17.1205 7.70166 15.482 7.70166 13.4608V5.74376Z" fill="white" />
                <path d="M10.4169 19.2732L12.5546 17.1356C12.5956 17.0946 12.6511 17.0715 12.7091 17.0715H18.0248C19.2407 17.0715 20.2264 18.0572 20.2264 19.2732C20.2264 20.4891 19.2407 21.4748 18.0248 21.4748H8.76315C8.56907 21.4748 8.4713 21.2407 8.60775 21.1027L10.4169 19.2732Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_5084_40515">
                  <rect width="26" height="26" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="signin-label">
            <h1>Sign In</h1>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} eye-icon`}></i>
              </button>
            </div>
            <div className='forgot-password'>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="signin-button">Sign In</button>
            <button className="google-signin-button">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4907_2877)">
                  <path d="M24.2663 12.2765C24.2663 11.4608 24.2001 10.6406 24.059 9.83813H12.7402V14.4591H19.222C18.953 15.9495 18.0888 17.2679 16.8233 18.1056V21.104H20.6903C22.9611 19.014 24.2663 15.9274 24.2663 12.2765Z" fill="#4285F4" />
                  <path d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z" fill="#34A853" />
                  <path d="M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z" fill="#FBBC04" />
                  <path d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_4907_2877">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>Sign in with Google
            </button>
          </form>
          <div className="signup-link">
            <label>Don't have an account?</label>
            <div className='signup'>
                <a href="#">Sign up</a>
            </div>
            
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-main">
          <label className='company-name'>© LazyLines 2024</label>
          <label className='company-email'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6663 4.00008C14.6663 3.26675 14.0663 2.66675 13.333 2.66675H2.66634C1.93301 2.66675 1.33301 3.26675 1.33301 4.00008M14.6663 4.00008V12.0001C14.6663 12.7334 14.0663 13.3334 13.333 13.3334H2.66634C1.93301 13.3334 1.33301 12.7334 1.33301 12.0001V4.00008M14.6663 4.00008L7.99967 8.66675L1.33301 4.00008" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            contact@lazylines.ai</label>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;