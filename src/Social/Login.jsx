import { Search, Users, Network } from "lucide-react";
import LoginImage from "../assets/loginimage.svg";
import logo from "../assets/logo (2).svg";

const Login = () => {
  return (
    <div className="flex h-screen bg-[#f0f2f7]">
      {/* Left side */}
      <div className="w-1/2 flex items-center justify-center p-4 ">
        <div className="bg-white rounded-3xl p-12 h-full  m-3 w-full shadow-sm ">
          <div className="flex justify-center mb-8 ">
            <img
              src={LoginImage}
              alt="Education illustration"
              width={300}
              height={300}
              className="object-contain h-[400px]"
            />
          </div>

          <div className="max-w-[400px] mx-auto ">
            <div className="mb-8 ">
              <h1 className="text-3xl font-bold mb-1">
                Transform your institute
                <br />
                with <span className="text-blue-600">Shikshayan</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 rounded-full p-3">
                  <Search className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Track performance and get invaluable insights to improve
                    student performance and employees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 rounded-full p-3">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Track performance and get invaluable insights to improve
                    student performance and employees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 rounded-full p-3">
                  <Network className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Track performance and get invaluable insights to improve
                    student performance and employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-[400px]">
          <div className="flex  mb-6">
            <div className="  gap-2 ">
              <img
                src={logo}
                alt="SchoolSys Logo"
                className="w-30 object-contain"
              />
            </div>
          </div>

          <h2 className="text-2xl   mb-2">
            Sign In to Continue
          </h2>
          <p className="text-sm text-gray-600  mb-8">
            To keep connected with your institution workflow sign in with your
            user name & password.
          </p>

          <form className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="User Name"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 ">
            By continuing you acknowledge that your personal data will be
            processed in accordance with the{" "}
            {/* <Link href="#" className="text-blue-600 hover:underline">
            Privacy Statement
          </Link> */}
            .
          </p>

          <p className="text-xs text-gray-500 mt-6 text-center">© mPair</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
