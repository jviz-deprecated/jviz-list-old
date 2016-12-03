//Display the provided data
jviz.modules.simpleList.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ return this._data.src; }

  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Reset the data list
  this._data.src = [];

  //Read all the data
  for(var i = 0; i < list.length; i++)
  {
    //Get the element
    var el = list[i];

    //Check the title
    if(typeof el.title === 'undefined'){ el.title = ''; }

    //Check the detail
    if(typeof el.detail === 'undefined'){ el.detail = ''; }

    //Check for empty title and detail
    if(el.title === '' && el.detail === ''){ continue; }

    //Save the element
    this._data.src.push(el);
  }

  //Save the data length
  this._data.length = this._data.src.length;

  //Return this
  return this;
};

//Get a data element
jviz.modules.simpleList.prototype.element = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this._data.src; }

  //Return the data index
  return this._data.src[index];
};
