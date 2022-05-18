const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {key:'5'}, props.name),
        React.createElement('p', {key:'6'}, props.occupation)
    ])
}

const App = () => {
    return React.createElement('div',{},[
        React.createElement('h1', {className:'title', key:'1'}, 'React is Rendered'),
        React.createElement(Person, {name:'Vishnu', occupation:'Student', key:'2'}, null),
        React.createElement(Person, {name:'Phani', occupation:'Show boy', key:'3'}, null),
        React.createElement(Person, {name:'Ajay', occupation:'Coder', key:'4'}, null)
    ])
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));