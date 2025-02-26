import React, { useState } from "react";
import { Camera, Save, XCircle } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "johndoe@example.com",
    phone_number: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", user);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Edit Profile
        </h2>

        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center justify-center my-8">
          <div className="relative w-36 h-36">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-gray-300 shadow-md"
            />
            <label className="absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-purple-700 shadow-lg">
              <Camera size={22} />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Update Profile Picture
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { label: "Full Name : ", name: "name", type: "text" },
              { label: "Email : ", name: "email", type: "email" },
              { label: "Phone Number : ", name: "phone_number", type: "text" },
              { label: "Country : ", name: "country", type: "text" },
              { label: "Street Address : ", name: "street", type: "text" },
              { label: "City : ", name: "city", type: "text" },
              { label: "State : ", name: "state", type: "text" },
              { label: "Zip Code : ", name: "zip_code", type: "text" },
            ].map((field, index) => (
              <div key={index} className="w-full">
                <label className="block text-gray-600 text-sm mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={user[field.name]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Save & Cancel Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-5 rounded-lg flex items-center transition-all duration-300"
            >
              <XCircle size={18} className="mr-2" />
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg flex items-center transition-all duration-300"
            >
              <Save size={18} className="mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
