import { Code2, Database, Network, Sparkles, Terminal } from "lucide-react";
import { siBootstrap, siCloudflare, siCpanel, siCss, siCursor, siExpress, siFlutter, siGit, siGithub, siHtml5, siJavascript, siLinux, siMysql, siNodedotjs, siPhp, siPostgresql, siPostman, siReact, siTailwindcss } from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const brands: Record<string, SimpleIcon> = {
  HTML5: siHtml5, CSS3: siCss, JavaScript: siJavascript, "React.js": siReact,
  Bootstrap: siBootstrap, "Tailwind CSS": siTailwindcss, "Node.js": siNodedotjs,
  "Express.js": siExpress, PHP: siPhp, MySQL: siMysql, PostgreSQL: siPostgresql,
  Flutter: siFlutter, Git: siGit, GitHub: siGithub, Linux: siLinux, cPanel: siCpanel,
  Postman: siPostman, Cloudflare: siCloudflare, Cursor: siCursor,
};

export function TechnologyIcon({ name }: { name: string }) {
  const brand = brands[name];
  if (brand) return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={brand.path} /></svg>;
  const Icon = name === "REST APIs" ? Network : name === "Debugging" ? Terminal : name === "Architecture planning" ? Database : name === "VS Code" ? Code2 : Sparkles;
  return <Icon size={17} aria-hidden="true" />;
}
