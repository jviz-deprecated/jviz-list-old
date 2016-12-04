//Draw the list
jviz.modules.simpleList.prototype.draw = function()
{
  //Reset the container
  jviz.dom.html(this._table.id, '');

  //Check the data length
  if(this._data.length === 0){ return this; }

  //Save this
  var self = this;

  //Display all data
  this._data.src.forEach(function(el, index)
  {
    //Get the row ID
    var id_row = self._row.id + '-' + index;

    //Get the info wrapper ID
    var id_cell_info = self._cell.wrapper.info.replace('{index}', index);

    //Get the button wrapper ID
    var id_cell_btn = self._cell.wrapper.btn.replace('{index}', index);

    //Add the row
    jviz.dom.append(self._table.id, { id: id_row, class: self._row.class });

    //Add the first cell
    jviz.dom.append(id_row, { id: id_cell_info, class: self._cell.class });

    //Add the second cell
    jviz.dom.append(id_row, { id: id_cell_btn, class: self._cell.class });

    //Get the title element id
    var id_title = self._title.id.replace('{index}', index);

    //Get the title text
    var text_title = (typeof el.title === 'function') ? el.title(el, index) : el.title;

    //Add the title text
    jviz.dom.append(id_cell_info, { id: id_title, class: self._title.class, _html: text_title });

    //Check the title value
    if(text_title === ''){ jviz.dom.hide(id_title); }

    //Get the detail element id
    var id_detail = self._detail.id.replace('{index}', index);

    //Get the detail text
    var text_detail = (typeof el.detail === 'function') ? el.detail(el, index) : el.detail;

    //Add the detail text
    jviz.dom.append(id_cell_info, { id: id_detail, class: self._detail.class, _html: text_detail});

    //Check the detail value
    if(text_detail === ''){ jviz.dom.hide(id_detail); }

    //Add the button
    for(var j = self._btn.src.length - 1; j >= 0; j--)
    {
      //Get the button
      var btn = self._btn.src[j];

      //Get the button id
      var id_btn = self._btn.id.replace('{index}', index).replace('{id}', btn.id);

      //Add the button
      jviz.dom.append(id_cell_btn, { id: id_btn, class: self._btn.class });

      //Add the button text
      jviz.dom.html(id_btn, btn.text);

      //Add the button color
      jviz.dom.class.add(id_btn, self._btn.color.replace('{color}', btn.color));
    }

    //Next button
    return true;
  });

  //Add the events
  this.events();

  //Return this
  return this;
};

//Clear all
jviz.modules.simpleList.prototype.clear = function()
{
  //Clear the list
  jviz.dom.html(this._table.id, '');

  //Continue
  return this;
};
