/**
 * G&M Contracting Services Website Script
 */
// Define constants
var SELECTORS = {
    mobileMenuToggle: ".mobile-menu-toggle",
    mainNav: ".main-nav",
  };
  // Mobile menu functionality
  var MobileMenu = /** @class */ (function () {
    function MobileMenu() {
      this.isOpen = false;
      this.menuButton = document.querySelector(SELECTORS.mobileMenuToggle);
      this.navMenu = document.querySelector(SELECTORS.mainNav);
      this.init();
    }
    MobileMenu.prototype.init = function () {
      var _this = this;
      if (this.menuButton) {
        this.menuButton.addEventListener("click", this.toggleMenu.bind(this));
      }
      // Close menu when clicking on a nav link
      var navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(function (link) {
        link.addEventListener("click", _this.closeMenu.bind(_this));
      });
      // Close menu when window is resized to desktop size
      window.addEventListener("resize", this.handleResize.bind(this));
    };
    MobileMenu.prototype.toggleMenu = function () {
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
    };
    MobileMenu.prototype.closeMenu = function () {
      if (!this.navMenu) return;
      this.isOpen = false;
      if (window.innerWidth <= 991) {
        this.navMenu.style.display = "none";
      }
    };
    MobileMenu.prototype.handleResize = function () {
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
    };
    return MobileMenu;
  })();
  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    new MobileMenu();
    initSmoothScrolling();
  });
  