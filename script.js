function showExp(num) {
  document.querySelectorAll(".content").forEach(el => el.style.display = "none");
  document.getElementById("exp" + num).style.display = "block";
}

// 🐳 EXP 1 — Docker Flow
function runDocker() {
  const out = document.getElementById("dockerOutput");
  out.innerHTML = "";

  const steps = [
    "Pull Node.js image",
    "Install dependencies",
    "Build React app",
    "Create Nginx image",
    "Copy build files to Nginx",
    "Container running on port 8080"
  ];

  steps.forEach((step, i) => {
    setTimeout(() => {
      out.innerHTML += `<div class="box">${step} ✅</div>`;
    }, i * 1000);
  });
}

// 🔁 EXP 2 — CI/CD Flow
function runCICD() {
  const out = document.getElementById("cicdOutput");
  out.innerHTML = "";

  const steps = [
    "Code pushed to GitHub",
    "GitHub Actions triggered",
    "Running tests",
    "Building Docker image",
    "Pushing image to registry",
    "Deployment notification sent"
  ];

  steps.forEach((step, i) => {
    setTimeout(() => {
      out.innerHTML += `<div class="box">${step} ✅</div>`;
    }, i * 1000);
  });
}

// ☁️ EXP 3 — AWS Flow
function runAWS() {
  const out = document.getElementById("awsOutput");
  out.innerHTML = "";

  const steps = [
    "Provision VPC using Terraform",
    "Launch EC2 instances",
    "Deploy Docker containers to ECS",
    "Configure Application Load Balancer",
    "Auto-scaling enabled (2-4 instances)",
    "Application live with high availability"
  ];

  steps.forEach((step, i) => {
    setTimeout(() => {
      out.innerHTML += `<div class="box">${step} ✅</div>`;
    }, i * 1200);
  });
}