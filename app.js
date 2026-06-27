// ==========================================================================
// Portfolio Application Controller
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  initPortfolio();
  setupModalListeners();
  setupMobileNav();
  initWorkflowTabs();
  initRadarChartTilt();
  initRadarChartInteractive();
  initThemeToggle();
});

// Current active primary tab and secondary filters
let activeTab = "home";
let activeProjectFilter = "all";

/**
 * Initializes the dashboard navigation, sidebar menus, and events
 */
function initDashboard() {
  const primaryNavItems = document.querySelectorAll(".nav-item");

  // 1. Primary tab navigation
  primaryNavItems.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabId = e.currentTarget.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // 2. CTA redirects (from Home view to other views)
  document.querySelectorAll("[data-go-to]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetTab = e.currentTarget.getAttribute("data-go-to");
      switchTab(targetTab);
    });
  });

  // 3. Hire button redirects
  const hireBtn = document.getElementById("sidebar-hire-btn");
  if (hireBtn) {
    hireBtn.addEventListener("click", () => {
      switchTab("contact");
    });
  }

  // Set initial state
  switchTab("home");
}

/**
 * Switches the active viewport tab and updates sidebars
 */
function switchTab(tabId) {
  activeTab = tabId;

  // Update primary sidebar active class
  document.querySelectorAll(".nav-item").forEach((btn) => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update main content viewport view visibility
  document.querySelectorAll(".tab-view").forEach((view) => {
    if (view.id === `view-${tabId}`) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });

  // Render secondary sidebar dynamic menus
  updateSecondarySidebar(tabId);

  // If entering Home/Overview, ensure the subtab is reset to "about"
  if (tabId === "home") {
    switchSubtab("about");
  }

  // Auto-scroll main panel to top
  const mainPane = document.querySelector(".main-content-pane");
  if (mainPane) mainPane.scrollTop = 0;

  // On mobile, collapse sidebars after choosing a tab
  if (window.innerWidth <= 992) {
    const layout = document.querySelector(".dashboard-layout");
    if (layout) layout.classList.add("nav-collapsed");
  }
}

/**
 * Switches the active subtab in the Overview/Home section
 */
function switchSubtab(subtabId) {
  document.querySelectorAll(".subtab-content").forEach((content) => {
    if (content.id === `home-${subtabId}`) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  // Auto-scroll main panel to top
  const mainPane = document.querySelector(".main-content-pane");
  if (mainPane) mainPane.scrollTop = 0;
}

/**
 * Populates the secondary sidebar content depending on the active primary tab
 */
function updateSecondarySidebar(tabId) {
  const titleEl = document.getElementById("sidebar-sec-title");
  const navContainer = document.getElementById("sidebar-dynamic-nav");

  if (!titleEl || !navContainer) return;

  navContainer.innerHTML = "";

  if (tabId === "home") {
    titleEl.textContent = "Overview";
    navContainer.innerHTML = `
      <ul class="sec-nav-list">
        <li class="sec-nav-item active" data-subtab="about">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> About Me
        </li>
        <li class="sec-nav-item" data-subtab="services">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> Services I Offer
        </li>
        <li class="sec-nav-item" data-subtab="pricing">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> Packages & Pricing
        </li>
      </ul>
      
      <div class="profile-card">
        <h4 class="profile-name">John Paulo Dymosco</h4>
        <p class="profile-profession">Creative Artist & Product Designer</p>
        <div class="profile-divider"></div>
        <ul class="profile-info-list">
          <li class="profile-info-item">
            <svg class="info-icon icon-red" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="info-label">Batangas City, Philippines</span>
          </li>
          <li class="profile-info-item status-item">
            <div class="info-left">
              <svg class="info-icon icon-blue" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span class="info-label">Freelance</span>
            </div>
            <span class="status-indicator">
              <span class="status-dot"></span>
              Available
            </span>
          </li>
          <li class="profile-info-item status-item">
            <div class="info-left">
              <svg class="info-icon icon-blue" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span class="info-label">Full Time</span>
            </div>
            <span class="status-indicator">
              <span class="status-dot"></span>
              Available
            </span>
          </li>
        </ul>
      </div>
    `;

    // Attach click events for subtabs
    navContainer.querySelectorAll(".sec-nav-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const subtabVal = e.currentTarget.getAttribute("data-subtab");

        // Remove active class from sibling list items
        navContainer.querySelectorAll(".sec-nav-item").forEach((i) => i.classList.remove("active"));
        e.currentTarget.classList.add("active");

        switchSubtab(subtabVal);
      });
    });
  }

  else if (tabId === "projects") {
    titleEl.textContent = "Works & Projects";
    navContainer.innerHTML = `
      <ul class="sec-nav-list">
        <li class="sec-nav-item ${activeProjectFilter === 'all' ? 'active' : ''}" data-filter="all">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> All Projects
        </li>
        <li class="sec-nav-item ${activeProjectFilter === 'mobile-apps' ? 'active' : ''}" data-filter="mobile-apps">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> Mobile Apps
        </li>
        <li class="sec-nav-item ${activeProjectFilter === 'graphic-design' ? 'active' : ''}" data-filter="graphic-design">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.24 20.88 6.74 19.07 4.93C17.26 3.12 14.76 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"></circle><circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"></circle><circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"></circle><circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"></circle></svg> Graphic Design
        </li>
        <li class="sec-nav-item ${activeProjectFilter === 'casestudy' ? 'active' : ''}" data-filter="casestudy">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> UX Case Studies
        </li>
      </ul>
    `;

    // Attach click events for filters
    navContainer.querySelectorAll(".sec-nav-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const filterVal = e.currentTarget.getAttribute("data-filter");

        // Remove active class from sibling list items
        navContainer.querySelectorAll(".sec-nav-item").forEach((i) => i.classList.remove("active"));
        e.currentTarget.classList.add("active");

        filterProjects(filterVal);
      });
    });
  }



  else if (tabId === "contact") {
    titleEl.textContent = "Let's Build";
    navContainer.innerHTML = `
      <ul class="sec-nav-list">
        <li class="sec-nav-item active">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 8px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Message Form
        </li>
      </ul>
    `;
  }
}

/**
 * Filters the projects
 */
