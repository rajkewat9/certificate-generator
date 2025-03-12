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
            const certificateType = this.parentElement.querySelector('h3').textContent.toLowerCase().split(' ')[0];
            openCertificateForm(certificateType);
        });
    });
    
    // Add event listeners to preview buttons
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const templateName = this.parentElement.querySelector('h3').textContent.toLowerCase().split(' ')[0];
            // Set the current design template
            currentDesignTemplate = templateName;
            alert(`Template "${this.parentElement.querySelector('h3').textContent}" selected! Generate a certificate to use this template.`);
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
    // Get form data
    const form = document.getElementById('certificate-form');
    const formData = new FormData(form);
    const data = {};
    
    // Check if all required fields are filled
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
        if (field.type !== 'file' && !field.value) {
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
        if (key !== 'instituteLogo' && key !== 'userPhoto') {
            data[key] = value;
        }
    }
    
    // Get selected template
    currentDesignTemplate = data['design-template'] || currentDesignTemplate;
    const template = designTemplates[currentDesignTemplate];
    
    // Generate certificate HTML
    const certificateHTML = `
        <div class="certificate-container" style="border: ${template.borderStyle}">
            <div class="certificate-content" style="background-image: url('${template.background}'); font-family: ${template.fontFamily};">
                <div class="certificate-header">
                    ${instituteLogoPreview ? `<div class="institute-logo"><img src="${instituteLogoPreview}" alt="Institute Logo"></div>` : ''}
                    <h2 class="institute-name" style="color: ${template.titleColor}">${data.instituteName || ''}</h2>
                    ${userPhotoPreview ? `<div class="user-photo"><img src="${userPhotoPreview}" alt="User Photo"></div>` : ''}
                </div>
                <h1 class="certificate-title" style="color: ${template.titleColor}; font-family: ${template.fontFamily};">${certificateTemplates[currentCertificateType].title}</h1>
                <div class="certificate-body" style="color: ${template.textColor};">
                    ${certificateTemplates[currentCertificateType].body(data)}
                </div>
                <div class="certificate-signature">
                    <div class="signature-block">
                        <div class="signature-line" style="background-color: ${template.textColor};"></div>
                        <p style="color: ${template.textColor};">Authorized Signatory</p>
                    </div>
                    <div class="signature-block">
                        <div class="signature-line" style="background-color: ${template.textColor};"></div>
                        <p style="color: ${template.textColor};">Institution Seal</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="download-options">
            <button class="download-btn" onclick="downloadCertificateAsImage()"><i class="fas fa-image"></i> Download as Image</button>
            <button class="download-btn" onclick="downloadCertificateAsPDF()"><i class="fas fa-file-pdf"></i> Download as PDF</button>
            <button class="print-btn" onclick="printCertificate()"><i class="fas fa-print"></i> Print Certificate</button>
        </div>
    `;
    
    // Display certificate
    certificatePreview.innerHTML = certificateHTML;
    certificatePreview.style.display = 'block';
    
    // Scroll to certificate preview
    certificatePreview.scrollIntoView({ behavior: 'smooth' });
}

