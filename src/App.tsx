import React from 'react';
import './App.css';

function App() {
  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>Привет! Ты все еще фоткаешь экран?</h1>
        <h2 className='content__sub-title'>Ну ничего пара шагов и ты постигнишь сриншоты - это не сложнее приготовления кофе.</h2>


        <section className='section'>
          <h2 className='section__title'>Windows</h2>

          <div className='section__instruction'>
            <span className='section__step'>Шаг первый.</span>
            <span className='section__paragraph'>
              Сделаем скриншот с помощью горячих клавишь ниже, экран сохранит свое состояние в момент нажатия.
            </span>
            <span className='section__paragraph'>
              Выбираем нужную область экрана.
            </span>
            <code className='section__binds'>
              <div className='windows-icon'></div> + Shift + S
            </code>
          </div>

          <div className='section__instruction'>
            <span className='section__step'>Шаг второй.</span>
            <span className='section__paragraph'>
              Теперь мы сохранили снимок экрана в буфере обмена и с помощью бинда ниже можем вставить в любой чатик.
            </span>
            <code className='section__binds'>
              Ctrl + V
            </code>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
