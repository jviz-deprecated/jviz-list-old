//Draw the list
jviz.modules.simpleList.prototype.draw = function()
{
  //Reset the container
  jviz.dom.html(this._table.id, '');

  //Save this
  var self = this;

  //Display all data
  this._data.src.forEach(function(el, index)
  {
    //Get the row ID
    var id_row = self._row.id + '-' + index;

    //Get the cell ID
    var id_cell_info = self._cell.info + '-' + index;
    var id_cell_btn = self._cell.btn + '-' + index;

    //Add the row
    jviz.dom.append(self._table.id, { _tag: 'div', id: id_row, class: self._row.class });

    //Add the two cells
    jviz.dom.append(id_row, { _tag: 'div', id: id_cell_info, class: self._cell.class });
    jviz.dom.append(id_row, { _tag: 'div', id: id_cell_btn, class: self._cell.class });

    //Add the title
    if(typeof el.title !== 'undefined')
    {
      //Get the value
      var value_title = (typeof el.title === 'function') ? el.title(el, index) : el.title;

      //Add the title value
      jviz.dom.append(id_cell_info, { _tag: 'div', id: id_cell_info + '-title', class: self._text.title, _html: value_title });
    }

    //Add the description
    if(typeof el.detail !== 'undefined')
    {
      //Get the value
      var value_detail = (typeof el.detail === 'function') ? el.detail(el, index) : el.detail;

      //Add the detail value
      jviz.dom.append(id_cell_info, { _tag: 'div', id: id_cell_info + '-detail', class: self._text.detail, _html: value_detail});
    }

    //Add the buttons
    for(var j = 0; j < self._btn.src.length; j++)
    {
      //Display the button
      self.displayBtn(self._btn.src[j], id_cell_btn, index);
    }
  });

  //Add the button events
  this._data.src.forEach(function(el, index){ self.eventBtn(index); });

  //Return this
  return this;
};