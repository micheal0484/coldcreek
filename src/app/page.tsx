import { Navigation, HeroSection, ServicesSection, ProcessSection, Footer } from '@/components';

export default function Home() {
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