function filterProjects(filter) {
  activeProjectFilter = filter;
  const cards = document.querySelectorAll(".project-card");

  // Dynamic header updates based on selected filter
  const viewTitle = document.querySelector("#view-projects .view-title");
  const viewSubtitle = document.querySelector("#view-projects .view-subtitle");

  if (viewTitle && viewSubtitle) {
    if (filter === "graphic-design") {
      viewTitle.innerHTML = `My <span class="accent-serif">Branding Design</span>`;
      viewSubtitle.textContent = "Select any design below to view its visual identity highlights and Behance features.";
    } else if (filter === "mobile-apps") {
      viewTitle.innerHTML = `My <span class="accent-serif">Applications</span>`;
      viewSubtitle.textContent = "Select any project below to launch its interactive live simulation or view feature specs.";
    } else if (filter === "casestudy") {
      viewTitle.innerHTML = `UX <span class="accent-serif">Case Studies</span>`;
      viewSubtitle.textContent = "Explore detailed reviews of architecture, design systems, and product thinking.";
    } else if (filter === "all") {
      viewTitle.innerHTML = `My <span class="accent-serif">Works & Projects</span>`;
      viewSubtitle.textContent = "Select any project below to launch its live simulation or view visual design highlights.";
    } else {
      // Tech stack filter fallback
      viewTitle.innerHTML = `Projects using <span class="accent-serif">${filter}</span>`;
      viewSubtitle.textContent = `Showing all projects featuring ${filter} implementation.`;
    }
  }

  const sections = {
    apps: {
      el: document.getElementById("section-app-development"),
      visibleCount: 0
    },
    branding: {
      el: document.getElementById("section-branding-designs"),
      visibleCount: 0
    }
  };

  cards.forEach((card) => {
    const projId = card.getAttribute("data-id");
    const proj = projects.find((p) => p.id === projId);

    if (!proj) return;

    let show = false;

    if (filter === "all") {
      show = true;
    } else if (filter === "mobile-apps") {
      show = proj.type === "mobile-app" || (!proj.type && !!proj.embedUrl);
    } else if (filter === "graphic-design") {
      show = proj.type === "graphic-design";
    } else if (filter === "casestudy") {
      show = proj.type === "case-study";
    } else {
      show = proj.tags.some(t => t.toLowerCase() === filter.toLowerCase());
    }

    if (show) {
      card.style.display = "flex";
      if (proj.type === "graphic-design") {
        sections.branding.visibleCount++;
      } else {
        sections.apps.visibleCount++;
      }
    } else {
      card.style.display = "none";
    }
  });

  // Toggle sections visibility based on filters
  if (filter === "all") {
    if (sections.apps.el) sections.apps.el.style.display = "block";
    if (sections.branding.el) {
      sections.branding.el.style.display = "block";
      sections.branding.el.classList.remove("gallery-mode");
    }
  } else if (filter === "mobile-apps") {
    if (sections.apps.el) sections.apps.el.style.display = "block";
    if (sections.branding.el) {
      sections.branding.el.style.display = "none";
      sections.branding.el.classList.remove("gallery-mode");
    }
  } else if (filter === "graphic-design") {
    if (sections.apps.el) sections.apps.el.style.display = "none";
    if (sections.branding.el) {
      sections.branding.el.style.display = "block";
      sections.branding.el.classList.add("gallery-mode");
    }
  } else {
    // Tech tag filters
    if (sections.apps.el) {
      sections.apps.el.style.display = sections.apps.visibleCount > 0 ? "block" : "none";
    }
    if (sections.branding.el) {
      sections.branding.el.style.display = sections.branding.visibleCount > 0 ? "block" : "none";
      sections.branding.el.classList.remove("gallery-mode");
    }
  }
}

/**
 * Sets up mobile side-drawer triggers
 */
function setupMobileNav() {
  const layout = document.querySelector(".dashboard-layout");
  const menuToggle = document.getElementById("menu-toggle-btn");
  const sidebarClose = document.getElementById("sidebar-close-btn");

  if (!layout) return;

  // Initialize as collapsed on load if on tablet/mobile size
  if (window.innerWidth <= 992) {
    layout.classList.add("nav-collapsed");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      layout.classList.toggle("nav-collapsed");
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
      layout.classList.add("nav-collapsed");
    });
  }

  // Clicking main pane closes drawer on mobile
  const mainPane = document.querySelector(".main-content-pane");
  if (mainPane) {
    mainPane.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        layout.classList.add("nav-collapsed");
      }
    });
  }
}

/**
 * Initializes and renders all projects in the projects grid
 */
