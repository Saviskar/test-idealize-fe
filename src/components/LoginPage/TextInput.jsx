const TextInput = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
      size={20}
    />
    <input
      {...props}
      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
    />
  </div>
);
export default TextInput;
