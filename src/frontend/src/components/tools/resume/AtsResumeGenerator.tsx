import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy, Download, ChevronLeft, ChevronRight, FileText, Info } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';
import { toast } from 'sonner';

interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
}

export default function AtsResumeGenerator() {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState<ContactInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: ''
  });
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [keywords, setKeywords] = useState('');

  const totalSteps = 8;

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now().toString(), title: '', company: '', duration: '', description: '' }]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now().toString(), degree: '', institution: '', year: '', cgpa: '' }]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now().toString(), name: '', description: '', technologies: '' }]);
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj));
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };

  const generateResumeText = (): string => {
    let resume = '';

    // Contact Information
    resume += `${contact.fullName.toUpperCase()}\n`;
    resume += `${contact.email} | ${contact.phone} | ${contact.location}\n`;
    if (contact.linkedin) resume += `LinkedIn: ${contact.linkedin}\n`;
    if (contact.github) resume += `GitHub: ${contact.github}\n`;
    resume += '\n';

    // Professional Summary
    if (summary) {
      resume += 'PROFESSIONAL SUMMARY\n';
      resume += `${summary}\n\n`;
    }

    // Skills
    if (skills) {
      resume += 'SKILLS\n';
      resume += `${skills}\n\n`;
    }

    // Experience
    if (experiences.length > 0) {
      resume += 'EXPERIENCE\n';
      experiences.forEach(exp => {
        if (exp.title && exp.company) {
          resume += `${exp.title} | ${exp.company} | ${exp.duration}\n`;
          resume += `${exp.description}\n\n`;
        }
      });
    }

    // Education
    if (education.length > 0) {
      resume += 'EDUCATION\n';
      education.forEach(edu => {
        if (edu.degree && edu.institution) {
          resume += `${edu.degree} | ${edu.institution} | ${edu.year}`;
          if (edu.cgpa) resume += ` | CGPA: ${edu.cgpa}`;
          resume += '\n';
        }
      });
      resume += '\n';
    }

    // Certifications
    if (certifications) {
      resume += 'CERTIFICATIONS\n';
      resume += `${certifications}\n\n`;
    }

    // Projects
    if (projects.length > 0) {
      resume += 'PROJECTS\n';
      projects.forEach(proj => {
        if (proj.name) {
          resume += `${proj.name}\n`;
          if (proj.description) resume += `${proj.description}\n`;
          if (proj.technologies) resume += `Technologies: ${proj.technologies}\n`;
          resume += '\n';
        }
      });
    }

    // Keywords (for ATS optimization)
    if (keywords) {
      resume += 'RELEVANT KEYWORDS\n';
      resume += `${keywords}\n`;
    }

    return resume.trim();
  };

  const handleCopy = () => {
    const resumeText = generateResumeText();
    copyToClipboard(resumeText);
    toast.success('Resume copied to clipboard!');
  };

  const handleDownload = () => {
    const resumeText = generateResumeText();
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${contact.fullName.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Resume downloaded!');
  };

  const canGoNext = () => {
    if (step === 1) return contact.fullName && contact.email && contact.phone;
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={contact.fullName}
                onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                placeholder="+91 9876543210"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Mumbai, India"
                value={contact.location}
                onChange={(e) => setContact({ ...contact, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                placeholder="linkedin.com/in/johndoe"
                value={contact.linkedin}
                onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <Input
                id="github"
                placeholder="github.com/johndoe"
                value={contact.github}
                onChange={(e) => setContact({ ...contact, github: e.target.value })}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Write a brief 2-3 sentence summary highlighting your key strengths and career goals. Keep it concise and relevant to the job you're applying for.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                placeholder="Motivated Computer Science student with strong programming skills in Python and Java. Experienced in building web applications and passionate about solving real-world problems through technology."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={5}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                List your technical and soft skills separated by commas or bullet points. Include programming languages, tools, frameworks, and relevant soft skills.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                id="skills"
                placeholder="Programming: Python, Java, JavaScript, C++&#10;Web Development: React, Node.js, HTML/CSS&#10;Tools: Git, VS Code, MySQL&#10;Soft Skills: Team Collaboration, Problem Solving, Communication"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={8}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Add your work experience, internships, or relevant projects. Use action verbs and quantify achievements where possible.
              </AlertDescription>
            </Alert>
            {experiences.map((exp, index) => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => removeExperience(exp.id)}>Remove</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Job Title (e.g., Software Development Intern)"
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                  />
                  <Input
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  />
                  <Input
                    placeholder="Duration (e.g., June 2023 - August 2023)"
                    value={exp.duration}
                    onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                  />
                  <Textarea
                    placeholder="Describe your responsibilities and achievements. Use bullet points starting with action verbs."
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    rows={4}
                  />
                </CardContent>
              </Card>
            ))}
            <Button onClick={addExperience} variant="outline" className="w-full">
              + Add Experience
            </Button>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Add your educational qualifications starting with the most recent. Include your degree, institution, year, and CGPA/percentage.
              </AlertDescription>
            </Alert>
            {education.map((edu, index) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Education {index + 1}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)}>Remove</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Degree (e.g., B.Tech in Computer Science)"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  />
                  <Input
                    placeholder="Institution Name"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  />
                  <Input
                    placeholder="Year (e.g., 2020-2024)"
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                  />
                  <Input
                    placeholder="CGPA/Percentage (e.g., 8.5/10)"
                    value={edu.cgpa}
                    onChange={(e) => updateEducation(edu.id, 'cgpa', e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}
            <Button onClick={addEducation} variant="outline" className="w-full">
              + Add Education
            </Button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                List any relevant certifications, courses, or training programs you've completed. Include the issuing organization and date if applicable.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Label htmlFor="certifications">Certifications</Label>
              <Textarea
                id="certifications"
                placeholder="• AWS Certified Cloud Practitioner - Amazon Web Services (2023)&#10;• Python for Data Science - Coursera (2023)&#10;• Full Stack Web Development - Udemy (2022)"
                value={certifications}
                onChange={(e) => setCertifications(e.target.value)}
                rows={6}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Add your personal or academic projects. Describe what you built, the technologies used, and the impact or results.
              </AlertDescription>
            </Alert>
            {projects.map((proj, index) => (
              <Card key={proj.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Project {index + 1}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => removeProject(proj.id)}>Remove</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Project Name"
                    value={proj.name}
                    onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                  />
                  <Textarea
                    placeholder="Project Description (What did you build? What problem did it solve?)"
                    value={proj.description}
                    onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                    rows={3}
                  />
                  <Input
                    placeholder="Technologies Used (e.g., React, Node.js, MongoDB)"
                    value={proj.technologies}
                    onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}
            <Button onClick={addProject} variant="outline" className="w-full">
              + Add Project
            </Button>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Add relevant keywords from the job description to help your resume pass ATS (Applicant Tracking Systems). Include technical skills, tools, and industry terms.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Label htmlFor="keywords">ATS Keywords (Optional)</Label>
              <Textarea
                id="keywords"
                placeholder="Machine Learning, Data Analysis, Python, SQL, Agile, Scrum, REST APIs, Cloud Computing, AWS, Docker, Kubernetes"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                rows={4}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    'Contact Information',
    'Professional Summary',
    'Skills',
    'Experience',
    'Education',
    'Certifications',
    'Projects',
    'Keywords & Preview'
  ];

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Step {step} of {totalSteps}</span>
          <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle>{stepTitles[step - 1]}</CardTitle>
          <CardDescription>
            {step === 1 && 'Enter your basic contact details'}
            {step === 2 && 'Write a compelling professional summary'}
            {step === 3 && 'List your technical and soft skills'}
            {step === 4 && 'Add your work experience and internships'}
            {step === 5 && 'Add your educational qualifications'}
            {step === 6 && 'List your certifications and courses'}
            {step === 7 && 'Showcase your projects'}
            {step === 8 && 'Add keywords and preview your resume'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStep()}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        {step < totalSteps ? (
          <Button
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            disabled={!canGoNext()}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Badge variant="secondary" className="px-4 py-2">
            <FileText className="h-4 w-4 mr-2" />
            Preview Ready
          </Badge>
        )}
      </div>

      {/* Preview Section (visible on last step) */}
      {step === totalSteps && (
        <>
          <Separator />
          <Card className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>ATS-Friendly Resume Preview</CardTitle>
                <div className="flex gap-2">
                  <Button onClick={handleCopy} variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={handleDownload} size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download TXT
                  </Button>
                </div>
              </div>
              <CardDescription>
                This plain text format is optimized for Applicant Tracking Systems (ATS)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background rounded-lg p-6 border">
                <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed">
                  {generateResumeText()}
                </pre>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
