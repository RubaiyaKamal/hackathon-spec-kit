import argparse
import re

def validate_chapter(file_path):
    print(f"Validating chapter: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
        return False
    
    # Check for title (H1)
    if not re.search(r'^# Chapter \d+: .*', content, re.MULTILINE):
        print("Validation Error: Chapter title (H1) not found or not in expected format '# Chapter X: Title'.")
        return False
        
    # Check for Learning Objectives section
    if not re.search(r'## Learning Objectives', content):
        print("Validation Error: '## Learning Objectives' section not found.")
        return False
        
    # Basic check for at least one section (H2) after learning objectives
    if not re.search(r'## Learning Objectives\n\nBy the end of this chapter, you will:\n(?:- ✅ .*)+\n\n## .+', content, re.DOTALL):
        print("Validation Warning: No sections (H2) found after 'Learning Objectives'.")
        # This is a warning, not a critical failure for now
        
    print(f"Validation successful for {file_path}")
    return True

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Validate a Docusaurus chapter markdown file.")
    parser.add_argument("file_path", help="Path to the chapter markdown file.")
    
    args = parser.parse_args()
    
    if not validate_chapter(args.file_path):
        print(f"Chapter validation FAILED for {args.file_path}")
        exit(1)
    else:
        print(f"Chapter validation PASSED for {args.file_path}")
        exit(0)
