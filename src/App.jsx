import StyledButton from "./components/test";
import RestaurantsComponent from "./components/restaurants";
import AppWrapper from "./components/app-wrapper";

const App = {
  name: 'app',
  render() {
    return (
      <AppWrapper>
        <RestaurantsComponent></RestaurantsComponent>
        <StyledButton>Test</StyledButton>
      </AppWrapper>
    );
  },
}

export default App;
