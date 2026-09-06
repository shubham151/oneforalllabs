function header() {
  return (
    <header>
      <div className="mb-[10px]">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent m-0">Welcome</p>
      </div>
      <h1 className="text-[34px] font-semibold tracking-tight mb-[12px] text-balance">One For All Labs</h1>
      <p className="max-w-[64ch] text-muted m-0 text-[15px] leading-relaxed">
        I build clean, single-purpose micro-tools focused on privacy and developer productivity. Everything here is fast, free, and designed without clutter.
      </p>
      <div className="flex gap-[16px] mt-[24px]">
        <a href="https://github.com/shubham151" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] bg-surface-2 border border-line px-[16px] py-[8px] rounded-[3px] text-[13px] font-medium text-ink hover:bg-line transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/spidermines" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] bg-surface-2 border border-line px-[16px] py-[8px] rounded-[3px] text-[13px] font-medium text-ink hover:bg-line transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          LinkedIn
        </a>
      </div>
    </header>
  );
}

function card(title: string, link: string, desc: string, tags: string[]) {
  return (
    <a href={link} className="group block bg-surface border border-line rounded-[3px] p-[24px] hover:border-accent transition-colors no-underline">
      <div className="flex items-start justify-between mb-[16px]">
        <h3 className="m-0 text-[18px] font-semibold text-ink group-hover:text-accent transition-colors">{title}</h3>
        <span className="font-mono text-[11px] bg-accent-soft text-accent px-[6px] py-[2px] rounded-[2px] font-bold">LIVE</span>
      </div>
      <p className="m-0 text-muted text-[14px] leading-relaxed mb-[24px]">{desc}</p>
      <div className="font-mono text-[12px] text-faint flex gap-[12px]">
        {tags.map(function map(tag) { return <span key={tag}>#{tag}</span>; })}
      </div>
    </a>
  );
}

function projects() {
  return (
    <section>
      <h2 className="text-[13px] font-mono font-semibold tracking-[0.1em] uppercase text-muted m-0 mb-[24px] pb-[8px] border-b border-line flex justify-between items-end">
        <span>Active Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {card("Text Sanitizer", "https://sanitize.oneforalllabs.com", "Instantly scrub Personally Identifiable Information (PII) from text using advanced NLP.", ["privacy", "fastapi", "nlp"])}
        {card("Webhook Catcher", "https://catch.oneforalllabs.com", "Generate a unique URL to capture, inspect, and analyze incoming HTTP payloads in real-time.", ["devtools", "api", "real-time"])}
        {card("Impact Dashboard", "https://impact.oneforalllabs.com", "Track engineering impact across multiple GitHub repositories by analyzing delivery, collaboration, and quality.", ["analytics", "github", "metrics"])}
        {card("JWT Debugger", "https://decode.oneforalllabs.com", "Local-first JWT decoder and signature verifier. Built for absolute privacy with zero server calls.", ["privacy", "security", "devtools"])}
        {card("JSON Formatter", "https://format.oneforalllabs.com", "Lightning-fast local JSON formatter and tree viewer capable of parsing massive payloads.", ["devtools", "json", "wasm"])}
        {card("Cron Visualizer", "https://cron.oneforalllabs.com", "Clean cron expression translator that displays human-readable schedules and upcoming execution times.", ["devtools", "schedule", "cron"])}
        {card("Env Validator", "https://env.oneforalllabs.com", "Zero-trust local .env file validator that instantly catches syntax errors and duplicate keys.", ["privacy", "config", "devtools"])}
        {card("Timezone Slider", "https://zone.oneforalllabs.com", "Unified timezone slider to visually find overlapping working hours across global remote teams.", ["productivity", "remote", "time"])}
      </div>
    </section>
  );
}

function requests() {
  return (
    <section>
      <h2 className="text-[13px] font-mono font-semibold tracking-[0.1em] uppercase text-muted m-0 mb-[24px] pb-[8px] border-b border-line flex justify-between items-end">
        <span>Request a Tool</span>
      </h2>
      <div className="bg-surface-2 border border-line rounded-[3px] p-[24px]">
        <h3 className="m-0 text-[18px] font-semibold text-ink mb-[12px]">What should we build next?</h3>
        <p className="m-0 text-muted text-[14px] leading-relaxed mb-[24px] max-w-[60ch]">
          Have an idea for a clean, single-purpose micro-tool? Suggest it in our GitHub discussions. You can also upvote existing ideas to help prioritize what gets built next.
        </p>
        <a href="https://github.com/shubham151/oneforalllabs/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] bg-ink text-surface px-[16px] py-[8px] rounded-[3px] text-[13px] font-medium hover:bg-accent transition-colors">
          Suggest a Tool
        </a>
      </div>
    </section>
  );
}

function view() {
  return (
    <div className="max-w-[1180px] mx-auto px-[28px] py-[56px] pb-[96px] flex flex-col gap-[64px]">
      {header()}
      {projects()}
      {requests()}
    </div>
  );
}

export default view;
