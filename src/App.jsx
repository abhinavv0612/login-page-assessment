import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!email) return setError("The email field is required");
    if (!validateEmail(email)) return setError("Enter a valid email");
    if (!password) return setError("Password is required");

    setError("");
    setSuccess("Login successful (demo)");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Top Forest Banner */}
      <div
        className="h-52 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b')",
        }}
      ></div>

      {/* Login Card */}
      <div className="flex justify-center -mt-24 px-4">
        <div className="bg-white w-[380px] rounded-xl shadow-xl overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-white py-3 shadow-sm text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="logo"
              className="h-7 mx-auto"
            />
          </div>

          <div className="px-8 py-6 text-center">
            <h2 className="text-green-600 text-lg font-semibold mb-4">Login</h2>

            <img
              src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
              alt="tree"
              className="h-24 mx-auto mb-6"
            />

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="text-green-600 text-sm font-medium">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b-2 border-gray-200 focus:border-green-500 outline-none py-1"
                />
              </div>

              <div>
                <label className="text-green-600 text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b-2 border-gray-200 focus:border-green-500 outline-none py-1"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs">● {error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-full mt-3 hover:bg-green-700 transition"
              >
                Sign In
              </button>

              {success && (
                <p className="text-green-600 text-sm mt-2 text-center">
                  {success}
                </p>
              )}
            </form>

            <div className="flex justify-between text-sm mt-4">
              <span className="text-gray-600">Forgot Password?</span>
              <span className="text-pink-500">New User? Sign Up</span>
            </div>

            <div className="text-gray-400 my-4 text-sm">or</div>

            {/* Google Button */}
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-md mb-2 flex items-center justify-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="google"
                className="h-5"
              />
              CONTINUE WITH GOOGLE
            </button>

            {/* Facebook Button */}
            <button className="w-full bg-blue-700 text-white py-2.5 rounded-md flex items-center justify-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="facebook"
                className="h-5"
              />
              CONTINUE WITH FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
