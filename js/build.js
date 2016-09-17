//Build the simple list
jviz.modules.simpleList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append({ _tag: 'div', id: this._id, class: this._class }, this._parent);

  //Build the table
  jviz.dom.append({ _tag: 'div', id: this._table.id, class: this._table.class }, this._id);

  //Parse the buttons list
  this.btn(this._btn.src);

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(this._data.ajax); }

  //Parse the data
  this.data(this._data.src);

  //Draw the table
  return this.draw();
};