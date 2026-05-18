// Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const scrollTop = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                scrollTop.classList.add('visible');
            } else {
                navbar.classList.remove('scrolled');
                scrollTop.classList.remove('visible');
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loading');
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('section, .project-card, .skill-category, .timeline-item').forEach(el => {
            observer.observe(el);
        });

        // Animate skill bars on scroll
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.querySelector('.skill-progress');
                    if (progress) {
                        const width = progress.style.width;
                        progress.style.width = '0';
                        setTimeout(() => {
                            progress.style.width = width;
                        }, 100);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-item').forEach(item => {
            skillObserver.observe(item);
        });

        // Add loading class to body when page loads
        window.addEventListener('load', () => {
            document.body.classList.add('loading');
        });

        // Chatbot functionality
        const chatBubble = document.getElementById('chatBubble');
        const chatWindow = document.getElementById('chatWindow');
        const chatClose = document.getElementById('chatClose');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        const chatMessages = document.getElementById('chatMessages');

        // Toggle chat window
        function toggleChat() {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                chatInput.focus();
            }
        }

        chatBubble.addEventListener('click', toggleChat);
        chatClose.addEventListener('click', toggleChat);

        // Quick replies
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply-btn')) {
                const reply = e.target.getAttribute('data-reply');
                sendMessage(reply);
            }
        });

        // Send message on Enter key
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && chatInput.value.trim()) {
                sendMessage(chatInput.value.trim());
            }
        });

        // Send message on button click
        chatSend.addEventListener('click', () => {
            if (chatInput.value.trim()) {
                sendMessage(chatInput.value.trim());
            }
        });

        // Add message to chat
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
            
            const avatar = document.createElement('div');
            avatar.className = 'message-avatar';
            avatar.textContent = isUser ? '👤' : '🤖';
            
            const contentWrapper = document.createElement('div');
            const content = document.createElement('div');
            content.className = 'message-content';
            content.textContent = text;
            
            contentWrapper.appendChild(content);
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(contentWrapper);
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Show typing indicator
        function showTyping() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typing-indicator';
            
            const avatar = document.createElement('div');
            avatar.className = 'message-avatar';
            avatar.textContent = '🤖';
            
            const indicator = document.createElement('div');
            indicator.className = 'typing-indicator';
            indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
            
            typingDiv.appendChild(avatar);
            typingDiv.appendChild(indicator);
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Remove typing indicator
        function hideTyping() {
            const typing = document.getElementById('typing-indicator');
            if (typing) typing.remove();
        }

        // Get bot response
        function getBotResponse(message) {
            const lowerMsg = message.toLowerCase();
            
            // Skills
            if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('programming')) {
                return "I'm proficient in Python, C/C++, HTML/CSS, JavaScript, and MySQL. I also work with Git/GitHub and Linux systems. Additionally, I have creative skills in videography, graphic design, and video editing!";
            }
            
            // Projects
            if (lowerMsg.includes('project')) {
                return "I've worked on several exciting projects including a Bank Management System in C, an E-Voting System using Django and SQLite3, Portfolio Website, Habit Tracker,Self healing database,Diabetese Health Checker,Stock Prize Predection. Each project helped me develop practical skills!";
            }
            
            // Bank Management System
            if (lowerMsg.includes('bank')) {
                return "The Bank Management System is a console-based application built in C language. It features account management, transaction processing, and secure data handling using file operations for persistent storage. It's a great example of practical C programming!";
            }
            
            // E-Voting System
            if (lowerMsg.includes('voting') || lowerMsg.includes('e-voting')) {
                return "The E-Voting System is a secure online voting platform built with Django and SQLite3. It includes user authentication, real-time vote counting, voter registration, and an admin dashboard with result visualization. Perfect blend of security and user experience!";
            }
            
            // Education
            if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('university') || lowerMsg.includes('college')) {
                return "I'm currently pursuing my Bachelor's in Engineering at Pathivara Centre For Advanced Studies (CGPA 3.44). I completed my +2 from Shree Devi Mavi and schooling from Little Angels' English School.";
            }
            
            // Hobbies
            if (lowerMsg.includes('hobby') || lowerMsg.includes('hobbies') || lowerMsg.includes('interest')) {
                return "Besides coding, I'm passionate about videography, graphic designing, video editing, and bodybuilding. I love creating visual content, staying fit, and maintaining a healthy lifestyle through strength training!";
            }
            
            // Contact
            if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
                return "You can reach out via email at udayd468@gmail.com, call at +977-9825967719, or visit my website at kumaruday.com.np. I'm always open to interesting opportunities and collaborations!";
            }
            
            // Experience
            if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
                return "I'm currently a student building my skills and experience. I've participated in ACES TECHFEST 7.0 Hackathon and have experience in technical report writing. I'm looking for internships and project opportunities!";
            }
            
            // Certifications
            if (lowerMsg.includes('certification') || lowerMsg.includes('certificate')) {
                return "I have certifications in Technical Report Writing and participated in ACES TECHFEST 7.0 Hackathon. I'm continuously learning and adding new certifications!";
            }
            
            // Location
            if (lowerMsg.includes('location') || lowerMsg.includes('where')) {
                return "I'm based in Birtamode, Nepal. I'm open to remote opportunities and collaborations from anywhere!";
            }
            
            // Generic greeting
            if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
                return "Hello! 👋 How can I help you learn more about Uday's portfolio today?";
            }
           
            // Default response
            return "That's an interesting question! Feel free to ask me about skills, projects, education, hobbies, or how to get in touch. You can also use the quick reply buttons for common questions!";
        }

        // Send message
        function sendMessage(text) {
            if (!text.trim()) return;
            
            // Add user message
            addMessage(text, true);
            chatInput.value = '';
            
            // Show typing indicator
            showTyping();
            
            // Simulate bot response delay
            setTimeout(() => {
                hideTyping();
                const response = getBotResponse(text);
                addMessage(response);
            }, 1000 + Math.random() * 1000);
        }
    


        // Three.js 3D Spiral Background
        const canvas = document.getElementById('bg-canvas');
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 40;
        camera.position.y = 15;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particles
        const particleCount = 2500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        // Universal/Galaxy colors
        const colorPrimary = new THREE.Color('#6366f1'); // Indigo
        const colorSecondary = new THREE.Color('#8b5cf6'); // Purple
        const colorAccent = new THREE.Color('#ec4899'); // Pink
        const colorWhite = new THREE.Color('#ffffff'); // Starlight
        const colorCyan = new THREE.Color('#06b6d4'); // Cyan

        for (let i = 0; i < particleCount; i++) {
            // Spiral math
            const angle = 0.15 * i;
            const radius = 0.3 * angle;
            
            // Randomize position slightly to create a messy spiral arm effect
            const randomFactor = Math.random();
            const armOffset = (Math.random() - 0.5) * (radius * 0.2);
            
            const x = (radius + armOffset) * Math.cos(angle) + (Math.random() - 0.5) * 2;
            const y = (Math.random() - 0.5) * 8 * (1 / (radius + 0.1)); // Thicker at center
            const z = (radius + armOffset) * Math.sin(angle) + (Math.random() - 0.5) * 2;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Mix colors
            const mixRatio = Math.random();
            let finalColor = colorWhite.clone();
            
            if (mixRatio < 0.15) finalColor = colorPrimary;
            else if (mixRatio < 0.3) finalColor = colorSecondary;
            else if (mixRatio < 0.45) finalColor = colorAccent;
            else if (mixRatio < 0.6) finalColor = colorCyan;
            
            colors[i * 3] = finalColor.r;
            colors[i * 3 + 1] = finalColor.g;
            colors[i * 3 + 2] = finalColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        });

        // Animation loop
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            particles.rotation.y -= 0.001; // Slow constant rotation backwards
            
            // Mouse parallax
            camera.position.x += (mouseX * 20 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 20 + 15 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            // Breathing effect
            particles.position.y = Math.sin(elapsedTime * 0.5) * 1.5;

            renderer.render(scene, camera);
        }

        animate();

        // Responsive handling
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

// Initialize Vanilla-Tilt for 3D card effects
window.addEventListener('load', () => {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card, .timeline-card, .skill-category, .profile-card, .contact-method"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });
    }
});