// Download certificate as image
function downloadCertificateAsImage() {
    try {
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            // Show loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading required libraries...';
            document.body.appendChild(loadingIndicator);
            
            loadHtml2Canvas().then(() => {
                // Remove loading indicator
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                setTimeout(() => downloadCertificateAsImage(), 500);
            }).catch(error => {
                console.error('Failed to load html2canvas:', error);
                // Remove loading indicator
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                fallbackDownload();
            });
            return;
        }
        
        const certificateContainer = document.querySelector('.certificate-container');
        if (!certificateContainer) {
            throw new Error('Certificate container not found');
        }
        
        // Show loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating image...';
        document.body.appendChild(loadingIndicator);
        
        // Get content element for better sizing
        const certificateContent = certificateContainer.querySelector('.certificate-content');
        
        // Create a fixed size container for proper proportions (A4 landscape aspect ratio)
        const fixedContainer = document.createElement('div');
        fixedContainer.style.position = 'fixed';
        fixedContainer.style.top = '-9999px';
        fixedContainer.style.left = '-9999px';
        fixedContainer.style.width = '1024px'; // Fixed width - A4 landscape equivalent
        fixedContainer.style.height = '768px'; // Fixed height with proper aspect ratio for A4 landscape
        fixedContainer.style.backgroundColor = 'white';
        fixedContainer.style.overflow = 'hidden';
        document.body.appendChild(fixedContainer);
        
        // Clone the certificate content and apply fixed dimensions
        const clonedContent = certificateContent.cloneNode(true);
        
        // Set styles for proper rendering
        clonedContent.style.position = 'absolute';
        clonedContent.style.top = '0';
        clonedContent.style.left = '0';
        clonedContent.style.width = '100%';
        clonedContent.style.height = '100%';
        clonedContent.style.border = certificateContainer.style.border;
        clonedContent.style.transform = 'none';
        clonedContent.style.borderRadius = '0';
        clonedContent.style.boxSizing = 'border-box';
        clonedContent.style.padding = '20px 40px 40px 40px';
        clonedContent.style.display = 'flex';
        clonedContent.style.flexDirection = 'column';
        clonedContent.style.alignItems = 'center';
        clonedContent.style.justifyContent = 'flex-start';
        
        // Remove any aspect ratio padding that might be causing issues
        clonedContent.style.paddingBottom = '0';
        
        // Add the cloned content to the fixed container
        fixedContainer.appendChild(clonedContent);
        
        // Wait a bit for the DOM to update
        setTimeout(() => {
            html2canvas(fixedContainer, {
                scale: 2, // Higher quality
                useCORS: true,
                allowTaint: true,
                backgroundColor: 'white',
                windowWidth: fixedContainer.offsetWidth,
                windowHeight: fixedContainer.offsetHeight,
                x: 0,
                y: 0,
                logging: false
            }).then(canvas => {
                // Remove loading indicator and cleanup
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                document.body.removeChild(fixedContainer);
                
                // Create download link
                const link = document.createElement('a');
                link.download = `${currentCertificateType}-certificate.png`;
                link.href = canvas.toDataURL('image/png', 1.0); // Use highest quality
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch(error => {
                console.error('Error generating image:', error);
                // Remove loading indicator and cleanup
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                if (document.body.contains(fixedContainer)) {
                    document.body.removeChild(fixedContainer);
                }
                fallbackDownload();
            });
        }, 200); // Give extra time for fonts to load
    } catch (error) {
        console.error('Error in downloadCertificateAsImage:', error);
        fallbackDownload();
    }
}

// Fallback download method
function fallbackDownload() {
    alert('Direct download failed. Taking a screenshot of your certificate is recommended.');
    
    // Create a popup with instructions
    const instructionsPopup = document.createElement('div');
    instructionsPopup.className = 'instructions-popup';
    instructionsPopup.innerHTML = `
        <div class="instructions-content">
            <h3>Download Instructions</h3>
            <p>The automatic download failed. Please follow these steps:</p>
            <ol>
                <li>Take a screenshot of your certificate (Press PrtScn or use your system's screenshot tool)</li>
                <li>Paste it into an image editor like Paint</li>
                <li>Save the image as PNG or JPG</li>
            </ol>
            <button id="close-instructions">Close</button>
        </div>
    `;
    document.body.appendChild(instructionsPopup);
    
    // Add close button functionality
    document.getElementById('close-instructions').addEventListener('click', function() {
        document.body.removeChild(instructionsPopup);
    });
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
            if (typeof window.jspdf !== 'undefined') {
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

// Download certificate as PDF
function downloadCertificateAsPDF() {
    try {
        // Check if required libraries are loaded
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        
        if (typeof html2canvas === 'undefined' || (typeof jspdf === 'undefined' && typeof window.jsPDF === 'undefined')) {
            // Show loading indicator for libraries
            loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading required libraries...';
            document.body.appendChild(loadingIndicator);
            
            Promise.all([
                typeof html2canvas === 'undefined' ? loadHtml2Canvas() : Promise.resolve(),
                (typeof jspdf === 'undefined' && typeof window.jsPDF === 'undefined') ? loadJsPdf() : Promise.resolve()
            ]).then(() => {
                // Remove loading indicator
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                setTimeout(() => downloadCertificateAsPDF(), 500);
            }).catch(error => {
                console.error('Failed to load libraries:', error);
                // Remove loading indicator
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                fallbackDownload();
            });
            return;
        }
        
        const certificateContainer = document.querySelector('.certificate-container');
        if (!certificateContainer) {
            throw new Error('Certificate container not found');
        }
        
        // Show loading indicator for PDF generation
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        document.body.appendChild(loadingIndicator);
        
        // Get content element for better sizing
        const certificateContent = certificateContainer.querySelector('.certificate-content');
        
        // Create a fixed size container for proper proportions (A4 landscape aspect ratio)
        const fixedContainer = document.createElement('div');
        fixedContainer.style.position = 'fixed';
        fixedContainer.style.top = '-9999px';
        fixedContainer.style.left = '-9999px';
        fixedContainer.style.width = '1024px'; // Fixed width - A4 landscape equivalent
        fixedContainer.style.height = '768px'; // Fixed height with proper aspect ratio for A4 landscape
        fixedContainer.style.backgroundColor = 'white';
        fixedContainer.style.overflow = 'hidden';
        document.body.appendChild(fixedContainer);
        
        // Clone the certificate content and apply fixed dimensions
        const clonedContent = certificateContent.cloneNode(true);
        
        // Set styles for proper rendering
        clonedContent.style.position = 'absolute';
        clonedContent.style.top = '0';
        clonedContent.style.left = '0';
        clonedContent.style.width = '100%';
        clonedContent.style.height = '100%';
        clonedContent.style.border = certificateContainer.style.border;
        clonedContent.style.transform = 'none';
        clonedContent.style.borderRadius = '0';
        clonedContent.style.boxSizing = 'border-box';
        clonedContent.style.padding = '20px 40px 40px 40px';
        clonedContent.style.display = 'flex';
        clonedContent.style.flexDirection = 'column';
        clonedContent.style.alignItems = 'center';
        clonedContent.style.justifyContent = 'flex-start';
        
        // Remove any aspect ratio padding that might be causing issues
        clonedContent.style.paddingBottom = '0';
        
        // Add the cloned content to the fixed container
        fixedContainer.appendChild(clonedContent);
        
        // Wait a bit for the DOM to update
        setTimeout(() => {
            html2canvas(fixedContainer, {
                scale: 2, // Higher quality
                useCORS: true,
                allowTaint: true,
                backgroundColor: 'white',
                windowWidth: fixedContainer.offsetWidth,
                windowHeight: fixedContainer.offsetHeight,
                x: 0,
                y: 0,
                logging: false
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png', 1.0);
                
                // Use jsPDF from window object if available
                const jsPDF = window.jsPDF || (window.jspdf && window.jspdf.jsPDF);
                
                if (!jsPDF) {
                    throw new Error('jsPDF not available');
                }
                
                // Create A4 landscape PDF
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4'
                });
                
                // A4 dimensions in mm (landscape)
                const pdfWidth = 297;
                const pdfHeight = 210;
                
                // Add image to fill the entire page with minimal margins
                pdf.addImage(imgData, 'PNG', 5, 5, pdfWidth - 10, pdfHeight - 10);
                pdf.save(`${currentCertificateType}-certificate.pdf`);
                
                // Remove loading indicator and cleanup
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                document.body.removeChild(fixedContainer);
            }).catch(error => {
                console.error('Error generating PDF:', error);
                // Remove loading indicator and cleanup
                if (document.body.contains(loadingIndicator)) {
                    document.body.removeChild(loadingIndicator);
                }
                if (document.body.contains(fixedContainer)) {
                    document.body.removeChild(fixedContainer);
                }
                fallbackDownload();
            });
        }, 200); // Give extra time for fonts to load
    } catch (error) {
        console.error('Error in downloadCertificateAsPDF:', error);
        fallbackDownload();
    }
}

// Print certificate
function printCertificate() {
    const printWindow = window.open('', '_blank');
    const certificateContainer = document.querySelector('.certificate-container');
    
    // Create a clone of the certificate content
    const certificateClone = certificateContainer.cloneNode(true);
    
    // Make sure all images are loaded before printing
    const images = certificateClone.querySelectorAll('img');
    let imagesLoaded = 0;
    const totalImages = images.length;
    
    printWindow.document.write(`
        <html>
            <head>
                <title>Print Certificate</title>
                <style>
                    @page {
                        size: landscape;
                        margin: 5mm;
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
                        width: 100%;
                        max-width: 1000px;
                        margin: 0 auto;
                        border: 5px solid #ddd;
                        box-sizing: border-box;
                        background-color: white;
                        overflow: hidden; /* Prevent content from overflowing */
                    }
                    .certificate-content {
                        padding: 20px 40px 40px 40px;
                        background-color: #fff;
                        background-image: url('certificate-bg.jpg');
                        background-size: cover;
                        background-position: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        text-align: center;
                        min-height: 650px; /* Slightly reduced to fit better on print */
                    }
                    .certificate-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 20px;
                        padding-bottom: 15px;
                        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
                    }
                    .institute-logo, .user-photo {
                        width: 100px;
                        height: 100px;
                        overflow: hidden;
                        border-radius: 5px;
                        background-color: rgba(255, 255, 255, 0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .institute-logo img, .user-photo img {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    }
                    .institute-name {
                        font-size: 24px;
                        font-weight: bold;
                        margin: 0;
                        text-align: center;
                        flex-grow: 1;
                        padding: 0 20px;
                        color: #4a6baf;
                    }
                    .certificate-title {
                        font-size: 36px;
                        margin-bottom: 20px;
                        color: #333;
                        font-family: 'Times New Roman', Times, serif;
                    }
                    .certificate-body {
                        font-size: 18px;
                        line-height: 1.8;
                        margin-bottom: 30px;
                    }
                    .certificate-signature {
                        margin-top: 40px;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }
                    .signature-block {
                        text-align: center;
                        width: 45%;
                    }
                    .signature-line {
                        width: 100%;
                        height: 1px;
                        background-color: #333;
                        margin-bottom: 10px;
                    }
                    .download-options {
                        display: none; /* Hide download buttons in print view */
                    }
                    @media print {
                        body {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                        .certificate-container {
                            border: none; /* Remove border for printing */
                            max-height: 100%;
                            page-break-inside: avoid;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="certificate-container">
                    ${certificateContainer.innerHTML}
                </div>
                <script>
                    // Wait for all images to load before printing
                    const images = document.querySelectorAll('img');
                    let imagesLoaded = 0;
                    
                    if (images.length > 0) {
                        images.forEach(img => {
                            if (img.complete) {
                                imageDone();
                            } else {
                                img.addEventListener('load', imageDone);
                                img.addEventListener('error', imageDone);
                            }
                        });
                    } else {
                        printAndClose();
                    }
                    
                    function imageDone() {
                        imagesLoaded++;
                        if (imagesLoaded === ${totalImages}) {
                            printAndClose();
                        }
                    }
                    
                    function printAndClose() {
                        setTimeout(function() {
                            window.print();
                            window.setTimeout(function() {
                                window.close();
                            }, 500);
                        }, 500);
                    }
                </script>
            </body>
        </html>
    `);
    
    printWindow.document.close();
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Make functions available globally
window.downloadCertificateAsImage = downloadCertificateAsImage;
window.downloadCertificateAsPDF = downloadCertificateAsPDF;
window.printCertificate = printCertificate; 
