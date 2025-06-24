// Przykład integracji Enhanced Hero Section w app/page.tsx

import { EnhancedHeroSection } from "@/components/enhanced-hero-section";
// ... inne importy

export default function Home() {
  return (
    <main>
      {/* Nowa sekcja Hero 2025 */}
      <EnhancedHeroSection />
      
      {/* Reszta strony... */}
      {/* <HeroSection /> - poprzednia wersja do usunięcia */}
      {/* <TrustSignals /> */}
      {/* ... inne sekcje */}
    </main>
  );
}
