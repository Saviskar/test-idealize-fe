const LoginHeader = ({ isLogin }) => (
  <div className="text-center">
    <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
      <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
        MIX
      </span>
    </h2>
    <p className="text-lg text-white/70 font-light">
      {isLogin
        ? "Sign in to continue your journey"
        : "Create your account and start connecting"}
    </p>
  </div>
);
export default LoginHeader;
