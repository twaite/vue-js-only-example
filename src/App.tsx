import StyledButton from "./components/test";
import RestaurantsComponent from "./components/restaurants";
import AppWrapper from "./components/app-wrapper";
import { FunctionalComponent } from "./components/functional-comp.tsx";

const App = {
  data() {
    return {
      test: () => {return <h3>test this pls</h3>},
    }
  },
  render() {
    return (
      <AppWrapper>
        <RestaurantsComponent trueRenderProp={this.test}></RestaurantsComponent>
        <StyledButton onClick={() => this.myRenderProp()}>Test</StyledButton>
        <FunctionalComponent initialCount={3}></FunctionalComponent>
      </AppWrapper>
    );
  },

  methods: {
    myRenderProp() {
      console.log('test');
    }
  },
}

export default App;
