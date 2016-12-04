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

  //Cell wrapper
  this._cell.wrapper = {};
  this._cell.wrapper.id = this._cell.id + '-wrapper'; //Wrapper ID
  this._cell.wrapper.info = this._cell.wrapper.id + '-info-{index}'; //Cell info
  this._cell.wrapper.btn = this._cell.wrapper.id + '-btn-{index}'; //Cell button

  //Title
  this._title = {};
  this._title.id = this._id + '-title-{index}'; //Title ID
  this._title.class = this._class + '-title'; //Title class

  //Detail
  this._detail = {};
  this._detail.id = this._id + '-detail-{index}'; //Detail ID
  this._detail.class = this._class + '-detail'; //Detail class

  //Button
  this._btn = {};
  this._btn.id = this._id + '-btn-{index}-{id}'; //Button ID template
  this._btn.class = this._class + '-btn'; //Button class
  this._btn.src = (typeof opt.btn !== 'undefined') ? opt.btn : []; //Buttons list
  this._btn.color = this._btn.class + '--{color}'; //Buttons color template
  this._btn.length = 0; //Number of buttons

  //Build the events
  this._events = new jviz.commons.events();

  //Build the editable list
  this.build();

  //Parse the data
  this.data(this._data.src);

  //Parse the buttons list
  this.btn(this._btn.src);

  //Draw the table
  this.draw();

  //Return this
  return this;
};

//On method
jviz.modules.simpleList.prototype.on = function(name, listener){ return this._events.add(name, listener); };
