window.OS = window.OS || { domains: [], guidelines: [] };
OS.guidelines = [
  {
    group: 'Foundations',
    items: [
      { t: 'WHO Classification of Head and Neck Tumours, 5th edition', src: 'WHO / IARC, 2022', k: 'OKC remains a cyst; binary or three-tier dysplasia grading; adenoid ameloblastoma added; PVL recognised; cemento-ossifying fibroma with mesenchymal odontogenic tumours.' },
      { t: 'Selection Criteria for Dental Radiography', src: 'FGDP(UK), 2018', k: 'Justify every exposure; choose the lowest-dose view that answers the clinical question; CBCT only when 2D imaging is inadequate.' },
      { t: 'Guidance Notes for Dental Practitioners on the Safe Use of X-ray Equipment, 2nd edition', src: 'FGDP / Public Health England, 2020', k: 'Practical compliance with IRR17 and IR(ME)R 2017: RPA, RPS, local rules, controlled areas, quality assurance, training.' },
      { t: 'Cone Beam CT for Dental and Maxillofacial Radiology — Evidence-based Guidelines', src: 'SEDENTEXCT, 2012', k: 'No routine CBCT; smallest field of view; full-volume reporting by trained person; specific indications (third molars, impacted canines, implants, pathology).' },
      { t: 'Oral Management of Oncology Patients Requiring Radiotherapy, Chemotherapy and/or Bone Marrow Transplantation', src: 'RCS / BSDH, 2018', k: 'Pre-treatment dental assessment; extract poor-prognosis teeth ideally ≥10–14 days before radiotherapy; high-fluoride toothpaste; mucositis and xerostomia care; ORN prevention.' }
    ]
  },
  {
    group: 'Domain 1 — Dentoalveolar surgery',
    items: [
      { t: 'Implementation advice for NICE CG64: Prophylaxis Against Infective Endocarditis', src: 'SDCEP, 2018', k: 'Prophylaxis not routine. Special-risk patients (previous IE, prosthetic valves, certain congenital heart disease) — individual decision with patient/cardiologist; if given: amoxicillin 3 g oral (clindamycin 600 mg if allergic) 60 min before.' },
      { t: 'Guidelines for Periradicular Surgery', src: 'British Endodontic Society (Qualtrough et al.), 2020', k: 'Indications when orthograde retreatment isn\'t feasible; microsurgical technique; 3 mm resection at 0–10°; ultrasonic preparation; bioceramic/MTA root-end filling; review up to 4 years.' },
      { t: 'Parameters of Care for Patients Undergoing Mandibular Third Molar Surgery', src: 'FDS RCS Eng (Renton et al.), 2020', k: 'Builds on NICE TA1; recognises distal caries in second molars as an indication; IAN risk assessment and CBCT use; coronectomy; consent; referral.' },
      { t: 'Management of the Palatally Ectopic Maxillary Canine', src: 'FDS RCS Eng (Husain et al.), 2022', k: 'Palpate canines from age 10; localise with parallax/CBCT; interceptive extraction of the primary canine in uncrowded 10–13 year olds; options: exposure and alignment, removal, monitoring, transplantation.' },
      { t: 'Management of Unerupted Maxillary Incisors', src: 'FDS RCS Eng (Yaqoob, O\'Neill, Patel et al.), 2022', k: 'Investigate if contralateral erupted &gt;6 months earlier; supernumeraries commonest cause; remove obstruction and create space; exposure and bonding if no eruption.' },
      { t: 'Management of Dental Patients Taking Anticoagulant or Antiplatelet Drugs, 2nd edition', src: 'SDCEP, 2022', k: 'Antiplatelets: don\'t interrupt. Warfarin: INR &lt;4 within 24–72 h. DOACs: low-risk — no change; higher-risk — miss morning apixaban/dabigatran, delay morning rivaroxaban/edoxaban. Local haemostatic measures.' },
      { t: 'Guidance on the Extraction of Wisdom Teeth (TA1)', src: 'NICE, 2000', k: 'Remove only for pathology (unrestorable caries, pulpal/periapical disease, cellulitis/abscess/osteomyelitis, resorption, fracture, cyst/tumour, recurrent or severe pericoronitis, surgical access needs).' }
    ]
  },
  {
    group: 'Domain 2 — Trauma',
    items: [
      { t: 'IADT Guidelines for the Management of Traumatic Dental Injuries', src: 'International Association of Dental Traumatology, 2020', k: 'Fractures and luxations; avulsion of permanent teeth (replant, 60-minute dry time, flexible splint 2 weeks, RCT within 2 weeks); primary dentition (never replant avulsed primary teeth).' },
      { t: 'Dental Trauma Guide / UK dental trauma guidelines', src: 'dentaltrauma.co.uk', k: 'Algorithms, splint times and follow-up schedules for each injury type.' },
      { t: 'AO Surgery Reference — CMF Trauma', src: 'AO Foundation', k: 'Classification and management principles for mandibular, midface and skull base fractures.' },
      { t: 'Head Injury: Assessment and Early Management (NG232)', src: 'NICE, 2023', k: 'CT head within 1 hour for GCS &lt;13 initially or &lt;15 at 2 h, suspected skull fracture, basal skull fracture signs, seizure, focal deficit, &gt;1 vomit.' },
      { t: 'Advanced Trauma Life Support', src: 'American College of Surgeons', k: '&lt;C&gt;ABCDE primary survey, secondary survey, AMPLE history.' }
    ]
  },
  {
    group: 'Domain 3 — Orofacial pain and TMD',
    items: [
      { t: 'International Classification of Orofacial Pain (ICOP)', src: 'Cephalalgia, 2020', k: 'Criteria for dentoalveolar, myofascial, TMJ, neuropathic (PTTN, BMS) and idiopathic (PIFP, PIDAP) pain — most chronic forms need &gt;2 h/day for &gt;3 months.' },
      { t: 'Diagnostic Criteria for Temporomandibular Disorders (DC/TMD)', src: 'International RDC/TMD Consortium Network & Orofacial Pain SIG, 2014', k: 'Axis I physical diagnoses (myalgia, arthralgia, disc displacements, DJD, headache attributed to TMD); Axis II psychosocial screening.' },
      { t: 'Neuropathic Pain in Adults: Pharmacological Management in Non-specialist Settings (CG173)', src: 'NICE, updated 2020', k: 'Choose one of amitriptyline, duloxetine, gabapentin or pregabalin; switch if ineffective; carbamazepine for TN; capsaicin cream for localised pain; tramadol only for acute rescue.' },
      { t: 'Chronic Pain (Primary and Secondary) in Over 16s (NG193)', src: 'NICE, 2021', k: 'Exercise, psychological therapy and acupuncture; consider an antidepressant; don\'t start opioids, gabapentinoids, NSAIDs, benzodiazepines, paracetamol or LA for chronic primary pain.' },
      { t: 'Temporomandibular Disorders: Update and Management Guidance for Primary Care', src: 'FDS RCS / UK SIG in Orofacial Pain and TMDs, 2013', k: 'Explanation, self-care, simple analgesia, splints, physiotherapy, CBT; refer for red flags or failed conservative care.' },
      { t: 'International Classification of Headache Disorders, 3rd edition (ICHD-3)', src: 'International Headache Society, 2018', k: 'Criteria for migraine, tension-type headache, TACs (cluster), trigeminal neuralgia (classical, secondary, idiopathic).' },
      { t: 'Guidelines for the Management of Trigeminal Neuralgia', src: 'FDS RCS, 2021', k: 'MRI for all at diagnosis; carbamazepine/oxcarbazepine first line with monitoring; early neurosurgical referral (MVD, ablative procedures) if medication fails.' },
      { t: 'Headaches in Over 12s: Diagnosis and Management (CG150)', src: 'NICE, 2012 (updated)', k: 'Diagnosis of primary headaches, medication-overuse headache, acute and preventive treatment.' },
      { t: 'Management of Painful Temporomandibular Disorder in Adults', src: 'NHS England GIRFT & FDS RCS', k: 'Stepped-care pathway; most managed in primary care with self-management; referral criteria for secondary care.' }
    ]
  },
  {
    group: 'Domain 4 — Pain and anxiety control',
    items: [
      { t: 'Standards for Conscious Sedation in the Provision of Dental Care (v1.1)', src: 'Intercollegiate Advisory Committee for Sedation in Dentistry (IACSD), 2020', k: 'Definition of conscious sedation; standard vs advanced techniques by age; training, team, monitoring, environment, documentation and governance.' },
      { t: 'Conscious Sedation in Dentistry, 3rd edition', src: 'SDCEP', k: 'Practical guidance on assessment, techniques, monitoring, recovery and discharge.' },
      { t: 'ASA Physical Status Classification System', src: 'American Society of Anesthesiologists', k: 'ASA I–VI; primary care sedation generally ASA I–II.' },
      { t: 'Safe Sedation Practice for Healthcare Procedures', src: 'Academy of Medical Royal Colleges, 2013', k: 'Sedation as a continuum; ability to rescue from deeper levels; monitoring and capnography; training standards.' },
      { t: 'Sedation in Under 19s: Using Sedation for Diagnostic and Therapeutic Procedures (CG112)', src: 'NICE, 2010', k: 'Inhalation sedation for dental care; midazolam options; fasting not required for minimal/N₂O/moderate sedation with verbal contact; advanced techniques only with trained teams.' }
    ]
  },
  {
    group: 'Domain 5 — Soft tissue lesions',
    items: [
      { t: 'ICOP — Painful Oral Mucosal Lesions', src: 'Cephalalgia, 2020', k: 'Classification of pain attributed to oral mucosal lesions.' },
      { t: 'ACR/EULAR Classification Criteria for Primary Sjögren\'s Syndrome', src: 'American College of Rheumatology / EULAR, 2016', k: 'Score ≥4: focus score ≥1 (3), anti-Ro/SSA (3), ocular staining (1), Schirmer ≤5 mm/5 min (1), unstimulated saliva ≤0.1 ml/min (1).' },
      { t: 'Oral Potentially Malignant Disorders: Consensus Report', src: 'Warnakulasuriya et al., Oral Diseases 2021', k: 'Definitions of leukoplakia and erythroplakia; list of OPMDs including PVL, OSF, OLP, OLL, actinic keratosis, oral GVHD, lupus, dyskeratosis congenita.' },
      { t: 'Cancer of the Upper Aerodigestive Tract (NG36)', src: 'NICE, 2016', k: 'MDT care; sentinel node biopsy or elective neck dissection for early oral SCC with N0 neck; HPV testing for oropharyngeal cancer; imaging and support.' },
      { t: 'Suspected Cancer: Recognition and Referral (NG12)', src: 'NICE, 2015', k: 'Urgent referral for unexplained oral ulcer &gt;3 weeks, persistent neck lump; dentist referral for lip/oral lump or red/red-white patch.' },
      { t: 'BAD/BSR Living Guideline for Managing People with Behçet\'s', src: 'British Journal of Dermatology, 2024', k: 'Topical steroids and colchicine for mucocutaneous disease; apremilast for oral ulcers; immunosuppressants/anti-TNF for severe or organ-threatening disease.' }
    ]
  },
  {
    group: 'Domain 6 — Hard tissue lesions',
    items: [
      { t: 'Position Paper on Medication-Related Osteonecrosis of the Jaw', src: 'American Association of Oral and Maxillofacial Surgeons, 2022', k: 'Definition (exposed/probeable bone &gt;8 weeks, antiresorptive/antiangiogenic exposure, no jaw radiotherapy or metastasis); stages 0–3; surgery effective at all stages.' },
      { t: 'Oral Health Management of Patients at Risk of MRONJ', src: 'SDCEP, 2017', k: 'Low vs higher risk groups; prevention before and during therapy; no drug holiday; atraumatic extraction and review.' },
      { t: 'HOPON trial — HBO to prevent ORN after extractions', src: 'Shaw et al., 2019', k: 'No significant reduction in ORN with hyperbaric oxygen.' }
    ]
  },
  {
    group: 'Domain 7 — Implants',
    items: [
      { t: 'Training Standards in Implant Dentistry', src: 'FGDP(UK), 2016 — College of General Dentistry', k: 'Learning outcomes, structured and mentored training, scope of practice, records and audit.' },
      { t: 'Mentoring in Implant Dentistry: Good Practice Guidelines', src: 'College of General Dentistry', k: 'Roles and responsibilities of mentor and mentee, indemnity, documentation.' },
      { t: 'ITI, EAO and Osteology Foundation consensus statements', src: 'Various', k: 'Placement types 1–4; loading protocols; SAC classification; Esthetic Risk Assessment; 3D positioning; short implants; peri-implant disease prevention.' },
      { t: 'World Workshop on the Classification of Periodontal and Peri-Implant Diseases', src: 'AAP/EFP, 2017', k: 'Case definitions for peri-implant health, mucositis and peri-implantitis.' },
      { t: 'S3-level Clinical Practice Guideline: Prevention and Treatment of Peri-implant Diseases', src: 'EFP, 2023', k: 'Staged approach: prevention, non-surgical then surgical treatment, supportive peri-implant care.' }
    ]
  },
  {
    group: 'Domain 8 — Critical conditions',
    items: [
      { t: 'Quality Standards for CPR Practice and Training — Primary Dental Care', src: 'Resuscitation Council UK', k: 'Core emergency drugs and equipment, annual team training, documented checks.' },
      { t: 'Emergency Treatment of Anaphylaxis', src: 'Resuscitation Council UK, 2021', k: 'IM adrenaline by age (500/300/150/100–150 µg), repeat after 5 min; antihistamines and steroids not first line.' },
      { t: 'Adult and Paediatric Basic Life Support', src: 'Resuscitation Council UK, 2021', k: 'Adult 30:2, 5–6 cm, 100–120/min, early AED; paediatric 5 rescue breaths then 15:2.' },
      { t: 'Suspected Sepsis: Recognition, Diagnosis and Early Management (NG51)', src: 'NICE, updated 2024', k: 'Risk stratification (NEWS2 in adults in acute settings); timely antibiotics and escalation.' },
      { t: 'National Early Warning Score 2 (NEWS2)', src: 'Royal College of Physicians, 2017', k: 'Aggregate 5–6 urgent response; ≥7 emergency response.' }
    ]
  },
  {
    group: 'Domain 9 — Capabilities in Practice',
    items: [
      { t: 'WHO Surgical Safety Checklist', src: 'World Health Organization', k: 'Sign in, time out, sign out.' },
      { t: 'National Safety Standards for Invasive Procedures 2 (NatSSIPs 2)', src: 'Centre for Perioperative Care, 2023', k: 'Organisational and sequential standards; local safety standards (LocSSIPs) including dental procedures.' },
      { t: 'Montgomery v Lanarkshire Health Board', src: 'UK Supreme Court, 2015', k: 'Duty to disclose material risks and reasonable alternatives.' },
      { t: 'Mental Capacity Act', src: 'England and Wales, 2005', k: 'Five principles; two-stage capacity test; best interests; LPA and advance decisions.' },
      { t: 'Standards for the Dental Team', src: 'General Dental Council', k: 'Patients\' interests first, communication, valid consent, records, complaints, candour, raising concerns.' }
    ]
  }
];
