document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const aboutMe = (document.getElementById('aboutMe') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
        const itSkills = (document.getElementById('itSkills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
        const projects = (document.getElementById('projects') as HTMLTextAreaElement).value.split(',').map(project => project.trim());

        const skillsList = skills.map(skill => `- ${skill}`).join('\n');
        const itSkillsList = itSkills.map(skill => `- ${skill}`).join('\n');
        const projectsList = projects.map(project => `- Project: ${project}`).join('\n');

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
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </section>
            <section class="it-skills">
                <h2>IT Skills</h2>
                <ul>
                    ${itSkills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </section>
            <section class="work-experience">
                <h2>Work Experience</h2>
                <p>${workExperience}</p>
            </section>
            <section class="projects">
                <h2>Projects</h2>
                <ul>
                    ${projects.map(project => `<li><strong>Project:</strong> ${project}</li>`).join('')}
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
