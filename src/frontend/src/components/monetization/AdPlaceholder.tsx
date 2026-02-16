import HighPerformanceBanner728x90 from './HighPerformanceBanner728x90';

interface AdPlaceholderProps {
  location: 'after-hero' | 'between-sections' | 'footer';
  showBanner?: boolean;
}

export default function AdPlaceholder({ location, showBanner = false }: AdPlaceholderProps) {
  const heights = {
    'after-hero': showBanner ? 'min-h-[110px]' : 'h-24',
    'between-sections': 'h-20',
    'footer': 'h-16'
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div
        className={`${heights[location]} rounded-xl border-2 ${
          showBanner ? 'border-border' : 'border-dashed border-muted-foreground/20'
        } ${
          showBanner ? 'bg-card' : 'bg-muted/30'
        } flex items-center justify-center overflow-hidden ${
          showBanner ? 'max-w-full' : ''
        }`}
      >
        {showBanner ? (
          <div className="w-full max-w-[728px] mx-auto">
            <HighPerformanceBanner728x90 />
          </div>
        ) : (
          <p className="text-xs text-muted-foreground/50 font-medium">Ad Space</p>
        )}
      </div>
    </div>
  );
}
