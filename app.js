// AI Coding Tool Data — March 2026
// Prices in USD/seat/month (monthly billing)
const tools = [
  {
    name: "GitHub Copilot",
    vendor: "GitHub / Microsoft",
    url: "https://github.com/features/copilot",
    tiers: [
      { name: "Free", monthly: 0, yearly: 0, limits: "2,000 completions + 50 chat messages/mo" },
      { name: "Pro", monthly: 10, yearly: 100, limits: "Unlimited completions + chat" },
      { name: "Pro+", monthly: 39, yearly: 468, limits: "Opus/o1 access + unlimited agent mode" },
      { name: "Business", monthly: 19, yearly: 228, limits: "Admin controls + policy management" },
      { name: "Enterprise", monthly: 39, yearly: 468, limits: "Fine-tuning + knowledge bases" }
    ],
    models: "GPT-4o, Claude 3.5 Sonnet, Gemini",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "VS Code, JetBrains, Neovim, Xcode, Visual Studio",
    highlights: ["Broadest IDE support", "GitHub-native integration", "Copilot Workspace for agents"]
  },
  {
    name: "Cursor",
    vendor: "Anysphere",
    url: "https://cursor.com/pricing",
    tiers: [
      { name: "Hobby", monthly: 0, yearly: 0, limits: "2,000 completions + 50 slow requests" },
      { name: "Pro", monthly: 20, yearly: 192, limits: "Unlimited completions + 500 fast requests" },
      { name: "Pro+", monthly: 60, yearly: 576, limits: "10x Pro usage + background agents" },
      { name: "Ultra", monthly: 200, yearly: 1920, limits: "Unlimited fast requests" },
      { name: "Business", monthly: 40, yearly: 384, limits: "Admin + centralized billing + SAML SSO" }
    ],
    models: "GPT-4o, Claude 3.5/Opus, Gemini, custom",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "Cursor (VS Code fork)",
    highlights: ["Multi-file editing (Composer)", "Codebase-aware context", "Model selection per request"]
  },
  {
    name: "Claude Code",
    vendor: "Anthropic",
    url: "https://claude.ai/code",
    tiers: [
      { name: "Pro (via Claude)", monthly: 20, yearly: 240, limits: "Limited usage per day" },
      { name: "Max 5x", monthly: 100, yearly: 1200, limits: "5x Pro usage" },
      { name: "Max 20x", monthly: 200, yearly: 2400, limits: "20x Pro usage" },
      { name: "Team", monthly: 150, yearly: 1800, limits: "Per seat, admin + SSO" },
      { name: "API (pay-per-use)", monthly: null, yearly: null, limits: "Pay per token — ~$3/$15 per MTok (Sonnet)" }
    ],
    models: "Claude Sonnet 4, Claude Opus 4",
    autocomplete: false,
    chat: true,
    agent: true,
    ides: "Terminal (any IDE), VS Code, JetBrains",
    highlights: ["Terminal-native agent", "Full codebase understanding", "Agentic coding with tool use"]
  },
  {
    name: "Windsurf",
    vendor: "Codeium",
    url: "https://windsurf.com/pricing",
    tiers: [
      { name: "Free", monthly: 0, yearly: 0, limits: "Basic autocomplete + limited chat" },
      { name: "Pro", monthly: 20, yearly: 192, limits: "Unlimited flows + advanced models" },
      { name: "Max", monthly: 200, yearly: 1920, limits: "Unlimited premium requests" },
      { name: "Enterprise", monthly: 40, yearly: 480, limits: "Admin + SSO + audit" }
    ],
    models: "GPT-4o, Claude, proprietary models",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "Windsurf (VS Code fork)",
    highlights: ["Cascade multi-file agent", "Fast autocomplete", "Competitive free tier"]
  },
  {
    name: "Amazon Q Developer",
    vendor: "AWS",
    url: "https://aws.amazon.com/q/developer/",
    tiers: [
      { name: "Free", monthly: 0, yearly: 0, limits: "Code suggestions + security scans" },
      { name: "Pro", monthly: 19, yearly: 228, limits: "Higher limits + admin features" }
    ],
    models: "Amazon proprietary",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "VS Code, JetBrains, CLI, AWS Console",
    highlights: ["AWS integration", "Security scanning", "Code transformation (Java upgrades)"]
  },
  {
    name: "Tabnine",
    vendor: "Tabnine",
    url: "https://www.tabnine.com/pricing",
    tiers: [
      { name: "Dev", monthly: 12, yearly: 144, limits: "AI chat + code completions" },
      { name: "Enterprise", monthly: 39, yearly: 468, limits: "Private models + SSO + audit" }
    ],
    models: "Protected (no training on your code)",
    autocomplete: true,
    chat: true,
    agent: false,
    ides: "VS Code, JetBrains, Neovim, Eclipse",
    highlights: ["Privacy-focused", "No code training guarantee", "On-premises option"]
  },
  {
    name: "JetBrains AI",
    vendor: "JetBrains",
    url: "https://www.jetbrains.com/ai/",
    tiers: [
      { name: "Free (with IDE)", monthly: 0, yearly: 0, limits: "Limited AI credits with JetBrains IDE" },
      { name: "AI Pro", monthly: 10, yearly: 100, limits: "Full AI features" },
      { name: "AI Ultimate", monthly: 30, yearly: 300, limits: "Premium models + higher limits" }
    ],
    models: "Multiple (JetBrains-curated)",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "JetBrains IDEs only",
    highlights: ["Deep IDE integration", "Bundled with IDE subscription", "Context-aware within IDE"]
  },
  {
    name: "Gemini Code Assist",
    vendor: "Google",
    url: "https://cloud.google.com/products/gemini-code-assist",
    tiers: [
      { name: "Free (Individual)", monthly: 0, yearly: 0, limits: "Code completions + chat" },
      { name: "Standard", monthly: 19, yearly: 228, limits: "Admin controls + Gemini 2.0" },
      { name: "Enterprise", monthly: 75, yearly: 900, limits: "Custom models + Vertex integration" }
    ],
    models: "Gemini 2.0 Flash, Gemini 2.0 Pro",
    autocomplete: true,
    chat: true,
    agent: true,
    ides: "VS Code, JetBrains, Cloud Shell, Firebase",
    highlights: ["Google Cloud integration", "Gemini 2.0 models", "Full-codebase awareness"]
  }
];

