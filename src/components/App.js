
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Header from "./ui/header";
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} ></Route>
          <Route exact path="/services" component={() => <div>Services</div>} ></Route>
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} ></Route>
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} ></Route>
          <Route exact path="/websites" component={() => <div>Websites</div>} ></Route>
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} ></Route>
          <Route exact path="/about" component={() => <div>About Us</div>} ></Route>
          <Route exact path="/contact" component={() => <div>Contact Us</div>} ></Route>
          <Route exact path="/estimate" component={() => <div>Estimate</div>} ></Route>

        </Switch>
      </Router>
    </ThemeProvider >
  );
}

export default App;


{/* {[...new Array(120)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')} */}