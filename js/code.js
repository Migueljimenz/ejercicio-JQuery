let boton = $("#enviar");

$(boton).click(function () {
  nom = $("#nombre").val();
  tra = $("#trabajo").val();
  fec = $("#fecha").val();

  let datos = {
    nombre: nom,
    trabajo: tra,
    fecha: fec,
  };
  if (nom == "" || tra == "" || fec == "") {
    alert("todos los campos son abligatorios");
    return false;
  }

  if (nom.length < 3) {
    alert('el nombre es demasiado corto');
    return false;
  } else if (tra.length < 3) {
    alert('nombre de trabajo no valido');
    return false; 
  }
  
  $.ajax({
    method: "POST",
    url: "https://reqres.in/api/users",
    data: datos,
    success: function (data) {
      $("#infoName").html(datos.nombre);
      $("#infoTrabajo").html(datos.trabajo);
      $("#infoFecha").html(datos.fecha);
      $("#infoId").html(data.id);
      $("#createdAt").html(data.createdAt);
      men = document.getElementById("mensaje").innerHTML =
      "registro Almacenado";
    setTimeout(() => {
      $("#mensaje").fadeOut(4000);
    });
      del = document.querySelector("form").reset();
    },
    
  });
});
