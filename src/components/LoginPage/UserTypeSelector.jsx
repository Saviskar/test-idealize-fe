const UserTypeSelector = ({ value, onChange }) => (
  <div className="space-y-3">
    <label className="text-white/80 text-sm font-medium">I am a:</label>
    <div className="flex space-x-4">
      {["student", "company"].map((type) => (
        <label
          key={type}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name="userType"
            value={type}
            checked={value === type}
            onChange={onChange}
            className="w-4 h-4 text-blue-500 border-white/30 focus:ring-blue-500 focus:ring-2 bg-white/10"
          />
          <span className="text-white/80 capitalize">{type}</span>
        </label>
      ))}
    </div>
  </div>
);
export default UserTypeSelector;
