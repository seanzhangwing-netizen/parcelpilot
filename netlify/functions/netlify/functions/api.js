<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ParcelPilot — Track Your Shipment</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-brand">
        <span class="nav-logo">✈️</span>
        <span class="nav-name">ParcelPilot</span>
      </div>
      <div class="nav-links">
        <a href="/" class="nav-link active">Track</a>
        <a href="/admin.html" class="nav-link">Admin</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Real-time Global Tracking
      </div>
      <h1 class="hero-title">
        Ship anywhere.<br>
        <span class="gradient-text">Track everything.</span>
      </h1>
      <p class="hero-subtitle">
        Enterprise-grade logistics tracking with live GPS, customs management, 
        and instant notifications.
      </p>
      
      <div class="track-search">
        <div class="search-box">
          <input type="text" id="trackingInput" class="search-input" placeholder="Enter tracking number (e.g., PP-A1B2C3D4)">
          <button class="search-btn" id="trackBtn">Track Package →</button>
        </div>
        <p class="search-hint">Enter your tracking number to see real-time updates</p>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🌍</div>
        <h3>Live GPS Tracking</h3>
        <p>Real-time package location with animated route visualization.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🛃</div>
        <h3>Customs Management</h3>
        <p>Automated customs clearance with duty calculations.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📬</div>
        <h3>Instant Alerts</h3>
        <p>Email notifications at every key milestone.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Secure Chain</h3>
        <p>End-to-end encrypted tracking data.</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span>✈️ ParcelPilot</span>
        <span class="footer-tag">Modern Logistics Platform</span>
      </div>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>

  <script>
    document.getElementById('trackBtn').addEventListener('click', () => {
      const code = document.getElementById('trackingInput').value.trim().toUpperCase();
      if (code) window.location.href = '/dashboard.html?tracking=' + code;
    });
    document.getElementById('trackingInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') document.getElementById('trackBtn').click();
    });
  </script>
</body>
</html>
