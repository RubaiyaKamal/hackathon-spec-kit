# Specification Clarifications & Validation Rules

# Version: 1.0.0
# References: sp.specify v1.0.0
# ============================================================================ 
# PURPOSE
# ============================================================================ 
# This file clarifies ambiguous specifications, documents edge cases,
# and provides validation criteria for the Physical AI book project.

meta:
  version: "1.0.0"
  last_updated: "2025-11-23"
  linked_to: "sp.specify v1.0.0"
  purpose: "Clarify specifications and define validation rules"

# ============================================================================ 
# SPECIFICATION CLARIFICATIONS
# ============================================================================ 

clarifications:
  word_count:
    definition: "Total words in markdown file excluding frontmatter, code blocks, and image alt text"
    how_to_measure: "Use: wc -w file.md (then subtract frontmatter and code)"
    tolerance: "+/- 10% of target is acceptable"
    example:
      target: 3000
      acceptable_range: "2700-3300 words"
    validation_command: |
      python -c "
      import re
      content = open('file.md').read()
      # Remove frontmatter
      content = re.sub(r'^---.*?---', '', content, flags=re.DOTALL)
      # Remove code blocks
      content = re.sub(r'```.*?```', '', content, flags=re.DOTALL)
      words = len(content.split())
      print(f'Word count: {words}')
      "

  learning_objectives:
    definition: "Clear, measurable outcomes that readers should achieve"
    format: "Start with action verbs (Understand, Implement, Learn, Master, Apply)"
    count: "3-6 objectives per chapter"
    style: "Complete sentences, not fragments"
    good_examples:
      - "Understand the principles of sensor fusion in robotics"
      - "Implement a basic Kalman filter for IMU data"
      - "Apply YOLO for real-time object detection"
    bad_examples:
      - "Sensor fusion"  # Too vague
      - "Know about robots" # Not measurable
      - "Stuff about AI" # Unprofessional

  required_sections:
    definition: "H2 (##) level sections that must appear in the chapter"
    format: "Exact text match required (case-sensitive)"
    flexibility: "Additional sections allowed, but required ones must exist"
    validation: "grep '^## Section Name' chapter.md"
    example:
      chapter: "04-computer-vision.md"
      required:
        - "## Vision for Robotics vs General CV"
        - "## Object Detection & Recognition"
      must_match_exactly: true
      can_add_more: true

  visual_aids:
    definition: "Any non-text content that helps understanding"
    types:
      - "Images (PNG, JPG, SVG)"
      - "Diagrams (Mermaid, Draw.io exports)"
      - "Tables (markdown or HTML)"
      - "Charts/Graphs"
    requirements:
      - "All images must have descriptive alt text"
      - "Diagrams must be clear and readable"
      - "Tables must have headers"
      - "Source files for editable diagrams in /static/diagrams/source/"
    minimum_count: "As specified per chapter"
    validation: |
      # Count images
      grep -c '!\[' chapter.md
      # Check alt text exists
      grep '!\\[\]' chapter.md && echo "ERROR: Empty alt text found"

  code_examples:
    definition: "Complete, runnable code snippets that demonstrate concepts"
    requirements:
      runnable: "Must execute without errors"
      documented: "Include comments explaining key parts"
      tested: "Must be tested before inclusion"
      dependencies: "List all required libraries"
      output: "Show expected output or results"
    language_specification:
      required: true
      format: "```python or ```javascript or ```cpp"
      error: "```<no-language> is invalid"
    minimum_count: "As specified per chapter"
    when_zero_allowed: "Chapters 1, 2, 16, 17 (theory/discussion heavy)"
    validation: |
      # Check all code blocks have language
      grep -n '^```'
 chapter.md && echo "ERROR: Code block without language at line:"
      # Extract and test
      python scripts/extract_and_test_code.py chapter.md

  exercises:
    definition: "Activities that test reader understanding"
    types:
      reflection: "Questions that require thinking about concepts"
      implementation: "Tasks that require writing code"
      analysis: "Problems requiring examination of data/results"
      design: "Creative tasks like architecting a system"
    requirements:
      - "Clear instructions"
      - "Appropriate difficulty level"
      - "Related to chapter content"
      - "Solvable with chapter knowledge"
    minimum_count: "2-5 per chapter"
    good_example: |
      **Exercise 1: Implement Object Detection**
      Using the YOLO code from this chapter:
      1. Download a sample image
      2. Run detection on it
      3. Visualize the bounding boxes
      4. Calculate precision and recall
    bad_example: |
      Try some stuff with YOLO. # Too vague

