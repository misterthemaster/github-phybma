import './App.css';
import Test from './components/test';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Welcome to the{' '}
        <span className="playground">React Primer Playground!</span>
      </h1>

      <p className="getStarted">
        Get started by editing <code className="code">/src/App.js</code>
      </p>

      <p className="description">
        This playground is for use with the Pluralsight React with Next.js
        Playbook Course
      </p>

      <Test text={'Allo toi 2'} />
    </div>
  );
}

export default App;
