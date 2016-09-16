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
jviz.modules.simpleList.prototype.displayBtn = function(obj, cell_id, cell_index)
{
  //Save this
  var self = this;

  //Get the button id
  var btn_id = this._btn.id + '-' + cell_index + '-' + obj.id;

  //Get the button class
  var btn_class = this._btn.class + ' ' + this._btn.type[obj.type];

  //Add the button
  jviz.dom.append({ _tag: 'div', id: btn_id, class: btn_class }, cell_id);

  //Check the button type
  if(obj.type === 'icon')
  {
    //Update the style
    $('#' + btn_id).css('background-image', '');

    //Exit
    return;
  }
  else
  {
    //Add the text
    jviz.dom.append(obj.value, btn_id);
  }

  //Add the button event
  $('#' + btn_id).on('mousedown', function(){ self.clickBtn(obj.id, cell_index); });
};

//Parse the buttons list
jviz.modules.simpleList.prototype.parseBtn = function(list)
{
  //Read the full list
  list = list.map(function(el)
  {
    //Check the button id
    if(typeof el.id === 'undefined'){ el.id = jviz.utils.genID({ length: 5 }); }

    //Check the type
    if(typeof el.type === 'undefined'){ el.type = 'text'; }

    //Check the value
    if(typeof el.value === 'undefined'){ el.value = ''; }

    //Return the element
    return el;
  });

  //Return the list
  return list;
};

//Click button event
jviz.modules.simpleList.prototype.clickBtn = function(id, index)
{
  //Get the data
  var data = this._data.src[index];

  //Emit the event
  this.emit('btn:' + id, data, index);
}