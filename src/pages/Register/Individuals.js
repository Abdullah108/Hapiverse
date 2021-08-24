import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

/* eslint-disable react/jsx-wrap-multilines, react/jsx-indent, react/jsx-one-expression-per-line */

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const Individuals = () => {
  const [MoreDetails, setMoreDetails] = React.useState({
    SalesAgents: false,
    FashionDesigner: false,
    Student: false,
    Photographer: false,
    Copywriter: false,
    GraphicDesigner: false,
    VisualProduction: false,
    Model: false,
    Stylist: false,
    CreativeDirector: false,
    MakeupArtist: false,
    DigitalMarketingExpert: false,
    IndustrialWorker: false,
    Other: false
  });
  const handleChangeMoreDetails = (event) => {
    setMoreDetails({
      ...MoreDetails,
      [event.target.name]: event.target.checked
    });
  };
  const [IndustryUsage, setIndustryUsage] = React.useState({
    FindJob: false,
    Networking: false,
    Collaborating: false,
    SourceMaterialTrends: false,
    Inspiration: false,
    Learning: false,
    MonetizeContent: false
  });
  const handleChangeIndustryUsage = (event) => {
    setIndustryUsage({
      ...IndustryUsage,
      [event.target.name]: event.target.checked
    });
  };
  const [Terms, setTerms] = React.useState({
    TermAndAgreement1: false,
    TermAndAgreement2: false
  });
  const handleChangeTerms = (event) => {
    setTerms({
      ...Terms,
      [event.target.name]: event.target.checked
    });
  };
  return (
    <div>
      <Grid container xs={12}>
        <p className="contentHeader" style={{ margin: '25px 0' }}>
          Choose Type
          <span className="spanColor"> {' (Select 1 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.SalesAgents}
                onChange={handleChangeMoreDetails}
                name="SalesAgents"
              />
            }
            label="Sales Agents"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.FashionDesigner}
                onChange={handleChangeMoreDetails}
                name="FashionDesigner"
              />
            }
            label="Fashion Designer"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Student}
                onChange={handleChangeMoreDetails}
                name="Student"
              />
            }
            label="Student"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Photographer}
                onChange={handleChangeMoreDetails}
                name="Photographer"
              />
            }
            label="Photographer"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Copywriter}
                onChange={handleChangeMoreDetails}
                name="Copywriter"
              />
            }
            label="Copywriter"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.GraphicDesigner}
                onChange={handleChangeMoreDetails}
                name="GraphicDesigner"
              />
            }
            label="Graphic Designer"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.VisualProduction}
                onChange={handleChangeMoreDetails}
                name="VisualProduction"
              />
            }
            label="Visual Production"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Model}
                onChange={handleChangeMoreDetails}
                name="Model"
              />
            }
            label="Model"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Stylist}
                onChange={handleChangeMoreDetails}
                name="Stylist"
              />
            }
            label="Stylist"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.CreativeDirector}
                onChange={handleChangeMoreDetails}
                name="CreativeDirector"
              />
            }
            label="Creative Director"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.MakeupArtist}
                onChange={handleChangeMoreDetails}
                name="MakeupArtist"
              />
            }
            label="Make-up Artist"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.DigitalMarketingExpert}
                onChange={handleChangeMoreDetails}
                name="DigitalMarketingExpert"
              />
            }
            label="Digital Marketing Expert"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.IndustrialWorker}
                onChange={handleChangeMoreDetails}
                name="IndustrialWorker"
              />
            }
            label="Industrial Worker"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={MoreDetails.Other}
                onChange={handleChangeMoreDetails}
                name="Other"
              />
            }
            label="Other"
          />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <p className="contentHeader" style={{ margin: '25px 0' }}>
          Your Industry Usage
          <span className="spanColor"> {' (Select 2 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.FindJob}
                onChange={handleChangeIndustryUsage}
                name="FindJob"
              />
            }
            label="Find Job"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.FindSuppliers}
                onChange={handleChangeIndustryUsage}
                name="FindSuppliers"
              />
            }
            label="Find Suppliers"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Networking}
                onChange={handleChangeIndustryUsage}
                name="Networking"
              />
            }
            label="Networking"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Collaborating}
                onChange={handleChangeIndustryUsage}
                name="Collaborating"
              />
            }
            label="Collaborating"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.SourceMaterialTrends}
                onChange={handleChangeIndustryUsage}
                name="SourceMaterialTrends"
              />
            }
            label="Source Material & Trends"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Inspiration}
                onChange={handleChangeIndustryUsage}
                name="Inspiration"
              />
            }
            label="Inspiration"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Learning}
                onChange={handleChangeIndustryUsage}
                name="Learning"
              />
            }
            label="Learning"
          />

          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.MonetizeContent}
                onChange={handleChangeIndustryUsage}
                name="MonetizeContent"
              />
            }
            label="Monetize Content"
          />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        {/* <p className="contentHeader" style={{ margin: '25px 0' }}>
          Your Industry Usage
          <span className="spanColor"> {' (Select 2 max)'}</span>
        </p> */}
        <Grid item xs={8} style={{ marginTop: '30px' }}>
          <p className="contentHeader" style={{ margin: '25px 0' }}>
            Organization Registration Number
          </p>
          <TextField
            id="outlined-basic"
            label="0G68975 - P009 - P"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: '30px' }}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={Terms.TermAndAgreement1}
                onChange={handleChangeTerms}
                name="TermAndAgreement1"
              />
            }
            label="I confirm that I am a legal representative of this company and I have the right to act on behalf of this company"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={Terms.TermAndAgreement2}
                onChange={handleChangeTerms}
                name="TermAndAgreement2"
              />
            }
            label={
              <p>
                I agree with the
                <Link to="#" style={{ color: '#55BAFF' }}>
                  {' Terms & Conditions '}
                </Link>
                and{' '}
                <Link to="#" style={{ color: '#55BAFF' }}>
                  {' Privacy Policy '}
                </Link>
              </p>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Individuals;
