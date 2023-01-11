import React from "react";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";

const Title = styled.h1`
  font-family: "Nanum Gothic", sans-serif;
  color: #d5e3f5;
`;

const SubTitle = styled.h2`
  font-family: "Nanum Gothic", sans-serif;
  color: #d5e3f5;
`;

const SH = styled.h3`
  font-family: "Nanum Gothic", sans-serif;
  color: #d5e3f5;
`;

const Text = styled.h4`
  font-family: "Nanum Gothic", sans-serif;
  color: #d5e3f5;
  line-height: 0.4;
`;

const P = styled.p`
  font-family: "Nanum Gothic", sans-serif;
  color: #d5e3f5;
  /* line-height: 0.4; */
`;

const EdgeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1;
`;

const RightDiv = styled.div`
  text-align: right;
  line-height: 0.5;
`;

const CenterDiv = styled.div`
  margin-top: 2rem;
  text-align: center;
  line-height: 0.5;
`;

const UL = styled.ul`
  font-family: "Montserrat", sans-serif;
  color: #d5e3f5;
  margin-top: 1.5rem;
  line-height: 1.6;
  list-style-type: square;
`;

function CV() {
  return (
    <PageWrapper
      center={
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
          <CenterDiv>
            <SubTitle>Experience</SubTitle>
          </CenterDiv>
          {/* Job Title  */}
          <EdgeDiv>
            <SH>Web Developer</SH>
            <SH> 07/2021 - Current</SH>
          </EdgeDiv>
          <EdgeDiv>
            <Text>Infosys</Text>
            <Text>Chicago (remote)</Text>
          </EdgeDiv>

          <P>
            <i>React Bag Runner POC</i>
          </P>
          <UL>
            <li>
              Developed the frontend architecture for a United Airlines bag
              tracking app POC using Typescript, Redux, and Material-UI.{" "}
            </li>
            <li>
              Designed a user interface for managing employee bag handling
              assignments. Developed an easy-to-use intuitive UI while following
              client style guidelines..{" "}
            </li>
            <li>
              Collaborate with backend developers to construct data models, add
              features, and display dynamic data.{" "}
            </li>
            <li>
              Connect with the DevOps teams to deploy into the cloud using
              Docker, Team Cities, and AWS.
            </li>
            <li>
              Assist other developers with understanding and contributing
              features to the React codebase.
            </li>
          </UL>
          <P>
            <i>Frontend Testing</i>
          </P>
          <UL>
            <li>
              Testing with Jest and Enzyme for the United.com. Improved test
              coverage for United’s homepage redesign.
            </li>
            <li>
              Analyzed code to improve code coverage for components which had
              recently.
            </li>
            <li>
              Reviewed existing code and communicated with developers regarding
              code quality and best practices.
            </li>
          </UL>
          <P>
            <i>.NET Migration Project</i>
          </P>
          <UL>
            <li>
              Migrate web API used on United.com from .Net Framework 4.6 to .net
              Core 5.0. Improved performance, scalability, security, and
              cross-platform compatibility.
            </li>
            <li>
              Rewrote code to accommodate API changes from .Net 4.6 to .Net 5.
              Resolve all bugs arising from the migration process, such as
              rewriting code with deprecated API’s and, resolving versioning
              issues.
            </li>
            <li>
              Resolve 100% of static code scan warnings (Veracode and Qualys) to
              achieve security and best practices for code.
            </li>
            <li>
              Communicate with client developers regarding new business
              requirements to implement required changes and code sync-ups.
            </li>
            <li>
              Created a new EF Core database context to facilitate db migration.
              Manage environment configurations for database migrations after
              API launch.
            </li>
          </UL>

          {/* Section Title  */}
          <CenterDiv>
            <SubTitle>Accounting</SubTitle>
          </CenterDiv>
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
            <li>
              Full cycle accounts receivable and accounts payable duties for
              Roederer Estate wineries. Processed a total of $1.3 million in
              payables monthly.{" "}
            </li>
            <li>
              Reconciled checking accounts monthly. Generated invoices for bulk
              wine sales and prepared federal excise tax reports.{" "}
            </li>
            <li>
              {" "}
              Collaborated with the accounting team to process intercompany
              payments, assist with cash projections and resolve other
              accounting issues.
            </li>
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
            <li>
              AR duties included collections and cash application. Monitored
              aging reports to follow-up on delinquent accounts or old invoices
              or credits. Worked with the sales team and customer service to
              resolve billing or claims discrepancies.
            </li>
          </UL>

          <CenterDiv>
            <SubTitle>Creative</SubTitle>
          </CenterDiv>
          <EdgeDiv>
            <SH>Freelance Writer and Artist</SH>
            <SH> 07/2004 － 10/2018 </SH>
          </EdgeDiv>
          <P>
            Contributed feature articles and reviews of contemporary art
            exhibitions for leading arts publications, including Frieze,
            FlashArt, and Artillery.{" "}
          </P>
          <P>
            Exhibiting artist of drawings, paintings and sculptures in New York,
            Oakland, and Los Angeles. Recipient of the Pollock-Krasner grant.
            Reviewed in The New York Times and Art Review
          </P>

          {/* Education  */}
          <CenterDiv>
            <SubTitle>Education</SubTitle>
          </CenterDiv>
          <EdgeDiv>
            <P>
              <b>New York University,</b> Bachelor of Arts, Studio Art and
              Computer Science
            </P>
            <P> 2002 </P>
          </EdgeDiv>
          <EdgeDiv>
            <P>
              <b>School of Visual Arts</b> Master of Arts, Studio Art
            </P>
            <P> 2004</P>
          </EdgeDiv>
        </div>
      }
    />
  );
}

export default CV;
