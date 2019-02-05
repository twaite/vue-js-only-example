import StyledButton from "./components/test";
import ClassTestComponent from "./components/class-test.jsx";


const App = {
  name: 'app',
  render() {
    return (
      <div id="app">
        <h1>Hello World</h1>
        <StyledButton>Test</StyledButton>
        <ClassTestComponent></ClassTestComponent>
      </div>
    );
  },
}

export default App;