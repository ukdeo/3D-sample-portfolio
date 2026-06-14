// ═══════════════════════════════════════════════════════
// PORTFOLIO DATABASE & CONTENTS
// ═══════════════════════════════════════════════════════

const projects = [
  {
    title: "Bank Management System",
    desc: "A console-based banking application built in C handling account creation, balance checks, withdrawals, and user record management utilizing file-handling databases.",
    icon: "🏦",
    tags: ["C Language", "File I/O", "Console DB"],
    link: "https://github.com/ukdeo/bank-management-system"
  },
  {
    title: "E-Voting System",
    desc: "A secure, responsive voting interface built with Django and SQLite. Features administrative panels, voter authorization lists, real-time result calculations, and encryption.",
    icon: "🗳️",
    tags: ["Django", "SQLite3", "Security"],
    link: "https://github.com/ukdeo/e-voting-system"
  },
  {
    title: "Care Connect (Hackathon)",
    desc: " Healthcare connection platform matching critical patients with local services. Developed in React and Node.js during a 48-hour hackathon sprint.",
    icon: "🏥",
    tags: ["React", "Node.js", "Winner"],
    link: "https://github.com/ukdeo/care-connect"
  },
  {
    title: "Diabetes Health Checker",
    desc: "Machine learning classifier analyzing patient metrics (glucose levels, blood pressure, insulin) to predict diabetes probability. Includes a responsive Streamlit dashboard.",
    icon: "⚕️",
    tags: ["Python", "Scikit-Learn", "Streamlit"],
    link: "https://github.com/ukdeo/diabetes-checker"
  },
  {
    title: "Stock Price Prediction",
    desc: "LSTM recurrent neural network modeling and forecasting stock price fluctuations based on historical Yahoo Finance datasets. Built using TensorFlow and Docker.",
    icon: "📈",
    tags: ["TensorFlow", "LSTM", "Docker"],
    link: "https://github.com/ukdeo/stock-prediction"
  },
  {
    title: "Self-Healing Database",
    desc: "A fault-tolerant document database wrapper that automatically detects node failures, triggers data replication protocols, and restores backups with zero system down-time.",
    icon: "💾",
    tags: ["Python", "MongoDB", "Distributed"],
    link: "https://github.com/ukdeo/self-healing-db"
  },
  {
    title: "Habit Tracker Dashboard",
    desc: "A clean dashboard tool displaying daily habits, streak achievements, and graphical frequency charts. Developed with vanilla JavaScript and HTML5 localStorage APIs.",
    icon: "🧠",
    tags: ["JavaScript", "HTML5", "UI/UX"],
    link: "https://github.com/ukdeo/habit-tracker"
  },
  {
    title: "Space Shooter Arcade",
    desc: "Retro horizontal scrolling space game rendering dynamic asteroid collisions, laser firing loops, high score saves, and custom level difficulties inside HTML5 Canvas.",
    icon: "🚀",
    tags: ["Canvas API", "Audio", "Game Loops"],
    link: "https://github.com/ukdeo/space-shooter"
  }
];

const skills = [
  // Languages
  { name: "Python", cat: "Languages", level: "Expert", desc: "Used for ML modeling, distributed backends, and scripting.", color: "#f59e0b", shadow: "rgba(245,158,11,0.5)" },
  { name: "JavaScript", cat: "Languages", level: "Expert", desc: "Builds responsive client-side UIs and interactive Canvas simulations.", color: "#38bdf8", shadow: "rgba(56,189,248,0.5)" },
  { name: "C++", cat: "Languages", level: "Proficient", desc: "Object-oriented structures, algorithmic solutions, and memory control.", color: "#10b981", shadow: "rgba(16,185,129,0.5)" },
  { name: "C", cat: "Languages", level: "Proficient", desc: "System architectures, file storage APIs, and compiler foundations.", color: "#ef4444", shadow: "rgba(239,68,68,0.5)" },

  // Frontend
  { name: "React", cat: "Frontend", level: "Expert", desc: "Single Page Apps, custom hooks, context stores, and styled design grids.", color: "#ec4899", shadow: "rgba(236,72,153,0.5)" },
  { name: "HTML5 / CSS3", cat: "Frontend", level: "Expert", desc: "Grid styling, custom variables, and responsive layout standards.", color: "#38bdf8", shadow: "rgba(56,189,248,0.5)" },
  { name: "Tailwind CSS", cat: "Frontend", level: "Proficient", desc: "Utility-first layouts, custom spacing scales, and dark-mode overrides.", color: "#a855f7", shadow: "rgba(168,85,247,0.5)" },

  // Tools & DBs
  { name: "Git & GitHub", cat: "Systems", level: "Expert", desc: "Version control branching, actions workflows, and source logs.", color: "#f59e0b", shadow: "rgba(245,158,11,0.5)" },
  { name: "Docker", cat: "Systems", level: "Proficient", desc: "Containerized environments, multi-stage building, and deployment.", color: "#38bdf8", shadow: "rgba(56,189,248,0.5)" },
  { name: "MongoDB", cat: "Systems", level: "Proficient", desc: "NoSQL collection patterns, indices optimizations, and cluster shards.", color: "#10b981", shadow: "rgba(16,185,129,0.5)" },
  { name: "SQL & Relational", cat: "Systems", level: "Proficient", desc: "Relational modeling, primary indices, and custom query procedures.", color: "#a855f7", shadow: "rgba(168,85,247,0.5)" },

  // Soft Skills
  { name: "Problem Solving", cat: "Soft Skills", level: "Expert", desc: "Algorithmic thinking, structural debugging, and code clean-ups.", color: "#f59e0b", shadow: "rgba(245,158,11,0.5)" },
  { name: "Leadership", cat: "Soft Skills", level: "Proficient", desc: "Coordinating hackathons, assigning tasks, and project management.", color: "#10b981", shadow: "rgba(16,185,129,0.5)" }
];

