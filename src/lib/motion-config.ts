/**
 * Animation control center.
 * Natural-language changes such as "make the hero slower" should map here first.
 */
export const motionConfig = {
  hero: {
    introDuration: 1.15,
    lineStagger: 0.12,
    stripeDuration: 1.4,
    parallaxDistance: 150,
  },
  reveal: {
    duration: 0.9,
    distance: 90,
    stagger: 0.12,
    start: "top 78%",
  },
  menu: {
    scrollLength: 1800,
    scrub: 0.9,
  },
  contact: {
    scrub: 0.8,
    start: "top 78%",
    end: "center center",
  },
} as const;

