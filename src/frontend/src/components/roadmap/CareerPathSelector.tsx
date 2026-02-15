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
import { cn } from '@/lib/utils';
import { careerPaths, careerCategories } from './careerPaths';

interface CareerPathSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export default function CareerPathSelector({ value, onValueChange }: CareerPathSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPaths = useMemo(() => {
    if (!searchQuery) return careerPaths;
    
    const query = searchQuery.toLowerCase();
    return careerPaths.filter(
      path =>
        path.label.toLowerCase().includes(query) ||
        path.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
              placeholder="Search career paths..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === path.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {path.label}
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
