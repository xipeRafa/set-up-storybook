
import Button from './components/atoms/Buttons/Button'

function App() {
  return (
    <div>
      
       <Button label='Primary' primary={true} />
       <Button label='Secondary' />
       <Button label='Large' size='large' />
       <Button label='Small' size='small' />

    </div>
  );
}

export default App;
