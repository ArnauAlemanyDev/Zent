// Generates static, theme-aware README artwork. No dependencies or network.
import { readFile, mkdir, writeFile } from 'node:fs/promises';
const base = new URL('./', import.meta.url);
const cfg = JSON.parse(await readFile(new URL('design.json', base), 'utf8'));
const dir = new URL('generated/', base);
await mkdir(dir, { recursive: true });
const themes = {
  dark: { text: '#E6EDF3', muted: '#8B949E', rule: '#21262D' },
  light: { text: '#1F2328', muted: '#59636E', rule: '#D1D9E0' }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x,y,s,size,color,weight=400,mono=false) => `<text x="${x}" y="${y}" class="${mono?'m':'s'}" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`;
const rule = (x1,x2,y,c) => `<line x1="${x1}" x2="${x2}" y1="${y}" y2="${y}" stroke="${c}"/>`;
const svg = (w,h,title,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" role="img" aria-labelledby="t">\n<title id="t">${esc(title)}</title>\n<style>.s{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif}.m{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}</style>\n${body.join('\n')}\n</svg>\n`;
for (const [lang, copy] of Object.entries(cfg.languages)) {
  for (const [theme,c] of Object.entries(themes)) {
    const accent = cfg.accent[theme];
    for (const [suffix,w] of [['',640],['-m',360]]) {
      const small = !!suffix;
      const header = [
        text(0,15,cfg.handle,small?11:12.5,c.muted,400,true),
        text(0,small?69:84,cfg.title,small?52:68,c.text,700),
        text(2,small?95:115,copy.subtitle,small?16:19,c.muted),
        `<path transform="translate(${w-(small?67:90)} ${small?33:39}) scale(${small?1.55:2.1})" d="${esc(cfg.markPath)}" fill="${accent}"/>`,
        rule(0,w,small?115:140,c.rule)
      ];
      await writeFile(new URL(`header-${lang}-${theme}${suffix}.svg`, dir), svg(w,small?120:145,`${cfg.title} — ${copy.subtitle}`,header));
      for (const [i,title] of copy.sections.entries()) {
        const n = String(i+1).padStart(2,'0');
        // Estimate the width conservatively and leave a small gap before the rule.
        const start = Math.min(w - 26, 44 + [...title].length * 9.2);
        await writeFile(new URL(`section-${i+1}-${lang}-${theme}${suffix}.svg`, dir), svg(w,30,`${n} — ${title}`,[text(0,19,n,12.5,accent,400,true),text(30,19,title,16,c.text,600),rule(start,w,14.5,c.rule)]));
      }
    }
  }
}


// Editorial links and technical stack. Artwork remains local and text alternatives
// in the READMEs describe the same content. No runtime network access.
const wrap = (str, max) => {
  const lines = []; let line = '';
  for (const word of str.split(' ')) {
    if (line && (line + ' ' + word).length > max) { lines.push(line); line = word; }
    else line += (line ? ' ' : '') + word;
  }
  if (line) lines.push(line);
  return lines;
};
const icon = async (name,x,y,color) => {
  const raw = await readFile(new URL(`icons/${name}.svg`,base),'utf8');
  const inner = raw.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/)[1];
  const generic = ['vite','motion','lucide'].includes(name);
  return `<g transform="translate(${x} ${y}) scale(.75)" ${generic ? `fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"` : `fill="${color}"`}>${inner}</g>`;
};
for (const [lang,copy] of Object.entries(cfg.languages)) {
  for (const [theme,c] of Object.entries(themes)) {
    const accent = cfg.accent[theme];
    for (const [suffix,w] of [['',640],['-m',360]]) {
      const small = !!suffix;
      const write = async (stem,h,title,body) => writeFile(new URL(`${stem}-${lang}-${theme}${suffix}.svg`,dir),svg(w,h,title,body));
      await write('demo',43,copy.demo,[
        text(0,20,copy.demo,17,accent,600),
        text(0,36,copy.demoDetail,11.5,c.muted,400,true),
        text(w-20,21,'↗',19,accent,400),
      ]);
      for (const [i,service] of copy.services.entries()) {
        const lines=wrap(service.scope,small?43:80);
        const h=35+lines.length*17+10;
        await write(`service-${i+1}`,h,`${service.name} — ${service.scope}`,[
          text(0,19,String(i+1).padStart(2,'0'),11,accent,400,true),
          text(29,19,service.name,16,c.text,600),
          text(w-16,19,'↗',15,c.muted),
          ...lines.map((l,j)=>text(29,37+j*17,l,13,c.muted)),
          rule(29,w,h-3,c.rule)
        ]);
      }
      const cols=small?1:2, cw=small?w:300, step=small?0:340;
      const body=[]; let y=4;
      for(let i=0;i<copy.stack.length;i+=cols){
        const group=copy.stack.slice(i,i+cols);
        let rowHeight=0;
        for(const [j,item] of group.entries()){
          const x=j*step;
          const lines=wrap(item.role,small?45:37);
          body.push(await icon(item.icon,x,y+1,c.muted));
          body.push(text(x+26,y+16,item.name,15,c.text,600));
          body.push(...lines.map((l,k)=>text(x+26,y+35+k*17,l,12.5,c.muted)));
          const h=43+lines.length*17;
          rowHeight=Math.max(rowHeight,h);
        }
        y+=rowHeight;
        if(i+cols<copy.stack.length){for(let j=0;j<cols;j++) body.push(rule(j*step,j*step+cw,y-9,c.rule));}
      }
      await write('stack',y-5,copy.sections[3],body);
    }
  }
}
console.log('README artwork generated.');
