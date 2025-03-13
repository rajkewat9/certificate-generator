// Certificate Templates
const certificateTemplates = {
    transfer: {
        title: "Transfer Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong>, son/daughter of <strong>${data.parentName}</strong>,
                with Registration Number <strong>${data.regNumber}</strong>, was a student of <strong>${data.institution}</strong>
                from <strong>${data.fromDate}</strong> to <strong>${data.toDate}</strong>.</p>
                
                <p>During this period, the student maintained <strong>${data.conduct}</strong> conduct and has completed all necessary
                requirements for transfer. The student has no outstanding dues with the institution.</p>
                
                <p>We wish the student all the best for future endeavors.</p>
            `;
        },
        fields: [
            { id: "name", label: "Student Name", type: "text", required: true },
            { id: "parentName", label: "Parent/Guardian Name", type: "text", required: true },
            { id: "regNumber", label: "Registration Number", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "fromDate", label: "From Date", type: "date", required: true },
            { id: "toDate", label: "To Date", type: "date", required: true },
            { id: "conduct", label: "Conduct", type: "select", options: ["Excellent", "Very Good", "Good", "Satisfactory"], required: true },
            { id: "instituteName", label: "Institute Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Institute Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Student Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    study: {
        title: "Study Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong>, son/daughter of <strong>${data.parentName}</strong>,
                with Registration Number <strong>${data.regNumber}</strong>, is a bonafide student of <strong>${data.institution}</strong>
                studying in <strong>${data.course}</strong>, <strong>${data.year}</strong> year, for the academic year <strong>${data.academicYear}</strong>.</p>
                
                <p>This certificate is issued for the purpose of <strong>${data.purpose}</strong>.</p>
            `;
        },
        fields: [
            { id: "name", label: "Student Name", type: "text", required: true },
            { id: "parentName", label: "Parent/Guardian Name", type: "text", required: true },
            { id: "regNumber", label: "Registration Number", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "course", label: "Course/Program", type: "text", required: true },
            { id: "year", label: "Year of Study", type: "select", options: ["First", "Second", "Third", "Fourth", "Fifth"], required: true },
            { id: "academicYear", label: "Academic Year", type: "text", required: true },
            { id: "purpose", label: "Purpose", type: "text", required: true },
            { id: "instituteName", label: "Institute Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Institute Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Student Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    bonafide: {
        title: "Bonafide Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong>, son/daughter of <strong>${data.parentName}</strong>,
                with Registration Number <strong>${data.regNumber}</strong>, is a bonafide student of <strong>${data.institution}</strong>
                studying in <strong>${data.course}</strong>, <strong>${data.semester}</strong> semester, during the academic year <strong>${data.academicYear}</strong>.</p>
                
                <p>His/Her date of birth as per our records is <strong>${data.dob}</strong> and he/she has maintained <strong>${data.conduct}</strong> conduct throughout.</p>
                
                <p>This certificate is issued for the purpose of <strong>${data.purpose}</strong>.</p>
            `;
        },
        fields: [
            { id: "name", label: "Student Name", type: "text", required: true },
            { id: "parentName", label: "Parent/Guardian Name", type: "text", required: true },
            { id: "regNumber", label: "Registration Number", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "course", label: "Course/Program", type: "text", required: true },
            { id: "semester", label: "Current Semester", type: "select", options: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"], required: true },
            { id: "academicYear", label: "Academic Year", type: "text", required: true },
            { id: "dob", label: "Date of Birth", type: "date", required: true },
            { id: "conduct", label: "Conduct", type: "select", options: ["Excellent", "Very Good", "Good", "Satisfactory"], required: true },
            { id: "purpose", label: "Purpose of Certificate", type: "text", required: true },
            { id: "instituteName", label: "Institute Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Institute Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Student Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    merit: {
        title: "Merit Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong> of <strong>${data.institution}</strong>
                has been awarded this Merit Certificate for outstanding performance in <strong>${data.achievement}</strong>.</p>
                
                <p>The recipient has demonstrated exceptional talent and dedication, achieving <strong>${data.position}</strong> position
                in the <strong>${data.event}</strong> held on <strong>${data.date}</strong>.</p>
                
                <p>We commend the recipient for this remarkable achievement and wish continued success in future endeavors.</p>
            `;
        },
        fields: [
            { id: "name", label: "Recipient Name", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "achievement", label: "Achievement", type: "text", required: true },
            { id: "position", label: "Position/Rank", type: "select", options: ["First", "Second", "Third", "Honorable Mention"], required: true },
            { id: "event", label: "Event/Competition", type: "text", required: true },
            { id: "date", label: "Date", type: "date", required: true },
            { id: "instituteName", label: "Institute Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Institute Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Recipient Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    character: {
        title: "Character Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong>, son/daughter of <strong>${data.parentName}</strong>,
                with Registration Number <strong>${data.regNumber}</strong>, was a student of <strong>${data.institution}</strong>
                from <strong>${data.fromDate}</strong> to <strong>${data.toDate}</strong>.</p>
                
                <p>During this period, the student has maintained <strong>${data.conduct}</strong> conduct and has shown
                <strong>${data.character}</strong> character in all academic and extra-curricular activities.</p>
                
                <p>This certificate is issued at the request of the student for <strong>${data.purpose}</strong>.</p>
            `;
        },
        fields: [
            { id: "name", label: "Student Name", type: "text", required: true },
            { id: "parentName", label: "Parent/Guardian Name", type: "text", required: true },
            { id: "regNumber", label: "Registration Number", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "fromDate", label: "From Date", type: "date", required: true },
            { id: "toDate", label: "To Date", type: "date", required: true },
            { id: "conduct", label: "Conduct", type: "select", options: ["Excellent", "Very Good", "Good", "Satisfactory"], required: true },
            { id: "character", label: "Character", type: "select", options: ["Excellent", "Very Good", "Good", "Satisfactory"], required: true },
            { id: "purpose", label: "Purpose", type: "text", required: true },
            { id: "instituteName", label: "Institute Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Institute Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Student Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    experience: {
        title: "Experience Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong> was employed with <strong>${data.companyName}</strong>
                as a <strong>${data.position}</strong> from <strong>${data.fromDate}</strong> to <strong>${data.toDate}</strong>.</p>
                
                <p>During this period, ${data.gender === 'Male' ? 'he' : 'she'} demonstrated excellent professional skills, dedication
                and a positive attitude. ${data.gender === 'Male' ? 'His' : 'Her'} contributions to the projects were significant.</p>
                
                <p>We wish ${data.gender === 'Male' ? 'him' : 'her'} all the best for future endeavors.</p>
            `;
        },
        fields: [
            { id: "name", label: "Employee Name", type: "text", required: true },
            { id: "companyName", label: "Company Name", type: "text", required: true },
            { id: "position", label: "Position/Role", type: "text", required: true },
            { id: "fromDate", label: "From Date", type: "date", required: true },
            { id: "toDate", label: "To Date", type: "date", required: true },
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true },
            { id: "instituteName", label: "Company Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Company Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Employee Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    internship: {
        title: "Internship Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong> has successfully completed an internship
                as a <strong>${data.position}</strong> at <strong>${data.companyName}</strong> 
                from <strong>${data.fromDate}</strong> to <strong>${data.toDate}</strong>.</p>
                
                <p>During this internship period, ${data.gender === 'Male' ? 'he' : 'she'} worked on the following project:
                <strong>${data.projectDetails}</strong></p>
                
                <p>${data.gender === 'Male' ? 'He' : 'She'} has shown great dedication, technical skills and teamwork during the internship.</p>
            `;
        },
        fields: [
            { id: "name", label: "Intern Name", type: "text", required: true },
            { id: "position", label: "Internship Position", type: "text", required: true },
            { id: "companyName", label: "Company Name", type: "text", required: true },
            { id: "fromDate", label: "From Date", type: "date", required: true },
            { id: "toDate", label: "To Date", type: "date", required: true },
            { id: "projectDetails", label: "Project Details", type: "text", required: true },
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true },
            { id: "instituteName", label: "Company Name (Header)", type: "text", required: true },
            { id: "instituteLogo", label: "Company Logo", type: "file", accept: "image/*", required: false },
            { id: "userPhoto", label: "Intern Photo", type: "file", accept: "image/*", required: false }
        ]
    },
    // Add CV/Resume templates
    cvResume: {
        title: "Professional CV/Resume",
        body: function(data) {
            // Generate the appropriate CV/Resume based on the selected category
            switch(data.resumeCategory) {
                case "Fresher":
                    return generateFresherResume(data);
                case "Experienced":
                    return generateExperiencedResume(data);
                case "Academic":
                    return generateAcademicResume(data);
                case "Technical":
                    return generateTechnicalResume(data);
                default:
                    return generateFresherResume(data);
            }
        },
        fields: [
            { id: "name", label: "Full Name", type: "text", required: true },
            { id: "email", label: "Email Address", type: "email", required: true },
            { id: "phone", label: "Phone Number", type: "text", required: true },
            { id: "address", label: "Address", type: "text", required: true },
            { id: "resumeCategory", label: "Resume Category", type: "select", options: ["Fresher", "Experienced", "Academic", "Technical"], required: true },
            { id: "profileSummary", label: "Professional Summary (2-3 sentences)", type: "textarea", required: true },
            
            // Education fields
            { id: "degree1", label: "Highest Degree", type: "text", required: true },
            { id: "institution1", label: "Institution", type: "text", required: true },
            { id: "gradYear1", label: "Graduation Year", type: "text", required: true },
            { id: "gpa1", label: "GPA/Percentage", type: "text", required: true },
            { id: "degree2", label: "Previous Degree (if applicable)", type: "text", required: false },
            { id: "institution2", label: "Institution", type: "text", required: false },
            { id: "gradYear2", label: "Graduation Year", type: "text", required: false },
            { id: "gpa2", label: "GPA/Percentage", type: "text", required: false },
            
            // Skills
            { id: "technicalSkills", label: "Technical Skills (comma separated)", type: "textarea", required: true },
            { id: "softSkills", label: "Soft Skills (comma separated)", type: "textarea", required: true },
            { id: "languages", label: "Languages (comma separated)", type: "text", required: false },
            
            // Experience (for experienced candidates)
            { id: "jobTitle1", label: "Most Recent Job Title", type: "text", required: false },
            { id: "company1", label: "Company Name", type: "text", required: false },
            { id: "jobDuration1", label: "Duration (e.g., Jan 2020 - Present)", type: "text", required: false },
            { id: "jobDescription1", label: "Job Responsibilities & Achievements (use bullet points)", type: "textarea", required: false },
            
            { id: "jobTitle2", label: "Previous Job Title", type: "text", required: false },
            { id: "company2", label: "Company Name", type: "text", required: false },
            { id: "jobDuration2", label: "Duration", type: "text", required: false },
            { id: "jobDescription2", label: "Job Responsibilities & Achievements", type: "textarea", required: false },
            
            // Projects (particularly for fresher)
            { id: "project1", label: "Project Title", type: "text", required: false },
            { id: "projectDescription1", label: "Project Description & Technologies Used", type: "textarea", required: false },
            { id: "project2", label: "Project Title", type: "text", required: false },
            { id: "projectDescription2", label: "Project Description & Technologies Used", type: "textarea", required: false },
            
            // Certifications
            { id: "certifications", label: "Certifications (comma separated)", type: "textarea", required: false },
            
            // Only keep the userPhoto field, remove instituteName and instituteLogo
            { id: "userPhoto", label: "Professional Photo", type: "file", accept: "image/*", required: false }
        ]
    }
};

// Certificate Design Templates
const designTemplates = {
    classic: {
        name: "Classic Design",
        background: "template1-bg.jpg",
        fontFamily: "'Times New Roman', Times, serif",
        titleColor: "#333",
        textColor: "#333",
        borderStyle: "5px double #8a7b58"
    },
    modern: {
        name: "Modern Design",
        background: "template2-bg.jpg",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        titleColor: "#2c3e50",
        textColor: "#34495e",
        borderStyle: "5px solid #3498db"
    },
    elegant: {
        name: "Elegant Design",
        background: "template3-bg.jpg",
        fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
        titleColor: "#5d4037",
        textColor: "#3e2723",
        borderStyle: "5px solid #8d6e63"
    },
    corporate: {
        name: "Corporate Design",
        background: "template4-bg.jpg",
        fontFamily: "'Arial', sans-serif",
        titleColor: "#01579b",
        textColor: "#263238",
        borderStyle: "5px solid #0277bd"
    },
    academic: {
        name: "Academic Design",
        background: "template5-bg.jpg",
        fontFamily: "'Bookman Old Style', serif",
        titleColor: "#1b5e20",
        textColor: "#33691e",
        borderStyle: "5px double #2e7d32"
    },
    minimalist: {
        name: "Minimalist Design",
        background: "template6-bg.jpg",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        titleColor: "#212121",
        textColor: "#424242",
        borderStyle: "2px solid #9e9e9e"
    }
};

// Certificate data for different types
const certificateTypes = {
    'Study Certificate': {
        title: 'Study Certificate',
        template: `This is to certify that [NAME] with Registration Number [REG_NO] is a bonafide student of [INSTITUTE_NAME]. [GENDER_PRONOUN] is currently pursuing [COURSE] for the academic year [ACADEMIC_YEAR].`,
        fields: ['name', 'regNo', 'instituteName', 'gender', 'course', 'academicYear']
    },
    'Bonafide Certificate': {
        title: 'Bonafide Certificate',
        template: `This is to certify that [NAME] with Registration Number [REG_NO] is a bonafide student of [INSTITUTE_NAME]. [GENDER_PRONOUN] is currently pursuing [COURSE] for the academic year [ACADEMIC_YEAR].`,
        fields: ['name', 'regNo', 'instituteName', 'gender', 'course', 'academicYear']
    },
    'Character Certificate': {
        title: 'Character Certificate',
        template: `This is to certify that [NAME] with Registration Number [REG_NO] has maintained excellent character and conduct during [GENDER_PRONOUN] studies at [INSTITUTE_NAME] from [START_DATE] to [END_DATE].`,
        fields: ['name', 'regNo', 'instituteName', 'gender', 'startDate', 'endDate']
    },
    'Scholarship Certificate': {
        title: 'Scholarship Certificate',
        template: `This is to certify that [NAME] has been awarded the [SCHOLARSHIP_NAME] scholarship for outstanding academic performance in [COURSE] at [INSTITUTE_NAME] for the academic year [ACADEMIC_YEAR].`,
        fields: ['name', 'scholarshipName', 'course', 'instituteName', 'academicYear']
    },
    'Experience Certificate': {
        title: 'Experience Certificate',
        template: `This is to certify that [NAME] worked as [POSITION] at [COMPANY_NAME] from [START_DATE] to [END_DATE]. During this period, [GENDER_PRONOUN] demonstrated excellent professional skills and dedication.`,
        fields: ['name', 'position', 'companyName', 'startDate', 'endDate', 'gender']
    },
    'Internship Certificate': {
        title: 'Internship Certificate',
        template: `This is to certify that [NAME] has successfully completed an internship as [POSITION] at [COMPANY_NAME] from [START_DATE] to [END_DATE], working on [PROJECT_DETAILS].`,
        fields: ['name', 'position', 'companyName', 'startDate', 'endDate', 'projectDetails']
    },
    'Skill Certification': {
        title: 'Skill Certification',
        template: `This is to certify that [NAME] has successfully completed training in [SKILL_NAME] and demonstrated proficiency level [PROFICIENCY_LEVEL] in assessment conducted on [ASSESSMENT_DATE].`,
        fields: ['name', 'skillName', 'proficiencyLevel', 'assessmentDate']
    },
    'Language Proficiency': {
        title: 'Language Proficiency Certificate',
        template: `This is to certify that [NAME] has demonstrated [PROFICIENCY_LEVEL] proficiency in [LANGUAGE] according to the assessment conducted on [ASSESSMENT_DATE].`,
        fields: ['name', 'language', 'proficiencyLevel', 'assessmentDate']
    },
    'Freelancing Certificate': {
        title: 'Freelancing Certificate',
        template: `This is to certify that [NAME] has successfully completed the project "[PROJECT_NAME]" as a freelance [ROLE] from [START_DATE] to [END_DATE].`,
        fields: ['name', 'projectName', 'role', 'startDate', 'endDate']
    },
    'ISO/Industry Certification': {
        title: 'ISO/Industry Certification',
        template: `This certifies that [NAME] has met all requirements and standards for [CERTIFICATION_NAME] certification in accordance with [STANDARD_NUMBER] on [ISSUE_DATE].`,
        fields: ['name', 'certificationName', 'standardNumber', 'issueDate']
    },
    'Workplace Training': {
        title: 'Workplace Training Certificate',
        template: `This is to certify that [NAME] has successfully completed [TRAINING_PROGRAM] training program conducted at [COMPANY_NAME] from [START_DATE] to [END_DATE].`,
        fields: ['name', 'trainingProgram', 'companyName', 'startDate', 'endDate']
    }
};

// DOM Elements
let currentCertificateType = '';
let currentDesignTemplate = 'classic'; // Default template
let modal = null;
let certificatePreview = null;
let instituteLogoPreview = null;
let userPhotoPreview = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Create modal element
    createModal();
    
    // Add event listeners to generate buttons
    const generateButtons = document.querySelectorAll('.generate-btn');
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.parentElement.querySelector('h3').textContent.trim();
            let certificateType = '';
            
            // Map card titles to certificateTemplates keys
            if (cardTitle === 'Study Certificate') certificateType = 'study';
            else if (cardTitle === 'Bonafide Certificate') certificateType = 'bonafide';
            else if (cardTitle === 'Merit Certificate') certificateType = 'merit';
            else if (cardTitle === 'Transfer Certificate') certificateType = 'transfer';
            else if (cardTitle === 'Character Certificate') certificateType = 'character';
            else if (cardTitle === 'Scholarship Certificate') certificateType = 'merit'; // Using merit as template
            else if (cardTitle === 'Experience Certificate') certificateType = 'experience';
            else if (cardTitle === 'Internship Certificate') certificateType = 'internship';
            else if (cardTitle === 'Skill Certification') certificateType = 'merit'; // Using merit as template
            else if (cardTitle === 'Language Proficiency') certificateType = 'merit'; // Using merit as template
            else if (cardTitle === 'Freelancing Certificate') certificateType = 'experience'; // Using experience as template
            else if (cardTitle === 'ISO/Industry Certification') certificateType = 'merit'; // Using merit as template
            else if (cardTitle === 'Workplace Training') certificateType = 'internship'; // Using internship as template
            else if (cardTitle === 'Professional CV/Resume') certificateType = 'cvResume'; // Map to our new CV/Resume template
            else certificateType = 'study'; // Default fallback
            
            // Check if certificateType exists in templates, otherwise default to 'study'
            if (!certificateTemplates[certificateType]) {
                console.warn(`Certificate type for "${cardTitle}" not found, using default template.`);
                certificateType = 'study';
            }
            
            openCertificateForm(certificateType);
        });
    });
    
    // Add event listeners to preview buttons
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const templateName = this.parentElement.parentElement.parentElement.querySelector('h3').textContent.trim();
            // Map template name to designTemplates keys
            let designType = '';
            
            if (templateName === 'Classic Design') designType = 'classic';
            else if (templateName === 'Modern Design') designType = 'modern';
            else if (templateName === 'Elegant Design') designType = 'elegant';
            else if (templateName === 'Corporate Design') designType = 'corporate';
            else if (templateName === 'Premium Gold') designType = 'elegant'; // Fallback to elegant
            else if (templateName === 'Minimalist Design') designType = 'minimalist';
            else if (templateName === 'Professional Teal') designType = 'corporate'; // Fallback to corporate
            else if (templateName === 'Academic Purple') designType = 'academic';
            else if (templateName === 'Achievement Red') designType = 'modern'; // Fallback to modern
            else if (templateName === 'Technical Blue') designType = 'modern'; // Fallback to modern
            else designType = 'classic'; // Default fallback
            
            // Check if designType exists, otherwise default to 'classic'
            if (!designTemplates[designType]) {
                console.warn(`Design template for "${templateName}" not found, using default template.`);
                designType = 'classic';
            }
            
            // Set the current design template
            currentDesignTemplate = designType;
            showNotification(`Template "${templateName}" selected!`, 'info');
        });
    });

    // Initialize jsPDF if available
    if (typeof window.jspdf !== 'undefined') {
        window.jsPDF = window.jspdf.jsPDF;
    }
    
    // Check if libraries are available and preload if needed
    checkAndLoadLibraries();
});

// Check if required libraries are loaded and load them if needed
function checkAndLoadLibraries() {
    if (typeof html2canvas === 'undefined') {
        loadHtml2Canvas().catch(error => console.error('Failed to preload html2canvas:', error));
    }
    
    if (typeof jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
        loadJsPdf().catch(error => console.error('Failed to preload jsPDF:', error));
    }
}

// Create modal for certificate form
function createModal() {
    // Create modal element if it doesn't exist
    if (!document.querySelector('.modal')) {
        const modalElement = document.createElement('div');
        modalElement.className = 'modal';
        modalElement.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2 id="modal-title">Generate Certificate</h2>
                <div id="form-container"></div>
                <div id="certificate-preview" class="certificate-preview">
                    <div class="certificate-container">
                        <div class="certificate-content"></div>
                    </div>
                    <div class="download-options">
                        <button class="download-btn" onclick="downloadCertificateAsImage()"><i class="fas fa-image"></i> Download as Image</button>
                        <button class="download-btn" onclick="downloadCertificateAsPDF()"><i class="fas fa-file-pdf"></i> Download as PDF</button>
                        <button class="print-btn" onclick="printCertificate()"><i class="fas fa-print"></i> Print Certificate</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalElement);
        
        // Add event listener to close button
        const closeBtn = modalElement.querySelector('.close-btn');
        closeBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modalElement.addEventListener('click', function(event) {
            if (event.target === modalElement) {
                closeModal();
            }
        });
    }
    
    modal = document.querySelector('.modal');
    certificatePreview = document.getElementById('certificate-preview');
}

// Open certificate form
function openCertificateForm(certificateType) {
    currentCertificateType = certificateType;
    
    // Set modal title
    document.getElementById('modal-title').textContent = `Generate ${certificateTemplates[certificateType].title}`;
    
    // Create form
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    
    const form = document.createElement('form');
    form.className = 'certificate-form';
    form.id = 'certificate-form';
    
    // Add template selection
    const templateGroup = document.createElement('div');
    templateGroup.className = 'form-group template-selection';
    templateGroup.style.gridColumn = '1 / -1';
    
    const templateLabel = document.createElement('label');
    templateLabel.textContent = 'Certificate Design Template';
    
    const templateSelect = document.createElement('select');
    templateSelect.id = 'design-template';
    templateSelect.name = 'design-template';
    
    // Add template options
    Object.keys(designTemplates).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = designTemplates[key].name;
        if (key === currentDesignTemplate) {
            option.selected = true;
        }
        templateSelect.appendChild(option);
    });
    
    templateGroup.appendChild(templateLabel);
    templateGroup.appendChild(templateSelect);
    form.appendChild(templateGroup);
    
    // Add form fields
    certificateTemplates[certificateType].fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        
        let input;
        
        if (field.type === 'select') {
            input = document.createElement('select');
            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                input.appendChild(optionElement);
            });
        } else if (field.type === 'file') {
            input = document.createElement('input');
            input.type = field.type;
            input.accept = field.accept;
            
            // Add preview container for image uploads
            const previewContainer = document.createElement('div');
            previewContainer.className = 'image-preview';
            previewContainer.id = `${field.id}-preview`;
            
            // Add event listener for file input change
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.className = 'preview-img';
                        
                        // Clear previous preview
                        previewContainer.innerHTML = '';
                        previewContainer.appendChild(img);
                        
                        // Store the image data
                        if (field.id === 'instituteLogo') {
                            instituteLogoPreview = event.target.result;
                        } else if (field.id === 'userPhoto') {
                            userPhotoPreview = event.target.result;
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            formGroup.appendChild(previewContainer);
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
        
        input.id = field.id;
        input.name = field.id;
        if (field.required) {
            input.required = true;
        }
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });
    
    // Add form buttons
    const formButtons = document.createElement('div');
    formButtons.className = 'form-buttons';
    
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.className = 'cancel-btn';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', closeModal);
    
    const generateButton = document.createElement('button');
    generateButton.type = 'button';
    generateButton.className = 'generate-certificate-btn';
    generateButton.textContent = 'Generate Certificate';
    generateButton.addEventListener('click', generateCertificate);
    
    formButtons.appendChild(cancelButton);
    formButtons.appendChild(generateButton);
    form.appendChild(formButtons);
    
    formContainer.appendChild(form);
    
    // Show modal
    modal.style.display = 'block';
    
    // Hide certificate preview
    certificatePreview.style.display = 'none';
}

// Generate certificate
function generateCertificate() {
    try {
        const formData = new FormData(document.getElementById('certificate-form'));
        const certificateData = {};
        
        // Validate and collect form data
        for (let [key, value] of formData.entries()) {
            const input = document.querySelector(`[name="${key}"]`);
            if (input.required) {
                if (input.type === 'file') {
                    if (!value.size) {
                        throw new Error(`Please select a file for ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                    }
                } else if (!value || (typeof value === 'string' && !value.trim())) {
                    throw new Error(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                }
            }
            certificateData[key] = value;
        }

        // Get selected template
        const template = certificateTemplates[currentCertificateType];
        const design = designTemplates[currentDesignTemplate];
        
        if (!template || !design) {
            throw new Error('Invalid template selection');
        }

        // Create certificate preview
        const preview = document.querySelector('.certificate-preview');
        preview.style.display = 'block';
        
        // Apply design template styles
        const container = preview.querySelector('.certificate-container');
        container.style.fontFamily = design.fontFamily;
        container.style.border = design.borderStyle;
        container.style.backgroundImage = `url(${design.background})`;
        
        // Set content with improved header layout and no frames
        const content = preview.querySelector('.certificate-content');
        
        // For CV/Resume, don't include the header with logo and institute name
        if (currentCertificateType === 'cvResume') {
            content.innerHTML = template.body(certificateData);
        } else {
            // For regular certificates, include the header with logo and institute name
            content.innerHTML = `
                <div class="certificate-header">
                    ${certificateData.instituteLogo ? `
                        <div class="institute-logo">
                            <img src="${URL.createObjectURL(certificateData.instituteLogo)}" alt="Institute Logo">
                        </div>
                    ` : '<div style="width: 90px;"></div>'}
                    <h2 class="institute-name">${certificateData.instituteName || 'Certificate of Achievement'}</h2>
                    ${certificateData.userPhoto ? `
                        <div class="user-photo">
                            <img src="${URL.createObjectURL(certificateData.userPhoto)}" alt="User Photo">
                        </div>
                    ` : '<div style="width: 90px;"></div>'}
                </div>
                <h1 class="certificate-title" style="color: ${design.titleColor}">${template.title}</h1>
                <div class="certificate-body" style="color: ${design.textColor}">
                    ${template.body(certificateData)}
                </div>
                <div class="certificate-signature">
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>Principal</p>
                    </div>
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>Dean</p>
                    </div>
                </div>
            `;
        }

        // Enable download and print buttons
        const downloadButtons = document.querySelectorAll('.download-btn, .print-btn');
        downloadButtons.forEach(button => button.disabled = false);

        // Show success message
        showNotification('Certificate generated successfully!', 'success');
    } catch (error) {
        console.error('Certificate generation error:', error);
        showNotification(error.message || 'Error generating certificate', 'error');
    }
}