const education = [
  {
    id: "bachelor",
    degree: "Bachelor in Engineering",
    school: "Pathivara Centre For Advanced Studies",
    year: "2022 – PRESENT",
    score: "CGPA: 3.44",
    desc: "Pursuing computer/software engineering. Highly active in technical committees, coordinator of hackathon groups, and regular participant in programming events. Maintained a top tier academic rating of 3.44 CGPA."
  },
  {
    id: "plus2",
    degree: "+2 Science",
    school: "Shree Devi Mavi",
    year: "COMPLETED 2021",
    score: "CGPA: 3.07",
    desc: "Specialized in Physics, Chemistry, and Mathematics. Formed foundational logic in computing systems and participated in regional science challenges."
  },
  {
    id: "see",
    degree: "SEE",
    school: "Little Angels' English School",
    year: "COMPLETED 2019",
    score: "CGPA: 3.65",
    desc: "Secondary Education Examination with distinction. Awarded institutional honors for achievements in mathematics and computer sciences."
  }
];

const hobbies = {
  camera: { title: "Videography & Editing", desc: "Shooting cinematic footage, color grading, and editing high-quality digital videos using Premiere Pro and DaVinci Resolve." },
  easel: { title: "Graphic Design", desc: "Creating modern vector graphics, branding guidelines, layouts, and typography assets using Illustrator and Figma." },
  dumbbell: { title: "Bodybuilding", desc: "Dedicated weight training, muscular endurance workouts, and dietary discipline to foster mental focus and physical resilience." }
};


// ═══════════════════════════════════════════════════════
// STARRY SKY ENGINE
// ═══════════════════════════════════════════════════════

function initStarsCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let stars = [];
  const count = 100;

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    generate();
  }

  function generate() {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005
      });
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;

      ctx.beginPath();
      ctx.globalAlpha = Math.max(0.1, s.alpha);
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  resize();
  loop();
}


// ═══════════════════════════════════════════════════════
// GLOWING CUSTOM CURSOR
// ═══════════════════════════════════════════════════════

let cursorX = 0, cursorY = 0;
let targetX = 0, targetY = 0;
const cursor = document.getElementById("cur");

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function updateCursor() {
  cursorX += (targetX - cursorX) * 0.16;
  cursorY += (targetY - cursorY) * 0.16;
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
  requestAnimationFrame(updateCursor);
}
requestAnimationFrame(updateCursor);

function attachCursorHoverEvents(parent = document) {
  const interactables = parent.querySelectorAll("a, button, .dr, .fw-3d, .skill-card, .edu-card, .hobby-card, .ct-btn, .ct-back");
  interactables.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
  });
}
attachCursorHoverEvents();


// ═══════════════════════════════════════════════════════
// CAMERA 3D MOUSE PARALLAX TILT & FIRST-PERSON NAVIGATION
// ═══════════════════════════════════════════════════════

let mouseX = 0, mouseY = 0;
let tiltX = 0, tiltY = 0;

