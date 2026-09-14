<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>PORTFOLIO.exe</title>

    <link rel="stylesheet" href="style.css">

</head>

<body class="homepage">


<!--BOOT SCREEN-->
    
<div class="boot-screen" id="bootScreen">

    <div class="boot-content">

        <div class="boot-logo">PORTFOLIO<span>.exe</span></div>

        <div class="boot-line"><span id="bootText"></span></div>

        <div class="boot-progress">
            <div class="boot-progress-bar" id="bootProgress"></div>
        </div>

        <div class="boot-status">
            <span>SYSTEM STATUS:</span>
            <span id="bootPercent">0%</span>
        </div>

    </div>

</div>


<!--CRT EFFECTS-->

<div class="scanlines"></div>
<div class="noise"></div>


<!--NAVIGATION--> 

<header class="navbar">

    <a href="index.php" class="logo">PORTFOLIO<span>.exe</span></a>

    <button class="menu-button" onclick="openMenu()">
        <span>MENU</span>
        <span class="menu-icon">☰</span>
    </button>

</header>


<!--MENU--> 

<div class="menu-overlay" id="menuOverlay">

    <button class="menu-close" onclick="closeMenu()">×</button>

    <div class="menu-inner">
        <div class="menu-system">
            SYSTEM MENU // ACCESS LEVEL 01
        </div>

        <a href="index.php"><span>01</span>HOME</a>
        <a href="about.php"><span>02</span>ABOUT</a>
        <a href="resume.php"><span>03</span>RESUME</a>
        <a href="projects.php"><span>04</span>PROJECTS</a>
        <a href="contact.php"><span>05</span>CONTACT</a>

    </div>

</div>


<!--DESKTOP--> 

<main class="desktop">

    <!--TOP SYSTEM BAR--> 
    <div class="system-bar">
        <div>SYSTEM // PORTFOLIO.exe</div>
        <div class="system-status"><span class="status-dot"></span>CONNECTION ACTIVE</div>
    </div>

    <!--FLOATING WINDOW: WARNING--> 
    <div class="floating-window warning-window">
        <div class="window-header">
            <span>WARNING.log</span>
            <span>×</span>
        </div>

        <div class="window-body">
            <span class="warning-symbol">!</span>
            <p>Unidentified user detected.</p>
            <small>This system was not designed for visitors.</small>
        </div>
    </div>

    <!--FLOATING WINDOW: FILE--> 
    <div class="floating-window file-window">
        <div class="window-header">
            <span>FILE_FOUND.tmp</span>
            <span>□</span>
        </div>

        <div class="window-body">
            <div class="file-icon">▧</div>
            
            <div>
                <strong>portfolio.exe</strong>
                <small>4.2 MB</small>
            </div>
        </div>
    </div>

    <!--MAIN COMPUTER WINDOW--> 
    <section class="main-window">
        <div class="window-header main-header">
            <div>
                <span class="window-dot"></span>
                <span class="window-dot"></span>
                <span class="window-dot"></span>
            </div>

            <span>PORTFOLIO.exe</span>
            <span>00:13</span>
        </div>

        <div class="main-window-content">
            <div class="system-label">CONNECTION ESTABLISHED</div>
            <h1 class="hero-title glitch-text" data-text="PORTFOLIO">PORTFOLIO</h1>
            <P class="hero-subtitle">MULTIMEDIA STUDENT // GAME PROGRAMMER</P>

            <div class="hero-divider"></div>

            <div class="terminal-message">
                <div>>USER DETECTED</div>
                <div>>PORTFOLIO DATABASE FOUND</div>
                <div>>ACCESSING PERSONAL FILES...</div>

                <div class="terminal-highlight">>WELCOME.</div>
            </div>

            <div class="hero-actions">
                <a href="about.php" class="system-button">OPEN PROFILE</a>
                <a href="projects.php" class="system-button primary">ACCESS PROJECTS</a>
            </div>

        </div>

    </section>

    <!--FILE GRID--> 
    <section class="desktop-files">

        <div class="section-heading">
            <span>/SYSTEM/FILES/</span>
            <span> 04 ITEMS</span>
        </div>

        <div class="file-grid">
            <a href="about.php" class="desktop-file">

                <div class="file-icon large">♙</div>

                <div>
                    <strong>USER_PROFILE.dat</strong>
                    <small>Personal information</small>
                </div>

            </a>

            <a href="resume.php" class="desktop-file">

                <div class="file-icon large">▤</div>

                <div>
                    <strong>RESUME.pdf</strong>
                    <small>Personnel record</small>
                </div>

            </a>

            <a href="projects.php" class="desktop-file">

                <div class="file-icon large">▦</div>

                <div>
                    <strong>PROJECTS/</strong>
                    <small>03 directories</small>
                </div>

            </a>

            <a href="contact.php" class="desktop-file">

                <div class="file-icon large">✉</div>

                <div>
                    <strong>CONTACT.exe</strong>
                    <small>Communication terminal</small>
                </div>

            </a>

        </div>

    </section>

    <!--SYSTEM PANEL--> 
    <section class="system-panel">

        <div class="system-panel-title">SYSTEM INFORMATION</div>

        <div class="system-info-grid">

            <div>
                <span>USER</span>
                <strong>PORTFOLIO</strong>
            </div>

            <div>
                <span>STATUS</span>
                <strong class="pink">ONLINE</strong>
            </div>

            <div>
                <span>FIELD</span>
                <strong>MULTIMEDIA</strong>
            </div>

            <div>
                <span>LOCATION</span>
                <strong>RAWANG</strong>
            </div>

        </div>

    </section>

    <!--BOTTOM BAR-->
    <div class="desktop-taskbar">

        <div>
            <span class="status-dot"></span>PORTFOLIO.exe</div>

        <div>SYSTEM READY</div>

        <div id="systemClock">00:00:00</div>

    </div>

</main>


<!--FLOATING RANDOM MESSAGES--> 

<div class="floating-error" id="floatingError">SYSTEM_UNSTABLE</div>

<div class="creepy-message" id="creepyMessage">ARE YOU STILL THERE?</div>

<script src="script.js"></script>

</body>

</html>

