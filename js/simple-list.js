//Simple list module
jviz.modules.simpleList = function(opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Save the component id
  this._id = (typeof opt.id === 'undefined') ? jviz.misc.getID({ prefix: 'simplelist-', length: 5 }) : opt.id;

  //Save the component class name
  this._class = (typeof opt.class === 'undefined') ? 'jviz-modules-simple-list' : opt.class;

  //Save the parent element
  this._parent = opt.parent;

  //Save the element title
  this._title = (typeof opt.title === 'undefined') ? '' : opt.title;

  //Data
  this._data = {};
  this._data.src = (typeof opt.data === 'undefined') ? [] : opt.data; //Data source
  this._data.length = 0; //Data length

  //Table object
  this._table = {};
  this._table.id = this._id + '-table'; //Table ID
  this._table.class = this._class + '-table'; //Table class

  //Row
  this._row = {};
  this._row.id = this._id + '-row'; //Row ID
  this._row.class = this._class + '-row'; //Row class

  //Cell
  this._cell = {};
  this._cell.id = this._id + '-cell'; //Cell ID
  this._cell.class = this._class + '-cell'; //Cell class
  this._cell.info = this._cell.id + '-wrapper-info'; //Cell info
  this._cell.btn = this._cell.id + '-wrapper-btn'; //Cell button

  //Text type
  this._text = {};
  this._text.title = this._class + '-title'; //Title text class
  this._text.detail = this._class + '-detail'; //Detail text class

  //Button
  this._btn = {};
  this._btn.id = this._id + '-btn'; //Button ID
  this._btn.class = this._class + '-btn'; //Button class
  this._btn.src = (typeof opt.btn === 'undefined') ? [] : opt.btn; //Buttons list
  this._btn.color = this._btn.class + '--{color}'; //Button color class template

  //Build the events
  this._events = new jviz.commons.events();

  //Build the editable list
  this.build();

  //Return this
  return this;
};

//On method
jviz.modules.simpleList.prototype.on = function(name, listener){ return this._events.add(name, listener); };
