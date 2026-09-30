import Button from './components/Button/Button';
import './index.css';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Storybook Demo</h1>
      <p>Run <code>npm run storybook</code> to explore components.</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Danger" variant="danger" />
      </div>
    </div>
  );
}

export default App;
