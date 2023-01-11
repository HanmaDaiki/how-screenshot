import React from 'react';
import './App.css';

function App() {
  return (
    <main className='content'>
      <h1>Привет! Ты все еще фоткаешь экран?</h1>
      <h2>Ну ничего пара шагов и ты постигнишь сриншоты - это не сложнее приготовления кофе.</h2>


      <section className='windows'>
        <h3>Windows</h3>

        <p>
          Шаг первый.
          <br />
          Сделаем скриншот с помощью горячих клавишь ниже, экран сохранит свое состояние в момент нажатия.
          <br />
          Выбираем нужную область экрана.
          <p>
            <code className='windows__binds'>
              <div className='windows__icon-win'></div> + Shift + S
            </code>
          </p>
        </p>

        
        <p>
          Шаг второй.
          <br />
          Теперь мы сохранили снимок экрана в буфере обмена и с помощью бинда ниже можем вставить в любой чатик.
          <p>
            <code className='windows__binds'>
              Ctrl + V
            </code>
          </p>
        </p>
      </section>
    </main>
  );
}

export default App;
