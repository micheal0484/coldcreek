import { Navigation, Footer, ContactForm, ContactInfo } from '@/components';
import { ComingSoon } from '@/components/ComingSoon';
import { COMING_SOON_MODE } from '@/lib/config';
import { defaultOgImage } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Cold Creek Land Services - Get Your Free Quote',
  description: 'Contact Cold Creek Land Services for professional land clearing and management. Get your free quote today. Licensed and insured.',
  keywords: 'contact land services, free quote, land clearing estimate, cold creek contact',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact Us | Cold Creek Land Services',
    description: 'Contact Cold Creek Land Services for professional land clearing and management. Get your free quote today.',
    url: '/contact/',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Cold Creek Land Services',
    description: 'Get your free quote today. Licensed and insured.',
    images: [defaultOgImage.url],
  },
};

export default function ContactPage() {
  // TEMPORARY: remove this check (see src/lib/config.ts) once the owner approves the full site.
  if (COMING_SOON_MODE) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-forest-green to-forest-green-light text-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your property? Contact us today for a free, 
              no-obligation estimate on your land management project.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <ContactInfo />
                
                {/* Service Areas Map Placeholder */}
                <div className="bg-earth-tan-light rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-forest-green mb-4">
                    Service Areas
                  </h3>
                  <p className="text-stone-gray mb-4">
                    We proudly serve the following areas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p className="font-medium text-forest-green">County:</p>
                      <ul className="text-stone-gray space-y-1">
                        <li>• Franklin County, AR</li>
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-forest-green">City:</p>
                      <ul className="text-stone-gray space-y-1">
                        <li>• Ozark, AR</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-stone-gray mt-4">
                    * Don&apos;t see your area? Contact us to confirm availability.
                  </p>
                </div>

                {/* Emergency Services */}
                <div className="bg-safety-orange rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Emergency Services
                  </h3>
                  <p className="mb-4">
                    Storm damage? Fallen trees blocking access? 
                    We offer emergency cleanup services.
                  </p>
                  <a
                    href="tel:+14796756403"
                    className="inline-flex items-center justify-center bg-white text-safety-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-earth-tan-light">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-forest-green mb-2">
                  How quickly can you provide a quote?
                </h3>
                <p className="text-stone-gray">
                  We typically provide free estimates within 24 hours of your request. 
                  For urgent projects, we can often provide same-day quotes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-forest-green mb-2">
                  Are you licensed and insured?
                </h3>
                <p className="text-stone-gray">
                  Yes, we are fully licensed, insured, and bonded. We carry comprehensive 
                  liability insurance and worker&apos;s compensation for your peace of mind.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-forest-green mb-2">
                  What&apos;s included in your services?
                </h3>
                <p className="text-stone-gray">
                  Our services include all necessary equipment, labor, and cleanup. 
                  We handle permits when required and ensure all debris is properly disposed of.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-forest-green mb-2">
                  Do you work year-round?
                </h3>
                <p className="text-stone-gray">
                  Yes, we operate year-round with services adapted to seasonal needs. 
                  This includes snow removal services during winter months.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}