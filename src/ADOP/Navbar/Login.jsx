import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';


export default function Login (){
  const [isLoginActive, setIsLoginActive] = React.useState(true);
  const [isCreateAccountActive, setIsCreateAccountActive] = React.useState(false);
  const [showOtpInput, setShowOtpInput] = React.useState(false);
  const [isOtpValid, setIsOtpValid] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with", { email, password });


fetch("https://sheetdb.io/api/v1/ayfccol402nxi")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.Email === email && user.Password === password);

        if (user) {
          // Successful login
          alert(`Welcome, ${user["First-Name"]}!`);
          setEmail("");
          setPassword("");
          setIsLoginActive(false);
        } else {
          // Invalid credentials
          alert("Invalid email or password. Please create an account.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("An error occurred. Please try again later.");
      });

    // Add your login logic here
    // if (e) {
    //     setEmail("");
    //     setPassword("");
      // }
  };
  
  




  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    otp: ''
  });
  const [formErrors, setFormErrors] = React.useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone);
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasNumber && hasUppercase && hasSpecialChar;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    
    // Clear previous errors
    setFormErrors(prev => ({...prev, [name]: ''}));
    
    // Add specific password validation feedback
    if (name === 'password') {
      const errors = [];
      if (value.length < 8) errors.push('At least 8 characters');
      if (!/\d/.test(value)) errors.push('At least 1 number');
      if (!/[A-Z]/.test(value)) errors.push('At least 1 uppercase letter');
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) errors.push('At least 1 special character');
      
      if (errors.length > 0) {
        setFormErrors(prev => ({
          ...prev, 
          password: `Password requirements: ${errors.join(', ')}`
        }));
      }
    }
    
    // Existing OTP validation code...
    if (name === 'otp') {
      if (value === '2808') {
        setIsOtpValid(true);
        setFormErrors(prev => ({...prev, otp: ''}));
      } else {
        setIsOtpValid(false);
        if (value.length === 4) {
          setFormErrors(prev => ({...prev, otp: 'Invalid OTP'}));
        }
      }
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    let errors = {};
  
    // Validate form fields
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!validatePhone(formData.phone)) errors.phone = 'Please enter valid 10-digit Indian phone number';
    if (!validateEmail(formData.email)) errors.email = 'Please enter valid email';
    if (!validatePassword(formData.password)) {
      errors.password = 'Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character';
    }
  
    if (showOtpInput) {
      if (!formData.otp) {
        errors.otp = 'Please enter OTP';
      } else if (formData.otp !== '2808') {
        errors.otp = 'Invalid OTP';
      }
    }
  
    setFormErrors(errors);
  
    if (Object.keys(errors).length > 0) return;
  
const url = "https://sheetdb.io/api/v1/ayfccol402nxi";


fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            { 
                "First-Name": formData.firstName,
                "Last-Name": formData.lastName,
                "Phone-Number": formData.phone,
                "Email": formData.email,
                "Password": formData.password,
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));




    // Handle success after submission
    if (Object.keys(errors).length === 0 && (!showOtpInput || isOtpValid)) {
      console.log('Account creation successful', formData);
      setIsCreateAccountActive(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
  
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        otp: ''
      });
      setShowOtpInput(false);
      setIsOtpValid(false);
    }
  };
  const navigate = useNavigate();
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('login-overlay')) {
      setIsLoginActive(false);
      setEmail("");
      setPassword("");
      navigate(-1);
    }
    if (e.target.classList.contains('create-account-overlay')) {
      setIsCreateAccountActive(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        otp: ''
      });
      navigate(-1);
    }
  };

  const handleSignUpClick = () => {
    setIsLoginActive(true);
  };

  const handleCreateAccount = () => {
    setIsLoginActive(false);
    setIsCreateAccountActive(true);
  };


  const sendOTP = () => {
    if (validateEmail(formData.email)) {
      console.log('Sending OTP to', formData.email);
      setShowOtpInput(true);
      alert('OTP sent successfully! (Use 2808 as OTP)');
    } else {
      setFormErrors(prev => ({...prev, email: 'Please enter a valid email'}));
    }
  };

  
  return (
    <>
      <div className={`login-overlay ${isLoginActive ? 'active' : ''}`} onClick={handleOverlayClick}>
        <div className="login-card">
          <h2>Login / Sign Up</h2>
          <form onSubmit={handleLogin}>
          <div className="input-group">
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    />
                </div>
                <label>Password:</label>
                <div className="input-group"style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type={showPassword ? "text" : "password"} // Toggle input type
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="toggle-button"
                        // style={{ marginLeft: "8px" }}
                    >
                        {showPassword ? "Hide" : "Unhide"}
                    </button>
                    </div>
            <button type="submit" className="login-btn">Login</button>
            <div className="auth-links"> 
              <a href="https://example.com/forgot-password">Forgot Password?</a>
            </div>
            <button type="button" className="create-account-btn" onClick={handleCreateAccount}>
              Create New Account
            </button>
          </form>
        </div>
      </div>

      <div className={`create-account-overlay ${isCreateAccountActive ? 'active' : ''}`} onClick={handleOverlayClick}>
        <div className="create-account-card">
          <h2>Create New Account</h2>
          <form onSubmit={handleCreateAccountSubmit}>
            <div className="input-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                placeholder="Enter your first name"
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                placeholder="Enter your last name"
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Enter 10-digit phone number"
                maxLength="10"
              />
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </div>
            <div className="input-group">
              <label>Email</label>
              <div className="email-group">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email"
                />
                <button type="button" onClick={sendOTP} className="otp-btn">Send OTP</button>
              </div>
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            {showOtpInput && (
              <div className="input-group">
                <label>Enter OTP</label>
                <input 
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleFormChange}
                  placeholder="Enter OTP sent to your email"
                />
                {formErrors.otp && <span className="error">{formErrors.otp}</span>}
              </div>
            )}
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                placeholder="Create password (min 8 characters)"
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
              <div className={`password-requirements ${formErrors.password ? 'error' : ''}`}>
                Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character.
              </div>
            </div>
            <button type="submit" className="submit-btn">Create Account</button>
          </form>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="success-message">
          Account created successfully!
        </div>
      )}
    </>
  );
};


