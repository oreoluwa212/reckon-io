import { useState } from "react";
import ImageUpload from "@/assets/Image/image-upload.png";
import EditProfile from "@/assets/Image/pencil-edit-02.png";

const Profile = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [personal, setPersonal] = useState(true);
  const [professional, setProfessional] = useState(true);

  const PersonalInformation = () => {
    setPersonal(!personal);
  };

  const ProfessionalInformation = () => {
    setProfessional(!professional);
  };

  return (
    <div className="w-full ">
      <div className="p-6 flex gap-40 ">
        <div className="mb-3">
          <p className="font-semibold">Your Avatar</p>
          <p className="text-sm font-medium text-[#7A7979]">
            {" "}
            Images should not exceed 10MB
          </p>

          <button className="mt-14 flex gap-3 items-center w-full p-3 text-white font-semibold rounded-lg justify-center bg-secondary">
            <span>Change Image </span>
            <img src={ImageUpload} />
          </button>
        </div>
        <div className="bg-[#D9D9D9] h-40 w-40 rounded-full "></div>
      </div>
      <hr className="mt-2" />

      <div className="flex px-6 mt-6 gap-44">
        <div className="mb-2">
          <p className="font-semibold">Personal Information</p>
          <p className="text-sm font-medium text-[#7A7979]">
            {" "}
            Your personal Information{""}
          </p>

          <button
            onClick={PersonalInformation}
            className={`mt-40 flex gap-3 items-center w-3/3 p-3 text-white font-semibold rounded-lg justify-center ${
              personal ? "bg-secondary" : "bg-[#289693]"
            }`}
            aria-label={personal ? "Edit Profile" : "Save Changes"}
          >
            {personal ? (
              <div className="flex gap-3 items-center">
                <span>Edit</span>
                <img src={EditProfile} alt="Edit Icon" />
              </div>
            ) : (
              <div className="flex flex-row">
                <span>Save Changes</span>
              </div>
            )}
          </button>
        </div>
        <form>
          <div>
            <label htmlFor="name" type="text" className="font-semibold">
              Full Name
            </label>
            <div className="flex gap-4">
              <input
                value={name}
                onChange={({ target }) => {
                  setName(target.value);
                }}
                type="text"
                className="w-1/3 input-box bg-transparent font-medium"
              />
              <input
                value={name}
                onChange={({ target }) => {
                  setName(target.value);
                }}
                type="text"
                className="w-1/3 input-box bg-transparent font-medium"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" type="text" className="font-semibold">
              Email Address
            </label>
            <input
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              type="text"
              className="input-box bg-transparent mt-1 font-medium"
            />
          </div>

          <div>
            <label htmlFor="name" type="text" className="font-semibold">
              Date of birth{" "}
            </label>
            <input
              value={dob}
              onChange={({ target }) => {
                setDob(target.value);
              }}
              type="date"
              id="dob"
              name="dob"
              aria-hidden="true"
              className="input-box bg-transparent font-medium mt-1"
            />
          </div>
        </form>
      </div>
      <hr className="mt-2" />

      <div className="flex px-6 mt-6 gap-40">
        <div className="mb-2">
          <p className="font-semibold">Professional Information</p>
          <p className="text-sm font-medium text-[#7A7979]">
            {" "}
            Your professional Information{""}
          </p>

          <button
            onClick={ProfessionalInformation}
            className={`mt-20 flex gap-3 items-center w-3/3 p-3 text-white font-semibold rounded-lg justify-center ${
              professional ? "bg-secondary" : "bg-[#289693]"
            }`}
            aria-label={professional ? "Edit Profile" : "Save Changes"}
          >
            {professional ? (
              <div className="flex gap-3 items-center">
                <span>Edit</span>
                <img src={EditProfile} alt="Edit Icon" />
              </div>
            ) : (
              <div className="flex flex-row">
                <span>Save Changes</span>
              </div>
            )}
          </button>
        </div>
        <form>
          <div className="flex flex-col">
            <label htmlFor="name" type="text" className="font-semibold">
              Your profession
            </label>
            <select
              id="profession"
              value={profession}
              onChange={({ target }) => setProfession(target.value)}
              className="w-[28rem] input-box bg-transparent mt-2 font-medium"
            >
              <option value=""> </option>
              <option value="Quantity Surveyor">Quantity Surveyor</option>
              <option value="Architect">Architect</option>
              <option value="Builder">Builder</option>
              <option value="Engineer">Engineer</option>
              <option value="Estate Surveyor">Estate Surveyor</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" type="text" className="font-semibold">
              Level
            </label>
            <select
              id="level"
              value={level}
              onChange={({ target }) => setLevel(target.value)}
              className="w-[28rem] input-box bg-transparent mt-2 font-medium"
            >
              <option value=""> </option>
              <option value="Fellow">Fellow</option>
              <option value="Member">Member</option>
              <option value="Probational">Probational</option>
              <option value="Student">Student</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