function initPortfolio() {
  const appsTrack = document.getElementById("apps-carousel-track");
  const brandingTrack = document.getElementById("branding-carousel-track");
  const wrapper = document.getElementById("projects-carousel-wrapper");

  if (!appsTrack || !brandingTrack || !wrapper) return;

  appsTrack.innerHTML = "";
  brandingTrack.innerHTML = "";

  if (!projects || projects.length === 0) {
    wrapper.innerHTML = `<div class="loader">No projects found. Check projects.js config!</div>`;
    return;
  }

  // 1. Render App projects
  projects.forEach((proj) => {
    if (proj.type !== "graphic-design") {
      const card = document.createElement("div");
      card.setAttribute("data-id", proj.id);
      card.className = "project-card";
      const tagsHtml = proj.tags
        .map((t) => `<span class="tag-badge">${t}</span>`)
        .join("");

      card.innerHTML = `
        <div class="card-icon-wrapper">
          ${proj.icon
          ? `<img src="${proj.icon}" alt="${proj.name} Icon" class="card-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
          : ""
        }
          <div class="card-icon-fallback" style="display: ${proj.icon ? 'none' : 'flex'}">📱</div>
        </div>
        <h3 class="card-title">${proj.name}</h3>
        <div class="card-tagline">${proj.tagline}</div>
        <p class="card-desc">${proj.description}</p>
        <div class="card-tags">${tagsHtml}</div>
        
        <div class="card-actions">
          <button class="btn btn-primary btn-interact" data-id="${proj.id}">Interact Now</button>
          <button class="btn btn-outline btn-details" data-id="${proj.id}">View Details</button>
        </div>
      `;
      appsTrack.appendChild(card);
    }
  });

  // 2. Render Branding projects (Twice to enable seamless continuous CSS looping)
  const brandingProjects = projects.filter(p => p.type === "graphic-design");

  const renderBrandingCard = (proj, isDuplicate = false) => {
    const card = document.createElement("div");
    card.setAttribute("data-id", proj.id);
    card.className = `project-card card-design${isDuplicate ? ' duplicate-card' : ''}`;
    card.innerHTML = `
      <div class="design-card-media">
        <img src="${proj.coverImage}" alt="${proj.name}" class="design-card-img">
      </div>
      <div class="design-card-overlay">
        <div class="design-card-info">
          <h3 class="design-card-title">${proj.name}</h3>
          <div class="design-card-tagline">${proj.tagline}</div>
        </div>
        <div class="design-card-actions">
          <button class="btn btn-details" data-id="${proj.id}">View Details</button>
        </div>
      </div>
    `;
    brandingTrack.appendChild(card);
  };

  // Render set 1
  brandingProjects.forEach((p) => renderBrandingCard(p, false));
  // Render set 2
  brandingProjects.forEach((p) => renderBrandingCard(p, true));

  // Attach action triggers to detail/interact buttons
  document.querySelectorAll(".btn-interact, .btn-details").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling up to the card
      const projId = e.currentTarget.getAttribute("data-id");
      openProjectModal(projId);
    });
  });

  // Attach click listener to branding cards directly for mobile/non-hover views
  document.querySelectorAll(".project-card.card-design").forEach((card) => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-id");
      openProjectModal(projId);
    });
  });

  // Setup Tablet Autoplay Demo
  setupTabletAutoplay();
}

/**
 * Configures the auto-clicking simulation on the landscape tablet mockup iframe using a structured, purposeful tour script
 */
function setupTabletAutoplay() {
  const iframe = document.getElementById("phone-iframe");
  const cursorDot = document.getElementById("demo-cursor-dot");

  if (!iframe || !cursorDot) return;

  const adjustTabletScale = () => {
    const screen = iframe.parentElement;
    if (!screen) return;
    const rect = screen.getBoundingClientRect();
    const sX = rect.width / 412;
    const sY = rect.height / 875;
    iframe.style.transform = `scale(${sX}, ${sY})`;
  };

  // Run dynamic scaling initially and on window resize
  adjustTabletScale();
  window.addEventListener("resize", adjustTabletScale);

  // Listen for navigation clicks to recalculate scaling when the projects tab is shown
  document.querySelectorAll(".nav-item, [data-go-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(adjustTabletScale, 100);
    });
  });

  let isMouseOver = false;
  let currentStepIndex = 0;
  let isExecutingStep = false;

  // Timeout references for cleanup on pause/interrupt
  let stepTimeout = null;
  let activeMoveTimeout = null;
  let activeClickTimeout = null;
  let activeStepTimeout = null;
  let activeTypingInterval = null;

  // The scripted sequence of actions demonstrating Lumina App features (snappy values for fast tour)
  const demoScript = [
    // ====================================================
    // SHOWCASE 1: TODAY DASHBOARD
    // ====================================================
    {
      purpose: "Today Tab: Accessing study dashboard & progress overview",
      action: "switchTab",
      tab: "Today",
      wait: 1500
    },
    {
      purpose: "Today Tab: Scrolling down to view weekly goals & cards",
      action: "scrollDown",
      wait: 1200
    },
    {
      purpose: "Today Tab: Clicking daily streak circle to toggle day completion",
      action: "clickStreakDay",
      wait: 1500
    },
    {
      purpose: "Today Tab: Toggling study check-item on Quote card",
      action: "toggleQuoteCheck",
      wait: 1500
    },
    {
      purpose: "Today Tab: Clicking 'READ' to launch scripture passage in reader",
      action: "clickPassageReadBtn",
      wait: 1800
    },

    // ====================================================
    // SHOWCASE 2: SCRIPTURE READER (READ TAB)
    // ====================================================
    {
      purpose: "Read Tab: Scrolling down through Bible verses",
      action: "scrollDown",
      wait: 1200
    },
    {
      purpose: "Read Tab: Scrolling back up the chapter",
      action: "scrollUp",
      wait: 1000
    },
    {
      purpose: "Read Tab: Clicking Matthew 16:27 to open context menu",
      action: "clickVerse",
      verse: 7, // highlights verse 27 (looks for matching start string)
      wait: 1500
    },
    {
      purpose: "Read Tab: Creating a study note card for this verse",
      action: "clickAddNote",
      wait: 1500
    },
    {
      purpose: "Read Tab: Initializing and linking a new notebook",
      action: "clickCreateNewNote",
      wait: 1500
    },
    {
      purpose: "Read Tab: Typing title: 'Study Notes'",
      action: "typeNoteTitle",
      text: "Study Notes",
      wait: 2000
    },
    {
      purpose: "Read Tab: Saving notebook entry and verse link",
      action: "clickCreateBtn",
      wait: 1800
    },
    {
      purpose: "Read Tab: Dismissing confirmation popup banner",
      action: "dismissAlert",
      wait: 1200
    },
    {
      purpose: "Read Tab: Closing context details sheet panel",
      action: "closeFeatures",
      wait: 1200
    },

    // ====================================================
    // SHOWCASE 3: SCRIPTURE SEARCH (SEARCH TAB)
    // ====================================================
    {
      purpose: "Search Tab: Opening concordance search page",
      action: "switchTab",
      tab: "Search",
      wait: 1500
    },
    {
      purpose: "Search Tab: Searching bible concordance for: 'faith'",
      action: "typeSearch",
      text: "faith",
      wait: 2200
    },
    {
      purpose: "Search Tab: Scrolling down concordance search results",
      action: "scrollDown",
      wait: 1200
    },
    {
      purpose: "Search Tab: Scrolling back up search results",
      action: "scrollUp",
      wait: 1000
    },
    {
      purpose: "Search Tab: Clicking result to jump to verse in reader",
      action: "clickSearchResult",
      wait: 1800
    },
    {
      purpose: "Search Tab: Closing search-detail overlay panel",
      action: "closeFeatures",
      wait: 1200
    },

    // ====================================================
    // SHOWCASE 4: STUDY GUIDES & COMMENTARIES (STUDY TAB)
    // ====================================================
    {
      purpose: "Study Tab: Opening outline guides & commentaries",
      action: "switchTab",
      tab: "Study",
      wait: 1500
    },
    {
      purpose: "Study Tab: Clicking outline guide for Romans chapter 2",
      action: "clickStudyOutline",
      wait: 1800
    },
    {
      purpose: "Study Tab: Scrolling outline and study commentary notes",
      action: "scrollDown",
      wait: 1500
    },
    {
      purpose: "Study Tab: Scrolling back up outline content",
      action: "scrollUp",
      wait: 1200
    },
    {
      purpose: "Study Tab: Closing Romans study guide card panel",
      action: "closeFeatures",
      wait: 1200
    },

    // ====================================================
    // SHOWCASE 5: ARCHIVE LIBRARY (LIBRARY TAB)
    // ====================================================
    {
      purpose: "Library Tab: Accessing personal note collection",
      action: "switchTab",
      tab: "Library",
      wait: 1500
    },
    {
      purpose: "Library Tab: Scrolling notebooks index",
      action: "scrollDown",
      wait: 1200
    },
    {
      purpose: "Library Tab: Scrolling back up notebook list",
      action: "scrollUp",
      wait: 1000
    },
    {
      purpose: "Library Tab: Clicking notebook 'Study Notes' to open editor",
      action: "clickLibraryNote",
      wait: 1500
    },
    {
      purpose: "Library Tab: Scrolling note editor content",
      action: "scrollDown",
      wait: 1200
    },
    {
      purpose: "Library Tab: Scrolling back up note details",
      action: "scrollUp",
      wait: 1000
    },
    {
      purpose: "Library Tab: Closing note editor panel to clear view",
      action: "closeFeatures",
      wait: 1500
    }
  ];

  // Helper functions to locate DOM elements inside iframe
  function isElementVisible(el) {
    if (!el) return false;
    try {
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;

      const style = iframe.contentWindow.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
        return false;
      }

      // Check parent tree visibility
      let parent = el.parentElement;
      while (parent && parent.tagName !== 'BODY') {
        const pStyle = iframe.contentWindow.getComputedStyle(parent);
        if (pStyle.display === "none" || pStyle.visibility === "hidden") {
          return false;
        }
        parent = parent.parentElement;
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  function findScrollableContainer(iframeDoc) {
    const divs = Array.from(iframeDoc.querySelectorAll('div, ScrollView, main'));
    let bestContainer = null;
    let maxArea = 0;

    for (const el of divs) {
      if (isElementVisible(el)) {
        const style = iframe.contentWindow.getComputedStyle(el);
        const hasScroll = style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto' || style.overflow === 'scroll';
        if (hasScroll && el.scrollHeight > el.clientHeight) {
          const rect = el.getBoundingClientRect();
          const area = rect.width * rect.height;
          if (area > maxArea) {
            maxArea = area;
            bestContainer = el;
          }
        }
      }
    }
    return bestContainer || iframeDoc.querySelector('main') || iframeDoc.body;
  }

  function findTabButton(iframeDoc, tabName) {
    const clickables = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button, a'));
    return clickables.find(el => {
      const text = (el.textContent || "").trim().toLowerCase();
      return text === tabName.toLowerCase() && isElementVisible(el);
    });
  }

  function findVerseElement(iframeDoc, verseNumber) {
    const clickables = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button'));
    for (const el of clickables) {
      const text = (el.textContent || "").trim();
      if ((text.startsWith(String(verseNumber)) || text.includes(` ${verseNumber} `)) && isElementVisible(el)) {
        return el;
      }
    }
    const all = Array.from(iframeDoc.getElementsByTagName("*"));
    for (const el of all) {
      const text = (el.textContent || "").trim();
      if (text === String(verseNumber) && isElementVisible(el)) {
        return el.parentElement || el;
      }
    }
    return null;
  }

  function findClickableByText(iframeDoc, text) {
    const primary = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button, a'));
    let found = primary.find(el => (el.textContent || "").trim().toLowerCase() === text.toLowerCase() && isElementVisible(el));
    if (found) return found;

    found = primary.find(el => (el.textContent || "").trim().toLowerCase().includes(text.toLowerCase()) && isElementVisible(el));
    if (found) return found;

    const secondary = Array.from(iframeDoc.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6'));
    found = secondary.find(el => (el.textContent || "").trim().toLowerCase() === text.toLowerCase() && isElementVisible(el));
    if (found) return found;

    found = secondary.find(el => (el.textContent || "").trim().toLowerCase().includes(text.toLowerCase()) && isElementVisible(el));
    if (found) return found;

    const divs = Array.from(iframeDoc.querySelectorAll('div'));
    const candidates = divs.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.width < 350 && rect.height > 0 && rect.height < 150 && isElementVisible(el);
    });
    found = candidates.find(el => (el.textContent || "").trim().toLowerCase() === text.toLowerCase());
    if (found) return found;

    return candidates.find(el => (el.textContent || "").trim().toLowerCase().includes(text.toLowerCase()));
  }

  function findDismissAlertButton(iframeDoc) {
    const elements = Array.from(iframeDoc.getElementsByTagName("*"));
    for (const el of elements) {
      const text = (el.textContent || "").trim();
      const upperText = text.toUpperCase();
      if (upperText === "OK" || upperText === "CLOSE" || upperText === "DISMISS" || upperText === "CANCEL" || upperText === "DONE") {
        if (isElementVisible(el)) {
          let parent = el;
          let depth = 0;
          while (parent && depth < 3) {
            if (parent.getAttribute('role') === 'button' || parent.getAttribute('tabindex') === '0' || parent.tagName === 'BUTTON') {
              return parent;
            }
            parent = parent.parentElement;
            depth++;
          }
          return el;
        }
      }
    }
    return null;
  }

  function findCloseButtonByContext(iframeDoc) {
    const buttons = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button'));

    for (const btn of buttons) {
      const txt = (btn.textContent || "").trim();
      if ((txt === "✕" || txt === "✕" || txt === "×" || txt === "Close" || txt === "Cancel") && isElementVisible(btn)) {
        return btn;
      }
    }

    const texts = Array.from(iframeDoc.querySelectorAll('div, span, p'));
    for (const el of texts) {
      const txt = (el.textContent || "").trim();
      if (/^[A-Z][a-z]+ \d+:\d+(-\d+)?$/.test(txt) || txt === "Add to Study Note" || txt === "Compare Translations") {
        if (isElementVisible(el)) {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('[role="button"], div[tabindex="0"], button'));
            const visibleSiblings = siblings.filter(isElementVisible);
            if (visibleSiblings.length > 0) {
              return visibleSiblings[0];
            }
          }
        }
      }
    }

    for (const btn of buttons) {
      if (isElementVisible(btn)) {
        if (btn.querySelector('svg')) {
          return btn;
        }
      }
    }

    return null;
  }

  function findStreakDayButton(iframeDoc) {
    const clickables = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button'));
    const list = clickables.filter(el => {
      const text = (el.textContent || "").trim();
      return (text === "M" || text === "T" || text === "W" || text === "F" || text === "S") && isElementVisible(el);
    });
    return list.length > 0 ? list[Math.min(2, list.length - 1)] : null;
  }

  function findQuoteCheckbox(iframeDoc) {
    const clickables = Array.from(iframeDoc.querySelectorAll('[role="button"], div[tabindex="0"], button'));
    for (const btn of clickables) {
      if (isElementVisible(btn)) {
        const txt = (btn.textContent || "").trim();
        if (txt === "Quote") {
          let parent = btn.parentElement;
          while (parent && parent.tagName !== 'BODY') {
            const check = parent.querySelector('[role="button"]:not(:first-child), div[tabindex="0"]:not(:first-child), button:not(:first-child)');
            if (check && check !== btn) {
              return check;
            }
            parent = parent.parentElement;
          }
        }
      }
    }
    return null;
  }

  function findSearchResultItem(iframeDoc) {
    const elements = Array.from(iframeDoc.querySelectorAll('span, div, p, [role="button"], button'));
    for (const badge of elements) {
      const txt = (badge.textContent || "").trim().toUpperCase();
      if (txt === "VERSE" || txt === "PLACE" || txt === "PEOPLE" || txt === "NOTE") {
        if (isElementVisible(badge)) {
          let parent = badge;
          let depth = 0;
          while (parent && depth < 5) {
            if (parent.getAttribute('role') === 'button' || parent.getAttribute('tabindex') === '0' || parent.tagName === 'BUTTON' || (parent.style && parent.style.cursor === 'pointer')) {
              return parent;
            }
            parent = parent.parentElement;
            depth++;
          }
        }
      }
    }
    return findClickableByText(iframeDoc, "VERSE") || findClickableByText(iframeDoc, "PLACE") || findClickableByText(iframeDoc, "PEOPLE") || findClickableByText(iframeDoc, "NOTE");
  }

  function clearAllTimers() {
    if (stepTimeout) { clearTimeout(stepTimeout); stepTimeout = null; }
    if (activeStepTimeout) { clearTimeout(activeStepTimeout); activeStepTimeout = null; }
    if (activeMoveTimeout) { clearTimeout(activeMoveTimeout); activeMoveTimeout = null; }
    if (activeClickTimeout) { clearTimeout(activeClickTimeout); activeClickTimeout = null; }
    if (activeTypingInterval) { clearInterval(activeTypingInterval); activeTypingInterval = null; }
  }

  function moveAndClick(element, callback) {
    if (!element) {
      activeStepTimeout = setTimeout(callback, 1000); // 1000ms safety wait for cadence if element not found
      return;
    }

    const positionCursorAndClick = () => {
      if (isMouseOver) return;

      const elRect = element.getBoundingClientRect();
      const iframeRect = iframe.getBoundingClientRect();
      const scaleX = iframeRect.width / 412;
      const scaleY = iframeRect.height / 875;

      const targetX = (elRect.left + elRect.width / 2) * scaleX;
      const targetY = (elRect.top + elRect.height / 2) * scaleY;

      cursorDot.style.left = `${targetX}px`;
      cursorDot.style.top = `${targetY}px`;

      activeMoveTimeout = setTimeout(() => {
        if (isMouseOver) return;

        cursorDot.classList.add("clicking");

        element.click();
        element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
        element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));

        activeClickTimeout = setTimeout(() => {
          cursorDot.classList.remove("clicking");
          callback();
        }, 150); // 150ms click state
      }, 600); // 600ms transition time (perfectly matched with CSS 0.6s)
    };

    // Check if element is off-screen inside the iframe viewport
    const rect = element.getBoundingClientRect();
    const iframeHeight = iframe.clientHeight || 520;
    const iframeWidth = iframe.clientWidth || 800;

    const isOffscreen = rect.top < 0 || rect.bottom > iframeHeight || rect.left < 0 || rect.right > iframeWidth;

    if (isOffscreen) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      activeStepTimeout = setTimeout(() => {
        positionCursorAndClick();
      }, 500); // Wait for smooth scroll to finish
    } else {
      positionCursorAndClick();
    }
  }

  function executeStep(step, iframeDoc, callback) {
    // 1. Global Alert Interceptor: Prioritize dismissing popups/alerts immediately
    const dismissBtn = findDismissAlertButton(iframeDoc);
    if (dismissBtn && step.action !== "dismissAlert") {
      const tipEl = document.querySelector(".tablet-tip");
      if (tipEl) {
        tipEl.innerHTML = `<span>🎮 Autoplay:</span> Dismissing alert popup`;
      }
      moveAndClick(dismissBtn, () => {
        setTimeout(callback, 800); // safety wait after alert dismiss
      });
      return;
    }

    // 2. Modal safety check: Close open drawers/modals first before switching tabs
    if (step.action === "switchTab") {
      const closeBtn = findCloseButtonByContext(iframeDoc);
      if (closeBtn) {
        const tipEl = document.querySelector(".tablet-tip");
        if (tipEl) {
          tipEl.innerHTML = `<span>🎮 Autoplay:</span> Closing active feature panel first`;
        }
        moveAndClick(closeBtn, () => {
          setTimeout(() => {
            const tabBtn = findTabButton(iframeDoc, step.tab);
            moveAndClick(tabBtn, callback);
          }, 800); // safety wait after close drawer
        });
        return;
      }
    }

    switch (step.action) {
      case "switchTab": {
        const tabBtn = findTabButton(iframeDoc, step.tab);
        moveAndClick(tabBtn, callback);
        break;
      }
      case "scrollDown":
      case "scrollUp": {
        const scrollable = findScrollableContainer(iframeDoc);
        if (scrollable) {
          const rect = scrollable.getBoundingClientRect();
          const iframeRect = iframe.getBoundingClientRect();
          const scaleX = iframeRect.width / 412;
          const scaleY = iframeRect.height / 875;

          const targetX = (rect.left + rect.width / 2) * scaleX;
          const targetY = (rect.top + rect.height / 2) * scaleY;

          cursorDot.style.left = `${targetX}px`;
          cursorDot.style.top = `${targetY}px`;

          activeStepTimeout = setTimeout(() => {
            if (isMouseOver) return;

            const isDown = step.action === "scrollDown";
            const speed = 15; // pixels per frame (smooth scroll speed)

            const scrollStep = () => {
              if (isMouseOver) return;

              const current = scrollable.scrollTop;
              const limit = isDown
                ? scrollable.scrollHeight - scrollable.clientHeight
                : 0;

              const distanceRemaining = Math.abs(limit - current);

              // If we are at the limit (within 2px)
              if (distanceRemaining <= 2) {
                scrollable.scrollTop = limit;
                callback();
              } else {
                const stepAmount = Math.min(speed, distanceRemaining) * (isDown ? 1 : -1);
                scrollable.scrollTop += stepAmount;

                // Safety boundary guard (if scroll position didn't update)
                if (scrollable.scrollTop === current && distanceRemaining > 5) {
                  callback();
                } else {
                  requestAnimationFrame(scrollStep);
                }
              }
            };

            requestAnimationFrame(scrollStep);
          }, 600); // 600ms cursor flight wait
        } else {
          activeStepTimeout = setTimeout(callback, 1000);
        }
        break;
      }
      case "clickVerse": {
        const verseEl = findVerseElement(iframeDoc, step.verse);
        moveAndClick(verseEl, callback);
        break;
      }
      case "clickAddNote": {
        const btn = findClickableByText(iframeDoc, "Add to Note");
        moveAndClick(btn, callback);
        break;
      }
      case "clickCreateNewNote": {
        const btn = findClickableByText(iframeDoc, "Create & Add to New Note") || findClickableByText(iframeDoc, "+ Create");
        moveAndClick(btn, callback);
        break;
      }
      case "typeNoteTitle": {
        const input = iframeDoc.querySelector('input[placeholder*="title"], input[type="text"], textarea');
        if (input) {
          // Physically click the input field first
          moveAndClick(input, () => {
            if (isMouseOver) return;
            input.focus();
            input.value = "";
            let idx = 0;
            const textToType = step.text;
            activeTypingInterval = setInterval(() => {
              if (isMouseOver) {
                clearInterval(activeTypingInterval);
                return;
              }
              if (idx < textToType.length) {
                input.value += textToType[idx];
                input.dispatchEvent(new Event("input", { bubbles: true }));
                idx++;
              } else {
                clearInterval(activeTypingInterval);
                activeTypingInterval = null;
                callback();
              }
            }, 80); // 80ms typing delay
          });
        } else {
          activeStepTimeout = setTimeout(callback, 1000);
        }
        break;
      }
      case "clickCreateBtn": {
        const btn = findClickableByText(iframeDoc, "Create");
        moveAndClick(btn, callback);
        break;
      }
      case "dismissAlert": {
        const btn = findDismissAlertButton(iframeDoc);
        moveAndClick(btn, callback);
        break;
      }
      case "closeFeatures": {
        const btn = findCloseButtonByContext(iframeDoc);
        moveAndClick(btn, callback);
        break;
      }
      case "focusSearch": {
        const input = iframeDoc.querySelector('input[placeholder*="Search"], input[placeholder*="verses"], input[type="text"]');
        if (input) {
          moveAndClick(input, callback);
        } else {
          activeStepTimeout = setTimeout(callback, 1000);
        }
        break;
      }
      case "typeSearch": {
        const input = iframeDoc.querySelector('input[placeholder*="Search"], input[placeholder*="verses"], input[type="text"]');
        if (input) {
          // Click input first before typing
          moveAndClick(input, () => {
            if (isMouseOver) return;
            input.focus();
            input.value = "";
            let idx = 0;
            const textToType = step.text;
            activeTypingInterval = setInterval(() => {
              if (isMouseOver) {
                clearInterval(activeTypingInterval);
                return;
              }
              if (idx < textToType.length) {
                input.value += textToType[idx];
                input.dispatchEvent(new Event("input", { bubbles: true }));
                idx++;
              } else {
                clearInterval(activeTypingInterval);
                activeTypingInterval = null;
                input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", keyCode: 13, bubbles: true }));
                callback();
              }
            }, 80); // 80ms typing delay
          });
        } else {
          activeStepTimeout = setTimeout(callback, 1000);
        }
        break;
      }
      case "clickStudyOutline": {
        const btn = findClickableByText(iframeDoc, "Romans") || findClickableByText(iframeDoc, "Outline") || findClickableByText(iframeDoc, "Read Outline");
        moveAndClick(btn, callback);
        break;
      }
      case "clickStreakDay": {
        const btn = findStreakDayButton(iframeDoc);
        moveAndClick(btn, callback);
        break;
      }
      case "toggleQuoteCheck": {
        const btn = findQuoteCheckbox(iframeDoc);
        moveAndClick(btn, callback);
        break;
      }
      case "clickPassageReadBtn": {
        const btn = findClickableByText(iframeDoc, "READ");
        moveAndClick(btn, callback);
        break;
      }
      case "clickSearchResult": {
        const btn = findSearchResultItem(iframeDoc);
        moveAndClick(btn, callback);
        break;
      }
      case "clickLibraryNote": {
        const btn = findClickableByText(iframeDoc, "Welcome") || findClickableByText(iframeDoc, "Study Notes") || findClickableByText(iframeDoc, "Folder");
        moveAndClick(btn, callback);
        break;
      }
      default:
        callback();
    }
  }

  const runNextStep = () => {
    if (isMouseOver) {
      stepTimeout = setTimeout(runNextStep, 1000);
      return;
    }

    // Stop autoplay when Portfolio's Projects view is not active
    const projectsTab = document.getElementById("view-projects");
    if (projectsTab && !projectsTab.classList.contains("active")) {
      stepTimeout = setTimeout(runNextStep, 1000);
      return;
    }

    // Recalculate scaling whenever steps run to handle tab visibility changes
    adjustTabletScale();

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (!iframeDoc) {
        stepTimeout = setTimeout(runNextStep, 1000);
        return;
      }

      const step = demoScript[currentStepIndex];

      const tipEl = document.querySelector(".tablet-tip");
      if (tipEl) {
        tipEl.innerHTML = `<span>🎮 Autoplay:</span> ${step.purpose}`;
      }

      isExecutingStep = true;
      executeStep(step, iframeDoc, () => {
        isExecutingStep = false;
        currentStepIndex = (currentStepIndex + 1) % demoScript.length;
        stepTimeout = setTimeout(runNextStep, step.wait || 1000);
      });

    } catch (err) {
      isExecutingStep = false;
      stepTimeout = setTimeout(runNextStep, 1000);
    }
  };

  const startAutoplay = () => {
    cursorDot.style.opacity = "1";
    runNextStep();
  };

  const stopAutoplay = () => {
    clearAllTimers();
    cursorDot.style.opacity = "0";
  };

  // Attach hover pause listeners to the phone bezel and screen
  const wrapper = iframe.closest(".phone-device");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", () => {
      isMouseOver = true;
      stopAutoplay();
    });
    wrapper.addEventListener("mouseleave", () => {
      isMouseOver = false;
      startAutoplay();
    });
    wrapper.addEventListener("touchstart", () => {
      isMouseOver = true;
      stopAutoplay();
    }, { passive: true });
    wrapper.addEventListener("touchend", () => {
      isMouseOver = false;
      startAutoplay();
    }, { passive: true });
  }

  // Once iframe is fully loaded, start autoplaying
  iframe.addEventListener("load", () => {
    adjustTabletScale();
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc) {
        let style = iframeDoc.getElementById("1440-zoom-style");
        if (!style) {
          style = iframeDoc.createElement("style");
          style.id = "1440-zoom-style";
          style.innerHTML = `
            html, body, #root {
              width: 100% !important;
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        }
      }
    } catch (e) {
      console.error("Failed to inject 4K scale styling into iframe:", e);
    }
    // Wait 1.5 seconds for app initial load transition before clicking
    setTimeout(startAutoplay, 1500);
  });
}


