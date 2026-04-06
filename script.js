const spots = [
    { id: 1, title: "Ferrari SF90 Stradale (Black)", location: "Chennai Streets", imageUrls: ["assets/car1.jpg"], fallbackColor: "121212", tag: "HYPERCAR", specs: { hp: "986", engine: "V8 Hybrid", warp: "2.5s" }, description: "This stealthy black plug-in hybrid hypercar utilizes a twin-turbo V8 and three electric motors to unleash 986 horsepower." },
    { id: 2, title: "Ferrari F8 Tributo (Red)", location: "ECR", imageUrls: ["assets/car2.jpg"], fallbackColor: "ff90e8", tag: "SUPERCAR", specs: { hp: "710", engine: "V8 Twin-Turbo", warp: "2.9s" }, description: "Draped in classic Rosso Corsa, this beautiful Italian supercar bridges the gap between daily comfort and blistering track performance." },
    { id: 3, title: "Lamborghini Aventador SVJ (White/Red)", location: "Chennai Streets", imageUrls: ["assets/car3.jpg", "assets/car4.jpg", "assets/car13.jpg", "assets/car16.jpg", "assets/car19.jpg", "assets/car22.jpg", "assets/car24.jpg"], fallbackColor: "ffde59", tag: "HYPERCAR", audioUrl: "assets/Lamborghini Aventador SVJ.mp3", specs: { hp: "770", engine: "V12 N/A", warp: "2.8s" }, description: "This legendary white hypercar with bespoke red accents features a screaming 759-horsepower naturally aspirated V12." },
    { id: 4, title: "BMW M2 G87 (Light Blue)", location: "OMR", imageUrls: ["assets/car5.jpg"], fallbackColor: "23a094", tag: "M POWER", specs: { hp: "453", engine: "I6 Twin-Turbo", warp: "3.9s" }, description: "Packing a detuned 3.0-liter twin-turbo straight-six, this compact coupe delivers a pure, old-school rear-wheel-drive experience." },
    { id: 5, title: "BMW M4 Competition (Matte Black)", location: "Alwarpet", imageUrls: ["assets/car6.jpg", "assets/car7.jpg"], fallbackColor: "121212", tag: "M POWER", specs: { hp: "503", engine: "I6 Twin-Turbo", warp: "3.4s" }, description: "Propelled by a brutal 503-horsepower twin-turbo inline-six, this stealthy matte black coupe commands the road." },
    { id: 6, title: "BMW M4 Competition (Silver with Stripes)", location: "Chennai Streets", imageUrls: ["assets/car8.jpg", "assets/car9.jpg", "assets/car10.jpg"], fallbackColor: "ffde59", tag: "M POWER", specs: { hp: "503", engine: "I6 Twin-Turbo", warp: "3.4s" }, description: "Featuring the same powerful 503-horsepower inline-six, this German powerhouse effortlessly breaches supercar performance territory." },
    { id: 7, title: "Ferrari 458 Italia (Red)", location: "Chennai Streets", imageUrls: ["assets/car11.jpg"], fallbackColor: "ff90e8", tag: "SUPERCAR", audioUrl: "assets/Ferrari 458 Italia.mp3", specs: { hp: "562", engine: "V8 N/A", warp: "3.4s" }, description: "Housing Ferrari's final naturally aspirated 4.5-liter mid-engine V8, this masterpiece screams to 9,000 RPM with 562 horsepower." },
    { id: 8, title: "Lamborghini Huracán Tecnica (Red)", location: "ECR", imageUrls: ["assets/car12.jpg"], fallbackColor: "23a094", tag: "SUPERCAR", specs: { hp: "631", engine: "V10 N/A", warp: "3.2s" }, description: "Equipped with a glorious 5.2-liter naturally aspirated V10 pushing 631 horsepower exclusively to the rear wheels." },
    { id: 9, title: "Audi R8 (Black)", location: "Alwarpet", imageUrls: ["assets/car14.jpg"], fallbackColor: "121212", tag: "SUPERCAR", specs: { hp: "562", engine: "V10 N/A", warp: "3.5s" }, description: "This blacked-out, first-generation icon packs a legendary mid-mounted V8, completely redefining the everyday supercar market." },
    { id: 10, title: "Lamborghini Huracán Tecnica (Dark Blue)", location: "Chennai Streets", imageUrls: ["assets/car15.jpg"], fallbackColor: "23a094", tag: "SUPERCAR", description: "This dark metallic blue beauty features the celebrated 5.2-liter naturally aspirated V10 engine, delivering an unforgettable 631-horsepower exhaust note." },
    { id: 11, title: "Lamborghini Revuelto (Magenta)", location: "Cathedral Road", imageUrls: ["assets/car16.jpg", "assets/car28.jpg"], fallbackColor: "ff90e8", tag: "HYPERCAR", audioUrl: "assets/v12 sound.mp3", specs: { hp: "1001", engine: "V12 Hybrid", warp: "2.5s" }, description: "This hybrid spaceship unleashes a mind-bending 1,001 horsepower via a new naturally aspirated V12 and three electric motors." },
    { id: 12, title: "Ferrari 488 Pista (Light Blue)", location: "Chennai Streets", imageUrls: ["assets/car17.jpg"], fallbackColor: "23a094", tag: "TRACK EDITION", description: "This track-focused weapon utilizes a heavily upgraded twin-turbo V8 to produce an astonishing 710 horsepower." },
    { id: 13, title: "Lamborghini Murciélago (Yellow)", location: "ECR", imageUrls: ["assets/car18.jpg"], fallbackColor: "ffde59", tag: "VINTAGE HYPERCAR", audioUrl: "assets/v12 sound.mp3", description: "Hiding a legendary naturally aspirated V12, this incredibly wide, old-school beast cemented modern hypercar standards." },
    { id: 14, title: "Lamborghini Huracán Pre-Facelift (Blue)", location: "Chennai Streets", imageUrls: ["assets/car20.jpg"], fallbackColor: "23a094", tag: "SUPERCAR", description: "Propelled by a roaring 5.2-liter naturally aspirated V10 pushing over 600 horsepower, this exotic delivers unforgettable exhaust notes." },
    { id: 15, title: "BMW M340i xDrive (Matte Grey)", location: "OMR", imageUrls: ["assets/car21.jpg"], fallbackColor: "121212", tag: "M PERFORMANCE", description: "Powered by the legendary B58 3.0-liter turbocharged inline-six, delivering blistering performance to all four wheels." },
    { id: 16, title: "Ferrari California (Red)", location: "ECR", imageUrls: ["assets/car23.jpg"], fallbackColor: "ff90e8", tag: "GRAND TOURER", description: "Housing a brilliant 4.3-liter naturally aspirated V8, this front-engine grand tourer epitomizes open-top Italian elegance." },
    { id: 17, title: "Lamborghini Huracán EVO Spyder (Green)", location: "Chennai Streets", imageUrls: ["assets/car25.jpg"], fallbackColor: "23a094", tag: "SUPERCAR", description: "Propelled by a roaring 5.2-liter naturally aspirated V10, this drop-top Italian exotic provides pure, open-air auditory bliss." },
    { id: 18, title: "Ferrari 812 Superfast (Grey)", location: "Alwarpet", imageUrls: ["assets/car26.jpg"], fallbackColor: "ffde59", tag: "SUPERCAR", audioUrl: "assets/Ferrari 812 Superfast.mp3", description: "Hiding a monstrous 6.5-liter naturally aspirated V12, this grand tourer unleashes a terrifying 789 horsepower to the rear wheels." },
    { id: 19, title: "Lamborghini Aventador Ultimae (Matte Black)", location: "Chennai Streets", imageUrls: ["assets/car27.jpg", "assets/car30.jpeg"], fallbackColor: "121212", tag: "HYPERCAR", description: "The final, ultimate V12 Aventador utilizes a naturally aspirated engine generating a phenomenal 769 horsepower." },
    { id: 20, title: "GMC Hummer EV SUV", location: "Chennai Streets", imageUrls: ["assets/car29.jpeg"], fallbackColor: "23a094", tag: "EXOTIC TRUCK", description: "Powered by an immense electric setup, this massive American import pushes an insane 830 horsepower to all four wheels." },
    { id: 21, title: "Ford Mustang GT (Silver)", location: "ECR", imageUrls: ["assets/car31.jpeg"], fallbackColor: "ffde59", tag: "MUSCLE CAR", description: "Powered by a naturally aspirated 5.0-liter Coyote V8 pushing roughly 400 horsepower, these iconic muscle cars command respect." },
    { id: 22, title: "Nissan GT-R R35 (Red)", location: "OMR", imageUrls: ["assets/car32.jpeg"], fallbackColor: "ff90e8", tag: "JDM LEGEND", description: "Packing a legendary 3.8-liter twin-turbo V6, this red “Godzilla” consistently shatters local speed limits with flawless AWD grip." },
    { id: 23, title: "Ford Mustang GT (Dark Grey)", location: "Chennai Streets", imageUrls: ["assets/car33.jpeg"], fallbackColor: "121212", tag: "MUSCLE CAR", description: "These modern American legends are engineered for spirited weekend runs and raw, tail-happy driving dynamics." },
    { id: 24, title: "Porsche Taycan (Rose Gold)", location: "Chennai Streets", imageUrls: ["assets/car34.jpeg"], fallbackColor: "ffde59", tag: "ELECTRIC LUXURY", description: "Propelled by dual electric motors, this stunning EV redefines silent, blistering acceleration with immediate torque." },
    { id: 25, title: "Porsche 911 997 (Grey)", location: "Alwarpet", imageUrls: ["assets/car35.jpeg"], fallbackColor: "121212", tag: "SPORTS CAR", description: "Housing a classic naturally aspirated flat-six engine, this iconic grey silhouette delivers pure, unfiltered analog driving joy." },
    { id: 26, title: "Porsche Macan (Miami Blue)", location: "Chennai Streets", imageUrls: ["assets/car36.jpeg"], fallbackColor: "23a094", tag: "SPORTS SUV", description: "Powered by a punchy turbocharged engine, this vibrant SUV blends traditional sports car dynamics with everyday utility." },
    { id: 27, title: "Porsche 911 Turbo S 992 (Chalk Grey)", location: "ECR", imageUrls: ["assets/car37.jpeg"], fallbackColor: "ff90e8", tag: "SUPERCAR", description: "Hiding a brutal twin-turbo flat-six engine, this 640-horsepower weapon achieves mind-bending acceleration and all-wheel-drive grip." },
    { id: 28, title: "McLaren 720S (Black)", location: "Chennai Streets", imageUrls: ["assets/car38.jpeg", "assets/car40.jpeg"], fallbackColor: "121212", tag: "SUPERCAR", description: "Packing a terrifying 4.0-liter twin-turbo V8 producing 710 horsepower, this British supercar features alien-like aerodynamics." },
    { id: 29, title: "Lamborghini Aventador S (Black)", location: "ECR", imageUrls: ["assets/car39.jpeg"], fallbackColor: "ffde59", tag: "HYPERCAR", description: "Propelled by a screaming naturally aspirated V12 pushing 730 horsepower, this aggressive Italian bull features four-wheel steering." },
    { id: 30, title: "Mercedes-AMG CLE 53 (White)", location: "OMR", imageUrls: ["assets/car41.jpeg"], fallbackColor: "23a094", tag: "AMG", description: "Powered by a turbocharged inline-six hybrid delivering 443 horsepower, this sleek white coupe brings fresh AMG energy." },
    { id: 31, title: "Mercedes-AMG GT (Matte Grey)", location: "Chennai Streets", imageUrls: ["assets/car42.jpeg"], fallbackColor: "ff90e8", tag: "SUPERCAR", description: "Hiding a handcrafted 4.0-liter twin-turbo V8 producing 523 horsepower, this grand tourer features the aggressive Panamericana grille." },
    { id: 32, title: "MG MGB Roadster (Yellow)", location: "ECR", imageUrls: ["assets/car43.jpeg"], fallbackColor: "ffde59", tag: "VINTAGE", description: "Housing a classic 1.8-liter naturally aspirated inline-four, this vibrant yellow British roadster delivers pure, lightweight analog motoring." },
    { id: 33, title: "Mercedes-AMG G63 (Grey)", location: "Alwarpet", imageUrls: ["assets/car44.jpeg"], fallbackColor: "121212", tag: "EXOTIC SUV", description: "Propelled by a roaring 4.0-liter twin-turbo V8 churning out 577 horsepower, this boxy grey luxury tank commands ultimate street respect." },
    { id: 34, title: "Mercedes-Benz S-Class W126 (Blue)", location: "Chennai Streets", imageUrls: ["assets/car45.jpeg"], fallbackColor: "23a094", tag: "VINTAGE LUXURY", description: "Powered by a robust naturally aspirated V8 engine, this lowered dark blue classic flagship sedan epitomizes old-school luxury." },
    { id: 35, title: "Porsche 911 Targa G-Series (White)", location: "Chennai Streets", imageUrls: ["assets/car46.jpeg"], fallbackColor: "ff90e8", tag: "VINTAGE PORSCHE", description: "Packing a legendary air-cooled naturally aspirated flat-six engine, this pristine white classic Targa provides unmatched mechanical joy." },
    { id: 36, title: "Mazda MX-5 Miata NB (Gold)", location: "ECR", imageUrls: ["assets/car47.jpeg"], fallbackColor: "ffde59", tag: "JDM LEGEND", description: "Housing a rev-happy naturally aspirated inline-four, this golden drop-top delivers legendary, lightweight Japanese handling dynamics." },
    { id: 37, title: "Mercedes-Benz SL R129 (Red)", location: "Chennai Streets", imageUrls: ["assets/car48.jpeg"], fallbackColor: "121212", tag: "VINTAGE", description: "Propelled by a silky-smooth naturally aspirated V8 engine, this brilliant red convertible defines timeless grand touring elegance." },
    { id: 38, title: "Ford Mustang Mach 1 (Yellow)", location: "Chennai Streets", imageUrls: ["assets/car49.jpeg"], fallbackColor: "23a094", tag: "MUSCLE CAR", description: "Packing a massive naturally aspirated Cleveland V8 engine, this yellow 1970s icon rumbles with authentic American muscle power." },
    { id: 39, title: "Bentley Flying Spur (Black)", location: "Chennai Streets", imageUrls: ["assets/car50.jpeg"], fallbackColor: "ff90e8", tag: "ULTRA LUXURY", description: "Hiding a monstrous twin-turbo W12 engine producing 626 horsepower, this ultra-luxurious black land yacht wafts effortlessly through traffic." },
    { id: 40, title: "Toyota MR2 Spyder (Red)", location: "ECR", imageUrls: ["assets/car51.jpeg"], fallbackColor: "ffde59", tag: "JDM LEGEND", description: "Powered by a mid-mounted inline-four, this bright red, lightweight Japanese roadster delivers incredibly pure, analog handling." },
    { id: 41, title: "Bentley Continental GT (Grey)", location: "Chennai Streets", imageUrls: ["assets/car52.jpeg", "assets/car54.jpeg"], fallbackColor: "121212", tag: "ULTRA LUXURY", description: "Hiding a monstrous 6.0-liter twin-turbo W12 engine, these grey British grand tourers effortlessly blend supercar speed with opulent comfort." },
    { id: 42, title: "Bentley Bentayga (Black)", location: "Chennai Streets", imageUrls: ["assets/car53.jpeg"], fallbackColor: "23a094", tag: "LUXURY SUV", description: "Propelled by a roaring 4.0-liter twin-turbo V8, this blacked-out luxury SUV dominates the road with towering presence." },
    { id: 43, title: "Rolls-Royce Phantom VII (Grey)", location: "Alwarpet", imageUrls: ["assets/car55.jpeg"], fallbackColor: "ff90e8", tag: "ULTRA LUXURY", description: "Packing a whisper-quiet 6.75-liter naturally aspirated V12, this majestic grey flagship sedan delivers the ultimate magic-carpet ride." },
    { id: 44, title: "Rolls-Royce Spectre (Blue)", location: "Chennai Streets", imageUrls: ["assets/car56.jpeg"], fallbackColor: "ffde59", tag: "ELECTRIC LUXURY", description: "Powered by dual electric motors generating 577 horsepower, this ultra-luxurious electric coupe delivers completely silent, effortless acceleration." },
    { id: 45, title: "Rolls-Royce Ghost (Black)", location: "Alwarpet", imageUrls: ["assets/car57.jpeg"], fallbackColor: "121212", tag: "ULTRA LUXURY", description: "Hiding a silky twin-turbo V12 engine, this black luxury saloon perfectly balances driver engagement with legendary rear-seat comfort." },
    { id: 46, title: "Rolls-Royce Cullinan (Brown)", location: "Chennai Streets", imageUrls: ["assets/car58.jpeg"], fallbackColor: "23a094", tag: "LUXURY SUV", description: "Propelled by a massive 6.75-liter twin-turbo V12, this towering tan luxury SUV conquers all terrain in absolute silence." },
    { id: 47, title: "Sunbeam Alpine (Red)", location: "Chennai Streets", imageUrls: ["assets/car59.jpeg"], fallbackColor: "ff90e8", tag: "VINTAGE", description: "Housing a spirited classic inline-four engine, this bright red British roadster offers a gorgeous slice of vintage 1960s motoring." }
];

