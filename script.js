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
            { id: "conduct", label: "Conduct", type: "select", options: ["Excellent", "Very Good", "Good", "Satisfactory"], required: true }
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
            { id: "purpose", label: "Purpose", type: "text", required: true }
        ]
    },
    bono5: {
        title: "Bono 5 Certificate",
        body: function(data) {
            return `
                <p>This is to certify that <strong>${data.name}</strong>, with ID <strong>${data.id}</strong>,
                has successfully completed the Bono 5 program at <strong>${data.institution}</strong>
                from <strong>${data.fromDate}</strong> to <strong>${data.toDate}</strong>.</p>
                
                <p>The candidate has demonstrated exceptional skills in <strong>${data.skills}</strong>
                and has achieved a performance rating of <strong>${data.rating}</strong>.</p>
                
                <p>This certificate is awarded in recognition of the candidate's outstanding achievement and dedication.</p>
            `;
        },
        fields: [
            { id: "name", label: "Recipient Name", type: "text", required: true },
            { id: "id", label: "ID Number", type: "text", required: true },
            { id: "institution", label: "Institution Name", type: "text", required: true },
            { id: "fromDate", label: "From Date", type: "date", required: true },
            { id: "toDate", label: "To Date", type: "date", required: true },
            { id: "skills", label: "Skills Demonstrated", type: "text", required: true },
            { id: "rating", label: "Performance Rating", type: "select", options: ["Excellent", "Outstanding", "Exceptional", "Remarkable"], required: true }
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
            { id: "date", label: "Date", type: "date", required: true }
        ]
    }
};

// DOM Elements
let currentCertificateType = '';
let modal = null;
let certificatePreview = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Create modal element
    createModal();
    
    // Add event listeners to generate buttons
    const generateButtons = document.querySelectorAll('.generate-btn');
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateType = this.parentElement.querySelector('h3').textContent.toLowerCase().split(' ')[0];
            openCertificateForm(certificateType);
        });
    });
    
    // Add event listeners to preview buttons
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real application, this would show a preview of the template
            alert('Template preview functionality would be implemented here.');
        });
    });
});

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
                <div id="certificate-preview" class="certificate-preview"></div>
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
    // Get form data
    const form = document.getElementById('certificate-form');
    const formData = new FormData(form);
    const data = {};
    
    // Check if all required fields are filled
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
        if (!field.value) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        alert('Please fill all required fields.');
        return;
    }
    
    // Convert FormData to object
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Generate certificate HTML
    const certificateHTML = `
        <div class="certificate-container">
            <div class="certificate-content">
                <h1 class="certificate-title">${certificateTemplates[currentCertificateType].title}</h1>
                <div class="certificate-body">
                    ${certificateTemplates[currentCertificateType].body(data)}
                </div>
                <div class="certificate-signature">
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>Authorized Signatory</p>
                    </div>
                    <div class="signature-block">
                        <div class="signature-line"></div>
                        <p>Institution Seal</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="download-btn" onclick="downloadCertificate()">Download Certificate</button>
    `;
    
    // Display certificate
    certificatePreview.innerHTML = certificateHTML;
    certificatePreview.style.display = 'block';
    
    // Scroll to certificate preview
    certificatePreview.scrollIntoView({ behavior: 'smooth' });
}

// Download certificate
function downloadCertificate() {
    // In a real application, this would use html2canvas or similar library to convert the certificate to an image or PDF
    alert('In a production environment, this would download the certificate as a PDF or image file.');
    
    // Example implementation with html2canvas would be:
    /*
    html2canvas(document.querySelector('.certificate-container')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
    */
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Make downloadCertificate function available globally
window.downloadCertificate = downloadCertificate; 