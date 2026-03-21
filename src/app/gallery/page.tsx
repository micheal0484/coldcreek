import { Navigation, Footer, GalleryGrid, BeforeAfterSlider } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Cold Creek Land Services',
  description: 'View our completed land clearing and management projects. See before and after photos of our professional work.',
  keywords: 'land clearing gallery, before after photos, project portfolio, completed work',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-forest-green text-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              See the transformation we bring to properties throughout our service area. 
              From overgrown lots to pristine landscapes.
            </p>
          </div>
        </section>

        {/* Before/After Feature */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">
                Before & After Transformations
              </h2>
              <p className="text-lg text-stone-gray max-w-2xl mx-auto">
                Drag the slider to see the dramatic difference our services make
              </p>
            </div>
            <BeforeAfterSlider />
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-earth-tan-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">
                Project Portfolio
              </h2>
              <p className="text-lg text-stone-gray max-w-2xl mx-auto">
                Browse through our completed projects across various service categories
              </p>
            </div>
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}