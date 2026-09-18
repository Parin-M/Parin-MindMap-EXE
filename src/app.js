
(() => {
  "use strict";

  const LANGS = {
    fa:{label:"فارسی",dir:"rtl"}, en:{label:"English",dir:"ltr"}, da:{label:"Dansk",dir:"ltr"}, sv:{label:"Svenska",dir:"ltr"},
    no:{label:"Norsk",dir:"ltr"}, fi:{label:"Suomi",dir:"ltr"}, es:{label:"Español",dir:"ltr"}, de:{label:"Deutsch",dir:"ltr"},
    ar:{label:"العربية",dir:"rtl"}, he:{label:"עברית",dir:"rtl"}, ko:{label:"한국어",dir:"ltr"}, ja:{label:"日本語",dir:"ltr"},
    fr:{label:"Français",dir:"ltr"}, it:{label:"Italiano",dir:"ltr"}
  };

  const T = {
    en:{
      newMap:"New map",workspace:"Workspace",mindMap:"Mind map",aiStudio:"AI Studio",export:"Export",quickTools:"Quick tools",
      addChild:"Add child",addSibling:"Add sibling",deleteNode:"Delete",focusSelection:"Focus selection",localFirst:"Local-first",
      localFirstCopy:"Your map stays on this device.",settings:"Settings",open:"Open",save:"Save",askAI:"Ask AI",layout:"Layout",
      theme:"Theme",notes:"Notes",fit:"Fit",selectedNode:"Selected node",nodeText:"Node text",nodeNote:"Note",branchColor:"Branch color",
      priority:"Priority",collapse:"Collapse",delete:"Delete",aiActions:"AI actions",expandNode:"Expand this node",rewriteNode:"Rewrite clearly",
      generateQuestions:"Generate questions",collapseAll:"Collapse all",expandAll:"Expand all",duplicateNode:"Duplicate branch",about:"About Parin MindMap",aboutBuiltBy:"This software was built by Parin Mashalchian with the help and collaboration of ChatGPT.",openGithub:"Open project on GitHub",nodes:"Nodes",depth:"Depth",branches:"Branches",canvasHintTitle:"Start with one thought.",
      canvasHintCopy:"Press Tab to branch, Enter to create a sibling, or ask AI to build the structure.",aiModalCopy:"Turn rough ideas into structured thinking.",
      aiPrompt:"Prompt",provider:"Provider",model:"Model",endpoint:"Endpoint",apiKey:"API key",aiResult:"AI result",applyToMap:"Apply to map",
      commercialNote:"Use a model/provider whose license and service terms permit your commercial use.",runAI:"Run AI",exportCopy:"Create polished documents from your map.",
      paperSize:"Paper size",orientation:"Orientation",margin:"Margin",quality:"Quality",printBackground:"Print background",includeTitle:"Include title",
      includeLegend:"Include legend",includeFooter:"Include footer",exportNow:"Export now",settingsCopy:"Tune the workspace and AI connection.",
      appearance:"Appearance",defaultLayout:"Default layout",language:"Language",interfaceLanguage:"Interface language",aiConnection:"AI connection",
      aiLicenseHint:"Local Copilot uses Harrier for semantic context retrieval and Gemma 3 for assistant reasoning. Review the bundled model notice and Gemma Terms before redistribution.",
      saveChanges:"Save changes"
    },
    fa:{
      newMap:"نقشه جدید",workspace:"فضای کار",mindMap:"مایند مپ",aiStudio:"استودیو هوش مصنوعی",export:"خروجی",quickTools:"ابزارهای سریع",
      addChild:"شاخه فرزند",addSibling:"شاخه هم‌سطح",deleteNode:"حذف",focusSelection:"تمرکز روی انتخاب",localFirst:"محلی و خصوصی",
      localFirstCopy:"نقشه شما روی همین دستگاه می‌ماند.",settings:"تنظیمات",open:"باز کردن",save:"ذخیره",askAI:"پرسش از هوش مصنوعی",layout:"چیدمان",
      theme:"پوسته",notes:"یادداشت‌ها",fit:"جای‌گیری",selectedNode:"گره انتخاب‌شده",nodeText:"متن گره",nodeNote:"یادداشت",branchColor:"رنگ شاخه",
      priority:"اولویت",collapse:"جمع کردن",delete:"حذف",aiActions:"عملیات هوش مصنوعی",expandNode:"گسترش این گره",rewriteNode:"بازنویسی حرفه‌ای",
      generateQuestions:"ساخت پرسش",collapseAll:"جمع‌کردن همه",expandAll:"بازکردن همه",duplicateNode:"کپی شاخه",about:"درباره پرین مایندمپ",aboutBuiltBy:"این نرم‌افزار توسط پرین مشعلچیان با کمک و همراهی ChatGPT ساخته شده است.",openGithub:"باز کردن پروژه در GitHub",nodes:"گره",depth:"عمق",branches:"شاخه",canvasHintTitle:"با یک ایده شروع کن.",
      canvasHintCopy:"Tab برای شاخه جدید، Enter برای هم‌سطح و AI برای ساخت خودکار ساختار.",aiModalCopy:"ایده‌های خام را به ساختار قابل‌فهم تبدیل کن.",
      aiPrompt:"دستور",provider:"ارائه‌دهنده",model:"مدل",endpoint:"نشانی API",apiKey:"کلید API",aiResult:"نتیجه AI",applyToMap:"اعمال روی نقشه",
      commercialNote:"برای استفاده تجاری، مدل و سرویس انتخابی باید شرایط و مجوز مناسب داشته باشند.",runAI:"اجرای AI",exportCopy:"نقشه را به اسناد حرفه‌ای تبدیل کن.",
      paperSize:"اندازه کاغذ",orientation:"جهت صفحه",margin:"حاشیه",quality:"کیفیت",printBackground:"پس‌زمینه",includeTitle:"عنوان",
      includeLegend:"راهنما",includeFooter:"پابرگ",exportNow:"خروجی بگیر",settingsCopy:"محیط کار و اتصال AI را تنظیم کن.",
      appearance:"ظاهر",defaultLayout:"چیدمان پیش‌فرض",language:"زبان",interfaceLanguage:"زبان محیط",aiConnection:"اتصال هوش مصنوعی",
      aiLicenseHint:"Copilot محلی از Harrier برای زمینه معنایی و Gemma 3 برای استدلال دستیار استفاده می‌کند. پیش از انتشار، اطلاعیه مدل و شرایط Gemma را بررسی کنید.",
      saveChanges:"ذخیره تغییرات"
    },
    de:{newMap:"Neue Map",workspace:"Arbeitsbereich",mindMap:"Mindmap",aiStudio:"KI-Studio",export:"Export",quickTools:"Schnellwerkzeuge",addChild:"Unterknoten",addSibling:"Geschwisterknoten",deleteNode:"Löschen",focusSelection:"Auswahl fokussieren",localFirst:"Lokal zuerst",localFirstCopy:"Deine Map bleibt auf diesem Gerät.",settings:"Einstellungen",open:"Öffnen",save:"Speichern",askAI:"KI fragen",layout:"Layout",theme:"Design",notes:"Notizen",fit:"Einpassen",selectedNode:"Ausgewählter Knoten",nodeText:"Knotentext",nodeNote:"Notiz",branchColor:"Astfarbe",priority:"Priorität",collapse:"Einklappen",delete:"Löschen",aiActions:"KI-Aktionen",expandNode:"Knoten erweitern",rewriteNode:"Klar umformulieren",generateQuestions:"Fragen erzeugen",nodes:"Knoten",depth:"Tiefe",branches:"Äste",canvasHintTitle:"Mit einem Gedanken beginnen.",canvasHintCopy:"Tab für einen Unterknoten, Enter für einen Geschwisterknoten oder KI für eine Struktur.",aiModalCopy:"Rohideen in klare Strukturen verwandeln.",aiPrompt:"Prompt",provider:"Anbieter",model:"Modell",endpoint:"Endpunkt",apiKey:"API-Schlüssel",aiResult:"KI-Ergebnis",applyToMap:"Auf Map anwenden",commercialNote:"Für kommerzielle Nutzung müssen Modell- und Dienstbedingungen passen.",runAI:"KI ausführen",exportCopy:"Professionelle Dokumente aus deiner Map erstellen.",paperSize:"Papierformat",orientation:"Ausrichtung",margin:"Rand",quality:"Qualität",printBackground:"Hintergrund drucken",includeTitle:"Titel einfügen",includeLegend:"Legende einfügen",includeFooter:"Fußzeile",exportNow:"Jetzt exportieren",settingsCopy:"Arbeitsbereich und KI-Verbindung anpassen.",appearance:"Darstellung",defaultLayout:"Standardlayout",language:"Sprache",interfaceLanguage:"Oberflächensprache",aiConnection:"KI-Verbindung",aiLicenseHint:"Dieses Build bündelt kein Drittanbieter-Modell. Verwende ein Modell mit kommerziellen Nutzungsrechten.",saveChanges:"Änderungen speichern"},
    fr:{newMap:"Nouvelle carte",workspace:"Espace de travail",mindMap:"Carte mentale",aiStudio:"Studio IA",export:"Exporter",quickTools:"Outils rapides",addChild:"Sous-branche",addSibling:"Branche sœur",deleteNode:"Supprimer",focusSelection:"Focaliser la sélection",localFirst:"Local d’abord",localFirstCopy:"Votre carte reste sur cet appareil.",settings:"Paramètres",open:"Ouvrir",save:"Enregistrer",askAI:"Demander à l’IA",layout:"Disposition",theme:"Thème",notes:"Notes",fit:"Ajuster",selectedNode:"Nœud sélectionné",nodeText:"Texte du nœud",nodeNote:"Note",branchColor:"Couleur de branche",priority:"Priorité",collapse:"Réduire",delete:"Supprimer",aiActions:"Actions IA",expandNode:"Développer ce nœud",rewriteNode:"Reformuler clairement",generateQuestions:"Générer des questions",nodes:"Nœuds",depth:"Profondeur",branches:"Branches",canvasHintTitle:"Commencez par une idée.",canvasHintCopy:"Tab pour une branche, Entrée pour une sœur, ou l’IA pour construire la structure.",aiModalCopy:"Transformer les idées brutes en structure claire.",aiPrompt:"Prompt",provider:"Fournisseur",model:"Modèle",endpoint:"Point de terminaison",apiKey:"Clé API",aiResult:"Résultat IA",applyToMap:"Appliquer à la carte",commercialNote:"Pour un usage commercial, vérifiez les droits et conditions du modèle/service.",runAI:"Lancer l’IA",exportCopy:"Créer des documents soignés depuis votre carte.",paperSize:"Format papier",orientation:"Orientation",margin:"Marge",quality:"Qualité",printBackground:"Imprimer l’arrière-plan",includeTitle:"Inclure le titre",includeLegend:"Inclure la légende",includeFooter:"Inclure le pied de page",exportNow:"Exporter maintenant",settingsCopy:"Configurer l’espace et la connexion IA.",appearance:"Apparence",defaultLayout:"Disposition par défaut",language:"Langue",interfaceLanguage:"Langue de l’interface",aiConnection:"Connexion IA",aiLicenseHint:"Ce build n’embarque pas de modèle tiers. Choisissez un modèle autorisant l’usage commercial.",saveChanges:"Enregistrer les changements"},
    es:{newMap:"Nuevo mapa",workspace:"Espacio de trabajo",mindMap:"Mapa mental",aiStudio:"Estudio de IA",export:"Exportar",quickTools:"Herramientas rápidas",addChild:"Hijo",addSibling:"Hermano",deleteNode:"Eliminar",focusSelection:"Enfocar selección",localFirst:"Local primero",localFirstCopy:"Tu mapa permanece en este dispositivo.",settings:"Ajustes",open:"Abrir",save:"Guardar",askAI:"Preguntar a la IA",layout:"Diseño",theme:"Tema",notes:"Notas",fit:"Ajustar",selectedNode:"Nodo seleccionado",nodeText:"Texto del nodo",nodeNote:"Nota",branchColor:"Color de rama",priority:"Prioridad",collapse:"Contraer",delete:"Eliminar",aiActions:"Acciones de IA",expandNode:"Ampliar nodo",rewriteNode:"Reescribir claramente",generateQuestions:"Generar preguntas",nodes:"Nodos",depth:"Profundidad",branches:"Ramas",canvasHintTitle:"Empieza con una idea.",canvasHintCopy:"Tab para una rama, Enter para un hermano o usa la IA para crear la estructura.",aiModalCopy:"Convierte ideas sueltas en pensamiento estructurado.",aiPrompt:"Prompt",provider:"Proveedor",model:"Modelo",endpoint:"Endpoint",apiKey:"Clave API",aiResult:"Resultado de IA",applyToMap:"Aplicar al mapa",commercialNote:"Para uso comercial, verifica la licencia y los términos del modelo/servicio.",runAI:"Ejecutar IA",exportCopy:"Crea documentos pulidos a partir de tu mapa.",paperSize:"Tamaño de papel",orientation:"Orientación",margin:"Margen",quality:"Calidad",printBackground:"Imprimir fondo",includeTitle:"Incluir título",includeLegend:"Incluir leyenda",includeFooter:"Incluir pie",exportNow:"Exportar ahora",settingsCopy:"Ajusta el espacio de trabajo y la conexión IA.",appearance:"Apariencia",defaultLayout:"Diseño predeterminado",language:"Idioma",interfaceLanguage:"Idioma de la interfaz",aiConnection:"Conexión IA",aiLicenseHint:"Esta versión no incluye un modelo de terceros. Elige un modelo con derechos de uso comercial.",saveChanges:"Guardar cambios"}
  };

  // Fill closely related UI languages with English fallbacks so every requested locale is selectable.
  ["da","sv","no","fi","ar","he","ko","ja","it"].forEach(k => { if (!T[k]) T[k] = Object.assign({}, T.en); });

  const AI_TASKS = [
    {id:"map",icon:"✦",title:"Generate a full mind map",hint:"Idea → structured map"},
    {id:"outline",icon:"☷",title:"Turn text into a mind map",hint:"Paste notes, get structure"},
    {id:"expand",icon:"＋",title:"Expand selected node",hint:"Add useful child branches"},
    {id:"subtopics",icon:"⌘",title:"Generate subtopics",hint:"Find missing branches"},
    {id:"rewrite",icon:"Aa",title:"Rewrite the map clearly",hint:"Make labels concise & precise"},
    {id:"simplify",icon:"≈",title:"Simplify complex ideas",hint:"Reduce cognitive load"},
    {id:"summary",icon:"≋",title:"Summarize the map",hint:"Executive / study summary"},
    {id:"executive",icon:"▤",title:"Executive brief",hint:"Key points for decision-makers"},
    {id:"brainstorm",icon:"✧",title:"Deep brainstorm",hint:"Angles, risks, opportunities"},
    {id:"creative",icon:"✺",title:"Creative ideation",hint:"Novel concepts & combinations"},
    {id:"swot",icon:"▦",title:"SWOT analysis",hint:"Strengths, weaknesses, opportunities"},
    {id:"risk",icon:"⚠",title:"Risk analysis",hint:"Risks, causes, mitigations"},
    {id:"decision",icon:"◇",title:"Decision tree",hint:"Options, criteria, outcomes"},
    {id:"proscons",icon:"±",title:"Pros & cons",hint:"Trade-offs by branch"},
    {id:"compare",icon:"⇄",title:"Compare alternatives",hint:"Criteria, trade-offs, risks"},
    {id:"plan",icon:"☷",title:"Action plan",hint:"Steps, owners, dependencies"},
    {id:"roadmap",icon:"➜",title:"Roadmap generator",hint:"Milestones & phases"},
    {id:"study",icon:"⌘",title:"Study plan",hint:"Topics, recall, practice"},
    {id:"quiz",icon:"?",title:"Quiz generator",hint:"Questions from your map"},
    {id:"flashcards",icon:"▣",title:"Flashcards",hint:"Active-recall cards"},
    {id:"questions",icon:"?",title:"Research questions",hint:"High-value questions"},
    {id:"fivew",icon:"5",title:"5W1H breakdown",hint:"Who, what, when, where, why, how"},
    {id:"meeting",icon:"◫",title:"Meeting structure",hint:"Agenda → decisions → actions"},
    {id:"presentation",icon:"▥",title:"Presentation outline",hint:"Slides from your map"},
    {id:"email",icon:"✉",title:"Draft communication",hint:"Email / memo / announcement"},
    {id:"timeline",icon:"◷",title:"Timeline builder",hint:"Dates, milestones, sequence"},
    {id:"dependencies",icon:"∞",title:"Dependency map",hint:"Find blockers & links"},
    {id:"gaps",icon:"⌕",title:"Find knowledge gaps",hint:"What is missing?"},
    {id:"sources",icon:"🔎",title:"Source plan",hint:"What should be researched"},
    {id:"translate",icon:"文",title:"Translate map",hint:"Preserve structure across languages"},
    {id:"tone",icon:"◈",title:"Change writing style",hint:"Formal, concise, persuasive"},
    {id:"tags",icon:"#",title:"Auto-tag branches",hint:"Keywords & categories"},
    {id:"prioritize",icon:"↑",title:"Prioritize branches",hint:"Urgency, impact, effort"},
    {id:"metrics",icon:"◉",title:"Define success metrics",hint:"KPIs & measurable outcomes"},
    {id:"checklist",icon:"☑",title:"Checklist generator",hint:"Turn branches into checklists"},
    {id:"retro",icon:"↺",title:"Project retrospective",hint:"Learnings & improvements"},
    {id:"scenario",icon:"◌",title:"Scenario analysis",hint:"What-if branches"},
    {id:"persona",icon:"◎",title:"Persona map",hint:"Users, needs, pain points"},
    {id:"rootcause",icon:"◉",title:"Root-cause analysis",hint:"5 Whys & cause chains"},
    {id:"mindset",icon:"◐",title:"Counter-arguments",hint:"Challenge assumptions"},
{id:"okr",icon:"◎",title:"OKR planner",hint:"Objectives & key results"},
    {id:"smart",icon:"✓",title:"SMART goals",hint:"Turn ideas into measurable goals"},
    {id:"eisenhower",icon:"▤",title:"Eisenhower matrix",hint:"Urgent vs important"},
    {id:"pestel",icon:"◫",title:"PESTEL analysis",hint:"Macro-environment scan"},
    {id:"raci",icon:"👥",title:"RACI map",hint:"Roles & accountability"},
    {id:"userstories",icon:"♡",title:"User stories",hint:"As a user… acceptance-ready"},
    {id:"requirements",icon:"≣",title:"Requirements map",hint:"Functional & non-functional requirements"},
    {id:"acceptance",icon:"✓",title:"Acceptance criteria",hint:"Definition of done"},
    {id:"productbrief",icon:"▥",title:"Product brief",hint:"Problem, audience, value, scope"},
    {id:"featurematrix",icon:"⊞",title:"Feature matrix",hint:"Compare features & priorities"},
    {id:"testcases",icon:"☑",title:"Test cases",hint:"QA scenarios from the map"},
    {id:"bugtriage",icon:"⚑",title:"Bug triage",hint:"Severity, impact, next action"},
    {id:"sop",icon:"≋",title:"SOP generator",hint:"Repeatable step-by-step procedure"},
    {id:"faq",icon:"?",title:"FAQ generator",hint:"Questions & clear answers"},
    {id:"glossary",icon:"Aa",title:"Glossary builder",hint:"Terms, definitions & examples"},
    {id:"lesson",icon:"◌",title:"Lesson plan",hint:"Learning objectives & activities"},
    {id:"thesis",icon:"§",title:"Thesis outline",hint:"Arguments, evidence & chapters"},
    {id:"debate",icon:"⇄",title:"Debate map",hint:"Claims, evidence & rebuttals"},
    {id:"counterexamples",icon:"◇",title:"Counterexamples",hint:"Stress-test ideas"},
    {id:"explain",icon:"?",title:"Explain simply",hint:"Plain-language explanation"},
    {id:"audience",icon:"◎",title:"Audience adaptation",hint:"Rewrite for a specific audience"},
    {id:"assumptions",icon:"△",title:"Assumption audit",hint:"Hidden assumptions & evidence"},
    {id:"qa",icon:"⌕",title:"Quality review",hint:"Clarity, completeness & consistency"},
    {id:"cleanup",icon:"✧",title:"Map cleanup",hint:"Duplicates, clutter & weak labels"},
    {id:"merge",icon:"⊕",title:"Merge duplicate ideas",hint:"Consolidate overlapping branches"},
    {id:"nodeSummary",icon:"≡",title:"Branch snapshot",hint:"Summarize the selected branch"},
    {id:"branchPlan",icon:"➜",title:"Branch execution plan",hint:"Turn one branch into steps"},
    {id:"naming",icon:"T",title:"Naming assistant",hint:"Names, titles & terminology"},
    {id:"promptRefine",icon:"✦",title:"Prompt optimizer",hint:"Improve your next AI request"}

  ];\n\n  const el = id => document.getElementById(id);
  const $all = sel => Array.from(document.querySelectorAll(sel));
  const clone = o => JSON.parse(JSON.stringify(o));
  const uid = () => "n_" + Date.now().toString(36) + Math.random().toString(36).slice(2,8);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  const state = {
    title: "Untitled map",
    root: null,
    selected: null,
    zoom: 1,
    panX: 0,
    panY: 0,
    layout: localStorage.getItem("parin.layout") || "radial",
    theme: localStorage.getItem("parin.theme") || "aurora",
    showNotes: false,
    history: [],
    future: [],
    dragging: null,
    lang: localStorage.getItem("parin.lang") || "en",
    pdfTab: "pdf",
    aiTask: "map",
    aiRaw: "",
    aiEnabled: localStorage.getItem("parin.aiEnabled") !== "false",
    agentMode: localStorage.getItem("parin.agentMode") || "suggest",
    agentPlan: [],
    agentRunning: false
  };

  function makeNode(label, depth=0) {
    return { id:uid(), label, note:"", color:["#8b7cff","#6fe7d4","#ff72c7","#ffb86c","#68a6ff"][depth%5], priority:"normal", collapsed:false, children:[], manualX:null, manualY:null };
  }

  function defaultMap() {
    const root = makeNode("Parin MindMap");
    root.children = ["Ideas","Projects","Learning","Planning"].map((x,i) => {
      const n = makeNode(x,1);
      if (x === "Ideas") n.children = ["Brainstorm","Questions","Connections"].map(y=>makeNode(y,2));
      if (x === "Projects") n.children = ["Goals","Tasks","Risks"].map(y=>makeNode(y,2));
      return n;
    });
    return root;
  }

  function flatten(root, depth=0, parent=null, out=[]) {
    if (!root) return out;
    out.push({node:root, depth, parent});
    if (!root.collapsed) root.children.forEach(c => flatten(c, depth+1, root, out));
    return out;
  }

  function findNode(id, node=state.root, parent=null) {
    if (!node) return null;
    if (node.id === id) return {node,parent};
    for (const c of node.children) {
      const r = findNode(id,c,node);
      if (r) return r;
    }
    return null;
  }

  function countStats() {
    const all = flatten(state.root);
    const maxDepth = all.reduce((m,x)=>Math.max(m,x.depth),0);
    const branchCount = all.filter(x=>x.node.children.length>0).length;
    el("nodeCount").textContent = all.length;
    el("depthCount").textContent = maxDepth + 1;
    el("branchCount").textContent = branchCount;
  }

  function snapshot() { return clone(state.root); }

  function commitHistory() {
    state.history.push(snapshot());
    if (state.history.length > 60) state.history.shift();
    state.future.length = 0;
    localStorage.setItem("parin.autosave", JSON.stringify({title:state.title,root:state.root,theme:state.theme,layout:state.layout}));
    el("saveState").textContent = "Saved locally";
  }

  function mutate(fn) {
    state.history.push(snapshot());
    state.future.length = 0;
    fn();
    localStorage.setItem("parin.autosave", JSON.stringify({title:state.title,root:state.root,theme:state.theme,layout:state.layout}));
    render();
  }

  function undo() {
    if (!state.history.length) return;
    state.future.push(snapshot());
    state.root = state.history.pop();
    if (!findNode(state.selected)) state.selected = state.root.id;
    render(); toast("Undo");
  }

  function redo() {
    if (!state.future.length) return;
    state.history.push(snapshot());
    state.root = state.future.pop();
    if (!findNode(state.selected)) state.selected = state.root.id;
    render(); toast("Redo");
  }

  function wrapText(text, maxChars=23) {
    const words = String(text || "").split(/\s+/);
    const lines=[]; let line="";
    for (const word of words) {
      const trial = line ? line + " " + word : word;
      if (trial.length > maxChars && line) { lines.push(line); line=word; } else line=trial;
      if (lines.length===2) break;
    }
    if (line && lines.length<2) lines.push(line);
    if (!lines.length) lines.push("");
    if (String(text).length > lines.join(" ").length) lines[lines.length-1] = lines[lines.length-1].slice(0, maxChars-1) + "…";
    return lines;
  }

  function layoutNodes(root) {
    const arr = flatten(root);
    const byId = new Map(arr.map(x=>[x.node.id,x]));
    const pos = new Map();
    const W=170,H=54,CX=800,CY=500;
    root.manualX ??= CX; root.manualY ??= CY;
    pos.set(root.id,{x:root.manualX,y:root.manualY,w:W,h:H});

    if (state.layout === "radial") {
      const children = root.children;
      const radius = Math.max(250, Math.min(390, 120 + children.length*42));
      children.forEach((c,i)=>{
        const a=(-Math.PI/2)+(Math.PI*2*i/Math.max(1,children.length));
        const x=c.manualX ?? (CX+Math.cos(a)*radius), y=c.manualY ?? (CY+Math.sin(a)*radius);
        pos.set(c.id,{x,y,w:W,h:H});
        if (c.children.length && !c.collapsed) {
          const spread=Math.min(1.1,0.55+Math.min(5,c.children.length)*0.1);
          c.children.forEach((g,j)=>{
            const aa=a-spread/2+(spread*j/Math.max(1,c.children.length-1||1));
            const rr=180;
            pos.set(g.id,{x:g.manualX ?? (x+Math.cos(aa)*rr),y:g.manualY ?? (y+Math.sin(aa)*rr),w:W,h:H});
          });
        }
      });
      // deeper levels: gently extend away from their nearest positioned ancestor
      arr.filter(x=>x.depth>=3).forEach(x=>{
        if (pos.has(x.node.id)) return;
        const p=pos.get(x.parent.id)||{x:CX,y:CY};
        const siblings=x.parent.children, idx=siblings.indexOf(x.node);
        const off=(idx-(siblings.length-1)/2)*78;
        const x2=x.node.manualX ?? (p.x + (p.x<CX ? 170 : -170));
        const y2=x.node.manualY ?? (p.y + off);
        pos.set(x.node.id,{x:x2,y:y2,w:W,h:H});
      });
    } else {
      const direction = state.layout==="left" ? -1 : 1;
      const vertical = state.layout==="down";
      const levels = new Map();
      arr.forEach(o => { if(!levels.has(o.depth)) levels.set(o.depth,[]); levels.get(o.depth).push(o); });
      levels.forEach((items,d)=>{
        items.forEach((o,i)=>{
          let x,y;
          if (vertical) { x=520+(i-(items.length-1)/2)*190; y=120+d*150; }
          else { x=CX+direction*d*220; y=110+i*105; }
          if (d===0){x=CX;y=CY;}
          pos.set(o.node.id,{x:o.node.manualX ?? x,y:o.node.manualY ?? y,w:W,h:H});
        });
      });
    }
    return {arr,pos};
  }

  function edgePath(a,b) {
    const dx=(b.x-a.x), dy=(b.y-a.y);
    const cx=a.x+dx*.5, cy=a.y+dy*.5;
    return `M ${a.x} ${a.y} C ${cx} ${a.y}, ${cx} ${b.y}, ${b.x} ${b.y}`;
  }

  function nodeGroup(item, p) {
    const n=item.node, lines=wrapText(n.label, n===state.root?25:22);
    const h=lines.length===1?54:68, w=n===state.root?205:178;
    const selected=n.id===state.selected;
    const pri = n.priority==="high" ? "#ff718b" : n.priority==="low" ? "#71809b" : n.color;
    let txt="";
    lines.forEach((line,i)=>{ txt += `<text x="${p.x-w/2+15}" y="${p.y-9+i*17}" class="node-text ${n===state.root?"root-text":""}">${esc(line)}</text>`; });
    const note = state.showNotes && n.note ? `<text x="${p.x-w/2+15}" y="${p.y+h/2+15}" class="node-note">${esc(wrapText(n.note,26)[0])}</text>`:"";
    const badge = n.priority!=="normal" ? `<circle cx="${p.x+w/2-12}" cy="${p.y-h/2+12}" r="4.5" fill="${pri}"/>`:"";
    return `<g class="mind-node ${selected?"selected":""}" data-id="${n.id}" tabindex="0">
      <rect x="${p.x-w/2}" y="${p.y-h/2}" width="${w}" height="${h}" rx="13" fill="${n===state.root?"url(#rootGrad)":"#141c31"}" stroke="${selected?"#b8b0ff":n.color}" stroke-width="${selected?2.2:1.1}" />
      <rect x="${p.x-w/2}" y="${p.y-h/2}" width="5" height="${h}" rx="3" fill="${n===state.root?"#fff":n.color}" opacity=".82"/>
      ${txt}${badge}${note}
      ${n.children.length?`<circle cx="${p.x+w/2+13}" cy="${p.y}" r="11" fill="#0c1325" stroke="${n.color}" stroke-width="1.2"/><text x="${p.x+w/2+13}" y="${p.y+4}" text-anchor="middle" class="plus-text">${n.collapsed?"+":"−"}</text>`:""}
    </g>`;
  }

  function render() {
    el("mapTitle").textContent=state.title;
    document.body.dataset.theme=state.theme;
    document.documentElement.lang=state.lang;
    document.documentElement.dir=LANGS[state.lang]?.dir||"ltr";
    const tr=T[state.lang]||T.en;
    $all("[data-i18n]").forEach(node=>{ const k=node.dataset.i18n; if(tr[k]) node.textContent=tr[k]; });
    el("zoomLabel").textContent=Math.round(state.zoom*100)+"%";
    el("canvasHint").classList.toggle("visible", flatten(state.root).length<=1);

    const svg=el("mindmapSvg");
    const {arr,pos}=layoutNodes(state.root);
    svg.setAttribute("viewBox","0 0 1600 1000");
    let defs=`<defs>
      <linearGradient id="rootGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7067e8"/><stop offset="1" stop-color="#a04fca"/></linearGradient>
      <filter id="shadow"><feDropShadow dx="0" dy="7" stdDeviation="8" flood-opacity=".25"/></filter>
    </defs><g transform="translate(${state.panX} ${state.panY}) scale(${state.zoom})">`;
    const edges=[];
    arr.forEach(o=>{
      if(!o.parent) return;
      const a=pos.get(o.parent.id), b=pos.get(o.node.id);
      if(!a||!b)return;
      edges.push(`<path d="${edgePath(a,b)}" fill="none" stroke="${o.node.color}" stroke-opacity=".55" stroke-width="${o.depth===1?3:2.1}" stroke-linecap="round"/>`);
    });
    const nodes=arr.map(o=>nodeGroup(o,pos.get(o.node.id))).join("");
    svg.innerHTML=defs+edges.join("")+nodes+"</g>";
    $all(".mind-node").forEach(g=>{
      g.addEventListener("pointerdown",onNodePointerDown);
      g.addEventListener("dblclick",()=>editNode(g.dataset.id));
      g.addEventListener("click",(ev)=>{ev.stopPropagation(); state.selected=g.dataset.id; render();});
    });
    updateInspector();
    updateCopilotContext();
    updateExportPreview();
    countStats();
  }

  function onNodePointerDown(ev) {
    const id=ev.currentTarget.dataset.id;
    state.selected=id;
    state.dragging={id,startX:ev.clientX,startY:ev.clientY,moved:false};
    ev.currentTarget.setPointerCapture?.(ev.pointerId);
  }

  function onCanvasPointerMove(ev){
    if(!state.dragging) return;
    const d=state.dragging;
    const n=findNode(d.id)?.node; if(!n)return;
    const dx=(ev.clientX-d.startX)/state.zoom, dy=(ev.clientY-d.startY)/state.zoom;
    if(Math.abs(dx)+Math.abs(dy)>3) d.moved=true;
    const layout=layoutNodes(state.root); const p=layout.pos.get(d.id);
    n.manualX=(p?.x||800)+dx; n.manualY=(p?.y||500)+dy;
    d.startX=ev.clientX; d.startY=ev.clientY;
    render();
  }

  function onCanvasPointerUp(){
    if(state.dragging?.moved) localStorage.setItem("parin.autosave", JSON.stringify({title:state.title,root:state.root,theme:state.theme,layout:state.layout}));
    state.dragging=null;
  }

  function addChild() {
    const hit=findNode(state.selected)||{node:state.root};
    mutate(()=>{ const child=makeNode("New idea",(flatten(hit.node).depth||0)+1); hit.node.children.push(child); hit.node.collapsed=false; state.selected=child.id; });
  }

  function addSibling() {
    const hit=findNode(state.selected);
    if(!hit || !hit.parent){ addChild(); return; }
    mutate(()=>{ const n=makeNode("New branch",0); const idx=hit.parent.children.findIndex(c=>c.id===hit.node.id); hit.parent.children.splice(idx+1,0,n); state.selected=n.id; });
  }

  function deleteSelected() {
    const hit=findNode(state.selected);
    if(!hit) return;
    if(!hit.parent){toast("The root node cannot be deleted.");return;}
    mutate(()=>{ hit.parent.children=hit.parent.children.filter(c=>c.id!==hit.node.id); state.selected=hit.parent.id; });
  }


  function setAllCollapsed(collapsed){
    if(!state.root)return;
    mutate(()=>{
      function walk(n){n.collapsed=Boolean(collapsed);n.children.forEach(walk);}
      walk(state.root);
    });
    toast(collapsed ? "All branches collapsed" : "All branches expanded");
  }

  function duplicateSelected(){
    const hit=findNode(state.selected);
    if(!hit||!hit.node)return;
    const copy=clone(hit.node);
    const remap=new Map();
    function rekey(n){
      const old=n.id; n.id=uid(); remap.set(old,n.id);
      n.manualX=null; n.manualY=null;
      n.children.forEach(rekey);
    }
    rekey(copy);
    mutate(()=>{
      if(hit.parent){
        const idx=hit.parent.children.findIndex(c=>c.id===hit.node.id);
        hit.parent.children.splice(idx+1,0,copy);
      }else{
        state.root.children.push(copy);
      }
      state.selected=copy.id;
    });
    toast("Branch duplicated");
  }

  function editNode(id) {
    const hit=findNode(id); if(!hit)return;
    const next=window.prompt("Node text",hit.node.label);
    if(next!==null && next.trim()) mutate(()=>{hit.node.label=next.trim();});
  }

  function updateInspector(){
    const hit=findNode(state.selected)||{node:state.root};
    state.selected=hit.node.id;
    const n=hit.node;
    el("inspectorTitle").textContent=n.label;
    el("nodeText").value=n.label;
    el("nodeNote").value=n.note||"";
    el("nodeColor").value=n.color||"#8b7cff";
    el("nodePriority").value=n.priority||"normal";
    el("collapseBtn").querySelector("span:last-child").textContent = n.collapsed ? (T[state.lang]?.expandNode||"Expand") : (T[state.lang]?.collapse||"Collapse");
  }

  function wireInspector(){
    el("nodeText").addEventListener("input",ev=>{const h=findNode(state.selected);if(h){h.node.label=ev.target.value;el("inspectorTitle").textContent=ev.target.value;markDirty();renderMapOnly();}});
    el("nodeText").addEventListener("change",()=>commitHistory());
    el("nodeNote").addEventListener("input",ev=>{const h=findNode(state.selected);if(h){h.node.note=ev.target.value;markDirty();renderMapOnly();}});
    el("nodeNote").addEventListener("change",()=>commitHistory());
    el("nodeColor").addEventListener("input",ev=>{const h=findNode(state.selected);if(h){h.node.color=ev.target.value;markDirty();renderMapOnly();}});
    el("nodeColor").addEventListener("change",()=>commitHistory());
    el("nodePriority").addEventListener("change",ev=>{const h=findNode(state.selected);if(h) mutate(()=>h.node.priority=ev.target.value);});
    el("collapseBtn").addEventListener("click",()=>{const h=findNode(state.selected);if(h) mutate(()=>h.node.collapsed=!h.node.collapsed);});
    el("deleteInspectorBtn").addEventListener("click",deleteSelected);
    $all("[data-ai-action]").forEach(b=>b.addEventListener("click",()=>{openModal("aiModal"); selectAITask(b.dataset.aiAction); }));
  }

  function markDirty(){el("saveState").textContent="Editing…";}

  function renderMapOnly(){
    const svg=el("mindmapSvg"); if(!svg)return;
    const {arr,pos}=layoutNodes(state.root);
    let defs=`<defs><linearGradient id="rootGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7067e8"/><stop offset="1" stop-color="#a04fca"/></linearGradient></defs><g transform="translate(${state.panX} ${state.panY}) scale(${state.zoom})">`;
    const edges=arr.filter(x=>x.parent).map(o=>{const a=pos.get(o.parent.id),b=pos.get(o.node.id);return `<path d="${edgePath(a,b)}" fill="none" stroke="${o.node.color}" stroke-opacity=".55" stroke-width="${o.depth===1?3:2.1}"/>`;}).join("");
    svg.innerHTML=defs+edges+arr.map(o=>nodeGroup(o,pos.get(o.node.id))).join("")+"</g>";
    $all(".mind-node").forEach(g=>{g.addEventListener("pointerdown",onNodePointerDown);g.addEventListener("dblclick",()=>editNode(g.dataset.id));g.addEventListener("click",(ev)=>{ev.stopPropagation();state.selected=g.dataset.id;render();});});
    countStats(); updateInspector();
  }

  function zoomBy(delta){
    state.zoom=Math.max(.45,Math.min(2.5,state.zoom+delta));
    renderMapOnly(); el("zoomLabel").textContent=Math.round(state.zoom*100)+"%";
  }
  function fitMap(){
    state.zoom=.82; state.panX=0; state.panY=0; render(); setTimeout(()=>fitByBounds(),0);
  }
  function fitByBounds(){
    const {pos}=layoutNodes(state.root); const vals=[...pos.values()]; if(!vals.length)return;
    const minX=Math.min(...vals.map(v=>v.x-100)),maxX=Math.max(...vals.map(v=>v.x+100));
    const minY=Math.min(...vals.map(v=>v.y-50)),maxY=Math.max(...vals.map(v=>v.y+50));
    const cw=el("canvas").clientWidth, ch=el("canvas").clientHeight-40;
    const scale=Math.max(.5,Math.min(1.3,Math.min(cw/(maxX-minX+120),ch/(maxY-minY+100))));
    state.zoom=scale;
    state.panX=(800-(minX+maxX)/2)*(state.zoom);
    state.panY=(500-(minY+maxY)/2)*(state.zoom);
    renderMapOnly();
  }

  function setLanguage(k){
    state.lang=k; localStorage.setItem("parin.lang",k);
    el("languageSelect").value=k; el("settingsLanguage").value=k; render();
  }

  function populateLanguages(){
    [el("languageSelect"),el("settingsLanguage")].forEach(select=>{
      select.innerHTML="";
      Object.entries(LANGS).forEach(([k,v])=>{const o=document.createElement("option");o.value=k;o.textContent=v.label;select.appendChild(o);});
      select.value=state.lang;
    });
  }

  function setTheme(k){state.theme=k;localStorage.setItem("parin.theme",k);render();}
  function setLayout(k){state.layout=k;localStorage.setItem("parin.layout",k);render();}

  function toast(msg){
    const t=el("toast"); t.textContent=msg; t.classList.remove("hidden"); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.add("hidden"),2200);
  }

  function openModal(id){el("overlay").classList.remove("hidden");el(id).classList.remove("hidden");}
  function closeModal(id){el(id).classList.add("hidden"); if($all(".modal:not(.hidden)").length===0)el("overlay").classList.add("hidden");}
  function setAIEnabled(enabled){
    state.aiEnabled=Boolean(enabled);
    localStorage.setItem("parin.aiEnabled",String(state.aiEnabled));
    document.body.classList.toggle("ai-disabled",!state.aiEnabled);
    const status=el("copilotStatus");
    if(status){
      status.classList.toggle("off",!state.aiEnabled);
      status.innerHTML='<span class="status-dot"></span><span>'+ (state.aiEnabled ? "AI is enabled" : "AI is disabled") +'</span>';
    }
    const toggle=el("aiToggleBtn");
    if(toggle){toggle.textContent=state.aiEnabled?"●":"○";toggle.title=state.aiEnabled?"Disable AI":"Enable AI";}
    $all("[data-ai-action]").forEach(b=>b.disabled=!state.aiEnabled);
    ["agentPlanBtn","agentMode","copilotSend"].forEach(id=>{const node=el(id);if(node)node.disabled=!state.aiEnabled;});
  }
  function openCopilot(){
    el("copilotPanel").classList.remove("hidden");
    updateCopilotContext();
    setAIEnabled(state.aiEnabled);
  }
  function closeCopilot(){el("copilotPanel").classList.add("hidden");}
  function updateCopilotContext(){
    const n=findNode(state.selected)?.node||state.root;
    const ctx=el("copilotContext");
    if(ctx) ctx.textContent=n?.label||"Current map";
  }
  function nodeCatalog(){
    return flatten(state.root).map((item)=>({
      id:item.node.id,
      parentId:item.parent?.id||null,
      depth:item.depth,
      label:item.node.label,
      note:item.node.note||"",
      children:item.node.children.length
    }));
  }

  function agentActionLabel(a){
    const map={
      add_child:"Add child",
      add_sibling:"Add sibling",
      edit_node:"Edit node",
      delete_node:"Delete node",
      move_node:"Move node",
      set_style:"Change style",
      collapse_node:"Collapse node",
      expand_node:"Expand node"
    };
    return map[a?.op]||String(a?.op||"Action");
  }

  function validateAgentAction(a){
    if(!a||typeof a!=="object"||typeof a.op!=="string") return {ok:false,error:"Invalid action"};
    const allowed=new Set(["add_child","add_sibling","edit_node","delete_node","move_node","set_style","collapse_node","expand_node"]);
    if(!allowed.has(a.op)) return {ok:false,error:"Unsupported action: "+a.op};
    const target=a.targetId?findNode(a.targetId):null;
    if(["edit_node","delete_node","move_node","set_style","collapse_node","expand_node"].includes(a.op) && !target) return {ok:false,error:"Target node not found"};
    if(a.op==="delete_node" && !target.parent) return {ok:false,error:"Root cannot be deleted"};
    if(a.op==="move_node"){
      const np=findNode(a.newParentId);
      if(!np) return {ok:false,error:"New parent not found"};
      if(np.node.id===a.targetId || isDescendant(target.node,np.node)) return {ok:false,error:"Cannot move a node inside itself"};
    }
    if(["add_child","add_sibling"].includes(a.op) && !String(a.label||"").trim()) return {ok:false,error:"New node needs a label"};
    if(a.op==="set_style" && a.color && !/^#[0-9a-f]{6}$/i.test(a.color)) return {ok:false,error:"Invalid color"};
    return {ok:true};
  }

  function isDescendant(rootCandidate,node){
    if(!rootCandidate) return false;
    if(rootCandidate===node) return true;
    return rootCandidate.children.some(c=>isDescendant(c,node));
  }

  function executeAgentAction(a){
    const check=validateAgentAction(a);
    if(!check.ok) throw new Error(check.error);
    if(a.op==="add_child"){
      const parent=findNode(a.parentId||state.selected)?.node||state.root;
      const n=makeNode(String(a.label).trim(),flatten(parent).length+1);
      n.note=String(a.note||"");
      if(a.color)n.color=a.color;
      if(a.priority)n.priority=a.priority;
      parent.children.push(n); parent.collapsed=false; state.selected=n.id; return "Added child: "+n.label;
    }
    if(a.op==="add_sibling"){
      const hit=findNode(a.targetId); const parent=hit.parent;
      const n=makeNode(String(a.label).trim(),0);
      n.note=String(a.note||""); if(a.color)n.color=a.color; if(a.priority)n.priority=a.priority;
      const idx=parent.children.findIndex(c=>c.id===hit.node.id); parent.children.splice(idx+1,0,n); state.selected=n.id; return "Added sibling: "+n.label;
    }
    if(a.op==="edit_node"){
      const n=findNode(a.targetId).node; if(a.label!=null)n.label=String(a.label); if(a.note!=null)n.note=String(a.note); state.selected=n.id; return "Edited: "+n.label;
    }
    if(a.op==="delete_node"){
      const hit=findNode(a.targetId); hit.parent.children=hit.parent.children.filter(c=>c.id!==hit.node.id); state.selected=hit.parent.id; return "Deleted: "+hit.node.label;
    }
    if(a.op==="move_node"){
      const hit=findNode(a.targetId), np=findNode(a.newParentId);
      hit.parent.children=hit.parent.children.filter(c=>c.id!==hit.node.id);
      np.node.children.push(hit.node); np.node.collapsed=false; state.selected=hit.node.id; return "Moved: "+hit.node.label;
    }
    if(a.op==="set_style"){
      const n=findNode(a.targetId).node; if(a.color)n.color=a.color; if(a.priority)n.priority=a.priority; return "Styled: "+n.label;
    }
    if(a.op==="collapse_node"){
      const n=findNode(a.targetId).node;n.collapsed=true;return "Collapsed: "+n.label;
    }
    if(a.op==="expand_node"){
      const n=findNode(a.targetId).node;n.collapsed=false;return "Expanded: "+n.label;
    }
    throw new Error("Unsupported action");
  }

  function renderAgentPlan(){
    const panel=el("agentPlan"), list=el("agentActions");
    if(!panel||!list)return;
    const plan=state.agentPlan||[];
    panel.classList.toggle("hidden",plan.length===0);
    el("agentPlanCount").textContent=plan.length+" action"+(plan.length===1?"":"s");
    list.innerHTML=plan.map((a,i)=>`<label class="agent-action">
      <input type="checkbox" data-agent-index="${i}" ${a.approved?"":"checked"}>
      <span><strong>${esc(agentActionLabel(a))}: ${esc(a.label||a.targetLabel||a.targetId||"")}</strong><small>${esc(a.description||a.reason||"Review before applying.")}</small></span>
    </label>`).join("");
  }

  function clearAgentPlan(){
    state.agentPlan=[]; state.agentRunning=false; renderAgentPlan();
    const stop=el("agentStopBtn"); if(stop)stop.disabled=true;
  }

  function getCheckedAgentIndexes(){
    return $all("[data-agent-index]").filter(x=>x.checked).map(x=>Number(x.dataset.agentIndex));
  }

  function applyApprovedAgentActions(mode){
    const indexes=getCheckedAgentIndexes();
    if(!indexes.length){toast("Select at least one proposed action.");return;}
    const ordered = mode==="each" ? [indexes[0]] : indexes;
    const actions=ordered.map(i=>state.agentPlan[i]).filter(Boolean);
    const before=snapshot();
    const results=[];
    state.agentRunning=true;
    el("agentStopBtn").disabled=false;
    for(const action of actions){
      if(!state.agentRunning) break;
      try{results.push("✓ "+executeAgentAction(action)); action.approved=true;}catch(e){results.push("✕ "+(e.message||"Action failed"));}
    }
    if(results.some(x=>x.startsWith("✓"))){
      state.history.push(before); state.future.length=0;
      localStorage.setItem("parin.autosave",JSON.stringify({title:state.title,root:state.root,theme:state.theme,layout:state.layout}));
    }
    state.agentRunning=false; el("agentStopBtn").disabled=true;
    appendCopilot("assistant",results.join("\n")||"No actions applied.");
    state.agentPlan = state.agentPlan.filter(a=>!a.approved);
    render();
    renderAgentPlan();
  }

  async function proposeAgentPlan(userRequest){
    if(!state.aiEnabled){toast("AI is disabled.");return;}
    state.agentRunning=true;
    el("agentStopBtn").disabled=false;
    const selected=findNode(state.selected)?.node;
    try{
      const result=await window.parinAPI.aiAssist({
        local:el("aiProvider").value==="local",
        endpoint:el("aiEndpoint").value.trim(),
        apiKey:el("aiKey").value.trim(),
        model:el("aiModel").value.trim()||"parin-gemma3-assistant",
        query:String(userRequest||"Review the current map and suggest safe improvements."),
        selectedId:state.selected,
        selectedLabel:selected?.label||"",
        language:LANGS[state.lang]?.label||"English",
        context:semanticAssistantContext(),
        forcePlan:true
      });
      const raw=String(result?.data?.choices?.[0]?.message?.content||result?.data?.output_text||result?.data?.response||"");
      const parsed=extractJson(raw);
      if(parsed?.type!=="agent_plan"||!Array.isArray(parsed.actions)) throw new Error("No valid supervised plan returned.");
      state.agentPlan=parsed.actions.slice(0,30).map(a=>({...a,description:a.reason||agentActionLabel(a)}))
        .filter(a=>validateAgentAction(a).ok);
      renderAgentPlan();
      appendCopilot("assistant","Supervised plan ready. Review each action before applying it.");
    }catch(e){
      appendCopilot("assistant","Planning error: "+(e.message||"request failed"));
    }finally{
      state.agentRunning=false;
      el("agentStopBtn").disabled=true;
    }
  }

  function appendCopilot(role,text){
    const chat=el("copilotChat");
    if(!chat) return;
    const msg=document.createElement("div");
    msg.className="copilot-msg "+role;
    msg.textContent=text;
    chat.appendChild(msg);
    chat.scrollTop=chat.scrollHeight;
  }

  function showTab(tab){
    if(tab==="ai") openModal("aiModal");
    if(tab==="export") openModal("exportModal");
  }

  function selectAITask(id){
    state.aiTask=id;
    $all(".ai-task").forEach(x=>x.classList.toggle("active",x.dataset.id===id));
    const defaults={
      map:"Create a complete, professional mind map about: ",
      outline:"Convert the supplied notes/text into a hierarchical mind map. Preserve important details and merge duplicates.",
      expand:"Expand the selected node with 4–7 useful child branches.",
      subtopics:"Find 5–10 missing or underdeveloped subtopics for the selected branch.",
      rewrite:"Rewrite the current map labels to be concise, specific, and action-oriented.",
      simplify:"Simplify complex concepts without losing meaning. Make each branch easier to understand.",
      summary:"Summarize the current map for a busy reader. Highlight structure, key ideas, risks, and next actions.",
      executive:"Create a one-page executive brief from the map with priorities, decisions, risks, and next actions.",
      brainstorm:"Brainstorm non-obvious angles, opportunities, constraints, risks, and connections.",
      creative:"Generate creative combinations, novel angles, metaphors, and unconventional ideas linked to the map.",
      swot:"Build a SWOT analysis from the current map.",
      risk:"Identify risks, causes, likelihood/impact considerations, warning signals, and mitigations.",
      decision:"Build a decision tree for the alternatives in this map. Include criteria, branches, and conditions.",
      proscons:"Create a structured pros/cons analysis for each major alternative.",
      compare:"Compare the main alternatives represented in the map with criteria and trade-offs.",
      plan:"Turn the current map into an actionable plan with phases, tasks, dependencies, and milestones.",
      roadmap:"Turn the map into a roadmap with phases, milestones, deliverables, dependencies, and checkpoints.",
      study:"Turn the current map into a study plan with concepts, recall questions, practice, and review intervals.",
      quiz:"Generate a graded quiz from this map: easy, medium, and hard questions with answers.",
      flashcards:"Create active-recall flashcards from the map. Use concise question/answer pairs.",
      questions:"Generate high-value research questions and unknowns that would improve this map.",
      fivew:"Apply a 5W1H analysis to the current map.",
      meeting:"Turn the map into a professional meeting structure: agenda, decisions, actions, owners.",
      presentation:"Turn the map into a presentation outline with a logical slide sequence and speaker notes.",
      email:"Draft a professional email/memo based on the map. Preserve facts and clearly separate assumptions.",
      timeline:"Extract a chronological timeline, milestones, dependencies, and sequence from the map.",
      dependencies:"Analyze dependencies between branches and identify blockers, prerequisites, and downstream effects.",
      gaps:"Find missing knowledge, unanswered questions, weak assumptions, and structural gaps in the map.",
      sources:"Create a research/source plan: what claims need verification, what evidence is needed, and what type of source fits each.",
      translate:"Translate the map content while preserving hierarchy, meaning, and node relationships.",
      tone:"Rewrite the map in the requested style: formal, concise, technical, friendly, persuasive, or academic.",
      tags:"Generate concise tags/keywords/categories for each major branch.",
      prioritize:"Prioritize branches using impact, urgency, effort, dependencies, and strategic importance.",
      metrics:"Define measurable success metrics/KPIs for the major branches and actions in the map.",
      checklist:"Turn the map into practical checklists grouped by branch.",
      retro:"Run a project retrospective: wins, problems, root causes, lessons, and improvements.",
      scenario:"Create what-if scenarios and show how the map changes under each scenario.",
      persona:"Build personas from the map: goals, needs, pain points, behaviors, and objections.",
      rootcause:"Perform root-cause analysis using 5 Whys and cause-effect chains.",
      mindset:"Challenge assumptions and produce credible counter-arguments, edge cases, and failure modes.",
okr:"Create a practical OKR plan: objectives, measurable key results, initiatives, owners, and review cadence.",
      smart:"Rewrite the map as SMART goals with specific, measurable, achievable, relevant, time-bound outcomes.",
      eisenhower:"Classify actionable items into an Eisenhower matrix: urgent/important, urgent/not important, not urgent/important, neither.",
      pestel:"Perform a PESTEL analysis and connect external factors back to the current map.",
      raci:"Build a RACI responsibility map for the major workstreams.",
      userstories:"Convert the major branches into user stories with concise acceptance-ready outcomes.",
      requirements:"Extract functional and non-functional requirements, constraints, assumptions, and open questions.",
      acceptance:"Generate clear acceptance criteria and definition-of-done checks for the major deliverables.",
      productbrief:"Create a concise product brief covering problem, audience, value proposition, scope, risks, and next steps.",
      featurematrix:"Create a feature comparison matrix with value, effort, dependency, and priority considerations.",
      testcases:"Generate QA test cases, edge cases, expected results, and traceability to the map.",
      bugtriage:"Turn the map into a bug-triage structure with severity, impact, reproduction needs, owners, and next actions.",
      sop:"Turn the map into a repeatable SOP with prerequisites, steps, decision points, exceptions, and verification.",
      faq:"Generate a useful FAQ with clear questions and answers grounded only in the map.",
      glossary:"Build a glossary of important terms, concise definitions, and examples from the map.",
      lesson:"Create a lesson plan with objectives, sequence, activities, practice, and assessment.",
      thesis:"Turn the map into an academic thesis outline with argument flow, evidence needs, and chapter structure.",
      debate:"Build a debate map with claims, supporting evidence, counterclaims, rebuttals, and unresolved questions.",
      counterexamples:"Stress-test the map with credible counterexamples, edge cases, and situations where the assumptions fail.",
      explain:"Explain the selected concept in plain language, then provide a more technical explanation and examples.",
      audience:"Adapt the map for the requested audience while preserving factual meaning and structure.",
      assumptions:"Audit the map for hidden assumptions, unsupported leaps, dependencies, and evidence gaps.",
      qa:"Review the map for clarity, completeness, consistency, duplicates, ambiguity, and missing decisions.",
      cleanup:"Propose a cleanup pass that merges duplicates, improves weak labels, reduces clutter, and preserves meaning.",
      merge:"Identify overlapping branches and propose a cleaner merged structure without deleting information silently.",
      nodeSummary:"Summarize the selected branch: purpose, key points, open questions, risks, and next actions.",
      branchPlan:"Turn the selected branch into an execution plan with tasks, dependencies, checkpoints, and done criteria.",
      naming:"Generate concise names/titles for the major branches and explain the naming pattern.",
      promptRefine:"Rewrite the user's intended AI request into a clearer, more precise prompt with explicit output requirements."
    };
    el("aiPrompt").value=defaults[id]||"";
    el("aiOutput").classList.add("hidden");
  }

  function mapAsOutline(){
    const lines=[];
    function walk(n,d=0){lines.push("  ".repeat(d)+"- "+n.label+(n.note?" — "+n.note:"")); n.children.forEach(c=>walk(c,d+1));}
    walk(state.root); return lines.join("\n");
  }

  function buildAIPrompt(taskId,userPrompt){
    const context=mapAsOutline();
    const lang=LANGS[state.lang]?.label||"English";
    if(taskId==="map"){
      return `You are a professional mind-mapping architect. Respond only with valid JSON matching this schema:
{"title":"string","root":{"label":"string","note":"string","children":[{"label":"string","note":"string","children":[...]}]}}
Create a deep but coherent mind map. Keep labels concise. Use 4-7 top-level branches and 2-5 children per branch where useful. Interface language: ${lang}.
User request: ${userPrompt}\n`;
    }
    if(taskId==="expand"){
      return `You are a mind-map expert. Based on the existing map below, expand ONLY the selected concept. Return ONLY a JSON array of objects {"label":"string","note":"string","children":[]} with 4-7 useful children. Interface language: ${lang}.
Selected node: ${findNode(state.selected)?.node?.label||""}
Map:
${context}
User instruction: ${userPrompt}`;
    }
    if(taskId==="rewrite"){
      return `Rewrite every node label in this map to be shorter, more specific, and professional while preserving meaning. Return a Markdown outline only. Interface language: ${lang}.
${context}
Instruction: ${userPrompt}`;
    }
    return `You are an expert knowledge-structuring assistant. Analyze the mind map below and complete the requested task. Produce clear sections and practical output. Interface language: ${lang}.
Task: ${userPrompt}
Existing map:
${context}`;
  }

  function semanticAssistantContext(){
    return flatten(state.root).map(({node,parent})=>({
      id:node.id,
      label:node.label,
      note:node.note||"",
      parentLabel:parent?.label||""
    }));
  }

  async function runCopilot(){
    if(!state.aiEnabled){toast("AI is disabled.");return;}
    const input=el("copilotInput");
    const textIn=input.value.trim();
    if(!textIn)return;

    appendCopilot("user",textIn);
    input.value="";

    try{
      const selected=findNode(state.selected)?.node;
      const result=await window.parinAPI.aiAssist({
        local:el("aiProvider").value==="local",
        endpoint:el("aiEndpoint").value.trim(),
        apiKey:el("aiKey").value.trim(),
        model:el("aiModel").value.trim()||"parin-gemma3-assistant",
        query:textIn,
        selectedId:state.selected,
        selectedLabel:selected?.label||"",
        language:LANGS[state.lang]?.label||"English",
        context:semanticAssistantContext()
      });
      const data=result?.data||result;
      const answer=String(data?.choices?.[0]?.message?.content||data?.output_text||data?.response||JSON.stringify(data,null,2));
      appendCopilot("assistant",answer);

      try{
        const parsed=extractJson(answer);
        if(parsed?.type==="agent_plan"&&Array.isArray(parsed.actions)){
          state.agentPlan=parsed.actions.slice(0,30).map(a=>({...a,description:a.reason||agentActionLabel(a)}))
            .filter(a=>validateAgentAction(a).ok);
          renderAgentPlan();
          appendCopilot("assistant","Agent plan prepared. Nothing has been changed; review and approve the proposed actions below.");
        }
      }catch{}

      if(Array.isArray(result?.context)&&result.context.length){
        const labels=result.context.slice(0,4).map(x=>x.label).filter(Boolean);
        el("copilotContext").textContent=labels.length ? "Semantic context: "+labels.join(" • ") : "Semantic context ready";
      }
    }catch(e){
      appendCopilot("assistant","Assistant error: "+(e.message||"request failed"));
    }
  }


  async function runAI(){
    const endpoint=el("aiEndpoint").value.trim();
    const apiKey=el("aiKey").value.trim();
    const model=el("aiModel").value.trim()||"parin-gemma3-assistant";
    if(!endpoint){toast("Set an AI endpoint first.");return;}
    const prompt=buildAIPrompt(state.aiTask,el("aiPrompt").value.trim());
    const btn=el("runAIBtn"); btn.disabled=true; btn.style.opacity=".6"; btn.querySelector("span:last-child").textContent="Thinking…";
    try{
      const body={model,messages:[
        {role:"system",content:"You are the Parin Copilot engine. Be concise, structural, task-oriented, and useful. Treat the map as the workspace. Never invent sources or filler."},
        {role:"user",content:prompt}
      ],temperature:0.35};
      const data=await window.parinAPI.aiRequest({endpoint,apiKey,local:el("aiProvider").value==="local",body});
      const text=data?.choices?.[0]?.message?.content || data?.output_text || data?.response || JSON.stringify(data,null,2);
      state.aiRaw=String(text);
      el("aiResultText").textContent=state.aiRaw;
      el("aiOutput").classList.remove("hidden");
      toast("AI result ready");
    }catch(e){toast("AI error: "+(e.message||"request failed")); el("aiResultText").textContent=e.message||String(e); el("aiOutput").classList.remove("hidden");}
    finally{btn.disabled=false;btn.style.opacity="";btn.querySelector("span:last-child").textContent=T[state.lang]?.runAI||"Run AI";}
  }

  function extractJson(raw){
    const clean=String(raw).replace(/\`\`\`json/gi,"").replace(/\`\`\`/g,"").trim();
    const start=Math.min(...[clean.indexOf("{"),clean.indexOf("[")].filter(x=>x>=0));
    const end=Math.max(clean.lastIndexOf("}"),clean.lastIndexOf("]"));
    if(start<0||end<0) throw new Error("No JSON object/array found.");
    return JSON.parse(clean.slice(start,end+1));
  }

  function jsonToNode(obj,depth=0){
    const n=makeNode(String(obj?.label||obj?.title||"Idea"),depth);
    n.note=String(obj?.note||obj?.description||"");
    n.children=Array.isArray(obj?.children)?obj.children.map(c=>jsonToNode(c,depth+1)):[];
    return n;
  }

  function applyAIResult(){
    if(!state.aiRaw){return;}
    try{
      const parsed=extractJson(state.aiRaw);
      mutate(()=>{
        if(state.aiTask==="map" && parsed?.root){
          state.title=String(parsed.title||"AI Mind Map");
          state.root=jsonToNode(parsed.root,0); state.selected=state.root.id;
        } else if(Array.isArray(parsed)){
          const hit=findNode(state.selected)||{node:state.root};
          hit.node.children.push(...parsed.map(x=>jsonToNode(x,1))); hit.node.collapsed=false;
        }
      });
      closeModal("aiModal"); toast("AI structure applied");
    }catch{
      const lines=state.aiRaw.split(/\r?\n/).map(x=>x.replace(/^\s*[-*•]\s*/,"").trim()).filter(Boolean).slice(0,12);
      if(lines.length) mutate(()=>{const h=findNode(state.selected)||{node:state.root};lines.forEach(x=>h.node.children.push(makeNode(x,1)));h.node.collapsed=false;}); 
      closeModal("aiModal"); toast("AI text converted to branches");
    }
  }

  function toMarkdown(){
    const lines=["# "+state.title,""];
    function walk(n,d=0){lines.push("#".repeat(Math.min(6,d+2))+" "+n.label); if(n.note)lines.push("\n"+n.note+"\n"); n.children.forEach(c=>walk(c,d+1));}
    walk(state.root); return lines.join("\n");
  }

  function createExportSvg(background=true){
    const oldNotes=state.showNotes; state.showNotes=el("pdfLegend").checked;
    const {arr,pos}=layoutNodes(state.root);
    const width=1600,height=1000;
    const edge=arr.filter(x=>x.parent).map(o=>{const a=pos.get(o.parent.id),b=pos.get(o.node.id);return `<path d="${edgePath(a,b)}" fill="none" stroke="${o.node.color}" stroke-width="${o.depth===1?4:2.4}" stroke-opacity=".6"/>`;}).join("");
    const nodes=arr.map(o=>nodeGroup(o,pos.get(o.node.id))).join("");
    const title=el("pdfTitle").checked?`<text x="70" y="62" font-family="Segoe UI,Arial,sans-serif" font-size="30" font-weight="700" fill="${state.theme==="paper"?"#172033":"#eef2ff"}">${esc(state.title)}</text>`:"";
    const bgFill=state.theme==="paper"?"#eef1f6":"#080c18";
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs><linearGradient id="rootGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7067e8"/><stop offset="1" stop-color="#a04fca"/></linearGradient></defs>
      ${background?`<rect width="100%" height="100%" fill="${bgFill}"/>`:""}${title}<g>${edge}${nodes}</g>
    </svg>`;
    state.showNotes=oldNotes; return svg;
  }

  function updateExportPreview(){
    const preview=el("exportPreview"); if(!preview)return;
    preview.innerHTML=`<div class="preview-sheet"><div class="preview-title">${esc(state.title)}</div><div class="preview-graphic">${createExportSvg(el("pdfBackground")?.checked!==false).replace("<svg","<svg style='max-width:100%;max-height:100%;width:100%;height:auto'")}</div></div>`;
    const info=el("exportInfo"); if(info) info.textContent = state.pdfTab==="pdf" ? "PDF: vector mind map • selectable text • print-ready" : "Choose a format tab to export.";
  }

  function buildPdfHtml(){
    const size=el("pdfSize").value, orient=el("pdfOrientation").value, bg=el("pdfBackground").checked;
    const footer=el("pdfFooter").checked, quality=el("pdfQuality").value;
    const svg=createExportSvg(bg);
    const margin=el("pdfMargin").value==="small" ? ".15in" : el("pdfMargin").value==="wide" ? ".55in" : ".3in";
    return `<!doctype html><html><head><meta charset="utf-8"><style>
      @page{size:${size} ${orient};margin:${margin}}
      html,body{margin:0;background:${bg?"transparent":"#fff"};font-family:"Segoe UI",Tahoma,Arial,sans-serif}
      .page{width:100%;min-height:100vh;display:flex;flex-direction:column}
      .art{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden}
      .art svg{width:100%;height:auto;max-height:92vh}
      .footer{font-size:9pt;color:#717b90;text-align:center;padding:8px 0 2px}
      ${quality==="presentation"?".art svg{image-rendering:auto}":""}
    </style></head><body><div class="page"><div class="art">${svg}</div>${footer?`<div class="footer">Parin MindMap • ${new Date().toLocaleDateString()}</div>`:""}</div></body></html>`;
  }

  async function exportNow(){
    if(state.pdfTab==="pdf"){
      const r=await window.parinAPI.exportPDF({title:state.title,html:buildPdfHtml(),printBackground:el("pdfBackground").checked,landscape:el("pdfOrientation").value==="landscape",pageSize:el("pdfSize").value,margins:{top:.2,bottom:.2,left:.2,right:.2}});
      if(!r.canceled)toast("PDF exported");
    }else if(state.pdfTab==="json"){
      const r=await window.parinAPI.saveMindMap({title:state.title,data:{version:1,title:state.title,root:state.root,layout:state.layout,theme:state.theme}});
      if(!r.canceled)toast("Map saved");
    }else if(state.pdfTab==="markdown"){
      const r=await window.parinAPI.saveText({defaultName:state.title,extension:"md",filterName:"Markdown",content:toMarkdown(),dialogTitle:"Export Markdown"});
      if(!r.canceled)toast("Markdown exported");
    }else if(state.pdfTab==="svg"){
      const r=await window.parinAPI.saveText({defaultName:state.title,extension:"svg",filterName:"SVG",content:createExportSvg(el("pdfBackground").checked),dialogTitle:"Export SVG"});
      if(!r.canceled)toast("SVG exported");
    }
  }

  async function saveFile(){
    const r=await window.parinAPI.saveMindMap({title:state.title,data:{version:1,title:state.title,root:state.root,layout:state.layout,theme:state.theme}});
    if(!r.canceled){el("saveState").textContent="Saved";toast("Saved to file");}
  }

  async function openFile(){
    try{
      const r=await window.parinAPI.openMindMap(); if(r.canceled)return;
      if(!r.data?.root)throw new Error("Invalid map file");
      state.title=r.data.title||"Untitled map"; state.root=r.data.root; state.layout=r.data.layout||state.layout; state.theme=r.data.theme||state.theme;
      state.selected=state.root.id; state.history=[];state.future=[]; render();toast("Map opened");
    }catch(e){toast("Could not open map: "+e.message);}
  }

  function newMap(){
    state.title="Untitled map"; state.root=makeNode("Your idea"); state.selected=state.root.id; state.history=[];state.future=[]; render(); toast("New map created");
  }

  function loadAutosave(){
    try{
      const raw=JSON.parse(localStorage.getItem("parin.autosave")||"null");
      if(raw?.root){state.title=raw.title||state.title;state.root=raw.root;state.layout=raw.layout||state.layout;state.theme=raw.theme||state.theme;}
      else state.root=defaultMap();
    }catch{state.root=defaultMap();}
    state.selected=state.root.id;
  }

  function loadSettings(){
    const s=JSON.parse(localStorage.getItem("parin.ai")||"null")||{
      provider:"local",model:"parin-gemma3-assistant",endpoint:"http://127.0.0.1:8080/v1/chat/completions",key:""
    };
    el("aiProvider").value=s.provider;el("aiModel").value=s.model;el("aiEndpoint").value=s.endpoint;el("aiKey").value=s.key;
    el("settingsProvider").value=s.provider;el("settingsModel").value=s.model;el("settingsEndpoint").value=s.endpoint;el("settingsKey").value=s.key;
    el("themeSelect").value=state.theme;el("layoutSelect").value=state.layout; if(el("settingsAIEnabled")) el("settingsAIEnabled").checked=state.aiEnabled;
  }

  function saveSettings(){
    const s={provider:el("settingsProvider").value,model:el("settingsModel").value.trim()||"parin-gemma3-assistant",endpoint:el("settingsEndpoint").value.trim(),key:el("settingsKey").value};
    localStorage.setItem("parin.ai",JSON.stringify(s));
    el("aiProvider").value=s.provider;el("aiModel").value=s.model;el("aiEndpoint").value=s.endpoint;el("aiKey").value=s.key;
    setTheme(el("themeSelect").value);setLayout(el("layoutSelect").value);setLanguage(el("settingsLanguage").value);setAIEnabled(el("settingsAIEnabled").checked);
    closeModal("settingsModal");toast("Settings saved");
  }

  function setupAIList(){
    const wrap=el("aiTaskList");
    wrap.innerHTML=AI_TASKS.map(t=>`<button class="ai-task ${t.id==="map"?"active":""}" data-id="${t.id}"><strong>${t.icon} ${t.title}</strong><small>${t.hint}</small></button>`).join("");
    $all(".ai-task").forEach(b=>b.addEventListener("click",()=>selectAITask(b.dataset.id)));
  }

  function setupEvents(){
    el("newMapBtn").addEventListener("click",newMap);el("openBtn").addEventListener("click",openFile);el("saveBtn").addEventListener("click",saveFile);
    el("undoBtn").addEventListener("click",undo);el("redoBtn").addEventListener("click",redo);el("addChildBtn").addEventListener("click",addChild);
    el("addSiblingBtn").addEventListener("click",addSibling);el("deleteNodeBtn").addEventListener("click",deleteSelected);el("focusBtn").addEventListener("click",fitMap);
    el("collapseAllBtn").addEventListener("click",()=>setAllCollapsed(true));el("expandAllBtn").addEventListener("click",()=>setAllCollapsed(false));el("duplicateNodeBtn").addEventListener("click",duplicateSelected);
    el("fitBtn").addEventListener("click",fitMap);el("zoomInBtn").addEventListener("click",()=>zoomBy(.1));el("zoomOutBtn").addEventListener("click",()=>zoomBy(-.1));
    el("aiTopBtn").addEventListener("click",openCopilot);
    el("closeCopilot").addEventListener("click",closeCopilot);
    el("aiToggleBtn").addEventListener("click",()=>setAIEnabled(!state.aiEnabled));
    el("copilotSend").addEventListener("click",runCopilot);
    el("copilotInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();runCopilot();}});
    $all("[data-copilot-task]").forEach(b=>b.addEventListener("click",()=>{
      const prompts={map:"Build a complete mind map from my current topic.",expand:"Expand the selected node with useful branches.",gaps:"Find knowledge gaps and missing branches.",plan:"Turn this map into an actionable plan.",summary:"Summarize my map and list next actions.",swot:"Run a SWOT analysis of my map.",study:"Create a study plan from my map.",roadmap:"Create a roadmap with phases and milestones.",requirements:"Extract clear functional and non-functional requirements.",okr:"Create useful OKRs from my map."};
      el("copilotInput").value=prompts[b.dataset.copilotTask]||"";
      el("copilotInput").focus();
    }));
    el("agentMode").value=state.agentMode;
    el("agentMode").addEventListener("change",e=>{
      state.agentMode=e.target.value;
      localStorage.setItem("parin.agentMode",state.agentMode);
    });
    el("agentPlanBtn").addEventListener("click",()=>proposeAgentPlan(el("copilotInput").value.trim()||"Review the current map and suggest safe improvements."));
    el("agentStopBtn").addEventListener("click",()=>{state.agentRunning=false;el("agentStopBtn").disabled=true;toast("Agent stopped");});
    el("clearAgentPlan").addEventListener("click",clearAgentPlan);
    el("rejectAgentBtn").addEventListener("click",()=>{clearAgentPlan();toast("Agent plan rejected");});
    el("approveSelectedBtn").addEventListener("click",()=>applyApprovedAgentActions(state.agentMode));
    el("approveAllBtn").addEventListener("click",()=>applyApprovedAgentActions("batch"));
    el("copilotSettings").addEventListener("click",()=>openModal("settingsModal"));
    el("settingsAIEnabled").addEventListener("change",e=>setAIEnabled(e.target.checked));el("runAIBtn").addEventListener("click",runAI);el("applyAIResult").addEventListener("click",applyAIResult);
    el("aboutGithubBtn").addEventListener("click",()=>window.parinAPI.openExternal("https://github.com/Parin-M/Parin-MindMap-EXE"));
    el("settingsBtn").addEventListener("click",()=>{
      el("settingsAIEnabled").checked=state.aiEnabled;
      openModal("settingsModal");
    });el("saveSettingsBtn").addEventListener("click",saveSettings);
    el("languageSelect").addEventListener("change",e=>setLanguage(e.target.value));el("settingsLanguage").addEventListener("change",e=>setLanguage(e.target.value));
    el("themeBtn").addEventListener("click",()=>{const themes=["aurora","midnight","ocean","forest","sunset","violet","graphite","paper","rose","cyber","nordic","emerald","mono"];const i=themes.indexOf(state.theme);setTheme(themes[(i<0?0:i+1)%themes.length]);});
    el("layoutBtn").addEventListener("click",()=>{const n={radial:"right",right:"left",left:"down",down:"radial"};setLayout(n[state.layout]||"radial")});
    el("notesBtn").addEventListener("click",()=>{state.showNotes=!state.showNotes;renderMapOnly()});
    el("moreBtn").addEventListener("click",()=>toast("More commands are coming to the command palette."));
    el("closeInspector").addEventListener("click",()=>el("inspector").classList.toggle("collapsed"));
    el("canvas").addEventListener("pointermove",onCanvasPointerMove);el("canvas").addEventListener("pointerup",onCanvasPointerUp);el("canvas").addEventListener("pointercancel",onCanvasPointerUp);
    el("canvas").addEventListener("wheel",e=>{e.preventDefault();zoomBy(e.deltaY>0?-0.06:0.06)},{passive:false});
    el("canvas").addEventListener("click",()=>{});
    $all("[data-close-modal]").forEach(b=>b.addEventListener("click",()=>closeModal(b.dataset.closeModal)));
    el("overlay").addEventListener("click",()=>{$all(".modal:not(.hidden)").forEach(m=>closeModal(m.id));});
    $all("[data-tab]").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
    $all("[data-export-tab]").forEach(b=>b.addEventListener("click",()=>{state.pdfTab=b.dataset.exportTab;$all("[data-export-tab]").forEach(x=>x.classList.toggle("active",x===b));updateExportPreview();}));
    ["pdfSize","pdfOrientation","pdfMargin","pdfQuality","pdfBackground","pdfTitle","pdfLegend","pdfFooter"].forEach(id=>el(id).addEventListener("change",updateExportPreview));
    el("exportNowBtn").addEventListener("click",exportNow);
    document.addEventListener("keydown",e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"){e.preventDefault();e.shiftKey?redo():undo();return;}
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="y"){e.preventDefault();redo();return;}
      if(e.key==="Tab"){e.preventDefault();addChild();}
      if(e.key==="Enter"&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)){e.preventDefault();addSibling();}
      if(e.key==="Delete"&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))deleteSelected();
      if(e.key==="Escape"){$all(".modal:not(.hidden)").forEach(m=>closeModal(m.id));}
    });
  }

  function init(){
    populateLanguages();loadSettings();setupAIList();wireInspector();setupEvents();loadAutosave();render();fitMap();selectAITask("map");
  }

  window.addEventListener("beforeunload",()=>localStorage.setItem("parin.autosave",JSON.stringify({title:state.title,root:state.root,theme:state.theme,layout:state.layout})));
  init();
})();
