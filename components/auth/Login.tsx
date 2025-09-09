// // "use client";

// // import React, { useState } from 'react';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       alert('Please enter both email and password');
// //       return;
// //     }

// //     setLoading(true);

// //     // Simulate API call
// //     setTimeout(() => {
// //       // In a real app, you would save to localStorage here:
// //       // localStorage.setItem('knm_token', 'fake-jwt-token-12345');
// //       // localStorage.setItem('user_email', email);

// //       setIsLoggedIn(true);
// //       setLoading(false);
// //     }, 1500);
// //   };

// //   if (isLoggedIn) {
// //     return (
// //       <div className="success-container">
// //         <div className="success-card">
// //           <div className="success-icon">
// //             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// //             </svg>
// //           </div>
// //           <h2 className="success-title">Login Successful!</h2>
// //           <p className="success-subtitle">Welcome to KNM VISA OEP Dashboard</p>
// //           <p className="success-token">
// //             Token saved: <span className="token-value">fake-jwt-token-12345</span>
// //           </p>
// //           <p className="success-note">
// //             In a real Next.js app, you would now be redirected to the dashboard.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="login-container">
// //       <div className="login-background"></div>
// //       <div className="login-overlay"></div>

// //       <div className="login-content">
// //         <div className="login-card">
// //           <div className="login-header">
// //             <div className="logo-container">
// //               <div className="logo-icon">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// //                     d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
// //                 </svg>
// //               </div>
// //               <h1 className="logo-text">KNM VISA OEP</h1>
// //             </div>
// //             <p className="login-subtitle">Welcome back! Please sign in to your account</p>
// //           </div>

// //           <div className="login-form">
// //             <div className="form-group">
// //               <label className="form-label">Email Address</label>
// //               <div className="input-container">
// //                 <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// //                     d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
// //                 </svg>
// //                 <input
// //                   type="email"
// //                   className="form-input"
// //                   placeholder="Enter your email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="form-group">
// //               <label className="form-label">Password</label>
// //               <div className="input-container">
// //                 <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// //                     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
// //                 </svg>
// //                 <input
// //                   type="password"
// //                   className="form-input"
// //                   placeholder="Enter your password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="form-options">
// //               <label className="remember-me">
// //                 <input type="checkbox" />
// //                 <span className="checkmark"></span>
// //                 Remember me
// //               </label>
// //               <a href="#" className="forgot-password">Forgot Password?</a>
// //             </div>

// //             <button type="submit" className="login-button" onClick={handleLogin} disabled={loading}>
// //               {loading ? (
// //                 <div className="button-loading">
// //                   <div className="spinner"></div>
// //                   Signing In...
// //                 </div>
// //               ) : (
// //                 'Sign In'
// //               )}
// //             </button>
// //           </div>

// //           <div className="login-footer">
// //             <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .success-container {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 75%, #0f172a 100%);
// //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
// //         }

// //         .success-card {
// //           background: rgba(30, 41, 59, 0.95);
// //           backdrop-filter: blur(20px);
// //           border: 1px solid rgba(71, 85, 105, 0.3);
// //           border-radius: 24px;
// //           padding: 48px 40px;
// //           max-width: 420px;
// //           width: 100%;
// //           margin: 0 20px;
// //           text-align: center;
// //           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
// //         }

// //         .success-icon {
// //           width: 64px;
// //           height: 64px;
// //           background: linear-gradient(135deg, #3b82f6, #06b6d4);
// //           border-radius: 16px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           margin: 0 auto 24px;
// //           box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.4);
// //         }

// //         .success-icon svg {
// //           width: 32px;
// //           height: 32px;
// //           color: white;
// //         }

// //         .success-title {
// //           font-size: 32px;
// //           font-weight: 700;
// //           color: white;
// //           margin: 0 0 16px 0;
// //         }

// //         .success-subtitle {
// //           color: #94a3b8;
// //           font-size: 18px;
// //           margin: 0 0 24px 0;
// //         }

// //         .success-token {
// //           color: #94a3b8;
// //           font-size: 14px;
// //           margin: 0 0 16px 0;
// //         }

// //         .token-value {
// //           color: #10b981;
// //           font-weight: 600;
// //         }

// //         .success-note {
// //           color: #94a3b8;
// //           font-size: 14px;
// //           margin: 0;
// //         }

// //         .login-container {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
// //         }

