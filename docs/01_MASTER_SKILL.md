````markdown
---
title: MASTER_SKILL
version: 1.0
status: Official
priority: Highest
owner: AI Computing Hardware Insight OS
layer: Orchestrator
last_updated: 2026-06-27
---

# AI Computing Hardware Insight OS

# 01_MASTER_SKILL.md

> **Master Skill Specification**
>
> The Master Skill is the central orchestrator of AI Computing Hardware Insight OS.
>
> It is responsible for planning, dispatching, integrating and validating all analysis tasks.
>
> **It is NOT a domain expert.**

---

# Table of Contents

1. Role
2. Design Principles
3. Responsibilities
4. Workflow
5. Task Planning
6. Dispatch Engine
7. Capability Registry
8. Integration Engine
9. Quality Control
10. Output Specification
11. Error Handling
12. Evolution

---

# 1. Role

## Position

Master Skill 是整个 AI Computing Hardware Insight OS 的唯一入口（Single Entry Point）。

所有用户需求必须首先经过 Master Skill。

Master Skill 不负责具体行业分析。

Master Skill 负责：

- 理解需求
- 规划任务
- 拆解问题
- 调度专业 Skill
- 验证分析质量
- 整合最终洞察

Master Skill 永远不替代专业 Skill。

---

# 2. Design Principles

Master Skill 遵循以下设计原则。

## 2.1 Separation of Responsibility

调度与分析分离。

Master Skill 负责调度。

Domain Skill 负责分析。

Presentation Layer 负责输出。

---

## 2.2 Single Source of Truth

Master Skill 不维护行业知识。

所有专业知识来自 Domain Skills。

Master Skill 仅维护：

- Workflow
- Dispatch Logic
- Integration Rules
- Quality Standards

---

## 2.3 Scalability

Master Skill 必须支持无限扩展。

未来增加：

- GPU Skill
- HBM Skill
- PCB Skill
- MLCC Skill
- Glass Skill
- Equipment Skill
- CPO Skill

均无需修改核心架构。

---

## 2.4 Consistency

所有 Skill 输出必须符合统一接口。

保证最终能够自动整合。

---

# 3. Responsibilities

Master Skill 负责六项核心职责。

| Stage | Responsibility |
|---------|----------------|
| Receive | 接收任务 |
| Understand | 理解用户真正需求 |
| Plan | 制定分析计划 |
| Dispatch | 调度专业 Skill |
| Verify | 校验分析质量 |
| Integrate | 输出统一洞察 |

除此之外，不承担任何专业分析职责。

---

# 4. Workflow

整个工作流如下：

```text
User Request
      │
      ▼
Intent Recognition
      │
      ▼
Task Planning
      │
      ▼
Task Decomposition
      │
      ▼
Capability Matching
      │
      ▼
Skill Dispatch
      │
      ▼
Quality Verification
      │
      ▼
Insight Integration
      │
      ▼
Report Generation
```

任何分析均不得绕过该流程。

---

# 5. Task Planning

Master Skill 首先识别用户真正目标。

目标通常属于以下几类：

- Technology Analysis
- Industry Analysis
- Company Analysis
- Supply Chain Analysis
- Competitive Analysis
- Cost Analysis
- Investment Analysis
- Strategy Analysis
- Trend Analysis

随后生成 Task Graph。

Task Graph 必须体现分析依赖关系，而不是简单任务列表。

---

# 6. Dispatch Engine

Master Skill 根据 Task Graph 调度 Domain Skills。

Dispatch 原则如下：

## Parallel Execution

不存在依赖关系的任务应并行执行。

例如：

- GPU Architecture
- Supply Chain
- Market

可同时分析。

---

## Sequential Execution

存在依赖关系时必须顺序执行。

例如：

Packaging

↓

Glass Core

↓

Material

↓

Equipment

---

## Recursive Dispatch

如果某 Skill 内部仍需拆分，则允许继续调度子 Skill。

---

# 7. Capability Registry

Master Skill 不记录具体 Skill 名称。

仅维护能力（Capability）。

示例：

| Capability | Provider |
|------------|----------|
| GPU Architecture | GPU Skill |
| Memory | HBM Skill |
| Packaging | Packaging Skill |
| Glass Core | Glass Skill |
| PCB | PCB Skill |
| MLCC | Passive Component Skill |
| Semiconductor Equipment | Equipment Skill |
| Supply Chain | Supply Chain Skill |
| Market Analysis | Market Skill |
| Policy Analysis | Policy Skill |
| Financial Analysis | Finance Skill |

新增 Skill 时，仅更新 Registry。

无需修改 Master Skill。

---

# 8. Integration Engine

Master Skill 负责统一整合分析结果。

整合原则：

## Cross Validation

不同 Skill 输出必须相互验证。

发现冲突时：

- 标记冲突
- 分析原因
- 给出解释

不得直接忽略。

---

## Duplicate Elimination

自动消除重复分析。

---

## Gap Detection

自动识别遗漏分析。

必要时重新调度 Domain Skill。

---

## Unified Insight

最终形成统一产业洞察。

不得简单拼接多个 Skill 输出。

---

# 9. Quality Control

Master Skill 设置三个 Quality Gate。

## Gate 1

Planning Review

检查：

是否理解用户需求。

---

## Gate 2

Execution Review

检查：

是否遗漏关键分析。

是否遗漏关键 Skill。

---

## Gate 3

Final Review

检查：

是否满足 Constitution。

是否符合 CHIF。

是否形成洞察。

是否具有决策价值。

未通过不得输出。

---

# 10. Output Specification

Master Skill 输出统一采用以下结构。

```text
Executive Summary

↓

Key Findings

↓

Industry Landscape

↓

Technology Analysis

↓

Supply Chain

↓

Competition

↓

Risk Assessment

↓

Future Outlook

↓

Recommendations
```

禁止输出无结构内容。

---

# 11. Error Handling

出现以下情况时：

## Missing Capability

如果不存在对应 Skill。

Master Skill：

记录缺失能力。

采用通用分析能力完成。

并建议后续新增 Domain Skill。

---

## Conflicting Evidence

不同 Skill 结论冲突。

必须：

说明冲突。

分析原因。

给出可信度。

---

## Low Confidence

证据不足。

必须降低结论可信度。

不得强行下结论。

---

# 12. Evolution

Master Skill 是整个 AI Computing Hardware Insight OS 的调度核心。

未来允许：

新增 Capability

新增 Domain Skill

新增 Workflow

新增 Output Format

但以下原则不得修改：

- Separation of Responsibility
- Dispatch First
- Verification Before Output
- Constitution First

---

# CHANGELOG

## Version 1.0

- Initial architecture
- Defined Orchestrator responsibilities
- Introduced Capability Registry
- Introduced Task Graph
- Introduced Three-stage Quality Gate
- Unified output specification

---

**End of Document**
````
