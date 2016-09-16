//Simple list module
jviz.modules.simpleList = function(opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Save the component id
  this._id = (typeof opt.id === 'undefined') ? jviz.utils.getID({ prefix: 'simplelist-', length: 5 }) : opt.id;

  //Save the component class name
  this._class = (typeof opt.class === 'undefined') ? 'jviz-modules-simple-list' : opt.class;

  //Save the parent element
  this._parent = opt.parent;

  //Save the element title
  this._title = (typeof opt.title === 'undefined') ? '' : opt.title;

  //Data
  this._data = {};
  this._data.ajax = (typeof opt.ajax === 'undefined') ? {} : opt.ajax;
  this._data.src = (typeof opt.data === 'undefined') ? [] : opt.data;

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

  //Text type
  this._text = {};
  this._text.title = this._class + '-title'; //Title text class
  this._text.detail = this._class + '-detail'; //Detail text class

  //Button
  this._btn = {};
  this._btn.id = this._id + '-btn'; //Button ID
  this._btn.class = this._class + '-btn'; //Button class
  this._btn.src = []; //Buttons list

  //Build the events
  jviz.factory.events(this);

  //Build the editable list
  this.build();

  //Return this
  return this;
};