// //         .login-background {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e3a8a 75%, #0f172a 100%);
// //           background-size: 400% 400%;
// //           animation: gradientShift 15s ease infinite;
// //         }

// //         .login-overlay {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: rgba(15, 23, 42, 0.3);
// //           backdrop-filter: blur(1px);
// //         }

// //         .login-content {
// //           position: relative;
// //           z-index: 10;
// //           width: 100%;
// //           max-width: 420px;
// //           margin: 0 20px;
// //         }

// //         .login-card {
// //           background: rgba(30, 41, 59, 0.95);
// //           backdrop-filter: blur(20px);
// //           border: 1px solid rgba(71, 85, 105, 0.3);
// //           border-radius: 24px;
// //           padding: 48px 40px;
// //           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .login-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 1px;
// //           background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
// //         }

// //         .login-header {
// //           text-align: center;
// //           margin-bottom: 40px;
// //         }

// //         .logo-container {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 12px;
// //           margin-bottom: 16px;
// //         }

// //         .logo-icon {
// //           width: 48px;
// //           height: 48px;
// //           background: linear-gradient(135deg, #3b82f6, #06b6d4);
// //           border-radius: 12px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.4);
// //         }

// //         .logo-icon svg {
// //           width: 24px;
// //           height: 24px;
// //           color: white;
// //         }

// //         .logo-text {
// //           font-size: 28px;
// //           font-weight: 700;
// //           color: white;
// //           letter-spacing: -0.025em;
// //         }

// //         .login-subtitle {
// //           color: #94a3b8;
// //           font-size: 16px;
// //           margin: 0;
// //         }

// //         .login-form {
// //           margin-bottom: 32px;
// //         }

// //         .form-group {
// //           margin-bottom: 24px;
// //         }

// //         .form-label {
// //           display: block;
// //           color: #e2e8f0;
// //           font-size: 14px;
// //           font-weight: 600;
// //           margin-bottom: 8px;
// //         }

// //         .input-container {
// //           position: relative;
// //         }

// //         .input-icon {
// //           position: absolute;
// //           left: 16px;
// //           top: 50%;
// //           transform: translateY(-50%);
// //           width: 20px;
// //           height: 20px;
// //           color: #64748b;
// //           pointer-events: none;
// //         }

// //         .form-input {
// //           width: 100%;
// //           padding: 16px 16px 16px 48px;
// //           background: rgba(15, 23, 42, 0.8);
// //           border: 1px solid rgba(71, 85, 105, 0.4);
// //           border-radius: 12px;
// //           color: white;
// //           font-size: 16px;
// //           transition: all 0.3s ease;
// //           box-sizing: border-box;
// //         }

// //         .form-input:focus {
// //           outline: none;
// //           border-color: #3b82f6;
// //           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
// //         }

// //         .form-input::placeholder {
// //           color: #64748b;
// //         }

// //         .form-options {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 32px;
// //         }

// //         .remember-me {
// //           display: flex;
// //           align-items: center;
// //           color: #cbd5e1;
// //           font-size: 14px;
// //           cursor: pointer;
// //         }

// //         .remember-me input {
// //           margin-right: 8px;
// //         }

// //         .forgot-password {
// //           color: #3b82f6;
// //           text-decoration: none;
// //           font-size: 14px;
// //           font-weight: 500;
// //         }

// //         .forgot-password:hover {
// //           color: #60a5fa;
// //         }

// //         .login-button {
// //           width: 100%;
// //           padding: 16px;
// //           background: linear-gradient(135deg, #3b82f6, #1d4ed8);
// //           border: none;
// //           border-radius: 12px;
// //           color: white;
// //           font-size: 16px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .login-button:hover:not(:disabled) {
// //           transform: translateY(-2px);
// //           box-shadow: 0 12px 25px -5px rgba(59, 130, 246, 0.4);
// //         }

// //         .login-button:disabled {
// //           opacity: 0.7;
// //           cursor: not-allowed;
// //         }

// //         .button-loading {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 8px;
// //         }

// //         .spinner {
// //           width: 16px;
// //           height: 16px;
// //           border: 2px solid transparent;
// //           border-top: 2px solid white;
// //           border-radius: 50%;
// //           animation: spin 1s linear infinite;
// //         }

// //         .login-footer {
// //           text-align: center;
// //           padding-top: 24px;
// //           border-top: 1px solid rgba(71, 85, 105, 0.3);
// //         }

// //         .login-footer p {
// //           color: #94a3b8;
// //           margin: 0;
// //           font-size: 14px;
// //         }

