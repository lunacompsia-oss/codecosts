# AI Coding Tools for Java Developers (March 2026)

**Research Type:** Market Intelligence / Tool Comparison
**Analyst:** research-thompson
**Date:** 2026-03-27
**Confidence Level:** High (multi-source, cross-verified against official docs, vendor blogs, and third-party reviews)

---

## Executive Summary

**Conclusion first:** Java developers have a fundamentally different calculus than Python or JavaScript developers when choosing an AI coding tool. Three structural factors shape the decision:

1. **IDE lock-in matters more.** Most Java developers live in IntelliJ IDEA. Tools that do not work there (or work poorly there) are non-starters for enterprise Java teams.
2. **Java's type system is an AI multiplier.** The compiler catches AI mistakes before runtime. This makes AI-assisted Java development more reliable than dynamically-typed languages -- a genuine advantage that the tools are starting to exploit.
3. **Java = enterprise = compliance.** The typical Java buyer cares about SSO, on-prem deployment, IP indemnity, and data privacy in ways that a solo JavaScript developer does not.

**Top-line recommendations:**

- **Best overall for Java:** GitHub Copilot Business ($19/seat) -- broadest IDE support including IntelliJ, strong Spring Boot awareness, new Java App Modernization feature, IP indemnity included
- **Best Java-specific feature:** Amazon Q Developer ($0-19/mo) -- the only tool with automated Java version upgrades (8/11/17 to 17/21), unmatched for legacy modernization
- **Best for IntelliJ-native experience:** JetBrains AI Assistant (free with All Products Pack) -- deepest IntelliJ integration, Spring runtime insights, Junie agent
- **Best for complex Java codebases:** Augment Code ($60/user/mo) -- tested on 3.6M-line Java codebases (Elasticsearch), handles 400K+ file repos
- **Best agentic coding for Java:** Claude Code ($20-200/mo) -- strongest reasoning model, Java's type system makes AI output more reliable, Spring Boot template ecosystem emerging
- **Best for regulated Java enterprises:** Tabnine ($39-59/seat) -- on-premises/air-gapped deployment, born from Codota's Java-first heritage
- **Best multi-file Java refactoring:** Cursor ($20-200/mo) -- now available in IntelliJ via ACP, strong agent mode for cross-cutting changes

---

## 1. IDE Compatibility Matrix

This is the first-order filter for Java developers. If a tool does not work in your IDE, nothing else matters.

| Tool | IntelliJ IDEA | VS Code | Eclipse | Standalone IDE | Terminal/CLI |
|------|:---:|:---:|:---:|:---:|:---:|
| **GitHub Copilot** | Yes | Yes | Yes (preview) | -- | Yes |
| **Cursor** | Yes (via ACP, March 2026) | Yes (fork) | -- | Yes (VS Code fork) | -- |
| **Claude Code** | Yes (extension) | Yes (extension) | -- | -- | Yes (native) |
| **Windsurf** | Yes (plugin) | Yes | -- | Yes (VS Code fork) | -- |
| **Tabnine** | Yes | Yes | Yes | -- | Yes (Agentic tier) |
| **Amazon Q Developer** | Yes | Yes | Yes (preview) | -- | Yes |
| **Gemini Code Assist** | Yes | Yes | -- | -- | -- |
| **JetBrains AI** | Yes (native) | -- | -- | -- | -- |
| **Augment Code** | Yes | Yes | -- | -- | -- |

**Confidence:** Confirmed for all entries. Sources: official plugin marketplaces and vendor documentation.

**Key finding:** As of March 2026, every major AI coding tool supports IntelliJ IDEA. This is a significant shift from 2024-2025 when several tools (Cursor, Windsurf) were VS Code-only. The turning point was JetBrains' Agent Client Protocol (ACP), launched in IntelliJ IDEA 2026.1, which allows any ACP-compatible agent to plug into JetBrains IDEs.

**IntelliJ IDEA 2026.1 (released March 2026)** now supports multiple AI agents simultaneously:
- Built-in: JetBrains AI / Junie
- Via ACP Registry: Cursor, Codex (OpenAI), Claude Agent, any ACP-compatible agent
- Via plugins: GitHub Copilot, Tabnine, Windsurf, Amazon Q, Gemini Code Assist, Augment Code

---

## 2. Tool-by-Tool Analysis: Java-Specific Capabilities

### 2.1 GitHub Copilot

