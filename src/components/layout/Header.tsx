import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navItems } from "../../data/navigation";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Janna Vending - Home"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-xs font-bold text-white"
        aria-hidden="true"
      >
        JV
      </span>
      <span className="font-display text-base font-semibold tracking-tight text-charcoal">
        Janna Vending
      </span>
    </Link>
  );
}

function NavLinks({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const scrollToSection = useScrollToSection();

  const handleClick = (sectionId: string) => {
    onNavigate?.();
    scrollToSection(sectionId);
  };

  return (
    <ul className={`flex items-center gap-0.5 ${className}`}>
      {navItems.map((item) => (
        <li key={item.sectionId}>
          <button
            type="button"
            onClick={() => handleClick(item.sectionId)}
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-section hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -8 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const springTransition = {
  duration: 0.4,
  ease: [0.32, 0.72, 0, 1] as const,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (mq.matches) setMobileOpen(false);
    };
    close();
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div
          className={`mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-full px-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-6 ${
            scrolled
              ? "bg-background/80 shadow-elevated backdrop-blur-xl border border-border/50"
              : "bg-transparent"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            <NavLinks />
            <div className="ml-1 mr-1 h-5 w-px bg-border" aria-hidden="true" />
            <ThemeToggle />
            <Button to="/contact" size="sm" className="ml-1">
              Contact Us
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition-colors duration-200 hover:bg-section md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <IconX size={18} stroke={1.5} aria-hidden="true" />
              ) : (
                <IconMenu2 size={18} stroke={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-sm md:hidden"
              variants={overlayVariants}
              initial={reduce ? false : "hidden"}
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              className="fixed left-4 right-4 top-24 z-50 rounded-2xl border border-border bg-background/95 p-6 shadow-elevated backdrop-blur-xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={menuVariants}
              initial={reduce ? false : "hidden"}
              animate="visible"
              exit="hidden"
              transition={springTransition}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: reduce ? 0 : 0.05,
                  delayChildren: 0.05,
                }}
                className="flex flex-col gap-1"
              >
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.sectionId}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
                <motion.div
                  variants={menuItemVariants}
                  transition={springTransition}
                  className="mt-3"
                >
                  <Button
                    to="/contact"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: (typeof navItems)[number];
  onNavigate: () => void;
}) {
  const scrollToSection = useScrollToSection();

  return (
    <motion.button
      type="button"
      variants={menuItemVariants}
      transition={springTransition}
      onClick={() => {
        onNavigate();
        scrollToSection(item.sectionId);
      }}
      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-charcoal transition-colors duration-200 hover:bg-section"
    >
      {item.label}
    </motion.button>
  );
}
