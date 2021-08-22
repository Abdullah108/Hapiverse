import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import './register.scss';
import TextField from '@material-ui/core/TextField';
import Google from './Assets/google.png';
import Facebook from './Assets/facebook.png';
import Linkedin from './Assets/linkedin.png';
/* eslint-disable react/self-closing-comp */
const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Grid container xs={12} id="registerWrap">
        <Grid item xs={12}>
          <p className="header">Welcome to Texlenet</p>
          <p className="subHeader">Please sign up to make an account</p>
        </Grid>
        <Grid item xs={8}>
          <div className="inputField">
            <TextField
              id="outlined-basic2"
              label="Full Name"
              variant="outlined"
            />
          </div>
          <div className="inputField">
            <TextField id="outlined-basic2" label="Email" variant="outlined" />
          </div>
          <div className="inputField">
            <TextField
              type="password"
              id="outlined-basic2"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className="nextBtn">
            <button type="button" className="nextButton">
              Next
            </button>
          </div>
          <div className="SignUpLine">
            <div className="dash"></div>
            <span className="SignUpLineText">{' Or sign up with '}</span>
            <div className="dash"></div>
          </div>
          <Grid container className="SocialLogin" spacing={4}>
            <Grid item className="socialIcons">
              <img alt="" src={Google} />
            </Grid>
            <Grid item className="socialIcons">
              <img alt="" src={Facebook} />
            </Grid>
            <Grid item className="socialIcons">
              <img alt="" src={Linkedin} />
            </Grid>
          </Grid>
          <Grid item xs={12} align="center" className="alreadyIcon">
            <p className="already">
              Already have an account
              <span className="SignInSpan"> Sign in</span>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