# ============================================================================ 
# EDGE CASES & EXCEPTIONS
# ============================================================================ 

edge_cases:
  when_word_count_can_exceed:
    - scenario: "Complex mathematical derivations requiring extensive explanation"
      action: "Document reason in chapter"
      max_overage: "20%"
    - scenario: "Comprehensive case studies with detailed analysis"
      action: "Consider splitting into subsections"
      max_overage: "15%"
  when_word_count_can_be_under:
    - scenario: "Highly visual chapter where diagrams convey most information"
      action: "Ensure visual aids are comprehensive"
      max_underage: "15%"
    - scenario: "Chapter is primarily code-based tutorial"
      action: "Code quality compensates for lower word count"
      max_underage: "20%"
  when_code_examples_not_required:
    chapters: [1, 2, 16, 17]
    reason: "These are conceptual/historical/ethical chapters"
    alternative: "Use pseudocode or diagrams if helpful"
  when_additional_sections_beneficial:
    allowed: true
    guideline: "Add sections that enhance understanding"
    examples:
      - "Case Studies"
      - "Common Pitfalls"
      - "Advanced Topics"
      - "Performance Optimization"
    requirement: "Must not dilute core required sections"
  cross_chapter_references:
    encouraged: true
    format: "[Chapter Title](./relative-path.md)"
    when_to_use:
      - "Building on previous concepts"
      - "Previewing future topics"
      - "Providing deeper dives"
    example: "For more on sensor fusion, see [Chapter 5](../part2-perception/05-sensor-fusion.md)"

# ============================================================================ 
# VALIDATION RULES
# ============================================================================ 

validation_rules:
  level_1_critical:
    description: "Must pass - these are blockers"
    rules:
      - id: "V001"
        name: "File exists"
        test: "test -f {filepath}"
        error_message: "Chapter file not found"
      - id: "V002"
        name: "Has frontmatter"
        test: "head -n 1 {filepath} | grep '^---'"
        error_message: "Missing YAML frontmatter"
      - id: "V003"
        name: "Has sidebar_position"
        test: "grep 'sidebar_position:' {filepath}"
        error_message: "Missing sidebar_position in frontmatter"
      - id: "V004"
        name: "Has Learning Objectives"
        test: "grep '^## Learning Objectives' {filepath}"
        error_message: "Missing Learning Objectives section"
      - id: "V005"
        name: "Code blocks have language"
        test: "! grep -n '^```'
 {filepath}"
        error_message: "Code block without language specification found"
      - id: "V006"
        name: "Images have alt text"
        test: "! grep '!\[\]' {filepath}"
        error_message: "Image without alt text found"
      - id: "V007"
        name: "File builds without errors"
        test: "npm run build"
        error_message: "Build failed"
  level_2_important:
    description: "Should pass - these are strong recommendations"
    rules:
      - id: "W001"
        name: "Has checkpoint"
        test: "grep '\*\*Checkpoint\*\*:' {filepath}"
        warning_message: "Missing checkpoint at end"
      - id: "W002"
        name: "Has exercises"
        test: "grep -E '^## (Exercises|Practical)' {filepath}"
        warning_message: "No exercises section found"
      - id: "W003"
        name: "Has Further Reading"
        test: "grep '^## Further Reading' {filepath}"
        warning_message: "No Further Reading section"
      - id: "W004"
        name: "Links to next chapter"
        test: "grep -i 'next chapter' {filepath}"
        warning_message: "No link to next chapter"
      - id: "W005"
        name: "Word count in range"
        test: "python scripts/check_word_count.py {filepath}"
        warning_message: "Word count outside acceptable range"
  level_3_nice_to_have:
    description: "Optional - these improve quality"
    rules:
      - id: "I001"
        name: "Has summary section"
        test: "grep -E '^## (Summary|Key Takeaways)' {filepath}"
        info_message: "Consider adding a summary section"
      - id: "I002"
        name: "Has visual aids"
        test: "grep -c '!\[' {filepath} | awk '{if($1>=2) exit 0; exit 1}'"
        info_message: "Consider adding more visual aids"
      - id: "I003"
        name: "Has code examples"
        test: "grep -c '^```' {filepath} | awk '{if($1>=2) exit 0; exit 1}'"
        info_message: "Consider adding code examples"

# ============================================================================ 
# VALIDATION SCRIPTS
# ============================================================================ 

