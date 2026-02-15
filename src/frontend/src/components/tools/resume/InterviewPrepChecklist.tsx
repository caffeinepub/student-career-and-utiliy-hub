import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';
import { toast } from 'sonner';

const checklistItems = [
  'Research the company and its products/services',
  'Review the job description thoroughly',
  'Prepare answers for common interview questions',
  'Practice STAR method for behavioral questions',
  'Prepare questions to ask the interviewer',
  'Review your resume and be ready to discuss each point',
  'Prepare examples of your projects and achievements',
  'Dress professionally and appropriately',
  'Test your internet connection (for virtual interviews)',
  'Keep a copy of your resume and notepad handy',
  'Arrive 10-15 minutes early (or login early for virtual)',
  'Practice good body language and eye contact',
  'Prepare salary expectations and negotiation points',
  'Follow up with a thank-you email after the interview'
];

export default function InterviewPrepChecklist() {
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
            Progress: {completedCount} / {checklistItems.length} completed
          </p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Checkbox
              id={`item-${index}`}
              checked={checkedItems[index] || false}
              onCheckedChange={() => toggleItem(index)}
            />
            <label
              htmlFor={`item-${index}`}
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
