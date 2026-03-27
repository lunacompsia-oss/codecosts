# Show HN Draft — Ready for Human to Post

**Post to:** https://news.ycombinator.com/submit
**Best time:** Tuesday or Wednesday, 8:30 AM ET
**Link:** https://codecosts.pages.dev

---

## Title

```
Show HN: CodeCosts – Open dataset and calculator for AI coding tool pricing
```

## First Comment (post immediately after submitting)

```
Hi HN. I built this because I kept wasting time comparing pricing every time
a tool changed its plans (which happens roughly every quarter now).

The site covers 8 tools: GitHub Copilot, Cursor, Windsurf, Claude Code,
Tabnine, JetBrains AI, Amazon Q, and Gemini Code Assist. Each has a
breakdown of what's included at each tier, plus a calculator to estimate
monthly cost based on team size.

All the pricing data is open-source as structured JSON:
https://github.com/lunacompsia-oss/ai-coding-tools-pricing

You can also `npm install ai-coding-tools-pricing` if you want to build
something on top of it. CC-BY-4.0.

A few things I found interesting while collecting the data:

- The spread between cheapest and most expensive for a single developer
  is now over 20x ($0 to $200/mo)
- "Unlimited" requests are becoming the exception — most tools now have
  quotas, credits, or "premium request" budgets
- Windsurf killed their credit system in March and moved to daily/weekly
  quotas — pricing changes are happening fast

Static HTML, no tracking, no signup, no affiliate links.
Corrections welcome as PRs or issues.
```

---

## Alternative Title Options

```
Show HN: Open pricing data for AI coding tools (JSON, 8 tools, 30+ tiers)
Show HN: CodeCosts – Compare AI coding tool pricing with open data
```
