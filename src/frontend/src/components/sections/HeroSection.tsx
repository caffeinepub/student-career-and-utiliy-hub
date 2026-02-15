import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 scroll-margin-nav">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Plan Your Career. Track Your Academics. Build Your Future.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Free tools & career roadmaps for students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('career-roadmap')}
                className="group font-medium shadow-soft hover:shadow-lg transition-all"
              >
                Start Career Roadmap
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('academic-tools')}
                className="font-medium shadow-soft hover:shadow-lg transition-all"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Use Academic Tools
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <img
              src="/assets/generated/hero-illustration.dim_900x600.png"
              alt="Student career growth and academic success illustration showing students achieving goals"
              className="relative w-full h-auto rounded-2xl shadow-soft"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
