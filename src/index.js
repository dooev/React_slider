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
						<h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
						<a href={props.link}> Ссылка на Vk</a>
					</div>
		)
}

function All(){
	return (
					<div>

					<SayFullName name='Du' link='ya.ru'/>
					<SayFullName name='Fd' link='yafd.ru'/>
					<SayFullName name='Dffff' link='yaf.ru'/>
					</div>
	
		)
}


ReactDOM.render(<All />, document.getElementById('root'));
registerServiceWorker();
