
// ProfilePage.jsx
import React, { useState} from "react";
import { useTheme } from "../Hooks/ThemeProvider";
import Logo  from "../Components/Icons/assets/Expense-removebg.png"

const ProfilePage = () => {
  const { theme } = useTheme();

  
    const [profile, setProfile] = useState({
      avatar: null,
      name: "Horipriya Das Arpita",
      email: "example@email.com",
      phone: "0123456789",
      address: "Sylhet, Bangladesh",
      bio: "Software engineering student passionate about coding and problem-solving.",
      education: "Shahjalal University of Science and Technology",
      skills: ["React.js", "Node.js", "MySQL", "Java"],
      linkedIn: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      website: "https://yourwebsite.com",
      changePassword: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile({ ...profile, [name]: value });
    };
  
    const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfile({ ...profile, avatar: URL.createObjectURL(file) });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Updated Profile:", profile);
      alert("Profile updated successfully!");
    };
  
    return (
      <div
        style={{
          background: theme.cardBg,
          color: theme.color,
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "auto",
          boxShadow: theme.boxShadow,
        }}
      >
        <h1 style={{ textAlign: "center", color: theme.headerTextColor }}>
          Edit Profile
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "150px",
              height: "150px",
              marginBottom: "10px",
              border: `2px solid ${theme.inputBorder}`,
            }}
          >
            <img
              src={profile.avatar || {Logo}}
              alt="Avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ color: theme.color }}
          />
        </div>
  
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Personal Information */}
          <div
            style={{
              background: theme.formBg,
              padding: "15px",
              borderRadius: "10px",
              boxShadow: `0 4px 8px ${theme.boxShadow}`,
            }}
          >
            <h3>Personal Information</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    background: theme.inputBg,
                    border: `1px solid ${theme.inputBorder}`,
                    padding: "8px",
                    borderRadius: "5px",
                    width: "100%",
                    color: theme.color,
                  }}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={{
                    background: theme.inputBg,
                    border: `1px solid ${theme.inputBorder}`,
                    padding: "8px",
                    borderRadius: "5px",
                    width: "100%",
                    color: theme.color,
                  }}
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  style={{
                    background: theme.inputBg,
                    border: `1px solid ${theme.inputBorder}`,
                    padding: "8px",
                    borderRadius: "5px",
                    width: "100%",
                    color: theme.color,
                  }}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  style={{
                    background: theme.inputBg,
                    border: `1px solid ${theme.inputBorder}`,
                    padding: "8px",
                    borderRadius: "5px",
                    width: "100%",
                    color: theme.color,
                  }}
                />
              </label>
            </div>
          </div>
  
          {/* Professional Details */}
          <div
            style={{
              background: theme.formBg,
              padding: "15px",
              borderRadius: "10px",
              boxShadow: `0 4px 8px ${theme.boxShadow}`,
            }}
          >
            <h3>Professional Details</h3>
            <label>
              Bio:
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Write a short bio"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                  resize: "vertical",
                }}
              />
            </label>
            <label>
              Education:
              <input
                type="text"
                name="education"
                value={profile.education}
                onChange={handleChange}
                placeholder="Enter your education"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                }}
              />
            </label>
            <label>
              Skills (comma-separated):
              <input
                type="text"
                name="skills"
                value={profile.skills.join(", ")}
                onChange={(e) =>
                  handleChange({ target: { name: "skills", value: e.target.value.split(", ") } })
                }
                placeholder="Enter your skills"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                }}
              />
            </label>
          </div>
  
          {/* Social Media Links */}
          <div
            style={{
              background: theme.formBg,
              padding: "15px",
              borderRadius: "10px",
              boxShadow: `0 4px 8px ${theme.boxShadow}`,
            }}
          >
            <h3>Social Media Links</h3>
            <label>
              LinkedIn:
              <input
                type="url"
                name="linkedIn"
                value={profile.linkedIn}
                onChange={handleChange}
                placeholder="Enter LinkedIn URL"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                }}
              />
            </label>
            <label>
              GitHub:
              <input
                type="url"
                name="github"
                value={profile.github}
                onChange={handleChange}
                placeholder="Enter GitHub URL"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                }}
              />
            </label>
            <label>
              Personal Website:
              <input
                type="url"
                name="website"
                value={profile.website}
                onChange={handleChange}
                placeholder="Enter Website URL"
                style={{
                  background: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  padding: "8px",
                  borderRadius: "5px",
                  width: "100%",
                  color: theme.color,
                }}
              />
            </label>
          </div>
  
          <button
            type="submit"
            style={{
              background: theme.buttonBg,
              color: theme.color,
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default ProfilePage;
  