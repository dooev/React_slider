import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hellow() {
	let world = "World"
	return (
					<h1> Hellow {world} </h1>
		)
}

function SayFullName(props) {
	return (
					<div>
						<h1>Моё имя {props.name}, и я говорю вам - {props.say}</h1>
						<a href={props.link}> Ссылка на выход в Мир</a>
					</div>
		)
}

function All(){
	return (
					<div>

					<SayFullName name='Dima' say='Hellow World!'link='ya.ru'/>
					</div>
	
		)
}


ReactDOM.render(<All />, document.getElementById('root'));
registerServiceWorker();
