import { Section, Container, Footer } from '../';
import './App.css';

const App: React.FC = () => {
  const win = {
    heading: 'Windows',
    paragraphs: [
      'Скриншот создается с помощью комбинации трех клавиш Win + Shift + S',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      `Скриншот сохраняется в буфер обмена и дальше можно использовать "Вставить"/"Paste" 
      или комбинация горячих клавиш Ctrl + V, чтобы вставить скриншот в нужное место`
    ]
  };
  const mac = {
    heading: 'MacOS',
    paragraphs: [
      'Скриншот создается с помощью комбинации трех клавиш Shift + Command + 4',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      'Скриншот сохраняется на рабочем столе'
    ]
  };
  const lin = {
    heading: 'Linux',
    paragraphs: [
      'Скриншот создается с помощью комбинации трех клавиш Shift + Ctrl + PrtSc',
      'Перетащите перекрестие, чтобы выбрать область экрана для создания снимка',
      `Скриншот сохраняется в буфер обмена и дальше можно использовать "Вставить"/"Paste" 
      или комбинация горячих клавиш Ctrl + V, для того чтобы вставить в нужное место`
    ]
  };

  return (
    <main className='app'>
      <Container>
        <h1>Здравствуйте! Делайте скриншоты, а не фотографируйте экран.</h1>
        <h2>Ваша система?</h2>
        <Section heading={win.heading} paragraphs={win.paragraphs}/>
        <Section heading={mac.heading} paragraphs={mac.paragraphs}/>
        <Section heading={lin.heading} paragraphs={lin.paragraphs}/>
        <Footer />
      </Container>
    </main>
  );
}

export { App };
