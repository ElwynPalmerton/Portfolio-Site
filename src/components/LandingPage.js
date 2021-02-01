import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/square-profile-photo.jpg';
import ProfileText from './ProfileText.js'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from './PageWrapper';


// https://i.ibb.co/CmHRM4z/Portfolio-Photo.jpg

// const profilePic = "https://i.ibb.co/pXZ2DRz/Square-Profile-Photo.jpg"

const useStyles = makeStyles((theme) => ({
  pillButton: {
    // flexGrow: 1,
    color: "#d5e3f5"
  },
}));

const CenterGrid = styled.div`
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr
   }
`;

const LayoutGrid = styled.div`
  grid-column-start: 2;
  margin-top: 50px;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media (max-width: 950px) {
     grid-template-rows: 300px 1fr;
    }
    @media (max-width: 600px) {
    /* grid-template-rows: 400px 300px 1fr; */
    grid-template-rows: 300px 200px 1fr;
    margin: 30px;
    /* display: block; */
    text-align: center;
  }
`;

const Item1 = styled.div`
  grid-column-start: 1;
  grid-column-end:1;
  text-align: center;
  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
`;

const Bridge = styled.div`
  border-top: ${props => `2px solid ${props.theme.color.stars}`};;
  align-self: end;
  width: 100%;
  height: 50%;
  grid-column-start: 2;
  grid-column-end:2;
  @media (max-width: 600px) {
    visibility: hidden;
    height: 30px;
  }
`;

const Item2 = styled.div`
  grid-column-start: 3;
  grid-column-end:3;
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 600px) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end:3;
    /* grid-template-rows: 1fr 1fr; */
    height: auto;
    /* height: 50%; */
   }
  `;

const TitleBox = styled.div`
  border: ${props => `2px solid ${props.theme.color.stars}`};
  color: #d5e3f5;
  grid-row-start: 2; 
  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

const Title = styled.div`
  padding: 15px;
  color: ${props => `${props.theme.color.stars}`};
  font-family: 'Lato', sans-serif;
`;


const Text = styled.div`
   grid-column-start: 1;
   grid-column-end: 5;
   color: ${props => `${props.theme.color.stars}`};
   font-size: 1.2rem;
   margin-bottom: 50px;
   @media (max-width: 600px) {
    grid-row-start: 3; 
  }
`;


function LandingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <PageWrapper
        center={
          <CenterGrid>
            <LayoutGrid>
              <Item1>

                <img
                  className="elwyn"
                  alt="Picture of Elwyn"
                  style={{
                    borderRadius: "300px",
                    border: "2px solid #8b648c",
                    height: "100%",
                    width: "100%"
                  }}
                  src={profilePic}></img>

              </Item1>
              <Bridge />
              <Item2>
                <TitleBox>
                  <Title>
                    <h2>Full-Stack Web Developer</h2>
                    <h4>Located in Los Angeles, CA</h4>
                  </Title>
                </TitleBox>
              </Item2>
              <Text>
                <ProfileText />
              </Text>
              <Text>
                <Link
                  // className={classes.link}
                  to={{
                    pathname: "/portfolio",
                  }}
                >
                  <Button
                    className={classes.pillButton}
                    style={{
                      borderRadius: "50px",
                      width: "150px",
                      marginRight: "10px"
                    }}
                    variant="outlined"

                  >View Portfolio</Button>
                </Link>

                <Link
                  to={{
                    pathname: "/cv",
                  }}
                >
                  <Button
                    className={classes.pillButton}
                    style={{
                      borderRadius: "50px",
                      width: "50px",
                    }}
                    variant="outlined"

                  >CV</Button>
                </Link>
              </Text>
            </LayoutGrid>
            <br />
          </CenterGrid>
        } />
    </div>
  )
}


// <h1> Landing Page</h1>

export default LandingPage;


