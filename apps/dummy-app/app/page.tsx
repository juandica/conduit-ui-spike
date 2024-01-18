'use client';

import styled from '@emotion/styled';

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
              Home page
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum tincidunt dapibus. Duis in enim non tortor lacinia venenatis. Morbi luctus nibh id orci porttitor, a luctus ex convallis. Donec quis porta mauris. Mauris feugiat lobortis venenatis. Mauris lacinia urna ut pellentesque suscipit. Proin ut diam vitae enim tincidunt facilisis. Praesent ultricies ante diam. In ex ante, tincidunt sed aliquet iaculis, dictum nec leo. Proin tempus vestibulum est ac mollis. Cras venenatis, mauris vitae maximus sollicitudin, tortor dolor cursus nisl, et faucibus orci augue a neque. In commodo eleifend nibh id tempus. Nullam massa odio, volutpat eget porttitor vitae, feugiat vitae nisl.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum tincidunt dapibus. Duis in enim non tortor lacinia venenatis. Morbi luctus nibh id orci porttitor, a luctus ex convallis. Donec quis porta mauris. Mauris feugiat lobortis venenatis. Mauris lacinia urna ut pellentesque suscipit. Proin ut diam vitae enim tincidunt facilisis. Praesent ultricies ante diam. In ex ante, tincidunt sed aliquet iaculis, dictum nec leo. Proin tempus vestibulum est ac mollis. Cras venenatis, mauris vitae maximus sollicitudin, tortor dolor cursus nisl, et faucibus orci augue a neque. In commodo eleifend nibh id tempus. Nullam massa odio, volutpat eget porttitor vitae, feugiat vitae nisl.
            </p>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}
