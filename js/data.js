//Display the provided data
jviz.modules.simpleList.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ return this._data.src; }

  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Parse the data
  data = data.map(function(el)
  {
    //Check the title
    if(typeof el.title === 'undefined'){ el.title = ''; }

    //Check the detail
    if(typeof el.detail === 'undefined'){ el.detail = ''; }

    //Return the parsed element
    return el;
  });

  //Save the data
  this._data.src = data;
};

//Get a data element
jviz.modules.simpleList.prototype.element = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this._data.src; }

  //Return the data index
  return this._data.src[index];
};
