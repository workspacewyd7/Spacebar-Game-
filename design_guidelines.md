# Spacebar Clicker Game Design Guidelines

## Design Approach
**Reference-Based Approach**: Taking inspiration from modern gaming interfaces and cyberpunk aesthetics to create an engaging, visually striking clicker game that feels premium and immersive.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background: Deep space black (220 15% 8%) with subtle gradient overlays
- Primary accent: Electric cyan (195 100% 50%) for main UI elements
- Secondary accent: Neon purple (280 100% 70%) for upgrades and highlights
- Success/unlock: Bright green (120 100% 60%) for achievements and purchases

**Dark Mode Focus:**
- All text fields and inputs maintain consistent dark theming
- Glowing borders and subtle animations for interactive elements
- High contrast ratios for accessibility

### B. Typography
**Font Families:**
- Primary: "Orbitron" (Google Fonts) - futuristic, tech-inspired for headings and scores
- Secondary: "Inter" (Google Fonts) - clean, readable for body text and descriptions
- Monospace: "JetBrains Mono" for numerical displays and counters

**Hierarchy:**
- Hero score: 4xl+ bold weight with glowing text effects
- Section headers: 2xl semi-bold
- Upgrade names: lg medium weight
- Body text: base regular weight

### C. Layout System
**Tailwind Spacing Primitives:** 2, 4, 6, 8, 12, 16
- Consistent use of p-4, m-8, gap-6 for primary spacing
- Hero section: h-16 for major elements
- Cards and upgrades: p-6 with rounded-xl borders

### D. Component Library

**Core UI Elements:**
- Glowing buttons with cyan/purple gradients and hover animations
- Card-based upgrade system with dark backgrounds and neon borders
- Floating score counter with pulsing animations on clicks
- Progress bars with animated fills and glow effects

**Navigation:**
- Minimal top navigation with game logo and reset/save options
- Side panel for upgrades with smooth slide-in animations

**Data Displays:**
- Real-time score counter with large, glowing numerals
- Per-second rate display with animated counting
- Upgrade costs with currency formatting

**Overlays:**
- Achievement notifications with slide-in animations
- Purchase confirmations with subtle modal overlays
- Unlock alerts with particle effects

### E. Visual Effects & Animations
**Click Feedback:**
- Ripple animations on spacebar press
- Particle explosions from click location
- Score number scaling and glow on increment

**Upgrade System:**
- Smooth card hover effects with glow intensification
- Purchase animations with success particles
- Unlock sequences with dramatic reveals

**Background Elements:**
- Subtle animated grid pattern
- Floating geometric shapes
- Gradient shifts based on score milestones

## Images
No large hero image required. The game focuses on interactive elements rather than static imagery.

**Upgrade Icons:**
- Small 64x64px cyberpunk-style icons for each upgrade tier
- Consistent style with neon outlines and dark centers
- Progressive complexity showing upgrade power levels
- Place icons to the left of upgrade names in the side panel

**Particle Effects:**
- Small geometric shapes for click feedback
- Glowing dots and lines for achievement celebrations
- Animated background elements for atmosphere

## Key Design Principles
1. **Immediate Feedback**: Every interaction provides instant visual and potentially audio feedback
2. **Progressive Disclosure**: Upgrades unlock gradually, maintaining engagement
3. **Visual Hierarchy**: Score prominence with supporting upgrade information
4. **Cyberpunk Aesthetic**: Consistent neon glows, dark backgrounds, and futuristic typography
5. **Performance**: Smooth 60fps animations without impacting game responsiveness