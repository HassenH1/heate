export enum Position {
  "LVN/LPN",
  'Imagine services',
  'Registered nurse',
  'Physician assistant',
  'Certified Nursing Assistant',
  'Techs',
  'Therapist'
}

export const positions: readonly { label: keyof typeof Position, id: number }[] = [
  { label: 'LVN/LPN', id: 1 },
  { label: 'Imagine services', id: 2 },
  { label: 'Registered nurse', id: 3 },
  { label: 'Physician assistant', id: 4 },
  { label: 'Certified Nursing Assistant', id: 5 },
  { label: 'Techs', id: 6 },
  { label: 'Therapist', id: 7 },
]

export const lpnLvnSpecialties: readonly { label: string, value: string }[] = [
  // General Specialties
  { label: "Long-Term Care", value: "long_term_care" },
  { label: "Home Health Care", value: "home_health_care" },
  { label: "Hospital Care", value: "hospital_care" },

  // Specialized Areas
  { label: "Pediatrics", value: "pediatrics" },
  { label: "Geriatrics", value: "geriatrics" },
  { label: "Rehabilitation Nursing", value: "rehabilitation_nursing" },
  { label: "Psychiatric/Mental Health Nursing", value: "psychiatric_mental_health" },
  { label: "Dialysis Nursing", value: "dialysis_nursing" },

  // Community and Public Health
  { label: "Public Health Nursing", value: "public_health_nursing" },
  { label: "Occupational Health", value: "occupational_health" },

  // Administrative Roles
  { label: "Clinical Documentation", value: "clinical_documentation" },
  { label: "Case Management Support", value: "case_management_support" },

  // Specialized Certifications
  { label: "IV Therapy Certification", value: "iv_therapy_certification" },
  { label: "Wound Care Certification", value: "wound_care_certification" },
  { label: "Phlebotomy Certification", value: "phlebotomy_certification" },
  { label: "Palliative Care and Hospice Certification", value: "palliative_hospice_certification" },
  { label: "Advanced Cardiac Life Support (ACLS)", value: "acls_certification" }
];

export const imagingSpecialties: readonly { label: string, value: string }[] = [
  { value: "x_ray", label: "X-Ray (Radiography)" },
  { value: "ultrasound", label: "Ultrasound (Sonography)" },
  { value: "ct_scan", label: "Computed Tomography (CT)" },
  { value: "mri", label: "Magnetic Resonance Imaging (MRI)" },
  { value: "mammography", label: "Mammography" },
  { value: "nuclear_medicine", label: "Nuclear Medicine/PET Scans" },
  { value: "interventional_radiology", label: "Interventional Radiology" },
  { value: "cardiovascular_imaging", label: "Cardiovascular Imaging" },
  { value: "neuroradiology", label: "Neuroradiology" },
  { value: "musculoskeletal_imaging", label: "Musculoskeletal Imaging" },
  { value: "abdominal_pelvic_imaging", label: "Abdominal and Pelvic Imaging" },
  { value: "pediatric_imaging", label: "Pediatric Imaging" },
  { value: "oncology_imaging", label: "Oncology Imaging" },
  { value: "functional_mri", label: "Functional MRI (fMRI)" },
  { value: "fluoroscopy", label: "Fluoroscopy" },
];

