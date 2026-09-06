import { config } from '../config';
import type { FileSection } from './Sidebar';

interface EditorProps {
  activeSection: FileSection;
  isDark: boolean;
}

function SyntaxSpan({ type, children, isDark }: { type: string; children: React.ReactNode; isDark: boolean }) {
  const colorMap: Record<string, string> = isDark
    ? {
        keyword: 'text-xcode-keyword',
        type: 'text-xcode-type',
        string: 'text-xcode-string',
        comment: 'text-xcode-comment',
        func: 'text-xcode-func',
        number: 'text-xcode-number',
        property: 'text-xcode-property',
      }
    : {
        keyword: 'text-light-keyword',
        type: 'text-light-type',
        string: 'text-light-string',
        comment: 'text-light-comment',
        func: 'text-light-func',
        number: 'text-light-number',
        property: 'text-light-property',
      };

  return <span className={colorMap[type] || ''}>{children}</span>;
}

function K({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="keyword" isDark={d}>{children}</SyntaxSpan>;
}
function T({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="type" isDark={d}>{children}</SyntaxSpan>;
}
function S({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="string" isDark={d}>{children}</SyntaxSpan>;
}
function C({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="comment" isDark={d}>{children}</SyntaxSpan>;
}
function F({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="func" isDark={d}>{children}</SyntaxSpan>;
}
function P({ children, d }: { children: React.ReactNode; d: boolean }) {
  return <SyntaxSpan type="property" isDark={d}>{children}</SyntaxSpan>;
}

function AboutSection({ isDark: d }: { isDark: boolean }) {
  const { profile, about } = config;
  return (
    <div>
      <C d={d}>{'// About.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <C d={d}>{'/// Professional Summary'}</C>
      <K d={d}>struct </K><T d={d}>About</T>{' {'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>name</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.name}"</S>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>role</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.role}"</S>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>location</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.location}"</S>
      <br /><br />
      {'    '}<K d={d}>func </K><F d={d}>summary</F>{'() -> '}<T d={d}>String</T>{' {'}
      <br />
      {'        '}<K d={d}>return </K><S d={d}>"""</S>
      {about.bio.map((p, i) => (
        <div key={i} className="pl-8">
          <S d={d}>{p}</S>
          {i < about.bio.length - 1 && <br />}
        </div>
      ))}
      {'        '}<S d={d}>"""</S>
      <br />
      {'    }'}
      <br /><br />
      {'    '}<C d={d}>{'// '}{about.funFact}</C>
      <br />
      {'}'}
    </div>
  );
}

function ExperienceSection({ isDark: d }: { isDark: boolean }) {
  return (
    <div>
      <C d={d}>{'// Experience.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <K d={d}>struct </K><T d={d}>Experience</T>{': '}<T d={d}>Identifiable</T>{' {'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>id</P>{' = '}<T d={d}>UUID</T>{'()'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>company</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>role</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>period</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>description</P>{': '}<T d={d}>String</T>
      <br />
      {'}'}
      <br /><br />
      <K d={d}>let </K><P d={d}>career</P>{': ['}<T d={d}>Experience</T>{'] = ['}
      {config.experience.map((exp, i) => (
        <div key={i} className="pl-4">
          <br />
          {'    '}<C d={d}>{'// MARK: - '}{exp.company}</C>
          <br />
          {'    '}<T d={d}>Experience</T>{'('}
          <br />
          {'        '}<P d={d}>company</P>{': '}<S d={d}>"{exp.company}"</S>{','}
          <br />
          {'        '}<P d={d}>role</P>{': '}<S d={d}>"{exp.role}"</S>{','}
          <br />
          {'        '}<P d={d}>period</P>{': '}<S d={d}>"{exp.period}"</S>{','}
          <br />
          {'        '}<P d={d}>description</P>{': '}<S d={d}>"""</S>
          <div className="pl-12"><S d={d}>{exp.description}</S></div>
          {'        '}<S d={d}>"""</S>
          <br />
          {'    )'}
          {i < config.experience.length - 1 && ','}
        </div>
      ))}
      <br />
      {']'}
    </div>
  );
}

function ProjectsSection({ isDark: d }: { isDark: boolean }) {
  return (
    <div>
      <C d={d}>{'// Projects.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <K d={d}>struct </K><T d={d}>Project</T>{' {'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>name</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>description</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>technologies</P>{': ['}<T d={d}>String</T>{']'}
      <br />
      {'}'}
      <br /><br />
      <K d={d}>let </K><P d={d}>portfolio</P>{': ['}<T d={d}>Project</T>{'] = ['}
      {config.projects.map((proj, i) => (
        <div key={i} className="pl-4">
          <br />
          {'    '}<T d={d}>Project</T>{'('}
          <br />
          {'        '}<P d={d}>name</P>{': '}<S d={d}>"{proj.name}"</S>{','}
          <br />
          {'        '}<P d={d}>description</P>{': '}<S d={d}>"{proj.description}"</S>{','}
          <br />
          {'        '}<P d={d}>technologies</P>{': ['}
          {proj.tech.map((t, j) => (
            <span key={j}>
              <S d={d}>"{t}"</S>
              {j < proj.tech.length - 1 && ', '}
            </span>
          ))}
          {']'}
          <br />
          {'    )'}
          {i < config.projects.length - 1 && ','}
        </div>
      ))}
      <br />
      {']'}
    </div>
  );
}

function SkillsSection({ isDark: d }: { isDark: boolean }) {
  const categories = Object.entries(config.skills);
  return (
    <div>
      <C d={d}>{'// Skills.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <K d={d}>enum </K><T d={d}>SkillLevel</T>{' {'}
      <br />
      {'    '}<K d={d}>case </K><P d={d}>advanced</P>{', '}<P d={d}>intermediate</P>{', '}<P d={d}>basic</P>
      <br />
      {'}'}
      <br /><br />
      <K d={d}>struct </K><T d={d}>SkillSet</T>{' {'}
      {categories.map(([category, skills], i) => (
        <div key={i}>
          <br />
          {'    '}<C d={d}>{'// MARK: - '}{category}</C>
          <br />
          {'    '}<K d={d}>static let </K><P d={d}>{category.toLowerCase().replace(/\s+/g, '')}</P>{': ['}<T d={d}>String</T>{'] = ['}
          <br />
          {'        '}
          {skills.map((skill, j) => (
            <span key={j}>
              <S d={d}>"{skill}"</S>
              {j < skills.length - 1 && ', '}
            </span>
          ))}
          <br />
          {'    ]'}
        </div>
      ))}
      <br />
      {'}'}
    </div>
  );
}

function EducationSection({ isDark: d }: { isDark: boolean }) {
  return (
    <div>
      <C d={d}>{'// Education.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <K d={d}>struct </K><T d={d}>Education</T>{' {'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>institution</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>degree</P>{': '}<T d={d}>String</T>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>period</P>{': '}<T d={d}>String</T>
      <br />
      {'}'}
      <br /><br />
      <K d={d}>let </K><P d={d}>education</P>{': ['}<T d={d}>Education</T>{'] = ['}
      {config.education.map((edu, i) => (
        <div key={i} className="pl-4">
          <br />
          {'    '}<T d={d}>Education</T>{'('}
          <br />
          {'        '}<P d={d}>institution</P>{': '}<S d={d}>"{edu.institution}"</S>{','}
          <br />
          {'        '}<P d={d}>degree</P>{': '}<S d={d}>"{edu.degree}"</S>{','}
          <br />
          {'        '}<P d={d}>period</P>{': '}<S d={d}>"{edu.period}"</S>
          <br />
          {'    )'}
          {i < config.education.length - 1 && ','}
        </div>
      ))}
      <br />
      {']'}
      <br /><br />
      <C d={d}>{'// MARK: - Certifications'}</C>
      <K d={d}>let </K><P d={d}>certifications</P>{': ['}<T d={d}>String</T>{': '}<T d={d}>String</T>{'] = ['}
      {config.certifications.map((cert, i) => (
        <div key={i} className="pl-4">
          {'    '}<S d={d}>"{cert.name}"</S>{': '}<S d={d}>"{cert.score}"</S>
          {i < config.certifications.length - 1 && ','}
        </div>
      ))}
      <br />
      {']'}
      <br /><br />
      <C d={d}>{'// MARK: - Languages'}</C>
      <K d={d}>let </K><P d={d}>languageSkills</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{config.languages}"</S>
      <br /><br />
      <C d={d}>{'// MARK: - Community'}</C>
      <K d={d}>let </K><P d={d}>community</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"""</S>
      <div className="pl-4"><S d={d}>{config.community}</S></div>
      <S d={d}>"""</S>
    </div>
  );
}

function ContactSection({ isDark: d }: { isDark: boolean }) {
  const { profile } = config;
  return (
    <div>
      <C d={d}>{'// Contact.swift'}</C>
      <C d={d}>{'// DanielRomero'}</C>
      <br />
      <K d={d}>import </K><T d={d}>Foundation</T>
      <br /><br />
      <K d={d}>struct </K><T d={d}>Contact</T>{' {'}
      <br />
      {'    '}<K d={d}>let </K><P d={d}>email</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.email}"</S>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>phone</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.phone}"</S>
      <br />
      {'    '}<K d={d}>let </K><P d={d}>location</P>{': '}<T d={d}>String</T>{' = '}<S d={d}>"{profile.location}"</S>
      <br /><br />
      {'    '}<C d={d}>{'// MARK: - Social Links'}</C>
      <br />
      {'    '}<K d={d}>func </K><F d={d}>socialLinks</F>{'() -> ['}<T d={d}>String</T>{': '}<T d={d}>URL</T>{'] {'}
      <br />
      {'        '}<K d={d}>return </K>{'['}
      <br />
      {'            '}<S d={d}>"LinkedIn"</S>{': '}<T d={d}>URL</T>{'('}
      <P d={d}>string</P>{': '}<S d={d}>"{profile.linkedin}"</S>
      {')!,'}
      <br />
      {'            '}<S d={d}>"GitHub"</S>{': '}<T d={d}>URL</T>{'('}
      <P d={d}>string</P>{': '}<S d={d}>"{profile.github}"</S>
      {')!,'}
      <br />
      {'            '}<S d={d}>"Website"</S>{': '}<T d={d}>URL</T>{'('}
      <P d={d}>string</P>{': '}<S d={d}>"{profile.website}"</S>
      {')!'}
      <br />
      {'        ]'}
      <br />
      {'    }'}
      <br /><br />
      {'    '}<K d={d}>func </K><F d={d}>reachOut</F>{'() {'}
      <br />
      {'        '}<F d={d}>print</F>{'('}<S d={d}>"Feel free to contact me!"</S>{')'}
      <br />
      {'        '}<F d={d}>print</F>{'('}<S d={d}>"I'm always open to new opportunities."</S>{')'}
      <br />
      {'    }'}
      <br />
      {'}'}
    </div>
  );
}

const sectionComponents: Record<FileSection, React.FC<{ isDark: boolean }>> = {
  About: AboutSection,
  Experience: ExperienceSection,
  Projects: ProjectsSection,
  Skills: SkillsSection,
  Education: EducationSection,
  Contact: ContactSection,
};

export function Editor({ activeSection, isDark }: EditorProps) {
  const SectionContent = sectionComponents[activeSection];

  const lines = 80;

  return (
    <div className={`flex flex-col flex-1 min-h-0 ${isDark ? 'bg-xcode-editor' : 'bg-light-editor'}`}>
      {/* Breadcrumb */}
      <div
        className={`flex items-center gap-1 px-3 py-1 text-[11px] shrink-0 border-b font-sans ${
          isDark
            ? 'bg-xcode-editor border-xcode-border text-xcode-text-dim'
            : 'bg-light-editor border-light-border text-light-text-dim'
        }`}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <span>DanielRomero</span>
        <ChevronRight />
        <span>Sources</span>
        <ChevronRight />
        <span className={isDark ? 'text-xcode-text' : 'text-light-text'}>{activeSection}.swift</span>
      </div>

      {/* Editor content */}
      <div className="flex flex-1 overflow-auto">
        <div
          className={`shrink-0 py-4 pr-3 text-right text-[12px] leading-[1.6] select-none w-12 border-r ${
            isDark
              ? 'text-xcode-text-dim/40 bg-xcode-editor border-xcode-border/30'
              : 'text-light-text-dim/40 bg-light-editor border-light-border/30'
          }`}
        >
          {Array.from({ length: lines }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div
          className={`flex-1 py-4 pl-4 pr-6 text-[13px] leading-[1.6] font-mono overflow-x-auto ${
            isDark ? 'text-xcode-text' : 'text-light-text'
          }`}
        >
          <SectionContent isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 opacity-50" fill="currentColor">
      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