// Add notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

// Improve image download
async function downloadCertificateAsImage() {
    try {
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            showNotification('Loading html2canvas...', 'info');
            await loadHtml2Canvas();
        }
        
        const element = document.querySelector('.certificate-container');
        if (!element) {
            throw new Error('Certificate container not found');
        }
        
        showNotification('Generating image...', 'info');
        
        // Create a high-quality A4 landscape template
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '-9999px';
        tempContainer.style.width = '297mm';
        tempContainer.style.height = '210mm';
        tempContainer.style.overflow = 'hidden';
        tempContainer.style.backgroundColor = 'white';
        
        // Use the same custom styles from PDF function
        const customStyles = document.createElement('style');
        customStyles.textContent = `
            .certificate-container-img {
                width: 100%;
                height: 100%;
                border: 2px solid #3a4eb7;
                background-color: white;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
            }
            
            .certificate-content-img {
                position: absolute;
                top: 2px;
                left: 2px;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                padding: 15mm 20mm;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .certificate-header-img {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding-bottom: 8mm;
                margin-bottom: 8mm;
                border-bottom: 1px solid rgba(58, 78, 183, 0.2);
            }
            
            .institute-logo-img, .user-photo-img {
                width: 28mm;
                height: 28mm;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .institute-logo-img img, .user-photo-img img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            
            .institute-name-img {
                font-size: 8mm;
                font-weight: bold;
                color: #3a4eb7;
                flex-grow: 1;
                text-align: center;
                padding: 0 10mm;
            }
            
            .certificate-title-img {
                font-size: 11mm;
                margin-bottom: 8mm;
                text-transform: uppercase;
                text-align: center;
                color: #3a4eb7;
                width: 100%;
            }
            
            .certificate-body-img {
                font-size: 6mm;
                line-height: 1.6;
                margin-bottom: 10mm;
                text-align: center;
                width: 90%;
            }
            
            .certificate-signature-img {
                display: flex;
                justify-content: space-around;
                width: 90%;
                margin-top: 15mm;
            }
            
            .signature-block-img {
                text-align: center;
                width: 40%;
            }
            
            .signature-line-img {
                width: 100%;
                height: 0.5mm;
                background: #3a4eb7;
                margin-bottom: 3mm;
            }
            
            .signature-block-img p {
                font-size: 5mm;
                font-weight: 500;
                margin-top: 3mm;
            }
        `;
        document.head.appendChild(customStyles);
        
        // Clone certificate content with improved formatting
        const certificateContent = element.querySelector('.certificate-content');
        const clonedContent = certificateContent.cloneNode(true);
        
        // Apply image-specific classes
        clonedContent.className = 'certificate-content-img';
        
        // Update internal elements with image-specific classes
        const header = clonedContent.querySelector('.certificate-header');
        header.className = 'certificate-header-img';
        
        const instituteLogos = clonedContent.querySelectorAll('.institute-logo');
        instituteLogos.forEach(logo => logo.className = 'institute-logo-img');
        
        const userPhotos = clonedContent.querySelectorAll('.user-photo');
        userPhotos.forEach(photo => photo.className = 'user-photo-img');
        
        const instituteName = clonedContent.querySelector('.institute-name');
        instituteName.className = 'institute-name-img';
        
        const title = clonedContent.querySelector('.certificate-title');
        title.className = 'certificate-title-img';
        
        const body = clonedContent.querySelector('.certificate-body');
        body.className = 'certificate-body-img';
        
        const signature = clonedContent.querySelector('.certificate-signature');
        signature.className = 'certificate-signature-img';
        
        const signatureBlocks = clonedContent.querySelectorAll('.signature-block');
        signatureBlocks.forEach(block => block.className = 'signature-block-img');
        
        const signatureLines = clonedContent.querySelectorAll('.signature-line');
        signatureLines.forEach(line => line.className = 'signature-line-img');
        
        // Create the container for image
        const containerImg = document.createElement('div');
        containerImg.className = 'certificate-container-img';
        containerImg.appendChild(clonedContent);
        
        tempContainer.appendChild(containerImg);
        document.body.appendChild(tempContainer);
        
        // Create canvas with high resolution
        const canvas = await html2canvas(tempContainer, {
            scale: 4, // Even higher scale for better image quality
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: tempContainer.offsetWidth,
            height: tempContainer.offsetHeight
        });
        
        // Clean up
        document.body.removeChild(tempContainer);
        document.head.removeChild(customStyles);
        
        // Convert to image and download
        const image = canvas.toDataURL('image/png', 1.0);
        
        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = `certificate-${Date.now()}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        showNotification('Image downloaded successfully!', 'success');
    } catch (error) {
        console.error('Image generation error:', error);
        showNotification('Error generating image: ' + error.message, 'error');
    }
}

// Improve PDF generation
async function downloadCertificateAsPDF() {
    try {
        // Check if required libraries are loaded
        if (typeof html2canvas === 'undefined') {
            showNotification('Loading html2canvas...', 'info');
            await loadHtml2Canvas();
        }
        
        if (typeof jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
            showNotification('Loading jsPDF...', 'info');
            await loadJsPdf();
        }
        
        const element = document.querySelector('.certificate-container');
        if (!element) {
            throw new Error('Certificate container not found');
        }
        
        showNotification('Generating PDF...', 'info');
        
        // Create a high-quality A4 landscape template
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '-9999px';
        tempContainer.style.width = '297mm';
        tempContainer.style.height = '210mm';
        tempContainer.style.overflow = 'hidden';
        tempContainer.style.backgroundColor = 'white';
        
        // Apply custom styles for A4 formatting
        const customStyles = document.createElement('style');
        customStyles.textContent = `
            .certificate-container-pdf {
                width: 100%;
                height: 100%;
                border: 2px solid #3a4eb7;
                background-color: white;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
            }
            
            .certificate-content-pdf {
                position: absolute;
                top: 2px;
                left: 2px;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                padding: 15mm 20mm;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .certificate-header-pdf {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding-bottom: 8mm;
                margin-bottom: 8mm;
                border-bottom: 1px solid rgba(58, 78, 183, 0.2);
            }
            
            .institute-logo-pdf, .user-photo-pdf {
                width: 28mm;
                height: 28mm;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .institute-logo-pdf img, .user-photo-pdf img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            
            .institute-name-pdf {
                font-size: 8mm;
                font-weight: bold;
                color: #3a4eb7;
                flex-grow: 1;
                text-align: center;
                padding: 0 10mm;
            }
            
            .certificate-title-pdf {
                font-size: 11mm;
                margin-bottom: 8mm;
                text-transform: uppercase;
                text-align: center;
                color: #3a4eb7;
                width: 100%;
            }
            
            .certificate-body-pdf {
                font-size: 6mm;
                line-height: 1.6;
                margin-bottom: 10mm;
                text-align: center;
                width: 90%;
            }
            
            .certificate-signature-pdf {
                display: flex;
                justify-content: space-around;
                width: 90%;
                margin-top: 15mm;
            }
            
            .signature-block-pdf {
                text-align: center;
                width: 40%;
            }
            
            .signature-line-pdf {
                width: 100%;
                height: 0.5mm;
                background: #3a4eb7;
                margin-bottom: 3mm;
            }
            
            .signature-block-pdf p {
                font-size: 5mm;
                font-weight: 500;
                margin-top: 3mm;
            }
        `;
        document.head.appendChild(customStyles);
        
        // Clone certificate content with improved formatting
        const certificateContent = element.querySelector('.certificate-content');
        const clonedContent = certificateContent.cloneNode(true);
        
        // Apply PDF-specific classes
        clonedContent.className = 'certificate-content-pdf';
        
        // Update internal elements with PDF-specific classes
        const header = clonedContent.querySelector('.certificate-header');
        header.className = 'certificate-header-pdf';
        
        const instituteLogos = clonedContent.querySelectorAll('.institute-logo');
        instituteLogos.forEach(logo => logo.className = 'institute-logo-pdf');
        
        const userPhotos = clonedContent.querySelectorAll('.user-photo');
        userPhotos.forEach(photo => photo.className = 'user-photo-pdf');
        
        const instituteName = clonedContent.querySelector('.institute-name');
        instituteName.className = 'institute-name-pdf';
        
        const title = clonedContent.querySelector('.certificate-title');
        title.className = 'certificate-title-pdf';
        
        const body = clonedContent.querySelector('.certificate-body');
        body.className = 'certificate-body-pdf';
        
        const signature = clonedContent.querySelector('.certificate-signature');
        signature.className = 'certificate-signature-pdf';
        
        const signatureBlocks = clonedContent.querySelectorAll('.signature-block');
        signatureBlocks.forEach(block => block.className = 'signature-block-pdf');
        
        const signatureLines = clonedContent.querySelectorAll('.signature-line');
        signatureLines.forEach(line => line.className = 'signature-line-pdf');
        
        // Create the container for PDF
        const containerPdf = document.createElement('div');
        containerPdf.className = 'certificate-container-pdf';
        containerPdf.appendChild(clonedContent);
        
        tempContainer.appendChild(containerPdf);
        document.body.appendChild(tempContainer);
        
        // Render to canvas with higher resolution
        const canvas = await html2canvas(tempContainer, {
            scale: 3, // Higher scale for better quality
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: tempContainer.offsetWidth,
            height: tempContainer.offsetHeight
        });
        
        // Clean up
        document.body.removeChild(tempContainer);
        document.head.removeChild(customStyles);
        
        // Create PDF
        const imgData = canvas.toDataURL('image/png');
        const jsPDF = window.jsPDF || window.jspdf.jsPDF;
        
        if (!jsPDF) {
            throw new Error('PDF library not available');
        }
        
        // Create PDF with A4 landscape dimensions
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });
        
        // A4 landscape dimensions
        const pdfWidth = 297;
        const pdfHeight = 210;
        
        // Add image to fill the entire page
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`certificate-${Date.now()}.pdf`);
        
        showNotification('PDF downloaded successfully!', 'success');
    } catch (error) {
        console.error('PDF generation error:', error);
        showNotification('Error generating PDF: ' + error.message, 'error');
        fallbackDownload();
    }
}

// Load html2canvas if not already loaded
function loadHtml2Canvas() {
    return new Promise((resolve, reject) => {
        if (typeof html2canvas !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
        script.onload = () => {
            console.log('html2canvas loaded successfully');
            resolve();
        };
        script.onerror = (e) => {
            console.error('Failed to load html2canvas', e);
            reject(e);
        };
        document.head.appendChild(script);
    });
}

// Load jsPDF if not already loaded
function loadJsPdf() {
    return new Promise((resolve, reject) => {
        if (typeof jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            console.log('jsPDF loaded successfully');
            if (typeof window.jsPDF !== 'undefined') {
                window.jsPDF = window.jspdf.jsPDF;
            }
            resolve();
        };
        script.onerror = (e) => {
            console.error('Failed to load jsPDF', e);
            reject(e);
        };
        document.head.appendChild(script);
    });
}

// Print certificate
function printCertificate() {
    try {
        const certificateContainer = document.querySelector('.certificate-container');
        if (!certificateContainer) {
            throw new Error('Certificate container not found');
        }

        // Create a new window for printing
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) {
            throw new Error('Unable to open print window. Please check your popup blocker settings.');
        }

        // Get all stylesheets from the current document
        const styleSheets = Array.from(document.styleSheets);
        let styles = '';
        
        // Add custom print styles
        styles += `
            @page {
                size: 297mm 210mm landscape;
                margin: 0;
            }
            body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: white;
            }
            .certificate-container {
                width: 297mm;
                height: 210mm;
                margin: 0 auto;
                border: 2px solid #3a4eb7;
                box-sizing: border-box;
                background-color: white;
                box-shadow: none !important;
                overflow: hidden;
                page-break-inside: avoid;
            }
            .certificate-content {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 15mm 20mm; /* Reduced padding to use more page space */
                box-sizing: border-box;
            }
            .certificate-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding-bottom: 8mm;
                margin-bottom: 8mm;
                border-bottom: 1px solid rgba(58, 78, 183, 0.2);
            }
            .institute-logo, .user-photo {
                width: 28mm;
                height: 28mm;
                border: none; /* No borders */
                background: transparent; /* No backgrounds */
            }
            .institute-name {
                font-size: 8mm; /* Larger font */
                font-weight: bold;
                color: #3a4eb7;
                flex-grow: 1;
                text-align: center;
                padding: 0 10mm;
            }
            .certificate-title {
                font-size: 11mm; /* Larger font */
                margin-bottom: 8mm;
                text-transform: uppercase;
                text-align: center;
                color: #3a4eb7;
                width: 100%;
            }
            .certificate-body {
                font-size: 6mm; /* Larger font */
                line-height: 1.6;
                margin-bottom: 10mm;
                text-align: center;
                max-width: 90%; /* Using more of the page */
                margin-left: auto;
                margin-right: auto;
            }
            .certificate-signature {
                display: flex;
                justify-content: space-around;
                width: 90%;
                margin: 15mm auto 0;
            }
            .signature-block {
                text-align: center;
                width: 40%;
            }
            .signature-block p {
                font-size: 5mm;
                font-weight: 500;
                margin-top: 3mm;
            }
            .signature-line {
                width: 100%;
                height: 0.5mm;
                background: #3a4eb7;
                margin-bottom: 3mm;
            }
            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        `;

        // Write to the new window
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Print Certificate</title>
                <style>${styles}</style>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            </head>
            <body>
                <div class="certificate-container">
                    ${certificateContainer.innerHTML}
                </div>
                <script>
                    // Wait for images to load before printing
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            setTimeout(function() {
                                window.close();
                            }, 100);
                        }, 500);
                    };
                </script>
            </body>
            </html>
        `);

        printWindow.document.close();
        showNotification('Preparing certificate for printing...', 'info');
    } catch (error) {
        console.error('Print error:', error);
        showNotification('Error printing certificate: ' + error.message, 'error');
    }
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Make functions available globally
window.downloadCertificateAsImage = downloadCertificateAsImage;
window.downloadCertificateAsPDF = downloadCertificateAsPDF;
window.printCertificate = printCertificate;

