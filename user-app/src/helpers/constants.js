import {
    FaStethoscope, // General Consultation
    FaFemale, // Gynecology
    FaHeartbeat, // Internal Medicine
    FaChild, // Pediatrics
    FaTooth, // Dental Care
    FaBone, // Orthopedic
    FaHeart, // Cardiology
    FaBrain, // Neurology | Psychiatry
    FaEye, // Ophthalmology
    FaXRay // Radiology
} from "react-icons/fa";

export const links = [
    {
        path: "/",
        label: "home"
    },
    {
        path: "/booking-appointment",
        label: "booking"
    },
    {
        path: "/doctors",
        label: "doctors"
    },
    {
        path: "/departments",
        label: "departments"
    },
    {
        path: "/contact",
        label: "contact"
    }
]


export const departments = [
    {
        "name": "General Consultation",
        "icon": FaStethoscope,
        "description": "Receive personalized advice and care for all your general health concerns from experienced professionals.",
        "largeDescription": "Our General Consultation department offers comprehensive health assessments and consultations for a wide range of medical issues. Whether you need routine checkups, health advice, or an initial evaluation of symptoms, our skilled doctors are here to provide thorough and attentive care. We focus on understanding your unique health needs and providing effective solutions to keep you and your family healthy.",
        "contactNumber": "+123456789",
        "email": "consultation@example.com",
        "services": ["Checkups", "Health Assessments", "Preventive Care"],
        "location": "Building A, Room 101",
        "isActive": true
    },
    {
        "name": "Gynecology",
        "icon": FaFemale,
        "description": "Comprehensive care for women's health, from routine checkups to specialized treatments.",
        "largeDescription": "Our Gynecology department provides expert care tailored to the unique needs of women at all stages of life. From routine gynecological exams and prenatal care to specialized treatments for various conditions, our experienced gynecologists are committed to offering compassionate and high-quality care. We focus on preventive care, patient education, and personalized treatment plans to ensure optimal health and well-being.",
        "contactNumber": "+123456789",
        "email": "gynecology@example.com",
        "services": ["Routine Checkups", "Prenatal Care", "Surgical Procedures"],
        "location": "Building B, Room 202",
        "isActive": true
    },
    {
        "name": "Internal Medicine",
        "icon": FaHeartbeat,
        "description": "Expert diagnosis and management of a wide range of complex medical conditions.",
        "largeDescription": "Our Internal Medicine department specializes in the prevention, diagnosis, and treatment of complex medical conditions affecting adults. Our internists are highly skilled in managing chronic illnesses, coordinating care for multiple conditions, and providing comprehensive health evaluations. We aim to deliver personalized, evidence-based care to help you achieve and maintain optimal health.",
        "contactNumber": "+123456789",
        "email": "internalmedicine@example.com",
        "services": ["Chronic Disease Management", "Preventive Health", "Health Assessments"],
        "location": "Building C, Room 303",
        "isActive": true
    },
    {
        "name": "Pediatrics",
        "icon": FaChild,
        "description": "Dedicated to the health and well-being of children, from infancy through adolescence.",
        "largeDescription": "Our Pediatrics department provides specialized care for children from birth through adolescence. We offer routine wellness exams, vaccinations, and treatment for common childhood illnesses. Our pediatricians are dedicated to ensuring the growth, development, and overall health of your child through personalized care and a compassionate approach.",
        "contactNumber": "+123456789",
        "email": "pediatrics@example.com",
        "services": ["Wellness Exams", "Vaccinations", "Acute Illnesses"],
        "location": "Building D, Room 404",
        "isActive": true
    },
    {
        "name": "Dental Care",
        "icon": FaTooth,
        "description": "Maintain a healthy smile with our full range of preventive, restorative, and cosmetic dental services.",
        "largeDescription": "Our Dental Care department offers a comprehensive range of services to maintain and enhance your oral health. From preventive care like cleanings and exams to restorative treatments such as fillings and crowns, we are committed to providing high-quality dental care. We also offer cosmetic services to help you achieve a beautiful smile. Our skilled team focuses on ensuring a comfortable and positive experience for every patient.",
        "contactNumber": "+123456789",
        "email": "dentalcare@example.com",
        "services": ["Cleanings", "Fillings", "Cosmetic Procedures"],
        "location": "Building E, Room 505",
        "isActive": true
    },
    {
        "name": "Orthopedic",
        "icon": FaBone,
        "description": "Specialized care for bones, joints, and muscles, helping you stay active and pain-free.",
        "largeDescription": "Our Orthopedic department provides expert care for conditions related to bones, joints, and muscles. Whether you’re dealing with an acute injury, chronic pain, or need surgical intervention, our orthopedic specialists are here to help. We offer a range of services from diagnostic evaluations to advanced surgical procedures, all aimed at improving mobility and quality of life.",
        "contactNumber": "+123456789",
        "email": "orthopedic@example.com",
        "services": ["Injury Treatment", "Joint Replacement", "Pain Management"],
        "location": "Building F, Room 606",
        "isActive": true
    },
    {
        "name": "Cardiology",
        "icon": FaHeart,
        "description": "Advanced heart care, offering everything from preventive screenings to complex interventions.",
        "largeDescription": "Our Cardiology department provides comprehensive care for all aspects of heart health. From preventive screenings and diagnostics to treatment for complex cardiac conditions, our cardiologists use the latest technology and techniques to manage your heart health. We are dedicated to helping you maintain a healthy heart through personalized care and advanced medical solutions.",
        "contactNumber": "+123456789",
        "email": "cardiology@example.com",
        "services": ["Cardiac Screenings", "Interventions", "Heart Disease Management"],
        "location": "Building G, Room 707",
        "isActive": true
    },
    {
        "name": "Neurology | Psychiatry",
        "icon": FaBrain,
        "description": "Comprehensive care for the mind and nervous system, addressing both neurological and mental health conditions.",
        "largeDescription": "Our Neurology and Psychiatry departments work together to provide holistic care for both neurological disorders and mental health conditions. We offer diagnostic services, therapeutic treatments, and ongoing management for a wide range of conditions affecting the brain and nervous system, as well as mental health disorders. Our goal is to support your overall well-being through expert care and compassionate treatment.",
        "contactNumber": "+123456789",
        "email": "neurologypsychiatry@example.com",
        "services": ["Neurological Assessments", "Mental Health Counseling", "Therapeutic Interventions"],
        "location": "Building H, Room 808",
        "isActive": true
    },
    {
        "name": "Ophthalmology",
        "icon": FaEye,
        "description": "Protect and enhance your vision with expert eye care, from routine exams to advanced surgeries.",
        "largeDescription": "Our Ophthalmology department provides comprehensive eye care services, including routine eye exams, treatment for various eye conditions, and advanced surgical procedures. Our ophthalmologists are dedicated to preserving and enhancing your vision with the latest technologies and personalized care. Whether you need a simple eye exam or complex surgery, we are here to ensure your visual health is at its best.",
        "contactNumber": "+123456789",
        "email": "ophthalmology@example.com",
        "services": ["Eye Exams", "Surgical Procedures", "Vision Correction"],
        "location": "Building I, Room 909",
        "isActive": true
    },
    {
        "name": "Radiology",
        "icon": FaXRay,
        "description": "Accurate imaging and diagnostic services to support your treatment plan and overall health.",
        "largeDescription": "Our Radiology department offers a full range of imaging services, including X-rays, CT scans, MRIs, and ultrasounds. Our advanced diagnostic technology helps in accurate detection and monitoring of various medical conditions. We provide detailed imaging reports to support your treatment plan and work closely with your healthcare team to ensure comprehensive care and effective results.",
        "contactNumber": "+123456789",
        "email": "radiology@example.com",
        "services": ["X-rays", "CT Scans", "MRIs", "Ultrasounds"],
        "location": "Building J, Room 1010",
        "isActive": true
    }
];