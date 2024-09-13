document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');
    const downloadLink = document.getElementById('downloadLink');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const aboutMe = document.getElementById('aboutMe').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value.split(',').map(function(skill) {
            return skill.trim();
        });
        const itSkills = document.getElementById('itSkills').value.split(',').map(function(skill) {
            return skill.trim();
        });
        const workExperience = document.getElementById('workExperience').value;
        const projects = document.getElementById('projects').value.split(',').map(function(project) {
            return project.trim();
        });

        const skillsList = skills.map(function(skill) {
            return '- ' + skill;
        }).join('\n');
        const itSkillsList = itSkills.map(function(skill) {
            return '- ' + skill;
        }).join('\n');
        const projectsList = projects.map(function(project) {
            return '- Project: ' + project;
        }).join('\n');

        const resumeText = `
Name: ${name}
Email: ${email}
Phone: ${phone}

About Me:
${aboutMe}

Education:
${education}

Skills:
${skillsList}

IT Skills:
${itSkillsList}

Work Experience:
${workExperience}

Projects:
${projectsList}
        `;

        const resumeHTML = `
            <header class="personal-info">
                <h1>${name}</h1>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Phone: <a href="tel:${phone}">${phone}</a></p>
            </header>
            <section class="about-me">
                <h2>About Me</h2>
                <p>${aboutMe}</p>
            </section>
            <section class="education">
                <h2>Education</h2>
                <p>${education}</p>
            </section>
            <section class="skills">
                <h2>Skills</h2>
                <ul>
                    ${skills.map(function(skill) {
                        return `<li>${skill}</li>`;
                    }).join('')}
                </ul>
            </section>
            <section class="it-skills">
                <h2>IT Skills</h2>
                <ul>
                    ${itSkills.map(function(skill) {
                        return `<li>${skill}</li>`;
                    }).join('')}
                </ul>
            </section>
            <section class="work-experience">
                <h2>Work Experience</h2>
                <p>${workExperience}</p>
            </section>
            <section class="projects">
                <h2>Projects</h2>
                <ul>
                    ${projects.map(function(project) {
                        return `<li><strong>Project:</strong> ${project}</li>`;
                    }).join('')}
                </ul>
            </section>
        `;

        resumeOutput.innerHTML = resumeHTML;

        const blob = new Blob([resumeText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = 'resume.txt';
    });
});