// Add these CV generation functions after the existing code (before the closing brace of the script)

// Function to generate a Fresher Resume
function generateFresherResume(data) {
    // Parse comma-separated skills into bullet points
    const technicalSkills = data.technicalSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    const softSkills = data.softSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    
    // Parse certifications if provided
    const certifications = data.certifications ? 
        data.certifications.split(',').map(cert => 
            `<li>${cert.trim()}</li>`).join('') : '';
    
    // Format projects section
    let projectsSection = '';
    if (data.project1) {
        projectsSection += `
            <div class="resume-section">
                <h3 class="section-title">PROJECTS</h3>
                <div class="project-item">
                    <h4>${data.project1}</h4>
                    <p>${data.projectDescription1.replace(/\n/g, '<br>')}</p>
                </div>`;
        
        if (data.project2) {
            projectsSection += `
                <div class="project-item">
                    <h4>${data.project2}</h4>
                    <p>${data.projectDescription2.replace(/\n/g, '<br>')}</p>
                </div>`;
        }
        
        projectsSection += `</div>`;
    }
    
    // Basic ATS-friendly fresher resume
    return `
        <style>
            .resume-container {
                font-family: 'Calibri', 'Arial', sans-serif;
                line-height: 1.5;
                color: #333;
                width: 100%;
                text-align: left;
            }
            .resume-header {
                margin-bottom: 20px;
                text-align: center;
            }
            .contact-info {
                font-size: 14px;
                margin-bottom: 15px;
            }
            .section-title {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                color: #2a5885;
            }
            .resume-section {
                margin-bottom: 20px;
            }
            .education-item, .project-item {
                margin-bottom: 15px;
            }
            .skills-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .skills-column {
                width: 48%;
            }
            .resume-container ul {
                padding-left: 20px;
                margin: 5px 0;
            }
            .resume-container p {
                margin: 5px 0;
            }
        </style>
        <div class="resume-container">
            <div class="resume-header">
                <h2>${data.name}</h2>
                <div class="contact-info">
                    ${data.email} | ${data.phone} | ${data.address}
                </div>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">PROFESSIONAL SUMMARY</h3>
                <p>${data.profileSummary}</p>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">EDUCATION</h3>
                <div class="education-item">
                    <p><strong>${data.degree1}</strong> - ${data.institution1} (${data.gradYear1})</p>
                    <p>GPA/Percentage: ${data.gpa1}</p>
                </div>
                ${data.degree2 ? `
                <div class="education-item">
                    <p><strong>${data.degree2}</strong> - ${data.institution2} (${data.gradYear2})</p>
                    <p>GPA/Percentage: ${data.gpa2}</p>
                </div>` : ''}
            </div>
            
            ${projectsSection}
            
            <div class="resume-section">
                <h3 class="section-title">SKILLS</h3>
                <div class="skills-container">
                    <div class="skills-column">
                        <p><strong>Technical Skills:</strong></p>
                        <ul>${technicalSkills}</ul>
                    </div>
                    <div class="skills-column">
                        <p><strong>Soft Skills:</strong></p>
                        <ul>${softSkills}</ul>
                    </div>
                </div>
                ${data.languages ? `
                <p><strong>Languages:</strong> ${data.languages}</p>` : ''}
            </div>
            
            ${certifications ? `
            <div class="resume-section">
                <h3 class="section-title">CERTIFICATIONS</h3>
                <ul>${certifications}</ul>
            </div>` : ''}
        </div>
    `;
}

