---
id: 0001
title: Update project constitution with new content
stage: constitution
date: 2025-11-23
surface: agent
model: gemini-2.5-flash
feature: none
branch: 001-spec-workflow
user: Rubaiya-Kamal
command: /sp.constitution
labels: ["constitution", "project-governance", "documentation"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

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

/sp.constitution # sp.constitution
# Constitution for Physical AI & Humanoid Robotics Book
# Version: 1.0.0
# Last Updated: 2025-11-23

# ============================================================================ # PROJECT METADATA # ============================================================================ 

project:
  name: "Physical AI & Humanoid Robotics: A Comprehensive Guide"
  version: "1.0.0"
  type: "technical-book"
  platform: "docusaurus"
  deployment: "github-pages"
  license: "MIT"
  language: "English"
  
repository:
  url: "https://github.com/yourusername/physical-ai-book"
  main_branch: "main"
  deployment_branch: "gh-pages"

# ============================================================================ # CORE PRINCIPLES # ============================================================================ 

principles:
  development_approach: "AI-Driven & Spec-Driven"
  
  ai_driven:
    description: "Leverage AI tools throughout the development process"
    practices:
      - "Use AI for content generation and ideation"
      - "Employ AI for code examples and implementations"
      - "Utilize AI for research and fact-checking"
      - "Apply AI for content review and improvement"
    
  spec_driven:
    description: "Define clear specifications before implementation"
    practices:
      - "Each chapter has defined learning objectives"
      - "Content follows testable specifications"
      - "Exercises validate understanding"
      - "Checkpoints ensure progress"

  core_values:
    - "Technical Accuracy: All information must be factually correct and current"
    - "Practical Utility: Content must be actionable and implementable"
    - "Accessibility: Complex topics explained clearly for various skill levels"
    - "Open Source: Free access to knowledge and collaborative improvement"
    - "Ethical Responsibility: Address safety, ethics, and societal impact"

# ============================================================================ # CONTENT STANDARDS # ============================================================================ 

content_standards:
  
  writing_style:
    tone: "professional yet conversational"
    perspective: "second-person (you)"
    tense: "present tense for explanations, past for history"
    technical_level: "intermediate with beginner-friendly explanations"
    
  structure_requirements:
    every_chapter_must_have:
      - "YAML frontmatter with sidebar_position"
      - "Chapter title (H1)"
      - "Learning Objectives section"
      - "Main content with proper heading hierarchy (H2, H3)"
      - "Code examples (where applicable)"
      - "Visual aids (diagrams, tables, images)"
      - "Exercises or practical activities"
      - "Checkpoint/summary"
      - "Further reading section"
      - "Next chapter preview"
    
  content_types:
    theory:
      format: "prose with clear explanations"
      requirements:
        - "Define key terms"
        - "Provide context and motivation"
        - "Use analogies where helpful"
        - "Include citations for claims"
    
    code_examples:
      languages: ["Python", "JavaScript", "C++", "YAML", "Markdown"]
      requirements:
        - "Must be runnable and tested"
        - "Include comments explaining key sections"
        - "Use consistent naming conventions"
        - "Provide setup/installation instructions"
        - "Show expected output"
    
    mathematical_content:
      format: "KaTeX/LaTeX notation"
      requirements:
        - "Explain notation before use"
        - "Provide intuitive interpretation"
        - "Include worked examples"
        - "Avoid unnecessary complexity"
    
    diagrams:
      preferred_tools: ["Mermaid", "SVG", "PNG"]
      requirements:
        - "Clear labels and legends"
        - "Consistent color scheme"
        - "Alt text for accessibility"
        - "Source files in /static/diagrams/"

# ============================================================================ # TECHNICAL SPECIFICATIONS # ============================================================================ 

technical_specs:
  
  docusaurus_config:
    version: "^3.0.0"
    theme: "classic"
    plugins_required:
      - "docusaurus-plugin-sass"
      - "@docusaurus/plugin-ideal-image"
      - "remark-math"
      - "rehype-katex"
    
  file_structure:
    docs_organization: "by-part-and-chapter"
    naming_convention: "##-chapter-name.md (e.g., 01-introduction.md)"
    asset_location: "/static/"
    image_path: "/static/img/"
    diagram_path: "/static/diagrams/"
    
  markdown_standards:
    frontmatter_required:
      - "sidebar_position: <number>"
    optional_frontmatter:
      - "title: <string>"
      - "description: <string>"
      - "keywords: [<array>]"
      - "image: <url>"
    
    formatting:
      headings:
        - "# for chapter titles (H1)"
        - "## for major sections (H2)"
        - "### for subsections (H3)"
        - "#### rarely used (H4)"
      
      emphasis:
        bold: "**text** for key terms and strong emphasis"
        italic: "*text* for subtle emphasis"
        code: "`code` for inline code and technical terms"
      
      lists:
        unordered: "- for bullet points"
        ordered: "1. for numbered steps"
        task_lists: "- [ ] for checkboxes"
      
      code_blocks:
        format: "```language\ncode\n```"
        always_specify_language: true
        add_titles: "```python title='example.py'"
      
      links:
        internal: "[link text](./relative-path.md)"
        external: "[link text](https://url.com)"
        footnotes: "Use when needed for citations"
      
      admonitions:
        types: ["note", "tip", "info", "warning", "danger"]
        usage: ":::note\nContent\n:::"

# ============================================================================ # QUALITY ASSURANCE # ============================================================================ 

quality_assurance:
  
  content_review:
    technical_accuracy:
      - "Verify all code examples execute correctly"
      - "Confirm mathematical formulations"
      - "Validate external links"
      - "Check for outdated information"
    
    readability:
      - "Run through Hemingway Editor or similar"
      - "Check Flesch Reading Ease score (target: 60-70)"
      - "Verify heading hierarchy"
      - "Ensure consistent terminology"
    
    completeness:
      - "All learning objectives addressed"
      - "Exercises cover key concepts"
      - "Further reading includes recent sources"
      - "No TODOs or placeholder text"
  
  testing:
    code_examples:
      - "All code must be tested in target environment"
      - "Dependencies documented"
      - "Error handling included"
    
    links:
      - "Check all internal links resolve"
      - "Verify external links are active"
      - "Use link checker tool in CI/CD"
    
    build:
      - "npm run build succeeds without errors"
      - "No broken links in production build"
      - "Images load correctly"
      - "Search functionality works"

# ============================================================================ # CONTRIBUTION GUIDELINES # ============================================================================ 

contribution_guidelines:
  
  who_can_contribute:
    - "Anyone with expertise in robotics, AI, or related fields"
    - "Developers with relevant code examples"
    - "Educators with teaching insights"
    - "Industry professionals with practical experience"
  
  contribution_types:
    content:
      - "New chapters or sections"
      - "Improvements to existing content"
      - "Additional examples or case studies"
      - "Translations"
    
    technical:
      - "Bug fixes"
      - "Code example improvements"
      - "Build process enhancements"
      - "Accessibility improvements"
    
    design:
      - "Diagrams and illustrations"
      - "UI/UX improvements"
      - "Custom components"
  
  submission_process:
    1: "Fork the repository"
    2: "Create a feature branch (feature/chapter-name or fix/issue-description)"
    3: "Make changes following this constitution"
    4: "Test locally (npm start, npm run build)"
    5: "Submit pull request with clear description"
    6: "Address review feedback"
    7: "Merge after approval"
  
  review_criteria:
    must_have:
      - "Follows content standards"
      - "Technically accurate"
      - "No plagiarism"
      - "Proper citations"
      - "Builds successfully"
    
    nice_to_have:
      - "Includes visual aids"
      - "Interactive examples"
      - "Multiple perspectives"

# ============================================================================ # CHAPTER SPECIFICATIONS # ============================================================================ 

chapter_specifications:
  
  template:
    structure: |
      ---
      sidebar_position: <number>
      ---
      
      # Chapter <number>: <Title>      
      ## Learning Objectives
      
      By the end of this chapter, you will:
      - ✅ Objective 1
      - ✅ Objective 2
      - ✅ Objective 3
      
      ## Introduction
      
      [Context and motivation]
      
      ## Main Content
      
      ### Section 1
      [Content]
      
      ### Section 2
      [Content]
      
      ## Code Examples
      
      ```python
      # Example code
      ```
      
      ## Practical Exercises
      
      1. Exercise 1
      2. Exercise 2
      
      ## Summary
      
      [Key takeaways]
      
      ## Further Reading
      
      - Resource 1
      - Resource 2
      
      ## Next Chapter
      
      [Preview of next chapter]
      
      ---
      
      **Checkpoint**: [Self-assessment question]  
  
  part_1_foundations:
    chapters:
      - number: 1
        title: "Introduction to Physical AI"
        objectives:
          - "Define Physical AI and embodied intelligence"
          - "Understand the embodiment hypothesis"
          - "Identify key challenges in Physical AI"
        topics:
          - "What is Physical AI"
          - "Virtual vs Physical AI"
          - "Current state-of-the-art"
          - "The Physical AI stack"
      
      - number: 2
        title: "History of Humanoid Robotics"
        objectives:
          - "Trace evolution from automatons to modern robots"
          - "Understand technological breakthroughs"
          - "Recognize development patterns"
        topics:
          - "Ancient dreams to modern reality"
          - "Key milestones timeline"
          - "Notable robots through history"
          - "Why now? The 2025 convergence"
      
      - number: 3
        title: "Core Technologies & Components"
        objectives:
          - "Understand humanoid robot architecture"
          - "Learn about actuators and sensors"
          - "Explore compute and power systems"
        topics:
          - "Mechanical design principles"
          - "Actuation systems"
          - "Sensor suite"
          - "Computing architecture"
          - "Power and energy management"
  
  part_2_perception:
    chapters:
      - number: 4
        title: "Computer Vision for Robotics"
      - number: 5
        title: "Sensor Fusion"
      - number: 6
        title: "3D Perception & SLAM"
  
  part_3_intelligence:
    chapters:
      - number: 7
        title: "Machine Learning for Robotics"
      - number: 8
        title: "Reinforcement Learning"
      - number: 9
        title: "Foundation Models for Robotics"
  
  part_4_motion:
    chapters:
      - number: 10
        title: "Kinematics & Dynamics"
      - number: 11
        title: "Motion Planning"
      - number: 12
        title: "Whole-Body Control"
  
  part_5_applications:
    chapters:
      - number: 13
        title: "Manufacturing & Industry"
      - number: 14
        title: "Healthcare & Assistance"
      - number: 15
        title: "Service & Consumer Robotics"
  
  part_6_future:
    chapters:
      - number: 16
        title: "Ethics & Safety"
      - number: 17
        title: "Future Trends"
      - number: 18
        title: "Build Your Own Robot"

# ============================================================================ # CITATION & ATTRIBUTION # ============================================================================ 

citation_standards:
  
  format: "IEEE style for technical content"
  
  requirements:
    papers:
      - "Include authors, title, conference/journal, year"
      - "Provide DOI or arXiv link when available"
      - "Example: [1] Smith, J. et al. 'Robot Learning', ICRA 2024"
    
    books:
      - "Include author, title, publisher, year"
      - "Example: Brooks, R. 'Flesh and Machines', Pantheon, 2002"
    
    websites:
      - "Include organization/author, title, URL, access date"
      - "Example: Boston Dynamics. 'Atlas Robot'. https://... (accessed 2025-11-23)"
    
    code:
      - "Credit original authors"
      - "Include license information"
      - "Link to source repository"
  
  copyright:
    policy: "Respect all intellectual property rights"
    images: "Use only licensed or self-created images"
    code: "Use permissively licensed code or write original"
    fair_use: "Cite sources when quoting or paraphrasing"

# ============================================================================ # DEPLOYMENT & MAINTENANCE # ============================================================================ 

deployment:
  
  platform: "GitHub Pages"
  
  build_process:
    commands:
      install: "npm install"
      dev: "npm start"
      build: "npm run build"
      deploy: "GIT_USER=<username> npm run deploy"
    
    ci_cd:
      tool: "GitHub Actions"
      triggers:
        - "push to main branch"
        - "pull request to main"
      jobs:
        - "lint"
        - "build"
        - "test-links"
        - "deploy (on main only)"
  
  versioning:
    scheme: "Semantic Versioning (semver)"
    format: "MAJOR.MINOR.PATCH"
    changelog: "CHANGELOG.md in root"
    tagging: "Git tags for releases"
  
  maintenance:
    regular_tasks:
      - task: "Update dependencies"
        frequency: "monthly"
      - task: "Check for broken links"
        frequency: "weekly"
      - task: "Review and update content for accuracy"
        frequency: "quarterly"
      - task: "Respond to issues and PRs"
        frequency: "as needed"

# ============================================================================ # TOOLS & RESOURCES # ============================================================================ 

recommended_tools:
  
  writing:
    - "Visual Studio Code with Markdown extensions"
    - "Obsidian for content planning"
    - "Grammarly or LanguageTool for proofreading"
  
  diagramming:
    - "Mermaid for flowcharts and diagrams"
    - "Excalidraw for hand-drawn style diagrams"
    - "draw.io for technical diagrams"
  
  code:
    - "Jupyter Notebooks for interactive examples"
    - "GitHub Codespaces for collaborative development"
    - "Python 3.10+ for examples"
  
  testing:
    - "Docusaurus built-in link checker"
    - "Vale for style checking"
    - "pytest for code examples"
  
  ai_assistance:
    - "Claude for content generation and review"
    - "GitHub Copilot for code examples"
    - "ChatGPT for research and ideation"

# ============================================================================ # ACCESSIBILITY REQUIREMENTS # ============================================================================ 

accessibility_requirements:
  
  wcag_compliance: "WCAG 2.1 Level AA"
  
  requirements:
    images:
      - "All images must have descriptive alt text"
      - "Avoid text in images; use captions instead"
      - "Provide descriptions for complex diagrams"
    
    color:
      - "Maintain 4.5:1 contrast ratio for text"
      - "Don't rely solely on color to convey information"
      - "Support dark mode"
    
    navigation:
      - "Keyboard accessible"
      - "Logical heading hierarchy"
      - "Skip navigation links"
    
    content:
      - "Plain language where possible"
      - "Define technical terms on first use"
      - "Provide transcripts for video content"
      - "Captions for audio content"

# ============================================================================ # ETHICAL GUIDELINES # ============================================================================ 

ethical_guidelines:
  
  content_responsibility:
    - "Present balanced perspectives on controversial topics"
    - "Acknowledge limitations and uncertainties"
    - "Discuss safety implications of technologies"
    - "Consider societal impact"
  
  ai_use_transparency:
    - "Acknowledge when AI tools are used"
    - "Don't present AI-generated content as fully human-written without review"
    - "Verify AI-generated technical information"
  
  inclusivity:
    - "Use inclusive language"
    - "Represent diverse perspectives"
    - "Avoid stereotypes in examples"
    - "Consider global audience"
  
  safety_considerations:
    - "Warn about dangerous practices"
    - "Emphasize safety in robotics projects"
    - "Discuss ethical implications of AI in robotics"
    - "Address bias and fairness in AI systems"

# ============================================================================ # PERFORMANCE TARGETS # ============================================================================ 

performance_targets:
  
  build_time: "< 60 seconds"
  page_load: "< 3 seconds"
  lighthouse_scores:
    performance: "> 90"
    accessibility: "> 95"
    best_practices: "> 90"
    seo: "> 90"
  
  content_goals:
    chapters: 18
    total_words: "~100,000"
    code_examples: "~100"
    diagrams: "~50"
    exercises: "~50"

# ============================================================================ # CHANGE LOG # ============================================================================ 

changelog:
  - version: "1.0.0"
    date: "2025-11-23"
    changes:
      - "Initial constitution created"
      - "Defined core principles and standards"
      - "Established chapter specifications"
      - "Set quality assurance guidelines"

# ============================================================================ # APPROVAL & SIGN-OFF # ============================================================================ 

approval:
  status: "APPROVED"
  approved_by: "Project Lead"
  date: "2025-11-23"
  next_review: "2026-02-23"

# ============================================================================ # END OF CONSTITUTION # ============================================================================ 

## Response snapshot

The project constitution has been successfully updated to version 1.0.0. A detailed Sync Impact Report has been prepended to the file, and a Prompt History Record (PHR-0001) has been created to log this event.

## Outcome

- ✅ Impact: The project constitution was completely replaced with a new, detailed version.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md was overwritten.
- 🔁 Next prompts: Manually update `.specify/templates/plan-template.md`.
- 🧠 Reflection: The `create-phr.sh` script did not work as expected, requiring a fallback to the agent-native file creation flow.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` exited with code 0 but produced no output and did not create the file, likely because the parent directory structure was missing.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ensure shell scripts are robust enough to create necessary directory structures before attempting to write files.
