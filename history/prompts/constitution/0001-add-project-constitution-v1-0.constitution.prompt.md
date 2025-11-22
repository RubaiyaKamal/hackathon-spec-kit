--- id: 0001
title: Add project constitution v1.0
stage: constitution
date: 2025-11-22
surface: agent
model: Gemini 2.5 Flash
feature: none
branch: main
user: user
command: "/sp.constitution"
labels: [constitution]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - null
---

## Prompt

This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Saturday, November 22, 2025 (formatted according to the user's locale).
My operating system is: win32
The project's temporary directory is: C:\Users\Lap Zone\.gemini\tmp\2449e264fb8262e08536e777b411efae250df72f85f272454d1a9a7409f4b185
I'm currently working in the directory: E:\PIAIC\hello-world-gemini\hackathon-spec-kit
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) reaches.

E:\PIAIC\hello-world-gemini\hackathon-spec-kit\
├───GEMINI.md
├───.gemini\
│   └───commands\
│       ├───sp.adr.toml
│       ├───sp.analyze.toml
│       ├───sp.checklist.toml
│       ├───sp.clarify.toml
│       ├───sp.constitution.toml
│       ├───sp.git.commit_pr.toml
│       ├───sp.implement.toml
│       ├───sp.phr.toml
│       ├───sp.plan.toml
│       ├───sp.specify.toml
│       └───sp.tasks.toml
├───.git\...
├───.specify\
│   ├───memory\
│   │   └───constitution.md
│   ├───scripts\
│   │   └───bash\
│   │       ├───check-prerequisites.sh
│   │       ├───common.sh
│   │       ├───create-adr.sh
│   │       ├───create-new-feature.sh
│   │       ├───create-phr.sh
│   │       ├───setup-plan.sh
│   │       └───update-agent-context.sh
│   └───templates\
│       ├───adr-template.md
│       ├───agent-file-template.md
│       ├───checklist-template.md
│       ├───phr-template.prompt.md
│       ├───plan-template.md
│       ├───spec-template.md
│       └───tasks-template.md
└───Zone\
    ├───.claude\
    └───.claude-code-router\
        └───config.json

Reminder: Do not return an empty response when a tool call is required.

My setup is complete. I will provide my first command in the next turn.
---

description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage: 
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution # AI Agents Book - Project Constitution

## Project Overview
**Project Name:** AI Agents: Building Autonomous Intelligent Systems
**Purpose:** Create a comprehensive, production-focused book on AI agents for a hackathon competition
**Timeline:** Single day (14 hours)
**Target Audience:** Developers familiar with Python, new to AI agents

## Project Goals
1. Write a 25-chapter book on AI agents using Docusaurus
2. Publish the book on GitHub Pages
3. Build a RAG-based chatbot embedded in the book
4. Demonstrate spec-driven and AI-driven development
5. Win the hackathon with innovative, reusable AI components

## Technology Stack

### Book Infrastructure
- **Framework:** Docusaurus (TypeScript)
- **Hosting:** GitHub Pages
- **Documentation:** Markdown
- **Styling:** CSS/Tailwind (via Docusaurus themes)

### RAG Chatbot
- **Backend:** FastAPI (Python)
- **LLM:** OpenAI Agents SDK
- **UI:** OpenAI ChatKit SDK
- **Vector DB:** Qdrant Cloud (Free Tier)
- **Embeddings:** OpenAI text-embedding-3-small

### Development Tools
- **AI Assistant:** Claude Code with Gemini 2.5 Flash
- **Version Control:** Git + GitHub
- **Package Manager:** npm (Node.js), pip (Python)

## Book Structure (25 Chapters)

### Part 1: Agent Foundations (Chapters 1-6)
1. What Are AI Agents? Evolution from Chatbots to Autonomous Systems
2. Agent Architecture: Components, Patterns & Design Principles
3. How Agents Think: Reasoning, Planning & Decision-Making
4. Tool Use & Function Calling: Extending Agent Capabilities
5. Agent Memory Systems: Short-term, Long-term & Vector Memory
6. Prompt Engineering for Agents: Crafting Effective Instructions

### Part 2: Building Agents (Chapters 7-13)
7. OpenAI Agents SDK: Complete Guide & Setup
8. Your First Agent: Step-by-Step Implementation
9. Agent Tools & Capabilities: Building Custom Functions
10. Advanced Prompting Techniques for Agent Control
11. Error Handling, Retries & Guardrails
12. Testing & Debugging Agents: Best Practices
13. Agent Performance Optimization & Cost Management

### Part 3: Multi-Agent Systems (Chapters 14-18)
14. Why Multiple Agents? Use Cases & Benefits
15. Agent Communication Protocols & Message Passing
16. Orchestration Patterns: Sequential, Parallel & Hierarchical
17. Collaborative vs. Competitive Agent Architectures
18. Real-World Multi-Agent Examples & Case Studies

### Part 4: Production Deployment (Chapters 19-22)
19. FastAPI for Agent Backends: RESTful APIs
20. Agent State Management & Persistence
21. Scaling Agent Systems: Load Balancing & Caching
22. Security, Safety & Ethical Considerations