let targetYRotation = 0;
let currentYRotation = 0;
let hallwayZOffset = 0;
let targetZOffset = 0;
let currentRoomZOffset = 0;
let targetRoomZOffset = 0;
let currentRoomType = null;
let isTransitioning = false;
let currentZone = null; // Track zone to avoid re-rendering buttons every frame

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return; // Disable parallax on mobile
  mouseX = (e.clientX / window.innerWidth) - 0.5;
  mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function animateParallax() {
  if (window.innerWidth >= 768) {
    tiltY += (mouseX * 14 - tiltY) * 0.08;
    tiltX += (mouseY * -10 - tiltX) * 0.08;

    // Smoothly interpolate look-rotation and walking offset
    currentYRotation += (targetYRotation - currentYRotation) * 0.1;
    hallwayZOffset += (targetZOffset - hallwayZOffset) * 0.1;
    currentRoomZOffset += (targetRoomZOffset - currentRoomZOffset) * 0.1;

    const activeRoomBox = document.querySelector(".sc.on .room-3d");
    if (activeRoomBox) {
      if (activeRoomBox.id === "hallway-box") {
        if (!isTransitioning) {
          activeRoomBox.style.transform = `translate3d(0, 0, ${hallwayZOffset}px) rotateX(${tiltX}deg) rotateY(${tiltY + currentYRotation}deg)`;
        }
      } else if (activeRoomBox.id === "room-3d-box" || activeRoomBox.id === "contact-box") {
        if (currentRoomType === "projects") {
          activeRoomBox.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        } else {
          activeRoomBox.style.transform = `translate3d(0, 0, ${currentRoomZOffset}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
      } else {
        activeRoomBox.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    }
  }

  // Proximity Detection action prompt update
  const promptEl = document.getElementById("hall-action-prompt");
  if (promptEl) {
    if (hallScreen.classList.contains("on") && !isTransitioning) {
      let newZone = null;
      if (hallwayZOffset > 100 && hallwayZOffset < 280) newZone = "zone1";
      else if (hallwayZOffset > 420 && hallwayZOffset < 560) newZone = "zone2";
      else if (hallwayZOffset >= 560) newZone = "zone3";

      // Only re-render the HTML when the zone actually changes
      if (newZone !== currentZone) {
        currentZone = newZone;
        if (newZone === "zone1") {
          promptEl.innerHTML = `
            <div style="margin-bottom:6px;font-size:0.65rem;color:#94a3b8;text-transform:uppercase;font-family:'JetBrains Mono',monospace;">Proximity Action</div>
            <div style="color:#38bdf8;font-size:0.95rem;font-weight:800;margin-bottom:10px;font-family:'JetBrains Mono',monospace;">You are standing near:</div>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="prompt-btn" onclick="triggerRoomTransition('projects')">💼 PROJECTS</button>
              <button class="prompt-btn" onclick="triggerRoomTransition('education')">🎓 EDUCATION</button>
            </div>`;
          promptEl.classList.add("show");
        } else if (newZone === "zone2") {
          promptEl.innerHTML = `
            <div style="margin-bottom:6px;font-size:0.65rem;color:#94a3b8;text-transform:uppercase;font-family:'JetBrains Mono',monospace;">Proximity Action</div>
            <div style="color:#38bdf8;font-size:0.95rem;font-weight:800;margin-bottom:10px;font-family:'JetBrains Mono',monospace;">You are standing near:</div>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="prompt-btn" onclick="triggerRoomTransition('skills')">🎨 TECH SKILLS</button>
              <button class="prompt-btn" onclick="triggerRoomTransition('hobbies')">🎮 HOBBIES</button>
            </div>`;
          promptEl.classList.add("show");
        } else if (newZone === "zone3") {
          promptEl.innerHTML = `
            <div style="margin-bottom:6px;font-size:0.65rem;color:#94a3b8;text-transform:uppercase;font-family:'JetBrains Mono',monospace;">Proximity Action</div>
            <div style="color:#38bdf8;font-size:0.95rem;font-weight:800;margin-bottom:10px;font-family:'JetBrains Mono',monospace;">End of Corridor:</div>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="prompt-btn" onclick="triggerRoomTransition('contact')">🌌 CONTACT DETAILS</button>
            </div>`;
          promptEl.classList.add("show");
        } else {
          promptEl.classList.remove("show");
        }
      }
    } else {
      if (currentZone !== null) {
        currentZone = null;
        promptEl.classList.remove("show");
      }
    }
  }

  requestAnimationFrame(animateParallax);
}
requestAnimationFrame(animateParallax);


// ═══════════════════════════════════════════════════════
// PAGE TRANSITIONS & DOORS STATE CONTROLLER
// ═══════════════════════════════════════════════════════

const extScreen = document.getElementById("ext");
const hallScreen = document.getElementById("hall");
const roomScreen = document.getElementById("room");
const contactScreen = document.getElementById("contact-room");
const houseWrapper = document.getElementById("house-wrapper");
const frontDoor = document.getElementById("front-door");
const doorGlow = document.getElementById("door-glow-spill");
const hallwayBox = document.getElementById("hallway-box");
const roomBox = document.getElementById("room-3d-box");

// 1. Enter house from exterior door
frontDoor.addEventListener("click", () => {
  if (isTransitioning) return;
  isTransitioning = true;

  const doorLeaf = document.getElementById("door-leaf");
  doorLeaf.style.transformOrigin = "241px 294px";
  doorLeaf.style.transition = "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)";
  doorLeaf.style.transform = "rotateY(-95deg)";
  doorGlow.style.opacity = "0.9";
  doorGlow.style.transition = "opacity 0.6s";

  houseWrapper.style.transformOrigin = "270px 294px";
  houseWrapper.style.transition = "transform 2.2s cubic-bezier(0.5, 0, 0.25, 1)";
  houseWrapper.style.transform = "scale(8.5)";
  extScreen.style.transition = "opacity 1.8s ease-in";
  extScreen.style.opacity = "0";

  setTimeout(() => {
    extScreen.classList.remove("on");
    hallScreen.classList.add("on");
    hallScreen.style.opacity = "0";
    setTimeout(() => {
      hallScreen.style.opacity = "1";
      isTransitioning = false; // ✅ Allow hallway interaction
    }, 50);
  }, 1800);
});

// Global Room Transition Handler (Click/Proximity Action / Enter key triggered)
window.triggerRoomTransition = function (roomType) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Hide action prompt immediately
  const prompt = document.getElementById("hall-action-prompt");
  if (prompt) prompt.classList.remove("show");

  // Swing the door open
  const door = document.querySelector(`#hallway-box .dr[data-room="${roomType}"]`);
  if (door) {
    door.style.transformOrigin = "left center";
    door.style.transition = "transform 1.2s ease";
    door.style.transform = "rotateY(-105deg)";
  }

  // Animate first person walk-up on desktop
  if (window.innerWidth >= 768) {
    let zoomZ = 600;
    let zoomY = 0;
    if (roomType === "projects") { zoomZ = 180; zoomY = 65; }
    else if (roomType === "education") { zoomZ = 180; zoomY = -65; }
    else if (roomType === "skills") { zoomZ = 520; zoomY = 65; }
    else if (roomType === "hobbies") { zoomZ = 520; zoomY = -65; }

    targetZOffset = zoomZ;
    targetYRotation = zoomY;

    setTimeout(() => {
      hallwayBox.style.transition = "transform 1.2s cubic-bezier(0.25, 1, 0.4, 1)";
      hallwayBox.style.transform = `translate3d(0, 0, ${zoomZ + 120}px) rotateY(${zoomY}deg) scale(1.3)`;
    }, 50);
  }

  hallScreen.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => {
    hallScreen.style.opacity = "0";
  }, 300);

  setTimeout(() => {
    if (door) door.style.transform = "";
    hallwayBox.style.transition = "";
    hallwayBox.style.transform = "";

    hallScreen.classList.remove("on");
    hallScreen.style.opacity = "";

    if (roomType === "contact") {
      currentRoomType = "contact";
      targetRoomZOffset = 0;
      currentRoomZOffset = 0;
      contactScreen.classList.add("on");
      contactScreen.style.opacity = "0";
      setTimeout(() => {
        contactScreen.style.opacity = "1";
        isTransitioning = false; // ✅ Reset after contact screen loads
      }, 50);
    } else {
      loadRoom(roomType);
      isTransitioning = false; // ✅ Reset after room loads
    }
  }, 1400);
};

// 2. Door clicks in the 3D hallway
document.querySelectorAll("#hallway-box .dr").forEach(door => {
  door.addEventListener("click", (e) => {
    const roomType = door.getAttribute("data-room");
    triggerRoomTransition(roomType);
  });
});

// Keyboard controls for first-person walk-through
window.addEventListener("keydown", (e) => {
  if (!hallScreen.classList.contains("on") || isTransitioning) return;
  if (e.key === "Enter" || e.key === " ") {
    const activePromptBtn = document.querySelector("#hall-action-prompt.show .prompt-btn");
    if (activePromptBtn) {
      e.preventDefault();
      activePromptBtn.click();
    }
  }
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
    targetZOffset = Math.min(600, targetZOffset + 60);
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
    targetZOffset = Math.max(0, targetZOffset - 60);
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
    targetYRotation = -35;
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
    targetYRotation = 35;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A" ||
    e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
    targetYRotation = 0;
  }
});

// On-screen navigation control button bindings
document.getElementById("hall-btn-forward").addEventListener("click", () => {
  if (isTransitioning) return;
  targetZOffset = Math.min(600, targetZOffset + 85);
});
document.getElementById("hall-btn-backward").addEventListener("click", () => {
  if (isTransitioning) return;
  targetZOffset = Math.max(0, targetZOffset - 85);
});

const btnLeft = document.getElementById("hall-btn-left");
btnLeft.addEventListener("mousedown", () => { if (!isTransitioning) targetYRotation = -35; });
btnLeft.addEventListener("mouseup", () => { targetYRotation = 0; });
btnLeft.addEventListener("mouseleave", () => { targetYRotation = 0; });
btnLeft.addEventListener("touchstart", (e) => { e.preventDefault(); if (!isTransitioning) targetYRotation = -35; });
btnLeft.addEventListener("touchend", () => { targetYRotation = 0; });

const btnRight = document.getElementById("hall-btn-right");
btnRight.addEventListener("mousedown", () => { if (!isTransitioning) targetYRotation = 35; });
btnRight.addEventListener("mouseup", () => { targetYRotation = 0; });
btnRight.addEventListener("mouseleave", () => { targetYRotation = 0; });
btnRight.addEventListener("touchstart", (e) => { e.preventDefault(); if (!isTransitioning) targetYRotation = 35; });
btnRight.addEventListener("touchend", () => { targetYRotation = 0; });

document.getElementById("hall-btn-outside").addEventListener("click", () => {
  if (isTransitioning) return;
  goOutside();
});

function goOutside() {
  isTransitioning = true;
  hallScreen.style.transition = "opacity 0.8s ease-in-out";
  hallScreen.style.opacity = "0";

  setTimeout(() => {
    hallScreen.classList.remove("on");
    extScreen.classList.add("on");
    extScreen.style.opacity = "0";

    houseWrapper.style.transition = "transform 1.6s cubic-bezier(0.25, 1, 0.5, 1)";
    houseWrapper.style.transform = "scale(1)";

    const doorLeaf = document.getElementById("door-leaf");
    if (doorLeaf) {
      doorLeaf.style.transform = "rotateY(0deg)";
    }
    doorGlow.style.opacity = "0";

    setTimeout(() => {
      extScreen.style.opacity = "1";
      targetZOffset = 0;
      hallwayZOffset = 0;
      targetYRotation = 0;
      currentYRotation = 0;
      isTransitioning = false;
    }, 400);
  }, 800);
}

// 3. Return navigation hooks
document.getElementById("room-back-btn").addEventListener("click", () => {
  roomScreen.classList.remove("on");
  hallScreen.classList.add("on");
  hallScreen.style.opacity = "0";
  setTimeout(() => {
    hallScreen.style.opacity = "1";
    targetZOffset = 0;
    hallwayZOffset = 0;
    targetYRotation = 0;
    currentYRotation = 0;
    targetRoomZOffset = 0;
    currentRoomZOffset = 0;
    isTransitioning = false;
  }, 50);
});

document.getElementById("contact-back-btn").addEventListener("click", () => {
  contactScreen.classList.remove("on");
  hallScreen.classList.add("on");
  hallScreen.style.opacity = "0";
  setTimeout(() => {
    hallScreen.style.opacity = "1";
    targetZOffset = 0;
    hallwayZOffset = 0;
    targetYRotation = 0;
    currentYRotation = 0;
    targetRoomZOffset = 0;
    currentRoomZOffset = 0;
    isTransitioning = false;
  }, 50);
});

document.getElementById("contact-bar-back-btn").addEventListener("click", () => {
  contactScreen.classList.remove("on");
  hallScreen.classList.add("on");
  hallScreen.style.opacity = "0";
  setTimeout(() => {
    hallScreen.style.opacity = "1";
    targetZOffset = 0;
    hallwayZOffset = 0;
    targetYRotation = 0;
    currentYRotation = 0;
    targetRoomZOffset = 0;
    currentRoomZOffset = 0;
    isTransitioning = false;
  }, 50);
});


// ═══════════════════════════════════════════════════════
// ROOM 3D RENDER ENGINE (DYNAMIC DOM POPULATOR)
// ═══════════════════════════════════════════════════════

let projectsZOffset = 0;

function loadRoom(type) {
  roomScreen.classList.add("on");
  roomScreen.style.opacity = "0";
  setTimeout(() => roomScreen.style.opacity = "1", 50);

  currentRoomType = type;

  // Set title
  const titleMap = {
    "projects": "PROJECTS ROOM",
    "skills": "SKILLS PALETTE",
    "education": "EDUCATION STUDY",
    "hobbies": "HOBBIES ROOM"
  };
  document.getElementById("room-title").innerText = titleMap[type] || "ROOM";

  const hintMap = {
    "projects": "Scroll mouse wheel to walk down the bus topology line in 3D.",
    "skills": "Scroll to walk forward and hover on cards to review proficiencies.",
    "education": "Scroll to walk forward and click on any card to review academic history.",
    "hobbies": "Scroll to walk forward and click on hobbies to check details."
  };
  document.getElementById("room-hint").innerText = hintMap[type] || "Explore the room in 3D.";

  // Reset scroll state
  projectsZOffset = 0;
  targetRoomZOffset = 0;
  currentRoomZOffset = 0;
  roomBox.removeEventListener("wheel", handleProjectsScroll);
  roomBox.removeEventListener("wheel", handleRoomScroll);

  if (type === "projects") {
    roomBox.addEventListener("wheel", handleProjectsScroll, { passive: false });
  } else {
    roomBox.addEventListener("wheel", handleRoomScroll, { passive: false });
  }

  // Render structure
  if (type === "projects") {
    renderProjectsRoom();
  } else if (type === "skills") {
    renderSkillsRoom();
  } else if (type === "education") {
    renderEducationRoom();
  } else if (type === "hobbies") {
    renderHobbiesRoom();
  }

  attachCursorHoverEvents(roomBox);
}

function handleRoomScroll(e) {
  if (window.innerWidth < 768) return;
  e.preventDefault();

  targetRoomZOffset += e.deltaY * 0.72;
  const maxDepth = 750; // allow walking up to Z=750 (close to the back wall at Z=-900)
  targetRoomZOffset = Math.max(0, Math.min(maxDepth, targetRoomZOffset));
}

// Named scroll handler to avoid cloning node references
function handleProjectsScroll(e) {
  if (window.innerWidth < 768) return; // standard vertical scroll handles mobile
  e.preventDefault();

  // Zoom speed
  projectsZOffset += e.deltaY * 0.72;
  // Bound scroll from z = 0 (entrance) to z = max depth + 400
  const maxDepth = (projects.length * 220) + 200;
  projectsZOffset = Math.max(0, Math.min(maxDepth, projectsZOffset));

  const busScene = document.getElementById("bus-scene");
  if (busScene) {
    busScene.style.transform = `translateZ(${projectsZOffset}px)`;
  }
}

// ── PROJECTS: 3D BUS TOPOLOGY ──
function renderProjectsRoom() {
  let html = `
    <!-- FLOOR -->
    <div class="room-wall floor"></div>
    
    <!-- CEILING -->
    <div class="room-wall ceiling">
      <div class="ceiling-bus-wire"></div>
    </div>
    
    <!-- LEFT WALL (Blueprints Decor) -->
    <div class="room-wall left">
      <div class="server-rack" style="left: 140px; top: 18vh;"></div>
      <div class="server-rack" style="left: 540px; top: 18vh;"></div>
    </div>
    
    <!-- RIGHT WALL (Monitors Decor) -->
    <div class="room-wall right">
      <div class="server-rack" style="left: 140px; top: 18vh;"></div>
      <div class="server-rack" style="left: 540px; top: 18vh;"></div>
    </div>
    
    <!-- BACK WALL -->
    <div class="room-wall back">
      <div class="hallway-end-window"></div>
    </div>
    
    <!-- SCENE CONTAINER FOR BUS LINE & NODES -->
    <div class="bus-scene-3d" id="bus-scene">
  `;

  // Place frames at alternating X coordinates (left/right of center line) and staggered Z coordinates (depth)
  projects.forEach((proj, idx) => {
    const isLeft = idx % 2 === 0;
    const xCoord = isLeft ? "calc(50vw - 230px)" : "calc(50vw + 60px)";
    const yCoord = "15vh";
    const zDepth = -(idx * 220) - 150; // starts at z = -150px, steps back by 220px per item
    const stringHeight = 100 + (idx % 3) * 30; // alternating heights

    html += `
      <div class="fw-3d" style="left: ${xCoord}; top: ${yCoord}; transform: translateZ(${zDepth}px);" data-index="${idx}">
        <div class="string-3d" style="height: ${stringHeight}px;"></div>
        <div class="frame-3d">
          <div class="f-icon-3d">${proj.icon}</div>
          <div class="f-title-3d">${proj.title}</div>
          <div class="f-tags-3d">
            ${proj.tags.map(t => `<span class="ftag-3d">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  roomBox.innerHTML = html;

  // Set up mouse wheel scroll listener for Z translation walk-through directly on roomBox
  roomBox.addEventListener("wheel", handleProjectsScroll, { passive: false });

  // Hover & Click Bindings
  const floatingCard = document.getElementById("floating-card");
  roomBox.querySelectorAll(".fw-3d").forEach(node => {
    const idx = parseInt(node.getAttribute("data-index"));
    const proj = projects[idx];

    node.addEventListener("mouseenter", () => {
      floatingCard.querySelector(".float-title").innerText = proj.title;
      floatingCard.querySelector(".float-desc").innerText = proj.desc;
      floatingCard.querySelector(".float-hint").innerText = "Click to inspect code";
      floatingCard.classList.add("show");
    });

    node.addEventListener("mousemove", (e) => {
      floatingCard.style.left = `${e.clientX + 16}px`;
      floatingCard.style.top = `${e.clientY + 16}px`;
    });

    node.addEventListener("mouseleave", () => {
      floatingCard.classList.remove("show");
    });

    node.addEventListener("click", () => {
      openModal(proj);
    });
  });
}

// ── SKILLS: GROUPED CARD GRID ON BACK WALL ──
function renderSkillsRoom() {
  const categories = [...new Set(skills.map(s => s.cat))];

  const grouped = categories.map(cat => {
    const items = skills.filter(s => s.cat === cat);
    return `
      <div class="skill-cat-group">
        <div class="skill-cat-label">${cat}</div>
        <div class="skill-cat-items">
          ${items.map((s, _) => {
      const globalIdx = skills.indexOf(s);
      return `
              <div class="skill-card" 
                   style="--color:${s.color}; --shadow:${s.shadow};"
                   data-index="${globalIdx}">
                <div class="skill-card-name">${s.name}</div>
                <div class="skill-card-level">${s.level}</div>
              </div>`;
    }).join('')}
        </div>
      </div>`;
  }).join('');

  const html = `
    <!-- FLOOR -->
    <div class="room-wall floor"><div class="hall-carpet"></div></div>
    <!-- CEILING -->
    <div class="room-wall ceiling"><div class="ceiling-lights"></div></div>
    <!-- LEFT WALL -->
    <div class="room-wall left"></div>
    <!-- RIGHT WALL -->
    <div class="room-wall right"></div>
    <!-- BACK WALL -->
    <div class="room-wall back"></div>
    
    <!-- FLAT 2D OVERLAY for interactive content -->
    <div class="room-content-overlay">
      <div class="skills-back-title">🎨 TECH SKILLS</div>
      <div class="skills-back-subtitle">Hover to preview · Click for full details</div>
      <div class="skills-grid-wrap">
        ${grouped}
      </div>
    </div>
  `;

  roomBox.innerHTML = html;
  attachCursorHoverEvents(roomBox);

  const floatingCard = document.getElementById("floating-card");
  roomBox.querySelectorAll('.skill-card').forEach(card => {
    const idx = parseInt(card.getAttribute('data-index'));
    const s = skills[idx];
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
      floatingCard.querySelector(".float-title").innerText = s.name;
      floatingCard.querySelector(".float-desc").innerText = s.desc;
      floatingCard.querySelector(".float-hint").innerText = "Click for full details";
      floatingCard.classList.add("show");
    });
    card.addEventListener("mousemove", (e) => {
      floatingCard.style.left = `${e.clientX + 16}px`;
      floatingCard.style.top = `${e.clientY + 16}px`;
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
      floatingCard.classList.remove("show");
    });
    card.addEventListener('click', () => {
      openModal({
        icon: '🎨',
        title: s.name,
        desc: `${s.desc}\n\nCategory: ${s.cat}\nProficiency: ${s.level}\n\n📧 udayd468@gmail.com | 📞 +977-9825967719`,
        tags: ['Skill', s.cat, s.level],
        link: '#'
      });
    });
  });
}

// ── EDUCATION: CARD DISPLAY ON BACK WALL ──
function renderEducationRoom() {
  const html = `
    <div class="room-wall floor"><div class="hall-carpet"></div></div>
    <div class="room-wall ceiling"><div class="ceiling-lights"></div></div>
    <div class="room-wall left"></div>
    <div class="room-wall right"></div>
    <div class="room-wall back"></div>
    
    <!-- FLAT 2D OVERLAY for interactive content -->
    <div class="room-content-overlay">
      <div class="edu-back-title">🎓 EDUCATION</div>
      <div class="edu-back-subtitle">Hover to preview · Click for full details</div>
      <div class="edu-cards-wrap">
        ${education.map(edu => `
          <div class="edu-card" data-id="${edu.id}">
            <div class="edu-card-year">${edu.year}</div>
            <div class="edu-card-degree">${edu.degree}</div>
            <div class="edu-card-school">${edu.school}</div>
            <div class="edu-card-score">${edu.score}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  roomBox.innerHTML = html;
  attachCursorHoverEvents(roomBox);

  const floatingCard = document.getElementById("floating-card");
  roomBox.querySelectorAll('.edu-card').forEach(card => {
    const id = card.getAttribute('data-id');
    const edu = education.find(e => e.id === id);

    card.addEventListener('mouseenter', () => {
      if (edu) {
        floatingCard.querySelector(".float-title").innerText = edu.degree;
        floatingCard.querySelector(".float-desc").innerText = edu.school;
        floatingCard.querySelector(".float-hint").innerText = "Click for full details";
        floatingCard.classList.add("show");
      }
    });
    card.addEventListener("mousemove", (e) => {
      floatingCard.style.left = `${e.clientX + 16}px`;
      floatingCard.style.top = `${e.clientY + 16}px`;
    });
    card.addEventListener('mouseleave', () => {
      floatingCard.classList.remove("show");
    });

    card.addEventListener('click', () => {
      if (edu) {
        openModal({
          icon: '🎓',
          title: edu.degree,
          desc: `${edu.desc}\n\nInstitution: ${edu.school}\nYear: ${edu.year}\nScore: ${edu.score}\n\n📧 udayd468@gmail.com | 📞 +977-9825967719`,
          tags: ['Education', edu.year, edu.score],
          link: '#'
        });
      }
    });
  });
}

// ── HOBBIES: CARD DISPLAY ON BACK WALL ──
function renderHobbiesRoom() {
  const hobbyList = [
    { key: 'camera', icon: '📷', label: 'Videography & Editing' },
    { key: 'easel', icon: '🎨', label: 'Graphic Design' },
    { key: 'dumbbell', icon: '🏋️', label: 'Bodybuilding' }
  ];

  const html = `
    <div class="room-wall floor"><div class="hall-carpet"></div></div>
    <div class="room-wall ceiling"><div class="ceiling-lights"></div></div>
    <div class="room-wall left"></div>
    <div class="room-wall right"></div>
    <div class="room-wall back"></div>
    
    <!-- FLAT 2D OVERLAY for interactive content -->
    <div class="room-content-overlay">
      <div class="hobbies-back-title">🎮 HOBBIES</div>
      <div class="hobbies-back-subtitle">Hover to preview · Click for full details</div>
      <div class="hobbies-cards-wrap">
        ${hobbyList.map(h => `
          <div class="hobby-card" data-key="${h.key}">
            <div class="hobby-card-icon">${h.icon}</div>
            <div class="hobby-card-label">${h.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  roomBox.innerHTML = html;
  attachCursorHoverEvents(roomBox);

  const floatingCard = document.getElementById("floating-card");
  roomBox.querySelectorAll('.hobby-card').forEach(card => {
    const key = card.getAttribute('data-key');
    const data = hobbies[key];

    card.addEventListener('mouseenter', () => {
      if (data) {
        floatingCard.querySelector(".float-title").innerText = data.title;
        floatingCard.querySelector(".float-desc").innerText = data.desc;
        floatingCard.querySelector(".float-hint").innerText = "Click for full details";
        floatingCard.classList.add("show");
      }
    });
    card.addEventListener("mousemove", (e) => {
      floatingCard.style.left = `${e.clientX + 16}px`;
      floatingCard.style.top = `${e.clientY + 16}px`;
    });
    card.addEventListener('mouseleave', () => {
      floatingCard.classList.remove("show");
    });

    card.addEventListener('click', () => {
      if (data) {
        openModal({
          icon: card.querySelector('.hobby-card-icon').innerText,
          title: data.title,
          desc: `${data.desc}\n\n📧 udayd468@gmail.com | 📞 +977-9825967719`,
          tags: ['Hobby'],
          link: '#'
        });
      }
    });
  });
}




// ═══════════════════════════════════════════════════════
// DETAILS MODAL SYSTEM
// ═══════════════════════════════════════════════════════

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");
const mIcon = document.getElementById("modal-icon");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const mTags = document.getElementById("modal-tags");
const mLink = document.getElementById("modal-link");

function openModal(proj) {
  modal.classList.add("show");
  mIcon.innerText = proj.icon;
  mTitle.innerText = proj.title;
  mDesc.innerText = proj.desc;

  mTags.innerHTML = proj.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");

  if (proj.link && proj.link !== "#") {
    mLink.href = proj.link;
    mLink.innerText = "View Code Repository";
    mLink.style.background = "#38bdf8";
  } else {
    mLink.href = "mailto:udayd468@gmail.com";
    mLink.innerText = "Send Email";
    mLink.style.background = "#10b981"; // Green for contact
  }

  cursor.classList.remove("hovered");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});


// ═══════════════════════════════════════════════════════
// CHATBOT SYSTEM
// ═══════════════════════════════════════════════════════

const chatbotModal = document.getElementById("chatbot-modal");
const closeChatbot = document.getElementById("close-chatbot");
const neighborBtn = document.getElementById("neighbor-bot-btn");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatHistory = document.getElementById("chat-history");

if (neighborBtn) {
  neighborBtn.addEventListener("click", () => {
    chatbotModal.classList.add("show");
    cursor.classList.remove("hovered");
  });
}

closeChatbot.addEventListener("click", () => {
  chatbotModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === chatbotModal) {
    chatbotModal.classList.remove("show");
  }
});

function appendMessage(text, isUser) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-msg ${isUser ? "user-msg" : "bot-msg"}`;
  msgDiv.innerText = text;
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function processChatInput() {
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage(text, true);
  chatInput.value = "";

  // Basic keyword-based responses
  const lower = text.toLowerCase();
  let response = "I'm just a neighbor, so I don't know everything! But try asking about Uday's 'skills', 'projects', 'education', or 'hobbies'.";

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("tools")) {
    response = "Uday is an expert in Python, JavaScript, React, HTML/CSS, Git, and problem solving. He also knows C, C++, Docker, MongoDB, and SQL!";
  } else if (lower.includes("project")) {
    response = "He has built lots of cool stuff! A Bank Management System, an E-Voting System, a Diabetes Health Checker, a Stock Price Predictor, and more. You can check them out in the Projects room inside!";
  } else if (lower.includes("education") || lower.includes("study") || lower.includes("degree")) {
    response = "He is currently pursuing his Bachelor in Engineering at Pathivara Centre For Advanced Studies, and he has a fantastic CGPA of 3.44.";
  } else if (lower.includes("hobby") || lower.includes("hobbies") || lower.includes("fun")) {
    response = "When he's not coding, Uday loves Videography, Graphic Design, and Bodybuilding. He's very dedicated!";
  } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    response = "Hello there! Feel free to walk inside the house or ask me anything about Uday.";
  } else if (lower.includes("who are you") || lower.includes("name")) {
    response = "I'm just a friendly neighbor! Uday is the star here. He's a great software engineering student.";
  } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("email") || lower.includes("phone")) {
    response = "You can reach Uday at udayd468@gmail.com or call him at +977-9825967719. Go to the Backyard Exit (Contact room) for more details!";
  }

  setTimeout(() => {
    appendMessage(response, false);
  }, 400);
}

chatSend.addEventListener("click", processChatInput);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") processChatInput();
});

// ═══════════════════════════════════════════════════════
// APPLICATION INITIALIZATION
// ═══════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  initStarsCanvas("star-canvas");
  initStarsCanvas("balcony-star-canvas");

  // Add scroll handler for contact room
  const contactBox = document.getElementById("contact-box");
  if (contactBox) {
    contactBox.addEventListener("wheel", handleRoomScroll, { passive: false });
  }
});
