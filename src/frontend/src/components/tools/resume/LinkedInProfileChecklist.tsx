import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';
import { toast } from 'sonner';

const checklistItems = [
  'Professional profile photo (clear, high-quality headshot)',
  'Compelling headline (not just job title)',
  'Custom LinkedIn URL',
  'Detailed "About" section with your story',
  'Complete work experience with achievements',
  'Education details with relevant coursework',
  'Skills section with at least 10 relevant skills',
  'Get endorsements for your top skills',
  'Request recommendations from colleagues/professors',
  'Add relevant certifications and courses',
  'Include projects with descriptions and links',
  'Add volunteer experience if applicable',
  'Join relevant industry groups',
  'Follow companies you\'re interested in',
  'Share and engage with industry content regularly',
  'Turn on "Open to Work" if job hunting'
];

export default function LinkedInProfileChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCopy = () => {
    const checkedList = checklistItems
      .map((item, index) => `${checkedItems[index] ? '✓' : '☐'} ${item}`)
      .join('\n');
    copyToClipboard(checkedList);
    toast.success('Checklist copied to clipboard!');
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold">
            Profile Completion: {completedCount} / {checklistItems.length}
          </p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Checkbox
              id={`linkedin-${index}`}
              checked={checkedItems[index] || false}
              onCheckedChange={() => toggleItem(index)}
            />
            <label
              htmlFor={`linkedin-${index}`}
              className={`flex-1 cursor-pointer ${checkedItems[index] ? 'line-through text-muted-foreground' : ''}`}
            >
              {item}
            </label>
          </div>
        ))}
      </div>

      <Button onClick={handleCopy} variant="outline" className="w-full">
        <Copy className="h-4 w-4 mr-2" />
        Copy Checklist
      </Button>
    </div>
  );
}
