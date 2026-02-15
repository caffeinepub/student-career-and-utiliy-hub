import { Heart } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import { Link } from '@tanstack/react-router';
import AdPlaceholder from '../monetization/AdPlaceholder';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <AdPlaceholder location="footer" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Student Hub is a free platform designed to help Indian engineering and college students
              plan their careers, track academics, and access useful tools for daily life.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Have questions or suggestions? We'd love to hear from you. Reach out to us through our social channels or
              email us with your feedback.
            </p>
            <a
              href="https://www.linkedin.com/in/dhiraj-kurhade-315a483a9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <SiLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Privacy Policy</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We respect your privacy. This website does not collect personal data or require login. All calculations
              are performed locally in your browser.
            </p>
            <Link
              to="/privacy-policy"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors hover:underline"
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Student Hub. Built with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
