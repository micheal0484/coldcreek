import { Phone, Mail, Facebook } from 'lucide-react';

// TEMPORARY: rendered in place of the real pages while COMING_SOON_MODE is on
// (see src/lib/config.ts). Safe to delete once that flag is removed.
export function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-forest-green-dark text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Cold Creek Land Services
      </h1>
      <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10">
        Our new website is on its way. In the meantime, reach out directly for a
        free quote on your land clearing, dirt work & excavation, or property management project.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-lg">
        <a
          href="tel:+14796756403"
          className="flex items-center gap-2 hover:text-safety-orange transition-colors"
        >
          <Phone className="h-5 w-5" />
          (479) 675-6403
        </a>
        <a
          href="mailto:coltonlee@coldcreeklandservices.com"
          className="flex items-center gap-2 hover:text-safety-orange transition-colors break-all"
        >
          <Mail className="h-5 w-5" />
          coltonlee@coldcreeklandservices.com
        </a>
      </div>
      <a
        href="https://www.facebook.com/p/Cold-Creek-Land-Services-61579381273372/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-2 text-white/80 hover:text-safety-orange transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
        Follow us on Facebook
      </a>
      <p className="mt-12 text-sm text-white/50">
        Serving Ozark, AR &amp; Franklin County
      </p>
    </div>
  );
}