/**
 * Attaches smooth scroll listeners to carousel next/prev controls
 */
function setupCarouselScroll(prevId, nextId, trackId) {
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const track = document.getElementById(trackId);

  if (!prevBtn || !nextBtn || !track) return;

  // Scroll amounts: scroll by slightly less than the visible view width
  const scrollDistance = 400;

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollDistance, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollDistance, behavior: "smooth" });
  });

  // Optional: Auto-hide buttons when at start or end
  const toggleButtons = () => {
    const isAtStart = track.scrollLeft <= 10;
    const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;

    prevBtn.style.opacity = isAtStart ? "0.4" : "1";
    prevBtn.style.pointerEvents = isAtStart ? "none" : "auto";

    nextBtn.style.opacity = isAtEnd ? "0.4" : "1";
    nextBtn.style.pointerEvents = isAtEnd ? "none" : "auto";
  };

  track.addEventListener("scroll", toggleButtons);
  window.addEventListener("resize", toggleButtons);

  // Initial check
  setTimeout(toggleButtons, 100);
}

/**
 * Setup autoplay scrolling for a target carousel track
 */
function setupCarouselAutoScroll(trackId, intervalMs = 3500) {
  const track = document.getElementById(trackId);
  if (!track) return;

  let autoScrollTimer = null;
  const scrollDistance = 400;

  const startScroll = () => {
    if (autoScrollTimer) return;
    autoScrollTimer = setInterval(() => {
      // Check if project tab is visible before scrolling to save resources
      const projectsView = document.getElementById("view-projects");
      if (projectsView && !projectsView.classList.contains("active")) return;

      const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
      if (isAtEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: scrollDistance, behavior: "smooth" });
      }
    }, intervalMs);
  };

  const stopScroll = () => {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  };

  // Start scrolling
  startScroll();

  // Pause on hover
  track.addEventListener("mouseenter", stopScroll);
  track.addEventListener("mouseleave", startScroll);

  // Pause on touch (for mobile)
  track.addEventListener("touchstart", stopScroll, { passive: true });
  track.addEventListener("touchend", startScroll, { passive: true });
}

