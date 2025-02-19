const divGrafico = document.getElementById('grafico');
const canvas = document.createElement('canvas');
canvas.id = 'miGrafico';
divGrafico.appendChild(canvas);

const ctx = document.getElementById('miGrafico').getContext('2d');
new Chart(ctx, {
  type: 'bar', // Tipo de gráfico: barras
  data: {
    labels: ['PhP', 'CSS', 'HTML', 'Python', 'JavaScript'],
    datasets: [{
      label: 'Nivel de habilidad',
      data: [10, 8, 10, 5, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',  // PhP
        'rgba(54, 162, 235, 0.6)',  // CSS
        'rgba(255, 206, 86, 0.6)',  // HTML
        'rgba(75, 192, 192, 0.6)',  // Python
        'rgba(153, 102, 255, 0.6)'  // JavaScript
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 10 // Escala máxima para que se aprecien bien los niveles
      }
    }
  }
});