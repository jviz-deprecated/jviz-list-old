//Add the events
jviz.modules.simpleList.prototype.events = function()
{
  //Save this
  var self = this;

  //Read all the data elements
  this._data.src.forEach(function(el, index)
  {
    //Get the info wrapper ID
    var cell_id = self._cell.wrapper.info.replace('{index}', index);

    //Add the click event
    jviz.dom.on(cell_id, 'click', function(e){ self._events.emit('click', el, index); });

    //Add the button events
    self._btn.src.forEach(function(btn)
    {
      //Get the button ID
      var btn_id = self._btn.id.replace('{index}', index).replace('{id}', btn.id);

      //Add the button event
      jviz.dom.on(btn_id, 'click', function(e){ self._events.emit('btn:' + btn.id, el, index); });

      //Next button
      return true;
    });

    //Continue
    return true;
  });

  //Return this
  return this;
};
