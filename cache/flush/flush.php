<!DOCTYPE html>
<html>
  <head>
    <title>Barra de progreso en Botstrap</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </head>
  <body>
    

    <?php
      $command = escapeshellcmd('sh flush_server.sh');
      $output = shell_exec($command);

      $command = escapeshellcmd('python3 flush_cdn.py');
      $output = shell_exec($command);
      $trimmed_1 = trim($output);
      if ($trimmed_1 == 'True') {
        $trimmed = true;
      } else {
        $trimmed = false;
      }
    ?>

    <?php if ($trimmed) : ?>
      <div class="mt-5"></div>
      <div class="text-center">
        <h3 id="title">Ejecutando Flush de Memoria Cache...</h3>
      </div>
      <div id="percent" class="text-center mt-5" style="margin-top: 20px;">
        <h4>0%</h4>
      </div>

      <div class="progress" style="margin:20px">
        <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" 
style="width: 0%">
          <span class="sr-only">0% Complete</span>
        </div>
      </div>

      <script>
        var progreso = 0;
        var idIterval = setInterval(function(){
          // Aumento en 10 el progeso
          progreso += 2.85;
          $('#bar').css('width', progreso + '%');

          if (progreso < 100) {
            $('#percent').html('<h4>'+parseInt(progreso)+'% </h4>');
          } else {
            $('#percent').html('<h4>100%</h4>');
            $('#bar').css('background-color', '#28a745');
            $('#title').html('<h3>Flusheo de Memoria Cache realizado Correctamente!</h3>');
          }
         
        
          if(progreso == 100) {
            clearInterval(idIterval);
          }
        }, 1000);
      </script>

    <?php else: ?>
      <div class="mt-5"></div>
      <div class="text-center">
        <h3 id="title">Conexión Fallida</h3>
      </div>
      

      <div class="progress" style="margin:20px">
        <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" 
style="width: 0%">
          <span class="sr-only">0% Complete</span>
        </div>
      </div>

      <script>
        var progreso = 0;
        var idIterval = setInterval(function(){
          // Aumento en 10 el progeso
          progreso += 100;
          $('#bar').css('width', progreso + '%');

          if (progreso < 100) {
            //$('#percent').html('<h4>'+parseInt(progreso)+'% </h4>');
          } else {
            //$('#percent').html('<h4>100%</h4>');
            $('#bar').css('background-color', '#dc3545');
            //$('#title').html('<h3>Flusheo de Memoria Cache realizado Correctamente!</h3>');
          }
         
        
          if(progreso == 100) {
            clearInterval(idIterval);
          }
        }, 1000);
      </script>
    <?php endif; ?>

  </body>
</html>