// Function to generate an Experienced Professional Resume
function generateExperiencedResume(data) {
    // Parse comma-separated skills into bullet points
    const technicalSkills = data.technicalSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    const softSkills = data.softSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    
    // Parse certifications if provided
    const certifications = data.certifications ? 
        data.certifications.split(',').map(cert => 
            `<li>${cert.trim()}</li>`).join('') : '';
    
    // Format job descriptions with bullet points
    const jobDescription1 = data.jobDescription1 ? 
        data.jobDescription1.split('\n').map(point => 
            point.trim() ? `<li>${point.trim()}</li>` : '').join('') : '';
            
    const jobDescription2 = data.jobDescription2 ? 
        data.jobDescription2.split('\n').map(point => 
            point.trim() ? `<li>${point.trim()}</li>` : '').join('') : '';
    
    // Experience section
    let experienceSection = '';
    if (data.jobTitle1) {
        experienceSection = `
            <div class="resume-section">
                <h3 class="section-title">PROFESSIONAL EXPERIENCE</h3>
                <div class="experience-item">
                    <h4>${data.jobTitle1} | ${data.company1}</h4>
                    <p class="duration">${data.jobDuration1}</p>
                    <ul>${jobDescription1}</ul>
                </div>`;
        
        if (data.jobTitle2) {
            experienceSection += `
                <div class="experience-item">
                    <h4>${data.jobTitle2} | ${data.company2}</h4>
                    <p class="duration">${data.jobDuration2}</p>
                    <ul>${jobDescription2}</ul>
                </div>`;
        }
        
        experienceSection += `</div>`;
    }
    
    // ATS-friendly experienced professional resume
    return `
        <style>
            .resume-container {
                font-family: 'Calibri', 'Arial', sans-serif;
                line-height: 1.5;
                color: #333;
                width: 100%;
                text-align: left;
            }
            .resume-header {
                margin-bottom: 20px;
                text-align: center;
            }
            .contact-info {
                font-size: 14px;
                margin-bottom: 15px;
            }
            .section-title {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                color: #2a5885;
            }
            .resume-section {
                margin-bottom: 20px;
            }
            .education-item, .experience-item {
                margin-bottom: 15px;
            }
            .duration {
                font-style: italic;
                color: #555;
                margin: 2px 0 5px;
            }
            .skills-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .skills-column {
                width: 48%;
            }
            .resume-container ul {
                padding-left: 20px;
                margin: 5px 0;
            }
            .resume-container p {
                margin: 5px 0;
            }
        </style>
        <div class="resume-container">
            <div class="resume-header">
                <h2>${data.name}</h2>
                <div class="contact-info">
                    ${data.email} | ${data.phone} | ${data.address}
                </div>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">PROFESSIONAL SUMMARY</h3>
                <p>${data.profileSummary}</p>
            </div>
            
            ${experienceSection}
            
            <div class="resume-section">
                <h3 class="section-title">SKILLS</h3>
                <div class="skills-container">
                    <div class="skills-column">
                        <p><strong>Technical Skills:</strong></p>
                        <ul>${technicalSkills}</ul>
                    </div>
                    <div class="skills-column">
                        <p><strong>Soft Skills:</strong></p>
                        <ul>${softSkills}</ul>
                    </div>
                </div>
                ${data.languages ? `
                <p><strong>Languages:</strong> ${data.languages}</p>` : ''}
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">EDUCATION</h3>
                <div class="education-item">
                    <p><strong>${data.degree1}</strong> - ${data.institution1} (${data.gradYear1})</p>
                    <p>GPA/Percentage: ${data.gpa1}</p>
                </div>
                ${data.degree2 ? `
                <div class="education-item">
                    <p><strong>${data.degree2}</strong> - ${data.institution2} (${data.gradYear2})</p>
                    <p>GPA/Percentage: ${data.gpa2}</p>
                </div>` : ''}
            </div>
            
            ${certifications ? `
            <div class="resume-section">
                <h3 class="section-title">CERTIFICATIONS</h3>
                <ul>${certifications}</ul>
            </div>` : ''}
        </div>
    `;
}

