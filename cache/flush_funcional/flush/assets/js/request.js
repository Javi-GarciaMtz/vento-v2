
function test() {
    $.ajax({
        type: "POST",
        url: './model/data_processing.php',
        data: $(this).serialize(),
        success: function(response) {
            $('#buttom-exec').hide();
            var response_data = JSON.parse(response);
            
            if (response_data.status) {
                progress_bar('#28a745', 2.5, '<h4>100%</h4>', '<h3>Flusheo de Memoria Cache realizado Correctamente!</h3>');
            } else {
                progress_bar('#dc3545', 100, '<h4>Ponte en contacto con el equipo de desarrollo</h4>', '<h3>Error al Flushear la Memoria Cache!</h3>');
            }
        }
    });
}

function progress_bar(color, progress, title_percent, title) {
    var progreso = 0;
    var idIterval = setInterval(function(){
      progreso += progress;
      $('#bar').css('width', progreso + '%');

      if (progreso < 100) {
        $('#percent').html('<h4>'+parseInt(progreso)+'% </h4>');
        $('#title').html('Ejecutando Flush de Memoria Cache...');
      } else {
        $('#percent').html(title_percent);
        $('#bar').css('background-color', color);
        $('#title').html(title);
        clearInterval(idIterval);
      }
    
      if(progreso == 100) {
        clearInterval(idIterval);
      }
    }, 1000);
}

