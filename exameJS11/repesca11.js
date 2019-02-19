
/*----- ¿Suma o multiplicación? -----*/

/*Para empezar tenemos un prompt que nos pregunta si queremos sumar o multiplicar*/

  var ejercicio = prompt('¿Prefieres sumar o multiplicar?');

/*----- Var numeros aleatorios -----*/

/*Estas son las variables que proporcionan numeros aleatorios entre 0 y 10 estos incluidos al ejercicio*/

  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 11);
  var num3 = Math.floor(Math.random() * 11);
  var num4 = Math.floor(Math.random() * 11);
  var num5 = Math.floor(Math.random() * 11);
  var num6 = Math.floor(Math.random() * 11);

/*----- switch -----*/

  switch(ejercicio)
  {
    case 'sumar':
      
      /*Con los siguientes document.write se muestra al usuario la cuenta a realizar y ademas se 
      le proporciona un cuadro de texto donde insertara su resultado para compararlo con la
      respuesta correcta. Tambien un boton para enviar el resultado*/

      document.write( num1 + " + " + num2 + " = " + "<input type='text' id='respuesta1'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      
      document.write( num3 + " + " + num4 + " = " + "<input type='text' id='respuesta2'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      
      document.write( num5 + " + " + num6 + " = " + "<input type='text' id='respuesta3'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      

        /*A continuacion se crea una variable con el resultado correcto que sale de la suma de los 
        dos numeros aleatorios*/

      var resultado1 = (parseInt(num1) + parseInt(num2));
      var resultado2 = (parseInt(num3) + parseInt(num4));
      var resultado3 = (parseInt(num5) + parseInt(num6));

      /*En la siguiente funcion se pretende crear variables con las respuestas proporcionadas por
      el usuario*/

      function recibir() {
        var respuesta1 = document.getElementById("respuesta1").value;
        var respuesta2 = document.getElementById("respuesta2").value;
        var respuesta3 = document.getElementById("respuesta3").value;

      }

      /*Los siguientes if pretenden comparar la respuesta del usuario con la respuesta correcta para
      decir al usuario si el resultado es correcto o no y le suma 10 puntos.*/

      if (resultado1 == respuesta1) {

        alert("Correcto! Ganas 10 puntos");
        var puntos1 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      if (resultado2 == respuesta2) {
        
        alert("Correcto! Ganas 10 puntos");
        var puntos2 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      if (resultado3 == respuesta3) {
        
        alert("Correcto! Ganas 10 puntos");
        var puntos3 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      /*A continuacion tenemos una nueva variable que se ocupa de sumar todos nuestros puntos y despues una 
      alerta que nos mostrara el total*/

      var totalpuntos = (puntos1 + puntos2 + puntos3)

      alert("Tienes un total de: " + totalpuntos)

      /*Esto siguiente se ocupa de recargar la pagina pulsando un boton*/

      function pulsa () {
      document.location.reload();}
      document.write('<br>');
      document.write('<button onclick="pulsa()">'+'Reinicia la página si quieres'+' </button>');

    break;
    
    case 'multiplicar':
      
      document.write( num1 + " x " + num2 + " = " + "<input type='text' id='respuesta1'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      
      document.write( num3 + " x " + num4 + " = " + "<input type='text' id='respuesta2'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      
      document.write( num5 + " x " + num6 + " = " + "<input type='text' id='respuesta3'>");
        document.write("<input type='button' name='Enviar datos' value='Enviar' onclick='recibir();'/><br><br>")
      
      var resultado1 = (parseInt(num1) * parseInt(num2));
      var resultado2 = (parseInt(num3) * parseInt(num4));
      var resultado3 = (parseInt(num5) * parseInt(num6));

      function recibir() {
        var respuesta1 = document.getElementById("respuesta1").value;
        var respuesta2 = document.getElementById("respuesta2").value;
        var respuesta3 = document.getElementById("respuesta3").value;

      }
      
      if (resultado1 == respuesta1) {

        alert("Correcto! Ganas 10 puntos");
        var puntos1 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      if (resultado2 == respuesta2) {
        
        alert("Correcto! Ganas 10 puntos");
        var puntos2 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      if (resultado3 == respuesta3) {
        
        alert("Correcto! Ganas 10 puntos");
        var puntos3 = parseInt(10);

      }else{alert("Mal! No ganas puntos")}

      var totalpuntos = (puntos1 + puntos2 + puntos3)

      alert("Tienes un total de: " + totalpuntos)

      function pulsa () {
      document.location.reload();}
      document.write('<br>');
      document.write('<button onclick="pulsa()">'+'Reinicia la página si quieres'+' </button>');

    break;

    /*Si en el prompt del principio ponemos un valor que no es ni sumar ni multiplicar, nos aparecera
    el siguiente mensaje en pantalla*/

    default:
      document.write("Sumar o multiplicar, no hay mas opciones!!");
    break;
  }