export const rnSpecialties = [
  // Acute Care Specialties
  { label: "Critical Care Nurse (ICU Nurse)", value: "critical_care_nurse" },
  { label: "Emergency Room (ER) Nurse", value: "emergency_room_nurse" },
  { label: "Trauma Nurse", value: "trauma_nurse" },
  { label: "Perioperative Nurse (OR Nurse)", value: "perioperative_nurse" },
  { label: "Telemetry Nurse", value: "telemetry_nurse" },
  { label: "Cardiac Care Nurse (Cardiovascular Nurse)", value: "cardiac_care_nurse" },

  // Maternal and Child Health
  { label: "Labor and Delivery Nurse", value: "labor_and_delivery_nurse" },
  { label: "Neonatal Nurse (NICU Nurse)", value: "neonatal_nurse" },
  { label: "Pediatric Nurse", value: "pediatric_nurse" },
  { label: "School Nurse", value: "school_nurse" },

  // Geriatric and Chronic Care
  { label: "Geriatric Nurse", value: "geriatric_nurse" },
  { label: "Palliative Care Nurse", value: "palliative_care_nurse" },
  { label: "Hospice Nurse", value: "hospice_nurse" },

  // Mental Health and Behavioral Specialties
  { label: "Psychiatric-Mental Health Nurse (Psych Nurse)", value: "psychiatric_mental_health_nurse" },
  { label: "Substance Abuse Nurse", value: "substance_abuse_nurse" },

  // Community and Public Health
  { label: "Public Health Nurse", value: "public_health_nurse" },
  { label: "Community Health Nurse", value: "community_health_nurse" },
  { label: "Home Health Nurse", value: "home_health_nurse" },

  // Oncology Nursing
  { label: "Oncology Nurse", value: "oncology_nurse" },
  { label: "Radiation Oncology Nurse", value: "radiation_oncology_nurse" },
  { label: "Hematology/Oncology Nurse", value: "hematology_oncology_nurse" },

  // Advanced Practice Nursing
  { label: "Family Nurse Practitioner (FNP)", value: "family_nurse_practitioner" },
  { label: "Adult-Gerontology NP (AGNP)", value: "adult_gerontology_nurse_practitioner" },
  { label: "Pediatric NP (PNP)", value: "pediatric_nurse_practitioner" },
  { label: "Neonatal NP (NNP)", value: "neonatal_nurse_practitioner" },
  { label: "Psychiatric-Mental Health NP (PMHNP)", value: "psychiatric_mental_health_nurse_practitioner" },
  { label: "Women's Health NP (WHNP)", value: "womens_health_nurse_practitioner" },
  { label: "Certified Registered Nurse Anesthetist (CRNA)", value: "certified_registered_nurse_anesthetist" },
  { label: "Certified Nurse Midwife (CNM)", value: "certified_nurse_midwife" },
  { label: "Clinical Nurse Specialist (CNS)", value: "clinical_nurse_specialist" },

  // Specialized Clinical Areas
  { label: "Dialysis Nurse (Nephrology Nurse)", value: "dialysis_nurse" },
  { label: "Wound, Ostomy, and Continence Nurse (WOC Nurse)", value: "wound_ostomy_continence_nurse" },
  { label: "Infection Control Nurse", value: "infection_control_nurse" },
  { label: "Flight Nurse", value: "flight_nurse" },
  { label: "Transplant Nurse", value: "transplant_nurse" },

  // Occupational and Workplace Nursing
  { label: "Occupational Health Nurse", value: "occupational_health_nurse" },
  { label: "Case Management Nurse", value: "case_management_nurse" },

  // Education and Research
  { label: "Nurse Educator", value: "nurse_educator" },
  { label: "Clinical Research Nurse", value: "clinical_research_nurse" },
  { label: "Nurse Informatics Specialist", value: "nurse_informatics_specialist" },

  // Specialized Certifications
  { label: "IV Therapy Nurse", value: "iv_therapy_nurse" },
  { label: "Travel Nurse", value: "travel_nurse" },
  { label: "Forensic Nurse", value: "forensic_nurse" },
  { label: "Legal Nurse Consultant", value: "legal_nurse_consultant" },

  // Rehabilitation and Therapy
  { label: "Rehabilitation Nurse", value: "rehabilitation_nurse" },
  { label: "Pain Management Nurse", value: "pain_management_nurse" },

  // Other Specialized Roles
  { label: "Telehealth Nurse", value: "telehealth_nurse" },
  { label: "Military Nurse", value: "military_nurse" },
  { label: "Parish Nurse (Faith Community Nurse)", value: "parish_nurse" },
  { label: "Aesthetic Nurse (Cosmetic Nurse)", value: "aesthetic_nurse" },
  { label: "Diabetes Management Nurse", value: "diabetes_management_nurse" },
  { label: "Burn Care Nurse", value: "burn_care_nurse" }
];