// //         .signup-link {
// //           color: #3b82f6;
// //           text-decoration: none;
// //           font-weight: 500;
// //         }

// //         .signup-link:hover {
// //           color: #60a5fa;
// //         }

// //         @keyframes gradientShift {
// //           0% {
// //             background-position: 0% 50%;
// //           }
// //           50% {
// //             background-position: 100% 50%;
// //           }
// //           100% {
// //             background-position: 0% 50%;
// //           }
// //         }

// //         @keyframes spin {
// //           0% {
// //             transform: rotate(0deg);
// //           }
// //           100% {
// //             transform: rotate(360deg);
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .login-card {
// //             padding: 32px 24px;
// //             margin: 20px;
// //           }

// //           .logo-text {
// //             font-size: 24px;
// //           }

// //           .success-card {
// //             padding: 32px 24px;
// //             margin: 20px;
// //           }
// //         }
// //       `}</style>

// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./Login.module.css";
// import Image from "next/image";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   async function onSubmit(e: FormEvent) {
//     e.preventDefault();
//     setError(null);

//     if (!email || !password) {
//       setError("Email aur password dono required hain.");
//       return;
//     }

//     try {
//       setLoading(true);
//       // fake auth delay
//       await new Promise((r) => setTimeout(r, 600));

//       // FAKE TOKEN save
//       const fakeToken = `fake_jwt_${Date.now()}`;
//       localStorage.setItem("auth_token", fakeToken);
//       localStorage.setItem("auth_email", email);

//       router.push("/dashboard");
//     } catch (err) {
//       setError("please try again something wrong!");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <Image
//           src="/logo-removebg-preview.png"
//           alt="logo"
//           width={150}
//           height={150}
//           className="login_img"
//         />
//         <div className={styles.header}>
//           <div className={styles.brand}>
//             <div className={styles.title}>KNM VISA OEP</div>
//           </div>
//           <div className={styles.status}>System Online</div>
//         </div>

//         <form className={styles.form} onSubmit={onSubmit}>
//           {error && <div className={styles.error}>{error}</div>}

//           <div>
//             <label className={styles.label} htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               className={styles.input}
//               placeholder="you@example.com"
//               type="email"
//               autoComplete="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className={styles.label} htmlFor="password">
//               Password
//             </label>
//             <input
//               id="password"
//               className={styles.input}
//               placeholder="••••••••"
//               type="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className={styles.actions}>
//             <span className={styles.hint}>
//               Demo: koi bhi email/password chalega
//             </span>
//             <a className="link" href="#">
//               Forgot password?
//             </a>
//           </div>

//           <button className={styles.btn} disabled={loading} type="submit">
//             {loading ? "Logging in…" : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("knm_token");
    if (token) {
    //   router.push("/dashboard");
    //   window.location.reload();
    }
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - replace with your actual API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save to localStorage
      const fakeToken = "fake-jwt-token-12345";
      localStorage.setItem("knm_token", fakeToken);
      localStorage.setItem("user_email", email);

      if (rememberMe) {
        localStorage.setItem("remember_me", "true");
      }

      setIsLoggedIn(true);
           window.location.reload();
    //   setTimeout(() => {
    //     // router.push('/dashboard');
    //     window.location.reload();
    //   }, );
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Redirect to forgot password page
    // router.push("/forgot-password");
  };

  const handleSignUp = () => {
    // Redirect to sign up page
    router.push("/register");
  };

  //   if (isLoggedIn) {
  //     return (
  //       <div className="success-container">
  //         <div className="success-card">
  //           <div className="success-icon">
  //             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  //             </svg>
  //           </div>
  //           <h2 className="success-title">Login Successful!</h2>
  //           <p className="success-subtitle">Welcome to KNM VISA OEP Dashboard</p>
  //           <p className="success-token">
  //             Token saved: <span className="token-value">fake-jwt-token-12345</span>
  //           </p>
  //           <p className="success-note">
  //             Redirecting to dashboard...
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-overlay"></div>

      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-container">
              <div className="logo-icon">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="login_img"
                />
              </div>
              <h1 className="logo-text">KNM VISA OEP</h1>
            </div>
            <p className="login-subtitle">
              Welcome back! Please sign in to your account
            </p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <div className="input-container">
                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div className="input-container">
                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? (
                <div className="button-loading">
                  <div className="spinner"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?
              <button
                type="button"
                className="signup-link"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
