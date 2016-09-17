//Add a new button
jviz.modules.simpleList.prototype.btn = function(list)
{
  //Check the object
  if(typeof list !== 'object'){ return this; }

  //Check for array
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Read the full list
  list = list.map(function(el)
  {
    //Check the button id
    if(typeof el.id === 'undefined'){ el.id = jviz.utils.genID({ length: 5 }); }

    //Check the value
    if(typeof el.value === 'undefined'){ el.value = 'Button'; }

    //Check the button color
    if(typeof el.color === 'undefined'){ el.color = ''; }

    //Check the color value
    el.color = (jviz.colors.exists(el.color) === true) ? el.color.toLowerCase() : 'navy';

    //Return the element
    return el;
  });

  //Save the list
  this._btn.src = list;

  //Return this
  return this;
};

//Display a new button
jviz.modules.simpleList.prototype.displayBtn = function(el, cell_id, cell_index)
{
  //Get the button id
  var id = this._btn.id + '-' + cell_index + '-' + el.id;

  //Add the button
  jviz.dom.append({ _tag: 'div', id: id, class: this._btn.class, _html: el.value }, cell_id);

  //Add the button color
  $('#' + id).addClass(this._btn.color + el.color);
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