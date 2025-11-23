#!/usr/bin/env bash

# This script checks all chapter markdown files using validate_chapter.py

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

VALIDATE_SCRIPT="$REPO_ROOT/scripts/validate_chapter.py"
CHAPTERS_DIR="$REPO_ROOT/docs"

echo "Running validation for all chapters..."
echo "---"

FAIL_COUNT=0
PASS_COUNT=0
TOTAL_COUNT=0

# Find all chapter files (e.g., docs/partX-category/YY-chapter-name.md)
# This pattern might need refinement depending on the exact naming convention.
# For now, looking for .md files under docs/part*-*/
find "$CHAPTERS_DIR" -type f -path "*/part*-*/*.md" | while read -r chapter_file; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "Validating: $(basename "$chapter_file")"
    
    python "$VALIDATE_SCRIPT" "$chapter_file"
    if [ $? -eq 0 ]; then
        PASS_COUNT=$((PASS_COUNT + 1))
    else
        FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
    echo "---"
done

echo "Validation Summary:"
echo "  Passed: $PASS_COUNT"
echo "  Failed: $FAIL_COUNT"
echo "  Total: $TOTAL_COUNT"

if [ "$FAIL_COUNT" -gt 0 ]; then
    echo "Some chapters failed validation. Please check the logs above."
    exit 1
else
    echo "All chapters passed validation."
    exit 0
fi
