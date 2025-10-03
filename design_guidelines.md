# Nuvantix Tech Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS leaders like Stripe, Linear, and Vercel to create a tech-forward, professional landing page that balances trust with innovation.

**Key Design Principles**:
- Clean, spacious layouts that emphasize clarity and professionalism
- Strategic use of gradients and depth to create visual interest without overwhelming
- Trust-building through polished components and consistent spacing
- Mobile-first responsive design with seamless breakpoints

---

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**:
- **Primary Brand**: 236 72% 48% (vibrant blue) - used for CTAs and key interactive elements
- **Primary Hover**: 236 72% 42% (darker blue for hover states)
- **Secondary Accent**: 269 75% 58% (soft purple) - subtle accents, section backgrounds
- **Neutral Base**: 240 5% 96% (off-white background)
- **Text Primary**: 222 47% 11% (near-black for headings)
- **Text Secondary**: 215 16% 47% (muted blue-gray for body text)
- **Border/Divider**: 214 32% 91% (subtle gray-blue)
- **Success Green**: 142 71% 45% (for trust indicators)

### B. Typography

**Font Families** (via Google Fonts CDN):
- **Primary (Headings)**: 'Inter' - weights 700, 800
- **Secondary (Body)**: 'Inter' - weights 400, 500, 600
- **Accent**: 'Space Grotesk' - weight 600 (for hero headline only)

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (Space Grotesk, font-bold)
- Section Headers: text-3xl md:text-4xl lg:text-5xl (Inter, font-bold)
- Card Titles: text-xl md:text-2xl (Inter, font-semibold)
- Body Text: text-base md:text-lg (Inter, font-normal)
- Captions/Labels: text-sm (Inter, font-medium)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Card gaps: gap-8 md:gap-12
- Button padding: px-8 py-4

**Grid System**:
- Why Choose Us: grid-cols-1 md:grid-cols-3
- Services Cards: grid-cols-1 lg:grid-cols-2
- Testimonials: grid-cols-1 md:grid-cols-2
- How It Works: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

### D. Component Library

**Navigation**:
- Sticky header with backdrop-blur-md effect and subtle shadow on scroll
- Logo: text-2xl font-bold with gradient text effect
- Nav links: font-medium with underline hover effect
- CTA button: Primary blue with shadow-lg, rounded-full

**Hero Section**:
- Full-width with subtle gradient background (from primary to secondary, very light opacity 5-10%)
- Two-column layout on desktop: Left 60% (content) / Right 40% (visual element or illustration)
- Dual CTA buttons: Primary (solid blue) + Secondary (outline with backdrop-blur)
- Minimum height: min-h-[85vh] for impact

**Card Components**:
- Services Cards: Vertical layout with icon at top, rounded-2xl, shadow-xl, hover:scale-105 transition
- Testimonial Cards: Rounded-xl, border, subtle shadow, quote icon in corner, client photo circular
- Feature Cards: bg-white with border, rounded-xl, p-8, icon + title + description layout

**Buttons**:
- Primary: bg-primary text-white rounded-full px-8 py-4 font-semibold shadow-lg
- Secondary: border-2 border-primary text-primary rounded-full px-8 py-4 backdrop-blur-sm (when on images)
- Icon Buttons: Circular with subtle background

**How It Works Steps**:
- Numbered circular badges with gradient backgrounds
- Icon above number
- Connecting lines between steps (hidden on mobile)
- Title + description below each step

**Footer**:
- Three-column layout: Logo/Description | Navigation | Contact
- Dark section background (240 5% 10%) with light text
- Social media icons with hover effects

### E. Visual Effects & Animations

**Minimal, purposeful animations**:
- Fade-in on scroll for section headers only
- Hover scale (1.05) on cards and buttons
- Smooth transitions (duration-300)
- No complex scroll-triggered animations

**Depth & Shadows**:
- Elevation levels: shadow-sm (borders), shadow-md (cards), shadow-xl (CTAs), shadow-2xl (floating elements)
- Subtle gradients on section backgrounds (3-5% opacity max)

---

## Images

### Hero Section
**Large Hero Visual**: Right side of hero section (40% width on desktop)
- Modern tech illustration or 3D rendered abstract shape representing AI/automation
- Clean, minimalist style with primary brand colors
- Format: PNG with transparency or modern illustration
- Placement: Absolute positioned to bleed slightly beyond container for visual interest

### Services Section
**Service Card Icons**: 
- AI Receptionist: Phone/headset icon with AI circuit pattern
- Marketing: Chart/graph trending upward with digital elements
- Size: 64x64px, primary brand color

### Testimonials
**Client Photos**: Circular avatars (80x80px)
- Professional headshots on neutral backgrounds
- Positioned top-left of testimonial card

### Why Choose Us Icons
- 24/7 availability: Clock with checkmark
- Results-driven: Growth chart
- AI Efficiency: Bot/automation symbol
- All icons from Heroicons library, size-12 md:size-16

### Call to Action Section
**Background Pattern**: Subtle geometric grid pattern or dot matrix in very light opacity (5%) over gradient background

---

## Section-Specific Guidelines

**Hero**: Bold, confident, immediately communicates value. Large typography with breathing room. Dual CTAs with clear hierarchy.

**Why Choose Us**: Clean 3-column grid on desktop, stacked on mobile. Icons should be bold and instantly recognizable. Short, punchy copy.

**Services**: Side-by-side cards with distinct visual treatment. Each card should feel complete with icon, title, 4 bullet points, and CTA. Equal height on desktop.

**How It Works**: Horizontal timeline on desktop with connecting visual elements. Clear numbered progression with icons. Collapses to vertical stack on mobile.

**Testimonials**: Authentic-feeling cards with quotes, names, and company context. Include star ratings or company logos for credibility.

**CTA Section**: High-contrast section with vibrant gradient background. Large, centered text with single prominent CTA button. This section should feel like the climax of the page.

**Footer**: Professional, comprehensive. Include all navigation, contact methods, and social proof elements. Dark background for visual grounding.

---

## Responsive Behavior

**Mobile (<768px)**: Single column, larger touch targets (min 48px), reduced typography scale, stacked navigation

**Tablet (768-1024px)**: 2-column layouts where appropriate, medium spacing, hybrid navigation

**Desktop (>1024px)**: Full multi-column layouts, maximum spacing, all visual enhancements active