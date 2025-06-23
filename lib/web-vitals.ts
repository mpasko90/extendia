import { type CLSMetric, type FCPMetric, type FIDMetric, type LCPMetric, type TTFBMetric } from 'web-vitals';

interface WebVitalMetric {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
}

export function reportWebVitals(metric: CLSMetric | FCPMetric | FIDMetric | LCPMetric | TTFBMetric): void {
  // Send metrics to your analytics service
  console.log(metric);

  // Example implementation for Google Analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
  
  // Example implementation for custom endpoint
  fetch('/api/vitals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(metric),
  }).catch((err) => {
    console.error('Failed to send web vitals:', err);
  });
}

declare global {
  interface Window {
    gtag: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}
