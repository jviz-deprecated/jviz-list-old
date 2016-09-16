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
    var id_cell = self._cell.id + '-' + index;

    //Get the first cell ID
    var id_cell1 = id_cell + '-cell1';
    var id_cell2 = id_cell + '-cell2';

    //Add the row
    jviz.dom.append({ _tag: 'div', id: id_row, class: self._row.class }, self._table.id);

    //Add the two cells
    jviz.dom.append({ _tag: 'div', id: id_cell1, class: self._cell.class }, id_row);
    jviz.dom.append({ _tag: 'div', id: id_cell2, class: self._cell.class }, id_row);

    //Add the title
    if(typeof el.title !== 'undefined')
    {
      //Get the value
      var value_title = (typeof el.title === 'function') ? el.title(el, index) : el.title;

      //Add the title value
      jviz.dom.append({ _tag: 'div', id: id_cell1 + '-title', class: self._text.title, _html: value_title }, id_cell1);
    }

    //Add the description
    if(typeof el.detail !== 'undefined')
    {
      //Get the value
      var value_detail = (typeof el.detail === 'function') ? el.detail(el, index) : el.detail;

      //Add the detail value
      jviz.dom.append({ _tag: 'div', id: id_cell1 + '-detail', class: self._text.detail, _html: value_detail}, id_cell1);
    }

    //Add the buttons
    for(var j = 0; j < this._btn.src.length; j++)
    {
      //Display the button
      this.displayBtn(self._btn.src[j], id_cell2, index);
    }

    //Add the data event
    $('#' + id_row).on('mousedown', function(){ self.emit('click', el, index); });
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