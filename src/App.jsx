import StyledButton from "./components/test";
import RestaurantsComponent from "./components/restaurants";
import AppWrapper from "./components/app-wrapper";

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
