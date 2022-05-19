import { ReactComponent as Google } from "./img/Google.svg";

const Form = () => {
  return (
    <div className="sign-in-form">
      <form className="form">
        <h1 className="signin-text">SIGN IN</h1>
        <div className="input-text">
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password To Proceed"
          ></input>
        </div>
        <div className="checkbox">
          <input type="checkbox"></input>
          <label className="text">Remember me</label>
        </div>
        <div className="robotdiv">
          <div>
            <input type="checkbox"></input>
            <label className="text">Im not a robot</label>
          </div>
        </div>
        <button className="submit-button">
          <div>Sign In</div>
        </button>
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