export const paSpecialties = [
  // Primary Care Specialties
  { label: "Family Medicine", value: "family_medicine" },
  { label: "Internal Medicine", value: "internal_medicine" },
  { label: "Pediatrics", value: "pediatrics" },
  { label: "Geriatrics", value: "geriatrics" },

  // Surgical Specialties
  { label: "General Surgery", value: "general_surgery" },
  { label: "Cardiothoracic Surgery", value: "cardiothoracic_surgery" },
  { label: "Neurosurgery", value: "neurosurgery" },
  { label: "Orthopedic Surgery", value: "orthopedic_surgery" },
  { label: "Plastic and Reconstructive Surgery", value: "plastic_reconstructive_surgery" },
  { label: "Trauma Surgery", value: "trauma_surgery" },
  { label: "Vascular Surgery", value: "vascular_surgery" },

  // Emergency and Acute Care
  { label: "Emergency Medicine", value: "emergency_medicine" },
  { label: "Urgent Care", value: "urgent_care" },
  { label: "Critical Care Medicine (ICU)", value: "critical_care_medicine" },

  // Medical Specialties
  { label: "Cardiology", value: "cardiology" },
  { label: "Endocrinology", value: "endocrinology" },
  { label: "Gastroenterology", value: "gastroenterology" },
  { label: "Hematology/Oncology", value: "hematology_oncology" },
  { label: "Infectious Disease", value: "infectious_disease" },
  { label: "Nephrology", value: "nephrology" },
  { label: "Pulmonology", value: "pulmonology" },
  { label: "Rheumatology", value: "rheumatology" },

  // Women's Health
  { label: "Obstetrics and Gynecology (OB/GYN)", value: "ob_gyn" },
  { label: "Reproductive Endocrinology and Infertility", value: "reproductive_endocrinology" },

  // Behavioral and Mental Health
  { label: "Psychiatry", value: "psychiatry" },
  { label: "Behavioral Medicine", value: "behavioral_medicine" },

  // Dermatology
  { label: "General Dermatology", value: "general_dermatology" },
  { label: "Cosmetic Dermatology", value: "cosmetic_dermatology" },

  // Pediatrics
  { label: "Pediatric Surgery", value: "pediatric_surgery" },
  { label: "Neonatology", value: "neonatology" },
  { label: "Pediatric Cardiology", value: "pediatric_cardiology" },
  { label: "Pediatric Endocrinology", value: "pediatric_endocrinology" },

  // Occupational and Environmental Health
  { label: "Occupational Medicine", value: "occupational_medicine" },
  { label: "Environmental Medicine", value: "environmental_medicine" },

  // Specialized and Emerging Fields
  { label: "Sports Medicine", value: "sports_medicine" },
  { label: "Pain Medicine", value: "pain_medicine" },
  { label: "Addiction Medicine", value: "addiction_medicine" },
  { label: "Sleep Medicine", value: "sleep_medicine" },
  { label: "Aesthetic Medicine", value: "aesthetic_medicine" },

  // Oncology and Hematology
  { label: "Medical Oncology", value: "medical_oncology" },
  { label: "Radiation Oncology", value: "radiation_oncology" },
  { label: "Hematology", value: "hematology" },

  // Other Subspecialties
  { label: "Allergy and Immunology", value: "allergy_immunology" },
  { label: "Otolaryngology (ENT)", value: "otolaryngology" },
  { label: "Neurology", value: "neurology" },
  { label: "Urology", value: "urology" },
  { label: "Ophthalmology", value: "ophthalmology" },
  { label: "Palliative Care", value: "palliative_care" },
  { label: "Public Health and Preventive Medicine", value: "public_health_preventive_medicine" }
];

export const cnaSpecialties = [
  // Acute Care Specialties
  { label: "Critical Care CNA", value: "critical_care_cna" },
  { label: "Emergency Room CNA", value: "emergency_room_cna" },
  { label: "Operating Room CNA", value: "operating_room_cna" },
  { label: "Telemetry CNA", value: "telemetry_cna" },

  // Long-Term and Residential Care
  { label: "Geriatric CNA", value: "geriatric_cna" },
  { label: "Nursing Home CNA", value: "nursing_home_cna" },
  { label: "Assisted Living CNA", value: "assisted_living_cna" },
  { label: "Rehabilitation CNA", value: "rehabilitation_cna" },

  // Home Care Specialties
  { label: "Home Health Aide (HHA)", value: "home_health_aide" },
  { label: "Hospice CNA", value: "hospice_cna" },
  { label: "Private Duty CNA", value: "private_duty_cna" },

  // Hospital and Medical Specialties
  { label: "Medical-Surgical CNA (Med-Surg CNA)", value: "medical_surgical_cna" },
  { label: "Orthopedic CNA", value: "orthopedic_cna" },
  { label: "Pediatric CNA", value: "pediatric_cna" },
  { label: "Psychiatric CNA (Behavioral Health CNA)", value: "psychiatric_cna" },
  { label: "Cardiology CNA", value: "cardiology_cna" },
  { label: "Oncology CNA", value: "oncology_cna" },

  // Specialized Roles
  { label: "Travel CNA", value: "travel_cna" },
  { label: "Float Pool CNA", value: "float_pool_cna" },
  { label: "IV Therapy CNA", value: "iv_therapy_cna" },
  { label: "Wound Care CNA", value: "wound_care_cna" },
  { label: "Dialysis CNA", value: "dialysis_cna" },

  // Special Populations
  { label: "Memory Care CNA (Dementia and Alzheimer’s Care)", value: "memory_care_cna" },
  { label: "Developmental Disabilities CNA", value: "developmental_disabilities_cna" },
  { label: "Palliative Care CNA", value: "palliative_care_cna" },

  // Community and Outreach
  { label: "Public Health CNA", value: "public_health_cna" },
  { label: "School CNA", value: "school_cna" }
];

