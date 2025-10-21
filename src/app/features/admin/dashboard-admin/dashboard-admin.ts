import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, LucideAngularModule, ChartModule],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})
export class DashboardAdmin {
  // Datos de los cuadros de estadísticas
  stats = [
    { title: 'Document', value: '146.000', icon: 'file-text', change: 17, type: 'positive' },
    { title: 'Contact', value: '1400', icon: 'contact', change: 17, type: 'positive' },
    { title: 'Email', value: '150.700', icon: 'mail', change: 17, type: 'positive' },
  ];

  // Gráfico de Recent Workflow
  recentWorkflowChart = new Chart({
    chart: {
      type: 'spline',
      backgroundColor: 'transparent',
    },
    title: { text: '' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { color: '#9ca3af' } },
      lineColor: 'transparent',
      tickWidth: 0,
      crosshair: false
    },
    yAxis: {
      title: { text: '' },
      labels: { enabled: false },
      gridLineWidth: 0,
    },
    series: [{
      name: 'Workflow',
      data: [1, 2, 1, 4, 3, 6, 4, 8, 7, 10, 9, 12],
      type: 'spline',
      color: '#3b82f6',
      marker: {
        symbol: 'circle',
        enabled: true,
        radius: 4,
        fillColor: 'white',
        lineColor: '#3b82f6',
        lineWidth: 2
      }
    }],
    credits: { enabled: false },
    legend: { enabled: false },
    tooltip: { enabled: false },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: false
          }
        }
      }]
    }
  });

  // Gráfico de Recent Marketing
  recentMarketingChart = new Chart({
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: { text: '' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { color: '#9ca3af' } },
      lineColor: 'transparent',
      tickWidth: 0,
      crosshair: false
    },
    yAxis: {
      title: { text: '' },
      labels: { enabled: false },
      gridLineWidth: 0
    },
    series: [{
      name: 'Marketing',
      data: [3, 4, 5, 2, 7, 6, 8, 9, 10, 11, 12],
      type: 'column',
      color: '#3b82f6'
    }],
    credits: { enabled: false },
    legend: { enabled: false },
    tooltip: { enabled: false },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: false
          }
        }
      }]
    }
  });

  // Datos para la tabla de documentos
  documents = [
    { name: 'Annual Report', file: 'PDF', category: 'Property', author: 'Diana Matthews', status: 'Send' },
    { name: 'Business Plan', file: 'WORD', category: 'Cryptocurrency', author: 'Philip James', status: 'Send' },
    { name: 'Marketing Tool', file: 'PDF', category: 'Content Creator', author: 'Amanda Ross', status: 'Pending' },
  ];

  // Datos para la sección de productos populares
  popularProducts = [
    { name: 'Gadget Converter', price: 250 },
    { name: 'Lens Camera', price: 50 },
    { name: 'Airpods', price: 100 },
    { name: 'Macbook', price: 999 },
  ];

  // Datos para la sección de chat
  chatMessages = [
    { name: 'Debra Young', message: 'How\'s my product?' },
    { name: 'Dorothy Collins', message: 'How was the meeting' },
    { name: 'Chris Jordan', message: 'How employee performance' },
    { name: 'Denise Murphy', message: 'How was the meeting' },
  ];
}
