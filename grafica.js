const datos = [
      { producto: "Camisetas", septiembre: 300000, octubre: 450000, noviembre: 200000, diciembre: 300000 },
      { producto: "Zapatos", septiembre: 200000, octubre: 300000, noviembre: 250000, diciembre: 400000 },
      { producto: "Conjuntos", septiembre: 200000, octubre: 300000, noviembre: 350000, diciembre: 400000 },
      { producto: "Gorras", septiembre: 150000, octubre: 180000, noviembre: 200000, diciembre: 330000 },
      { producto: "Bolsos", septiembre: 220000, octubre: 260000, noviembre: 110000, diciembre: 390000 }
    ];

    let chart;

    function formatearMoneda(valor) {
    return valor.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0
    });
  }

  function mostrarGrafica() {
    const mes = document.getElementById("energyType").value;
    const tipoGrafica = document.getElementById("chartType").value;

    const etiquetas = datos.map(d => d.producto);
    const valores = datos.map(d => d[mes]);

    if (chart) chart.destroy();

    const colores = [
      "#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e67e22"
    ];

    const opciones = {
      responsive: true,
      scales: tipoGrafica !== "pie" ? { y: { beginAtZero: true } } : {},
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: function(context) {
              return formatearMoneda(context.parsed);
            }
          }
        }
      }
    };

    const data = {
      labels: etiquetas,
      datasets: [{
        label: `Ganancias en ${mes.charAt(0).toUpperCase() + mes.slice(1)}`,
        data: valores,
        backgroundColor: tipoGrafica === "pie" ? colores : colores.map(c => `${c}88`),
        borderColor: colores,
        borderWidth: 1
      }]
    };

    chart = new Chart(document.getElementById("energyChart"), {
      type: tipoGrafica,
      data: data,
      options: opciones
    });

    document.getElementById("data-table").style.display = "none";
    document.getElementById("energyChart").style.display = "block";
  }

  function mostrarTabla() {
    const tbody = document.getElementById("tablaCuerpo");
    tbody.innerHTML = "";

    datos.forEach(d => {
      const fila = `<tr>
        <td>${d.producto}</td>
        <td>${formatearMoneda(d.septiembre)}</td>
        <td>${formatearMoneda(d.octubre)}</td>
        <td>${formatearMoneda(d.noviembre)}</td>
        <td>${formatearMoneda(d.diciembre)}</td>
      </tr>`;
      tbody.innerHTML += fila;
    });

    document.getElementById("data-table").style.display = "block";
    document.getElementById("energyChart").style.display = "none";
  }
