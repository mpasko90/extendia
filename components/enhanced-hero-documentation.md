# Enhanced Hero Section 2025 - Dokumentacja

## Przegląd
Nowoczesna sekcja Hero dla Extendia zgodna z najnowszymi trendami webdesign 2025. Komponent zawiera wszystkie wymagane elementy: wideo background, animacje, elementy zaufania i pełną responsywność.

## Główne funkcje

### 🎥 Tło Video z Fallbackiem
- **Timelapse budowy** jako główne tło (hero-video.mp4)
- **Automatyczny fallback** na obraz WebP dla lepszej wydajności
- **Progresywne ładowanie** z płynnym przejściem
- **Obsługa wielu formatów** - MP4, WebM

### 🎨 Nowoczesny Design
- **Gradient tekstowy** dla głównego nagłówka
- **Glassmorphism** efekty na przyciskach i badge'ach
- **Shimmer animacje** na głównym przycisku CTA
- **BorderBeam efekt** na hover drugiego przycisku

### 📱 Pełna Responsywność
- **Mobile**: `text-3xl` nagłówek, `text-lg` podtytuł
- **Desktop**: `text-8xl` nagłówek, `text-xl` podtytuł
- **Adaptive layout**: kolumnowy na mobile, rzędowy na desktop
- **Touch-friendly**: min 44px wysokość przycisków

### ⭐ Elementy Zaufania
- **Houzz ocena**: 4.8★ badge z gwiazdką
- **Doświadczenie**: 15+ lat w business
- **Gwarancja**: terminowość projektów
- **Ikony**: Star, Award, Clock z Lucide React

### 🎯 Animacje i Interakcje
- **BlurFade**: stopniowe pojawianie się elementów
- **Hover effects**: scale, color transitions, shimmer
- **Focus states**: ring outlines dla accessibility
- **Video controls**: play/pause button

### 🔍 SEO i Dostępność
- **JSON-LD HowTo Schema** w head dla rich snippets
- **Alt texts** na wszystkich obrazach
- **Aria-labels** na interaktywnych elementach
- **WCAG AA compliance** - kontrast 4.5:1
- **Semantic HTML** - proper heading hierarchy

## Kolory Brandowe

```css
/* Primary CTA */
background: linear-gradient(135deg, #f59e0b 0%, #dd7100 100%);

/* Secondary CTA */
border-color: #2563eb;
hover: #2563eb/20;

/* Text Gradient */
from-orange-400 via-orange-500 to-orange-600
```

## Wymagane Zasoby

### Wideo
- `public/hero-video.mp4` - główne wideo timelapse
- `public/hero-video.webm` - fallback format WebM

### Obrazy
- `public/property-extension-south-west-london.jpg` - fallback image
- Format WebP zalecany dla lepszej wydajności

### Komponenty Magic UI
- `BlurFade` - animacje wejścia
- `ShimmerButton` - błyszczący przycisk CTA  
- `BorderBeam` - efekt świetlny na hover

### Komponenty Shadcn UI
- `Button` - przyciski akcji
- `Badge` - elementy zaufania

## Integracja

```tsx
import { EnhancedHeroSection } from "@/components/enhanced-hero-section";

export default function Home() {
  return (
    <main>
      <EnhancedHeroSection />
      {/* Reszta contentu */}
    </main>
  );
}
```

## Performance

- **Image optimization** z Next.js Image
- **Lazy loading** video z poster frame
- **Progressive enhancement** - fallback na obraz
- **Optimized animations** z GPU acceleration

## Accessibility Features

- ✅ **Keyboard navigation** - wszystkie elementy dostępne z klawiatury
- ✅ **Screen reader support** - aria-labels i semantic HTML
- ✅ **High contrast** - min 4.5:1 ratio
- ✅ **Touch targets** - min 44px dla mobile
- ✅ **Focus indicators** - wyraźne focus rings
- ✅ **Alternative text** - opisy dla wszystkich media

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+  
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11 - fallback bez video/modern effects

## Customization

Komponent można łatwo dostosować przez:
- Zmianę kolorów w `tailwind.config.ts`
- Modyfikację tekstów w komponencie
- Dostosowanie animacji (delay, duration)
- Wymianę zasobów graficznych/wideo
