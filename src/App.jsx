import RestaurantsComponent from "./components/restaurants.jsx";
import { injectGlobal } from 'vue-styled-components';

const GlobalStyles = injectGlobal`
  body {
    margin: 0;
    color: white;
    background: #2d2c2a;
    font-family: 'helvetica';
  }
`;

const App = {
  data() {
    return {
      test: () => {return <h3>test this pls</h3>},
    }
  },
  render() {
    return (
      <div>
        <GlobalStyles/>
        <RestaurantsComponent trueRenderProp={this.test}></RestaurantsComponent>
      </div>
    );
  },
}

export default App;
