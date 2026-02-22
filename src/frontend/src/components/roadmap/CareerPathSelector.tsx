import { useState, useMemo } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { careerPaths, careerCategories, getCategoryCounts } from './careerPaths';

interface CareerPathSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export default function CareerPathSelector({ value, onValueChange }: CareerPathSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  const categoryCounts = useMemo(() => getCategoryCounts(), []);
  const totalCareers = careerPaths.length;

  const filteredPaths = useMemo(() => {
    let paths = careerPaths;

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      paths = paths.filter(path => path.category === selectedCategory);
    }

    // Filter by search query (name, category, keywords)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      paths = paths.filter(
        path =>
          path.label.toLowerCase().includes(query) ||
          path.category.toLowerCase().includes(query) ||
          (path.keywords && path.keywords.some(keyword => keyword.includes(query)))
      );
    }

    return paths;
  }, [searchQuery, selectedCategory]);

  const groupedPaths = useMemo(() => {
    const groups: Record<string, typeof careerPaths> = {};
    filteredPaths.forEach(path => {
      if (!groups[path.category]) {
        groups[path.category] = [];
      }
      groups[path.category].push(path);
    });
    return groups;
  }, [filteredPaths]);

  const selectedPath = careerPaths.find(path => path.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedPath ? selectedPath.label : 'Choose your career goal'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command shouldFilter={false}>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              placeholder="Search by career name, skills, or category..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="border-b p-3">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === 'All Categories' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory('All Categories')}
              >
                All Categories ({totalCareers})
              </Badge>
              {careerCategories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCounts[category] || 0})
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="px-3 py-2 text-sm text-muted-foreground border-b">
            Showing {filteredPaths.length} of {totalCareers} available career paths
          </div>

          <CommandList>
            <CommandEmpty>No career path found.</CommandEmpty>
            {careerCategories.map(category => {
              const paths = groupedPaths[category];
              if (!paths || paths.length === 0) return null;

              return (
                <CommandGroup key={category} heading={category}>
                  {paths.map(path => (
                    <CommandItem
                      key={path.value}
                      value={path.value}
                      onSelect={(currentValue) => {
                        onValueChange(currentValue === value ? '' : currentValue);
                        setOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex flex-col items-start gap-1 py-3"
                    >
                      <div className="flex items-center w-full">
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4 flex-shrink-0',
                            value === path.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{path.label}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">{path.category}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs font-medium text-primary">{path.salaryRange}</span>
                          </div>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
