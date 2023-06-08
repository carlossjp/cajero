var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "9876" }
  ];
  
  function iniciarSesion() {
    var seleccion = document.getElementById("cuentas").value;
    var password = document.getElementById("password").value;
    var cuenta = cuentas[seleccion];
  
    if (cuenta.password === password) {
      mostrarOpciones(cuenta);
    } else {
      alert("Contraseña incorrecta. Por favor, intenta nuevamente.");
    }
  }
  
  function mostrarOpciones(cuenta) {
    var saldo = cuenta.saldo;
    var opcion = parseInt(prompt(
      "Selecciona una opción:\n" +
      "1. Consultar saldo\n" +
      "2. Ingresar monto\n" +
      "3. Retirar monto"
    ));
  
    switch (opcion) {
      case 1:
        alert("Saldo actual: $" + saldo);
        break;
      case 2:
        var montoIngresar = parseFloat(prompt("Ingrese el monto a ingresar:"));
        if (isNaN(montoIngresar) || montoIngresar <= 0) {
          alert("Monto inválido.");
        } else {
          var nuevoSaldoIngresar = saldo + montoIngresar;
          if (nuevoSaldoIngresar > 990) {
            alert("El monto ingresado excede el límite de $990.");
        } else {
            cuenta.saldo = nuevoSaldoIngresar;
            alert("Monto ingresado: $" + montoIngresar + "\nNuevo saldo: $" + nuevoSaldoIngresar);
        }
        }
        break;
      case 3:
        var montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (isNaN(montoRetirar) || montoRetirar <= 0) {
          alert("Monto inválido.");
        } else {
          var nuevoSaldoRetirar = saldo - montoRetirar;
          if (nuevoSaldoRetirar < 10) {
            alert("El monto a retirar excede el saldo disponible.");
          } else {
            cuenta.saldo = nuevoSaldoRetirar;
            alert("Monto retirado: $" + montoRetirar + "\nNuevo saldo: $" + nuevoSaldoRetirar);
          }
        }
        break;
      default:
        alert("Opción inválida.");
        break;
    }
  }