// Render comparison table
function renderTable(sortKey = null, sortDir = 'asc') {
  const tbody = document.getElementById('comparison-body');
  const sorted = [...tools];

  if (sortKey) {
    sorted.sort((a, b) => {
      let valA, valB;
      switch (sortKey) {
        case 'name': valA = a.name; valB = b.name; break;
        case 'free': valA = a.tiers[0].monthly === 0 ? 0 : 1; valB = b.tiers[0].monthly === 0 ? 0 : 1; break;
        case 'pro-price': {
          const proA = a.tiers.find(t => t.monthly > 0);
          const proB = b.tiers.find(t => t.monthly > 0);
          valA = proA ? proA.monthly : 9999;
          valB = proB ? proB.monthly : 9999;
          break;
        }
        case 'biz-price': {
          const bizA = a.tiers.find(t => t.name.match(/business|enterprise/i) && t.monthly > 0);
          const bizB = b.tiers.find(t => t.name.match(/business|enterprise/i) && t.monthly > 0);
          valA = bizA ? bizA.monthly : 9999;
          valB = bizB ? bizB.monthly : 9999;
          break;
        }
      }
      if (typeof valA === 'string') return sortDir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      return sortDir === 'asc' ? valA - valB : valB - valA;
    });
  }

  tbody.innerHTML = sorted.map(tool => {
    const hasFree = tool.tiers[0].monthly === 0;
    const proTier = tool.tiers.find(t => t.monthly > 0);
    const bizTier = tool.tiers.find(t => t.name.match(/business|enterprise/i) && t.monthly > 0);

    return `<tr>
      <td><strong>${tool.name}</strong><br><span style="color:var(--text-dim);font-size:0.8rem">${tool.vendor}</span></td>
      <td>${hasFree ? '<span class="free-badge">FREE</span>' : '<span class="cross">—</span>'}</td>
      <td class="price-cell">${proTier ? '$' + proTier.monthly + '/mo' : '—'}</td>
      <td class="price-cell">${bizTier ? '$' + bizTier.monthly + '/mo' : '—'}</td>
      <td style="font-size:0.8rem">${tool.models}</td>
      <td>${tool.autocomplete ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</td>
      <td>${tool.chat ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</td>
      <td>${tool.agent ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</td>
      <td style="font-size:0.8rem">${tool.ides}</td>
    </tr>`;
  }).join('');
}

