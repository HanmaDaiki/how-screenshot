import { Section, Container, Footer } from '../';
import './App.css';

const App: React.FC = () => {
  const win = {
    heading: 'Windows',
    paragraphs: [
      'Скриншот можно сделать с помощью комбинации трех клавишь Win + Shift + S',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      `Скриншот сохраняется в буфер обмена и дальше можно использовать "Вставить"/"Paste" 
      или комбинация горячих клавишь Ctrl + V, для того чтобы вставить их в нужное место`
    ]
  };
  const mac = {
    heading: 'MacOS',
    paragraphs: [
      'Скриншот можно сделать с помощью комбинации трех клавишь Shift + Command + 4',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      'Скриншот сохраняется на рабочем столе'
    ]
  };
  const lin = {
    heading: 'Linux',
    paragraphs: [
      'Скриншот можно сделать с помощью комбинации трех клавишь Shift + Ctrl + PrtSc',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      `Скриншот сохраняется в буфер обмена и дальше можно использовать "Вставить"/"Paste" 
      или комбинация горячих клавишь Ctrl + V, для того чтобы вставить их в нужное место`
    ]
  };

  return (
    <main className='app'>
      <Container>
        <h1>Привет! Делай скриншоты, а не фоткай экран.</h1>
        <h2>Твоя система?</h2>
        <Section heading={win.heading} paragraphs={win.paragraphs}/>
        <Section heading={mac.heading} paragraphs={mac.paragraphs}/>
        <Section heading={lin.heading} paragraphs={lin.paragraphs}/>
        <Footer />
      </Container>
    </main>
  );
}

export { App };
