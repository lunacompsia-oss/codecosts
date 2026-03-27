# codecosts.pages.dev -- Reddit & Hacker News Distribution Strategy

**Date:** 2026-03-27
**Status:** Ready to execute
**Product stage:** Pre-PMF (need signal on whether this tool has organic pull)

---

## Executive Summary

The goal is NOT to "promote" codecosts. The goal is to place it where people are already asking the question it answers: "How much does X cost vs Y?" If nobody cares, no amount of clever posting will save it. If people do care, a single well-placed link will generate sustained traffic.

---

## 1. Subreddit Ranking (Best to Worst for codecosts)

### Tier 1 -- High intent, pricing discussions already happen here

| Subreddit | Size | Why it fits | Format | Self-promo risk |
|-----------|------|-------------|--------|-----------------|
| r/cursor | ~50k+ | Users constantly compare Cursor pricing to alternatives. Pricing confusion is a recurring pain point. | Comment in existing pricing threads, or a discussion post | Low -- tool-specific subs welcome helpful resources |
| r/ChatGPTCoding | ~200k+ | Active discussions about which AI coding tool to pick. Cost is always part of the conversation. | Discussion post or comment | Low-Medium |
| r/ClaudeAI | ~100k+ | Claude Code pricing is confusing (API costs, Max plan). People ask about it constantly. | Comment in existing threads first | Low |
| r/CursorAI | (check if alias) | Same audience as r/cursor | Same | Low |

### Tier 2 -- Good fit, but stricter moderation

| Subreddit | Size | Why it fits | Format | Self-promo risk |
|-----------|------|-------------|--------|-----------------|
| r/webdev | 1.7M | Regular "which AI tool should I use" threads. Cost-conscious audience. | Answer existing questions, link as supporting resource | Medium -- needs established account |
| r/programming | 5.6M | Broader reach but strict. Best as a link post if the site has genuine technical depth. | Link post with no editorializing, or comment | High -- strict 90/10 rule enforcement |
| r/vscode | ~300k+ | Copilot pricing is relevant. Users compare extensions. | Comment in Copilot threads | Medium |
| r/SideProject | 253k | Friendly to makers. "I built X" format works. | Show-and-tell post | Low |

### Tier 3 -- Possible but requires careful positioning

| Subreddit | Size | Why it fits | Format | Self-promo risk |
|-----------|------|-------------|--------|-----------------|
| r/ExperiencedDevs | ~250k+ | Professional devs evaluating tools for teams. Cost matters. But this sub is VERY anti-promotion. | Only as a comment in an existing thread. Never as a post. | Very High |
| r/coding | ~500k | General audience. Lower engagement quality. | Discussion post | Medium |
| r/cscareerquestions | ~900k | Career-focused. Tool pricing is tangential. | Only if someone asks about tool costs | High |
| r/neovim | ~100k | Only relevant if codecosts covers Neovim-compatible tools (Copilot, Codeium/Windsurf). Niche. | Comment only | Medium |

### Tier 4 -- Skip unless you have established presence

| Subreddit | Why to skip |
|-----------|------------|
| r/learnprogramming | Beginners; not buying AI tools yet |
| r/Entrepreneur | Wrong audience; they want SaaS metrics, not dev tools |
| r/InternetIsBeautiful | Only if the site is visually exceptional |

---

## 2. Post Formats That Work (and Why)

### What WORKS on Reddit for comparison/resource sites:

**A. The "I was frustrated so I built this" post (r/SideProject, r/webdev)**
- Frames you as a fellow developer, not a marketer
- Focuses on the problem, not the solution
- Invites feedback and criticism

**B. The helpful comment in an existing thread (Tier 1 and 2 subs)**
- Someone asks "Is Cursor worth it vs Copilot?"
- You write a thoughtful 3-paragraph answer WITH your own experience
- At the end: "I also found this comparison helpful: [link]"
- This is the highest-ROI, lowest-risk approach