// Function to generate an Academic Resume
function generateAcademicResume(data) {
    // Parse comma-separated skills into bullet points
    const technicalSkills = data.technicalSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    const softSkills = data.softSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    
    // Parse certifications if provided
    const certifications = data.certifications ? 
        data.certifications.split(',').map(cert => 
            `<li>${cert.trim()}</li>`).join('') : '';
    
    // Format research projects
    let projectsSection = '';
    if (data.project1) {
        projectsSection += `
            <div class="resume-section">
                <h3 class="section-title">RESEARCH & PROJECTS</h3>
                <div class="project-item">
                    <h4>${data.project1}</h4>
                    <p>${data.projectDescription1.replace(/\n/g, '<br>')}</p>
                </div>`;
        
        if (data.project2) {
            projectsSection += `
                <div class="project-item">
                    <h4>${data.project2}</h4>
                    <p>${data.projectDescription2.replace(/\n/g, '<br>')}</p>
                </div>`;
        }
        
        projectsSection += `</div>`;
    }
    
    // ATS-friendly academic resume
    return `
        <style>
            .resume-container {
                font-family: 'Garamond', 'Times New Roman', serif;
                line-height: 1.5;
                color: #333;
                width: 100%;
                text-align: left;
            }
            .resume-header {
                margin-bottom: 20px;
                text-align: center;
            }
            .contact-info {
                font-size: 14px;
                margin-bottom: 15px;
            }
            .section-title {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                color: #5c0505;
            }
            .resume-section {
                margin-bottom: 20px;
            }
            .education-item, .project-item {
                margin-bottom: 15px;
            }
            .skills-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .skills-column {
                width: 48%;
            }
            .resume-container ul {
                padding-left: 20px;
                margin: 5px 0;
            }
            .resume-container p {
                margin: 5px 0;
            }
        </style>
        <div class="resume-container">
            <div class="resume-header">
                <h2>${data.name}</h2>
                <div class="contact-info">
                    ${data.email} | ${data.phone} | ${data.address}
                </div>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">ACADEMIC PROFILE</h3>
                <p>${data.profileSummary}</p>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">EDUCATION</h3>
                <div class="education-item">
                    <p><strong>${data.degree1}</strong> - ${data.institution1} (${data.gradYear1})</p>
                    <p>GPA/Percentage: ${data.gpa1}</p>
                </div>
                ${data.degree2 ? `
                <div class="education-item">
                    <p><strong>${data.degree2}</strong> - ${data.institution2} (${data.gradYear2})</p>
                    <p>GPA/Percentage: ${data.gpa2}</p>
                </div>` : ''}
            </div>
            
            ${projectsSection}
            
            <div class="resume-section">
                <h3 class="section-title">ACADEMIC SKILLS</h3>
                <div class="skills-container">
                    <div class="skills-column">
                        <p><strong>Research & Technical Skills:</strong></p>
                        <ul>${technicalSkills}</ul>
                    </div>
                    <div class="skills-column">
                        <p><strong>Academic & Soft Skills:</strong></p>
                        <ul>${softSkills}</ul>
                    </div>
                </div>
                ${data.languages ? `
                <p><strong>Languages:</strong> ${data.languages}</p>` : ''}
            </div>
            
            ${certifications ? `
            <div class="resume-section">
                <h3 class="section-title">PUBLICATIONS & CERTIFICATIONS</h3>
                <ul>${certifications}</ul>
            </div>` : ''}
            
            ${data.jobTitle1 ? `
            <div class="resume-section">
                <h3 class="section-title">TEACHING/WORK EXPERIENCE</h3>
                <p><strong>${data.jobTitle1}</strong> at ${data.company1}, ${data.jobDuration1}</p>
                <p>${data.jobDescription1.replace(/\n/g, '<br>')}</p>
            </div>` : ''}
        </div>
    `;
}

