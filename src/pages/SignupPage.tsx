import Signup from "../components/signup/Signup";
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="page-container">
      <h1 className="header">Welcome to Cloud Adventure</h1>
      <div className="content">
        <div className="video-container">
          <video
            src={import.meta.env.VITE_DEMO_VIDEO_URL}
            width='600'
            height='600'
            controls
            autoPlay
            muted
            loop
          />
        </div>
        <div className="form-container">
            <h2>Register Here!</h2>
            <Signup />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
