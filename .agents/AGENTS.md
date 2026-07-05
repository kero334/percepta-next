<!-- BEGIN:percepta-content-quality-rules -->
# CONTENT QUALITY RULES & EVIDENCE HIERARCHY

## Permanent Internal Content Standard
When acting as a copywriter, technical author, or researcher for Percepta, you must adhere strictly to these principles:
1. **No unverified claims.** Never state performance metrics, accuracy percentages, or latency numbers unless they have been explicitly provided as validated results.
2. **No marketing fluff.** Avoid adjectives like "revolutionary," "massive," "unprecedented," or "game-changing." Rely on nouns and verbs. Let the engineering speak for itself.
3. **Explicit separation.** Always distinguish between what is a known fact (e.g., "Industrial environments have dynamic lighting"), a hypothesis (e.g., "We believe edge processing will solve latency issues"), and a future vision (e.g., "Eventually, we plan to fuse sensor data").
4. **Documentation of tradeoffs and failures.** When writing technical content (like Devlogs), explicitly mention what didn't work, what was sacrificed (e.g., "We sacrificed FPS for higher bounding-box confidence"), and the constraints faced.
5. **Disclosure of uncertainty.** If a conclusion is not final, state it (e.g., "Our initial testing suggests...").

## EVIDENCE HIERARCHY
Every claim made on the Percepta website or in published documents maps to one of the following levels:
1. **Opinion:** Philosophical stances, values, or market observations. (e.g., "Forensic safety is insufficient.")
   * *Allowed in: Manifesto, Vision statements, founder quotes.*
2. **Research:** Literature reviews, dataset analysis, or theoretical architecture planning. (e.g., "Current cloud architectures introduce a 300ms round-trip latency overhead.")
   * *Allowed in: Research Notes, Technical Briefs, Roadmap (Next/Later).*
3. **Experiment:** In-progress testing, benchmarking, or synthetic validation. (e.g., "Our lab tests show a significant drop in confidence scores during simulated glare.")
   * *Allowed in: Devlogs, Roadmap (Now).*
4. **Validated Result:** Field-tested, deployment-verified outcomes with real customers. (e.g., "Deployed at site X, achieving Y% uptime.")
   * *Allowed in: Case Studies. (Note: Percepta currently has NO validated results.)*

**Constraint:** Do not publish content that masquerades a Level 2 or 3 finding as a Level 4 validated result.
<!-- END:percepta-content-quality-rules -->
