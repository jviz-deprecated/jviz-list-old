//Add a new button
jviz.modules.simpleList.prototype.btn = function(opt)
{
  //Check the object
  if(typeof list !== 'object'){ return this._btn.src; }

  //Check for array
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Reset the list
  this._btn.src = [];

  //Read the full list
  for(var i = 0; i < list.length; i++)
  {
    //Get the button element
    var el = list[i];

    //Check the button id
    if(typeof el.id !== 'string'){ continue; }

    //Check the button text
    el.text = (typeof el.text !== 'string') ? 'Button' : el.text;

    //Check the color
    el.color = (typeof el.color !== 'string') ? '' : el.color.toLowerCase();

    //Check if color exists
    if(jviz.colors.exists(el.color) === false){ el.color = 'navy'; }

    //Save the button
    this._btn.src.push(el);
  }

  //Save the number of buttons
  this._btn.length = this._btn.src.length;

  //Return this
  return this;
};

//Display a new button
jviz.modules.simpleList.prototype.displayBtn = function(el, cell_id, cell_index)
{
  //Get the button id
  var id = this._btn.id + '-' + cell_index + '-' + el.id;

  //Add the button
  jviz.dom.append(cell_id, { _tag: 'div', id: id, class: this._btn.class, _html: el.value });

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
  this._events.emit('click:' + id, data, index);
};
