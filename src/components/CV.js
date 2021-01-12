import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
   font-family: 'Nanum Gothic', sans-serif;
   color: #d5e3f5;
`;

const SubTitle = styled.h2`
   font-family: 'Nanum Gothic', sans-serif;
   color: #d5e3f5;
`;

const SH = styled.h3`
   font-family: 'Nanum Gothic', sans-serif;
   color: #d5e3f5;
`;

const Text = styled.h4`
  font-family: 'Nanum Gothic', sans-serif;
   color: #d5e3f5 ;
   line-height: 0.4;
`;

const P = styled.p`
   font-family: 'Nanum Gothic', sans-serif;
   color: #d5e3f5 ;
   /* line-height: 0.4; */
`;

const EdgeDiv = styled.div`
   display: flex;
   justify-content: space-between;
   line-height: 1;
   `;

const RightDiv = styled.div`
  text-align : right;
  line-height: 0.5;
`;

const CenterDiv = styled.div`
  margin-top: 2rem;
  text-align : center;
  line-height: 0.5;
`;

const UL = styled.ul`
 font-family: 'Montserrat', sans-serif;
   color: #d5e3f5 ;
  margin-top: 1.5rem;
  line-height: 1.6;
  list-style-type: square;
`;



function CV() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <EdgeDiv>
        <div>
          <Text>Elwyn Palmerton</Text>
          <Text>Los Angeles, CA 90026</Text>
          <Text>Cell: 917-653-2438</Text>
          <Text>elwyn.palmerton@gmail.com</Text>
          <Text>Github.com/ElwynPalmerton</Text>
        </div>
      </EdgeDiv>

      {/* Section Title  */}
      <CenterDiv><SubTitle>Experience</SubTitle></CenterDiv>
      {/* Job Title  */}
      <EdgeDiv>
        <SH>Web Developer</SH>
        <SH> 07/2019 - Current</SH>
      </EdgeDiv>
      <EdgeDiv>
        <Text>Self-employed</Text>
        <Text>Los Angeles</Text>
      </EdgeDiv>


      <P><i>Blerdeblerb</i></P>
      <UL>
        <li>Designed and built Blerdeblerb, a Twitter-style social media site.   </li>
        <li>Demonstrated awareness of best practices with the MERN stack (Mongo, Express, React, and Node) as well React Redux and React Router.    </li>
        <li>Implemented with Material-UI for an engaging user experience and JSON web tokens for authentication.   </li>
      </UL>
      <P><i>Zybriqs</i></P>
      <UL>
        <li>Designed and built Zybriqs.com - a full-stack javascript project using Node.js, Express, p5.js, and MongoDB. </li>
        <li>Zybriqs includes a responsive UI using Javascript and JQuery. Styled with custom CSS and Bootstrap and a focus on how color and design can make complex apps intuitive and engaging.</li>
        <li>Backend functionality is implemented with Node.js, Express, MongoDB, Mongoose, express-sessions, and EJS templating, allowing users to register, login and save the game state.</li>
      </UL>


      {/* Section Title  */}
      <CenterDiv><SubTitle>Accounting</SubTitle></CenterDiv>
      {/* Job Title  */}
      <EdgeDiv>
        <SH>Junior Accountant</SH>
        <SH> 05/2019 - 09/2019</SH>
      </EdgeDiv>
      <EdgeDiv>
        <Text>Maison, Marque & Domaines</Text>
        <Text>Oakland</Text>
      </EdgeDiv>
      <UL>
        <li>Full cycle accounts receivable and accounts payable duties for Roederer Estate wineries. Processed a total of $1.3 million in payables monthly. </li>
        <li>Reconciled checking accounts monthly. Generated invoices for bulk wine sales and prepared federal excise tax reports. </li>
        <li> Collaborated with the accounting team to process intercompany payments, assist with cash projections and resolve other accounting issues.</li>
      </UL>

      {/* Ingram  */}
      <EdgeDiv>
        <SH>Credit Representative </SH>
        <SH> 10/2014 － 12/2017 </SH>
      </EdgeDiv>
      <EdgeDiv>
        <Text>Ingram Publisher Services dba Perseus Distribution</Text>
        <Text>Berkeley</Text>
      </EdgeDiv>
      <UL>
        <li>AR duties included collections and cash application. Monitored aging reports to follow-up on delinquent accounts or old invoices or credits. Worked with the sales team and customer service to resolve billing or claims discrepancies.</li>
      </UL>


      {/* Job Title  */}
      <EdgeDiv>
        <SH>Head Bookkeeper	</SH>
        <SH>     10/2009 - 04/2013 </SH>
      </EdgeDiv>
      <EdgeDiv>
        <Text>Midas Auto Service, West Caldwell</Text>
        <Text>West Caldwell, NJ</Text>
      </EdgeDiv>
      <UL>
        <li>Administered day to day bookkeeping for a Midas Auto Service franchise.</li>
      </UL>

      <CenterDiv><SubTitle>Creative</SubTitle></CenterDiv>
      <EdgeDiv>
        <SH>Freelance Writer and Artist</SH>
        <SH>   07/2004 － 10/2018 </SH>
      </EdgeDiv>
      <P>Contributed feature articles and reviews of  contemporary art exhibitions for leading arts publications, including Frieze, FlashArt, and Artillery. </P>
      <P>Exhibiting artist of drawings, paintings and sculptures in New York, Oakland, and Los Angeles. Recipient of the Pollock-Krasner grant. Reviewed in The New York Times and Art Review</P>

      {/* Education  */}
      <CenterDiv><SubTitle>Education</SubTitle></CenterDiv>
      <EdgeDiv>
        <P><b>New York University,</b> Bachelor of Arts, Studio Art and Computer Science</P>
        <P>   2002 </P>
      </EdgeDiv>
      <EdgeDiv>
        <P><b>School of Visual Arts</b> Master of Arts, Studio Art</P>
        <P>   2004</P>
      </EdgeDiv>
    </div>
  )

}

export default CV;