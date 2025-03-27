/**
 * G&M Contracting Services Website Script
 */

// Define types
interface ElementSelectors {
    mobileMenuToggle: string;
    mainNav: string;
  }
  
  // Define constants
  const SELECTORS: ElementSelectors = {
    mobileMenuToggle: ".mobile-menu-toggle",
    mainNav: ".main-nav",
  };
  
  // Mobile menu functionality
  class MobileMenu {
    private menuButton: HTMLElement | null;
    private navMenu: HTMLElement | null;
    private isOpen: boolean = false;
  
    constructor() {
      this.menuButton = document.querySelector(SELECTORS.mobileMenuToggle);
      this.navMenu = document.querySelector(SELECTORS.mainNav);
      this.init();
    }
  
    private init(): void {
      if (this.menuButton) {
        this.menuButton.addEventListener("click", this.toggleMenu.bind(this));
      }
  
      // Close menu when clicking on a nav link
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", this.closeMenu.bind(this));
      });
  
      // Close menu when window is resized to desktop size
      window.addEventListener("resize", this.handleResize.bind(this));
    }
  
    private toggleMenu(): void {
      if (!this.navMenu) return;
  
      this.isOpen = !this.isOpen;
  
      if (this.isOpen) {
        this.navMenu.style.display = "flex";
        this.navMenu.style.position = "absolute";
        this.navMenu.style.top = "124px";
        this.navMenu.style.left = "0";
        this.navMenu.style.width = "100%";
        this.navMenu.style.flexDirection = "column";
        this.navMenu.style.backgroundColor = "#111827";
        this.navMenu.style.padding = "20px";
        this.navMenu.style.zIndex = "100";
      } else {
        this.closeMenu();
      }
    }
  
    private closeMenu(): void {
      if (!this.navMenu) return;
  
      this.isOpen = false;
  
      if (window.innerWidth <= 991) {
        this.navMenu.style.display = "none";
      }
    }
  
    private handleResize(): void {
      if (!this.navMenu) return;
  
      if (window.innerWidth > 991) {
        // Reset styles for desktop view
        this.navMenu.style.display = "flex";
        this.navMenu.style.position = "static";
        this.navMenu.style.width = "auto";
        this.navMenu.style.flexDirection = "row";
        this.navMenu.style.padding = "0";
      } else if (!this.isOpen) {
        // Hide menu on mobile if it's not open
        this.navMenu.style.display = "none";
      }
    }
  }
  
  // Smooth scrolling for anchor links
  function initSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    new MobileMenu();
    initSmoothScrolling();
  });
  