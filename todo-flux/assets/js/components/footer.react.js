var React = require('react');

var Footer = module.exports = React.createClass({
    render: function() {
        return (
          <footer id="info">
           <p>Double-click to edit a todo</p>
           <p>Created by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
           <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
         </footer>
        );
    }
});