window.scrollSlider = function(spotId, direction) {
    const container = document.getElementById(`slider-${spotId}`);
    if (container) {
        const scrollAmount = container.clientWidth;
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
};

// Night Patrol Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        const isNight = body.classList.contains('night-mode');
        themeToggle.textContent = isNight ? '☀️' : '🌙';
        themeToggle.title = isNight ? 'Switch to Daylight' : 'Switch to Night Patrol';
        
        // Add a cool transition sound or effect here if needed
        console.log(`Madras Patrol: ${isNight ? 'NIGHT' : 'DAY'} MODE ACTIVATED`);
    });
}

// 3D Tilt Effect for Cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = -(y - centerY) / 10;
            const rotateY = (x - centerX) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        } else {
            card.style.transform = '';
        }
    });
});

window.updateArrows = function(spotId) {
    const container = document.getElementById(`slider-${spotId}`);
    const leftArrow = document.getElementById(`left-arrow-${spotId}`);
    const rightArrow = document.getElementById(`right-arrow-${spotId}`);
    if (container && leftArrow && rightArrow) {
        const isAtStart = container.scrollLeft <= 5; 
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
        
        leftArrow.style.display = isAtStart ? 'none' : 'flex';
        rightArrow.style.display = isAtEnd ? 'none' : 'flex';
    }
};

