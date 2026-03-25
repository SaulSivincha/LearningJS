let pedido = prompt("Ingrese su pedido")

function obtenerPedido() {
	return new Promise((resolve, reject) => {
  		setTimeout(() => {
   			const estadoPedido = false;
				if (estadoPedido) {
    				resolve(`Pedido: ${pedido}.`);
				} else {
    				reject("Error al obtener el pedido");
				}
		}, 5000);
	});
}

async function procesarPedido() {
 try {
  const pedido = await obtenerPedido();
		console.log(pedido);
	} catch (error) {
  console.error(error);
	}
}

procesarPedido();