**Pricing:** Free | Pro $10/mo | Pro+ $39/mo | Business $19/seat | Enterprise $39/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Excellent. Java is one of Copilot's strongest languages due to massive GitHub training corpus. Handles Spring annotations, generics, and boilerplate well. | Confirmed |
| Spring Boot awareness | Strong. Generates controllers with @RequestMapping, services with @Autowired, entities with JPA annotations. Tested on Spring PetClinic. | Confirmed |
| Maven/Gradle integration | Understands pom.xml and build.gradle patterns. Does not execute builds directly but generates correct dependency declarations. | Confirmed |
| JUnit test generation | Generates JUnit 5 tests with @Test, @BeforeEach, @ParameterizedTest. Quality improves with existing test patterns in the project. | Confirmed |
| Java upgrade / modernization | **Standout feature.** GitHub Copilot App Modernization (preview) upgrades Java 8/11/17 to 17/21, Spring Boot up to 3.5, Spring Framework to 6.2+. Uses OpenRewrite under the hood plus AI build/fix loop. Supports Maven AND Gradle. | Confirmed |
| Agent mode in IntelliJ | Agent mode and MCP support in JetBrains IDEs (public preview, March 2026). | Confirmed |

**Java-specific strengths:**
- GitHub Copilot App Modernization is a direct competitor to Amazon Q's Java transformation. It upgrades JDK versions, Spring Boot versions, fixes CVEs, generates Dockerfiles, and containerizes for Azure. Uses OpenRewrite (open source) plus AI for the remaining issues.
- Supports both Maven and Gradle (Amazon Q only supports Maven).
- Free plan available on JetBrains IDEs.
- Agent mode now available in IntelliJ (public preview).

**Java-specific weaknesses:**
- App Modernization is currently a VS Code extension (preview); not yet confirmed in IntelliJ.
- App Modernization has an Azure-centric focus (containerization targets Azure services).
- No deep IntelliJ integration -- operates as a plugin, not native to the IDE's Java analysis engine.

---

### 2.2 Cursor

**Pricing:** Free | Pro $20/mo | Ultra $200/mo | Business $40/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Good to excellent. Uses frontier models (Claude, GPT) with full project context. Understands Java type system and generics. | Confirmed |
| Spring Boot awareness | Strong. Composer mode can scaffold Spring Boot applications, generate REST controllers, service layers, repository interfaces. | Likely |
| Maven/Gradle integration | Composer mode can edit pom.xml/build.gradle, add dependencies, update versions. Can run Maven/Gradle commands. | Confirmed |
| JUnit test generation | Generates comprehensive JUnit 5 tests. Agent mode can run tests, observe failures, and fix iteratively. | Confirmed |
| IntelliJ integration | **New in March 2026.** Available via Agent Client Protocol (ACP). Install from ACP Registry in IntelliJ. Free for paid Cursor users. | Confirmed |
| Multi-file refactoring | Best-in-class. Composer handles cross-cutting changes across multiple Java files (e.g., "add authentication to all controllers"). | Confirmed |

**Java-specific strengths:**
- The IntelliJ integration via ACP (announced March 2026) is a game-changer. Java developers no longer need to choose between Cursor's AI capabilities and IntelliJ's Java intelligence. You get both.
- Multi-file agent mode is particularly powerful for Java's verbose, multi-layer architecture (controller -> service -> repository -> entity).
- Self-correction loop: generates code, compiles, reads errors, fixes -- Java's compiler makes this loop more reliable than with dynamic languages.

**Java-specific weaknesses:**
- ACP integration is new (March 2026) -- expect rough edges.
- Some users report Cursor "turning IntelliJ into a glorified task runner" -- the ACP integration routes all AI work through Cursor's backend, which may not leverage IntelliJ's Java-specific analysis.
- No Java-specific features (no upgrade tools, no framework-specific actions).
- $20/mo minimum is 2x Copilot Pro.

---

### 2.3 Claude Code