// Initialize Gallery dynamically
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    
    spots.forEach(spot => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let imagesHtml = '';
        if (spot.imageUrls && spot.imageUrls.length > 1) {
            imagesHtml = `
            <div class="image-slider-wrapper">
                <button class="nav-arrow left-arrow" id="left-arrow-${spot.id}" onclick="scrollSlider('${spot.id}', -1)" aria-label="Previous image" style="display: none;">←</button>
                <div class="card-slider" id="slider-${spot.id}" onscroll="updateArrows('${spot.id}')">`;
            
            spot.imageUrls.forEach(url => {
                imagesHtml += `<img src="${url}" alt="${spot.title}" class="slide-img" loading="lazy">`;
            });
            
            imagesHtml += `
                </div>
                <button class="nav-arrow right-arrow" id="right-arrow-${spot.id}" onclick="scrollSlider('${spot.id}', 1)" aria-label="Next image">→</button>
            </div>
            <div class="slider-hint">CLICK ARROWS OR SWIPE 📸 TO VIEW MORE</div>`;
        } else {
            const url = (spot.imageUrls && spot.imageUrls.length > 0) ? spot.imageUrls[0] : '';
            const fallbackText = spot.title.split(' ').join('+');
            const fallbackUrl = `https://placehold.co/800x600/${spot.fallbackColor}/121212?text=${fallbackText}&font=Montserrat`;
            
            imagesHtml = `<div class="card-img-wrapper">
                <img src="${url}" alt="${spot.title}" class="card-img single-img" onerror="this.src='${fallbackUrl}'" loading="lazy">
            </div>`;
        }
        
        let audioBtnHtml = '';
        if (spot.audioUrl) {
            audioBtnHtml = `<div class="rev-container-grid"><button class="btn-primary btn-rev" onclick="playExhaustAudio('${spot.title.replace(/'/g, "\\'")}', '${spot.audioUrl}')">🔊 REV EXHAUST</button></div>`;
        }

        let specsHtml = '';
        if (spot.specs) {
            specsHtml = `
            <div class="card-specs">
                <div class="spec-item"><span class="spec-label">HP</span><br>${spot.specs.hp}</div>
                <div class="spec-item"><span class="spec-label">HEART</span><br>${spot.specs.engine}</div>
                <div class="spec-item"><span class="spec-label">WARP</span><br>${spot.specs.warp}</div>
            </div>`;
        }

        card.innerHTML = `
            ${imagesHtml}
            <div class="card-content">
                <div>
                    <div class="card-header">
                        <h3>${spot.title}</h3>
                        <div class="card-tag">${spot.tag}</div>
                    </div>
                    ${specsHtml}
                    ${audioBtnHtml}
                    <p class="card-location">📍 ${spot.location}</p>
                    <p class="card-desc">${spot.description}</p>
                </div>
            </div>
        `;

        
        grid.appendChild(card);
    });
}