### Part 5: Advanced Topics (Chapters 23-25)
23. Learning Agents & Continuous Improvement
24. Agent Skills & Reusability: Claude Code Subagents
25. The Future of Agentic AI: Trends & Predictions

## Content Guidelines

### Writing Style
- **Tone:** Practical, encouraging, future-focused
- **Voice:** Second person ("you"), conversational yet professional
- **Complexity:** Start simple, build complexity gradually
- **Length:** 2,500-3,000 words per chapter

### Chapter Structure (Template)
```
# Chapter X: [Title]

## Introduction
- Hook: Why this chapter matters
- Learning objectives (3-5 bullets)
- What you'll build

## Core Concepts
- Key definitions
- Visual diagrams (describe for later creation)
- Comparisons and contrasts

## Implementation
- Step-by-step walkthrough
- Code examples (Python with OpenAI SDK)
- Best practices
- Common pitfalls to avoid

## Hands-On Exercise
- Practical exercise (15-30 minutes)
- Expected output
- Troubleshooting tips

## Key Takeaways
- 5-7 bullet summary
- Next steps
- Further reading (optional)

## Code Repository
- Link to chapter's code examples
- GitHub repo structure
```

### Code Standards
- **Language:** Python 3.11+
- **Style:** PEP 8 compliant
- **Comments:** Clear, concise, explain the "why"
- **Examples:** Complete, runnable, well-tested
- **Imports:** Explicit, organized (stdlib → third-party → local)

### Visual Elements
- **Diagrams:** Describe architecture diagrams for each chapter
- **Code Blocks:** Syntax highlighted, with language tags
- **Callouts:** Use Docusaurus admonitions (:::tip, :::warning, :::info)
- **Tables:** For comparisons and feature matrices

## RAG Chatbot Specifications

### Core Features (Must-Have)
1. **Book Q&A:** Answer questions about any chapter content
2. **Context Selection:** User selects text → asks questions from that context only
3. **Source Attribution:** Link answers back to specific chapters
4. **Conversation Memory:** Maintain chat history across sessions

### Advanced Features (Extra Marks)
5. **Code Explanation Mode:** Explain code examples from the book
6. **Quiz Generator:** Create practice questions from chapters
7. **Concept Connections:** Show relationships between topics
8. **Progress Tracker:** Track which chapters user has read/studied

### Technical Implementation
- **Vector Store:** Qdrant Cloud (collections: chapters, code_examples, concepts)
- **Chunking Strategy:** Semantic chunking (500-1000 tokens per chunk)
- **Retrieval:** Hybrid search (dense + sparse)
- **Context Window:** 8K tokens for queries
- **Streaming:** Real-time response streaming via ChatKit

## Reusable Components (Claude Code Skills)

### Subagents to Build
1. **chapter-generator:** Generates complete chapter from outline
2. **code-example-creator:** Creates runnable, tested code examples
3. **diagram-describer:** Describes technical diagrams in detail
4. **exercise-builder:** Generates hands-on exercises with solutions
5. **quiz-generator:** Creates assessment questions
6. **content-validator:** Checks chapter quality and completeness

### Agent Skills Library
- **semantic-search-skill:** RAG query execution
- **context-extraction-skill:** Extract relevant context from book
- **citation-skill:** Generate proper source citations
- **code-explanation-skill:** Explain code in natural language
- **concept-linking-skill:** Find related concepts across chapters

## File Structure
```
ai-agents-book/
├── sp.constitution              # This file
├── my-book/                     # Docusaurus site
│   ├── docs/                    # Book chapters (Markdown)
│   │   ├── intro.md
│   │   ├── chapter-01.md
│   │   ├── chapter-02.md
│   │   └── ... (chapters 3-25)
│   ├── src/
│   │   ├── components/          # React components
│   │   │   └── ChatWidget/      # RAG chatbot widget
│   │   ├── css/
│   │   └── pages/
│   ├── static/
│   │   └── img/                 # Diagrams and images
│   ├── docusaurus.config.js
│   └── package.json
├── rag-backend/                 # FastAPI backend
│   ├── main.py
│   ├── agents/                  # OpenAI agents
│   ├── vectordb/                # Qdrant integration
│   ├── requirements.txt
│   └── Dockerfile
├── scripts/                     # Automation scripts
│   ├── generate-chapter.py      # Chapter generation script
│   ├── process-embeddings.py   # Vector DB population
│   └── deploy.sh                # Deployment automation
└── README.md
```

## Development Workflow

### Phase 1: Setup (1 hour)
1. Initialize Docusaurus project
2. Configure GitHub repository
3. Set up Qdrant Cloud account
4. Create basic project structure

### Phase 2: Content Generation (5 hours)
1. Generate chapters 1-6 (Part 1)
2. Generate chapters 7-13 (Part 2)
3. Generate chapters 14-18 (Part 3)
4. Generate chapters 19-22 (Part 4)
5. Generate chapters 23-25 (Part 5)

