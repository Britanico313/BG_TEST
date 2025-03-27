(() => {
    // Define state object for any dynamic content
    interface State {
      [key: string]: any;
    }
  
    const state: State = {};
  
    let context: any = null;
    let nodesToDestroy: HTMLElement[] = [];
    let pendingUpdate: boolean = false;
  
    function destroyAnyNodes(): void {
      // destroy current view template refs before rendering again
      nodesToDestroy.forEach((el) => el.remove());
      nodesToDestroy = [];
    }
  
    // Function to update data bindings and DOM elements
    function update(): void {
      if (pendingUpdate === true) {
        return;
      }
      pendingUpdate = true;
  
      // Set space attribute on contact container
      document.querySelectorAll("[space]").forEach((el) => {
        el.setAttribute("space", "128");
      });
  
      destroyAnyNodes();
  
      pendingUpdate = false;
    }
  
    // Add smooth scrolling for navigation links
    document.addEventListener("DOMContentLoaded", () => {
      const navLinks = document.querySelectorAll('a[href^="#"]');
  
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
  
          const targetId = (link as HTMLAnchorElement).getAttribute("href");
          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
              });
            }
          }
        });
      });
  
      // Update with initial state on first load
      update();
    });
  })();