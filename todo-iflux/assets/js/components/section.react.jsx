var React = require('react');
var msg = require('iflux/msg');
var PureMixin = require('iflux/mixins/pure-mixin');



/**
 * 封装section组件
 */
var Section = module.exports = React.createClass({
  mixins: [PureMixin],

  toggle(id) {
    msg.emit('todoListToggle', id);
  },

  destroy(id) {
    msg.emit('destroyTodoList', id);
  },

  toggleAll(e) {
    var state = e.target.checked;
    msg.emit('todoListToggleAll', state);
  },


  /**
   * virtualdom
   */
  render: function() {
    console.log('section render....');
    var todoList = this.props.data;

    return (
      <section id="main">
        <input id="toggle-all" type="checkbox" onChange={this.toggleAll}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
          {todoList.toSeq().map(function(v, k) {
            return (
              <li key={k} className={v.get('done') ? 'done' : ''}>
                <input
                  type="checkbox"
                  checked={v.get('done')}
                  onChange={this.toggle.bind(this, v.get('id'))}/>
                  { v.get('text') + " "}
                  <a onClick={this.destroy.bind(this, v.get('id'))}>x</a>
                </li>
            );
          }, this).toList().reverse().toJS()}
        </ul>
        </section>
      );
    }
  });