/**
 * Set up listeners for closing the modal overlay
 */
function setupModalListeners() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !closeBtn) return;

  // Close triggers
  closeBtn.addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Esc Key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

/**
 * Open detail preview modal and load the project iframe simulator
 */
let _detailsPaneOriginalHTML = null; // Cache original details-pane HTML to restore after case-study

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalCard = modal ? modal.querySelector(".modal-card") : null;
  const iframe = document.getElementById("project-iframe");
  const fallback = document.getElementById("simulator-fallback");
  const simulatorPane = document.getElementById("modal-simulator-pane");
  const designPane = document.getElementById("modal-design-pane");
  const designImg = document.getElementById("modal-design-img");
  const detailsPaneEl = modal ? modal.querySelector(".details-pane") : null;

  if (!modal || !iframe || !fallback || !simulatorPane || !designPane || !designImg || !detailsPaneEl) return;

  // Always restore details-pane to its original HTML before applying any mode,
  // so IDs like #modal-project-title, #btn-github are always present.
  if (_detailsPaneOriginalHTML === null) {
    _detailsPaneOriginalHTML = detailsPaneEl.innerHTML;
  } else {
    detailsPaneEl.innerHTML = _detailsPaneOriginalHTML;
  }

  // 1. Set text details
  document.getElementById("modal-project-title").textContent = project.name;
  document.getElementById("modal-project-tagline").textContent = project.tagline;
  document.getElementById("modal-project-description").textContent = project.description;

  // 2. Set tags list
  const tagsBox = document.getElementById("modal-project-tags");
  tagsBox.innerHTML = project.tags
    .map((t) => `<span class="tag-badge">${t}</span>`)
    .join("");

  // 3. Set features highlights
  const featuresList = document.getElementById("modal-project-features");
  featuresList.innerHTML = project.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  // 4. Set action buttons links
  const btnGithub = document.getElementById("btn-github");

  if (project.type === "graphic-design") {
    if (modalCard) modalCard.classList.add("design-mode");
    // Show design gallery layout
    simulatorPane.style.display = "none";
    designPane.style.display = "flex";
    designImg.src = project.coverImage;

    // Show Behance link instead of Github
    if (project.links && project.links.behance) {
      btnGithub.href = project.links.behance;
      btnGithub.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="margin-right: 6px; vertical-align: middle;">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM8.22 8.44c1.19 0 1.9.64 1.9 1.63 0 .78-.45 1.34-1.16 1.48v.06c.86.11 1.43.7 1.43 1.63 0 1.16-.86 1.83-2.14 1.83H4.85V8.44h3.37zm-.26 2.58c.64 0 .96-.28.96-.72s-.32-.69-.96-.69H6.18v1.41h1.78zm.13 2.76c.68 0 1.05-.31 1.05-.78s-.37-.77-1.05-.77H6.18v1.55h1.91zm7.4-4.22c1.78 0 2.73 1.15 2.73 2.87h-4.32c.07.96.67 1.49 1.68 1.49.69 0 1.18-.28 1.42-.71h1.16c-.34.93-1.28 1.54-2.58 1.54-2.02 0-3.04-1.25-3.04-3.08 0-1.84 1.07-3.11 2.95-3.11zm1.5 2.06c-.05-.88-.53-1.31-1.39-1.31-.8 0-1.31.43-1.42 1.31h2.81zm-2.85-2.92h3v.55h-3v-.55z"/>
        </svg>
        View on Behance
      `;
      btnGithub.style.display = "inline-flex";
    } else {
      btnGithub.style.display = "none";
    }
  } else if (project.type === "case-study") {
    // Case Study: no phone simulator — show rich case study overlay inside details pane
    if (modalCard) {
      modalCard.classList.remove("design-mode");
      modalCard.classList.add("case-study-mode");
    }
    simulatorPane.style.display = "none";
    designPane.style.display = "none";
    designImg.src = "";
    iframe.src = "";

    // Populate the standard fields (IDs still exist after restore above)
    document.getElementById("modal-project-title").textContent = project.name;
    document.getElementById("modal-project-tagline").textContent = project.tagline;
    document.getElementById("modal-project-description").textContent = project.description;
    const tagsBoxCs = document.getElementById("modal-project-tags");
    if (tagsBoxCs) tagsBoxCs.innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join("");
    const featuresListCs = document.getElementById("modal-project-features");
    if (featuresListCs) featuresListCs.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");

    // Build and inject case study extended content as an overlay div (does NOT overwrite pane HTML)
    const cs = project.caseStudy || {};

    // Overview box (AI badge)
    const overviewHTML = cs.overview
      ? `<div class="cs-overview-box"><span class="cs-ai-badge">🤖 AI-Built Project</span><p>${cs.overview}</p></div>`
      : "";

    // Metrics
    const metricsHTML = (cs.metrics || []).map(m =>
      `<div class="cs-metric"><span class="cs-metric-num">${m.num}</span><span class="cs-metric-label">${m.label}</span></div>`
    ).join("");

    // Tech stack (3 groups)
    const techGroups = [
      { heading: "⚙️ Core Architecture", items: (cs.techStack && cs.techStack.core) || [] },
      { heading: "🗄️ Backend & Data",    items: (cs.techStack && cs.techStack.backend) || [] },
      { heading: "🤖 AI Development",    items: (cs.techStack && cs.techStack.ai) || [] }
    ];
    const techHTML = techGroups.filter(g => g.items.length).map(g =>
      `<div class="cs-tech-group"><div class="cs-tech-group-heading">${g.heading}</div>` +
      g.items.map(t =>
        `<div class="cs-tech-row"><span class="cs-tech-icon">${t.icon}</span><span class="cs-tech-label">${t.label}</span><span class="cs-tech-value">${t.value}</span></div>`
      ).join("") + `</div>`
    ).join("");

    // Feature deep-dive sections
    const featuresHTML = (cs.featureSections || []).map(sec =>
      `<div class="cs-feature-section">` +
      `<div class="cs-feature-section-header"><span class="cs-feature-emoji">${sec.emoji}</span>` +
      `<div><div class="cs-feature-title">${sec.title}</div><div class="cs-feature-subtitle">${sec.subtitle}</div></div></div>` +
      `<ul class="cs-feature-items">` +
      sec.items.map(function(item) {
        var colonIdx = item.indexOf(":");
        return `<li><strong>${item.substring(0, colonIdx)}</strong>${item.substring(colonIdx)}</li>`;
      }).join("") +
      `</ul></div>`
    ).join("");

    // Development process sections
    const sectionsHTML = (cs.sections || []).map(s =>
      `<div class="cs-section"><h4 class="cs-section-heading">${s.title}</h4><p>${s.content}</p></div>`
    ).join("");

    // Design solutions
    const solutionsHTML = (cs.solutions || []).map(s =>
      `<div class="cs-solution-card"><span class="cs-solution-icon">${s.icon}</span><div><strong>${s.title}</strong><p>${s.desc}</p></div></div>`
    ).join("");

    // Lessons learned
    const lessonsHTML = (cs.lessons || []).map(function(l) {
      var colonIdx = l.indexOf(":");
      return `<li><strong>${l.substring(0, colonIdx)}</strong>${l.substring(colonIdx)}</li>`;
    }).join("");

    // Roadmap
    const roadmapHTML = (cs.roadmap || []).map(function(r) {
      var colonIdx = r.indexOf(":");
      return `<li><strong>${r.substring(0, colonIdx)}</strong>${r.substring(colonIdx)}</li>`;
    }).join("");

    // Remove any previous overlay before injecting
    const existingOverlay = detailsPaneEl.querySelector("#cs-overlay");
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "cs-overlay";
    overlay.style.cssText = "margin-top: 20px; display: flex; flex-direction: column; gap: 16px;";
    overlay.innerHTML =
      overviewHTML +
      (metricsHTML ? `<div class="cs-metrics-row">${metricsHTML}</div>` : "") +
      (techHTML ? `<div class="cs-section-title">🛠️ Technologies Used</div><div class="cs-tech-stack">${techHTML}</div>` : "") +
      (featuresHTML ? `<div class="cs-section-title">✨ Feature Deep Dive</div><div class="cs-features-list">${featuresHTML}</div>` : "") +
      (sectionsHTML ? `<div class="cs-section-title">🧠 Development Process</div><div class="cs-sections-list">${sectionsHTML}</div>` : "") +
      (solutionsHTML ? `<div class="cs-section-title">🎯 Design Solutions</div><div class="cs-solutions-grid">${solutionsHTML}</div>` : "") +
      (lessonsHTML ? `<div class="cs-section-title">📚 Lessons Learned</div><ul class="cs-lessons-list">${lessonsHTML}</ul>` : "") +
      (roadmapHTML ? `<div class="cs-section-title">🚀 Roadmap & Future</div><ul class="cs-roadmap-list">${roadmapHTML}</ul>` : "");

    detailsPaneEl.appendChild(overlay);

    // Show github link in the standard btn-github
    const btnGithubCs = document.getElementById("btn-github");
    if (btnGithubCs) {
      if (project.links && project.links.github) {
        btnGithubCs.href = project.links.github;
        btnGithubCs.style.display = "inline-flex";
      } else {
        btnGithubCs.style.display = "none";
      }
    }
  } else {
    if (modalCard) {
      modalCard.classList.remove("design-mode");
      modalCard.classList.remove("case-study-mode");
    }
    // Show normal app simulator layout
    simulatorPane.style.display = "flex";
    designPane.style.display = "none";
    designImg.src = "";

    // Show Github repository link
    if (project.links && project.links.github) {
      btnGithub.href = project.links.github;
      btnGithub.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2"
          fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
        View Repository
      `;
      btnGithub.style.display = "inline-flex";
    } else {
      btnGithub.style.display = "none";
    }

    // 5. Begin loading Iframe (only for apps)
    fallback.style.display = "flex";
    fallback.innerHTML = `
      <h3>Connecting Web Build...</h3>
      <p>Launching dynamic browser instance for ${project.name}.</p>
    `;

    iframe.classList.remove("loaded");

    // Add a slight delay before source assignment to let slide transition animate cleanly
    setTimeout(() => {
      iframe.src = project.embedUrl + "?t=" + Date.now();

      // Set a handler for iframe load
      iframe.onload = () => {
        fallback.style.display = "none";
        iframe.classList.add("loaded");
      };

      // Handle error / timeout cases (e.g. if web build isn't exported yet)
      setTimeout(() => {
        if (!iframe.classList.contains("loaded") && iframe.src !== "") {
          fallback.innerHTML = `
            <h3 style="color: #f87171;">Local Build Not Exported</h3>
            <p style="margin: 8px 0 12px; font-size: 0.85rem;">To test the app locally, run the export script:</p>
            <code style="background: #27272a; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.05); color: #ffa800;">npm run export:portfolio</code>
          `;
        }
      }, 4500); // 4.5 seconds fallback check
    }, 200);
  }

  // 6. Activate Modal Overlay
  modal.classList.add("active");
}

