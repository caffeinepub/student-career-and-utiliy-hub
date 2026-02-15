interface AdPlaceholderProps {
  location: 'after-hero' | 'between-sections' | 'footer';
}

export default function AdPlaceholder({ location }: AdPlaceholderProps) {
  const heights = {
    'after-hero': 'h-24',
    'between-sections': 'h-20',
    'footer': 'h-16'
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div
        className={`${heights[location]} rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/30 flex items-center justify-center`}
      >
        <p className="text-xs text-muted-foreground/50 font-medium">Ad Space</p>
      </div>
    </div>
  );
}
