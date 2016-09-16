//Add a new button
jviz.modules.simpleList.prototype.addBtn = function(obj)
{
  //Check the object
  if(typeof obj !== 'object'){ return this; }

  //Check for array
  if(jviz.is.array(obj) === false){ obj = [ obj ]; }

  //Save this
  var self = this;

  //Parse the list
  obj = this.parseBtn(obj);

  //Read all the buttons
  obj.forEach(function(el)
  {
    //Read all the elements
    for(var i = 0; i < self._data.src.length; i++)
    {
      //Get the cell id
      var id = self._cell.id + '-' + i + '-cell2';

      //Add the button
      self.displayBtn(el, id, i);
    }
  });

  //Concat the lists
  this._btn.src = this._btn.src.concat(obj);

  //Return this
  return this;
};

//Display a new button
jviz.modules.simpleList.prototype.displayBtn = function(el, cell_id, cell_index)
{
  //Save this
  var self = this;

  //Get the button id
  var id = this._btn.id + '-' + cell_index + '-' + el.id;

  //Get the button value
  var value = el.text;

  //Add the button
  jviz.dom.append({ _tag: 'div', id: id, class: this._btn.class, _html: value }, cell_id);
};

//Parse the buttons list
jviz.modules.simpleList.prototype.parseBtn = function(list)
{
  //Read the full list
  list = list.map(function(el)
  {
    //Check the button id
    if(typeof el.id === 'undefined'){ el.id = jviz.utils.genID({ length: 5 }); }

    //Check the value
    if(typeof el.text === 'undefined'){ el.text = 'Button'; }

    //Return the element
    return el;
  });

  //Return the list
  return list;
};

//Add the button events
jviz.modules.simpleList.prototype.eventBtn = function(index)
{
  //Save this
  var self = this;

  //Read all the buttons
  this._btn.src.forEach(function(el)
  {
    //Get the button ID
    var id = self._btn.id + '-' + index + '-' + el.id;

    //Add the button event
    $('#' + id).on('mousedown', function(){ self.clickBtn(el.id, index); });
  });
};

//Click button event
jviz.modules.simpleList.prototype.clickBtn = function(id, index)
{
  //Get the data
  var data = this._data.src[index];

  //Emit the event
  this.emit('click:' + id, data, index);
}