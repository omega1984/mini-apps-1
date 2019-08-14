var app = {
  init: function(){
    $('#submit').on('click', app.handleSubmit);
  },
  handleSubmit: function(event){
    var message = {text: $('#text').value};
  
    $.ajax ({
      type: 'POST',
      data: JSON.stringify(message),
      contenttype: 'application/json',
      success: function(data){
        $('#text').val("");
        app.render(data);
      }
    });
    event.preventDefault();
  },
  render: function(data){
    $('#app').append(data);
  }
}


