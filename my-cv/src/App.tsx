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
  GraduationCap,
  PenTool 
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
  name: "Phuoc Nguyen",
  title: "AI Governance Specialist & Legal Technologist",
  location: "Vietnam",
  email: "phuoc.law@gmail.com",
  linkedin: "linkedin.com/in/phuoc-nguyen-90", 
  github: "github.com/phuocnguyen90",        
};

const SUMMARY = "Legal and technology expert bridging the gap between regulatory frameworks (GDPR, EU AI Act) and AI implementation. Proven track record in NLP, including designing zero-cost RAG pipelines and Agentic AI workflows. Combines a Master of Laws (Distinction) and extensive technical training to deliver 'Legal-by-Design' AI solutions.";

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
  ],
  legal: [
    "GDPR & EU AI Act",
    "Privacy Impact Assessments",
    "Legal-by-Design Architecture"
  ],
  tools: [
    "Python & Jupyter",
    "AWS (EC2, Lambda)",
    "SQL / Vector DBs",
    "Git / CI/CD",
    "Google ADK"

  ]
};

const EXPERIENCE: Experience[] = [
  {
    role: "Legal Consultant",
    company: "MobiFone Area 7",
    period: "2024",
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
    role: "Doctoral Research Candidate",
    company: "Victoria University of Wellington",
    period: "2019 – 2020",
    description: [
      "Awarded the prestigious Vice Chancellor Doctoral Scholarship (Full Funding) to research AI regulation.",
      "Conducted interdisciplinary research on 'Code as Law' and algorithmic accountability.",
    ]
  },

    {
    role: "Court Clerk",
    company: "Provincial Court of Daklak",
    period: "2015-2017",
    description: [
      "Organized pre-trial meetings, collected necessary paperwork, and gathered evidence",
      "Reviewed and ensured case files complied with procedural regulations",      
    ]
  }
  ,
    {
    role: "Content Editor",
    company: "Thu Vien Phap Luat Ltd",
    period: "2012-2014",
    description: [
      "Compiled and distributed email summaries of new and upcoming legislation to clients",
      "Managed website news page and social media, including editing and proofreading articles",      
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
  },
    {
    title: "Agentic AI Paralegal",
    tech: "Google ADK, Neo4j (Graph Database)",
    details: [
      "Engineered an autonomous AI agent capable of digesting complex legal corpora for multi-hop reasoning ",
      "Implemented a Knowledge Graph structure using Neo4j to map relationships between legal entities, reducing hallucination rates compared to standard vector-only RAG.",
      "Demonstrated a functional POC that automates the extraction of key contract terms from unstructured documents."
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

// Forces a page break and adds 2rem of space at the top of the new page
const PageBreak = () => (
  <div className="hidden print:block break-before-page pt-16" />
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
    {skill}
  </span>
);

export default function ModernCV() {
  return (
    // FIX APPLIED:
    // 1. 'flex-col': Stacks the CV and the Tip text vertically (instead of side-by-side).
    // 2. 'items-center': Centers that vertical stack horizontally in the middle of the screen.
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 font-sans print:block print:p-0 print:bg-white">
      
      {/* CV PAPER CONTAINER */}
      <div className="w-full max-w-5xl bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none overflow-hidden rounded-xl print:rounded-none">
        
        {/* Header */}
        <header className="bg-slate-900 text-white p-8 print:bg-slate-900 print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Name & Title */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{CONTACT_INFO.name}</h1>
              <p className="text-xl text-slate-300 font-light">{CONTACT_INFO.title}</p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} /> 
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> 
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} /> 
                <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} /> 
                <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.github}
                </a>
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

             {/* Book Manuscript */}
             <div className="mt-8 border-t border-slate-200 pt-6">
              <SectionTitle icon={PenTool} title="Book Manuscript" />
              <div className="bg-slate-100 p-3 rounded-md border border-slate-200">
                <h4 className="font-bold text-slate-800 text-sm italic mb-2">
                  "The Architecture of Distortion"
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed text-justify">
                  (Work in Progress)
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A multidisciplinary critique analyzing how AI systems fail to address <span className="font-semibold text-slate-800">substantive justice</span>.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {["Mathematical", "Structural", "Epistemological"].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wide bg-white px-1 py-0.5 rounded text-slate-500 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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

             {/* PAGE BREAK (Force new page for experience if needed) */}
             <PageBreak />

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
      
      {/* Print Instructions - Centered below the CV */}
      <div className="mt-6 text-center print:hidden">
        <p className="text-slate-500 text-sm">
          Tip: Press <kbd className="bg-gray-200 px-1 rounded">Ctrl + P</kbd> (or Cmd + P) to save as PDF. 
          Make sure "Background Graphics" is enabled.
        </p>
      </div>
    </div>
  );
}