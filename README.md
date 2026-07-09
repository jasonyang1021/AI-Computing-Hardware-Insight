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

Open this file in a browser for a quick static preview:

```text
app/index.html
```

No install step is required.

For local HTTP preview, run a static server from the repository root.

With Node.js:

```text
npx serve . -l 8080
```

Then open:

```text
http://localhost:8080/app/
```

With Python:

```text
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/app/
```

On Windows, `python3` may be unavailable. Use `py -m http.server 8080`, `python -m http.server 8080`, or the Node.js option above.

### Windows Setup Notes

After installing Git for Windows, restart PowerShell, VS Code, or Codex so the updated `PATH` is loaded. If `git` is still not recognized, Git is usually available at:

```text
C:\Program Files\Git\cmd\git.exe
```

Clone the repository:

```text
git clone https://github.com/jasonyang1021/AI-Computing-Hardware-Insight.git
cd AI-Computing-Hardware-Insight
```

## Deploy The MVP

The MVP is a static site plus optional serverless API routes for AI updates and GitHub archival.

### Vercel

1. Import this GitHub repository in Vercel.
2. Keep the repository private.
3. Framework preset: `Other`.
4. Build command: leave empty.
5. Output directory: leave empty if deploying the repo root, or set root directory to `app`.
6. The root `index.html` redirects to `/app/`.

After deployment, check:

- `Deployments`: latest production deployment should be `Ready`.
- `Domains`: use the production domain for users, not only a protected preview deployment URL.
- `Settings -> Deployment Protection`: if enabled, unauthenticated users will see a Vercel login/protection page instead of the app.

### AI + GitHub Archival

The browser UI cannot safely call ChatGPT or write GitHub directly. Real update and save actions use Vercel serverless API routes:

- `POST /api/insight-jobs`: reads the topic Skill and current report, calls the OpenAI Responses API, archives the old report, writes the new report, and commits metadata to GitHub.
- `POST /api/save-skill`: saves the edited Skill to both `skills/` and `app/skills/`, then commits metadata to GitHub.

Configure these environment variables in Vercel:

```text
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-5.2
GITHUB_TOKEN=github_pat_...
GITHUB_REPO=jasonyang1021/AI-Computing-Hardware-Insight
GITHUB_BRANCH=main
OPENAI_MAX_OUTPUT_TOKENS=20000
OWNER_EMAILS=jasonyang1021@gmail.com
EXPERT_EMAILS=glass.expert@gmail.com,memory.expert@gmail.com
VIEWER_EMAILS=viewer@gmail.com
# Optional, for Google ID token verification when Google Sign-In is enabled:
GOOGLE_CLIENT_ID=...
```

`GITHUB_TOKEN` needs Contents read/write access to this repository. Keep all secrets in Vercel environment variables, never in frontend files.

`OWNER_EMAILS`, `EXPERT_EMAILS`, and `VIEWER_EMAILS` control who can save Skills or run report update jobs. Owners can edit every topic. Experts can edit assigned topics when using `ACCESS_USERS_JSON`, or every topic when listed in `EXPERT_EMAILS`. Viewers are read-only.

For finer access control, configure `ACCESS_USERS_JSON` instead of the CSV lists:

```json
[
  { "name": "Jason", "email": "name@gmail.com", "role": "Owner", "topics": ["*"], "status": "Active" },
  { "name": "Glass Expert", "email": "glass@gmail.com", "role": "Expert", "topics": ["glass-core"], "status": "Active" },
  { "name": "Viewer", "email": "viewer@gmail.com", "role": "Viewer", "topics": [], "status": "Active" }
]
```

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
