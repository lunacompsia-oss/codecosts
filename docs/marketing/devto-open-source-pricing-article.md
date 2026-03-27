---
title: "I Open-Sourced Pricing Data for Every AI Coding Tool — Here's What I Found"
published: false
description: "Structured JSON pricing data for Copilot, Cursor, Windsurf, Claude Code, and 4 more tools. CC-BY-4.0. npm install ai-coding-tools-pricing."
tags: ai, webdev, opensource, productivity
cover_image:
---

I spend way too much time on pricing pages.

Every quarter, something changes. Cursor adds a new tier. Windsurf kills credits and switches to quotas. Supermaven gets absorbed into Cursor and ceases to exist. Copilot introduces "premium request multipliers" that require a spreadsheet to decode.

I'm a developer. I just want to know: **how much does this thing cost, and what do I actually get?**

So I did what any reasonable developer would do. I structured all the pricing data as JSON and open-sourced it.

[GitHub: lunacompsia-oss/ai-coding-tools-pricing](https://github.com/lunacompsia-oss/ai-coding-tools-pricing)

## The Problem Nobody Talks About

AI coding tool pricing is a mess. Not because the tools are bad — most of them are genuinely useful. The mess is in how pricing information is presented.

Every vendor has a different page layout. Some bury the limits in FAQ sections. Some use terms that sound identical but mean completely different things ("requests" vs "completions" vs "interactions" vs "credits"). Some change their pricing model entirely between the time you evaluate and the time you buy.

Try comparing GitHub Copilot's "premium requests" with Cursor's "fast requests" with Windsurf's "quota system" with Claude Code's "5x/20x multiplier." You'll burn an afternoon just getting the terminology straight.

And here's the kicker: **none of this data exists in a machine-readable format.** If you want to build a comparison tool, an internal cost calculator, or just a decision matrix for your team, you're scraping marketing pages and copying numbers into a spreadsheet by hand.

That felt wrong. So I fixed it.

## What's in the Dataset

I went through every pricing page, FAQ, and changelog I could find for 8 major AI coding tools. For each one, I captured:

- **Every pricing tier** with monthly and annual prices
- **Limits and quotas** (the stuff they don't put in the hero section)
- **Feature flags**: autocomplete, chat, agent mode
- **Model access**: which LLMs each tool gives you
- **IDE support**: where it actually works
- **Key differentiators**: what makes each tool worth considering

Here's what's covered:

| Tool | Tiers | Price Range |
|------|-------|-------------|
| GitHub Copilot | 5 (Free, Pro, Pro+, Business, Enterprise) | $0 - $39/mo |
| Cursor | 5 (Hobby, Pro, Pro+, Ultra, Business) | $0 - $200/mo |
| Claude Code | 5 (Pro, Max 5x, Max 20x, Team, API) | $20 - $200/mo |
| Windsurf | 5 (Free, Pro, Max, Teams, Enterprise) | $0 - $60/mo |
| Amazon Q Developer | 2 (Free, Pro) | $0 - $19/mo |
| Tabnine | 2 (Dev, Enterprise) | $9 - $39/mo |
| JetBrains AI | 3 (Free, AI Pro, AI Ultimate) | $0 - $30/mo |
| Gemini Code Assist | 3 (Free, Standard, Enterprise) | $0 - $75/mo |

That's 30 pricing tiers across 8 tools, all structured, all comparable.

## Five Things That Surprised Me

After staring at this data for longer than is probably healthy, a few patterns jumped out.

### 1. The price spread is enormous

The cheapest paid individual plan is $9/month (Tabnine Dev). The most expensive is $200/month (Cursor Ultra and Claude Code Max 20x). That's a 22x difference for tools that, on the surface, do similar things.

This isn't like choosing between Spotify plans. The gap between the floor and the ceiling is massive, and what you get at each price point varies wildly.

### 2. Free tiers are all over the map

Almost every tool offers a free tier now, but "free" means very different things:

- **GitHub Copilot Free**: 2,000 completions + 50 premium requests/month
- **Cursor Hobby**: 2,000 completions + 50 slow requests
- **Windsurf Free**: Light quota, zero-cost models only
- **Gemini Code Assist Free**: Code completions + chat (relatively generous)
- **Amazon Q Free**: Code suggestions + security scans
- **JetBrains AI Free**: Limited AI credits bundled with your IDE

Some free tiers are genuinely usable for light work. Others are glorified demos. The data makes this immediately obvious.

### 3. "Unlimited" almost never means unlimited

This is the biggest gotcha in the entire space. Cursor Pro says "unlimited completions" but gates the good stuff behind 500 "fast requests." Copilot Pro says "unlimited completions" but the agent features eat premium requests with multipliers that vary by model.

The real currency isn't "completions" — it's whatever the tool calls its premium/fast/advanced requests. And those are always limited, even on expensive plans. The only plan I found that genuinely claims unlimited fast requests is Cursor Ultra at $200/month.

When you see "unlimited" on a pricing page, always look for the asterisk.

### 4. Agent mode is where the real money is

The pricing tiers start to make sense when you look at them through the lens of agentic usage. Basic autocomplete and chat are becoming commodities — most tools give you decent versions of both for $10-20/month.

But the moment you start using agent features (Cursor Composer, Claude Code's terminal agent, Windsurf Cascade, Copilot's coding agent), the token consumption goes through the roof. That's why the premium tiers exist. Claude Code Max 20x at $200/month isn't for people who want better autocomplete. It's for developers who are running agentic workflows all day.

This is the real story of AI coding tool pricing in 2026: **autocomplete is cheap, agents are expensive.**

### 5. Team pricing is surprisingly uniform

While individual plans are all over the place, team/business pricing has converged into a narrow band:

- Copilot Business: $19/seat/mo
- Cursor Business: $40/seat/mo
- Windsurf Teams: $40/seat/mo
- Amazon Q Pro: $19/seat/mo

Most land between $19-40 per seat per month. The enterprise tiers add SSO, audit logs, and compliance certifications, but the base team price is remarkably consistent. The market has spoken on what companies will pay per developer.

## How to Use the Data

The dataset is available as an npm package:

```bash
npm install ai-coding-tools-pricing
```

Or just clone the repo:

```bash
git clone https://github.com/lunacompsia-oss/ai-coding-tools-pricing.git
```

Use it however you want. Build a Slack bot that answers "how much does Cursor Pro cost?" Pull it into your internal wiki. Feed it to an LLM for analysis. The data is CC-BY-4.0, so go nuts.

Here's a quick example — find every tool with a free tier:

```javascript
import { tools } from 'ai-coding-tools-pricing';

const freeTools = tools.filter(tool =>
  tool.tiers.some(tier => tier.monthly === 0)
);

freeTools.forEach(tool => {
  const freeTier = tool.tiers.find(t => t.monthly === 0);
  console.log(`${tool.name}: ${freeTier.limits}`);
});
```

## The Companion Site

I also built [CodeCosts](https://codecosts.pages.dev) — a static site powered by the same dataset. It has:

- A **side-by-side comparison table** of all 8 tools
- A **cost calculator** where you plug in your team size and usage level: [codecosts.pages.dev/#calculator](https://codecosts.pages.dev/#calculator)
- **Individual pricing pages** for each tool with tier breakdowns
- **Head-to-head comparisons** (Copilot vs Cursor, Cursor vs Windsurf, etc.)

No tracking, no cookies, no affiliate links. Just the data.

## This Data Has a Shelf Life

AI coding tool pricing changes fast. Supermaven was a real product six months ago — now it's gone. Windsurf completely overhauled their pricing model. Cursor added Ultra. Copilot added Pro+.

I'm maintaining the dataset, but I can't catch everything. If you notice a price change or a new tier, open a PR. The whole point of open-sourcing this was so the community can keep it accurate.

## Why I Built This

I'm not trying to tell you which tool to pick. That depends on your stack, your workflow, your budget, and honestly, your personal taste. Some people love terminal-native tools like Claude Code. Others want everything inside VS Code. Some teams need HIPAA compliance and that narrows the field immediately.

What I am trying to do is make the comparison **fair and transparent.** When all the data is in the same format with the same structure, the marketing language falls away and you can actually see what you're paying for.

The dataset is at [github.com/lunacompsia-oss/ai-coding-tools-pricing](https://github.com/lunacompsia-oss/ai-coding-tools-pricing). Star it if it's useful, open issues if something's wrong, and send PRs when pricing changes.

That's it. No newsletter to subscribe to. Just data.
