# Images

Put photographs, sketches, diagrams, and CAD screenshots here.

## Naming

Use lowercase, hyphens, and a leading date so files sort chronologically:

    2026-09-14-midsole-cross-section.jpg
    2026-10-02-pattern-revision-b.png

Never rename a file that is already referenced on the live site — the old URL
breaks. Add a new file instead, or replace the file *in place* keeping the same
name.

## Formats and sizes

| Use                  | Format      | Longest edge | Target size |
| -------------------- | ----------- | ------------ | ----------- |
| In-entry photograph  | JPG or WebP | 1600 px      | under 400 KB |
| Featured image       | JPG or WebP | 2000 px      | under 600 KB |
| Diagram or line art  | SVG or PNG  | —            | under 200 KB |
| Social preview image | PNG         | 1200 x 630   | under 500 KB |

Compress before committing. Anything over about 1 MB should be resized first —
Git keeps every version of every file forever, so large images make the
repository permanently heavier.

## Referencing an image

In a research-log entry, paths start from `/images/`:

    ![Cut section of a midsole showing two foam layers](/images/2026-09-14-midsole-cross-section.jpg)

Alt text is required. Describe what is visible and what the reader should
notice, not "photo of shoe".