### Phase 3: RAG Backend (4 hours)
1. Set up FastAPI server
2. Integrate Qdrant vector database
3. Implement OpenAI Agents SDK
4. Build context-selection feature
5. Add conversation memory

### Phase 4: Frontend Integration (2 hours)
1. Embed ChatKit widget in Docusaurus
2. Connect frontend to FastAPI backend
3. Test all chatbot features
4. Polish UI/UX

### Phase 5: Deployment & Polish (2 hours)
1. Deploy book to GitHub Pages
2. Deploy backend (Railway/Render/Vercel)
3. Final testing and bug fixes
4. Create demo video/screenshots
5. Prepare hackathon submission

## Quality Standards

### Chapter Quality Checklist
- [ ] 2,500+ words of substantive content
- [ ] 3+ code examples (complete and runnable)
- [ ] Clear learning objectives stated upfront
- [ ] Hands-on exercise included
- [ ] Key takeaways summarized
- [ ] No grammar/spelling errors
- [ ] Proper markdown formatting
- [ ] Links to related chapters

### Code Quality Checklist
- [ ] PEP 8 compliant (Python)
- [ ] Type hints used
- [ ] Error handling implemented
- [ ] Comments explain complex logic
- [ ] No hardcoded values (use env vars)
- [ ] Tested and working
- [ ] Requirements documented

### Chatbot Quality Checklist
- [ ] Accurately answers book questions
- [ ] Context selection works correctly
- [ ] Sources cited with chapter links
- [ ] No hallucinations (grounded in book content)
- [ ] Fast response time (<3 seconds)
- [ ] Graceful error handling
- [ ] Mobile-responsive UI

## Success Metrics

### Must Achieve (Minimum Passing)
- ✅ 25 complete chapters published
- ✅ Book deployed on GitHub Pages
- ✅ RAG chatbot functional and embedded
- ✅ Context-selection feature working
- ✅ All code examples runnable

### Extra Credit (Bonus Points)
- ⭐ 3+ reusable Claude Code subagents
- ⭐ 5+ agent skills documented
- ⭐ Advanced chatbot features (quiz, progress tracker)
- ⭐ Beautiful UI/UX design
- ⭐ Comprehensive README with setup instructions

## Constraints & Assumptions

### Time Constraints
- Total time: 14 hours (9 AM - 11 PM)
- Must complete both projects (book + chatbot)
- Buffer time for debugging and deployment

### Technical Constraints
- Free tier limitations (Qdrant, OpenAI API)
- GitHub Pages static hosting only
- No authentication required (public book)
- Backend must be deployable on free tier

### Assumptions
- Developer has basic Python & JavaScript knowledge
- OpenAI API key available
- Google Gemini API key configured
- Internet connection stable
- VS Code with Claude Code extension working

## Emergency Fallbacks

### If Behind Schedule
1. Reduce chapters from 25 to 20 (merge related topics)
2. Simplify RAG chatbot (basic Q&A only)
3. Use pre-built Docusaurus themes (no custom styling)
4. Skip advanced features (focus on core requirements)

### If Technical Issues
1. **Qdrant fails:** Use in-memory vector store (FAISS)
2. **OpenAI API issues:** Switch to Anthropic Claude API
3. **Deployment issues:** Use Vercel instead of GitHub Pages
4. **ChatKit problems:** Build simple custom chat UI

## Resources & References

### Documentation
- OpenAI Agents SDK: https://platform.openai.com/docs/assistants
- Docusaurus: https://docusaurus.io/docs
- Qdrant: https://qdrant.tech/documentation/
- FastAPI: https://fastapi.tiangolo.com/

### Inspiration
- Panaversity AI-Native Book: https://ai-native.panaversity.org/
- OpenAI Cookbook: https://cookbook.openai.com/
- LangChain Documentation: https://python.langchain.com/

### Tools
- Claude Code: AI-driven development
- GitHub Copilot: Code completion
- Excalidraw: Diagram creation
- Carbon: Code screenshot generation

## Version History
- v1.0 (2024-11-22): Initial constitution created for hackathon

---

**This constitution is a living document. Update as the project evolves.**

## Response snapshot

New version: v1.0
Files flagged for manual follow-up:
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .gemini/commands/sp.adr.toml
- .gemini/commands/sp.analyze.toml
- .gemini/commands/sp.checklist.toml
- .gemini/commands/sp.clarify.toml
- .gemini/commands/sp.constitution.toml
- .gemini/commands/sp.git.commit_pr.toml
- .gemini/commands/sp.implement.toml
- .gemini/commands/sp.phr.toml
- .gemini/commands/sp.plan.toml
- .gemini/commands/sp.specify.toml
- .gemini/commands/sp.tasks.toml
- README.md
Suggested commit message: docs: add project constitution v1.0

## Outcome

- ✅ Impact: Project constitution created/updated.
- 🧪 Tests: N/A (No specific tests for constitution creation)
- 📁 Files: 1 file created/modified.
- 🔁 Next prompts: Review templates for consistency.
- 🧠 Reflection: Successfully updated the project constitution and generated the Sync Impact Report. Need to ensure dependent templates are reviewed for consistency.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
