var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    componentWillMount() {
      console.log('componentWillMount- Można dodać If by nie wyświetlać liczników jeśli okno przeglądaki jest za małe');
    },
    render: function() {
        return React.createElement('div', {},
                React.createElement('span', {}, 'Number ' + this.state.counter),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.decrement}, '-1')
        );
    },
    componentDidMount() {
      console.log('componentDidMount- Można wykorzsytać by wczytać zapisane liczby liczników z serwera');
    },
    componentWillReceiveProps() {
      console.log('componentWillReceiveProps- Można wykorzsytać setState() by zaktualizować liczby licznków');
    },
    shouldComponentUpdate() {
      console.log('shouldComponentUpdate- Można wykorzsytać do optymalizacji by sprawdzać czy chcemy renderować aktualizacje kompontentu');
    },
    componentWillUpdate () {
      console.log('componentWillUpdate- Można dodać If by nie aktualizować licznika jeśli zawiera pechową liczbę ');
    },
    componentDidUpdate() {
      console.log('componentDidUpdate- Jeśli nowe dane liczników zostały dostarczone na serwer można je zaktualizować');
    },
    componentWillUnmount() {
      console.log('componentWillUnmount- Można wykorzsytać do zresetowania danych licznika');
    }
});



var Counters = React.createClass({
    render: function() {
        return React.createElement('div', {},
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {}),
                    React.createElement(Counter, {})
            )
    }
});
var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));
