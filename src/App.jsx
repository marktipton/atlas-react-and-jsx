import { Header } from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <Section title='What is react?'>
        React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components that manage their own state and can be composed together to build complex interfaces. React uses a virtual DOM to efficiently update and render only the parts of the UI that change, making it fast and responsive.
      </Section>
      <Section title='Benefits of react'>
        <ul>
          <li>
            React allows developers to build encapsulated components that manage their own state. These components can be reused throughout the application, making code more modular, maintainable, and easier to manage.
          </li>
          <li>
            With React, you describe what the UI should look like for any given state, and React takes care of updating the DOM to match that state. This approach simplifies the development process by allowing developers to focus on how the UI should look rather than how to implement it.
          </li>
          <li>
            React has a large and active community, with extensive resources, tools, libraries, and third-party components available.
          </li>
        </ul>
      </Section>
    </>
  );
}

export default App;
