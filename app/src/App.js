import './App.css';
import Profile from './Container/Home/Profile';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutMe from './Container/AboutMe/AboutMe';
import Resume from './Container/Resume/Resume';
import { FullPage, Slide } from 'react-full-page';

const anchors = ["firstPage", "secondPage", "thirdPage"];
function App() {

  return (
    <FullPage duration="150">
      <Slide>
        <Profile />
      </Slide>
      <Slide>
        <AboutMe />
      </Slide>
      <Slide>
        <Resume />
      </Slide>
    </FullPage>
    // <ReactFullpage
    //   scrollingSpeed={1000}
    //   licenseKey='YOUR_KEY_HERE'
    //   v2compatible={true}
    //   responsiveWidth={1300}
    //   responsiveHeight={750}
    //   anchors={anchors}
    //   navigation
    //   navigationTooltips={anchors}
    //   onLeave={(origin, destination, direction) => {
    //     console.log("onLeave event", { origin, destination, direction });
    //   }}
    //   render={({ state, fullpageApi }) => {
    //     console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

    //     return (
    //       <ReactFullpage.Wrapper>
    //         <Profile />
    //         <AboutMe />
    //         <Resume />
    //       </ReactFullpage.Wrapper>

    //     );
    //   }
    //   }
    // />
  );
}

export default App;
