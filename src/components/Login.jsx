import React, { useState } from 'react';
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import logo3 from "../../images/logo3.png";
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';
import Transactions from './Transactions';
import Services from './Services';
import Market from './Market';

const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [inputName, setInputName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignUp();
        },
        'expired-callback': () => { }
      }, auth);
    }
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult.confirm(otp).then(async (result) => {
      console.log(result);
      setUser(result.user);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  };

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const onSignUp = () => {
    setLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully");
        setInputName(inputName);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setUser(null);
    setShowOTP(false);
    setPh("");
    setInputName("");
    setOtp("");
  };

  return (
    <div>
      {user ? (
        <>
          <div className="gradient-bg-welcome">
            <Navbar onLogout={handleLogout} />
            <Welcome inputName={inputName} />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="transactionhistory">
            <Transactions />
          </div>
          <div id="market">
            <Market />
          </div>
          <Footer />
        </>
      ) : (
        <section className="gradient-bg-login flex justify-center items-center h-screen">
          <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id='recaptcha-container'></div>
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              <img src={logo3} alt="logo" className='mb-16' />
              {showOTP ? (
                <>
                  <div className='bg-white rounded-full mx-auto w-fit p-4'>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label htmlFor="otp" className='font-bold text-white text-xl text-center'>
                    Enter Your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="otp-container"
                  />
                  <button className='bg-[#6DA5C0] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded hover:bg-[#86A8CF] duration-200' onClick={onOTPVerify}>
                    {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                    <span>
                      Verify OTP
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div className='bg-white rounded-full mx-auto w-fit p-4'>
                    <BsTelephoneFill size={30} />
                  </div>
                  <label htmlFor="" className='font-bold text-white text-xl text-center'>
                    Enter Name & Phone Number
                  </label>
                  <input type="text" className='rounded-md' placeholder='Enter Your Name' value={inputName} onChange={handleInputName} />
                  <PhoneInput country={"in"} value={ph} onChange={setPh} />
                  <button className='bg-[#6DA5C0] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded hover:bg-[#86A8CF] duration-200' onClick={onSignUp}>
                    {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                    <span>
                      Send Code via SMS
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
