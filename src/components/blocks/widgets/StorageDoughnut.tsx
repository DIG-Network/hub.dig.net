import React, { useEffect, useRef } from 'react';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const StorageDoughnut: React.FC = () => {
  const chartRef = useRef<ChartJS<'doughnut'> | null>(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // Access the chart's context to create a gradient
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#ec4899');
      gradient.addColorStop(0.15, '#9333ea');
      gradient.addColorStop(0.3, '#9333ea');
      gradient.addColorStop(0.4, '#2563eb');
      gradient.addColorStop(0.7, '#7dd3fc');
      gradient.addColorStop(0.9, '#7dd3fc');

      // Update the data with the gradient for the specific section
      chart.data.datasets[0].backgroundColor = [gradient, '#71717a'];
      chart.update();
    }
  }, [chartRef]);

  const data = {
    datasets: [
      {
        label: 'My Donut Chart',
        data: [66, 34],
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
  };

  return (
    <div>
      <Doughnut ref={chartRef} data={data} options={options} width={400} height={400} />
    </div>
  );
};

export { StorageDoughnut };