**Pricing:** Pro $20/mo | Max 5x $100/mo | Max 20x $200/mo | Team Premium $150/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Different paradigm -- no inline autocomplete. Terminal-based agent reads codebase and generates/edits code on request. Java's type system provides natural guardrails. | Confirmed |
| Spring Boot awareness | Strong. Spring Boot annotation patterns are well-represented in training data. Generates @Service, @Autowired, @Transactional, @RequestMapping correctly. Claude Code templates for Spring Boot are emerging (e.g., Piotr Minkowski's template). | Confirmed |
| Maven/Gradle integration | Full terminal access -- can run mvn/gradle commands, edit pom.xml/build.gradle, manage dependencies, resolve conflicts. | Confirmed |
| JUnit test generation | Excellent. Generates JUnit 5 with proper annotations, Mockito mocking, @ParameterizedTest. Can run tests, read output, diagnose failures, fix -- autonomously. | Confirmed |
| JPA/Hibernate support | Strong. Generates repository methods, JPQL queries, entity relationships when provided entity class definitions. | Likely |
| Java Language Server | Eclipse JDT Language Server integration available as a Claude plugin -- provides real-time Java intelligence (syntax errors, completions, navigation) for Java 1.8 through 24. | Confirmed |

**Java-specific strengths:**
- Java's strict type system is a genuine advantage for Claude Code. The compiler catches AI mistakes instantly, creating a "generate -> compile -> fix" loop that converges faster than with Python or JavaScript. This is a key insight for the blog post.
- Stream API code generation is idiomatic and correct.
- JVM SDK available (claude-code-sdk-java) with both Kotlin (coroutines/Flow) and Java (CompletableFuture) APIs -- for teams building on Claude Code programmatically.
- Community-created Claude skills for Java: Spring Boot optimization, Java 17-to-21 migration, dependency auditing.
- Works in IntelliJ via extension AND as a standalone terminal tool.

**Java-specific weaknesses:**
- No inline autocomplete -- this is an agent, not a code completion tool. For daily Java typing, you need a separate tool.
- Learning curve for Java developers used to IDE-centric workflows.
- Token-expensive for large Java codebases (Java is verbose = more tokens).
- No automated Java version upgrade feature (unlike Amazon Q or Copilot App Modernization).

---

### 2.4 Windsurf (formerly Codeium)

**Pricing:** Free | Pro $20/mo | Max $200/mo | Teams $40/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Good. Supercomplete predicts developer intent. Context-aware suggestions for Java patterns. | Confirmed |
| Spring Boot awareness | Understands relationships between Spring services, DTOs, and repository interfaces. Cascade maintains context across sessions. | Confirmed |
| Maven/Gradle integration | Cascade agent can run `mvn test`, create files, debug stack traces autonomously. | Confirmed |
| JUnit test generation | Can generate unit tests and refactor Java code. Cascade handles multi-file implementation. | Confirmed |
| IntelliJ integration | Available as a plugin for IntelliJ and other JetBrains IDEs. | Confirmed |
| SonarQube integration | MCP-based integration with SonarQube for Java code quality analysis. | Confirmed |

**Java-specific strengths:**
- SonarQube integration via MCP is uniquely relevant for enterprise Java shops that already use SonarQube.
- Cascade's memory system remembers your codebase structure across sessions -- useful for large Java monoliths.
- Self-hosted/hybrid deployment option for enterprise (important for Java = enterprise).

**Java-specific weaknesses:**
- No Java-specific features (no upgrade tools, no framework-specific actions).
- Less documented Java capabilities compared to Copilot or Amazon Q.
- Plugin for IntelliJ is available but the primary experience is the standalone IDE (VS Code fork).

---

### 2.5 Amazon Q Developer

**Pricing:** Free | Pro $19/user/mo

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Good. Real-time suggestions from snippets to full functions. Java is a core supported language. | Confirmed |
| Spring Boot awareness | General framework support. No documented Spring-specific features beyond code generation. | Likely |
| Maven integration | **Deep Maven integration.** Transformation agent requires Maven 3.8+. Understands pom.xml structure, dependencies, plugins. | Confirmed |
| Gradle integration | **Not supported** for Java transformation features. Maven only. | Confirmed |
| JUnit test generation | `/test` command generates unit tests for Java. Supports JUnit. | Confirmed |
| Java version upgrade | **Unique standout feature.** See details below. | Confirmed |

**Amazon Q Java Transformation -- Deep Dive:**

This is the most Java-specific feature of any AI coding tool on the market. No other tool offers this level of automated Java modernization (though GitHub Copilot App Modernization is now competing).

**Supported upgrade paths:**
| Source Version | Target Version |
|:---:|:---:|
| Java 8 | Java 17, Java 21 |
| Java 11 | Java 17, Java 21 |
| Java 17 | Java 17 (dependency-only), Java 21 |
| Java 21 | Java 21 (dependency-only) |

**What it transforms:**
- Deprecated APIs and code components updated to modern equivalents
- Library and framework dependencies upgraded to target-compatible versions
- Maven plugins updated
- First-party (internal) and third-party dependency versions managed via YAML config
- Security best practices incorporated

**Selective Transformation (2025-2026):**
- Natural language chat to tailor transformation plans
- Input file (YAML) to specify exact dependency targets
- Available in IDE (VS Code, IntelliJ) and CLI (Linux, macOS)

**Limitations:**
- Maven only (no Gradle)
- Build must complete in 55 minutes or less
- No access to private networks/VPC during transformation
- UTF-8 encoding required
- No plugins that package non-Java languages (e.g., frontend-maven-plugin excluded)

**Pricing for transformation:**
- Free tier: 1,000 LOC/month
- Pro tier: 4,000 LOC/month
- Overage: $0.003 per LOC submitted beyond limits

**Java-specific strengths:**
- The Java transformation agent is genuinely unique. No other tool automates Java 8-to-21 upgrades with dependency resolution, API migration, and security patching in one operation.
- AWS claims transformation completes in "minutes compared to days or weeks" for manual upgrades.
- At $19/seat it is the cheapest paid option with enterprise controls.
- Inherits AWS's full compliance portfolio (SOC 1/2/3, ISO 27001, HIPAA, PCI DSS, FedRAMP).

**Java-specific weaknesses:**
- Maven-only for transformation. Gradle shops are excluded from the flagship Java feature.
- Heavily AWS-ecosystem dependent. Most useful if you are already on AWS.
- General coding capabilities lag behind Cursor/Claude Code for agentic work.
- LOC-based transformation pricing can surprise large teams.

---

### 2.6 Tabnine

**Pricing:** Dev ~$12/mo | Code Assistant $39/seat | Agentic Platform $59/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Good to excellent. **Born from Codota**, which was a Java-first AI code completion tool. Java heritage runs deep. | Confirmed |
| Spring Boot awareness | Adapts to your codebase patterns through Enterprise Context Engine. No framework-specific features documented. | Likely |
| Maven/Gradle integration | IDE-based suggestions for build files. No specialized dependency management. | Speculative |
| JUnit test generation | Code Review Agent can generate tests. Won "Best Innovation in AI Coding" at 2025 AI TechAwards. | Confirmed |
| IntelliJ integration | Full support via plugin. Separate "Tabnine for Enterprise" plugin for self-hosted deployments. | Confirmed |
| Eclipse integration | Yes -- one of few tools supporting Eclipse, which remains popular in enterprise Java. | Confirmed |

**Java-specific strengths:**
- Codota heritage: Tabnine's parent company Codota was originally built specifically for Java code completion. This Java-first DNA means the tool understands Java idioms and patterns at a deeper level than competitors that started with Python/JavaScript.
- Enterprise Context Engine learns your organization's Java architecture, frameworks, and coding standards.
- **On-premises / air-gapped deployment** -- the only major tool offering this. Critical for Java enterprises in finance, healthcare, defense, and government.
- Eclipse support -- important for legacy enterprise Java teams that have not migrated to IntelliJ.
- Zero code retention by default. IP indemnification on all paid tiers.
- Jira/Confluence integration -- enterprise Java teams often use the full Atlassian stack.

**Java-specific weaknesses:**
- AI model quality may be a tier below frontier models (Claude, GPT-5) used by Cursor/Copilot.
- No Java version upgrade feature.
- Free tier discontinued (April 2025) -- minimum $12/mo.

---

### 2.7 JetBrains AI Assistant + Junie

**Pricing:** AI Free (included) | AI Pro EUR 10/mo personal | AI Ultimate EUR 30/mo personal | AI Enterprise custom
(AI Pro included free with All Products Pack -- common in enterprise)

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Excellent. Leverages IntelliJ's deep Java analysis engine -- type inference, inspections, refactoring. Understands Java at a semantic level. | Confirmed |
| Spring Boot awareness | **Best in class.** Spring runtime insights in 2026.1: inspect injected beans, endpoint security, property values at runtime. Kotlin-aware JPA for mixed Kotlin/Java projects. | Confirmed |
| Maven/Gradle integration | IntelliJ's native Maven/Gradle support is industry-leading. AI enhances existing build tool intelligence. | Confirmed |
| JUnit test generation | AI generates tests integrated with IntelliJ's built-in test runner. Junie agent runs tests iteratively until they pass. | Confirmed |
| Junie coding agent | Plans, writes, refines, and tests Java code autonomously. Supports Agent Skills from `.junie/skills/` directories for team-specific patterns. | Confirmed |
| Multi-agent support | IntelliJ 2026.1 supports multiple AI agents: Junie, Claude Agent, Cursor (ACP), Codex, Gemini CLI -- all in the same IDE. | Confirmed |

**Java-specific strengths (IntelliJ 2026.1):**
- **Spring Runtime Insight:** Inspect injected beans, endpoint security, and property values without pausing execution. This is unique -- no other AI tool offers runtime introspection of Spring context.
- **Kotlin-aware JPA:** Detects and fixes Kotlin-specific pitfalls in Jakarta Persistence entities (relevant for mixed Java/Kotlin codebases).
- **Agent Skills framework:** Team-specific Java patterns (e.g., "avoid N+1 SELECT problem in Spring Data JPA") can be encoded as skills that guide all AI agents.
- **ACP Registry:** Browse and install AI agents in one click. Use Junie for planning, Claude for reasoning, Cursor for refactoring -- simultaneously.
- **Database access for AI agents:** Let agents query and modify your data sources natively -- powerful for JPA/Hibernate work.
- Effectively free for teams already paying for JetBrains All Products Pack.

**Java-specific weaknesses:**
- Locked into JetBrains ecosystem. No VS Code support.
- Junie's model quality may not match Claude Opus 4.6 or GPT-5 for pure reasoning tasks.
- AI Enterprise tier requires IDE Services platform -- separate procurement.
- Credit-based system means heavy agent usage can get expensive.

---

### 2.8 Gemini Code Assist

**Pricing:** Free (individual) | Standard ~$19/seat | Enterprise $75/seat

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Good. Powered by Gemini models. Java is a supported first-class language. | Confirmed |
| Spring Boot awareness | General Java framework support. Google has a documented tutorial for building Spring Boot apps with Gemini in IntelliJ. | Confirmed |
| Maven/Gradle integration | General support. No specialized build tool features. | Likely |
| JUnit test generation | General test generation from code. No Java-specific testing features documented. | Likely |
| IntelliJ integration | Yes, via plugin. Also supports Android Studio (Google's IntelliJ-based IDE). | Confirmed |

**Java-specific strengths:**
- Free tier is generous (6,000 completions/day).
- Android Studio support is native -- important for Java/Kotlin Android developers.
- GCP integration makes it natural for Java microservices deployed on Cloud Run / GKE.
- Comprehensive compliance certifications (SOC 1/2/3, four ISO standards).
- $299/yr Developer Program Premium bundle includes $1,000+ GCP credits.

**Java-specific weaknesses:**
- No Java-specific features (no upgrade tools, no Spring-specific actions, no framework awareness beyond general code generation).
- Coding capabilities are a step behind Copilot/Cursor/Claude Code for Java.
- Tied to Google's ecosystem.

---

### 2.9 Augment Code

**Pricing:** Indie $20/mo | Developer $50/mo | Standard $60/user/mo | Max $200/user/mo | Enterprise custom

| Dimension | Assessment | Confidence |
|-----------|-----------|------------|
| Java code completion quality | Strong. Context Engine handles massive Java codebases (400K+ files). | Confirmed |
| Large Java codebase support | **Standout feature.** Tested on Elasticsearch (3.6M lines of Java). In a blind study of 500 PRs, Augment outperformed competitors by +14.8 on correctness and +18.2 on completeness. | Confirmed |
| Spring Boot awareness | Not specifically documented, but codebase-aware Context Engine adapts to project patterns. | Likely |
| Maven/Gradle integration | General support. | Speculative |
| IntelliJ integration | Yes, via plugin. | Confirmed |

**Java-specific strengths:**
- Purpose-built for large, complex codebases -- which is exactly what enterprise Java projects are.
- The Elasticsearch benchmark (3.6M lines of Java) is the only published Java-specific benchmark among these tools.
- Suggested Edits find and propose associated changes across the repository -- addresses Java's interconnected class hierarchies.
- ISO/IEC 42001 AI governance certification + SOC 2 Type II.
- Usage-based pricing (no named seats) -- teams only pay for active users.

**Java-specific weaknesses:**
- Relatively new entrant. Less Java-specific documentation than established players.
- $60/user/mo minimum for teams is expensive.
- No Java upgrade/transformation features.
- Standard and Max tiers cap at 20 users; larger teams need Enterprise.

---

## 3. Java-Specific Feature Comparison Matrix

| Feature | Copilot | Cursor | Claude Code | Windsurf | Amazon Q | Tabnine | JetBrains AI | Gemini CA | Augment |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| IntelliJ IDEA support | Yes | Yes (ACP) | Yes | Yes | Yes | Yes | **Native** | Yes | Yes |
| Eclipse support | Preview | -- | -- | -- | Preview | **Yes** | -- | -- | -- |
| Spring Boot awareness | Good | Good | Good | Good | Basic | Learns | **Best** | Basic | Learns |
| Spring runtime insight | -- | -- | -- | -- | -- | -- | **Yes** | -- | -- |
| Maven support | Good | Good | **Full** (CLI) | Good | **Deep** | Basic | **Native** | Basic | Basic |
| Gradle support | Good | Good | **Full** (CLI) | Good | **No** (transform) | Basic | **Native** | Basic | Basic |
| JUnit test generation | Good | Good | **Best** | Good | Good (/test) | Good | Good | Basic | Good |
| Java version upgrade | **Yes** (App Mod) | -- | -- | -- | **Yes** (best) | -- | -- | -- | -- |
| Spring Boot upgrade | **Yes** (to 3.5) | -- | -- | -- | Partial | -- | -- | -- | -- |
| Multi-file refactoring | Good | **Best** | **Best** | Good | Limited | Limited | Good | Limited | Good |
| Large codebase (100K+) | Good | Good | Good | Good | Good | Good | Good | Good | **Best** |
| SonarQube integration | -- | -- | -- | **Yes** (MCP) | -- | -- | -- | -- | -- |
| Jira/Confluence | -- | -- | -- | -- | -- | **Yes** | -- | -- | -- |
| On-prem / air-gapped | No | No | No | Enterprise | No | **Yes** | Enterprise | No | Enterprise |

---

## 4. The Java Version Upgrade Battle: Amazon Q vs. GitHub Copilot App Modernization

This deserves special attention because Java version upgrades are the single biggest pain point for enterprise Java teams, and two tools now compete directly on this.

| Dimension | Amazon Q Transformation | Copilot App Modernization |
|-----------|----------------------|--------------------------|
| **Supported source versions** | Java 8, 11, 17, 21 | Java 8, 11, 17, 21 |
| **Supported target versions** | Java 17, 21 | Java 17, 21 (and 25 mentioned) |
| **Spring Boot upgrade** | Dependency updates only | Up to Spring Boot 3.5 / Spring Framework 6.2+ |
| **Build tool support** | Maven only (3.8+) | Maven AND Gradle |
| **Approach** | Proprietary AI agent | OpenRewrite (open source) + AI build/fix loop |
| **IDE support** | VS Code, IntelliJ, CLI | VS Code (preview) |
| **Pricing** | Free: 1K LOC/mo; Pro: 4K LOC/mo | Included with Copilot subscription |
| **CVE remediation** | Not documented | Yes (scans and fixes CVEs) |
| **Containerization** | No | Yes (Dockerfiles + Azure deployment) |
| **Cloud targeting** | AWS-centric | Azure-centric |
| **Selective control** | Yes (YAML config + natural language) | Yes (predefined tasks + custom skills) |
| **Maturity** | GA (most features) | Preview |

**Analysis:** Amazon Q has the more mature Java transformation with finer-grained control (YAML dependency config, selective transformation). Copilot App Modernization is newer but broader in scope (Spring Boot upgrades, Gradle support, CVE fixes, containerization). For pure Java version upgrades, Amazon Q is the safer bet today. For Spring Boot modernization + cloud migration, Copilot App Modernization offers a more complete pipeline.

---

## 5. Enterprise Considerations for Java Teams

Java = enterprise. Here is the compliance and governance matrix that matters for enterprise procurement.

### 5.1 Pricing for Teams

| Tool | Team/Business Tier | Enterprise Tier | Cheapest with SSO |
|------|:---:|:---:|:---:|
| GitHub Copilot | $19/seat | $39/seat | $19 (SSO included) |
| Cursor | $40/seat | Custom | $40 (SSO included) |
| Windsurf | $40/seat (+$10 SSO) | Custom | $50 |
| Amazon Q Developer | $19/seat | N/A | $19 (SSO via IAM IC) |
| Tabnine | $39/seat | $59/seat (Agentic) | $39 (SSO included) |
| Claude Code | $150/seat (premium) | Custom | $150 |
| JetBrains AI | ~$22/seat (EUR 20) | Custom | Custom |
| Gemini Code Assist | $19/seat | $75/seat | ~$19 |
| Augment Code | $60/seat | Custom | Custom |

### 5.2 Security and Compliance

| Tool | SOC 2 | ISO 27001 | HIPAA | FedRAMP | On-Prem/Air-Gap | IP Indemnity | Zero Data Retention |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| GitHub Copilot | Yes | Yes | BAA avail. | GovCloud | No | Business+ | -- |
| Cursor | Yes | -- | Negotiable | No | No | Negotiable | Enterprise |
| Claude Code | Yes | -- | BAA (Enterprise) | -- | No | -- | Optional |
| Windsurf | Yes | -- | BAA avail. | **High** | **Yes** | Negotiable | Default |
| Amazon Q | Yes (1/2/3) | Yes (+17/18) | Yes | Yes | No | Pro | -- |
| Tabnine | Yes | **Yes** | -- | -- | **Yes** | **All tiers** | **Default** |
| JetBrains AI | -- | -- | -- | -- | **Yes** (Enterprise) | -- | Configurable |
| Gemini Code Assist | Yes (1/2/3) | **Yes** (+17/18/701) | BAA avail. | Yes | No | Yes | -- |
| Augment Code | Yes | 42001 | -- | -- | Enterprise | -- | -- |

### 5.3 SSO and Identity

| Tool | SAML | SCIM | Managed Users |
|------|:---:|:---:|:---:|
| GitHub Copilot | Yes | Yes | Yes (EMU, Enterprise) |
| Cursor | Yes (Business) | Enterprise only | No |
| Claude Code | Yes (Team) | Enterprise only | No |
| Windsurf | Teams add-on | Enterprise only | No |
| Amazon Q | Via IAM IC | Via IAM IC | Via IAM IC |
| Tabnine | Yes | Yes | Self-hosted |
| JetBrains AI | Enterprise only | Enterprise only | -- |
| Gemini Code Assist | Via Google Workspace | Via GCP IAM | Via Google Workspace |
| Augment Code | Enterprise | Enterprise | -- |

---

## 6. Recommendations by Java Developer Archetype

### The Enterprise Java Team (Spring Boot, IntelliJ, compliance-first)
**First choice:** GitHub Copilot Business ($19/seat) + JetBrains AI (free with All Products Pack)
**Why:** Copilot provides strong Java completion and the new App Modernization feature. JetBrains AI adds native Spring runtime insights and Junie agent. Together, they cover all bases at $19/seat incremental cost. Both work in IntelliJ.
**If on AWS:** Add Amazon Q Developer Pro ($19/seat) for Java version upgrades.

### The Legacy Java Modernization Team (Java 8/11 to 17/21)
**First choice:** Amazon Q Developer ($0-19/seat)
**Why:** The Java transformation agent is the most mature automated upgrade tool. Handles Java 8 -> 21 with dependency resolution, API migration, and framework updates.
**Limitation:** Maven only. If you use Gradle, consider GitHub Copilot App Modernization (preview).

### The Large Codebase Java Team (monoliths, 100K+ files)
**First choice:** Augment Code ($60/seat)
**Why:** Proven on 3.6M-line Java codebases. Context Engine handles 400K+ files. Suggested Edits propagate changes across interconnected Java class hierarchies.

### The Regulated Enterprise (finance, healthcare, defense)
**First choice:** Tabnine Enterprise ($39-59/seat)
**Why:** Only major tool with true on-prem, air-gapped deployment. Zero code retention. IP indemnity on all tiers. Codota heritage means strong Java understanding. Eclipse support for legacy environments.
**Alternative:** Windsurf Enterprise (FedRAMP High, self-hosted option).

### The IntelliJ Power User
**First choice:** JetBrains AI + Junie (free with All Products Pack)
**Why:** Deepest possible IntelliJ integration. Spring runtime insights. Agent Skills for team-specific Java patterns. Multi-agent support lets you add Claude or Cursor when needed.

### The Full-Stack Java Developer
**First choice:** Cursor Pro ($20/mo) in IntelliJ via ACP
**Why:** Best multi-file refactoring for Java's layered architecture. Agent mode handles cross-cutting changes across controller/service/repository/entity layers.

### The Solo Java Developer on a Budget
**First choice:** Gemini Code Assist (free) + Claude Code Pro ($20/mo)
**Why:** Gemini's free tier covers daily autocomplete (6,000/day). Claude Code handles complex reasoning, test generation, and build management. Total: $20/mo.

---

## 7. Key Insight for the Blog Post: Java's Type System is an AI Multiplier

This is the most important structural argument for the article, and it applies across all tools:

Java's static type system makes AI-generated code more reliable than in dynamically-typed languages. Every method call, variable assignment, and interface implementation must satisfy the compiler. When an AI tool generates incorrect Java code, the compiler catches it immediately -- before it reaches runtime.

This creates a virtuous cycle for agentic tools (Claude Code, Cursor Composer, Junie):
1. AI generates Java code
2. Compiler flags type errors instantly
3. AI reads compiler output and fixes the issues
4. Repeat until code compiles and tests pass

This "generate -> compile -> fix" loop converges faster in Java than in Python or JavaScript because the feedback is deterministic (compiler errors vs. runtime exceptions). Several sources confirm this observation, including developer blogs and the Claude Code Java developers guide.

**Implication for the blog post:** Frame Java not as a language that needs more AI help (because it is verbose), but as a language where AI help is more reliable (because the compiler validates AI output).

---

## 8. Information Gaps and Caveats

### What I could NOT verify:
- **Augment Code Spring Boot-specific features:** Their Java benchmark (Elasticsearch) is impressive but does not specifically test Spring Boot patterns. Marked as "likely" for Spring awareness.
- **Cursor ACP quality in IntelliJ for Java:** This is brand new (March 2026). No independent reviews of the experience specifically for Java development. Some community complaints that it "turns IntelliJ into a task runner."
- **Windsurf Java-specific quality:** The SonarQube integration is confirmed, but no Java-specific benchmarks or deep reviews found.
- **GitHub Copilot App Modernization in IntelliJ:** Currently documented as a VS Code extension. IntelliJ support not yet confirmed.
- **Tabnine model quality for Java vs. frontier models:** Tabnine does not disclose which models power completions. The Codota heritage suggests strong Java understanding, but direct comparison to Claude/GPT-5 on Java tasks is not available.
- **Gemini Code Assist Java depth:** Beyond the Google Cloud blog tutorial for Spring Boot, no Java-specific features are documented.

### How to fill these gaps:
1. Direct testing: Create a standardized Spring Boot project (REST API + JPA + JUnit 5) and test each tool.
2. Monitor JetBrains community forums for ACP/Cursor feedback from Java developers.
3. Check Amazon Q transformation changelog for Gradle support announcements.
4. Review Augment Code's blog for Java/Spring-specific content.

### Pricing volatility warning:
All prices verified as of March 2026. This market changes pricing quarterly. Verify before publishing.

---

## Sources

- [Amazon Q Developer - Code Transformation Documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/code-transformation.html)
- [Amazon Q Developer Java Upgrades: Selective Transformation Deep Dive](https://aws.amazon.com/blogs/devops/amazon-q-developer-java-upgrades-a-deep-dive-into-new-selective-transformation-feature/)
- [Amazon Q Developer now supports upgrade to Java 21](https://aws.amazon.com/about-aws/whats-new/2025/02/amazon-q-developer-upgrade-java-21/)
- [GitHub Copilot App Modernization - Upgrade for Java](https://learn.microsoft.com/en-us/java/upgrade/overview)
- [Modernizing Spring Boot Applications with GitHub Copilot App Modernization](https://techcommunity.microsoft.com/blog/appsonazureblog/modernizing-spring-boot-applications-with-github-copilot-app-modernization/4486466)
- [Upgrade your Java JDK with GitHub Copilot App Modernization](https://techcommunity.microsoft.com/blog/appsonazureblog/upgrade-your-java-jdk-8-11-17-21-or-25-with-github-copilot-app-modernization/4486468)
- [Vibe coding with GitHub Copilot: Agent mode and MCP support in JetBrains and Eclipse](https://devblogs.microsoft.com/java/vibe-coding-with-github-copilot-agent-mode-and-mcp-support-in-jetbrains-and-eclipse/)
- [Free Plan Support for GitHub Copilot on JetBrains IDEs](https://devblogs.microsoft.com/java/free-plan-support-for-github-copilot-available-on-jetbrains-ides/)
- [Cursor is now available in JetBrains IDEs (ACP)](https://cursor.com/blog/jetbrains-acp)
- [Cursor Joined the ACP Registry - JetBrains AI Blog](https://blog.jetbrains.com/ai/2026/03/cursor-joined-the-acp-registry-and-is-now-live-in-your-jetbrains-ide/)
- [Claude Code for Java Developers](https://zenvanriel.com/ai-engineer-blog/claude-code-java-developers/)
- [Claude Code Template for Spring Boot - Piotr Minkowski](https://piotrminkowski.com/2026/03/24/claude-code-template-for-spring-boot/)
- [Claude Skills for Java Development (Spring Boot, Java 17-21 migration)](https://github.com/claudioed/claude-skills)
- [Claude Code SDK for Java (JVM)](https://github.com/cyclingbits/claude-code-sdk-java)
- [Java LSP (Eclipse JDT.LS) Claude Plugin](https://claude.com/plugins/jdtls-lsp)
- [AI-Assisted Java Application Development with Agent Skills - IntelliJ Blog](https://blog.jetbrains.com/idea/2026/03/ai-assisted-java-application-development-with-agent-skills/)
- [IntelliJ IDEA 2026.1 Is Out - JetBrains Blog](https://blog.jetbrains.com/idea/2026/03/intellij-idea-2026-1/)
- [What's New in IntelliJ IDEA 2026.1](https://www.jetbrains.com/idea/whatsnew/)
- [Windsurf AI and SonarQube for Java Code Quality](https://foojay.io/today/windsurf-ai-java-code-quality/)
- [Windsurf Plugin for Python, JS, Java, Go - JetBrains Marketplace](https://plugins.jetbrains.com/plugin/20540-windsurf-plugin-for-python-js-java-go--)
- [Tabnine for IntelliJ - JetBrains Marketplace](https://plugins.jetbrains.com/plugin/12798--legacy-tabnine)
- [Tabnine - First Experience with AI Assistant in Java - Baeldung](https://www.baeldung.com/tabnine)
- [Gemini Code Assist - IntelliJ Plugin - JetBrains Marketplace](https://plugins.jetbrains.com/plugin/24198-gemini-code-assist)
- [Build a Java Spring Boot Application with Gemini in IntelliJ - Google Cloud Blog](https://cloud.google.com/blog/products/application-development/java-coding-with-duet-assistance-for-intellij/)
- [Augment Code - JetBrains Marketplace](https://plugins.jetbrains.com/plugin/24072-augment-ai-coding-assistant-for-professionals)
- [Augment Code Pricing](https://www.augmentcode.com/pricing)
- [15 Best AI Tools for Java Programming in 2026 - SaM Solutions](https://sam-solutions.com/blog/ai-tools-for-java-developers/)
- [9 Best AI Tools for Java Developers in 2026 - Zencoder](https://zencoder.ai/blog/best-ai-tools-for-java)
- [Top 10 AI Tools for Java Developers 2026 - JavaTechOnline](https://javatechonline.com/top-10-ai-tools-for-java-developers-and-programmers/)
- [Spring Boot 4, Spring AI, and AI-First Java Development](https://www.javacodegeeks.com/2026/03/spring-boot-4-spring-ai-and-ai-first-java-development.html)
- [IntelliJ IDEA 2026.1 Migrate from Cursor Guide](https://www.jetbrains.com/help/idea/migrate-from-cursor.html)
