---
title: MVP_PRODUCT_SPEC
version: 0.1
status: Draft
owner: AI Computing Hardware Insight
last_updated: 2026-07-08
---

# AI Computing Hardware Insight Web MVP

## 1. Product Positioning

The first version is a small expert workspace for AI computing hardware industry insight.

It is not a public content portal yet. It is a private collaboration tool for a few trusted experts.

## 2. Primary Users

| Role | Permission | Main Job |
|---|---|---|
| Owner | Full access | Manage topics, experts, publishing, and skills |
| Expert | Edit assigned topics | Modify reports and topic skills |
| Viewer | Read only | Read published reports |

## 3. MVP Navigation

Left navigation:

1. Industry Insight
2. Academic Insight
3. Skills
4. Permissions

Industry Insight is the only fully active module in v0.1.

## 4. Industry Insight Topics

Initial topics:

- Glass Core
- HBM
- Optical Interconnect
- PCB

Each topic includes:

- Executive conclusion
- Key findings
- Industry chain view
- Competition view
- Risks
- Next actions
- Linked Skill

## 5. Skill Model

Each industry topic has its own Skill.

A Skill contains:

- Analysis scope
- Required questions
- Required dimensions
- Output structure
- Evidence standard
- Forbidden patterns

Experts may customize Skills for their assigned topics.

## 6. Academic Insight Placeholder

Academic Insight is reserved for:

- Paper library
- Mechanism extraction
- Research-to-industry mapping
- Reliability and test methodology

No full implementation is required in MVP v0.1.

## 7. MVP Non-goals

- No complex CMS
- No public signup
- No full paper ingestion pipeline
- No paid subscription
- No multi-tenant enterprise admin

## 8. Next Build Steps

1. Turn static MVP into a Next.js app
2. Add Supabase Auth and database
3. Store reports and skills as structured Markdown
4. Add report versioning
5. Add expert review workflow