// Function to generate a Technical Resume
function generateTechnicalResume(data) {
    // Parse comma-separated skills into bullet points
    const technicalSkills = data.technicalSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    const softSkills = data.softSkills.split(',').map(skill => 
        `<li>${skill.trim()}</li>`).join('');
    
    // Parse certifications if provided
    const certifications = data.certifications ? 
        data.certifications.split(',').map(cert => 
            `<li>${cert.trim()}</li>`).join('') : '';
    
    // Format job descriptions with bullet points
    const jobDescription1 = data.jobDescription1 ? 
        data.jobDescription1.split('\n').map(point => 
            point.trim() ? `<li>${point.trim()}</li>` : '').join('') : '';
            
    const jobDescription2 = data.jobDescription2 ? 
        data.jobDescription2.split('\n').map(point => 
            point.trim() ? `<li>${point.trim()}</li>` : '').join('') : '';
    
    // Experience section
    let experienceSection = '';
    if (data.jobTitle1) {
        experienceSection = `
            <div class="resume-section">
                <h3 class="section-title">TECHNICAL EXPERIENCE</h3>
                <div class="experience-item">
                    <h4>${data.jobTitle1} | ${data.company1}</h4>
                    <p class="duration">${data.jobDuration1}</p>
                    <ul>${jobDescription1}</ul>
                </div>`;
        
        if (data.jobTitle2) {
            experienceSection += `
                <div class="experience-item">
                    <h4>${data.jobTitle2} | ${data.company2}</h4>
                    <p class="duration">${data.jobDuration2}</p>
                    <ul>${jobDescription2}</ul>
                </div>`;
        }
        
        experienceSection += `</div>`;
    }
    
    // Format projects section
    let projectsSection = '';
    if (data.project1) {
        projectsSection += `
            <div class="resume-section">
                <h3 class="section-title">TECHNICAL PROJECTS</h3>
                <div class="project-item">
                    <h4>${data.project1}</h4>
                    <p>${data.projectDescription1.replace(/\n/g, '<br>')}</p>
                </div>`;
        
        if (data.project2) {
            projectsSection += `
                <div class="project-item">
                    <h4>${data.project2}</h4>
                    <p>${data.projectDescription2.replace(/\n/g, '<br>')}</p>
                </div>`;
        }
        
        projectsSection += `</div>`;
    }
    
    // ATS-friendly technical resume
    return `
        <style>
            .resume-container {
                font-family: 'Segoe UI', 'Arial', sans-serif;
                line-height: 1.5;
                color: #333;
                width: 100%;
                text-align: left;
            }
            .resume-header {
                margin-bottom: 20px;
                text-align: center;
            }
            .contact-info {
                font-size: 14px;
                margin-bottom: 15px;
            }
            .section-title {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1px solid #333;
                margin-bottom: 10px;
                color: #2d5373;
            }
            .resume-section {
                margin-bottom: 20px;
            }
            .education-item, .experience-item, .project-item {
                margin-bottom: 15px;
            }
            .duration {
                font-style: italic;
                color: #555;
                margin: 2px 0 5px;
            }
            .skills-container {
                display: flex;
                flex-wrap: wrap;
            }
            .skills-column {
                width: 100%;
            }
            .resume-container ul {
                padding-left: 20px;
                margin: 5px 0;
            }
            .resume-container p {
                margin: 5px 0;
            }
            .technical-skills-grid {
                display: flex;
                flex-wrap: wrap;
            }
            .technical-skills-grid li {
                width: 48%;
                margin-right: 2%;
            }
        </style>
        <div class="resume-container">
            <div class="resume-header">
                <h2>${data.name}</h2>
                <div class="contact-info">
                    ${data.email} | ${data.phone} | ${data.address}
                </div>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">TECHNICAL PROFILE</h3>
                <p>${data.profileSummary}</p>
            </div>
            
            <div class="resume-section">
                <h3 class="section-title">TECHNICAL SKILLS</h3>
                <div class="skills-column">
                    <ul class="technical-skills-grid">${technicalSkills}</ul>
                </div>
            </div>
            
            ${experienceSection}
            
            ${projectsSection}
            
            <div class="resume-section">
                <h3 class="section-title">EDUCATION</h3>
                <div class="education-item">
                    <p><strong>${data.degree1}</strong> - ${data.institution1} (${data.gradYear1})</p>
                    <p>GPA/Percentage: ${data.gpa1}</p>
                </div>
                ${data.degree2 ? `
                <div class="education-item">
                    <p><strong>${data.degree2}</strong> - ${data.institution2} (${data.gradYear2})</p>
                    <p>GPA/Percentage: ${data.gpa2}</p>
                </div>` : ''}
            </div>
            
            ${certifications ? `
            <div class="resume-section">
                <h3 class="section-title">CERTIFICATIONS</h3>
                <ul>${certifications}</ul>
            </div>` : ''}
            
            <div class="resume-section">
                <h3 class="section-title">SOFT SKILLS</h3>
                <ul>${softSkills}</ul>
                ${data.languages ? `
                <p><strong>Languages:</strong> ${data.languages}</p>` : ''}
            </div>
        </div>
    `;
} 