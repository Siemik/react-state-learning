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
    render: function() {
        return React.createElement('div', {},
                React.createElement('span', {}, 'Number ' + this.state.counter),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.increment}, '+1'),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.decrement}, '-1')
        );
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
