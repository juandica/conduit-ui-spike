'use client';

import styled from '@emotion/styled';
import { Button } from '@conduit-ui/ui-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Dummy App
            </h1>
          </div>
          <div id="middle-content">
            <div className="container-cmp rounded shadow">
              <h1>
                Normal components
              </h1>
              <Button size='large' onClick={()=>{console.log("White button")}}>
                White button
              </Button>
              <Button color='primary' size='large' onClick={()=>{console.log("Primary button")}}>
                Primary button
              </Button>
              <Button color='error' size='large' onClick={()=>{console.log("Error button")}}>
                Error button
              </Button>
            </div>
            <div className="container-cmp rounded shadow">
              <h1>
                Magnetic components
              </h1>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}
