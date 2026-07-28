# Documents

Put PDFs, CSVs, and slide exports here.

## Naming

Lowercase with hyphens, no spaces:

    test-01-bond-peel.csv
    research-poster-2027.pdf
    resume.pdf

## Referencing a document

Paths start from `/documents/`:

    [Bond peel raw data (CSV)](/documents/test-01-bond-peel.csv)

In a data file, set the field to the same path:

    dataFile: '/documents/test-01-bond-peel.csv'

## Replacing a document without breaking its URL

Keep the filename identical and overwrite the file, then commit. Anyone who
already has the link keeps a working link, and the Git history preserves the
previous version. Only add a version suffix (`-v2`) when both versions need to
stay available at the same time.

## Size

Keep files under about 10 MB. Compress PDF exports before committing — a
print-resolution poster PDF can easily exceed 100 MB, and Git will keep it
forever.
