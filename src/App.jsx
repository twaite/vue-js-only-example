import StyledButton from "./components/test";
import RestaurantsComponent from "./components/restaurants";


const App = {
  name: 'app',
  render() {
    return (
      <div id="app">
        <h1>Hello World</h1>
        <StyledButton>Test</StyledButton>
        <RestaurantsComponent></RestaurantsComponent>
      </div>
    );
  },
}

export default App;