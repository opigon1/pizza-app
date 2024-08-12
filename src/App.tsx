import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <Button appearence='large'>Зарегистрироваться</Button>
      <Input type='email' placeholder='Email' name='email' />
    </>
  );
}

export default App;