// Audio Playback Function
let currentAudio = null;
let currentSource = null;

window.playExhaustAudio = function(carName, audioPath) {
    if (currentAudio) {
        currentAudio.pause();
    }
    
    // Show Rev Counter Overlay
    const revCounter = document.getElementById('rev-counter');
    const needle = document.getElementById('gauge-needle');
    const carDisplay = document.getElementById('rev-car-name');
    
    if (revCounter && needle && carDisplay) {
        revCounter.classList.add('active');
        carDisplay.textContent = carName;
        
        // Trigger Fire Overlay
        const fire = document.getElementById('fire-overlay');
        if (fire) {
            fire.classList.add('ignite');
            setTimeout(() => fire.classList.remove('ignite'), 3000);
        }

        // Needle Animation (Vibrate and Rev)
        needle.style.transform = 'translateX(-50%) rotate(-120deg)';
        setTimeout(() => { needle.style.transform = 'translateX(-50%) rotate(60deg)'; }, 100);
        setTimeout(() => { needle.style.transform = 'translateX(-50%) rotate(10deg)'; }, 500);
        setTimeout(() => { needle.style.transform = 'translateX(-50%) rotate(80deg)'; }, 1000);
        setTimeout(() => { 
            needle.style.transform = 'translateX(-50%) rotate(-120deg)'; 
            revCounter.classList.remove('active');
        }, 3000);
    }

    const encodedPath = encodeURI(audioPath);

    if (currentSource === encodedPath && currentAudio) {
        currentAudio.currentTime = 0;
        currentAudio.play();
    } else {
        currentAudio = new Audio(encodedPath);
        currentSource = encodedPath;
        currentAudio.play().catch(error => {
            console.error("Audio playback failed.", error);
        });
    }
};

