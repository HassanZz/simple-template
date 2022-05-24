import { ReactComponent as Google } from "./img/Google.svg";
import { ReactComponent as KeyIcon } from "./img/key-icon.svg";
import { ReactComponent as EyeIcon } from "./img/eye-icon.svg";
import { ReactComponent as Captcha } from "./img/Flesh.svg";

const Form = () => {
  return (
    <div className="sign-in-form">
      <form className="form">
        <div className="signin-text">SIGN IN</div>
        <div className="input-text">
          <label>Password</label>
          <div className="input-pass">
            <KeyIcon></KeyIcon>
            <input
              type="password"
              required
              placeholder="Enter Password To Proceed"
            ></input>
            <EyeIcon></EyeIcon>
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" className="checkbox-input"></input>
          <label className="text">Remember me</label>
        </div>
        <div className="center-form">
          <div className="robot-checkbox">
            <div className="div-robot-checkbox">
              <input type="checkbox" className="checkbox-input"></input>
              <label className="text text-style4">Im Not a Robot</label>
            </div>
            <div className="captcha">
              <Captcha></Captcha>
              <p>reCAPTCHA</p>
            </div>
          </div>
          <button className="submit-button">
            <div className="text-style2">Sign In</div>
          </button>
          <div className="regex"></div>
        </div>
        <div className="google-logo">
          <Google></Google>
        </div>

        <a className="signup" href="/">
          SIGN UP HERE
        </a>
      </form>
    </div>
  );
};

export default Form;
