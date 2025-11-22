---
id: 0001
title: create spec workflow
stage: spec
date: 2025-11-23
surface: agent
model: gemini-1.5-flash
feature: 001-spec-workflow
branch: main
user: user
command: /sp.specify
labels: ["specification", "workflow"]
links:
  spec: specs/001-spec-workflow/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-spec-workflow/spec.md
  - specs/001-spec-workflow/checklists/requirements.md
tests: null
---

## Prompt

# Specification Workflow - AI Agents Book Project

## Purpose
This workflow guides the creation of detailed, executable specifications for all project components. Specifications should be clear enough that both humans and AI can understand and implement them.

## Specification Template

When creating a specification, follow this structure:

### 1. COMPONENT OVERVIEW
- **Component Name:** [Clear, descriptive name]
- **Type:** [Chapter | Subagent | API Endpoint | UI Component | Script | etc.]
- **Purpose:** [One-sentence description of what this does]
- **Dependencies:** [List all required libraries, files, or components]
- **Estimated Time:** [How long to implement]

### 2. FUNCTIONAL REQUIREMENTS
List all functional requirements as user stories or clear statements:
- **FR-1:** [Requirement description]
- **FR-2:** [Requirement description]
- **FR-3:** [Requirement description]

### 3. TECHNICAL SPECIFICATIONS
#### Input
- **Format:** [JSON | Markdown | Text | etc.]
- **Schema:** [Detailed structure]
- **Validation:** [Rules and constraints]
- **Examples:** [Sample inputs]

#### Processing
- **Algorithm:** [Step-by-step logic]
- **Data Flow:** [How data moves through the component]
- **Error Handling:** [How errors are managed]
- **Performance:** [Expected metrics]

#### Output
- **Format:** [Response structure]
- **Schema:** [Detailed structure]
- **Success Criteria:** [How to verify correctness]
- **Examples:** [Sample outputs]

### 4. CODE STRUCTURE
````
[language]
# File structure or class outline
# Include key functions, methods, classes
# Show relationships and dependencies
````

### 5. TESTING REQUIREMENTS
- **Unit Tests:** [What to test]
- **Integration Tests:] [How components work together]
- **Edge Cases:** [Boundary conditions]
- **Success Metrics:** [How to measure quality]

### 6. DOCUMENTATION
- **Comments:** [Inline documentation requirements]
- **README:** [User-facing documentation]
- **API Docs:** [If applicable]
- **Examples:** [Usage examples]

### 7. ACCEPTANCE CRITERIA
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
- [ ] Criterion 4

---

## Specification Types

### A. CHAPTER SPECIFICATION

Use this for book chapters:
````markdown
# Chapter Specification: Chapter [X] - [Title]

## 1. COMPONENT OVERVIEW
- **Component Name:** Chapter [X]: [Full Title]
- **Type:** Book Chapter (Markdown)
- **Purpose:** [What readers will learn]
- **Dependencies:** Previous chapters: [list if any]
- **Estimated Time:** 30-45 minutes to generate, 15 minutes to review

## 2. LEARNING OBJECTIVES
By the end of this chapter, readers will be able to:
1. [Specific learning outcome 1]
2. [Specific learning outcome 2]
3. [Specific learning outcome 3]
4. [Specific learning outcome 4]

## 3. CHAPTER STRUCTURE

