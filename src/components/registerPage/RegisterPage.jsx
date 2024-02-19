import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./registerPage.style.scss";

const RegisterPage = () => {
  return (
    <div className="register__page__container">
      <img
        src="https://th.bing.com/th/id/OIG3.DwqffwMWhrlOowNyHMyq?w=1024&h=1024&rs=1&pid=ImgDetMain"
        alt="Chicago City View"
        className="register__page__image"
      />

      <div className="register__page">
        <h2>Registration Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date:</label>
            <input type="date" id="birthDate" name="birthDate" />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="">...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <PhoneInput
              country={"us"}
              inputProps={{
                name: "phone",
                required: true,
              }}
              countryOptions={{
                us: "USA (+1)",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select id="state" name="state">
              <option value="">...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="Fl">Florida</option>
              <option value="KS">Kansas</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="UT">Utah</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input type="text" id="postalCode" name="postalCode" />
          </div>
          <div className="form-group">
            <label htmlFor="registrationChoice">
              Select a Registration Choice:
            </label>
            <select id="registrationChoice" name="registrationChoice">
              <option value=""></option>
              <option value="5km">5km</option>
              <option value="10km">10km</option>
              <option value="15km">15km</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
