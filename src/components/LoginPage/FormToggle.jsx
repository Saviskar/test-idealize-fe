const FormToggle = ({ isLogin, toggle }) => (
  <div className="mt-8 text-center">
    <p className="text-white/70">
      {isLogin ? "Don't have an account?" : "Already have an account?"}
      <button
        onClick={toggle}
        className="ml-2 text-white font-semibold hover:text-white/80 transition-colors"
      >
        {isLogin ? "Sign Up" : "Sign In"}
      </button>
    </p>
  </div>
);
export default FormToggle;
