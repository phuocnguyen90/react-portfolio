import React from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  BookOpen, 
  Award, 
  Briefcase, 
  Code, 
  Scale, 
  GraduationCap 
} from 'lucide-react';

// --- Types ---
interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Project {
  title: string;
  tech: string;
  details: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
  note?: string;
}

// --- Data ---
const CONTACT_INFO = {
  name: "Your Name",
  title: "AI Governance Specialist & Legal Technologist",
  location: "Vietnam",
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/yourprofile", // Replace with real link
  github: "github.com/yourprofile"         // Replace with real link
};

const SUMMARY = "Legal and technology expert bridging the gap between regulatory frameworks (GDPR, EU AI Act) and AI implementation. Proven track record in NLP, including designing zero-cost RAG pipelines and Agentic AI workflows. Combines a Master of Laws (Distinction) and extensive technical training (MITx, DeepLearning.ai) to deliver 'Legal-by-Design' AI solutions.";

const SKILLS = {
  ai_nlp: [
    "LLMs & Transformers", 
    "RAG Pipelines", 
    "Agentic AI Design", 
    "Prompt Engineering",
    "LangChain / Hugging Face"
  ],
  ml_foundations: [
    "Regression & Decision Trees",
    "Deep Learning (CNN/RNN/LSTM)",
    "ARIMA & Time Series",
    "Hyper-parameter Tuning"
  ],
  legal: [
    "GDPR & EU AI Act",
    "Vietnam Decree 13",
    "Privacy Impact Assessments",
    "Legal-by-Design Architecture"
  ],
  tools: [
    "Python & Jupyter",
    "AWS (EC2, Lambda)",
    "SQL / Vector DBs",
    "Git / CI/CD"
  ]
};

const EXPERIENCE: Experience[] = [
  {
    role: "Legal Consultant",
    company: "MobiFone Area 7",
    period: "2024 – Present",
    description: [
      "Implemented data privacy compliance measures (GDPR/Vietnam regulations) for large-scale telecommunications systems.",
      "Collaborated with engineering teams to embed compliance checkpoints directly into operational workflows, ensuring a 'Legal-by-Design' approach.",
      "Conducted gap analyses between existing data workflows and regulatory standards."
    ]
  },
  {
    role: "Legal Research Assistant (Freelance)",
    company: "Australian Law Reform Project",
    period: "2023",
    description: [
      "Conducted data-driven legal research on case law regarding systemic child abuse.",
      "Identified judicial patterns and legislative gaps to inform recommendations for legislative improvements."
    ]
  },
  {
    role: "PhD Researcher (AI Ethics)",
    company: "Victoria University of Wellington",
    period: "2019 – 2020",
    description: [
      "Researched the intersection of 'Code as Law' (Lessig) and traditional jurisprudence.",
      "Proposed ethical frameworks for algorithmic accountability and data privacy."
    ]
  },
  {
    role: "HR Manager",
    company: "AMA Language Center",
    period: "2022",
    description: [
      "Managed core HR functions and streamlined employee onboarding workflows.",
      "Implemented quality assurance processes based on student feedback data."
    ]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Vietnamese Legal Q&A System (RAG Pipeline)",
    tech: "AWS Free Tier, LangChain, Vector DB, OpenAI API",
    details: [
      "Objective: Democratize access to legal information for microbusinesses using a cost-efficient AI solution.",
      "Designed a Retrieval-Augmented Generation (RAG) pipeline to ingest Vietnamese legal texts and provide accurate, context-aware answers.",
      "Successfully demonstrated scalability and high-accuracy retrieval without incurring significant infrastructure costs."
    ]
  }
];

const CERTIFICATES = [
  "MITx MicroMasters® in Statistics and Data Science",
  "Google Advanced Data Analytics Certificate",
  "DeepLearning.ai: Natural Language Processing Specialization",
  "DeepLearning.ai: Machine Learning Specialization",
  "DeepLearning.ai: MLOps Specialization",
  "FinTech Security & Regulation (HKUST)"
];

const EDUCATION: Education[] = [
  {
    degree: "Executive MBA",
    school: "Quantic School of Business",
    year: "Exp. Jan 2026"
  },
  {
    degree: "Master of Laws (LLM) - Distinction",
    school: "Auckland University of Technology", // Note: You listed AUT in the updated list, but VUW in the first prompt. Verify which university awarded the LLM.
    year: "2019",
    note: "Vice Chancellor Doctoral Scholarship"
  },
  {
    degree: "Bachelor of Laws",
    school: "Ho Chi Minh City University of Laws",
    year: "2013"
  }
];

