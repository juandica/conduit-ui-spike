'use client';

import { UiComponents } from '@conduit-ui/ui-components';

export default async function Index() {
  return (
    <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Connectors page
            </h1>
          </div>
          <UiComponents />
        </div>
      </div>
  );
}