export const medTechSpecialties = [
  // Laboratory and Diagnostic Specialties
  { label: "Medical Laboratory Technician (MLT)", value: "medical_laboratory_technician" },
  { label: "Phlebotomy Technician", value: "phlebotomy_technician" },
  { label: "Cytotechnologist", value: "cytotechnologist" },
  { label: "Histotechnician", value: "histotechnician" },
  { label: "Pathology Assistant", value: "pathology_assistant" },
  { label: "Microbiology Technician", value: "microbiology_technician" },
  { label: "Clinical Chemistry Technician", value: "clinical_chemistry_technician" },
  { label: "Molecular Diagnostics Technician", value: "molecular_diagnostics_technician" },

  // Imaging and Radiology Specialties
  { label: "Radiologic Technologist (X-ray Technician)", value: "radiologic_technologist" },
  { label: "MRI Technologist", value: "mri_technologist" },
  { label: "CT Technologist (Computed Tomography)", value: "ct_technologist" },
  { label: "Ultrasound Technician (Sonographer)", value: "ultrasound_technician" },
  { label: "Nuclear Medicine Technologist", value: "nuclear_medicine_technologist" },
  { label: "Mammography Technologist", value: "mammography_technologist" },

  // Cardiology and Cardiopulmonary Specialties
  { label: "EKG/ECG Technician", value: "ekg_technician" },
  { label: "Cardiovascular Technologist", value: "cardiovascular_technologist" },
  { label: "Electrophysiology Technician", value: "electrophysiology_technician" },
  { label: "Pulmonary Function Technician", value: "pulmonary_function_technician" },

  // Surgical and Operating Room Specialties
  { label: "Surgical Technologist (OR Tech)", value: "surgical_technologist" },
  { label: "Anesthesia Technician", value: "anesthesia_technician" },

  // Emergency and Critical Care Specialties
  { label: "Emergency Medical Technician (EMT)", value: "emt" },
  { label: "Paramedic", value: "paramedic" },

  // Pharmacy and Medication Specialties
  { label: "Pharmacy Technician", value: "pharmacy_technician" },
  { label: "Compounding Pharmacy Technician", value: "compounding_pharmacy_technician" },

  // Dialysis and Renal Care Specialties
  { label: "Dialysis Technician (Renal Technician)", value: "dialysis_technician" },

  // Rehabilitation and Therapy Specialties
  { label: "Physical Therapy Technician (Rehab Tech)", value: "physical_therapy_technician" },
  { label: "Occupational Therapy Assistant", value: "occupational_therapy_assistant" },
  { label: "Speech-Language Pathology Assistant (SLPA)", value: "speech_language_pathology_assistant" },

  // Ophthalmology and Vision Care
  { label: "Ophthalmic Technician", value: "ophthalmic_technician" },
  { label: "Optometric Technician", value: "optometric_technician" },

  // Veterinary Medicine
  { label: "Veterinary Technician", value: "veterinary_technician" },

  // Public Health and Specialized Roles
  { label: "Forensic Science Technician", value: "forensic_science_technician" },
  { label: "Toxicology Technician", value: "toxicology_technician" },
  { label: "Public Health Laboratory Technician", value: "public_health_laboratory_technician" },

  // Emerging and Specialized Areas
  { label: "Sleep Study Technician (Polysomnographic Tech)", value: "sleep_study_technician" },
  { label: "Biomedical Equipment Technician", value: "biomedical_equipment_technician" },
  { label: "Clinical Research Technician", value: "clinical_research_technician" }
];