/**
 * Close modal and purge iframe session to save resources
 */
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalCard = modal ? modal.querySelector(".modal-card") : null;
  const iframe = document.getElementById("project-iframe");

  if (!modal || !iframe) return;

  modal.classList.remove("active");
  if (modalCard) {
    modalCard.classList.remove("design-mode");
    modalCard.classList.remove("case-study-mode");
  }

  // Restore simulator pane display default
  const simulatorPane = document.getElementById("modal-simulator-pane");
  if (simulatorPane) simulatorPane.style.display = "";

  // Restore details-pane to original HTML so all IDs are always available on next open
  const detailsPaneEl = modal.querySelector(".details-pane");
  if (detailsPaneEl && _detailsPaneOriginalHTML !== null) {
    detailsPaneEl.innerHTML = _detailsPaneOriginalHTML;
  }

  // Clean iframe source to stop any running web apps in the background
  iframe.src = "";
  iframe.classList.remove("loaded");
}

/**
 * Initializes workflow tabs interaction in the Services I Offer subtab
 */
function initWorkflowTabs() {
  const tabs = document.querySelectorAll(".workflow-tab-btn");
  const panes = document.querySelectorAll(".workflow-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-workflow");

      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPane = document.getElementById(`wf-${target}`);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

/**
 * Dynamic 3D tilting effect following cursor movements for the skills radar chart
 */
function initRadarChartTilt() {
  const container = document.querySelector(".skills-chart-box");
  const wrapper = document.querySelector(".radar-chart-wrapper");
  if (!container || !wrapper) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degree (up to 20 degrees tilt)
    const rotateX = ((centerY - y) / centerY) * 22;
    const rotateY = ((x - centerX) / centerX) * -22;

    wrapper.style.transition = "none"; // real-time responsive tracking
    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener("mouseleave", () => {
    // Smooth return to default state
    wrapper.style.transition = "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
    wrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

/**
 * Interactive Radar Chart dynamic datasets for tools and usage sub-skills
 */
const radarChartData = {
  default: {
    labels: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe InDesign", "Blender 3D"],
    proficiency: [10, 8, 6, 6, 4],
    expertise: [10, 10, 8, 7, 6]
  },
  illustrator: {
    labels: ["Vector Illustration", "Logo Design", "Branding Kits", "Typography", "Infographics"],
    proficiency: [10, 10, 9, 8, 9],
    expertise: [10, 10, 10, 9, 10]
  },
  photoshop: {
    labels: ["Photo Editing", "Photo Manipulation", "Compositing", "UI Mockups", "Color Correction"],
    proficiency: [9, 8, 8, 7, 9],
    expertise: [10, 10, 9, 8, 10]
  },
  figma: {
    labels: ["UI/UX Design", "Component Library", "Auto Layout", "Prototyping", "Design System"],
    proficiency: [9, 9, 10, 8, 9],
    expertise: [10, 10, 10, 9, 10]
  },
  framer: {
    labels: ["Web Design", "Interactive Component", "Page Animations", "SEO & Publish", "CMS Modeling"],
    proficiency: [8, 7, 8, 7, 7],
    expertise: [9, 8, 9, 8, 8]
  },
  aftereffects: {
    labels: ["Motion Graphics", "Logo Animation", "Character Rigging", "VFX Effects", "Transitions"],
    proficiency: [7, 8, 5, 6, 7],
    expertise: [9, 8, 7, 8, 8]
  },
  indesign: {
    labels: ["Page Layout", "Editorial Org", "Print Typography", "Pre-press QC", "Interactive PDF"],
    proficiency: [8, 7, 6, 6, 7],
    expertise: [8, 7, 8, 7, 8]
  },
  blender: {
    labels: ["3D Modeling", "Texturing & UV", "Lighting & Render", "3D Sculpting", "Animation"],
    proficiency: [5, 4, 5, 3, 4],
    expertise: [7, 6, 7, 5, 6]
  },
  canva: {
    labels: ["Social Media Graphics", "Presentation Deck", "Print Collaterals", "Video Templates", "Fast Prototyping"],
    proficiency: [9, 8, 8, 7, 9],
    expertise: [9, 9, 8, 8, 9]
  },
  projectneo: {
    labels: ["3D Vector Shapes", "Camera Angles", "Isometric Grids", "Material Shading", "Export formats"],
    proficiency: [6, 5, 7, 5, 6],
    expertise: [8, 7, 8, 6, 7]
  },
  notion: {
    labels: ["Task Management", "Wiki Docs", "Database Relations", "Workspace Setup", "Custom Templates"],
    proficiency: [9, 10, 8, 9, 9],
    expertise: [10, 10, 9, 10, 9]
  },
  antigravity: {
    labels: ["Agentic Pair Coding", "Workspace Context", "CLI Commands", "Refactoring", "Auto Verification"],
    proficiency: [9, 9, 8, 8, 9],
    expertise: [10, 9, 9, 9, 9]
  },
  claude: {
    labels: ["Creative Writing", "Code Generation", "XML Tags parsing", "Artifact Design", "Prompt Engineering"],
    proficiency: [9, 9, 10, 9, 10],
    expertise: [10, 10, 10, 9, 10]
  },
  gemini: {
    labels: ["Multimodal Search", "Reasoning Tasks", "Code Refactoring", "Context Windowing", "API Integrations"],
    proficiency: [9, 8, 9, 8, 9],
    expertise: [10, 9, 10, 9, 9]
  }
};

function initRadarChartInteractive() {
  const triggers = document.querySelectorAll(".tool-trigger");
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    const toolKey = trigger.getAttribute("data-tool");
    if (!radarChartData[toolKey]) return;

    // Hover Entry
    trigger.addEventListener("mouseenter", () => {
      triggers.forEach(t => t.classList.remove("highlighted-trigger"));
      trigger.classList.add("highlighted-trigger");
      updateRadarChart(radarChartData[toolKey]);
    });

    // Hover Leave
    trigger.addEventListener("mouseleave", () => {
      trigger.classList.remove("highlighted-trigger");
      setTimeout(() => {
        const hovered = document.querySelector(".tool-trigger:hover");
        if (!hovered) {
          updateRadarChart(radarChartData.default);
        }
      }, 50);
    });

    // Click trigger for touch screens or sticky view
    trigger.addEventListener("click", () => {
      triggers.forEach(t => t.classList.remove("highlighted-trigger"));
      trigger.classList.add("highlighted-trigger");
      updateRadarChart(radarChartData[toolKey]);
    });
  });
}

const radarCenter = { x: 260, y: 200 };
const radarMaxRadius = 150; // Level 10

function calculateRadarCoords(level, index) {
  const r = (level / 10) * radarMaxRadius;
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / 5;
  const x = radarCenter.x + r * Math.cos(angle);
  const y = radarCenter.y + r * Math.sin(angle);
  return { x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) };
}

function updateRadarChart(dataset) {
  const aimPoints = [];
  const currentPoints = [];

  const aimArea = document.querySelector(".chart-area-aim");
  const currentArea = document.querySelector(".chart-area-current");
  const labelsText = document.querySelectorAll(".chart-axis-label");

  const aimCircles = document.querySelectorAll(".chart-point-aim");
  const currentCircles = document.querySelectorAll(".chart-point-current");

  for (let i = 0; i < 5; i++) {
    const label = dataset.labels[i];
    const profLevel = dataset.proficiency[i];
    const expLevel = dataset.expertise[i];

    // Update labels
    if (labelsText[i]) {
      labelsText[i].textContent = label;
    }

    // Calculate coordinates
    const pCoord = calculateRadarCoords(profLevel, i);
    const eCoord = calculateRadarCoords(expLevel, i);

    currentPoints.push(`${pCoord.x},${pCoord.y}`);
    aimPoints.push(`${eCoord.x},${eCoord.y}`);

    // Update markers and tooltips
    if (currentCircles[i]) {
      currentCircles[i].setAttribute("cx", pCoord.x);
      currentCircles[i].setAttribute("cy", pCoord.y);
      const title = currentCircles[i].querySelector("title");
      if (title) title.textContent = `${label} - Proficiency: Level ${profLevel}/10`;
    }

    if (aimCircles[i]) {
      aimCircles[i].setAttribute("cx", eCoord.x);
      aimCircles[i].setAttribute("cy", eCoord.y);
      const title = aimCircles[i].querySelector("title");
      if (title) title.textContent = `${label} - Level of Expertise: Level ${expLevel}/10`;
    }
  }

  // Update polygon points
  if (currentArea) {
    currentArea.setAttribute("points", currentPoints.join(" "));
  }
  if (aimArea) {
    aimArea.setAttribute("points", aimPoints.join(" "));
  }
}

/**
 * Handles toggling between light and dark visual themes
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const sunIcon = toggleBtn.querySelector(".sun-icon");
  const moonIcon = toggleBtn.querySelector(".moon-icon");

  // Load theme preference
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    document.body.classList.remove("light-theme");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }

  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    if (isLight) {
      localStorage.setItem("portfolio-theme", "light");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      localStorage.setItem("portfolio-theme", "dark");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  });
}

/**
 * Footer helper to navigate home subtabs
 */
function navigateSubtab(subtabId) {
  switchTab("home");
  setTimeout(() => {
    const item = document.querySelector(`.sec-nav-item[data-subtab="${subtabId}"]`);
    if (item) {
      item.click();
    } else {
      switchSubtab(subtabId);
    }
  }, 50);
}

/**
 * Footer helper to navigate project filters
 */
function navigateProjectFilter(filterId) {
  switchTab("projects");
  setTimeout(() => {
    const item = document.querySelector(`.sec-nav-item[data-filter="${filterId}"]`);
    if (item) {
      item.click();
    }
  }, 50);
}
