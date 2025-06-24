# Updated Structure and AI Search Strategy for Extendia.co.uk

## Improved Website Structure (without patios/driveways)

```text
/
├── /services/
│   ├── /house-extensions/
│   │   ├── /kingston/
│   │   ├── /twickenham/
│   │   ├── /wimbledon/
│   │   ├── /putney/
│   │   └── /surbiton/
│   ├── /loft-conversions/
│   │   ├── /kingston/
│   │   ├── /twickenham/
│   │   ├── /wimbledon/
│   │   ├── /putney/
│   │   └── /surbiton/
│   └── /bathroom-renovations/
├── /how-it-works/              # NEW SECTION
├── /areas/
│   ├── /kingston-upon-thames/
│   ├── /twickenham/
│   ├── /wimbledon/
│   ├── /putney/
│   └── /surbiton/
├── /resources/
│   ├── /cost-calculator/
│   ├── /planning-permission-guide/
│   ├── /frequently-asked-questions/  # AI Search optimization
│   └── /project-gallery/
├── /about/
├── /contact/
└── /blog/
```

## AI Search Optimization Strategy

### Key SEO Changes for 2025

Research shows that **60% of Google queries result in no clicks** - users read AI-generated summaries. Extendia must optimize content for **AI Overviews, Perplexity, ChatGPT, and other AI search engines**.

### AI-First Content Strategy

**"/how-it-works/" Section** optimized for AI search:

```markdown
# Structure of /how-it-works/ for AI Search

## 1. Process Overview (AI-friendly format)

- Step-by-step breakdown with numbering

- Direct answers to "How does house extension work?"

- Conversational tone for voice search

## 2. Timeline & Costs

- Structured data with schema markup

- FAQ format: "How long does loft conversion take?"

- Direct price ranges for AI summaries

## 3. Planning Permission Guide

- Comprehensive answers to "Do I need planning permission?"

- Local council-specific information (Kingston, Twickenham)

- Permitted development explanations
```

### Technical AI Search Requirements

**Schema Markup Enhancement:**

```json
{
  "@type": "HowTo",
  "name": "How House Extension Works in South West London",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Initial Consultation",
      "text": "Free consultation and site survey..."
    }
  ]
}
```

**FAQ Schema for AI Overviews:**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does house extension cost in Kingston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "House extensions in Kingston typically cost £30,000-£95,000..."
      }
    }
  ]
}
```

### Content Optimization for AI Search

**Long-form, Comprehensive Content:**

- AI algorithms prefer detailed, in-depth content

- Each service page should answer 10-15 related questions

- Mixed media (images, videos) for better AI understanding

**Semantic Search Optimization:**

- Focus on long-tail keywords and question phrases

- Natural Language Processing alignment

- User intent matching

**Voice Search Optimization:**

- Conversational tone writing

- Question-based headings ("What permits do I need for loft conversion?")

- Local context ("loft conversion specialists near me in Twickenham")

### AI Search Performance Tracking

**Key Metrics for AI Search Success:**

- **Citation tracking** in AI summaries (Google AI Overviews, Perplexity)

- **Featured snippet** capture rate

- **Voice search** query performance

- **Zero-click** search visibility

**Tools for AI Search Monitoring:**

- Profound.so (AI search visibility tracking)

- BrightEdge (AI content optimization)

- MarketMuse (semantic content optimization)

### Updated Next.js Implementation

**Metadata API for AI Search:**

```typescript
export const metadata: Metadata = {
  title: "How House Extensions Work | Step-by-Step Process | Extendia",
  description: "Complete guide to house extension process in South West London. From planning permission to completion in 8-12 weeks. Free consultation available.",
  structured data: {
    "@type": "HowTo",
    // ... schema markup
  }
}
```

**AI-Optimized Component Structure:**

```tsx
// components/HowItWorksSection.tsx
export function HowItWorksSection() {
  return (
    <section>
      <h1>How House Extensions Work in South West London</h1>
      <p>Step-by-step breakdown with direct answers for AI parsing.</p>
    </section>
  );
}
```

### ROI Projection for AI Search

**Expected Improvements:**

- **25% increase** in featured snippet capture

- **40% better** voice search performance

- **15% higher** conversion rates from AI-generated traffic

- **Enhanced brand visibility** in AI summaries vs competitors

This strategy positions Extendia not only in traditional SEO but also in the emerging AI search landscape, where **84% of marketers already use AI for content alignment with search intent**.
