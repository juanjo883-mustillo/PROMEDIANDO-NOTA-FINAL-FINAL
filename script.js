function agregarNotas() {
  let nom = document.getElementById('nombre').value;
  let not1 = document.getElementById('nota1').value;
  let not2 = document.getElementById('nota2').value;
  let not3 = document.getElementById('nota3').value;

  // Validar el campo nombre
  if (nom === "") {
    Swal.fire("Ingrese el nombre del Estudiante", "El campo de nombre no puede ser vacio", "warning");
    return false;
  }

  // Validar las notas si estan vacias
  if (not1 === "" || not2 === "" || not3 === "") {
    Swal.fire("Ingese las notas por favor", "La notas no pueden ser vacios", "warning");
    return false;
  }

  // Validar las notas
  if (not1 > 10 || not2 > 10 || not3 > 10) {
    Swal.fire("la nota no puede ser más de 10")
    return false;
  }

  // Promediar la suma de las notas entre 3
  var prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

  // Variable obserbacion
  var obs = 0;

  // Promedio menor o igual a 7 entonces aprobado
  if (prom >= 7) {
    obs = "!Aprobado¡ &#x2714";
  } else {
    obs = "!Desaprobado¡ &#x274c";
  }
  const alumno = {
    nombre: nom,
    nota1: not1,
    nota2: not2,
    nota3: not3,
    promedio: prom.toFixed(1),
    observacion: obs,
  };

  let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
  alumnos.push(alumno);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));

  document.getElementById("btnBorrar").addEventListener("click", () => {
  
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esto borrará todos los alumnos guardados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear(); // Borra el localStorage
      document.getElementById("addtabla").innerHTML = ""; // Limpia la tabla
      Swal.fire("Borrado!", "El historial fue eliminado.", "success");
    }
  });
});



  const tabla = document.getElementById('addtabla');
  const fila = document.createElement('tr');
  fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;
  tabla.appendChild(fila);

  if (prom > 7) {
    document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#B3DEBA";
  } else {
    document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#FFCABA";
  }

  if (not1 > 7) {
    document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
  } else {
    document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
  }

  if (not2 > 7) {
    document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
  } else {
    document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
  }

  if (not3 > 7) {
    document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
  } else {
    document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
  }

  document.getElementById('nombre').value = '';
  document.getElementById('nota1').value = '';
  document.getElementById('nota2').value = '';
  document.getElementById('nota3').value = '';
}









