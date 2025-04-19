import aadhaarLogo from '@/assets/images/aadhaar.png';
import ndlLogo from '@/assets/images/ndl.png';

export const digitalInitiativesData = {
  aadhaar: {
    title: "Aadhaar",
    logo: aadhaarLogo,
    overview:
      "Aadhaar is India's biometric digital identity system that provides a unique 12-digit identity number to residents based on their biometric and demographic data.",
    launchDate: "2010-09-29",
    userBase: "1.4B+",
    transactions: "₹10T+",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Biometric authentication (fingerprint, iris scan)",
      "Unique identity verification",
      "e-KYC services",
      "Digital signature capability",
      "Mobile number linking"
    ],
    implementation: [
      "Centralized biometric database",
      "API integration with public/private services",
      "Multi-modal authentication options",
      "Secure QR code system",
      "Offline verification available"
    ],
    detailedInfo: `
      Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI) to residents of India, based on their biometric and demographic data. Launched on 28 January 2009, Aadhaar is the world’s largest biometric ID system and has been voluntarily adopted by over 138.3 crore residents as of October 2024. The program is governed by the Ministry of Electronics and Information Technology and administered by UIDAI, a statutory authority established under the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016. Aadhaar aims to provide a universal identity infrastructure that eliminates duplicate and fake identities, and ensures easier and more efficient access to government services and benefits.

The Aadhaar number is linked to the individual’s photograph, ten fingerprints, and two iris scans, all stored in a centralized and secure database. It serves as a proof of identity and address, but not as proof of citizenship. Aadhaar is widely used for Direct Benefit Transfers (DBT), opening bank accounts, accessing welfare schemes, insurance, pension services, and more. While first-time enrollment is free, demographic updates cost ₹50 and biometric updates cost ₹100. Aadhaar is valid for a lifetime and can be verified online using the Aadhaar Verification Service provided by UIDAI.

UIDAI was originally formed in 2009 as an attached office under the Planning Commission and was granted statutory status in 2016. It is responsible for issuing Aadhaar numbers, maintaining and updating the Aadhaar database, and managing the authentication infrastructure. The UIDAI operates data centers in Bengaluru and Manesar to securely manage the Aadhaar database across over 7,000 servers. Aadhaar numbers are randomly generated and are designed to prevent profiling or misuse of personal data.

Despite its wide adoption and utility, Aadhaar has been at the center of legal and privacy debates in India. In 2017, the Supreme Court of India declared the right to privacy as a fundamental right, and in a 2018 judgment, upheld the constitutionality of Aadhaar while ruling that it cannot be made mandatory for services like opening bank accounts, obtaining mobile connections, or school admissions. Various civil rights groups have raised concerns about surveillance and exclusion, especially in cases where welfare delivery is linked to Aadhaar.

Nonetheless, Aadhaar remains a cornerstone of India’s digital governance efforts. It plays a key role in streamlining the delivery of government services, enhancing transparency, and reducing fraud. It is used in a wide range of applications such as LPG subsidy distribution, public distribution systems, pensions, e-KYC, digital lockers, and more. Residents who are already registered under the National Population Register are not required to re-enroll for Aadhaar. Overall, Aadhaar continues to evolve as a foundational identity tool, enabling more inclusive and efficient public service delivery across the country.
    `,
    economicImpact: `
      • ₹1.7 trillion saved by eliminating duplicate beneficiaries (World Bank)
      • ₹5.3 trillion enabled via Direct Benefit Transfer (DBT)
      • 90% reduction in KYC costs
      • 25B+ authentications annually
      • 500M+ bank accounts linked via Jan Dhan Yojana
    `,
    leadership: [
      {
        name: "Bhuvnesh Kumar",
        position: "CEO, UIDAI",
        initials: "SG"
      },
      {
        name: "Neelkanth Mishra",
        position: "Chief Architect",
        initials: "PV"
      }
    ],
    contact: {
      email: "help@uidai.gov.in",
      helpline: "1947",
      website: "https://uidai.gov.in"
    }
  },

  upi: {
    title: "UPI",
    logo: "/images/image1.png",
    overview:
      "Unified Payments Interface (UPI) is India's real-time payment system that enables instant money transfers between bank accounts through mobile devices.",
    launchDate: "2016-04-11",
    userBase: "300M+",
    transactions: "₹100T+ (annual)",
    statesCovered: 36,
    impact: "Transformational",
    features: [
      "Instant bank-to-bank transfers",
      "24/7 availability",
      "No transaction fees",
      "QR code payments",
      "Multiple bank account linking"
    ],
    implementation: [
      "NPCI-operated infrastructure",
      "Interoperable between all banks",
      "Two-factor authentication",
      "Virtual Payment Address system",
      "Merchant API integration"
    ],
    detailedInfo: `
      Unified Payments Interface (UPI) is a real-time payment system and protocol developed by the National Payments Corporation of India (NPCI) in 2016. Designed to facilitate instant inter-bank transactions, UPI enables both peer-to-peer (P2P) and person-to-merchant (P2M) payments directly from mobile devices. It operates on top of the Immediate Payment Service (IMPS) and functions as an open-source application programming interface (API) regulated by the Reserve Bank of India (RBI). Users must register their mobile number with their bank to use UPI, and transactions can be initiated using a recipient’s UPI ID, ensuring quick and secure money transfers. Indian banks began releasing their UPI-enabled apps on Google Play starting from 25 August 2016.

UPI has played a pivotal role in transforming India’s digital payment ecosystem and has positioned the country as a global leader in instant payments, accounting for 46% of all real-time payment transactions worldwide in 2022. By November 2022, UPI had surpassed 300 million monthly active users, reflecting its widespread adoption. According to NPCI data, 12.20 billion UPI transactions worth ₹18.41 lakh crore (approximately $222.17 billion) were processed in January 2024 alone—a 41.72% increase in value from the previous year. For the full year 2023, UPI transactions in India reached a staggering ₹182 lakh crore (about $2.2 trillion), marking a 59% increase in volume and a 45% increase in value compared to 2022. In July 2024, the average UPI transaction value was ₹1,430, with the system handling over 5,390 transactions per second.

The success of UPI is not just financial but also symbolic, emerging as a soft power tool and one of India’s most impactful midtech financial innovations. It demonstrates the strength of scalable, inclusive digital infrastructure and has laid the foundation for replicable financial technology across emerging economies.
    `,
    economicImpact: `
      • ₹139 trillion in annual transaction value (FY 2023-24)
      • Over 11 billion monthly transactions
      • Major driver for India's $3T digital economy
      • Enabled financial access in rural areas
      • Boosted gig economy and digital entrepreneurship
    `,
    leadership: [
      {
        name: "Dilip Asbe",
        position: "MD & CEO, NPCI",
        initials: "DA"
      },
      {
        name: "--(no one)",
        position: "COO, NPCI",
        initials: "PR"
      }
    ],
    contact: {
      email: "support@npci.org.in",
      helpline: "1800-123-123",
      website: "https://www.npci.org.in"
    }
  },

  "api-setu": {
    title: "API Setu",
    logo: "/images/apisetu.png",
    overview:
      "National API gateway that enables seamless integration between different government services and applications with standardized APIs.",
    launchDate: "2020-03-15",
    userBase: "50M+",
    transactions: "500M+ API calls",
    statesCovered: 36,
    impact: "High",
    features: [
      "200+ government APIs",
      "Developer-friendly documentation",
      "OAuth 2.0 security",
      "Rate limiting",
      "Analytics dashboard"
    ],
    implementation: [
      "Cloud-native architecture",
      "Kubernetes-based scaling",
      "API versioning support",
      "Developer sandbox",
      "Automated monitoring"
    ],
    detailedInfo: `
      AAPI Setu is a government-backed API (Application Programming Interface) platform launched under the Digital India initiative by the Ministry of Electronics and Information Technology (MeitY) and maintained by the National Informatics Centre (NIC). It acts as a centralized API gateway that enables secure and seamless integration between government departments, public services, and third-party service providers.

Launched to promote data exchange and service delivery in a standardized, interoperable manner, API Setu serves as the digital backbone for building citizen-centric and developer-friendly services across the country. By using APIs, organizations can fetch, verify, and validate data from various government sources such as Aadhaar, PAN, Digilocker, Bharat BillPay, GSTN, and more—without the need for paper-based processes.

The platform promotes:

Ease of Doing Business by simplifying onboarding of APIs for government services
Efficiency and transparency in service delivery
Reusability of APIs, reducing redundant integrations across departments
Scalability and security, with compliance to government data privacy policies
API Setu powers multiple flagship initiatives like DigiLocker, Aadhaar eKYC, eDistrict services, and educational verifications. It also supports private developers and startups through a sandbox environment for testing integrations.
As of 2024, API Setu hosts hundreds of APIs, with thousands of applications already leveraging its gateway to build smarter, faster, and more reliable services—strengthening India’s vision of "Minimum Government, Maximum Governance.
    `,
    economicImpact: `
      • 500M+ API calls served
      • Reduced integration time for developers by 60%
      • Enabled real-time verification for services like vaccination, PAN, driving licenses, etc.
      • Cost savings by reducing manual integration workflows
      • Empowered 100+ digital-first citizen services
    `,
    leadership: [
      {
        name: "Dr. Pramod Varma",
        position: "Chief Architect",
        initials: "PV"
      },
      {
        name: "Rajendra Kumar",
        position: "Additional Secretary, MeitY",
        initials: "RK"
      }
    ],
    contact: {
      email: "support@api-setu.gov.in",
      helpline: "1800-111-222",
      website: "https://api-setu.gov.in"
    }
  },

  "e-courts": {
    title: "e-Courts",
    logo: "/images/ecourts.png",
    overview: "Digital infrastructure for judiciary system modernization with case management and virtual court hearings.",
    launchDate: "2013-08-07",
    userBase: "30M+",
    transactions: "500M+ cases",
    statesCovered: 36,
    impact: "High",
    features: [
      "Case status tracking",
      "Digital court records",
      "Virtual hearings",
      "E-filing system",
      "Judgment search"
    ],
    implementation: [
      "National Judicial Data Grid",
      "Video conferencing infrastructure",
      "Document digitization",
      "Mobile app access",
      "Multi-language support"
    ],
    detailedInfo: `
      The e-Courts project is a major e-Governance initiative launched by the Government of India to digitally empower the Indian judiciary through the use of Information and Communication Technology (ICT). Conceived in 2005 by the e-Committee of the Supreme Court of India, the project aims to make the justice delivery system more accessible, affordable, transparent, and efficient for all citizens. Under Phase I, the government approved the computerization of 14,249 district and subordinate courts by March 2014, with a total budget of ₹935 crore. Phase II, approved in January 2014, further expanded the scope by including over 8,000 new courts, legal service authority offices, and judicial academies. Key objectives include enhanced hardware infrastructure, connectivity to the National Judicial Data Grid (NJDG), citizen-centric services like centralized filing centers and touchscreen kiosks, and the integration of e-Filing, e-Payment, mobile applications, and document digitization. The project also focuses on performance improvement through process re-engineering and the use of handheld devices for better service delivery. In line with this vision, the High Court of Kerala became one of the early implementers by launching e-Courts and introducing SMS-based notifications for case-related updates in 2014. Overall, the e-Courts project represents a significant step toward modernizing the Indian judicial system and ensuring efficient and timely access to justice.
    `,
    economicImpact: `
      • 18,000+ courts computerized
      • 200M+ cases digitized
      • 60% reduction in case disposal time
      • ₹500B+ saved in litigation costs
      • 2M+ virtual hearings conducted monthly
    `,
    leadership: [
      {
        name: "Justice D.Y. Chandrachud",
        position: "Chairperson, e-Committee",
        initials: "DC"
      },
      {
        name: "Dr. A.K. Patnaik",
        position: "Project Coordinator",
        initials: "AP"
      }
    ],
    contact: {
      email: "support@e-courts.gov.in",
      helpline: "1800-111-333",
      website: "https://e-courts.gov.in"
    }
  },
  
  "sidh": {
    title: "SIDH",
    logo: "/images/sidh.png",
    overview: "Secure Identity Document Hub provides a framework for secure storage and sharing of digital identity documents.",
    launchDate: "2023-09-01",
    userBase: "200M+",
    transactions: "1B+ verifications",
    statesCovered: 36,
    impact: "High",
    features: [
      "Document encryption",
      "Selective disclosure",
      "Blockchain-based verification",
      "Consent management",
      "Audit trails"
    ],
    implementation: [
      "Zero-knowledge proof architecture",
      "Interoperable with Aadhaar",
      "Mobile SDKs",
      "GDPR-compliant",
      "Offline mode support"
    ],
    detailedInfo: `
      ​The Skill India Digital Hub (SIDH) is a comprehensive digital platform developed by the Ministry of Skill Development and Entrepreneurship (MSDE) to integrate and enhance India's skilling, education, employment, and entrepreneurship landscape. Launched in September 2023, SIDH serves as a centralized ecosystem offering access to over 7,000 skill development courses across various sectors, including emerging fields like Artificial Intelligence, Machine Learning, Data Analytics, and Cybersecurity. The platform is designed with a mobile-first approach, ensuring accessibility for users across the country. SIDH provides personalized learning experiences, allowing users to create profiles, receive tailored course recommendations, and generate QR code-enabled digital CVs. It also connects learners with job opportunities, apprenticeships, and entrepreneurship support, thereby bridging the gap between skill development and employment. As of June 2024, SIDH has registered approximately 88 lakh candidates, with 9.59 lakh mobile app downloads and 7.63 lakh enrollments in online courses. The platform's integration with national initiatives like UIDAI, e-Shram, NCS, and DigiLocker further enhances its utility by providing portable verified credentials and facilitating seamless access to various government schemes. SIDH's inclusive approach ensures that individuals from diverse backgrounds, including senior citizens, can benefit from its resources, promoting lifelong learning and contributing to India's goal of a future-ready workforce
    `,
    economicImpact: `
      • 1B+ document verifications processed
      • 80% reduction in document fraud
      • ₹50B+ saved in verification costs
      • 200+ integrated services
      • 30M+ monthly active users
    `,
    leadership: [
      {
        name: "Dr. Ajay Kumar",
        position: "IAS, MeitY Secretary",
        initials: "AK"
      },
      {
        name: "J. Satyanarayana",
        position: "Former Chairman, UIDAI",
        initials: "JS"
      }
    ],
    contact: {
      email: "support@sidh.gov.in",
      helpline: "1800-111-444",
      website: "https://sidh.gov.in"
    }
  },
  
  "e-office": {
    title: "e-Office",
    logo: "/images/eoffice.png",
    overview: "Digital workplace solution for government offices enabling paperless file management and faster decision making.",
    launchDate: "2020-06-15",
    userBase: "5M+",
    transactions: "100M+ files",
    statesCovered: 36,
    impact: "High",
    features: [
      "Electronic file management",
      "Digital signatures",
      "Workflow automation",
      "Document versioning",
      "Role-based access"
    ],
    implementation: [
      "On-premise and cloud options",
      "Integration with DigiLocker",
      "Mobile app access",
      "Analytics dashboard",
      "Disaster recovery"
    ],
    detailedInfo: `
      e-Office is a flagship mission mode project under the **National e-Governance Plan (NeGP)**, developed by the **National Informatics Centre (NIC)**, Government of India. It aims to **improve efficiency, transparency, and accountability** in government functioning by transitioning from a traditional paper-based office to an **automated, digital workplace**. The e-Office platform enables digital file handling, document tracking, file movement, collaboration, and records management in a secure environment.

Launched with the goal of minimizing physical files, the system supports **workflow automation, digital signatures, electronic file storage, and real-time monitoring** of file processing. It comprises several modules including **File Management System (eFile)**, **Knowledge Management System (KMS)**, **Collaboration & Messaging Services (CMS)**, and **Personnel Information Management System (PIMS)**. By promoting a paperless environment, e-Office reduces processing delays, enhances productivity, and supports the broader **Digital India initiative**.

As of now, e-Office has been implemented across numerous ministries, departments, and public sector units at the central and state levels. The adoption of e-Office has significantly contributed to better governance by ensuring quick decision-making, easy file retrieval, and improved service delivery to citizens.
    `,
    economicImpact: `
      • 100M+ files processed digitally
      • 80% reduction in file processing time
      • ₹10B+ saved in paper and storage costs
      • 500+ government departments onboarded
      • 24/7 access to files from anywhere
    `,
    leadership: [
      {
        name: "Shri S.N. Tripathi",
        position: "Director General, NIC",
        initials: "ST"
      },
      {
        name: "Neeta Verma",
        position: "Former DG, NIC",
        initials: "NV"
      }
    ],
    contact: {
      email: "support@eoffice.gov.in",
      helpline: "1800-111-555",
      website: "https://eoffice.gov.in"
    }
  },
  
  "aarogya-setu": {
    title: "Aarogya Setu",
    logo: "/images/argyasetu.png",
    overview: "COVID-19 contact tracing application that uses Bluetooth and GPS to alert users about potential infection risks.",
    launchDate: "2020-04-02",
    userBase: "200M+",
    transactions: "1B+ checks",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Contact tracing",
      "Self-assessment tool",
      "Vaccination status",
      "Hotspot alerts",
      "Telemedicine integration"
    ],
    implementation: [
      "Privacy-first design",
      "Open API framework",
      "GPS/Bluetooth hybrid",
      "Multi-language support",
      "Accessibility features"
    ],
    detailedInfo: `
      Aarogya Setu is a mobile application developed by the Government of India to help with COVID-19 contact tracing, symptom self-assessment, and risk alerting. Launched in April 2020, the app quickly gained popularity, becoming the world’s fastest-growing mobile application by crossing 100 million downloads within 40 days. It provides features such as User Status (risk level based on contact tracing), Self-Assessment, COVID-19 case updates, E-pass integration, and Bluetooth-based contact history. The app uses Bluetooth and GPS to alert users if they have come in proximity to infected individuals, displaying risk levels within radii of up to 10 km. Aarogya Setu was also integrated with the Co-WIN platform, allowing users to register for COVID-19 vaccinations. Initially made mandatory for government and private sector employees, the app raised privacy and data security concerns, especially regarding access to users’ personal and location data. In response, the government released the app’s Android source code on GitHub, initiated a bug bounty program, and clarified that sensitive data would be anonymized and deleted within 45 to 60 days. Despite some criticism, Aarogya Setu played a vital role in India’s digital public health response to the pandemic.
    `,
    economicImpact: `
      • 200M+ downloads during pandemic
      • 1B+ self-assessments conducted
      • 50M+ potential exposures alerted
      • ₹500B+ economic value in pandemic management
      • Integrated with vaccination drive
    `,
    leadership: [
      {
        name: "Shri R.S. Sharma",
        position: "CEO, National Health Authority",
        initials: "RS"
      },
      {
        name: "Dr. Vinod Paul",
        position: "Member, NITI Aayog",
        initials: "VP"
      }
    ],
    contact: {
      email: "support@aarogyasetu.gov.in",
      helpline: "1921",
      website: "https://aarogyasetu.gov.in"
    }
  },
  
  "e-sanjeevani": {
    title: "eSanjeevani",
    logo: "/images/sanjeevani.png",
    overview: "World's largest telemedicine platform providing remote healthcare services to patients across India.",
    launchDate: "2021-04-13",
    userBase: "100M+",
    transactions: "200M+ consultations",
    statesCovered: 36,
    impact: "High",
    features: [
      "Doctor-patient video consultations",
      "E-prescriptions",
      "Specialty clinics",
      "Appointment scheduling",
      "Health records access"
    ],
    implementation: [
      "Hub-and-spoke model",
      "Integration with ABHA",
      "AI-based triage",
      "Regional language support",
      "Disaster recovery"
    ],
    detailedInfo: `
      eSanjeevani is a flagship telemedicine initiative of the Government of India, developed by the Centre for Development of Advanced Computing (C-DAC) under the Ministry of Health and Family Welfare. It aims to provide **accessible, affordable, and quality healthcare** to citizens through digital consultations, especially in rural and remote areas. The platform offers two key services: **eSanjeevani AB-HWC** (doctor-to-doctor teleconsultation, linking Health & Wellness Centres with specialists) and **eSanjeevaniOPD** (patient-to-doctor teleconsultation for general citizens). Launched nationally in 2020 during the COVID-19 pandemic, it allowed people to safely consult doctors from their homes, reducing the need for physical visits and minimizing exposure risk. The system ensures **paperless and contactless consultations**, prescription generation, and follow-ups. With over **14 crore teleconsultations** conducted as of 2024, eSanjeevani has emerged as the **world’s largest government-owned telemedicine platform**, playing a crucial role in advancing digital health infrastructure in India and supporting the Ayushman Bharat Digital Mission.
    `,
    economicImpact: `
      • 200M+ teleconsultations completed
      • 80% reduction in unnecessary hospital visits
      • ₹50B+ saved in patient travel costs
      • 150,000+ doctors onboarded
      • Available in 12 regional languages
    `,
    leadership: [
      {
        name: "Dr. Harsh Vardhan",
        position: "Union Health Minister",
        initials: "HV"
      },
      {
        name: "Dr. Magesh Ethirajan",
        position: "DG, C-DAC",
        initials: "ME"
      }
    ],
    contact: {
      email: "support@esanjeevani.gov.in",
      helpline: "1800-111-666",
      website: "https://esanjeevani.gov.in"
    }
  },
  
  "poshan-tracker": {
    title: "Poshan Tracker",
    logo: "/images/poshan.png",
    overview: "Nutrition monitoring platform for women and children with real-time data for policymakers.",
    launchDate: "2021-03-01",
    userBase: "100M+",
    transactions: "500M+ records",
    statesCovered: 36,
    impact: "High",
    features: [
      "Growth monitoring",
      "Anganwadi services tracking",
      "Nutritional status",
      "Real-time reporting",
      "Benefit distribution"
    ],
    implementation: [
      "Mobile-first design",
      "Offline capability",
      "GIS integration",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      Poshan Tracker is a real-time digital platform launched by the Ministry of Women and Child Development, Government of India, under the **POSHAN Abhiyaan (Prime Minister’s Overarching Scheme for Holistic Nutrition)**. It is designed to **monitor and track the delivery of nutrition services** to beneficiaries—primarily children under six years, pregnant women, lactating mothers, and adolescent girls—through Anganwadi Centres across the country. The platform enables **real-time data entry** by Anganwadi workers using mobile devices, helping in **efficient service delivery**, **growth monitoring**, **distribution of supplementary nutrition**, and **health check-up tracking**.

It also aids in **data-driven decision-making** and provides visibility into the functioning of over 13.9 lakh Anganwadi Centres. The system supports geo-tagging, Aadhaar-based authentication, and dashboards for performance monitoring at various administrative levels. **Poshan Tracker** is part of India’s push toward strengthening **digital governance in nutrition** and ensuring transparency and accountability in its effort to combat **malnutrition and child undernutrition**.
    `,
    economicImpact: `
      • 500M+ nutrition records collected
      • 30% improvement in service delivery
      • ₹20B+ savings through targeted interventions
      • 1.4M Anganwadi centers connected
      • 100M+ beneficiaries tracked
    `,
    leadership: [
      {
        name: "Smt. Smriti Irani",
        position: "Minister, WCD",
        initials: "SI"
      },
      {
        name: "Indevar Pandey",
        position: "Secretary, WCD",
        initials: "IP"
      }
    ],
    contact: {
      email: "support@poshantracker.gov.in",
      helpline: "1800-111-777",
      website: "https://poshantracker.gov.in"
    }
  },
  
  "co-win": {
    title: "Co-WIN",
    logo: "/images/cowin.png",
    overview: "Digital backbone for India's COVID-19 vaccination drive with end-to-end management of registration and certification.",
    launchDate: "2021-01-16",
    userBase: "1B+",
    transactions: "2B+ vaccinations",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Vaccine registration",
      "Certificate download",
      "Appointment scheduling",
      "Dose tracking",
      "International recognition"
    ],
    implementation: [
      "Distributed architecture",
      "API-first approach",
      "QR code certificates",
      "Multi-language support",
      "Disaster recovery"
    ],
    detailedInfo: `
      Co-WIN (COVID Vaccine Intelligence Network) is a digital platform developed by the Government of India to manage and streamline the COVID-19 vaccination drive across the country. Launched in January 2021, Co-WIN played a crucial role in ensuring efficient registration, scheduling, tracking, and certification of COVID-19 vaccinations for millions of Indian citizens.

The platform allowed users to register themselves and others for vaccination, choose a vaccination center, book an appointment, and download their vaccination certificate. It supported multilingual access, integration with the Aarogya Setu and UMANG apps, and provided real-time data on vaccine availability, coverage, and performance.

Co-WIN was praised for its scalability, handling millions of registrations and vaccinations daily. It also facilitated the issuance of internationally recognized digital vaccine certificates, helping ease global travel during the pandemic. With a strong focus on transparency and accessibility, Co-WIN became a global model, with several countries showing interest in adopting a similar system.

As India's vaccination efforts expanded, Co-WIN evolved into a comprehensive public health digital infrastructure, potentially usable for future immunization programs and health initiatives beyond COVID-19.
    `,
    economicImpact: `
      • 2B+ vaccine doses administered
      • 1B+ digital certificates issued
      • ₹100B+ saved through efficient logistics
      • 50,000+ vaccination centers connected
      • Recognized by WHO as global best practice
    `,
    leadership: [
      {
        name: "Dr. R.S. Sharma",
        position: "Chairman, Co-WIN",
        initials: "RS"
      },
      {
        name: "Dr. P.D. Vaghela",
        position: "Chairman, TRAI",
        initials: "PV"
      }
    ],
    contact: {
      email: "support@cowin.gov.in",
      helpline: "1075",
      website: "https://cowin.gov.in"
    }
  },
  
  "diksha": {
    title: "DIKSHA",
    logo: "/images/diksha.png",
    overview: "National e-learning platform providing e-content for teachers and students in multiple languages.",
    launchDate: "2017-09-05",
    userBase: "25M+",
    transactions: "500K+ courses",
    statesCovered: 36,
    impact: "High",
    features: [
      "Interactive content",
      "Teacher training",
      "Student assessments",
      "QR-coded textbooks",
      "Accessibility features"
    ],
    implementation: [
      "Open-source platform",
      "State-specific instances",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      DIKSHA (Digital Infrastructure for Knowledge Sharing)** is a national digital platform launched in 2017 by the Ministry of Education, Government of India, and developed by the National Council of Educational Research and Training (NCERT). It serves as a comprehensive resource hub for school education, offering a wide array of curriculum-aligned educational content, including textbooks, lesson plans, videos, assessments, and interactive materials. Accessible in over 35 Indian languages, DIKSHA caters to teachers, students, and parents across the country.

The platform supports various stakeholders in the education ecosystem. Teachers can access professional development courses, teaching aids, and assessment tools, while students benefit from interactive learning resources and practice exercises. Parents can engage with their children's learning through the platform's resources. DIKSHA's flexibility allows states, union territories, and educational boards to integrate it into their specific educational programs, tailoring content to regional needs.

Built on open-source technology, DIKSHA is part of the National Digital Education Architecture (NDEAR) and has been recognized as a Digital Public Good by the Government of India. It plays a pivotal role in initiatives like PM eVidya and the "One Nation, One Digital Platform" vision, aiming to provide equitable access to quality education nationwide. 

Users can access DIKSHA through its website or mobile application, which features QR code scanning capabilities linked to textbooks, facilitating easy access to digital content. The platform's design ensures that educational resources are available both online and offline, making it a vital tool for enhancing learning outcomes across diverse educational settings in India.
    `,
    economicImpact: `
      • 500K+ learning resources available
      • 25M+ registered users
      • 80% of schools using the platform
      • ₹10B+ savings in textbook costs
      • Available in 30+ Indian languages
    `,
    leadership: [
      {
        name: "Dr. Amarendra P. Behera",
        position: "Joint Director, NCERT",
        initials: "AB"
      },
      {
        name: "Shri Amit Khare",
        position: "Secretary, Education",
        initials: "AK"
      }
    ],
    contact: {
      email: "support@diksha.gov.in",
      helpline: "1800-111-888",
      website: "https://diksha.gov.in"
    }
  },
  
  "gem": {
    title: "GeM",
    logo: "/images/gem.png",
    overview: "Government e-Marketplace for transparent public procurement with ₹4T+ annual transactions.",
    launchDate: "2016-08-09",
    userBase: "2M+ sellers",
    transactions: "₹4T+ annually",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "End-to-end procurement",
      "Reverse auctions",
      "Quality control",
      "Payment gateway",
      "Analytics dashboard"
    ],
    implementation: [
      "Cloud-native architecture",
      "AI-based recommendations",
      "Blockchain for contracts",
      "Mobile app access",
      "API integration"
    ],
    detailedInfo: `
      Government e-Marketplace (GeM) is India's national public procurement portal, launched on August 9, 2016, by the Ministry of Commerce and Industry. It serves as a unified online platform for government departments, ministries, public sector units, and other agencies to procure goods and services efficiently. GeM aims to enhance transparency, efficiency, and inclusiveness in public procurement by providing tools such as e-bidding, reverse e-auction, and demand aggregation. The platform is entirely paperless and cashless, supporting the 'Digital India' initiative. As of February 2023, GeM had over 66,000 buyer organizations and nearly 5.9 million sellers and service providers, including a significant number of MSMEs. It offers more than 30 lakh products across over 11,000 product categories and 278 service categories. The Ministry of Finance has mandated procurement through GeM for government entities under Rule 149 of the General Financial Rules, 2017. The platform has been recognized for its contribution to digital governance and has received awards for its innovative use of technology in public procurement.
    `,
    economicImpact: `
      • ₹4T+ annual transaction value
      • 25% average cost savings
      • 2M+ registered sellers
      • 60,000+ government buyers
      • 10,000+ product categories
    `,
    leadership: [
      {
        name: "Shri P.K. Singh",
        position: "CEO, GeM",
        initials: "PS"
      },
      {
        name: "Talleen Kumar",
        position: "Former CEO, GeM",
        initials: "TK"
      }
    ],
    contact: {
      email: "support@gem.gov.in",
      helpline: "1800-111-999",
      website: "https://gem.gov.in"
    }
  },
  
  "e-hospital": {
    title: "e-Hospital",
    logo: "/images/hosptial.png",
    overview: "Open source health management information system for hospitals managing patient registration and billing.",
    launchDate: "2015-01-01",
    userBase: "50M+",
    transactions: "500M+ records",
    statesCovered: 36,
    impact: "High",
    features: [
      "Patient registration",
      "Electronic medical records",
      "Appointment scheduling",
      "Billing system",
      "Lab integration"
    ],
    implementation: [
      "ONC-certified EHR",
      "HL7/FHIR standards",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      e-Hospital is a digital initiative developed by the National Informatics Centre (NIC) under the Ministry of Electronics and Information Technology (MeitY), Government of India. It serves as a comprehensive Hospital Management Information System (HMIS) designed to streamline internal workflows and digitize various hospital functions, including patient registration, outpatient and inpatient management, laboratory services, radiology, billing, pharmacy, dietary, laundry, and operation theatre management. The platform is integrated with the Ayushman Bharat Digital Mission (ABDM), enabling patients to create and link their Ayushman Bharat Health Account (ABHA) for secure access and sharing of digital health records, such as lab reports and prescriptions. e-Hospital aims to improve healthcare delivery by providing a single interface for patients across the country, facilitating better resource allocation, and enhancing the quality of healthcare services. Hospitals can onboard the e-Hospital application through the national cloud infrastructure, with support provided for implementation, training, and technical assistance. The initiative aligns with the broader goals of the Digital India program to create a digitally empowered society and knowledge economy.
    `,
    economicImpact: `
      • 500M+ patient records digitized
      • 60% reduction in patient wait times
      • ₹5B+ savings through efficient inventory
      • 1,000+ hospitals connected
      • 50M+ patients served annually
    `,
    leadership: [
      {
        name: "Dr. V.K. Paul",
        position: "Member, NITI Aayog",
        initials: "VP"
      },
      {
        name: "Dr. R.S. Sharma",
        position: "CEO, NHA",
        initials: "RS"
      }
    ],
    contact: {
      email: "support@e-hospital.gov.in",
      helpline: "1800-111-000",
      website: "https://e-hospital.gov.in"
    }
  },
  
  "ncd-platform": {
    title: "NCD Platform",
    logo: "/images/ncd.png",
    overview: "Enables population-based screening for common Non-Communicable Diseases like diabetes and hypertension.",
    launchDate: "2024-12-17",
    userBase: "100M+",
    transactions: "500M+ screenings",
    statesCovered: 36,
    impact: "High",
    features: [
      "Risk assessment",
      "Early detection",
      "Referral system",
      "Treatment tracking",
      "Analytics dashboard"
    ],
    implementation: [
      "Mobile-first design",
      "Integration with ABHA",
      "AI-based risk scoring",
      "Regional language support",
      "API integration"
    ],
    detailedInfo: `
      The National Non-Communicable Disease (NCD) Platform is a digital health initiative developed by the Ministry of Health and Family Welfare (MoHFW), Government of India. It is designed to support the National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD), focusing on conditions such as hypertension, diabetes, and common cancers (oral, breast, and cervical).
This platform enables comprehensive management of NCDs by facilitating activities like population-based screening, diagnosis, treatment, and follow-up care. It is utilized by a range of healthcare professionals, including ASHA workers, nurses, doctors, and program managers, across various healthcare settings such as primary health centers, community health centers, and district hospitals.
Key features of the platform include the creation of electronic health records for individuals, assignment of unique personal health IDs (ABHA IDs), and integration with the Ayushman Bharat Digital Mission (ABDM). These functionalities ensure continuity of care, streamline referrals, and enhance monitoring and planning through user-friendly dashboards and standardized reporting processes.
As of the latest reports, the platform has enrolled over 480 million individuals for NCD screening and management, with more than 67 million ABHA numbers generated. It is operational in 31 states and union territories, reflecting its extensive adoption across the country. 
The National NCD Platform represents a significant step towards digitizing healthcare services in India, aiming to improve the quality and accessibility of care for non-communicable diseases nationwide.
    `,
    economicImpact: `
      • 500M+ screenings conducted
      • 20M+ early detections
      • ₹100B+ savings in treatment costs
      • 1M+ health workers trained
      • 70% coverage of at-risk population
    `,
    leadership: [
      {
        name: "Dr. Harsh Vardhan",
        position: "Union Health Minister",
        initials: "HV"
      },
      {
        name: "Dr. Balram Bhargava",
        position: "DG, ICMR",
        initials: "BB"
      }
    ],
    contact: {
      email: "support@ncdplatform.gov.in",
      helpline: "1800-111-111",
      website: "https://ncdplatform.gov.in"
    }
  },
  
  "abdm": {
    title: "ABDM",
    logo: "/images/abdm.png",
    overview: "Ayushman Bharat Digital Mission creates a national digital health ecosystem with Health ID and registries.",
    launchDate: "2021-09-27",
    userBase: "500M+",
    transactions: "1B+ records",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Health ID",
      "Healthcare Professionals Registry",
      "Health Facility Registry",
      "Consent management",
      "Data sharing"
    ],
    implementation: [
      "Federated architecture",
      "Open standards",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      The Ayushman Bharat Digital Mission (ABDM) is a flagship initiative launched by the Government of India in September 2021 to establish a comprehensive digital health infrastructure across the country. Implemented by the National Health Authority (NHA), ABDM aims to create a seamless online platform that enables interoperability of health data within the healthcare ecosystem, facilitating the creation of longitudinal electronic health records for every citizen.
A central component of ABDM is the Ayushman Bharat Health Account (ABHA), a unique 14-digit health ID that allows individuals to securely store and manage their health information digitally. As of December 2024, over 71 crore ABHA numbers have been generated, more than 45 crore health records have been linked, and over 3.5 lakh healthcare facilities have been registered under the mission. 
Press Information Bureau ABDM also encompasses the Health Facility Registry (HFR) and the Healthcare Professionals Registry (HPR), which serve as comprehensive directories of verified health facilities and professionals, respectively. These registries aim to enhance transparency and accessibility within the healthcare system.
To improve patient experience, ABDM introduced the 'Scan and Share' feature, a QR-code-based system that simplifies outpatient department (OPD) registrations, significantly reducing patient wait times. Additionally, the mission emphasizes data privacy and security, aligning with the provisions of the Digital Personal Data Protection Act, 2023, ensuring that personal health information is handled with the utmost confidentiality.
ABDM is a pivotal step towards achieving universal health coverage in India, making healthcare services more efficient, accessible, and patient-centric. For more information, you can visit the official ABDM website.
    `,
    economicImpact: `
      • 500M+ Health IDs created
      • 200K+ healthcare professionals registered
      • 50K+ health facilities onboarded
      • ₹200B+ potential annual savings
      • Foundation for $50B digital health economy
    `,
    leadership: [
      {
        name: "Dr. R.S. Sharma",
        position: "CEO, NHA",
        initials: "RS"
      },
      {
        name: "Dr. Praveen Gedam",
        position: "Mission Director",
        initials: "PG"
      }
    ],
    contact: {
      email: "support@abdm.gov.in",
      helpline: "1800-111-222",
      website: "https://abdm.gov.in"
    }
  },
  
  "bharatnet": {
    title: "BharatNet",
    logo: "/images/net.png",
    overview: "World's largest rural broadband connectivity program using optical fiber to enable e-governance services.",
    launchDate: "2011-10-25",
    userBase: "200M+",
    transactions: "1B+ connections",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "High-speed internet",
      "Last-mile connectivity",
      "Wi-Fi hotspots",
      "E-governance access",
      "Telemedicine support"
    ],
    implementation: [
      "Optical fiber network",
      "PPP model",
      "Village-level entrepreneurs",
      "Monitoring system",
      "API integration"
    ],
    detailedInfo: `
      BharatNet is India's ambitious program to connect all villages with high-speed broadband internet.
      It has created digital infrastructure that enables e-governance, education, and healthcare services in rural areas.
      The project has been a key enabler of digital inclusion across India.
    `,
    economicImpact: `
      • 600K+ km of optical fiber laid
      • 250K+ Gram Panchayats connected
      • ₹1T+ investment in digital infrastructure
      • 200M+ rural users served
      • 50% reduction in internet costs
    `,
    leadership: [
      {
        name: "Shri Anshu Prakash",
        position: "Chairman, BBNL",
        initials: "AP"
      },
      {
        name: "Shri K. Rajaraman",
        position: "Secretary, Telecom",
        initials: "KR"
      }
    ],
    contact: {
      email: "support@bharatnet.gov.in",
      helpline: "1800-111-333",
      website: "https://bharatnet.gov.in"
    }
  },
  
  "pm-wani": {
    title: "PM-WANI",
    logo: "/images/wani.png",
    overview: "Public Wi-Fi access network interface enabling small entrepreneurs to provide affordable internet services.",
    launchDate: "2020-12-09",
    userBase: "50M+",
    transactions: "500M+ connections",
    statesCovered: 36,
    impact: "High",
    features: [
      "Affordable internet",
      "Entrepreneur opportunities",
      "Pay-as-you-go",
      "National roaming",
      "Analytics dashboard"
    ],
    implementation: [
      "Interoperable framework",
      "App-based authentication",
      "Small business friendly",
      "Monitoring system",
      "API integration"
    ],
    detailedInfo: `
      PM-WANI is India's innovative public Wi-Fi framework that enables small businesses to become internet providers.
      It has created millions of Wi-Fi hotspots across India, making internet access affordable and ubiquitous.
      The program has been particularly impactful in rural and semi-urban areas.
    `,
    economicImpact: `
      • 500M+ Wi-Fi connections
      • 2M+ hotspots created
      • 50% reduction in data costs
      • 100K+ small entrepreneurs empowered
      • ₹10B+ economic value created
    `,
    leadership: [
      {
        name: "Shri K. Rajaraman",
        position: "Secretary, Telecom",
        initials: "KR"
      },
      {
        name: "Shri Anshu Prakash",
        position: "Chairman, BBNL",
        initials: "AP"
      }
    ],
    contact: {
      email: "support@pmwani.gov.in",
      helpline: "1800-111-444",
      website: "https://pmwani.gov.in"
    }
  },
  
  "cert-in": {
    title: "CERT-In",
    logo: "/images/cert.png",
    overview: "Indian Computer Emergency Response Team handles cybersecurity incidents and implements best practices.",
    launchDate: "2004-01-19",
    userBase: "10M+",
    transactions: "1M+ alerts",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Incident response",
      "Security alerts",
      "Vulnerability notes",
      "Best practices",
      "Training programs"
    ],
    implementation: [
      "24/7 monitoring",
      "Sectoral CERTs",
      "International cooperation",
      "Threat intelligence",
      "API integration"
    ],
    detailedInfo: `
      CERT-In is India's national agency for cybersecurity that protects critical infrastructure and responds to cyber threats.
      It provides early warnings about vulnerabilities and coordinates incident response across government and industry.
      The agency has been crucial in safeguarding India's digital ecosystem.
    `,
    economicImpact: `
      • 1M+ cyber incidents handled
      • 50K+ organizations protected
      • ₹100B+ potential losses prevented
      • 100+ international collaborations
      • 10K+ cybersecurity professionals trained
    `,
    leadership: [
      {
        name: "Dr. Sanjay Bahl",
        position: "Director General",
        initials: "SB"
      },
      {
        name: "Shri Rajesh Pant",
        position: "National Cyber Security Coordinator",
        initials: "RP"
      }
    ],
    contact: {
      email: "incident@cert-in.org.in",
      helpline: "1800-111-555",
      website: "https://cert-in.org.in"
    }
  },
  
  "digiyatra": {
    title: "DigiYatra",
    logo: "/images/image3.png",
    overview: "Biometric enabled seamless air travel experience using facial recognition technology at airports.",
    launchDate: "2022-12-01",
    userBase: "10M+",
    transactions: "50M+ journeys",
    statesCovered: 36,
    impact: "High",
    features: [
      "Facial recognition",
      "Contactless travel",
      "Mobile app integration",
      "Real-time updates",
      "Baggage tracking"
    ],
    implementation: [
      "Centralized identity management",
      "Airport system integration",
      "Privacy by design",
      "Mobile app access",
      "API integration"
    ],
    detailedInfo: `
      DigiYatra is transforming air travel in India with facial recognition technology for seamless airport processes.
      Passengers can check-in, security check, and board flights without physical documents using biometric authentication.
      The system has significantly improved passenger convenience and airport efficiency.
    `,
    economicImpact: `
      • 50M+ contactless journeys
      • 60% reduction in boarding time
      • ₹5B+ savings in operational costs
      • 25+ airports integrated
      • 10M+ registered users
    `,
    leadership: [
      {
        name: "Shri Rajiv Bansal",
        position: "Chairman, AAI",
        initials: "RB"
      },
      {
        name: "Shri Jyotiraditya Scindia",
        position: "Civil Aviation Minister",
        initials: "JS"
      }
    ],
    contact: {
      email: "support@digiyatra.gov.in",
      helpline: "1800-111-666",
      website: "https://digiyatra.gov.in"
    }
  },
  
  "swayam": {
    title: "SWAYAM",
    logo: "/images/swayam.png",
    overview: "Study Webs of Active Learning for Young Aspiring Minds is India's national MOOC platform offering online courses.",
    launchDate: "2017-07-09",
    userBase: "20M+",
    transactions: "500K+ courses",
    statesCovered: 36,
    impact: "High",
    features: [
      "Credit transfer",
      "Interactive content",
      "Discussion forums",
      "Self-assessment",
      "Certification"
    ],
    implementation: [
      "Cloud-based platform",
      "University partnerships",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      SWAYAM is India's national online education platform that provides free courses from school to university level.
      It offers courses from top institutions with credit transfer possibilities to formal education.
      The platform has democratized access to quality education across India.
    `,
    economicImpact: `
      • 500K+ courses offered
      • 20M+ learners enrolled
      • ₹10B+ value in free education
      • 2,000+ participating institutions
      • 30+ subject categories covered
    `,
    leadership: [
      {
        name: "Prof. Anil Sahasrabudhe",
        position: "Chairman, AICTE",
        initials: "AS"
      },
      {
        name: "Prof. Mamidala Jagadesh Kumar",
        position: "Chairman, UGC",
        initials: "MK"
      }
    ],
    contact: {
      email: "support@swayam.gov.in",
      helpline: "1800-111-777",
      website: "https://swayam.gov.in"
    }
  },
  
    // Add remaining initiatives...
    "national-digital-library": {
      title: "National Digital Library",
      logo: ndlLogo,
      overview: "Provides single-window access to millions of educational resources including books, articles and courses.",
      launchDate: "2006-11-10",
      userBase: "10M+",
      transactions: "100M+ resources",
      statesCovered: 36,
      impact: "High",
      features: [
        "Multi-format content",
        "Institutional repositories",
        "Personalized recommendations",
        "Accessibility features",
        "Offline access"
      ],
      implementation: [
        "Federated search",
        "AI-based recommendations",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        The National Digital Library (NDL) is a project under the Ministry of Education that provides access to 
        educational resources from primary to postgraduate levels. It aggregates content from over 300+ sources 
        including top Indian educational institutions and international open-access repositories.
      `,
      economicImpact: `
        • 6M+ digital books available for free access
        • 75% reduction in textbook costs for students
        • 500+ universities and institutions integrated
        • Content available in 50+ languages
        • 10M+ monthly active users
      `,
      leadership: [
        {
          name: "Prof. P.P. Chakrabarti",
          position: "Director, IIT Kharagpur",
          initials: "PC"
        },
        {
          name: "Prof. Virendra Kumar Tewari",
          position: "Former Director, IIT Kharagpur",
          initials: "VT"
        }
      ],
      contact: {
        email: "support@ndl.gov.in",
        helpline: "1800-111-888",
        website: "https://ndl.gov.in"
      }
    },
    "fastag": {
      title: "FASTag",
      logo: "/images/image2.png",
      overview: "Electronic toll collection system using RFID technology for automatic deduction without stopping vehicles.",
      launchDate: "2017-10-01",
      userBase: "50M+",
      transactions: "1B+ tolls",
      statesCovered: 36,
      impact: "High",
      features: [
        "Cashless payments",
        "Seamless travel",
        "Online recharge",
        "Transaction history",
        "Vehicle management"
      ],
      implementation: [
        "RFID technology",
        "Interoperable across plazas",
        "Mobile app integration",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        FASTag is an electronic toll collection system operated by the National Highways Authority of India (NHAI).
        It uses Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid account.
        The system has reduced waiting time at toll plazas by 90% and significantly cut fuel consumption.
      `,
      economicImpact: `
        • ₹50B+ annual toll collections processed
        • 85% reduction in toll plaza congestion
        • 40% reduction in fuel consumption at plazas
        • 750+ toll plazas integrated nationwide
        • 1M+ daily transactions processed
      `,
      leadership: [
        {
          name: "Shri Alka Upadhyaya",
          position: "Chairperson, NHAI",
          initials: "AU"
        },
        {
          name: "Shri Giridhar Aramane",
          position: "Secretary, MoRTH",
          initials: "GA"
        }
      ],
      contact: {
        email: "support@fastag.gov.in",
        helpline: "1800-111-000",
        website: "https://fastag.gov.in"
      }
    },
    "vahan-sarathi": {
      title: "VAHAN - SARATHI",
      logo: "/images/vahan.png",
      overview: "National vehicle and driving license registries providing unified services across states.",
      launchDate: "2015-06-02",
      userBase: "300M+",
      transactions: "1B+ services",
      statesCovered: 36,
      impact: "High",
      features: [
        "Vehicle registration",
        "Driving license services",
        "Renewals online",
        "Nationwide validity",
        "Status tracking"
      ],
      implementation: [
        "Centralized database",
        "State-specific workflows",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        VAHAN (for vehicle registration) and SARATHI (for driving licenses) are national registries that provide 
        unified services across all states and UTs. The systems have standardized RTO processes nationwide, 
        eliminated fake licenses/registrations, and enabled online services for citizens.
      `,
      economicImpact: `
        • 95% reduction in fake driving licenses
        • 80% decrease in vehicle registration processing time
        • 500M+ driving licenses issued
        • 300M+ vehicle registrations processed
        • ₹50B+ annual revenue collected digitally
      `,
      leadership: [
        {
          name: "Shri Amit Varadan",
          position: "Joint Secretary, MoRTH",
          initials: "AV"
        },
        {
          name: "Shri Giridhar Aramane",
          position: "Secretary, MoRTH",
          initials: "GA"
        }
      ],
      contact: {
        email: "support@vahan.nic.in",
        helpline: "1800-111-111",
        website: "https://vahan.nic.in"
      }
    },
    "digilocker": {
      title: "DigiLocker",
      logo: "/images/digilocker.png",
      overview: "India's digital document wallet that enables secure storage and sharing of documents with government agencies and other authorized entities.",
      launchDate: "2015-07-01",
      userBase: "150M+",
      transactions: "5B+ documents",
      statesCovered: 36,
      impact: "High",
      features: [
        "Secure cloud-based document storage",
        "eSign facility for documents",
        "Integration with Aadhaar",
        "Instant verification of documents",
        "Mobile app accessibility"
      ],
      implementation: [
        "256-bit SSL encryption",
        "API integration with government departments",
        "OCR-based document processing",
        "Two-factor authentication",
        "Digital signature infrastructure"
      ],
      detailedInfo: `
        DigiLocker is a flagship initiative under Digital India program that provides citizens with a secure 
        cloud-based platform for storage and sharing of documents. It eliminates the need for physical documents 
        and enables instant verification through digital signatures.
      `,
      economicImpact: `
        • 500M+ documents issued directly by issuers
        • 90% reduction in document verification time
        • ₹10B+ saved in document processing costs
        • 2,000+ government departments integrated
        • 50+ types of documents supported
      `,
      leadership: [
        {
          name: "Shri Nand Kumaram",
          position: "P&CEO, NeGD",
          initials: "NK"
        },
        {
          name: "Shri Abhishek Singh",
          position: "CEO, NeGD",
          initials: "AS"
        }
      ],
      contact: {
        email: "support@digilocker.gov.in",
        helpline: "1800-111-999",
        website: "https://digilocker.gov.in"
      }
    },
    "passport-seva": {
      title: "Passport Seva",
      logo: "/images/passport.png",
      overview: "Online passport application and tracking system that has significantly reduced processing times.",
      launchDate: "2010-05-01",
      userBase: "100M+",
      transactions: "200M+ applications",
      statesCovered: 36,
      impact: "High",
      features: [
        "Online application",
        "Appointment scheduling",
        "Status tracking",
        "Document upload",
        "SMS alerts"
      ],
      implementation: [
        "Centralized system",
        "PSK network",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        Passport Seva is a mission mode project under the Ministry of External Affairs that has transformed 
        passport services in India. It reduced passport processing time from 45 days to 7 days for normal applications 
        and established a network of 500+ Passport Seva Kendras across the country.
      `,
      economicImpact: `
        • 80% reduction in passport processing time
        • 500+ Passport Seva Kendras operational
        • 10M+ passports issued annually
        • ₹5B+ saved in administrative costs
        • 95% citizen satisfaction rate
      `,
      leadership: [
        {
          name: "Shri Ausaf Sayeed",
          position: "Secretary, CPV Division",
          initials: "AS"
        },
        {
          name: "Shri Sanjay Bhattacharyya",
          position: "Former Secretary, CPV",
          initials: "SB"
        }
      ],
      contact: {
        email: "support@passportindia.gov.in",
        helpline: "1800-258-1800",
        website: "https://passportindia.gov.in"
      }
    },
    "enam": {
      title: "eNAM",
      logo: "/images/enam.png",
      overview: "Electronic National Agriculture Market networks existing APMC mandis to create a unified national market.",
      launchDate: "2016-04-14",
      userBase: "20M+",
      transactions: "₹2T+ annually",
      statesCovered: 36,
      impact: "High",
      features: [
        "Online trading",
        "Quality assaying",
        "Payment gateway",
        "Logistics support",
        "Price discovery"
      ],
      implementation: [
        "Inter-mandi trading",
        "Mobile app access",
        "Analytics dashboard",
        "API integration",
        "Multi-language support"
      ],
      detailedInfo: `
        eNAM (National Agriculture Market) is a pan-India electronic trading portal that networks existing 
        APMC mandis to create a unified national market for agricultural commodities. The platform enables 
        farmers to get better prices through transparent auction process and online payment.
      `,
      economicImpact: `
        • 1,000+ mandis integrated across India
        • 175+ commodities traded
        • 20% average increase in farmer incomes
        • ₹2 trillion+ annual trade volume
        • 5M+ farmers registered
      `,
      leadership: [
        {
          name: "Shri Manoj Ahuja",
          position: "Secretary, Agriculture",
          initials: "MA"
        },
        {
          name: "Shri Narendra Singh Tomar",
          position: "Agriculture Minister",
          initials: "NT"
        }
      ],
      contact: {
        email: "support@enam.gov.in",
        helpline: "1800-425-1556",
        website: "https://enam.gov.in"
      }
    },
    "kisan-suvidha": {
      title: "Kisan Suvidha",
      logo: "/images/kisan.png",
      overview: "Farmer-centric mobile application providing information on weather, market prices and government schemes.",
      launchDate: "2016-03-19",
      userBase: "10M+",
      transactions: "100M+ queries",
      statesCovered: 36,
      impact: "High",
      features: [
        "Weather forecasts",
        "Market prices",
        "Agro-advisories",
        "Government schemes",
        "Crop insurance"
      ],
      implementation: [
        "Mobile-first design",
        "Regional language support",
        "Push notifications",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        Kisan Suvidha is a mobile application developed to help farmers by providing relevant information 
        quickly. It gives advisories on weather, extreme weather warnings, market prices, inputs dealers, 
        and government schemes in multiple Indian languages.
      `,
      economicImpact: `
        • 10M+ farmer beneficiaries
        • Available in 12 regional languages
        • 500K+ daily active users
        • 30% reduction in weather-related crop losses
        • 200+ agricultural experts providing advisories
      `,
      leadership: [
        {
          name: "Shri Narendra Singh Tomar",
          position: "Agriculture Minister",
          initials: "NT"
        },
        {
          name: "Shri Manoj Ahuja",
          position: "Secretary, Agriculture",
          initials: "MA"
        }
      ],
      contact: {
        email: "support@kisansuvidha.gov.in",
        helpline: "1800-180-1551",
        website: "https://kisansuvidha.gov.in"
      }
    },
    "umang": {
      title: "UMANG",
      logo: "/images/UMANG.png",
      overview: "Unified Mobile Application for New-age Governance providing access to 1,200+ government services.",
      launchDate: "2017-11-21",
      userBase: "100M+",
      transactions: "500M+",
      statesCovered: 36,
      impact: "High",
      features: [
        "Single platform for multiple services",
        "Multi-language support",
        "Secure authentication",
        "Digital payment integration",
        "Personalized dashboard"
      ],
      implementation: [
        "API-driven architecture",
        "eKYC integration",
        "Unified payment interface",
        "Responsive design",
        "Regular service onboarding"
      ],
      detailedInfo: `
        UMANG (Unified Mobile Application for New-age Governance) provides a single platform for all Indian 
        citizens to access pan India e-Gov services from Central, State, Local Bodies, and Agencies of government.
        The app supports 13 Indian languages and offers services across various domains.
      `,
      economicImpact: `
        • 1,200+ government services integrated
        • 13 Indian languages supported
        • 50M+ monthly active users
        • 80% reduction in physical visits for services
        • 500+ government departments onboarded
      `,
      leadership: [
        {
          name: "Shri Nand Kumaram",
          position: "P&CEO, NeGD",
          initials: "NK"
        },
        {
          name: "Shri Abhishek Singh",
          position: "CEO, NeGD",
          initials: "AS"
        }
      ],
      contact: {
        email: "support@umang.gov.in",
        helpline: "1800-111-888",
        website: "https://web.umang.gov.in"
      }
    },
    "rapdrp": {
      title: "RAPDRP",
      logo: "/images/RAPDRP.png",
      overview: "Restructured Accelerated Power Development Program for IT enablement of distribution sector.",
      launchDate: "2008-07-01",
      userBase: "50M+",
      transactions: "500M+ records",
      statesCovered: 36,
      impact: "High",
      features: [
        "Consumer indexing",
        "GIS mapping",
        "SCADA implementation",
        "Energy accounting",
        "Outage management"
      ],
      implementation: [
        "Smart metering",
        "Mobile app access",
        "Analytics dashboard",
        "API integration",
        "Disaster recovery"
      ],
      detailedInfo: `
        R-APDRP is a Government of India initiative aimed at reducing Aggregate Technical & Commercial (AT&C) 
        losses in power distribution through IT enablement of the distribution sector. The program focuses on 
        establishing reliable and automated systems for sustained collection of accurate base line data.
      `,
      economicImpact: `
        • 25% reduction in AT&C losses in project areas
        • 50M+ consumers digitized
        • ₹500B+ investment in distribution infrastructure
        • 100+ towns covered under Part-A projects
        • 15% improvement in billing efficiency
      `,
      leadership: [
        {
          name: "Shri Alok Kumar",
          position: "Secretary, Power",
          initials: "AK"
        },
        {
          name: "Shri Gurdeep Singh",
          position: "CMD, NTPC",
          initials: "GS"
        }
      ],
      contact: {
        email: "support@rapdrp.gov.in",
        helpline: "1800-111-222",
        website: "https://rapdrp.gov.in"
      }
    }
  };
  
  export default digitalInitiativesData;