const PUBLICATIONS = [
  "Understanding Differential Privacy in a Regulatory Context (2024) – Conf. on Personal Data Protection (Vietnam/Thailand)",
  "Virtual Currency Could be Deemed as Asset (2020) – Journal of Legislative Studies",
  "The Monkey Selfie, AI, and Authorship (2019) – Public Interest Law Journal of NZ"
];

// --- Components ---

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-200 pb-2">
    <Icon size={20} className="text-slate-700" />
    <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800">{title}</h3>
  </div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
    {skill}
  </span>
);

export default function ModernCV() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:p-0 print:bg-white">
      <div className="max-w-5xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-none overflow-hidden rounded-lg print:rounded-none">
        
        {/* Header */}
        <header className="bg-slate-900 text-white p-8 print:bg-slate-900 print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{CONTACT_INFO.name}</h1>
              <p className="text-xl text-slate-300 font-light">{CONTACT_INFO.title}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} /> <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} /> <span>{CONTACT_INFO.linkedin}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row print:flex-row">
          
          {/* LEFT COLUMN (Sidebar) */}
          <aside className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-slate-100 print:bg-white print:border-r">
            
            {/* Skills */}
            <div className="mb-8">
              <SectionTitle icon={Code} title="Technical Skills" />
              
              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-700 mb-2">AI & NLP</h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.ai_nlp.map(s => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-700 mb-2">ML Foundations</h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.ml_foundations.map(s => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-700 mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map(s => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>
            </div>

            {/* Legal Skills */}
            <div className="mb-8">
              <SectionTitle icon={Scale} title="Legal Expertise" />
              <div className="flex flex-wrap gap-2">
                {SKILLS.legal.map(s => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <SectionTitle icon={GraduationCap} title="Education" />
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-slate-800 text-sm">{edu.degree}</h4>
                    <p className="text-slate-600 text-xs">{edu.school}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-slate-400 text-xs">{edu.year}</span>
                    </div>
                    {edu.note && <p className="text-xs text-blue-600 mt-1 italic">{edu.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <SectionTitle icon={Award} title="Certificates" />
              <ul className="space-y-2">
                {CERTIFICATES.map((cert, idx) => (
                  <li key={idx} className="text-xs text-slate-700 leading-tight flex items-start gap-2">
                    <span className="block mt-1 min-w-[4px] min-h-[4px] bg-slate-400 rounded-full"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          {/* RIGHT COLUMN (Main Content) */}
          <main className="w-full md:w-2/3 p-8">
            
            {/* Summary */}
            <div className="mb-8">
              <p className="text-slate-700 leading-relaxed text-justify">
                {SUMMARY}
              </p>
            </div>

            {/* Projects - High Priority */}
            <div className="mb-8">
              <SectionTitle icon={Code} title="Key Technical Project" />
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="mb-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">{proj.title}</h4>
                  </div>
                  <p className="text-xs font-mono text-blue-700 mb-3 bg-blue-50 inline-block px-2 py-1 rounded">
                    Stack: {proj.tech}
                  </p>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                    {proj.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-8">
              <SectionTitle icon={Briefcase} title="Professional Experience" />
              <div className="space-y-6">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800">{exp.role}</h4>
                      <span className="text-xs font-medium text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-sm text-blue-800 font-medium mb-2">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <SectionTitle icon={BookOpen} title="Selected Publications" />
              <ul className="space-y-3">
                {PUBLICATIONS.map((pub, idx) => (
                  <li key={idx} className="text-sm text-slate-700 italic border-l-4 border-slate-100 pl-3">
                    "{pub}"
                  </li>
                ))}
              </ul>
            </div>

          </main>
        </div>
      </div>
      
      {/* Print Instructions - Visible only on screen */}
      <div className="max-w-5xl mx-auto mt-8 text-center print:hidden">
        <p className="text-slate-500 text-sm">
          Tip: Press <kbd className="bg-gray-200 px-1 rounded">Ctrl + P</kbd> (or Cmd + P) to save as PDF. 
          Make sure "Background Graphics" is enabled in your print settings.
        </p>
      </div>
    </div>
  );
}