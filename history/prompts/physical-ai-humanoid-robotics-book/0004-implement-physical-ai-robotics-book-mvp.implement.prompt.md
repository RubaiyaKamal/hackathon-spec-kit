---
id: 0004
title: Implement Physical AI Robotics Book MVP
stage: implement
date: 2025-11-23
surface: agent
model: gemini-1.5-flash
feature: physical-ai-humanoid-robotics-book
branch: physical-ai-humanoid-robotics-book
user: (Not provided)
command: /sp.implement
labels: ["implementation", "mvp", "chapter-1", "docusaurus", "setup", "foundational"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - specs/physical-ai-humanoid-robotics-book/clarification.md (created)
 - scripts/validate_chapter.py (created)
 - scripts/check_all_chapters.sh (created)
 - static/diagrams/physical-ai-stack.mmd (created)
 - docs/part1-foundations/01-introduction.md (created)
 - specs/physical-ai-humanoid-robotics-book/tasks.md (modified)
 - .specify/scripts/bash/check-prerequisites.sh (modified and reverted)
 - docs/docusaurus.config.js (modified)
 - docs/part1-foundations/02-history.md (modified)
 - docs/part1-foundations/03-core-tech.md (created)
 - docs/part2-perception/examples/yolo_detection_example.py (created)
 - docs/part2-perception/examples/depth_estimation_example.py (created)
 - docs/part2-perception/examples/vlm_example.py (created)
 - docs/part2-perception/04-computer-vision.md (created)
tests:
 - python scripts/validate_chapter.py docs/part1-foundations/01-introduction.md (PASSED)
 - python scripts/validate_chapter.py docs/part1-foundations/02-history.md (PASSED)
 - python scripts/validate_chapter.py docs/part1-foundations/03-core-tech.md (PASSED)
 - python scripts/validate_chapter.py docs/part2-perception/04-computer-vision.md (PASSED)
---

## Prompt

```text
This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Sunday, November 23, 2025 (formatted according to the user's locale).
My operating system is: win32
The project's temporary directory is: C:\Users\Lap Zone\.gemini\tmp\2449e264fb8262e08536e777b411efae250df72f85f272454d1a9a7409f4b185
I'm currently working in the directory: E:\PIAIC\hello-world-gemini\hackathon-spec-kit
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) was reached.

E:\PIAIC\hello-world-gemini\hackathon-spec-kit\
├───.gitignore
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
├───.git...
├───.specify\
│   ├───memory\
│   │   └───constitution.md
│   ├──scripts\
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
├───docs\
│   ├───.gitignore
│   ├───docusaurus.config.js
│   ├───package-lock.json
│   ├───package.json
│   ├───README.md
│   ├───sidebars.js
│   ├───.docusaurus...
│   ├───blog\
│   │   ├───2019-05-28-first-blog-post.md
│   │   ├───2019-05-29-long-blog-post.md
│   │   ├───2021-08-01-mdx-blog-post.mdx
│   │   ├───authors.yml
│   │   ├───tags.yml
│   │   └───2021-08-26-welcome\
│   │       ├───docusaurus-plushie-banner.jpeg
│   │       └───index.md
│   ├───docs\
│   │   ├───intro.md
│   │   ├───tutorial-basics\
│   │   │   ├───_category_.json
│   │   │   ├───congratulations.md
│   │   │   ├───create-a-blog-post.md
│   │   │   ├───create-a-document.md
│   │   │   ├───create-a-page.md
│   │   │   ├───deploy-your-site.md
│   │   │   └───markdown-features.mdx
│   │   └───tutorial-extras\
│   │       ├───_category_.json
│   │       ├───manage-docs-versions.md
│   │       ├───translate-your-site.md
│   │       └───img\
│   │           ├───docsVersionDropdown.png
│   │           └───localeDropdown.png
│   ├───node_modules...
│   ├───src\
│   │   ├───components\
│   │   │   └───HomepageFeatures\
│   │   │       ├───index.js
│   │   │       └───styles.module.css
│   │   ├───css\
│   │   │   └───custom.css
│   │   └───pages\
│   │       ├───index.js
│   │       ├───index.module.css
│   │       └───markdown-page.md
│   └───static\
│       ├───.nojekyll
│       └───img\
│           ├───docusaurus-social-card.jpg
│           ├───docusaurus.png
│           ├───favicon.ico
│           ├───logo.svg
│           ├───undraw_docusaurus_mountain.svg
│           ├───undraw_docusaurus_react.svg
│           └───undraw_docusaurus_tree.svg
├───history\
│   └───prompts\
│       ├───001-robotics-book-spec\
│       │   └───0001-create-specification-clarification-document.spec.prompt.md
│       ├───constitution\
│       │   └───0001-update-project-constitution-with-new-content.constitution.prompt.md
│       ├───general\
│       │   ├───002-docusaurus-terminal-inquiry.general.prompt.md
│       │   └───003-docusaurus-slow-build-inquiry.general.prompt.md
│       └───physical-ai-humanoid-robotics-book\
│           ├───0002-create-project-plan-for-robotics-book.plan.prompt.md
│           └───0003-generate-tasks-for-robotics-book.tasks.prompt.md
├───specs\
│   ├───001-robotics-book-spec\
│   │   ├───clarification.md
│   │   ├───spec.md
│   │   └───checklists\
│   │       └───requirements.md
│   └───physical-ai-humanoid-robotics-book\
│       ├───data-model.md
│       ├───plan.md
│       ├───quickstart.md
│       ├───research.md
│       ├───spec.md
│       ├───tasks.md
│       └───contracts\
└───Zone\
    ├───.claude\
    └───.claude-code-router\
        └───config.json

Reminder: Do not return an empty response when a tool call is required.

My setup is complete. I will provide my first command in the next turn.---

description: Execute the implementation plan by processing and executing all tasks defined in tasks.md
---

## Prompt

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. Run `.specify/scripts/bash/check-prerequisites.sh --json --require-tasks --include-tasks` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\'m Groot' (or double-quote if possible: "I'm Groot").

2. **Check checklists status** (if FEATURE_DIR/checklists/ exists):
   - Scan all checklist files in the checklists/ directory
   - For each checklist, count:
     - Total items: All lines matching `- [ ]` or `- [X]` or `- [x]`
     - Completed items: Lines matching `- [X]` or `- [x]`
     - Incomplete items: Lines matching `- [ ]`
   - Create a status table:

     ```text
     | Checklist | Total | Completed | Incomplete | Status |
     |-----------|-------|-----------|------------|--------|
     | ux.md     | 12    | 12        | 0          | ✓ PASS |
     | test.md   | 8     | 5         | 3          | ✗ FAIL |
     ```

   - Calculate overall status:
     - **PASS**: All checklists have 0 incomplete items
     - **FAIL**: One or more checklists have incomplete items

   - **If any checklist is incomplete**:
     - Display the table with incomplete item counts
     - **STOP** and ask: "Some checklists are incomplete. Do you want to proceed with implementation anyway? (yes/no)"
     - Wait for user response before continuing
     - If user says "no" or "wait" or "stop", halt execution
   - **If all checklists are complete**:
     - Display the table showing all checklists passed
     - Automatically proceed to step 3

3. Load and analyze the implementation context:
   - **REQUIRED**: Read tasks.md for the complete task list and execution plan
   - **REQUIRED**: Read plan.md for tech stack, architecture, and file structure
   - **IF EXISTS**: Read data-model.md for entities and relationships
   - **IF EXISTS**: Read contracts/ for API specifications and test requirements
   - **IF EXISTS**: Read research.md for technical decisions and constraints
   - **IF EXISTS**: Read quickstart.md for integration scenarios

4. **Project Setup Verification**:
   - **REQUIRED**: Create/verify ignore files based on actual project setup:

   **Detection & Creation Logic**:
   - Check if the following command succeeds to determine if the repository is a git repo (create/verify .gitignore if so):

     ```sh
     git rev-parse --git-dir 2>/dev/null
     ```

   - Check if Dockerfile* exists or Docker in plan.md → create/verify .dockerignore
   - Check if .eslintrc*or eslint.config.* exists → create/verify .eslintignore
   - Check if .prettierrc* exists → create/verify .prettierignore
   - Check if .npmrc or package.json exists → create/verify .npmignore (if publishing)
   - Check if terraform files (*.tf) exist → create/verify .terraformignore
   - Check if .helmignore needed (helm charts present) → create/verify .helmignore

   **If ignore file already exists**: Verify it contains essential patterns, append missing critical patterns only
   **If ignore file missing**: Create with full pattern set for detected technology

   **Common Patterns by Technology** (from plan.md tech stack):
   - **Node.js/JavaScript/TypeScript**: `node_modules/`, `dist/`, `build/`, `*.log`, `.env*`
   - **Python**: `__pycache__/`, `*.pyc`, `.venv/`, `venv/`, `dist/`, `*.egg-info/`
   - **Java**: `target/`, `*.class`, `*.jar`, `.gradle/`, `build/`
   - **C#/.NET**: `bin/`, `obj/`, `*.user`, `*.suo`, `packages/`
   - **Go**: `*.exe`, `*.test`, `vendor/`, `*.out`
   - **Ruby**: `.bundle/`, `log/`, `tmp/`, `*.gem`, `vendor/bundle/`
   - **PHP**: `vendor/`, `*.log`, `*.cache`, `*.env`
   - **Rust**: `target/`, `debug/`, `release/`, `*.rs.bk`, `*.rlib`, `*.prof*`, `.idea/`, `*.log`, `.env*`
   - **Kotlin**: `build/`, `out/`, `.gradle/`, `.idea/`, `*.class`, `*.jar`, `*.iml`, `*.log`, `.env*`
   - **C++**: `build/`, `bin/`, `obj/`, `out/`, `*.o`, `*.so`, `*.a`, `*.exe`, `*.dll`, `.idea/`, `*.log`, `.env*`
   - **C**: `build/`, `bin/`, `obj/`, `out/`, `*.o`, `*.a`, `*.so`, `*.exe`, `Makefile`, `config.log`, `.idea/`, `*.log`, `.env*`
   - **Swift**: `.build/`, `DerivedData/`, `*.swiftpm/`, `Packages/`
   - **R**: `.Rproj.user/`, `.Rhistory`, `.RData`, `.Ruserdata`, `*.Rproj`, `packrat/`, `renv/`
   - **Universal**: `.DS_Store`, `Thumbs.db`, `*.tmp`, `*.swp`, `.vscode/`, `.idea/`

   **Tool-Specific Patterns**:
   - **Docker**: `node_modules/`, `.git/`, `Dockerfile*`, `.dockerignore`, `*.log*`, `.env*`, `coverage/`
   - **ESLint**: `node_modules/`, `dist/`, `build/`, `coverage/`, `*.min.js`
   - **Prettier**: `node_modules/`, `dist/`, `build/`, `coverage/`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
   - **Terraform**: `.terraform/`, `*.tfstate*`, `*.tfvars`, `.terraform.lock.hcl`
   - **Kubernetes/k8s**: `*.secret.yaml`, `secrets/`, `.kube/`, `kubeconfig*`, `*.key`, `*.crt`

5. Parse tasks.md structure and extract:
   - **Task phases**: Setup, Tests, Core, Integration, Polish
   - **Task dependencies**: Sequential vs parallel execution rules
   - **Task details**: ID, description, file paths, parallel markers [P]
   - **Execution flow**: Order and dependency requirements

6. Execute implementation following the task plan:
   - **Phase-by-phase execution**: Complete each phase before moving to the next
   - **Respect dependencies**: Run sequential tasks in order, parallel tasks [P] can run together  
   - **Follow TDD approach**: Execute test tasks before their corresponding implementation tasks
   - **File-based coordination**: Tasks affecting the same files must run sequentially
   - **Validation checkpoints**: Verify each phase completion before proceeding

7. Implementation execution rules:
   - **Setup first**: Initialize project structure, dependencies, configuration
   - **Tests before code**: If you need to write tests for contracts, entities, and integration scenarios
   - **Core development**: Implement models, services, CLI commands, endpoints
   - **Integration work**: Database connections, middleware, logging, external services
   - **Polish and validation**: Unit tests, performance optimization, documentation

8. Progress tracking and error handling:
   - Report progress after each completed task
   - Halt execution if any non-parallel task fails
   - For parallel tasks [P], continue with successful tasks, report failed ones
   - Provide clear error messages with context for debugging
   - Suggest next steps if implementation cannot proceed
   - **IMPORTANT** For completed tasks, make sure to mark the task off as [X] in the tasks file.

9. Completion validation:
   - Verify all required tasks are completed
   - Check that implemented features match the original specification
   - Validate that tests pass and coverage meets requirements
   - Confirm the implementation follows the technical plan
   - Report final status with summary of completed work

Note: This command assumes a complete task breakdown exists in tasks.md. If tasks are incomplete or missing, suggest running `/sp.tasks` first to regenerate the task list.

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


/sp.implement # sp.implement
# Implementation Guidelines for Physical AI & Humanoid Robotics Book
# Version: 1.0.0
# Last Updated: 2025-11-23

# ============================================================================ 
# PURPOSE
# ============================================================================ 
# This file provides practical implementation guidelines, code patterns,
# templates, and best practices for building the book content.

meta:
  version: "1.0.0"
  purpose: "Implementation guide and templates"
  references:
    - "sp.specify - What to build"
    - "sp.clarify - How to interpret specs"
    - "sp.tasks - What to do"
    - "sp.implement - How to do it (this file)"

# ============================================================================ 
# CHAPTER IMPLEMENTATION TEMPLATE
# ============================================================================ 

chapter_template:
  
  file_structure: |
    ---
    sidebar_position: X
    ---
    
    # Chapter X: Title
    
    ## Learning Objectives
    
    By the end of this chapter, you will:
    - ✅ Objective 1
    - ✅ Objective 2
    - ✅ Objective 3
    
    ## Introduction
    
    Brief introduction (2-3 paragraphs) that:
    - Sets context
    - Explains importance
    - Previews what's coming
    
    ## Section 1
    
    Main content with:
    - Clear explanations
    - Examples
    - Visual aids where helpful
    
    ### Subsection 1.1
    
    Detailed content...
    
    ## Section 2
    
    Continue with required sections per sp.specify...
    
    ## Code Examples
    
    ```python title="example.py"
    # Complete, runnable code
    # With clear comments
    def example_function():
        """
        Docstring explaining what this does.
        """
        pass
    
    if __name__ == "__main__":
        # Usage example
        example_function()
    ```
    
    **Expected Output:**
    ```
    Show what the code produces
    ```
    
    ## Practical Exercises
    
    1. **Exercise 1: Title**
       - Clear instructions
       - Expected outcome
       - Hints if needed
    
    2. **Exercise 2: Title**
       - Step-by-step guidance
       - Learning goal explicit
    
    ## Summary
    
    Key takeaways:
    - Point 1
    - Point 2
    - Point 3
    
    ## Further Reading
    
    - **Papers**:
      - [1] Author et al. "Title". Conference, Year.
      - [2] Author. "Title". Journal, Year.
    
    - **Books**:
      - Title by Author
    
    - **Online Resources**:
      - [Resource Name](https://url.com)
    
    ## Next Chapter
    
    In [Chapter X+1: Title](./next-chapter.md), we'll explore...
    
    ---
    
    **Checkpoint**: Can you explain [key concept] to someone else? If yes, proceed!
  
implementation_steps:
    step_1: "Create file with frontmatter"
    step_2: "Add chapter title and learning objectives"
    step_3: "Write introduction (context and motivation)"
    step_4: "Implement required sections from sp.specify"
    step_5: "Add code examples (tested and working)"
    step_6: "Create/add visual aids"
    step_7: "Write exercises"
    step_8: "Add summary and checkpoint"
    step_9: "Add further reading"
    step_10: "Link to next chapter"
    step_11: "Validate against sp.clarify"
    step_12: "Self-review and proofread"

# ============================================================================ 
# CODE EXAMPLE PATTERNS
# ============================================================================ 

code_patterns:
  
  python_example_template: |
    ```python title="descriptive_filename.py"
    """
    Brief description of what this code does.
    
    This example demonstrates [concept].
    
    Requirements:
        - Python 3.10+
        - numpy>=1.24
        - opencv-python>=4.8
    
    Usage:
        python descriptive_filename.py
    """
    
    import numpy as np
    import cv2
    from typing import List, Tuple
    
    
    def main_function(param: type) -> return_type:
        """
        Function description. 
        
        Args:
            param: Description of parameter
        
        Returns:
            Description of return value
        
        Example:
            >>> result = main_function(value)
            >>> print(result)
            Expected output
        """
        # Implementation with clear comments
        result = process(param)
        return result
    
    
    def helper_function():
        """Helper function description."""
        pass
    
    
    if __name__ == "__main__":
        # Example usage
        print("Running example...")
        
        # Step 1: Setup
        data = setup_data()
        
        # Step 2: Process
        result = main_function(data)
        
        # Step 3: Display results
        print(f"Result: {result}")
    ```
    
    **Expected Output:**
    ```
    Running example...
    Result: [expected output here]
    ```
    
    **Installation:**
    ```bash
    pip install numpy opencv-python
    ```
  
  javascript_example_template: |
    ```javascript title="example.js"
    /**
     * Brief description of what this code does. 
     * 
     * This example demonstrates [concept].
     * 
     * @requires Node.js 18+
     */
    
    /**
     * Main function description.
     * 
     * @param {type} param - Parameter description
     * @returns {type} Return value description
     */
    function mainFunction(param) {
      // Implementation with clear comments
      const result = process(param);
      return result;
    }
    
    // Example usage
    if (require.main === module) {
      console.log('Running example...');
      
      const data = setupData();
      const result = mainFunction(data);
      
      console.log(`Result: ${result}`);
    }
    
    module.exports = { mainFunction };
    ```
  
  cpp_example_template: |
    ```cpp title="example.cpp"
    /**
     * Brief description of what this code does. 
     * 
     * This example demonstrates [concept].
     * 
     * Compile:
     *   g++ -std=c++17 example.cpp -o example
     * 
     * Run:
     *   ./example
     */
    
    #include <iostream>
    #include <vector>
    
    /**
     * Main function description.
     * 
     * @param param Parameter description
     * @return Return value description
     */
    int mainFunction(int param) {
        // Implementation with clear comments
        int result = process(param);
        return result;
    }
    
    int main() {
        std::cout << "Running example..." << std::endl;
        
        int data = setupData();
        int result = mainFunction(data);
        
        std::cout << "Result: " << result << std::endl;
        
        return 0;
    }
    ```
  
  code_example_checklist:
    before_writing:
      - "[ ] Understand the concept to demonstrate"
      - "[ ] Check if similar examples exist"
      - "[ ] Plan the code structure"
      - "[ ] Identify required libraries"
    
    while_writing:
      - "[ ] Use clear variable names"
      - "[ ] Add comments explaining logic"
      - "[ ] Follow language style guide (PEP 8, etc.)"
      - "[ ] Handle errors appropriately"
      - "[ ] Keep it simple and focused"
    
after_writing:
      - "[ ] Test the code runs without errors"
      - "[ ] Verify output is correct"
      - "[ ] Add docstrings/comments"
      - "[ ] Include usage example"
      - "[ ] Document requirements"
      - "[ ] Show expected output"

# ============================================================================ 
# VISUAL AIDS IMPLEMENTATION
# ============================================================================ 

visual_aids:
  
  diagram_creation_workflow:
    step_1:
      action: "Choose appropriate tool"
      tools:
        conceptual: "Excalidraw"
        technical: "Draw.io"
        flowcharts: "Mermaid"
        plots: "Python matplotlib"
    
    step_2:
      action: "Create the diagram"
      guidelines:
        - "Keep it simple and focused"
        - "Use consistent colors and styles"
        - "Label all components"
        - "Make text readable (min 12pt)"
    
    step_3:
      action: "Export and optimize"
      format:
        preferred: "SVG (vector)"
        acceptable: "PNG (min 1200px width)"
      location: "static/diagrams/"
      naming: "chapter-XX-diagram-name.svg"
    
    step_4:
      action: "Save source file"
      location: "static/diagrams/source/"
      purpose: "For future edits"
    
    step_5:
      action: "Add to chapter"
      markdown: |
        ![Descriptive alt text explaining what the diagram shows](../static/diagrams/chapter-04-vision-pipeline.svg)
        
        **Figure 4.1**: Vision processing pipeline showing data flow from camera to output.
  
  mermaid_diagram_template: |
    ```mermaid
    graph TD
        A[Start] --> B{Decision?}
        B -->|Yes| C[Action 1]
        B -->|No| D[Action 2]
        C --> E[End]
        D --> E
    ```
  
  table_template: |
    | Feature | Option A | Option B | Option C |
    |---------|----------|----------|----------|
    | Speed | Fast | Medium | Slow |
    | Accuracy | 85% | 90% | 95% |
    | Cost | Low | Medium | High |
    | Best For | Real-time | Balanced | Precision |
    
    **Table X.Y**: Comparison of different approaches.
  
  image_optimization:
    before_adding:
      - "Resize to appropriate dimensions"
      - "Compress without quality loss"
      - "Convert to web-friendly format"
    
    tools:
      - "ImageOptim (Mac)"
      - "TinyPNG (online)"
      - "squoosh.app (online)"
    
    checklist:
      - "[ ] Image < 500KB"
      - "[ ] Dimensions appropriate"
      - "[ ] Alt text added"
      - "[ ] Caption added if needed"

# ============================================================================ 
# WRITING BEST PRACTICES
# ============================================================================ 

writing_practices:
  
  clarity:
    principles:
      - "Use active voice"
      - "Short sentences (< 25 words)"
      - "One idea per paragraph"
      - "Define technical terms"
      - "Use concrete examples"
    
    good_example: |
      "The robot uses a Kalman filter to combine noisy sensor data. 
      This filter predicts the robot's position and corrects it using 
      actual measurements."
    
bad_example: |
      "A Kalman filter is utilized by the robot for the purpose of 
      sensor fusion which involves the combination of multiple sensor 
      modalities in order to achieve more accurate state estimation."
  
  technical_writing:
    structure:
      - "Start with overview"
      - "Explain fundamentals"
      - "Show examples"
      - "Discuss edge cases"
      - "Provide resources"
    
    explain_concepts:
      - "Define before using"
      - "Use analogies when helpful"
      - "Build from simple to complex"
      - "Connect to prior knowledge"
    
equations:
      - "Introduce notation clearly"
      - "Explain physical meaning"
      - "Show worked example"
      - "Provide code implementation"
  
  readability:
    target:
      flesch_reading_ease: "60-70"
      grade_level: "College"
      tone: "Professional but conversational"
    
    tools:
      - "Hemingway Editor"
      - "Grammarly"
      - "readable.com"
    
    checklist:
      - "[ ] No jargon without definition"
      - "[ ] Paragraphs < 5 sentences"
      - "[ ] Transitions between sections"
      - "[ ] Examples for abstract concepts"

# ============================================================================ 
# RESEARCH & FACT-CHECKING
# ============================================================================ 

research_practices:
  
  finding_sources:
    academic:
      - "Google Scholar"
      - "arXiv.org"
      - "IEEE Xplore"
      - "ACM Digital Library"
    
    industry:
      - "Company blogs (Boston Dynamics, Tesla AI)"
      - "Technical reports"
      - "Conference presentations"
    
    news:
      - "IEEE Spectrum"
      - "The Robot Report"
      - "TechCrunch (AI/Robotics)"
  
  fact_checking:
    verify_claims:
      - "Check multiple sources"
      - "Look for primary sources"
      - "Note publication dates"
      - "Verify technical specs"
    
citation_guidelines:
      format: "IEEE style"
      example: "[1] Smith, J. et al. 'Robot Learning from Demonstrations', ICRA 2024."
      
      inline: "According to recent research [1], robots can..."
      
      reference_list: |
        ## References
        
        [1] Smith, J., Jones, A., and Lee, K. "Robot Learning from 
        Demonstrations Using Deep Networks." International Conference 
        on Robotics and Automation (ICRA), 2024.
        
        [2] Brown, M. "Humanoid Robotics: Current State and Future 
        Trends." Robotics Journal, vol. 15, no. 3, pp. 245-260, 2024.

# ============================================================================ 
# TESTING & VALIDATION
# ============================================================================ 

testing_guidelines:
  
  code_testing:
    test_every_example:
      - "Run in clean environment"
      - "Verify output is correct"
      - "Test edge cases"
      - "Document dependencies"
    
    create_test_file: |
      # tests/test_chapter_04.py
      import pytest
      from examples.chapter_04 import object_detection
      
      def test_object_detection():
          """Test object detection function."""
          image = load_test_image()
          result = object_detection(image)
          
          assert len(result) > 0
          assert result[0]['confidence'] > 0.5
    
    continuous_testing:
      - "Run tests before commit"
      - "CI/CD runs all tests"
      - "Fix failures immediately"
  
  content_validation:
    self_review_checklist:
      - "[ ] Read aloud for flow"
      - "[ ] Check all links work"
      - "[ ] Verify images display"
      - "[ ] Run spell check"
      - "[ ] Test code examples"
      - "[ ] Check word count"
    
    validation_commands: |
      # Run validation
      python scripts/validate_chapter.py docs/part1-foundations/01-introduction.md
      
      # Check word count
      python scripts/check_word_count.py docs/part1-foundations/01-introduction.md
      
      # Test code
      pytest tests/test_chapter_01.py
      
      # Check links
      npm run check-links
      
      # Build test
      npm run build

# ============================================================================ 
# RESOURCES
# ============================================================================ 

resources:
  
  documentation:
    - "Docusaurus: https://docusaurus.io/docs"
    - "Markdown Guide: https://www.markdownguide.org"
    - "Mermaid: https://mermaid.js.org"
  
  learning:
    - "Technical Writing: Google's Tech Writing Course"
    - "Markdown: Interactive tutorial at markdowntutorial.com"
    - "Git: Pro Git book (free online)"
  
  tools:
    - "VS Code: https://code.visualstudio.com"
    - "Excalidraw: https://excalidraw.com"
    - "Draw.io: https://app.diagrams.net"
    - "Grammarly: https://grammarly.com"

# ============================================================================ 
# NOTES
# ============================================================================ 

notes:
  - "This is a living document - update with new patterns"
  - "Share learnings and best practices"
  - "Focus on quality over speed"
  - "Ask for help when stuck"
  - "Celebrate small wins"

# ============================================================================ 
# VERSION
# ============================================================================ 

version: "1.0.0"
created: "2025-11-23"
status: "active"
