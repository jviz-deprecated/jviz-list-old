//Display the provided data
jviz.modules.simpleList.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ return this._dats.src; }

  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Reset the container
  jviz.dom.html('', this._table.id);

  //Save this
  var self = this;

  //Display all data
  data.forEach(function(el, index)
  {
    //Get the row ID
    var id_row = self._row.id + '-' + index;

    //Get the cell ID
    var id_cell_info = self._cell.info + '-' + index;
    var id_cell_btn = self._cell.btn + '-' + index;

    //Add the row
    jviz.dom.append({ _tag: 'div', id: id_row, class: self._row.class }, self._table.id);

    //Add the two cells
    jviz.dom.append({ _tag: 'div', id: id_cell_info, class: self._cell.class }, id_row);
    jviz.dom.append({ _tag: 'div', id: id_cell_btn, class: self._cell.class }, id_row);

    //Add the title
    if(typeof el.title !== 'undefined')
    {
      //Get the value
      var value_title = (typeof el.title === 'function') ? el.title(el, index) : el.title;

      //Add the title value
      jviz.dom.append({ _tag: 'div', id: id_cell_info + '-title', class: self._text.title, _html: value_title }, id_cell_info);
    }

    //Add the description
    if(typeof el.detail !== 'undefined')
    {
      //Get the value
      var value_detail = (typeof el.detail === 'function') ? el.detail(el, index) : el.detail;

      //Add the detail value
      jviz.dom.append({ _tag: 'div', id: id_cell_info + '-detail', class: self._text.detail, _html: value_detail}, id_cell_info);
    }

    //Add the buttons
    for(var j = 0; j < self._btn.src.length; j++)
    {
      //Display the button
      self.displayBtn(self._btn.src[j], id_cell_btn, index);
    }
  });

  //Add the button events
  data.forEach(function(el, index){ self.eventBtn(index); });

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