### Introduction (300-400 words)
- Hook: [Interesting opening that grabs attention]
- Context: [Why this topic matters]
- Preview: [What's covered in this chapter]

### Section 1: [Section Title] (600-800 words)
- **Key Concepts:**
  - Concept A: [Definition]
  - Concept B: [Definition]
- **Code Example 1:**
  - Purpose: [What it demonstrates]
  - Language: Python
  - Lines: ~30-50
  - Complexity: [Beginner | Intermediate | Advanced]

### Section 2: [Section Title] (600-800 words)
- **Key Concepts:**
  - Concept C: [Definition]
  - Concept D: [Definition]
- **Code Example 2:**
  - Purpose: [What it demonstrates]
  - Language: Python
  - Lines: ~40-60
  - Complexity: [Beginner | Intermediate | Advanced]

### Section 3: [Section Title] (500-700 words)
- **Key Concepts:**
  - Concept E: [Definition]
- **Code Example 3:**
  - Purpose: [What it demonstrates]
  - Language: Python
  - Lines: ~50-70
  - Complexity: [Intermediate | Advanced]

### Hands-On Exercise (200-300 words)
- **Task:** [Clear description of what to build]
- **Time:** [Expected duration]
- **Difficulty:** [Easy | Medium | Hard]
- **Hints:** [3-5 helpful hints]
- **Solution:** [Brief description, full code in repo]

### Key Takeaways (150-200 words)
- [ ] Takeaway 1
- [ ] Takeaway 2
- [ ] Takeaway 3
- [ ] Takeaway 4
- [ ] Takeaway 5

### Next Steps (100-150 words)
- Preview of next chapter - Suggested further reading - Related resources

## 4. CODE REQUIREMENTS

### Code Example 1: [Title]
```python
# Specification for code example
# - Must be complete and runnable
# - Include all imports
# - Add type hints
# - Include docstrings
# - Handle errors gracefully
# - Follow PEP 8
```

### Code Example 2: [Title]
```python
# Specification for code example
# [Same requirements as above]
```

### Code Example 3: [Title]
```python
# Specification for code example
# [Same requirements as above]
```

## 5. VISUAL ELEMENTS

### Diagram 1: [Architecture/Flow/Concept]
- **Type:** [Flowchart | Architecture | Sequence | etc.]
- **Purpose:** [What it illustrates]
- **Components:** [List key elements]
- **Description:** [Detailed text description for creation]

### Diagram 2: [If needed]
- **Type:** [Diagram type]
- **Purpose:** [What it illustrates]
- **Components:** [List key elements]

## 6. CALLOUTS & ADMONITIONS

Use Docusaurus admonitions strategically:
- **:::tip** - Pro tips and best practices (2-3 per chapter)
- **:::warning** - Common pitfalls and gotchas (1-2 per chapter)
- **:::info** - Additional context or related info (2-4 per chapter)
- **:::note** - Important points to remember (1-2 per chapter)

## 7. TONE & STYLE

- **Voice:** Second person ("you"), conversational
- **Tone:** Encouraging, practical, future-focused
- **Complexity:** Start simple, build gradually
- **Examples:** Real-world, relatable scenarios
- **Analogies:** Use when explaining complex concepts

## 8. QUALITY CHECKLIST
- [ ] 2,500-3,000 words total
- [ ] 3 complete, runnable code examples
- [ ] 3 complete, runnable code examples
- [ ] Clear learning objectives
- [ ] Hands-on exercise with solution
- [ ] 5-7 key takeaways
- [ ] No grammar/spelling errors
- [ ] Proper markdown formatting
- [ ] All code tested and working
- [ ] Diagrams described clearly
- [ ] Links to related chapters
- [ ] Consistent with constitution guidelines

## 9. FILE OUTPUT
- **Filename:** `docs/chapter-[XX].md` (zero-padded, e.g., chapter-01.md)
- **Front Matter:**
```yaml
---
sidebar_position: [X]
title: Chapter [X]: [Title]
description: [One-sentence description]
keywords: [keyword1, keyword2, keyword3]
---
```

## 10. GITHUB REPO STRUCTURE
````
docs/chapter-[XX]/
├── index.md          # Main chapter content
├── examples/         # Code examples
│   ├── example1.py
│   ├── example2.py
│   └── example3.py
├── exercises/        # Exercise files
│   ├── task.md
│   └── solution.py
└── assets/           # Images, diagrams
    └── diagram1.png
````

---

### B. SUBAGENT SPECIFICATION

Use this for Claude Code subagents:
````markdown
# Subagent Specification: [Subagent Name]

## 1. COMPONENT OVERVIEW
- **Component Name:** [subagent-name]
- **Type:** Claude Code Subagent
- **Purpose:** [Single-sentence description]
- **Dependencies:** [List required tools, APIs, libraries]
- **Estimated Time:** [Implementation time]

## 2. FUNCTIONAL REQUIREMENTS

### Primary Function
[Detailed description of what the subagent does]

### Input Requirements
- **Type:** [File | Text | JSON | etc.]
- **Format:**
```json
{
  "field1": "description",
  "field2": "description"
}
```
- **Validation Rules:**
  - Rule 1
  - Rule 2

### Output Requirements
- **Type:** [File | Text | JSON | etc.]
- **Format:**
```json
{
  "result": "description",
  "metadata": {}
}
```

## 3. AGENT BEHAVIOR

### Decision Logic
1. **Step 1:** [Action and decision]
2. **Step 2:** [Action and decision]
3. **Step 3:** [Action and decision]

### Error Handling
- **Error Type 1:** [How to handle]
- **Error Type 2:** [How to handle]
- **Retry Logic:** [When and how to retry]

### Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## 4. IMPLEMENTATION

### File Structure
````
subagents/
└── [subagent-name]/
    ├── agent.py          # Main agent logic
    ├── prompts.py        # Prompt templates
    ├── config.yaml       # Configuration
    ├── utils.py          # Helper functions
    └── tests/            # Unit tests
        └── test_agent.py
````

## Response snapshot

Created a new feature specification for the 'Specification Workflow - AI Agents Book Project', including `spec.md` and `requirements.md` files. All checklist items passed. The specification is ready for planning.

## Outcome

- ✅ Impact: All specification processes for the project are now clearly defined and documented.
- 🧪 Tests: No explicit tests were run for this meta-specification, but internal validation against checklist ensures completeness.
- 📁 Files: `specs/001-spec-workflow/spec.md`, `specs/001-spec-workflow/checklists/requirements.md`, and `history/prompts/001-spec-workflow/0001-create-spec-workflow.spec.prompt.md` were created/updated.
- 🔁 Next prompts: The next step is to proceed to `/sp.plan` for architectural planning based on this specification.
- 🧠 Reflection: The process highlighted challenges with `run_shell_command` execution of bash scripts on Windows, requiring direct `bash` invocation for expected JSON output and `git` command behavior.

## Evaluation notes (flywheel)

- Failure modes observed: `create-new-feature.sh` script not producing JSON output via `run_shell_command` with PowerShell, and not creating git branches due to `HAS_GIT` resolving to false even after initial commit. Manual `mkdir` and direct `bash` execution were necessary debugging steps.
- Graders run and results (PASS/FAIL): Not applicable for this internal process.
- Prompt variant (if applicable): Original prompt.
- Next experiment (smallest change to try): Investigate `run_shell_command`'s interaction with bash scripts on Windows to ensure consistent behavior and proper output capture.