validation_scripts:
  check_single_chapter:
    script: "scripts/validate_chapter.py"
    usage: "python scripts/validate_chapter.py <chapter.md>"
    example: "python scripts/validate_chapter.py docs/part1-foundations/01-introduction.md"
    output_format: |
      ✅ PASS: Rule description
      ❌ FAIL: Rule description
      ⚠️ WARN: Rule description
      ℹ️ INFO: Rule description
  check_all_chapters:
    script: "scripts/check_all_chapters.sh"
    usage: "./scripts/check_all_chapters.sh"
    output_format: |
      Checking all chapters...
      [1/18] Chapter 1: ✅ Pass
      [2/18] Chapter 2: ⚠️ Warnings
      ... 
      Summary: 16 passed, 2 warnings, 0 failed
  check_word_count:
    script: "scripts/check_word_count.py"
    usage: "python scripts/check_word_count.py <chapter.md>"
    logic: |
      1. Read file
      2. Remove frontmatter (between --- markers)
      3. Remove code blocks (between ``` markers)
      4. Remove image alt text
      5. Count remaining words
      6. Compare to target +/- 10%
  extract_and_test_code:
    script: "scripts/extract_and_test_code.py"
    usage: "python scripts/extract_and_test_code.py <chapter.md>"
    logic: |
      1. Extract all code blocks
      2. Create temporary files
      3. Try to execute each one
      4. Report success/failure
      5. Clean up temp files

# ============================================================================ 
# COMMON QUESTIONS & ANSWERS
# ============================================================================ 

faq:
  q1:
    question: "What if my chapter is 500 words over the target?"
    answer: |
      Check the 10% tolerance. For a 3000-word target, 3300 is acceptable.
      If still over, consider:
      1. Removing redundant explanations
      2. Moving advanced topics to appendix
      3. Splitting into two sections
      4. Documenting why extra length is necessary
  q2:
    question: "Do inline code snippets count as code examples?"
    answer: |
      No. Code examples are multi-line blocks (```) that demonstrate concepts.
      Inline code like `variable_name` is for terminology, not examples.
  q3:
    question: "Can I use animated GIFs or videos?"
    answer: |
      Yes! These count as visual aids. Requirements:
      - GIFs must be < 5MB
      - Videos should be hosted externally (YouTube/Vimeo)
      - Provide alt text/description
      - Include transcript for accessibility
  q4:
    question: "What if a required section doesn't fit my chapter?"
    answer: |
      1. First, reconsider - specs are based on careful planning
      2. If truly necessary, document the exception
      3. Open an issue to discuss with team
      4. Update sp.specify if accepted
      Do not silently ignore required sections.
  q5:
    question: "How do I handle citations and references?"
    answer: |
      Format: [1] Author. "Title". Source, Year.
      Place in Further Reading section or inline as needed.
      Example: "According to [1], humanoid robots..."
      Then in Further Reading list:
      [1] Smith et al. "Robot Learning"...
  q6:
    question: "Can I add subsections beyond required sections?"
    answer: |
      Yes! Required sections are minimums. Add subsections (###) freely.
      Example:
      ## Object Detection & Recognition (required)
      ### YOLO Architecture (additional subsection - fine!)
      ### Training Custom Detectors (additional subsection - fine!)
  q7:
    question: "What programming language should code examples use?"
    answer: |
      Primary: Python 3.10+
      Secondary: JavaScript (for web/interactive examples)
      Occasional: C++ (for performance-critical robotics code)
      Always specify language: ```python not just ```
  q8:
    question: "How do I test if my chapter will build?"
    answer: |
      1. Save your chapter
      2. Run: npm start (development server)
      3. Check browser for errors
      4. Run: npm run build (production build)
      5. Fix any errors reported

# ============================================================================ 
# CONTINUOUS IMPROVEMENT
# ============================================================================ 

improvement_process:
  when_you_find_ambiguity:
    1: "Note it in this file under clarifications"
    2: "Propose clear definition"
    3: "Add validation rule if needed"
    4: "Version and commit changes"
  when_you_find_contradiction:
    1: "Document both interpretations"
    2: "Analyze which serves readers better"
    3: "Choose one, document rationale"
    4: "Update sp.specify if needed"
  when_you_find_missing_guidance:
    1: "Add to faq or clarifications"
    2: "Be specific and actionable"
    3: "Provide examples"
    4: "Get team feedback"

# ============================================================================ 
# VERSION HISTORY
# ============================================================================ 

changelog:
  - version: "1.0.0"
    date: "2025-11-23"
    changes:
      - "Initial sp.clarify created"
      - "Defined all key terms"
      - "Added validation rules"
      - "Documented edge cases"
      - "Added FAQ section"

# ============================================================================ 
# APPROVAL
# ============================================================================ 

status: "active"
approved_by: "Project Lead"
date: "2025-11-23"
next_review: "2026-02-23"
