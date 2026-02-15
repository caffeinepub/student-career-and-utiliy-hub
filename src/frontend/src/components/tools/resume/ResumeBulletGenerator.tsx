import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';
import { toast } from 'sonner';

export default function ResumeBulletGenerator() {
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');
  const [impact, setImpact] = useState('');
  const [generatedBullet, setGeneratedBullet] = useState('');

  const generateBullet = () => {
    if (!action || !result) {
      toast.error('Please fill in at least action and result');
      return;
    }

    const bullet = impact
      ? `• ${action}, resulting in ${result}, which ${impact}`
      : `• ${action}, resulting in ${result}`;

    setGeneratedBullet(bullet);
  };

  const handleCopy = () => {
    copyToClipboard(generatedBullet);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="action">Action (What did you do?)</Label>
          <Input
            id="action"
            placeholder="e.g., Developed a web application"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="result">Result (What was achieved?)</Label>
          <Input
            id="result"
            placeholder="e.g., improved user engagement by 40%"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="impact">Impact (Optional - broader effect)</Label>
          <Input
            id="impact"
            placeholder="e.g., increased revenue by ₹5 lakhs"
            value={impact}
            onChange={(e) => setImpact(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={generateBullet} className="w-full">
        Generate Bullet Point
      </Button>

      {generatedBullet && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <Textarea
              value={generatedBullet}
              onChange={(e) => setGeneratedBullet(e.target.value)}
              rows={3}
              className="font-mono text-sm"
            />
            <Button onClick={handleCopy} variant="outline" className="w-full">
              <Copy className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