// Filter System Logic
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state styling
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            const cards = document.querySelectorAll('#gallery-grid .card');
            
            // Loop through all gallery items and show/hide based on tag
            cards.forEach(card => {
                const tagEl = card.querySelector('.card-tag');
                if (!tagEl) return;
                
                const cardTag = tagEl.textContent.trim();
                if (filterValue === 'all') {
                    card.style.display = 'flex'; // Use flex as it aligns with the card CSS
                } else {
                    if (cardTag === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Custom Cursor Logic
function initCursor() {
    const cursor = document.getElementById('cursor');
    // Disable custom cursor on touch devices for better UX
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
        if (cursor) cursor.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add interactivity hover to cursor
    const bindHover = () => {
        const interactables = document.querySelectorAll('a, button, .card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    };

    // run once initially and wait for dynamic elements
    bindHover();
    setTimeout(bindHover, 500);
}

// Elite Search & Scroll Features
function initEliteFeatures() {
    // Search Functionality
    const searchBar = document.getElementById('car-search');
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const location = card.querySelector('.card-location').textContent.toLowerCase();
            const tag = card.querySelector('.card-tag').textContent.toLowerCase();
            
            if (title.includes(term) || location.includes(term) || tag.includes(term)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + "%";
    });

    // Magnetic Buttons
    const magnets = document.querySelectorAll('.nav-links a, .btn-primary, .logo');
    magnets.forEach(m => {
        m.addEventListener('mousemove', (e) => {
            const rect = m.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            m.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        m.addEventListener('mouseleave', () => {
            m.style.transform = '';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initFilters();
    initCursor();
    initEliteFeatures();
    
    // Add form submission handler
    const spotForm = document.getElementById('spot-form');
    if (spotForm) {
        spotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const carModel = document.getElementById('car-model').value;
            const location = document.getElementById('location').value;
            const link = document.getElementById('link').value || 'No link attached';
            
            // Format the message
            const spotData = `🚨 MADRASPATROLZ SPOT SUBMISSION 🚨\n\n🚙 Car: ${carModel}\n📍 Location: ${location}\n🔗 Link: ${link}`;
            
            // Copy data to clipboard and redirect to Instagram DMs
            navigator.clipboard.writeText(spotData).then(() => {
                const btn = spotForm.querySelector('.btn-send');
                btn.textContent = 'COPIED! OPENING IG... 🏁';
                btn.style.backgroundColor = '#23a094';
                
                setTimeout(() => {
                    spotForm.reset();
                    btn.textContent = 'SEND TO PATROLZ';
                    btn.style.backgroundColor = 'var(--text-color)';
                    // Open Instagram Direct Message link
                    window.open('https://ig.me/m/madraspatrolz', '_blank', 'noopener,noreferrer');
                }, 1500);
            }).catch(err => {
                // Fallback if clipboard fails
                window.open('https://ig.me/m/madraspatrolz', '_blank', 'noopener,noreferrer');
            });
        });
    }
});
