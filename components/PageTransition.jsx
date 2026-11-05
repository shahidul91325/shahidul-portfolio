import { ViewTransition } from "react";

// Directional classes are only used when a link tags the navigation with a
// transition type; every other navigation (including browser back/forward)
// falls back to the quiet default crossfade.
const enterByType = {
  "nav-forward": "vt-enter-forward",
  "nav-back": "vt-enter-back",
  default: "vt-enter",
};

const exitByType = {
  "nav-forward": "vt-exit-forward",
  "nav-back": "vt-exit-back",
  default: "vt-exit",
};

/**
 * Page-level transition wrapper. It has to be rendered inside each page (not
 * the root layout) because layouts persist across navigations and therefore
 * never see an enter/exit pair. Renders its children unchanged, so it adds no
 * DOM of its own and cannot shift layout.
 */
export default function PageTransition({ children }) {
  return (
    <ViewTransition enter={enterByType} exit={exitByType}>
      {children}
    </ViewTransition>
  );
}
