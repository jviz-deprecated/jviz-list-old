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
