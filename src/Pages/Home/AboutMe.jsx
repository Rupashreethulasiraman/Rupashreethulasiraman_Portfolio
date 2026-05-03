import React from "react";

export default function AboutMe() {
  return (
    <section className="about--section" id="AboutMe">
      <div className="about--code-window">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <p className="code-title">rupashree.ts</p>
        </div>
        
        <div className="code-body">
          <pre>
            <code>
              <span className="token keyword">const</span> <span className="token variable">developer</span> <span className="token operator">=</span> <span className="token punctuation">&#123;</span>
              <br />
              {"  "}<span className="token property">name</span><span className="token punctuation">:</span> <span className="token string">'Rupashree'</span><span className="token punctuation">,</span>
              <br />
              {"  "}<span className="token property">role</span><span className="token punctuation">:</span> <span className="token string">'Full Stack Developer'</span><span className="token punctuation">,</span>
              <br />
              {"  "}<span className="token property">coreStack</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
              <br />
              {"    "}<span className="token string">'HTML'</span><span className="token punctuation">,</span> <span className="token string">'CSS'</span><span className="token punctuation">,</span>
              <br />
              {"    "}<span className="token string">'React'</span><span className="token punctuation">,</span> <span className="token string">'JavaScript'</span><span className="token punctuation">,</span>
              <br />
              {"    "}<span className="token string">'Java'</span><span className="token punctuation">,</span> <span className="token string">'Python'</span><span className="token punctuation">,</span> <span className="token string">'SQL'</span>
              <br />
              {"  "}<span className="token punctuation">]</span><span className="token punctuation">,</span>
              <br />
              {"  "}<span className="token property">focus</span><span className="token punctuation">:</span> <span className="token string">'Impact Tech & Scalability'</span><span className="token punctuation">,</span>
              <br />
              {"  "}<span className="token function">buildSolution</span><span className="token punctuation">:</span> <span className="token keyword">function</span><span className="token punctuation">(</span><span className="token parameter">problem</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
              <br />
              {"    "}<span className="token keyword">return</span> <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">architectSystem</span><span className="token punctuation">(</span>problem<span className="token punctuation">)</span><span className="token punctuation">;</span>
              <br />
              {"  "}<span className="token punctuation">&#125;</span>
              <br />
              <span className="token punctuation">&#125;</span><span className="token punctuation">;</span>
            </code>
          </pre>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="about--content">
        <p className="section--subtitle">ABOUT ME</p>
        <h2 className="section--heading">Driven by impact &<br/>robust engineering.</h2>
        
        <div className="about--text-block">
          <p className="about--description">
            I am a Full Stack Developer specializing in building scalable, modern applications. My expertise spans the entire stack—from designing high-end, intuitive interfaces using <span className="text-highlight">HTML, CSS, React & JavaScript</span>, to architecting solid, efficient backend systems with <span className="text-highlight">Java, Python & SQL</span>.
          </p>
          
          <p className="about--description">
            Beyond traditional web development, I am deeply passionate about <strong>"impact tech."</strong> I love tackling complex problem statements in domains like sustainability, healthcare triage, and computational drug discovery.
          </p>
          
          <p className="about--description">
            Whether I'm building a predictive software platform for industrial water efficiency or a mobile-first civic issue tracker, my goal is always to deliver intelligent, well-designed solutions that make a tangible difference.
          </p>
        </div>
      </div>

    </section>
  );
}