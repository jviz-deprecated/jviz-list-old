//Build the simple list
jviz.modules.simpleList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append(this._parent, { _tag: 'div', id: this._id, class: this._class });

  //Build the table
  jviz.dom.append(this._id, { _tag: 'div', id: this._table.id, class: this._table.class });

  //Parse the buttons list
  this.btn(this._btn.src);

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(this._data.ajax); }

  //Parse the data
  this.data(this._data.src);

  //Draw the table
  return this.draw();
};