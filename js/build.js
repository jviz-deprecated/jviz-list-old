//Build the simple list
jviz.modules.simpleList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append({ _tag: 'div', id: this._id, class: this._class }, this._parent);

  //Build the table
  jviz.dom.append({ _tag: 'div', id: this._table.id, class: this._table.class }, this._id);

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(this._data.ajax); }

  //Parse the buttons list
  this._btn.src = this.parseBtn(this._btn.src);

  //Display the data
  return this.data(this._data.src);
};