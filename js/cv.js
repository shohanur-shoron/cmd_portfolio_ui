function generateCvHtml() {
    return `
        <div id="cv-output">
            <h1>MD. SHOHANUR RAHMAN</h1>
            <div class="contact-info-terminal">
                <span><a href="mailto:shorons38@gmail.com">shorons38@gmail.com</a> | <a href="https://www.linkedin.com/in/shohanur-rahman-4a935232a/" target="_blank">LinkedIn</a> | <a href="https://github.com/shohanur-shoron" target="_blank">GitHub</a></span>
            </div>

            <h2>Professional Summary</h2>
            <p>Backend Developer and Computer Science student with hands-on experience in Python, Django, and AI/ML. Proven ability to build and deploy intelligent applications, including a published PyPI library for NLP and a full-stack project utilizing LLMs. Eager to contribute to building scalable, data-driven systems in a dynamic development role.</p>

            <h2>Technical Skills</h2>
            <div class="skills-list-terminal">
                <p><strong>Backend:</strong> Python (Django, DRF), REST, JWT Auth, JavaFX</p>
                <p><strong>Frontend:</strong> JavaScript, HTML5, CSS3</p>
                <p><strong>DevOps & Tools:</strong> Git, GitHub, Linux</p>
                <p><strong>AI/ML:</strong> Scikit-Learn, Pandas, Numpy</p>
                <p><strong>Databases:</strong> SQLite, MySQL</p>
            </div>

            <h2>Professional Experience</h2>
            <div class="entry-terminal">
                <h3>Backend Developer - Eutropia IT Solution, Dhaka (Jan 2024 - July 2024)</h3>
                <ul>
                    <li>Created RESTful APIs to connect client websites with their data sources.</li>
                    <li>Added data dashboards to Django admin (blog views, popular content, etc.).</li>
                    <li>Built reports to track top-performing content and trends.</li>
                    <li>Ensured APIs delivered accurate, real-time data.</li>
                </ul>
            </div>

            <h2>Projects and Research</h2>
            <div class="entry-terminal">
                <h3>Project: BookVerse</h3>
                <ul>
                    <li>Advanced web app using AI for intelligent book discovery.</li>
                    <li>Key features include:
                        <ul>
                            <li>Personalized Book Recommendations</li>
                            <li>Interactive Interest Refinement with LLM Chatbot</li>
                            <li>AI Assistant with Function Calling for Account Management</li>
                            <li>Visual Book Search via Cover Image</li>
                            <li>Reading Status Tracker</li>
                            <li>Comment Sentiment Analysis</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="entry-terminal">
                <h3>Publication: Bangla Normalizer</h3>
                <ul>
                    <li>URL: <a href="https://pypi.org/project/bangla-normalizer/" target="_blank">https://pypi.org/project/bangla-normalizer/</a></li>
                    <li>Key features include:
                        <ul>
                            <li>A Python library (PyPI) standardizing diverse Bengali text into consistent forms, enhancing NLP preprocessing.</li>
                            <li>Installation: <code>pip install bangla-normalizer</code></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="entry-terminal">
                <h3>Research: High-Capacity DWDM Transmission System for FSO Network</h3>
                <ul>
                    <li>URL: <a href="https://ieeexplore.ieee.org/abstract/document/10815671" target="_blank">https://ieeexplore.ieee.org/abstract/document/10815671</a></li>
                    <li>Designed a 1.28 Tb/s FSO system using DWDM over 64 channels.</li>
                    <li>Analyzed beam divergence, BER, and eye diagrams for reliable high-speed networks.</li>
                </ul>
            </div>

            <h2>Education</h2>
            <div class="entry-terminal">
                <h3>B.Sc. in Computer Science & Engineering - University of Asia Pacific</h3>
                <p>Expected Graduation: Dec 2025 | Result: CGPA 3.58</p>
            </div>
            <div class="entry-terminal">
                <h3>HSC - Shahid Mamun Mahmud Police Line School & College</h3>
                <p>Year: 2020 | Result: CGPA 4.95</p>
            </div>
            <div class="entry-terminal">
                <h3>SSC - Chandai High School</h3>
                <p>Year: 2018 | Result: CGPA 4.78</p>
            </div>

            <h2>Additional Information</h2>
            <div class="entry-terminal">
                <h3>Languages</h3>
                <ul>
                    <li>Bengali (Native)</li>
                    <li>English (Professional)</li>
                </ul>
            </div>
            <div class="entry-terminal">
                <h3>Honors & Activities</h3>
                <ul>
                    <li>1st Runner-Up: Hackathon at RoboExpo (2025)</li>
                    <li>Dean's Award and VC Award</li>
                    <li>Participant: National Data Analytics Competition NDAC (2025)</li>
                    <li>Participant: National Hackathon in EWU (2024)</li>
                </ul>
            </div>
        </div>
    `;
}