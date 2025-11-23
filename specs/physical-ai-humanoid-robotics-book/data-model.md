# Data Model

This document defines the key entities for the "Physical AI & Humanoid Robotics Book" project.

## Entities

### Part
A logical grouping of chapters.
- **Attributes**:
    - `title`: The title of the part.
    - `chapters`: A list of chapters belonging to this part.

### Chapter
The main content unit of the book.
- **Attributes**:
    - `title`: The title of the chapter.
    - `number`: The chapter number.
    - `content`: The markdown content of the chapter.
    - `sections`: A list of sections within the chapter.

### Section
A sub-unit within a chapter.
- **Attributes**:
    - `title`: The title of the section.
    - `content`: The markdown content of the section.
    - `code_examples`: A list of code examples in this section.
    - `visual_aids`: A list of visual aids in this section.

### CodeExample
A runnable code snippet.
- **Attributes**:
    - `id`: A unique identifier for the code example.
    - `language`: The programming language of the code.
    - `code`: The code itself.
    - `description`: A description of the code example.

### VisualAid
An image, diagram, or other visual element.
- **Attributes**:
    - `id`: A unique identifier for the visual aid.
    - `type`: The type of visual aid (e.g., image, diagram).
    - `source`: The path to the visual aid file.
    - `caption`: A caption for the visual aid.
