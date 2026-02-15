import { Shield, Lock, Globe, Cookie } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Your privacy matters to us. Learn how Student Hub protects your data.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: February 15, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 mt-12">
          {/* No Login Required */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">No Login Required</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Student Hub does not require you to create an account or log in to use any of our tools and features. 
                You can access all calculators, generators, and resources without providing any personal information.
              </p>
            </div>
          </section>

          {/* Local Calculations */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Local Browser Calculations</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                All calculations and data processing on Student Hub are performed locally in your web browser. 
                This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Your SGPA, CGPA, and attendance data never leaves your device</li>
                <li>Career roadmap inputs and generated content are processed client-side</li>
                <li>Resume bullet points and email templates are created in your browser</li>
                <li>All calculator inputs (EMI, BMI, Age, Unit Converter) remain on your device</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We do not collect, store, or transmit any of your personal data or calculation inputs to our servers.
              </p>
            </div>
          </section>

          {/* No Personal Data Collection */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">No Personal Data Collection</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Student Hub does not collect, store, or process any personally identifiable information (PII). 
                We do not track:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Names, email addresses, or contact information</li>
                <li>Academic records or grades</li>
                <li>Career preferences or personal goals</li>
                <li>Financial information or loan details</li>
                <li>Health data or BMI calculations</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Advertising */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Cookie className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Third-Party Advertising</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Student Hub displays advertisements through Google AdSense to support the free availability of our tools. 
                Please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Google AdSense may use cookies and similar technologies to serve personalized ads</li>
                <li>These third-party services may collect information about your browsing activity</li>
                <li>Ad networks may use identifiers to track ad performance and user interests</li>
                <li>You can manage your ad preferences through your browser settings or Google's Ad Settings</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                For more information about how Google uses data when you use our site, please visit{' '}
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google's Privacy & Terms
                </a>.
              </p>
            </div>
          </section>

          {/* Browser Storage */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Browser Storage</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Some features may use your browser's local storage to save your preferences (such as theme settings) 
                or temporarily cache data for a better user experience. This data remains on your device and is not 
                transmitted to our servers.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Changes to This Privacy Policy</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="pl-9 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please feel free to reach out to us 
                through our{' '}
                <a 
                  href="https://www.linkedin.com/in/dhiraj-kurhade-315a483a9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn profile
                </a>.
              </p>
            </div>
          </section>
        </div>

        {/* Summary Box */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="font-heading text-xl font-bold mb-3">In Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Student Hub is committed to protecting your privacy. We don't require login, don't collect personal data, 
            and perform all calculations locally in your browser. The only third-party service we use is Google AdSense 
            for displaying advertisements, which may use cookies as described above.
          </p>
        </div>
      </div>
    </main>
  );
}