**C. The discussion-starter post (r/ChatGPTCoding, r/ClaudeAI)**
- Pose a real question you actually care about
- Share your own analysis in the body
- Link to the site as one of several resources

### What DOES NOT work:

- "Check out my site!" (instant removal)
- "I made a comparison of AI coding tools" with nothing but a link (low effort)
- Posting the same thing across 5+ subreddits in one day (Reddit's crosspost detection flags this)
- A brand-new account posting links (shadow-banned within hours)

---

## 3. Example Posts

### Example A: r/SideProject (Show-and-tell)

**Title:** I got tired of Googling pricing every time I switch AI coding tools, so I built a comparison calculator

**Body:**

```
Every few months I re-evaluate whether I should stick with Cursor or switch
to Copilot or Claude Code. And every time I end up with 15 tabs open trying
to figure out what each plan actually includes and what it would cost my
small team.

So I built codecosts.pages.dev -- it compares pricing for Copilot, Cursor,
Windsurf, Claude Code, Tabnine, JetBrains AI, Amazon Q, and Gemini Code
Assist. There's a cost calculator where you can plug in team size and usage
patterns.

Built with [your tech stack]. Completely free, no signup.

A few things I learned while researching the data:
- The price gap between cheapest and most expensive is wider than you'd think
- "Unlimited" almost never means unlimited once you read the fine print
- Some tools charge per-seat, others per-usage, which makes direct comparison
  surprisingly hard

Would love feedback on what's missing or wrong. Pricing changes fast in this
space so corrections are especially welcome.
```

### Example B: Comment in r/cursor or r/ChatGPTCoding pricing thread

**Context:** Someone posts "Is Cursor Pro worth $20/mo or should I just use Copilot?"

**Your comment:**

```
I've been on Cursor Pro for about 6 months and switched from Copilot before
that. For my workflow (mostly TypeScript/React), Cursor's tab completion is
noticeably better, but the real cost depends on how much you use the
composer/agent features -- those eat through fast requests quickly.

If you're a heavy user, the effective cost is closer to $40-50/mo once you
factor in slow request fallbacks or needing to top up.

I put together a comparison of what each tool actually costs at different
usage levels: codecosts.pages.dev/calculator -- might help you decide based
on your actual usage patterns rather than just the sticker price.
```

### Example C: r/webdev discussion post

**Title:** The actual cost of AI coding tools in 2026 is way more confusing than it should be

**Body:**

```
I spent last weekend trying to figure out the real cost of switching my
team (3 devs) from Copilot to Cursor or Claude Code. What should be a
simple comparison turned into a spreadsheet project.

Some things that make it genuinely hard:
- Cursor charges per seat but has usage limits that vary by plan
- Claude Code's pricing depends on whether you use Max ($100-200/mo) or
  API (pay-per-token, wildly variable)
- Copilot just raised prices for Business tier
- Windsurf got acquired by Codeium and the pricing page is different now
- Amazon Q is "free" but only with an AWS account and limited features

Has anyone else found a clean way to compare these? I've been using
codecosts.pages.dev which helped, but I'm curious how other teams are
thinking about this.

What are you all paying for AI coding tools right now?
```

### Example D: r/ClaudeAI (focused on Claude Code pricing)

**Comment in a "Claude Code pricing is confusing" thread:**

```
The pricing depends a lot on your path:

- Claude Max ($100/mo or $200/mo) gives you Claude Code included but with
  usage caps that vary by tier
- API route is pay-per-token -- I've seen people report anywhere from
  $30-300/mo depending on how aggressively they use it
- Claude Pro ($20/mo) gives you limited Claude Code access

If you want to compare it against Cursor, Copilot, etc. at your expected
usage level, codecosts.pages.dev has a calculator that breaks this down.
Helped me realize Max was actually cheaper for my usage pattern than I
expected.
```

---

## 4. Hacker News Strategy

### The Honest Assessment

codecosts is a good fit for HN IF positioned correctly. HN has shown clear interest in AI coding tool pricing (multiple front-page threads in 2025-2026 on this exact topic). But HN is brutal about:
- Marketing-speak (instant death)
- "Landing pages" with no substance
- Anything that feels like a funnel

### Recommended approach: Show HN

**Title:**
```
Show HN: CodeCosts -- Compare pricing for AI coding tools (Copilot, Cursor, Claude Code, etc.)
```

**Why Show HN and not a regular link:**
- Show HN gives you a comment where you can add context
- HN community is more forgiving of imperfect projects in Show HN
- Regular link submissions of comparison sites often get flagged as SEO spam

**First comment (post this immediately after submitting):**

```
Hi HN. I built this because I kept wasting time comparing pricing every time
a tool changed its plans (which happens roughly every quarter now).

The site covers 8 tools: GitHub Copilot, Cursor, Windsurf, Claude Code,
Tabnine, JetBrains AI, Amazon Q, and Gemini Code Assist. Each has a
breakdown of what's included at each tier, plus a calculator to estimate
monthly cost based on team size and usage.

A few things I found interesting while collecting the data:

- The spread between cheapest and most expensive for a single developer
  is now over 10x ($0 to $200+/mo)
- "Unlimited" requests are becoming the exception rather than the rule
- Most tools now have hidden variable costs (API overages, premium model
  access, agent usage) that make sticker prices misleading

The data is manually maintained so corrections are very welcome -- pricing
in this space moves fast.

Built with [tech stack]. No tracking, no signup required, no affiliate links.

Source: [GitHub link if open source -- this significantly helps on HN]
```

### Alternative: Wait for a natural thread

HN regularly has threads like:
- "Ask HN: How much are you spending on AI coding at work?"
- "Ask HN: What AI tool to use for coding?"
- "The hidden cost of AI coding" (article discussion)

Dropping a helpful comment with a link to codecosts in these threads is lower risk and can drive significant traffic. Set up an alert for these.

### HN Timing

- **Best:** Tuesday-Thursday, 8:00-10:30 AM US Eastern
- **Acceptable:** Monday, Wednesday mornings
- **Avoid:** Friday afternoon, weekends (lower engagement, though some argue less competition)
- **Optimal sweet spot:** Tuesday or Wednesday at 8:30 AM ET

### What will get you flagged on HN:

- Asking anyone to upvote (vote rings are detected and penalized)
- Username that matches your product name
- Posting the link multiple times across different threads in a short period
- Marketing language ("revolutionary", "game-changing", "the ultimate")
- No technical substance in comments
- Responding defensively to criticism

---

## 5. Timing Recommendations

### Reddit posting schedule (spread over 2+ weeks, NOT all at once):

| Week | Day | Action |
|------|-----|--------|
| Week 0 (now) | - | Start participating in r/cursor, r/ChatGPTCoding, r/ClaudeAI. Comment helpfully on 2-3 posts per day. No links to codecosts yet. |
| Week 1 | Mon-Fri | Continue commenting. Answer pricing questions with your own knowledge. Build karma and history. |
| Week 2 | Tuesday | Drop first comment with codecosts link in a relevant r/cursor or r/ChatGPTCoding pricing thread |
| Week 2 | Thursday | Post in r/SideProject (Example A format) |
| Week 3 | Tuesday | Comment in r/ClaudeAI or r/webdev thread (Example D format) |
| Week 3 | Thursday | Post discussion in r/ChatGPTCoding or r/webdev (Example C format) |
| Week 4+ | Ongoing | Monitor for new pricing threads. Comment when genuinely relevant. |

### HN posting:

| When | Action |
|------|--------|
| After Reddit has generated some initial feedback and you've iterated | Submit Show HN (Tuesday-Wednesday, 8:30 AM ET) |
| Ongoing | Monitor HN for AI pricing/tool threads. Comment with link when relevant. |

### Why this order matters:
1. Reddit first because it's more forgiving and gives you feedback to improve the site
2. HN second because you only get one Show HN shot -- make it count after iterating

---

## 6. What NOT To Do (Spam Triggers)

### Reddit:

1. **Do NOT post to more than 2 subreddits in one day.** Reddit's spam filter correlates cross-posts. Even different text with the same URL gets flagged.

2. **Do NOT use a new account.** If your account is less than ~30 days old with minimal karma, your posts will be auto-removed in most subs. Use an established personal account.

3. **Do NOT use identical text across subreddits.** Each post must be genuinely different in content and framing.

4. **Do NOT link-drop without context.** A post that is just a title + URL will be removed in r/programming, r/webdev, and most serious subs.

5. **Do NOT post and disappear.** Respond to every comment, especially negative ones. Engagement signals to mods that you're a real person.

6. **Do NOT use upvote services or ask friends to upvote.** Reddit detects coordinated voting from similar IPs/patterns.

7. **Do NOT edit in links after a post gets traction.** Mods check edit history. Adding promotional links to a popular post is a guaranteed ban.

8. **Do NOT use the words:** "check out", "we just launched", "excited to share", "game-changer". They trigger both human and automated spam detection.

### Hacker News:

1. **Do NOT ask for upvotes anywhere** -- Slack, Discord, Twitter, email. HN actively detects vote rings and will kill your post + potentially ban your account.

2. **Do NOT resubmit if your Show HN doesn't get traction.** Wait at least a few days. Repeated submissions of the same URL get penalized.

3. **Do NOT use a company-name account.** Use a personal account. "codecosts" as a username will feel promotional.

4. **Do NOT respond defensively to criticism.** HN commenters will find flaws. Thank them and fix the issues.

5. **Do NOT use marketing language.** No superlatives. No claims of being "comprehensive" or "the best". Let the work speak.

6. **Do NOT post a Show HN for a site with tracking popups, cookie banners, or signup walls.** HN users will roast you for this and it kills engagement.

---

## 7. Force Multipliers (Things That Significantly Help)

1. **Open source the data.** If the pricing data is in a public GitHub repo (JSON/YAML), link to it. HN loves open data. People can submit PRs to correct pricing.

2. **"No affiliate links" is a trust signal.** If codecosts has zero monetization, say so explicitly. Comparison sites are usually affiliate farms -- being different is notable.

3. **Show methodology.** How is pricing data collected? When was it last updated? A "Last verified" date per tool builds massive credibility.

4. **RSS/changelog for pricing changes.** If the site tracks when tools change pricing, that's genuinely useful content that people will bookmark and share organically.

5. **Speed and simplicity.** If the site loads instantly and has no JavaScript bloat, HN will appreciate it. Mention "no tracking, static site" if applicable.

---

## 8. Measuring What Matters

Do NOT track:
- Upvotes (vanity)
- Page views from a single Reddit spike (temporary)

DO track:
- **Organic return visits** (are people bookmarking it?)
- **Direct traffic growth over weeks** (sign of word-of-mouth)
- **Backlinks from blog posts / newsletters** (sign of real value)
- **GitHub stars if open-sourced** (sign of developer trust)
- **Corrections submitted** (sign people care enough to help)

If people come back without you posting again, you have something. If traffic dies the moment you stop posting, you don't.

---

## Summary: The Three Things That Actually Matter

1. **Be where the question is already being asked.** Don't create demand for a pricing comparison. Find threads where people are already confused about pricing, and be helpful there.

2. **Your first 10 posts should be helpful comments, not promotional posts.** Build a reputation as someone who knows AI coding tool pricing well. The site link becomes natural, not forced.

3. **Ship something worth sharing.** If the site is genuinely better than Googling, people will share it for you. If it's not, no distribution strategy will save it. Focus 80% of energy on making the site undeniably useful, 20% on distribution.
