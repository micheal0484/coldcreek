import { Navigation, HeroSection, ServicesSection, ProcessSection, Footer } from '@/components';
import { ComingSoon } from '@/components/ComingSoon';
import { COMING_SOON_MODE } from '@/lib/config';

export default function Home() {
  // TEMPORARY: remove this check (see src/lib/config.ts) once the owner approves the full site.
  if (COMING_SOON_MODE) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
