import {
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAAppFooter,
  GoAPageBlock,
  GoAAppFooterMetaSection,
  GoAOneColumnLayout,
} from '@abgov/react-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { WildfirePage } from './pages/WildfirePage';
import { Home } from './pages/Home';

export function App() {
  return (
    <GoAOneColumnLayout>

      <BrowserRouter>
        <section slot="header">
          <GoAAppHeader
            url="/"
            heading="Keycloak Auth Demo"
            maxContentWidth="100%"
          >
            <Nav />
          </GoAAppHeader>
        </section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/secure-page' element={<WildfirePage />} />
        </Routes>
      </BrowserRouter>

      <section slot="footer">
        <GoAAppFooter maxContentWidth="100%">
          <GoAAppFooterMetaSection>
            {/* <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">
              Get help
            </a>
            <a href="https://goa-dio.atlassian.net/wiki/spaces/DS/pages/2342813697/Design+System+Drop-in+hours">
              Drop-in Hours
            </a>
            <a href="https://github.com/GovAlta/ui-components/issues/new/choose">
              Contribute
            </a> */}
          </GoAAppFooterMetaSection>
        </GoAAppFooter>
      </section>
    </GoAOneColumnLayout>
  );
}

export default App;