export const therapistSpecialties = [
  // Mental Health and Counseling Specialties
  { label: "Clinical Psychologist", value: "clinical_psychologist" },
  { label: "Marriage and Family Therapist (MFT)", value: "marriage_family_therapist" },
  { label: "Mental Health Counselor", value: "mental_health_counselor" },
  { label: "Licensed Professional Counselor (LPC)", value: "licensed_professional_counselor" },
  { label: "Substance Abuse Counselor (Addiction Therapist)", value: "substance_abuse_counselor" },
  { label: "School Counselor", value: "school_counselor" },
  { label: "Grief Counselor", value: "grief_counselor" },
  { label: "Trauma Therapist", value: "trauma_therapist" },
  { label: "Behavioral Therapist", value: "behavioral_therapist" },
  { label: "Child and Adolescent Therapist", value: "child_adolescent_therapist" },

  // Physical Rehabilitation and Mobility Specialties
  { label: "Physical Therapist (PT)", value: "physical_therapist" },
  { label: "Occupational Therapist (OT)", value: "occupational_therapist" },
  { label: "Hand Therapist", value: "hand_therapist" },
  { label: "Neurological Rehabilitation Therapist", value: "neurological_rehabilitation_therapist" },
  { label: "Sports Therapist (Athletic Therapist)", value: "sports_therapist" },
  { label: "Geriatric Therapist (Rehabilitation for Older Adults)", value: "geriatric_therapist" },
  { label: "Pediatric Physical Therapist", value: "pediatric_physical_therapist" },
  { label: "Pelvic Floor Therapist", value: "pelvic_floor_therapist" },

  // Speech and Communication Specialties
  { label: "Speech-Language Pathologist (SLP)", value: "speech_language_pathologist" },
  { label: "Voice Therapist", value: "voice_therapist" },
  { label: "Stuttering Specialist", value: "stuttering_specialist" },
  { label: "Swallowing and Dysphagia Therapist", value: "swallowing_dysphagia_therapist" },

  // Creative and Expressive Therapy Specialties
  { label: "Art Therapist", value: "art_therapist" },
  { label: "Music Therapist", value: "music_therapist" },
  { label: "Drama Therapist", value: "drama_therapist" },
  { label: "Dance/Movement Therapist", value: "dance_movement_therapist" },

  // Behavioral and Developmental Therapy Specialties
  { label: "Applied Behavior Analyst (ABA Therapist)", value: "aba_therapist" },
  { label: "Developmental Therapist", value: "developmental_therapist" },
  { label: "Autism Spectrum Disorder (ASD) Therapist", value: "asd_therapist" },

  // Alternative and Holistic Therapy Specialties
  { label: "Cognitive Behavioral Therapist (CBT)", value: "cognitive_behavioral_therapist" },
  { label: "Dialectical Behavior Therapist (DBT)", value: "dialectical_behavior_therapist" },
  { label: "Mindfulness Therapist", value: "mindfulness_therapist" },
  { label: "Hypnotherapist", value: "hypnotherapist" },
  { label: "Reiki Therapist", value: "reiki_therapist" },
  { label: "Somatic Therapist", value: "somatic_therapist" },

  // Pain and Injury Management Specialties
  { label: "Chronic Pain Therapist", value: "chronic_pain_therapist" },
  { label: "Massage Therapist", value: "massage_therapist" },
  { label: "Manual Therapist", value: "manual_therapist" },

  // Family and Social Support Therapy Specialties
  { label: "Family Systems Therapist", value: "family_systems_therapist" },
  { label: "Parent-Child Interaction Therapist (PCIT)", value: "parent_child_interaction_therapist" },

  // Emerging and Niche Specialties
  { label: "Virtual Reality (VR) Therapist", value: "virtual_reality_therapist" },
  { label: "Career and Vocational Therapist", value: "career_vocational_therapist" },
  { label: "Equine-Assisted Therapist", value: "equine_assisted_therapist" },
  { label: "Aquatic Therapist", value: "aquatic_therapist" },
  { label: "Sleep Therapist", value: "sleep_therapist" }
];