// Sorting
let currentSort = { key: null, dir: 'asc' };
document.querySelectorAll('th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const key = th.dataset.sort;
    if (currentSort.key === key) {
      currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      currentSort = { key, dir: 'asc' };
    }
    document.querySelectorAll('th.sortable').forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
    th.classList.add(currentSort.dir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    renderTable(currentSort.key, currentSort.dir);
  });
});

// Calculator
function updateCalculator() {
  const teamSize = Math.max(1, parseInt(document.getElementById('team-size').value) || 1);
  const isYearly = document.getElementById('billing').value === 'yearly';
  const container = document.getElementById('calc-results');

  const results = [];

  tools.forEach(tool => {
    tool.tiers.forEach(tier => {
      if (tier.monthly === null && tier.yearly === null) return; // skip custom pricing / pay-per-use
      const monthlyCost = isYearly ? (tier.yearly / 12) : tier.monthly;
      const totalMonthly = monthlyCost * teamSize;
      const totalYearly = isYearly ? tier.yearly * teamSize : tier.monthly * 12 * teamSize;
      results.push({
        tool: tool.name,
        tier: tier.name,
        monthly: totalMonthly,
        yearly: totalYearly,
        perSeat: monthlyCost,
        limits: tier.limits
      });
    });
  });

  // Sort by monthly cost, filter out free for "cheapest paid"
  const paid = results.filter(r => r.monthly > 0).sort((a, b) => a.monthly - b.monthly);
  const cheapestPaid = paid.length > 0 ? paid[0].monthly : null;

  // Sort all by cost
  results.sort((a, b) => a.monthly - b.monthly);

  container.innerHTML = results.map(r => {
    const isCheapest = r.monthly > 0 && r.monthly === cheapestPaid;
    return `<div class="calc-card${isCheapest ? ' cheapest' : ''}">
      <div class="tool-name">${r.tool}</div>
      <div class="tool-tier">${r.tier} — ${r.limits}</div>
      <div class="price">${r.monthly === 0 ? 'Free' : '$' + r.monthly.toFixed(0)}
        ${r.monthly > 0 ? '<span class="price-period">/mo</span>' : ''}
      </div>
      ${r.yearly > 0 ? `<div style="font-size:0.8rem;color:var(--text-dim);margin-top:4px">$${r.yearly.toFixed(0)}/yr${teamSize > 1 ? ' (' + teamSize + ' seats × $' + r.perSeat.toFixed(0) + ')' : ''}</div>` : ''}
    </div>`;
  }).join('');
}

document.getElementById('team-size').addEventListener('input', updateCalculator);
document.getElementById('billing').addEventListener('change', updateCalculator);

// Detail cards
function renderDetails() {
  const container = document.getElementById('detail-cards');
  container.innerHTML = tools.map(tool => `
    <div class="detail-card">
      <h3>${tool.name}</h3>
      <div class="vendor">${tool.vendor}</div>
      <ul class="tier-list">
        ${tool.tiers.map(t => `
          <li>
            <span class="tier-name">${t.name}</span>
            <span class="tier-price">${t.monthly === 0 ? 'Free' : t.monthly === null ? 'Custom' : '$' + t.monthly + '/mo'}</span>
          </li>
        `).join('')}
      </ul>
      <ul class="features">
        <li>Models: ${tool.models}</li>
        <li>IDEs: ${tool.ides}</li>
        ${tool.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <a href="${tool.url}" target="_blank" rel="noopener" class="link-out">Official pricing →</a>
    </div>
  `).join('');
}

// Initialize
renderTable();
updateCalculator();
renderDetails();
