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

const Organizations = () => {
  const [ChooseOptions, setChooseOptions] = React.useState({
    UniversityDesignInstitue: false,
    SourcingAgency: false,
    EventPromoterFairOrganizer: false,
    MagazinesNewspapers: false,
    ResearchCenter: false,
    Museum: false,
    Retailers: false,
    AssociationFederationUnion: false,
    TrendsForecaster: false,
    MarketingAgencies: false
  });

  const handleChangeChooseOptions = (event) => {
    setChooseOptions({
      ...ChooseOptions,
      [event.target.name]: event.target.checked
    });
  };

  const [IndustryUsage, setIndustryUsage] = React.useState({
    Prospecting: false,
    Branding: false,
    Partnerships: false,
    Research: false,
    Marketing: false,
    Networking: false,
    Recruiting: false,
    TrendsMaterialForecasting: false,
    HostDigitalEvents: false
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
          Choose Options
          <span className="spanColor"> {' (Select 1 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.UniversityDesignInstitue}
                onChange={handleChangeChooseOptions}
                name="UniversityDesignInstitue"
              />
            }
            label="University / Design Institute"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.SourcingAgency}
                onChange={handleChangeChooseOptions}
                name="SourcingAgency"
              />
            }
            label="Sourcing Agency"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.EventPromoterFairOrganizer}
                onChange={handleChangeChooseOptions}
                name="EventPromoterFairOrganizer"
              />
            }
            label="Event Promoter / Fair Organizer"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.MagazinesNewspapers}
                onChange={handleChangeChooseOptions}
                name="MagazinesNewspapers"
              />
            }
            label="Magazines / Newspapers"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.ResearchCenter}
                onChange={handleChangeChooseOptions}
                name="ResearchCenter"
              />
            }
            label="Research Center"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.Museum}
                onChange={handleChangeChooseOptions}
                name="Museum"
              />
            }
            label="Museum"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.Retailers}
                onChange={handleChangeChooseOptions}
                name="Retailers"
              />
            }
            label="Retailers"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.AssociationFederationUnion}
                onChange={handleChangeChooseOptions}
                name="AssociationFederationUnion"
              />
            }
            label="Association / Federation / Union"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.TrendsForecaster}
                onChange={handleChangeChooseOptions}
                name="TrendsForecaster"
              />
            }
            label="Trends Forcaster"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.TrendsMaterialForecastingAgencies}
                onChange={handleChangeChooseOptions}
                name="MarketingAgencies"
              />
            }
            label="Marketing Agencies"
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
                checked={IndustryUsage.Prospecting}
                onChange={handleChangeIndustryUsage}
                name="Prospecting"
              />
            }
            label="Prospecting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Branding}
                onChange={handleChangeIndustryUsage}
                name="Branding"
              />
            }
            label="Branding"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Partnerships}
                onChange={handleChangeIndustryUsage}
                name="Partnerships"
              />
            }
            label="Partnerships"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Research}
                onChange={handleChangeIndustryUsage}
                name="Research"
              />
            }
            label="Research"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Marketing}
                onChange={handleChangeIndustryUsage}
                name="Marketing"
              />
            }
            label="Marketing"
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
                checked={IndustryUsage.Recruiting}
                onChange={handleChangeIndustryUsage}
                name="Recruiting"
              />
            }
            label="Recruiting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.TrendsMaterialForecasting}
                onChange={handleChangeIndustryUsage}
                name="TrendsMaterialForecasting"
              />
            }
            label="Trends & Material Forecasting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.HostDigitalEvents}
                onChange={handleChangeIndustryUsage}
                name="HostDigitalEvents"
              />
            }
            label="Host Digital Events"
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
export default Organizations;
