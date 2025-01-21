import React from "react";
import { Form } from "react-router-dom";


const user = {
    name: "Baji Live",
    bio: "Affiliates | Bj Support | A gamebler",
    location: "New York, USA",
    email: "bJlive777@gmail.com",
    phone: "+8801705312709",
    photo: "https://bj88.com/images/mia-1.webp", // Placeholder image for profile
    socialLinks: {
      Facebbok: "https://web.facebook.com/valotatka",
      WhatsApp : "https://whatsapp.com/miakhalifa",
      Telegram: "https://t.me/QhsuX7SBz",
    },
  };

const About = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-32 h-60 mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-500 italic">{user.bio}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600"><strong>Location:</strong> {user.location}</p>
                <p className="text-sm text-gray-600"><strong>Email:</strong> <a href={`mailto:${user.email}`} className="text-blue-500">{user.email}</a></p>
                <p className="text-sm text-gray-600"><strong>Phone:</strong> {user.phone}</p>
              </div>
        
              <div className="flex justify-center space-x-4">
                <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Facebook
                </a>
                <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                  GitHub
                </a>
                <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Telegram
                </a>
              </div>
            </div>
  );
};

export default About;
