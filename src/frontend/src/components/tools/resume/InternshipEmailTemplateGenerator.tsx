import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';
import { toast } from 'sonner';

export default function InternshipEmailTemplateGenerator() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const generateEmail = () => {
    if (!name || !company || !role) {
      toast.error('Please fill in all required fields');
      return;
    }

    const email = `Subject: Application for ${role} Internship at ${company}

Dear Hiring Manager,

I am ${name}, and I am writing to express my interest in the ${role} internship position at ${company}. I am currently pursuing my degree and am eager to apply my skills in a real-world environment.

${skills ? `I have experience with ${skills}, which I believe aligns well with the requirements of this role.` : ''}

I am passionate about learning and contributing to your team. I would be grateful for the opportunity to discuss how I can add value to ${company}.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
${name}`;

    setGeneratedEmail(email);
  };

  const handleCopy = () => {
    copyToClipboard(generatedEmail);
    toast.success('Email copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            placeholder="e.g., Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            placeholder="e.g., Google"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role *</Label>
          <Input
            id="role"
            placeholder="e.g., Software Development"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Your Skills (Optional)</Label>
          <Input
            id="skills"
            placeholder="e.g., Python, React, Machine Learning"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={generateEmail} className="w-full">
        Generate Email
      </Button>

      {generatedEmail && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <Textarea
              value={generatedEmail}
              onChange={(e) => setGeneratedEmail(e.target.value)}
              rows={12}
              className="font-mono text-sm"
            />
            <Button onClick={handleCopy} variant="outline" className="w-full">
              <Copy className="h-4 w-4 mr-2" />
              Copy Email
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
