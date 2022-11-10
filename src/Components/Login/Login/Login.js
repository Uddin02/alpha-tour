import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Image from "../../../assets/login.png";
import Logo from "../../../assets/New Project.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login");

  const { signIn, setLoading, signInWithGoogle, setUser, forgetPassword } =
    useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true });
        alert.success("Login successful");
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        const currentUser = {
          email: user.email
        }

        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('alphaToken', data.token);
          navigate(from, { replace: true });
        })
        form.reset(); 
      })
      .catch((error) => console.log(error.message))

      .finally(() => {
        setLoading(false);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    // console.log(email);
  };

  const handleForgetPassword = () => {
    forgetPassword(userEmail)
      .then(() => {
        Swal.fire(
          "Password Reset email sent",
          "Please check your email.",
          "success"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#e3eafe]">
      <p className="text-2xl text-center font-bold pt-5 text-blue-400 pb-5">
        Log in to your account!
      </p>
      <section className="py-20 lg:py-[8px]">
        <div className="grid lg:grid-cols-2 items-center justify-center mb-10">
          <div>
            <img className=" max-h-[515px] w-auto mx-auto" src={Image} alt="" />
          </div>
          <div className="flex w-auto flex-wrap mx-2">
            <div className="w-full px-4">
              <div className="max-w-[520px] mx-auto  bg-white rounded-lg relative overflow-hidden py-5 px-8 sm:px-12 md:px-[60px] ">
                <div className="md:mb-10 text-center">
                  <Link
                    href="#"
                    className="inline-block mt-2 max-w-[160px] mx-auto"
                  >
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                {/* onSubmit={handleSubmit} */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      onBlur={handleEmailBlur}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="
                            w-full
                            rounded-md
                            border
                            bordder-[#E9EDF4]
                            py-3
                            px-5
                            bg-[#fbfcfe]
                            text-base text-[#525456]
                            placeholder-[#9fa7ac]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-info
                            "
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="
                            w-full
                            rounded-md
                            border
                            bordder-[#E9EDF4]
                            py-3
                            px-5
                            bg-[#fbfcfe]
                            text-base text-[#525456]
                            placeholder-[#9fa7ac]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-info
                            "
                      required
                    />
                    <Link
                      onClick={handleForgetPassword}
                      href="#"
                      className="
                      text-base
                      inline-block
                      mt-2
                      mb-2
                      text-[#757575]
                      hover:underline hover:text-primary
                      "
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <div className="mb-5">
                    <button
                      type="submit"
                      value="login"
                      className="
                            w-full
                            rounded-md
                            py-3
                            px-5
                            bg-[#e3eafe]
                            text-base text-gray-700
                            cursor-pointer
                            hover:bg-gray-900 hover:text-white
                            "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="flex items-center  before:flex-1 before:border-t before:border-gray-500 before:mt-0.5 after:flex-1 after:border-t after:border-gray-500 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0 text-base  text-[#757575]">
                    Or continue With
                  </p>
                </div>
                <ul className="flex justify-between -mx-2 mb-5 pt-3">
                  {/* onClick={handleGoogleSignIn} */}
                  <li onClick={handleGoogleSignIn} className="px-2 w-full">
                    <Link
                      className="
                                flex
                                h-11
                                items-center
                                justify-center
                                rounded-md
                                bg-[#D64937]
                                hover:bg-opacity-90
                                "
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>

                <p className="text-base text-center text-[#757575]">
                  Not a member yet?
                  <span className="pl-2">
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign Up
                    </Link>
                  </span>
                </p>
                <div>
                  <span className="absolute top-1 right-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.39737"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 1.39737 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 1.39737 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 13.6943 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 13.6943 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 25.9911 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 25.9911 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 38.288 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 38.288 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 1.39737 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 13.6943 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 25.9911 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 38.288 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 1.39737 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 13.6943 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 25.9911 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 38.288 14.0086)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-1 bottom-1">
                    <svg
                      width="29"
                      height="40"
                      viewBox="0 0 29 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.288"
                        cy="25.9912"
                        r="1.39737"
                        transform="rotate(-90 2.288 25.9912)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 14.5849 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 26.7216 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="13.6944"
                        r="1.39737"
                        transform="rotate(-90 2.288 13.6944)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 14.5849 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 26.7216 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="38.0087"
                        r="1.39737"
                        transform="rotate(-90 2.288 38.0087)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="1.39739"
                        r="1.39737"
                        transform="rotate(-90 2.288 1.39739)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 14.5849 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 26.7216 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 14.5849 1.39761)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 26.7216 1.39761)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
