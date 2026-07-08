# AI Computing Hardware Insight

AI Computing Hardware Insight is a lightweight knowledge workspace for AI computing hardware research.

The MVP focuses on **industry insight**. It keeps an **academic insight** tab as a placeholder for future paper-oriented workflows.

## MVP Scope

- Industry insight topic pages: Glass Core, HBM, Optical Interconnect, PCB
- Topic-specific Skill panels for expert customization
- Report cards with conclusions, key questions, risks, and next actions
- Simple role model: Owner, Expert, Viewer
- Academic Insight placeholder tab

## Repository Structure

```text
app/        Static web MVP
docs/       Project constitution, CHIF methodology, report specification, MVP spec
skills/     Domain insight skills and archived research assets
reports/    Generated or curated reports
templates/  Future report and skill templates
```

## Run The MVP

Open this file in a browser:

```text
app/index.html
```

No install step is required.

For local HTTP preview:

```text
cd app
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deploy The MVP

The MVP is a static site.

### Vercel

1. Import this GitHub repository in Vercel.
2. Keep the repository private.
3. Framework preset: `Other`.
4. Build command: leave empty.
5. Output directory: leave empty if deploying the repo root, or set root directory to `app`.
6. The root `index.html` redirects to `/app/`.

### Netlify

1. Import this GitHub repository in Netlify.
2. Build command: leave empty.
3. Publish directory: `.`.
4. `netlify.toml` redirects `/` to `/app/`.

### Access Control

The current MVP does not include real login. Use platform-level access controls or private preview links for early expert review.

Planned production access model:

- Owner: manage users, topics, skills, and publishing.
- Expert: edit assigned topic reports and skills.
- Viewer: read published reports.

## Design Principle

This project follows CHIF:

```text
Why -> What -> Who -> How -> With What -> Suppliers -> Competition -> Next -> So What
```

The product should produce decision-oriented insight, not news aggregation or encyclopedic technology summaries.
