window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd5', num: '5', order: 5,
  title: 'Soft tissue lesions',
  summary: 'Mucosal, lymphatic, vascular, dermatological, neural, muscular and salivary gland lesions: normal variants, white lesions, potentially malignant disorders and cancer, ulcers and blistering disease, pigmentation, granulomatous and vascular lesions, infections, salivary disease, hyperplastic lesions, systemic conditions, drugs and surgical techniques.',
  topics: [
    {
      id: 'd5-guidance', title: 'Guidelines, red flags and investigations', code: '5.1–5.2',
      syllabus: [
        'ICOP painful oral mucosal lesions (2020); ACR/EULAR 2016 Sjögren\'s criteria; OPMD consensus (Warnakulasuriya 2021); WHO Head and Neck Tumours 5th ed; NICE NG36 (2016); NICE suspected cancer NG12 (2015); BAD/BSR Behçet\'s living guideline (2024)',
        'Pathology, classification, risk factors, grading and staging of soft tissue and salivary disease; benign and malignant lymph node conditions',
        'Recognise red flags; typical and atypical presentations',
        'Request and interpret imaging (plain film, CBCT, MRI, sialography, US) and reports',
        'Applications and limitations of FNA and core biopsy',
        'Interpret histopathology, blood and microbiology results; plan treatment and follow-up'
      ],
      notes: `
<h3>NICE NG12 — suspected head and neck cancer</h3>
<div class="box flag"><b>Refer urgently (suspected cancer pathway)</b>
<ul>
<li>Unexplained <b>ulceration in the oral cavity lasting more than 3 weeks</b></li>
<li>A persistent and unexplained <b>lump in the neck</b></li>
<li>(Dentist) a lump on the lip or in the oral cavity, or a red or red-and-white patch, consistent with oral cancer</li>
<li>Laryngeal cancer: persistent unexplained hoarseness or neck lump (age ≥45)</li>
<li>Thyroid cancer: unexplained thyroid lump</li></ul>
<p>GPs are asked to arrange urgent dental assessment (within 2 weeks) for a lump on the lip or oral cavity, or a red/red-and-white patch.</p></div>
<h3>NICE NG36 — cancer of the upper aerodigestive tract</h3>
<ul>
<li>Management by a specialist head and neck MDT.</li>
<li>Offer <b>sentinel lymph node biopsy</b> (or elective neck dissection) for early (T1–T2) oral cavity SCC with a clinically N0 neck.</li>
<li>HPV (p16) testing of oropharyngeal SCC; CT/MRI for staging; PET-CT for unknown primary and recurrence assessment.</li>
<li>Dental assessment before radiotherapy; support for nutrition, swallowing, speech, smoking/alcohol cessation.</li>
</ul>
<h3>Other key documents</h3>
<ul>
<li><b>OPMD consensus (2021)</b>: definitions and list of oral potentially malignant disorders — see OPMD topic.</li>
<li><b>WHO 5th edition (2022)</b>: classification of oral, salivary and soft tissue tumours; dysplasia grading.</li>
<li><b>ACR/EULAR 2016</b>: Sjögren's classification — see salivary disease.</li>
<li><b>BAD/BSR 2024 Behçet's</b> living guideline — see ulcers.</li>
<li><b>ICOP 2020</b>: classification of painful oral mucosal lesions.</li>
</ul>
<h3>Red flags for soft tissue disease</h3>
<ul>
<li>Ulcer &gt;3 weeks, induration, rolled margins, fixation, bleeding</li>
<li>Red or speckled red/white patch; rapidly growing lump</li>
<li>Unexplained numbness, trismus, loose teeth without periodontitis, non-healing socket</li>
<li>Neck lump (hard, fixed, &gt;1.5 cm, persistent &gt;3 weeks)</li>
<li>Salivary lump with facial weakness, pain, rapid growth, fixation, skin involvement</li>
<li>Pigmented lesion that is changing, irregular or of unknown cause</li>
<li>Systemic symptoms: weight loss, night sweats, fever</li>
</ul>
<h3>Investigations</h3>
<div class="tbl"><table><tr><th>Investigation</th><th>Use and limitations</th></tr>
<tr><td>Ultrasound</td><td>First line for salivary glands and neck lumps; differentiates solid/cystic, guides FNA/core; operator-dependent</td></tr>
<tr><td>FNAC (fine-needle aspiration cytology)</td><td>Quick, cheap, minimally invasive; cells only — can't assess architecture or invasion; non-diagnostic samples; less reliable for lymphoma</td></tr>
<tr><td>Core biopsy (US-guided)</td><td>Tissue architecture, immunohistochemistry, lymphoma subtyping; small risk of haematoma, facial nerve injury (parotid), theoretical seeding</td></tr>
<tr><td>Sialography</td><td>Duct anatomy: strictures, radiolucent stones, sialectasis; contraindicated in acute infection/iodine allergy</td></tr>
<tr><td>MRI</td><td>Soft tissue extent, perineural spread, deep parotid lobe, tongue tumours; vascular malformations (with MRA)</td></tr>
<tr><td>CT / CBCT</td><td>Bone invasion, calcifications, stones; CT neck/chest for staging</td></tr>
<tr><td>PET-CT</td><td>Unknown primary, distant metastases, recurrence after treatment</td></tr>
<tr><td>Blood tests</td><td>FBC, haematinics, coeliac serology (ulcers, BMS); autoantibodies (Ro/La, ANA, Dsg, BP180); ACE and calcium (sarcoid); C4 and C1-INH (angioedema); HbA1c; HIV, syphilis serology</td></tr>
<tr><td>Microbiology</td><td>Swabs (bacterial culture, viral PCR), smears for Candida, pus culture and sensitivity</td></tr></table></div>
<h3>Lymph node conditions</h3>
<ul>
<li><b>Reactive</b>: tender, mobile, &lt;1–1.5 cm, with an infective source (dental, tonsillitis) — resolve in weeks.</li>
<li><b>Infective</b>: bacterial lymphadenitis/abscess, TB (cold abscess, matted), atypical mycobacteria (children, violaceous skin), toxoplasmosis, cat-scratch (Bartonella), EBV, HIV.</li>
<li><b>Malignant</b>: metastatic SCC (hard, fixed, painless), lymphoma (rubbery, multiple, B symptoms), leukaemia.</li>
<li>Other: sarcoidosis, Kikuchi disease, Kawasaki disease (children).</li>
<li>Persistent unexplained neck lump → urgent referral; US ± FNAC/core; avoid open excision of a suspected SCC node before full assessment.</li>
</ul>`
    },
    {
      id: 'd5-normal', title: 'Normal anatomical variants', code: '5.3.0',
      syllabus: [
        'Recognise normal oral features and explain them to patients: Fordyce spots; geographic, coated and fissured tongue; circumvallate and foliate papillae; varicosities; lingual tonsillar tissue'
      ],
      notes: `
<div class="tbl"><table><tr><th>Feature</th><th>Appearance</th><th>What to tell the patient</th></tr>
<tr><td>Fordyce spots</td><td>Multiple small yellow-white papules on buccal mucosa and upper lip vermilion — ectopic sebaceous glands</td><td>Normal in most adults; no treatment</td></tr>
<tr><td>Geographic tongue (erythema migrans)</td><td>Migrating red depapillated areas with white/yellow serpiginous borders, changing over days</td><td>Benign, common (~2%); may be sore with spicy/acidic foods; associated with fissured tongue and psoriasis; check haematinics if symptomatic; no cure needed</td></tr>
<tr><td>Fissured tongue</td><td>Deep grooves on dorsum</td><td>Normal variant; brush tongue to avoid food trapping; associated with Down syndrome and Melkersson–Rosenthal</td></tr>
<tr><td>Coated / black hairy tongue</td><td>Elongated filiform papillae with debris; brown/black staining</td><td>Smoking, antibiotics, poor hygiene, chlorhexidine; tongue brushing</td></tr>
<tr><td>Circumvallate papillae</td><td>8–12 large papillae in a V just in front of the sulcus terminalis</td><td>Often noticed by patients as "lumps at the back of the tongue"</td></tr>
<tr><td>Foliate papillae</td><td>Vertical folds on posterolateral tongue; can swell with irritation</td><td>Commonly mistaken for tumours — symmetrical and soft</td></tr>
<tr><td>Lingual varicosities</td><td>Purple dilated veins on ventral tongue in older adults ("caviar tongue")</td><td>Age change; blanch on pressure</td></tr>
<tr><td>Lingual tonsil</td><td>Lymphoid tissue at the tongue base/posterolateral tongue</td><td>Can enlarge with infection; asymmetrical or persistent enlargement needs review</td></tr></table></div>
<p>Also: tori (palatine and mandibular), leukoedema, linea alba, retrocuspid papilla, pigmented fungiform papillae, parotid papilla, sublingual caruncles.</p>`
    },
    {
      id: 'd5-white', title: 'Benign white lesions', code: '5.3.1',
      syllabus: [
        'Recognise common benign white lesions, form a differential and instigate management: leukoedema; frictional keratosis and cheek biting; stomatitis nicotina; chemical or drug-induced lesions; white sponge naevus; skin grafts; psoriasis; hairy leukoplakia; candidal white patches'
      ],
      notes: `
<h3>Approach</h3>
<p>Ask: does it wipe off (pseudomembranous candidiasis, slough, chemical burn)? Is it bilateral and symmetrical (developmental, frictional, lichen planus)? Is there an obvious cause? Is there a red component (higher risk)? If it can't be characterised as a definable benign lesion, it is a leukoplakia and needs biopsy.</p>
<div class="tbl"><table><tr><th>Lesion</th><th>Features</th><th>Management</th></tr>
<tr><td>Leukoedema</td><td>Bilateral grey-white filmy buccal mucosa that <b>disappears on stretching</b>; common in darker skin</td><td>Reassure</td></tr>
<tr><td>Frictional keratosis / morsicatio buccarum</td><td>Linea alba along occlusal plane; shredded white tags from cheek/lip biting; edentulous ridge keratosis</td><td>Remove cause; review — should resolve in 2–4 weeks; biopsy if persists</td></tr>
<tr><td>Stomatitis nicotina</td><td>White keratotic palate with red dots (inflamed minor gland duct orifices) — pipe/cigar smokers</td><td>Smoking cessation; reversible. (Reverse smoking palatal lesions are an OPMD)</td></tr>
<tr><td>Chemical/drug burns</td><td>White sloughing necrotic mucosa — aspirin held against gum, hydrogen peroxide, phenol, etching agents</td><td>Remove cause; heals in 1–2 weeks</td></tr>
<tr><td>White sponge naevus</td><td>Autosomal dominant (keratin 4/13 mutation); bilateral thick, white, spongy folded buccal mucosa from childhood; may involve other mucosae</td><td>Benign; reassure; biopsy confirms</td></tr>
<tr><td>Skin grafts</td><td>Hair-bearing pale tissue at reconstruction sites</td><td>History; monitor for recurrence at margins</td></tr>
<tr><td>Psoriasis</td><td>Rarely oral; geographic tongue more common in psoriasis</td><td>Dermatology</td></tr>
<tr><td>Oral hairy leukoplakia</td><td>Bilateral corrugated white plaques on lateral tongue, don't rub off; EBV; HIV or other immunosuppression</td><td>Test for HIV/immune status; no treatment needed itself</td></tr>
<tr><td>Candidal white patches</td><td>Pseudomembranous (wipes off leaving red base) vs chronic hyperplastic (adherent, commissures — may be dysplastic)</td><td>Antifungals, correct predisposing factors; biopsy chronic hyperplastic lesions</td></tr></table></div>
<p>Other differentials: lichen planus (striae), leukoplakia, lupus, smoker's keratosis, scar tissue, linea alba, Fordyce spots.</p>`
    },
    {
      id: 'd5-opmd', title: 'Oral potentially malignant disorders', code: '5.3.2',
      syllabus: [
        'Recognise high-risk signs and arrange timely investigation and management: leukoplakia, erythroplakia, non-homogeneous (speckled) leukoplakia, proliferative verrucous leukoplakia, oral submucous fibrosis, actinic keratosis/cheilitis, dysplastic lesions, chronic candidiasis, oral lichen planus, oral lichenoid lesion'
      ],
      notes: `
<h3>OPMDs (WHO Collaborating Centre consensus, Warnakulasuriya 2021)</h3>
<p>Leukoplakia, proliferative verrucous leukoplakia, erythroplakia, oral submucous fibrosis, oral lichen planus, actinic keratosis (actinic cheilitis), palatal lesions in reverse smokers, oral lupus erythematosus, dyskeratosis congenita, oral lichenoid lesions, oral graft-versus-host disease.</p>
<div class="box guide"><b>Definitions</b>
<p><b>Leukoplakia</b>: a predominantly white plaque of questionable risk, having excluded other known diseases or disorders that carry no increased risk for cancer.</p>
<p><b>Erythroplakia</b>: a predominantly red patch that cannot be characterised clinically or pathologically as any other definable disease.</p></div>
<h3>Risk of malignant transformation</h3>
<div class="tbl"><table><tr><th>Lesion</th><th>Relative risk</th><th>Notes</th></tr>
<tr><td>Erythroplakia</td><td>Highest</td><td>Most show dysplasia or carcinoma at biopsy</td></tr>
<tr><td>Proliferative verrucous leukoplakia</td><td>Very high (most transform over long follow-up)</td><td>Multifocal, progressive, warty; older women, often non-smokers; gingiva and buccal mucosa; recurs after excision</td></tr>
<tr><td>Non-homogeneous (speckled, nodular, verrucous) leukoplakia</td><td>Higher than homogeneous</td><td>Red component = higher risk</td></tr>
<tr><td>Homogeneous leukoplakia</td><td>Lower</td><td>Flat, uniform, thin, white</td></tr>
<tr><td>Oral submucous fibrosis</td><td>Moderate</td><td>Areca/betel nut; progressive fibrosis, blanched mucosa, fibrous bands, trismus, burning with spicy food</td></tr>
<tr><td>Oral lichen planus / lichenoid lesions</td><td>Low (~1%)</td><td>Erosive/atrophic, tongue, persistent red lesions — higher</td></tr>
<tr><td>Actinic cheilitis</td><td>Low–moderate</td><td>Lower lip, sun exposure, fair skin, outdoor workers; loss of vermilion border definition, scaling</td></tr></table></div>
<p><b>Risk factors for transformation</b>: dysplasia (especially high grade), non-homogeneous/red appearance, size &gt;2 cm, high-risk site (lateral/ventral tongue, floor of mouth, soft palate complex), female, non-smoker with idiopathic leukoplakia, long duration, multiple lesions (field change), previous cancer.</p>
<h3>Epithelial dysplasia</h3>
<ul>
<li>Architectural (drop-shaped rete ridges, loss of polarity, abnormal keratinisation) and cytological (nuclear pleomorphism, hyperchromatism, increased mitoses, abnormal mitoses) features.</li>
<li>Graded mild/moderate/severe (by thirds of epithelium involved, modified by features) or binary low/high grade (WHO 2022). Carcinoma in situ = full-thickness change without invasion.</li>
</ul>
<h3>Management</h3>
<ol>
<li>Remove risk factors: tobacco, alcohol, areca nut; treat candidiasis (then reassess).</li>
<li>Photograph and record size/site.</li>
<li><b>Incisional biopsy</b> of the most suspicious area (red, nodular, ulcerated, indurated); mapping biopsies for large or multifocal lesions.</li>
<li>No/mild dysplasia: review, consider excision of small accessible lesions. Moderate/severe dysplasia: <b>excision</b> (scalpel or CO₂ laser) with histology and close surveillance.</li>
<li>Long-term follow-up (e.g. 3–6 monthly initially) in secondary care; patient education on self-examination and warning signs.</li>
<li>No proven chemoprevention. Excision does not eliminate cancer risk (field change).</li>
</ol>
<h3>Chronic hyperplastic candidiasis</h3>
<p>Adherent white (or speckled) plaque, typically at the commissures; associated with smoking. Candidal hyphae invade the epithelium (PAS stain); may show dysplasia. Treat with systemic antifungal (fluconazole) and smoking cessation, then re-biopsy persistent lesions.</p>`
    },
    {
      id: 'd5-cancer', title: 'Oral cancer and other malignancies', code: '5.3.2',
      syllabus: [
        'Oral squamous cell carcinoma; basal cell carcinoma; lymphoma; melanoma; Kaposi sarcoma',
        'Risk factors, grading and staging; management of malignant conditions'
      ],
      notes: `
<h3>Oral squamous cell carcinoma (OSCC)</h3>
<ul>
<li>~90% of oral cancers. UK incidence rising; men &gt; women; most over 50, but increasing in younger people.</li>
<li><b>Risk factors</b>: tobacco (smoked and smokeless), alcohol (synergistic with tobacco), areca nut/betel quid, poor diet (low fruit/vegetables), immunosuppression, OPMDs, previous head and neck cancer, sunlight (lip), Fanconi anaemia, dyskeratosis congenita. <b>HPV-16</b> drives oropharyngeal (not most oral cavity) cancers.</li>
<li><b>Sites</b>: lateral/ventral tongue and floor of mouth most common (UK); lower lip; gingiva/alveolus; retromolar area.</li>
<li><b>Presentation</b>: non-healing ulcer with rolled everted margins and indurated base; red/white patch; exophytic mass; pain, otalgia (referred via V3/IX/X), numbness, loose teeth, non-healing socket, trismus, dysphagia, neck lump.</li>
</ul>
<h3>TNM staging (AJCC/UICC 8th edition, oral cavity)</h3>
<div class="tbl"><table><tr><th>T</th><th>Criteria</th></tr>
<tr><td>T1</td><td>≤2 cm and depth of invasion (DOI) ≤5 mm</td></tr>
<tr><td>T2</td><td>≤2 cm with DOI &gt;5 mm, or &gt;2 cm but ≤4 cm with DOI ≤10 mm</td></tr>
<tr><td>T3</td><td>&gt;4 cm, or any tumour with DOI &gt;10 mm</td></tr>
<tr><td>T4a</td><td>Invades through cortical bone, into maxillary sinus or skin of face</td></tr>
<tr><td>T4b</td><td>Invades masticator space, pterygoid plates, skull base, or encases internal carotid artery</td></tr></table></div>
<p><b>N</b> (clinical): N1 single ipsilateral node ≤3 cm, ENE−; N2a single ipsilateral 3–6 cm; N2b multiple ipsilateral ≤6 cm; N2c bilateral/contralateral ≤6 cm; N3a &gt;6 cm; N3b clinically overt extranodal extension. <b>M</b>: distant metastasis (lung commonest).</p>
<h3>Management (head and neck MDT)</h3>
<ul>
<li>Staging: examination (± under GA), biopsy, MRI primary/neck, CT chest, ± PET-CT; dental assessment.</li>
<li><b>Surgery</b> is primary treatment for most oral cavity cancers: resection with ~1 cm clinical margin aiming for ≥5 mm clear histological margin; mandibular rim or segmental resection if bone involved.</li>
<li><b>Neck</b>: therapeutic neck dissection for N+; for cN0 — sentinel lymph node biopsy or elective neck dissection (levels I–III/IV) depending on DOI and site.</li>
<li><b>Reconstruction</b>: primary closure, local flaps, free flaps (radial forearm, anterolateral thigh, fibula for mandible, DCIA, scapula).</li>
<li><b>Adjuvant radiotherapy</b> (± concurrent cisplatin): close/positive margins, extranodal extension (chemoradiotherapy), multiple nodes, perineural/lymphovascular invasion, pT3–4.</li>
<li>Prognosis: 5-year survival ~80% for early disease, much lower for advanced/nodal disease. Second primary tumours common — long-term surveillance.</li>
</ul>
<h3>Other malignancies</h3>
<div class="tbl"><table><tr><th>Tumour</th><th>Features</th></tr>
<tr><td>Basal cell carcinoma</td><td>Facial skin (including upper lip skin) — pearly nodule with telangiectasia and rolled edge, ulcerates (rodent ulcer); locally invasive, rarely metastasises. Not a mucosal tumour. Sun exposure, Gorlin syndrome. Surgical excision/Mohs</td></tr>
<tr><td>Lymphoma</td><td>Non-Hodgkin (usually diffuse large B-cell) — soft painless swelling (palate, gingiva, tonsil, Waldeyer's ring), ulcer, neck nodes, B symptoms; MALT lymphoma in Sjögren's; Burkitt's (EBV, jaw in African children); plasmablastic lymphoma in HIV. Biopsy (fresh tissue for flow cytometry), haematology</td></tr>
<tr><td>Melanoma</td><td>Palate and maxillary gingiva commonest oral sites; pigmented or amelanotic; ABCDE; poor prognosis (late detection, rich vascularity). Biopsy any unexplained pigmented lesion; urgent referral</td></tr>
<tr><td>Kaposi sarcoma</td><td>HHV-8; purple macules → nodules on palate and gingiva; HIV (AIDS-defining), transplant recipients, elderly Mediterranean men. Biopsy; ART, intralesional vinblastine, radiotherapy, chemotherapy</td></tr></table></div>`
    },
    {
      id: 'd5-salivary-tumours', title: 'Salivary gland tumours', code: '5.3.2',
      syllabus: [
        'Recognise, investigate and manage benign and malignant major and minor salivary gland tumours, usually by referral to another specialty',
        'Classification of salivary gland and soft tissue tumours'
      ],
      notes: `
<h3>The "80% rules" (approximate)</h3>
<ul>
<li>~80% of salivary tumours arise in the parotid; ~80% of parotid tumours are benign; ~80% of benign parotid tumours are pleomorphic adenomas.</li>
<li>The smaller the gland, the higher the proportion of malignancy: parotid ~20%, submandibular ~40–50%, minor glands ~50%, sublingual &gt;70% malignant.</li>
<li>The <b>palate</b> (junction of hard and soft palate, lateral to midline) is the commonest site for minor gland tumours; the upper lip is next. Lower lip lumps are almost always mucoceles.</li>
</ul>
<h3>Benign tumours</h3>
<div class="tbl"><table><tr><th>Tumour</th><th>Key points</th></tr>
<tr><td>Pleomorphic adenoma</td><td>Commonest; slow-growing painless firm lump; middle-aged women; mixed epithelial/myoepithelial and chondromyxoid stroma; <b>incomplete capsule with pseudopodia</b> — enucleation leads to recurrence; risk of carcinoma ex pleomorphic adenoma with time (~5–10% if long-standing). Treatment: superficial parotidectomy or extracapsular dissection with a cuff of normal tissue; palatal — wide excision including periosteum</td></tr>
<tr><td>Warthin's tumour</td><td>Parotid tail; older men, <b>smokers</b>; bilateral in ~10%; cystic with lymphoid stroma and oncocytic epithelium; "hot" on Tc-99m scan; never in other glands. Excision or observation</td></tr>
<tr><td>Basal cell adenoma, canalicular adenoma (upper lip), oncocytoma, myoepithelioma</td><td>Less common benign types</td></tr></table></div>
<h3>Malignant tumours</h3>
<div class="tbl"><table><tr><th>Tumour</th><th>Key points</th></tr>
<tr><td>Mucoepidermoid carcinoma</td><td>Commonest malignant salivary tumour overall (parotid, palate); mucous, epidermoid and intermediate cells; graded low/intermediate/high; MAML2 fusion; low-grade can look like a mucocele on the palate</td></tr>
<tr><td>Adenoid cystic carcinoma</td><td>Commonest malignancy of minor and submandibular glands; cribriform "Swiss cheese" pattern; <b>perineural invasion</b> (pain, numbness); slow but relentless; late lung metastases (even after 10+ years); MYB–NFIB fusion</td></tr>
<tr><td>Acinic cell carcinoma</td><td>Parotid; younger patients; generally low grade</td></tr>
<tr><td>Polymorphous adenocarcinoma</td><td>Almost exclusively minor glands, especially palate; low grade</td></tr>
<tr><td>Secretory carcinoma</td><td>ETV6–NTRK3 fusion (targetable)</td></tr>
<tr><td>Salivary duct carcinoma, carcinoma ex pleomorphic adenoma</td><td>Aggressive, high grade</td></tr></table></div>
<div class="box flag"><b>Signs suggesting malignancy</b><ul><li>Facial nerve weakness, pain, rapid growth</li><li>Fixation to skin or deep tissues, ulceration</li><li>Cervical lymphadenopathy</li><li>Ill-defined margins on imaging</li></ul></div>
<h3>Investigation and management</h3>
<ul>
<li><b>Ultrasound ± FNAC/core biopsy</b> (US-guided); MRI for deep lobe, extent and perineural spread; CT chest for high-grade malignancy.</li>
<li>Do not incise or enucleate a parotid or palatal lump without diagnosis. For palatal lumps, incisional biopsy then refer.</li>
<li>Parotid: superficial or total parotidectomy preserving the facial nerve (sacrificed only if invaded); submandibular gland excision; wide local excision for minor gland tumours ± neck dissection and adjuvant radiotherapy for malignancy.</li>
<li><b>Parotidectomy complications</b>: facial nerve weakness (temporary common; permanent uncommon), <b>Frey's syndrome</b> (gustatory sweating from aberrant regeneration of auriculotemporal parasympathetic fibres into sweat glands — botulinum toxin), great auricular nerve numbness (earlobe), salivary fistula/sialocele, contour defect.</li>
</ul>`
    },
    {
      id: 'd5-ulcers', title: 'Ulcers: traumatic, aphthous, Behçet\'s, systemic and drug-related', code: '5.3.3',
      syllabus: [
        'Recognise, investigate, diagnose and manage traumatic ulceration, aphthous stomatitis, other oral ulceration, ulceration related to systemic conditions and drugs, glossitis and median rhomboid glossitis'
      ],
      notes: `
<h3>Traumatic ulcer</h3>
<p>Clear cause (sharp tooth, denture, cheek bite, burn), single, painful, yellow base with red halo. Remove cause and review at 2–3 weeks — <b>an ulcer that persists after removing the cause needs biopsy/urgent referral</b>. TUGSE (traumatic ulcerative granuloma with stromal eosinophilia) on the tongue can persist for weeks and mimic carcinoma.</p>
<h3>Recurrent aphthous stomatitis (RAS)</h3>
<div class="tbl"><table><tr><th>Type</th><th>Size and number</th><th>Healing</th><th>Sites</th></tr>
<tr><td>Minor (~80%)</td><td>&lt;10 mm; 1–5</td><td>7–14 days, no scar</td><td>Non-keratinised mucosa</td></tr>
<tr><td>Major</td><td>&gt;10 mm; 1–3</td><td>Weeks–months, scarring</td><td>Any including soft palate, fauces</td></tr>
<tr><td>Herpetiform</td><td>1–3 mm; up to 100, coalescing</td><td>7–14 days</td><td>Any, often ventral tongue/floor</td></tr></table></div>
<ul>
<li>Onset in childhood/adolescence; triggers: trauma, stress, menstruation, foods, SLS toothpaste, stopping smoking; family history.</li>
<li><b>Investigate</b> (especially new onset in adults, severe or atypical): FBC, ferritin, B12, folate, coeliac serology (tTG IgA + total IgA); consider HIV, IBD symptoms, Behçet's features.</li>
<li><b>Associations</b>: haematinic deficiency, coeliac disease, Crohn's/UC, Behçet's, HIV, cyclic neutropenia, PFAPA syndrome (children), MAGIC syndrome, Sweet's syndrome.</li>
</ul>
<div class="box dose"><b>Management</b><ul><li>Correct deficiencies; SLS-free toothpaste; avoid triggers</li><li>Chlorhexidine 0.2% mouthwash; benzydamine rinse/spray for pain</li><li>Topical steroids: hydrocortisone 2.5 mg muco-adhesive buccal tablets four times daily; betamethasone 500 µg soluble tablet dissolved in 10 ml water as a mouthwash (off-label); beclometasone inhaler sprayed onto ulcers</li><li>Doxycycline 100 mg dispersed in water as a rinse (adults)</li><li>Severe/refractory (specialist): colchicine, pentoxifylline, short-course prednisolone, dapsone, thalidomide, azathioprine, biologics</li></ul></div>
<h3>Behçet's disease (BAD/BSR 2024 living guideline)</h3>
<ul>
<li>Variable-vessel vasculitis; HLA-B51; more common along the "Silk Road" (Turkey, Middle East, East Asia).</li>
<li>Recurrent oral ulcers (in almost all, usually first sign) plus genital ulcers (scarring), eye disease (uveitis — can cause blindness), skin lesions (erythema nodosum, pseudofolliculitis), pathergy, vascular (thrombosis), neurological, GI involvement.</li>
<li>Diagnosis is clinical (ICBD criteria: oral ulcers, genital ulcers, ocular lesions score 2 each; skin, neurological, vascular, pathergy 1 each; ≥4 = Behçet's).</li>
<li>Oral ulcers: topical steroids, colchicine, <b>apremilast</b> (PDE4 inhibitor, licensed for Behçet's oral ulcers); azathioprine; TNF inhibitors for severe or organ-threatening disease. UK Behçet's Centres of Excellence; ophthalmology review.</li>
</ul>
<h3>Ulceration related to systemic disease and drugs</h3>
<ul>
<li><b>Haematological</b>: anaemia, leukaemia (with gingival swelling, bleeding), neutropenia, myelodysplasia.</li>
<li><b>GI</b>: Crohn's (linear ulcers, cobblestoning, tags), UC (pyostomatitis vegetans), coeliac.</li>
<li><b>Connective tissue/skin</b>: SLE (palatal ulcers, discoid lesions), lichen planus, vesiculobullous disease, EM.</li>
<li><b>Infections</b>: HSV, VZV, CMV, HIV, syphilis, TB, deep fungal (see Infections).</li>
<li><b>Drugs</b>: <b>nicorandil</b> (large, deep, persistent painful ulcers — switch drug), NSAIDs, methotrexate (toxicity — check dose, folic acid), cytotoxics, mTOR inhibitors (everolimus, sirolimus), alendronate (local contact), beta-blockers, cocaine (palatal perforation).</li>
<li><b>Malignancy</b>: persistent ulcer &gt;3 weeks — urgent referral.</li>
</ul>
<h3>Glossitis and median rhomboid glossitis</h3>
<ul>
<li><b>Atrophic glossitis</b> (smooth, red, sore, depapillated tongue): iron, B12 (Hunter's glossitis — pernicious anaemia), folate, riboflavin deficiency; candidiasis; xerostomia. Check FBC and haematinics.</li>
<li><b>Median rhomboid glossitis</b>: rhomboid/oval red depapillated (sometimes nodular) area in the midline dorsum in front of the circumvallate papillae; associated with Candida, smoking, inhaled steroids; may have a "kissing" erythematous lesion on the palate. Treat with antifungals, stop smoking, rinse after inhalers.</li>
</ul>`
    },
    {
      id: 'd5-lichen', title: 'Oral lichen planus and lichenoid lesions', code: '5.3.2–5.3.3',
      syllabus: [
        'Recognise, investigate and manage oral lichen planus and oral lichenoid lesions/conditions'
      ],
      notes: `
<h3>Oral lichen planus (OLP)</h3>
<ul>
<li>T-cell mediated chronic inflammatory disease; ~1–2% of adults; middle-aged women.</li>
<li>Usually <b>bilateral</b> buccal mucosa, also tongue, gingiva (desquamative gingivitis), lips.</li>
<li>Forms: reticular (Wickham's striae — lace-like white lines), papular, plaque, atrophic/erythematous, erosive/ulcerative, bullous. Reticular is often asymptomatic; atrophic/erosive cause soreness with spicy food and toothpaste.</li>
<li>Extraoral: skin (purple, polygonal, pruritic papules on flexor wrists/shins; Koebner phenomenon), nails, scalp (lichen planopilaris — scarring alopecia), genital (vulvovaginal–gingival syndrome), oesophagus.</li>
</ul>
<h4>Histology</h4>
<p>Hyperkeratosis, saw-tooth rete ridges, <b>basal cell liquefaction (vacuolar) degeneration</b>, Civatte (colloid) bodies — apoptotic keratinocytes, <b>band-like subepithelial T-lymphocyte infiltrate</b>. DIF: shaggy fibrinogen at the basement membrane. Biopsy is recommended for atypical, plaque, erythematous, unilateral or tongue lesions and to exclude dysplasia.</p>
<h3>Oral lichenoid lesions (OLL)</h3>
<div class="tbl"><table><tr><th>Type</th><th>Clues and management</th></tr>
<tr><td>Contact (amalgam, composite, cinnamon)</td><td>Unilateral lesion in direct contact with a restoration; patch testing; replacing the restoration often resolves it</td></tr>
<tr><td>Drug-induced</td><td>Often unilateral/atypical, starts after a new drug: NSAIDs, ACE inhibitors, beta-blockers, antimalarials, oral hypoglycaemics, allopurinol, thiazides, gold, <b>immune checkpoint inhibitors</b>. Liaise with prescriber about alternatives</td></tr>
<tr><td>Graft-versus-host disease</td><td>After haematopoietic stem cell transplant; lichenoid change, sclerosis, xerostomia; OPMD</td></tr>
<tr><td>Lupus erythematosus</td><td>Central erythema/ulceration with radiating white striae; palate; skin lesions; ANA</td></tr></table></div>
<h3>Management</h3>
<ul>
<li>Asymptomatic reticular OLP: explanation, monitoring; no treatment needed.</li>
<li>Remove triggers: sharp teeth, plaque (desquamative gingivitis improves with meticulous oral hygiene), SLS toothpaste, spicy foods; treat secondary candidiasis.</li>
<li><b>Topical corticosteroids</b>: betamethasone soluble mouthwash, beclometasone spray, fluticasone nasules as rinse, clobetasol in adhesive paste (specialist); custom trays for gingival disease.</li>
<li><b>Topical tacrolimus 0.1%</b> ointment (off-label) for steroid-resistant disease.</li>
<li>Systemic (severe): short prednisolone course, hydroxychloroquine, mycophenolate, azathioprine, methotrexate.</li>
<li><b>Follow-up</b>: malignant transformation ~1% (higher for erosive, tongue, OLL). Review at least annually; biopsy any change (red, nodular, ulcerated, non-healing).</li>
</ul>`
    },
    {
      id: 'd5-vb', title: 'Vesiculobullous conditions', code: '5.3.3',
      syllabus: [
        'Recognise vesiculobullous conditions and know how to investigate and refer'
      ],
      notes: `
<h3>Investigation</h3>
<ul>
<li>Biopsy: lesional (perilesional edge) in formalin for histology + perilesional normal-looking tissue <b>fresh or in Michel's medium</b> for direct immunofluorescence (DIF).</li>
<li>Serology: indirect immunofluorescence and ELISA for desmoglein 1 and 3 (pemphigus), BP180/BP230 (pemphigoid).</li>
<li>Nikolsky sign: gentle lateral pressure causes epithelium to slide off (pemphigus, sometimes MMP).</li>
</ul>
<div class="tbl"><table><tr><th>Condition</th><th>Clinical</th><th>Histology / DIF</th><th>Management</th></tr>
<tr><td>Pemphigus vulgaris</td><td>Middle-aged; oral lesions often first; flaccid blisters rupture quickly → widespread painful erosions; skin blisters; Nikolsky +</td><td><b>Intraepithelial suprabasal acantholysis</b> ("tombstone" basal cells); DIF: intercellular IgG/C3 ("chicken-wire"); anti-Dsg3 (mucosal) ± Dsg1 (skin)</td><td>Dermatology: systemic steroids + <b>rituximab</b> (first line); azathioprine/MMF as steroid-sparing; potentially fatal if untreated</td></tr>
<tr><td>Mucous membrane pemphigoid</td><td>Older women; desquamative gingivitis most common oral sign; tense blisters (may be blood-filled); <b>scarring</b> — eyes (symblepharon, blindness), larynx, oesophagus, genitals</td><td><b>Subepithelial split</b>; DIF: linear IgG/C3 (± IgA) along basement membrane; BP180, laminin 332 (anti-laminin 332 linked with malignancy)</td><td>Topical steroids (gingival trays), dapsone, doxycycline, MMF, azathioprine; cyclophosphamide/rituximab for ocular disease; <b>ophthalmology referral for all</b></td></tr>
<tr><td>Bullous pemphigoid</td><td>Elderly; tense skin bullae; oral involvement uncommon; DPP-4 inhibitors (gliptins) can trigger</td><td>Subepidermal; linear IgG/C3; BP180/BP230</td><td>Dermatology: potent topical/systemic steroids, doxycycline</td></tr>
<tr><td>Erythema multiforme</td><td>Acute, self-limiting; young adults; triggered by HSV (commonest), Mycoplasma, drugs; haemorrhagic crusted lips, widespread oral ulcers; target lesions on skin (acral). EM major = mucosal involvement</td><td>Non-specific; keratinocyte necrosis, interface inflammation</td><td>Supportive (fluids, analgesia, CHX, topical steroids); systemic steroids in severe; aciclovir prophylaxis for recurrent HSV-associated EM</td></tr>
<tr><td>SJS / TEN</td><td>Drug-induced (carbamazepine, lamotrigine, phenytoin, allopurinol, sulfonamides, NSAIDs); fever, widespread mucosal and skin necrosis (SJS &lt;10% body surface, TEN &gt;30%)</td><td>Full-thickness epidermal necrosis</td><td>Emergency: stop drug, burns/ITU, ophthalmology; mortality up to ~30% in TEN</td></tr>
<tr><td>Linear IgA disease</td><td>Blisters, often drug-induced (vancomycin)</td><td>Linear IgA at BMZ</td><td>Dapsone</td></tr>
<tr><td>Dermatitis herpetiformis</td><td>Itchy vesicles on extensor surfaces; coeliac disease; oral lesions rare</td><td>Granular IgA in dermal papillae</td><td>Gluten-free diet, dapsone</td></tr>
<tr><td>Angina bullosa haemorrhagica</td><td>Sudden blood blister on soft palate in older adults, often after eating; inhaled steroids; ruptures and heals in days</td><td>Subepithelial; DIF negative</td><td>Reassure; check platelets/clotting if recurrent or atypical</td></tr>
<tr><td>Epidermolysis bullosa</td><td>Inherited; blistering from minor trauma since birth; scarring, microstomia; high SCC risk (recessive dystrophic)</td><td>Level of split varies by type</td><td>Specialist MDT; gentle dental care</td></tr></table></div>
<div class="box pearl"><b>Exam pearl</b>Pemphigus = intraepithelial, intercellular "chicken-wire" DIF, flaccid blisters, rituximab. Pemphigoid = subepithelial, linear BMZ DIF, tense blisters, scarring, eyes.</div>`
    },
    {
      id: 'd5-pigmented', title: 'Pigmented lesions', code: '5.3.4',
      syllabus: [
        'Recognise, investigate, diagnose and manage racial/physiological pigmentation, melanotic macules and naevi, amalgam tattoos, drug or systemic pigmentation, and malignant melanoma'
      ],
      notes: `
<h3>Approach</h3>
<p>Localised or generalised? Brown/black (melanin) vs blue-grey (exogenous, deep) vs red/purple (vascular — blanches on pressure)? Long-standing and stable, or new and changing? Any unexplained, enlarging or irregular pigmented lesion — <b>biopsy (excisional where feasible) or urgent referral</b>.</p>
<div class="tbl"><table><tr><th>Lesion</th><th>Features</th><th>Management</th></tr>
<tr><td>Racial (physiological) pigmentation</td><td>Symmetrical brown pigmentation, especially attached gingiva; long-standing; darker skin types</td><td>Reassure</td></tr>
<tr><td>Smoker's melanosis</td><td>Brown macules on anterior labial gingiva, buccal mucosa</td><td>Smoking cessation; fades slowly</td></tr>
<tr><td>Melanotic macule</td><td>Solitary flat brown macule &lt;1 cm, often lower lip vermilion; uniform; stable</td><td>Biopsy if uncertain/changing</td></tr>
<tr><td>Melanocytic naevus</td><td>Raised or flat; palate commonest; blue naevus (deep, blue)</td><td>Excisional biopsy (melanoma can't be excluded clinically)</td></tr>
<tr><td>Amalgam tattoo</td><td>Blue-grey/black macule near amalgam restoration, apicectomy site or extraction socket; may be radiopaque</td><td>Radiograph; biopsy if doubt</td></tr>
<tr><td>Drug-induced</td><td>Minocycline (blue-grey bone/teeth, mucosa), antimalarials (chloroquine, hydroxychloroquine — grey palate), imatinib (palate), zidovudine, ketoconazole, oral contraceptive, chemotherapy (busulfan, cyclophosphamide), heavy metals (lead/bismuth line)</td><td>Drug history; liaise with prescriber</td></tr>
<tr><td>Addison's disease</td><td>Diffuse brown pigmentation of buccal mucosa, gingiva, palms/creases; fatigue, weight loss, hypotension; raised ACTH (melanocyte stimulation)</td><td>Urgent medical referral; risk of adrenal crisis</td></tr>
<tr><td>Peutz–Jeghers syndrome</td><td>Perioral and buccal freckling from childhood; GI hamartomatous polyps (intussusception), cancer risk; STK11 mutation</td><td>GI/genetics referral</td></tr>
<tr><td>Other systemic</td><td>McCune–Albright (café-au-lait, "coast of Maine"), NF1 ("coast of California"), Laugier–Hunziker, haemochromatosis, HIV, post-inflammatory (lichen planus)</td><td>Investigate as appropriate</td></tr>
<tr><td>Kaposi sarcoma / vascular lesions</td><td>Purple; vascular lesions blanch on diascopy</td><td>See relevant topics</td></tr>
<tr><td>Malignant melanoma</td><td>Palate and maxillary gingiva; may be amelanotic; satellite lesions; ulceration, bleeding</td><td>Urgent referral; poor prognosis (5-year survival ~15–30%)</td></tr></table></div>
<div class="box flag"><b>ABCDE for pigmented lesions</b><p>Asymmetry, Border irregularity, Colour variation, Diameter &gt;6 mm, Evolution (change in size, shape, colour, symptoms). Oral melanoma often presents late — have a low threshold to biopsy.</p></div>`
    },
    {
      id: 'd5-granulomatous', title: 'Angioedema and granulomatous conditions', code: '5.3.5',
      syllabus: [
        'Recognise, investigate, diagnose and manage angioedema, orofacial granulomatosis, oral manifestations of IBD, sarcoidosis, and mycobacterial infection (TB)'
      ],
      notes: `
<h3>Angioedema</h3>
<div class="tbl"><table><tr><th>Type</th><th>Mechanism</th><th>Features</th><th>Treatment</th></tr>
<tr><td>Allergic</td><td>Histamine (IgE, type I)</td><td>Rapid onset, urticaria, itch, ± anaphylaxis; triggers: foods, latex, drugs</td><td>IM adrenaline if airway/anaphylaxis; antihistamines, steroids; allergy referral</td></tr>
<tr><td>Hereditary (HAE types I/II)</td><td>Bradykinin — C1 esterase inhibitor deficiency or dysfunction (autosomal dominant)</td><td>No urticaria or itch; recurrent swelling of face, lips, larynx, gut; triggered by <b>dental treatment</b>, trauma, stress, oestrogens; low C4 (screening) and low C1-INH level/function</td><td>Acute: <b>C1-INH concentrate or icatibant</b> (bradykinin B2 antagonist); adrenaline/antihistamine don't work. Short-term prophylaxis before dental procedures (C1-INH concentrate) per immunology plan; long-term prophylaxis (e.g. lanadelumab, berotralstat)</td></tr>
<tr><td>ACE inhibitor-induced</td><td>Bradykinin (reduced breakdown)</td><td>Can start years after beginning the drug; tongue/lips; airway risk</td><td>Stop ACE inhibitor permanently; airway support; icatibant sometimes used</td></tr>
<tr><td>Acquired C1-INH deficiency</td><td>Consumption (lymphoproliferative disease, autoimmune)</td><td>Later onset, low C1q</td><td>Investigate underlying cause</td></tr></table></div>
<h3>Orofacial granulomatosis (OFG)</h3>
<ul>
<li>Non-caseating granulomatous inflammation of the oral and facial tissues in the absence of systemic disease (diagnosis of exclusion).</li>
<li>Features: persistent or recurrent <b>lip swelling</b> (often lower lip), angular cheilitis, lip fissures, mucosal cobblestoning, mucosal tags, linear ulcers in the sulci, gingival swelling (full-width), facial swelling.</li>
<li><b>Melkersson–Rosenthal syndrome</b>: lip swelling + fissured tongue + facial palsy.</li>
<li>Strong association with <b>Crohn's disease</b> (especially in children); possible dietary triggers (cinnamon, benzoates).</li>
<li>Investigation: biopsy (non-caseating granulomas, lymphoedema), FBC, haematinics, ESR/CRP, ACE, calcium, coeliac serology, faecal calprotectin, ± CXR; patch testing; GI referral if any GI symptoms or children.</li>
<li>Management: cinnamon- and benzoate-free diet (many respond), topical steroids or tacrolimus, intralesional triamcinolone, systemic steroids, azathioprine, anti-TNF (infliximab, adalimumab), thalidomide.</li>
</ul>
<h3>Oral manifestations of inflammatory bowel disease</h3>
<ul>
<li><b>Crohn's</b>: cobblestoning, mucosal tags, linear ulcers, lip swelling, angular cheilitis, gingival swelling, aphthous ulcers (haematinic deficiency from malabsorption).</li>
<li><b>Ulcerative colitis</b>: aphthous ulcers, <b>pyostomatitis vegetans</b> (multiple yellow pustules in a "snail-track" pattern).</li>
<li>Drug effects: steroids, immunosuppressants (infection), sulfasalazine (lichenoid).</li>
</ul>
<h3>Sarcoidosis</h3>
<ul>
<li>Multisystem non-caseating granulomatous disease; lungs (bilateral hilar lymphadenopathy), skin, eyes, lymph nodes.</li>
<li>Oral/facial: mucosal nodules or swelling, gingival enlargement, salivary gland enlargement and xerostomia, facial palsy.</li>
<li><b>Heerfordt syndrome</b> (uveoparotid fever): parotid swelling, uveitis, facial palsy, fever. <b>Löfgren syndrome</b>: erythema nodosum, bilateral hilar lymphadenopathy, arthralgia.</li>
<li>Investigations: CXR, serum ACE, calcium (hypercalcaemia), biopsy (labial gland/lesion); respiratory referral. Treatment: corticosteroids, methotrexate.</li>
</ul>
<h3>Tuberculosis</h3>
<ul>
<li>Oral TB usually secondary to pulmonary disease: chronic painless (or painful) ulcer, typically <b>dorsum of tongue</b>, with undermined edges; also TB osteomyelitis, cervical lymphadenitis (scrofula — "cold abscess", matted nodes, sinus formation).</li>
<li>Atypical (non-tuberculous) mycobacteria: unilateral submandibular/cervical lymphadenitis in young children with violaceous skin — excision.</li>
<li>Diagnosis: biopsy (<b>caseating granulomas</b>, Ziehl–Neelsen stain for acid-fast bacilli), culture, PCR, CXR, IGRA/Mantoux.</li>
<li>Notifiable disease; refer to respiratory/ID. Treatment: 6 months rifampicin + isoniazid, with pyrazinamide + ethambutol for the first 2 months. <b>Rifampicin is a potent enzyme inducer</b> (reduces warfarin, oral contraceptive, midazolam efficacy; orange secretions).</li>
<li>Infection control: open pulmonary TB is infectious — defer elective treatment.</li>
</ul>`
    },
    {
      id: 'd5-vascular', title: 'Vascular and lymphatic lesions', code: '5.3.6',
      syllabus: [
        'Recognise, investigate, diagnose and manage oral vascular malformations, lymphovascular malformations and haemangiomas, with referral as appropriate'
      ],
      notes: `
<h3>ISSVA classification</h3>
<div class="tbl"><table><tr><th></th><th>Vascular tumours</th><th>Vascular malformations</th></tr>
<tr><td>Nature</td><td>Endothelial proliferation</td><td>Abnormal vessel structure (errors of development)</td></tr>
<tr><td>Example</td><td>Infantile haemangioma, pyogenic granuloma (lobular capillary haemangioma), congenital haemangioma, Kaposi sarcoma</td><td>Capillary, venous, lymphatic (low-flow); arteriovenous (high-flow); combined</td></tr>
<tr><td>Timing</td><td>Infantile haemangioma appears weeks after birth</td><td>Present at birth (may not be visible)</td></tr>
<tr><td>Course</td><td>Rapid proliferation (first year) then slow involution</td><td>Grow in proportion with the child; never involute; may expand with trauma, hormones, infection</td></tr>
<tr><td>Marker</td><td>GLUT-1 positive (infantile haemangioma)</td><td>GLUT-1 negative</td></tr></table></div>
<h3>Assessment</h3>
<ul>
<li>Clinical: blue/purple/red, compressible, <b>blanches on diascopy</b> (pressing a glass slide), may enlarge with dependency/Valsalva (venous); thrill/bruit/pulsation/warmth (AVM).</li>
<li>Imaging: Doppler ultrasound (flow), MRI/MRA (extent), angiography (AVM, before intervention). Phleboliths on radiograph suggest venous malformation.</li>
<li><b>Avoid biopsy</b> of suspected vascular lesions (haemorrhage); aspirate radiolucent jaw lesions before opening.</li>
<li>Intraosseous AVMs near teeth can cause <b>catastrophic haemorrhage on extraction</b> — warning signs: mobile teeth, bleeding from gingival margin, pulsation, bruit, radiolucency. Pre-operative angiography/embolisation.</li>
</ul>
<h3>Management</h3>
<ul>
<li><b>Infantile haemangioma</b>: observation for most (involution over years); <b>propranolol</b> first line for problematic lesions (airway, vision, ulceration, disfigurement).</li>
<li><b>Venous malformations</b>: observation, sclerotherapy (sodium tetradecyl sulfate, bleomycin, ethanol), laser (Nd:YAG), surgical excision for small/localised lesions; cryotherapy for small oral lesions.</li>
<li><b>Lymphatic malformations</b> (lymphangioma, cystic hygroma): macrocystic — sclerotherapy (doxycycline, bleomycin, OK-432); microcystic of tongue — "frogspawn" vesicles, macroglossia; sirolimus; surgery/laser.</li>
<li><b>Arteriovenous malformations</b>: embolisation followed by surgical resection in specialist centres.</li>
<li>Varices and venous lakes (older adults, lips/ventral tongue): reassure, or excise/laser/cryotherapy for cosmesis or bleeding.</li>
</ul>
<h3>Associated syndromes</h3>
<ul>
<li><b>Sturge–Weber</b>: facial port-wine stain (V1 ± V2), leptomeningeal angiomatosis (seizures), glaucoma; gingival vascular hyperplasia — bleeding risk with surgery.</li>
<li><b>Hereditary haemorrhagic telangiectasia</b> (Osler–Weber–Rendu): telangiectasia of lips, tongue, nose (epistaxis); pulmonary/cerebral AVMs (risk of brain abscess — antibiotic prophylaxis may be advised for dental procedures in patients with pulmonary AVMs).</li>
<li>Klippel–Trénaunay, blue rubber bleb naevus, Maffucci syndrome.</li>
</ul>`
    },
    {
      id: 'd5-infections', title: 'Infective lesions: bacterial, fungal, viral and HIV', code: '5.3.7',
      syllabus: [
        'Recognise, investigate, diagnose and manage bacterial, mycobacterial and candidal infections, herpes simplex and zoster, HIV and HPV infections, including infective ulceration (HSV, VZV, chickenpox, hand foot and mouth, herpes labialis, CMV, syphilis, TB)'
      ],
      notes: `
<h3>Bacterial</h3>
<ul>
<li><b>Necrotising gingivitis</b>: painful, bleeding, punched-out interdental papillae with grey slough, halitosis; fusospirochaetal; risks: smoking, stress, poor hygiene, immunosuppression (HIV). Treat: debridement, OHI, chlorhexidine/hydrogen peroxide rinse, <b>metronidazole 400 mg three times daily for 3 days</b> if systemic involvement.</li>
<li><b>Syphilis</b> (<i>Treponema pallidum</i>, rising incidence): primary chancre (painless indurated ulcer, lip/tongue, with nodes), secondary (mucous patches, "snail-track" ulcers, rash on palms/soles), tertiary (gumma — palatal perforation; syphilitic leukoplakia). Serology (treponemal EIA, TPPA, RPR); refer to sexual health; benzathine penicillin.</li>
<li><b>Actinomycosis</b>: chronic, woody-hard swelling at the angle of the jaw with multiple discharging sinuses and "sulphur granules"; often after extraction or trauma. Drain, culture (prolonged anaerobic), long-course penicillin (weeks–months).</li>
<li>Impetigo (honey-crusted lips — topical hydrogen peroxide 1% or fusidic acid; flucloxacillin if widespread), angular cheilitis (<i>S. aureus</i> + <i>Candida</i>), scarlet fever (strawberry tongue), gonococcal pharyngitis.</li>
<li>Mycobacterial infection — see granulomatous conditions.</li>
</ul>
<h3>Candidiasis</h3>
<div class="tbl"><table><tr><th>Type</th><th>Features</th></tr>
<tr><td>Acute pseudomembranous (thrush)</td><td>Creamy white plaques that wipe off leaving red base; infants, inhaled steroids, immunosuppression</td></tr>
<tr><td>Acute erythematous</td><td>Sore red mucosa, often tongue, after broad-spectrum antibiotics</td></tr>
<tr><td>Chronic erythematous (denture stomatitis)</td><td>Erythema under upper denture, usually painless; Newton type I (petechial), II (diffuse), III (papillary)</td></tr>
<tr><td>Chronic hyperplastic</td><td>Adherent white/speckled plaque at commissures; smokers; can be dysplastic — biopsy</td></tr>
<tr><td>Angular cheilitis</td><td>Fissured red commissures; Candida and/or <i>S. aureus</i>; reduced vertical dimension, deficiencies</td></tr>
<tr><td>Median rhomboid glossitis</td><td>Midline dorsal tongue depapillation</td></tr>
<tr><td>Chronic mucocutaneous candidiasis</td><td>Persistent oral, nail and skin candidiasis from childhood; APECED (AIRE mutation) with endocrinopathies</td></tr></table></div>
<p><b>Predisposing factors</b>: local (dentures, xerostomia, inhaled steroids, smoking, antibiotics, poor hygiene) and systemic (diabetes, immunosuppression, HIV, haematinic deficiency, extremes of age, endocrine disease).</p>
<div class="box dose"><b>Treatment (adult)</b><ul><li>Correct predisposing factors; denture hygiene — remove at night, clean and soak (chlorhexidine or dilute hypochlorite for all-acrylic dentures)</li><li>Nystatin oral suspension 100,000 units/ml, 1 ml four times daily for 7 days (continue 48 h after resolution)</li><li>Miconazole oral gel 24 mg/ml, 2.5 ml four times daily — <b>avoid with warfarin and statins</b></li><li>Fluconazole 50 mg daily for 7 days (14 days for denture stomatitis in some regimens) — interacts with warfarin, statins, QT-prolonging drugs</li><li>Angular cheilitis: miconazole cream (± hydrocortisone) or fusidic acid cream if staphylococcal</li></ul></div>
<p>Deep fungal infections: <b>mucormycosis</b> (black necrotic palate in poorly controlled diabetes/DKA, immunosuppression — surgical emergency), aspergillosis (sinus), histoplasmosis (ulcers in immunosuppressed).</p>
<h3>Viral</h3>
<div class="tbl"><table><tr><th>Condition</th><th>Features</th><th>Management</th></tr>
<tr><td>Primary herpetic gingivostomatitis (HSV-1)</td><td>Young children; fever, malaise, vesicles → coalescing ulcers on any mucosa including gingiva, lymphadenopathy; 10–14 days</td><td>Fluids (dehydration risk), paracetamol/ibuprofen, soft diet, CHX/benzydamine; <b>aciclovir</b> if seen early (within ~72 h) or immunocompromised (adult 200 mg five times daily for 5 days)</td></tr>
<tr><td>Herpes labialis</td><td>Recurrent; prodromal tingling; triggers UV, stress, fever, menstruation</td><td>Aciclovir 5% cream five times daily for 5 days from prodrome; sunblock</td></tr>
<tr><td>Recurrent intraoral herpes</td><td>Small ulcer clusters on keratinised mucosa (hard palate, gingiva), e.g. after LA injection</td><td>Supportive; atypical large chronic ulcers in immunosuppressed — systemic antivirals</td></tr>
<tr><td>Herpes zoster (V2/V3)</td><td>Unilateral dermatomal vesicles/ulcers stopping at midline, preceded by pain (may mimic toothache); <b>Hutchinson's sign</b> (nose tip — V1 nasociliary → eye involvement)</td><td>Aciclovir 800 mg five times daily for 7 days (or valaciclovir 1 g three times daily) within 72 h; urgent ophthalmology for V1; risk of PHN</td></tr>
<tr><td>Chickenpox</td><td>Primary VZV; oral vesicles with skin rash</td><td>Supportive; antivirals for adults/immunosuppressed</td></tr>
<tr><td>Hand, foot and mouth disease</td><td>Coxsackie A16, enterovirus 71; oral ulcers + vesicles on hands/feet; children</td><td>Supportive</td></tr>
<tr><td>Herpangina</td><td>Coxsackie A; small vesicles/ulcers on soft palate and fauces, fever</td><td>Supportive</td></tr>
<tr><td>EBV</td><td>Infectious mononucleosis (palatal petechiae, tonsillar exudate, nodes; rash with amoxicillin); oral hairy leukoplakia</td><td>Supportive; avoid contact sport (splenomegaly)</td></tr>
<tr><td>CMV</td><td>Chronic ulcers in immunosuppressed (owl's-eye inclusions on biopsy)</td><td>Ganciclovir/valganciclovir (specialist)</td></tr>
<tr><td>HPV</td><td>Squamous papilloma (HPV 6/11), verruca vulgaris (2/4), condyloma acuminatum (6/11), focal epithelial hyperplasia — Heck's disease (13/32); HPV-16 oropharyngeal cancer</td><td>Excision (include base); laser/cryotherapy for multiple lesions; HPV vaccination</td></tr></table></div>
<h3>HIV</h3>
<ul>
<li>Lesions strongly associated with HIV: <b>candidiasis, oral hairy leukoplakia, Kaposi sarcoma, non-Hodgkin lymphoma, linear gingival erythema, necrotising gingivitis/periodontitis</b>.</li>
<li>Others: salivary gland enlargement (lymphoepithelial cysts), xerostomia, HPV warts (increase even on ART), atypical ulcers (HSV, CMV, major aphthae), hyperpigmentation.</li>
<li>Offer HIV testing when lesions suggest it. Know CD4 count and viral load; "undetectable = untransmittable".</li>
<li>ART interactions: ritonavir/cobicistat-boosted regimens strongly inhibit CYP3A4 (avoid midazolam, some azoles, clarithromycin); standard infection control.</li>
</ul>`
    },
    {
      id: 'd5-salivary', title: 'Salivary gland disease', code: '5.3.8',
      syllabus: [
        'Infective sialadenitis: bacterial, viral (mumps, HIV, EBV), fungal',
        'Immune-related, metabolic, inherited and developmental salivary conditions including primary and secondary Sjögren\'s, sarcoidosis, SLE',
        'Obstructive, inflammatory and reactive disorders including surgical management: sialoliths, mucoceles, ranulae, necrotising sialometaplasia, recurrent parotitis, sialadenitis',
        'Disorders of salivary flow: xerostomia and sialorrhoea'
      ],
      notes: `
<h3>Infective sialadenitis</h3>
<ul>
<li><b>Acute bacterial (suppurative) parotitis</b>: <i>S. aureus</i>, streptococci, anaerobes. Risks: dehydration, elderly, post-operative, anticholinergic drugs, poor oral hygiene, Sjögren's, duct obstruction. Painful tender swelling, pus from the duct, fever. Treat: hydration, sialogogues, massage, warm compresses, antibiotics (e.g. co-amoxiclav, or flucloxacillin + metronidazole), culture pus; ultrasound to exclude abscess (drain).</li>
<li><b>Juvenile recurrent parotitis</b>: children ~3–6 years; recurrent parotid swelling; sialectasis on US/sialography; usually resolves by puberty; antibiotics for episodes, sialendoscopy with steroid irrigation.</li>
<li><b>Mumps</b> (paramyxovirus): bilateral painful parotitis after 2–3 week incubation; complications orchitis, oophoritis, meningitis, pancreatitis, deafness; notifiable; MMR vaccination; saliva swab PCR.</li>
<li>HIV (lymphoepithelial cysts, diffuse infiltrative lymphocytosis), EBV, CMV, coxsackie; fungal infection rare.</li>
</ul>
<h3>Sjögren's syndrome</h3>
<ul>
<li>Autoimmune exocrinopathy: primary, or secondary to RA, SLE, systemic sclerosis. Women 9:1, 40–60 years.</li>
<li>Dry mouth (caries — cervical/incisal, candidiasis, dysphagia), dry eyes, parotid swelling, fatigue, arthralgia, Raynaud's, vasculitis.</li>
<li><b>Lymphoma risk</b> (mainly MALT, ~5% lifetime): persistent gland enlargement, lymphadenopathy, purpura, low C4, cryoglobulins.</li>
<li>Investigations: anti-Ro/SSA, anti-La/SSB, ANA, RF, immunoglobulins, ESR, complement; salivary flow; Schirmer's test; ultrasound (hypoechoic "honeycomb" pattern); <b>labial gland biopsy</b> (focal lymphocytic sialadenitis, focus score ≥1 per 4 mm²).</li>
</ul>
<div class="box guide"><b>ACR/EULAR 2016 classification (score ≥4)</b><ul><li>Labial gland focal lymphocytic sialadenitis, focus score ≥1 — 3 points</li><li>Anti-SSA/Ro positive — 3 points</li><li>Ocular staining score ≥5 (or van Bijsterveld ≥4) — 1 point</li><li>Schirmer's test ≤5 mm/5 min — 1 point</li><li>Unstimulated whole saliva flow ≤0.1 ml/min — 1 point</li></ul><p>Requires dry eye/mouth symptoms (or systemic disease activity) and exclusion of head and neck radiotherapy, active hepatitis C, AIDS, sarcoidosis, amyloidosis, GVHD, IgG4-related disease.</p></div>
<p><b>Management</b>: saliva substitutes, sugar-free gum/lozenges, <b>pilocarpine</b> 5 mg three to four times daily (muscarinic agonist — sweating, flushing, urinary frequency; avoid in uncontrolled asthma, narrow-angle glaucoma, cardiac disease), hydroxychloroquine (rheumatology), 5000 ppm fluoride toothpaste, fluoride varnish, antifungals, regular review and lymphoma vigilance.</p>
<p>Other immune/metabolic: sarcoidosis (Heerfordt), SLE, <b>IgG4-related disease</b> (Mikulicz disease, Küttner tumour — steroid-responsive), <b>sialosis</b> (bilateral painless parotid enlargement: alcohol, diabetes, bulimia, malnutrition, drugs), GVHD, radiation.</p>
<h3>Sialolithiasis</h3>
<ul>
<li>~80–90% <b>submandibular</b>: long duct running uphill against gravity, more alkaline, mucinous saliva with higher calcium and phosphate. Parotid ~10%.</li>
<li>Meal-time pain and swelling ("salivary colic"), recurrent infection.</li>
<li>Imaging: ultrasound first line; lower true occlusal radiograph (most submandibular stones radiopaque; many parotid stones radiolucent); sialography/CBCT; sialendoscopy.</li>
</ul>
<div class="tbl"><table><tr><th>Option</th><th>Indication</th></tr>
<tr><td>Conservative (hydration, sialogogues, massage)</td><td>Small stones likely to pass</td></tr>
<tr><td>Transoral duct incision</td><td>Palpable stone in anterior/mid submandibular duct — place a stay suture behind the stone to stop it slipping back, incise along the duct over the stone; beware the lingual nerve (crosses the duct posteriorly near the second molar)</td></tr>
<tr><td>Sialendoscopy with basket retrieval</td><td>Mobile stones up to ~4–5 mm (submandibular) or ~3 mm (parotid)</td></tr>
<tr><td>Lithotripsy (extracorporeal or intracorporeal laser/pneumatic)</td><td>Larger or impacted stones, gland preservation</td></tr>
<tr><td>Gland excision</td><td>Intraglandular/hilar stones not otherwise retrievable, recurrent sialadenitis, non-functioning gland — risks marginal mandibular, lingual and hypoglossal nerves, scar</td></tr></table></div>
<h3>Mucoceles and ranulae</h3>
<ul>
<li><b>Mucocele</b>: usually extravasation — a minor gland duct is severed by trauma and mucin pools in connective tissue (pseudocyst lined by granulation tissue). Commonest on the <b>lower lip</b>; also ventral tongue (glands of Blandin–Nuhn), buccal mucosa. Bluish, fluctuant, ruptures and recurs. Treat by excision with the associated minor glands (or micro-marsupialisation, laser, cryotherapy). Retention cysts (true epithelial lining) occur in older patients. An upper lip "mucocele" should raise suspicion of a salivary tumour.</li>
<li><b>Ranula</b>: extravasation from the <b>sublingual gland</b>; bluish "frog-belly" floor-of-mouth swelling lateral to the midline. <b>Plunging ranula</b> extends through or behind mylohyoid into the neck (submandibular swelling) — US/MRI. Treatment of choice: <b>excision of the sublingual gland</b> with evacuation of the ranula (low recurrence); marsupialisation alone has high recurrence. Differentials: dermoid cyst (midline), lymphatic malformation.</li>
</ul>
<h3>Necrotising sialometaplasia</h3>
<ul>
<li>Ischaemic necrosis of minor salivary glands, usually the posterior hard palate; unilateral painful swelling → deep crater-like ulcer 1–3 cm.</li>
<li>Triggers: LA injection, surgery, trauma, smoking, bulimia, intubation.</li>
<li>Histology: lobular necrosis with squamous metaplasia of ducts — <b>can mimic SCC or mucoepidermoid carcinoma</b>; give the pathologist the clinical history.</li>
<li>Heals spontaneously in 4–10 weeks; supportive care. Biopsy to exclude malignancy.</li>
</ul>
<h3>Disorders of salivary flow</h3>
<ul>
<li><b>Xerostomia/hyposalivation</b> causes: drugs (antidepressants, antipsychotics, antihistamines, anticholinergics, diuretics, antihypertensives, opioids, benzodiazepines), radiotherapy, Sjögren's, HIV, hepatitis C, sarcoidosis, GVHD, diabetes, dehydration, renal failure, radioiodine, anxiety. Consequences: caries, candidiasis, sialadenitis, dysphagia, dysgeusia, denture problems, burning.</li>
<li>Management: treat cause (medication review), saliva substitutes, sialogogues (gum, pilocarpine), fluoride, diet advice, antifungals.</li>
<li><b>Sialorrhoea/drooling</b>: neuromuscular disorders (Parkinson's, cerebral palsy, MND, stroke), drugs (clozapine), oral inflammation. Management: SLT and posture, glycopyrronium, hyoscine patch, sublingual atropine, <b>botulinum toxin</b> into submandibular and parotid glands (US-guided), surgery (duct rerouting/ligation, gland excision).</li>
</ul>`
    },
    {
      id: 'd5-hyperplastic', title: 'Hyperplastic and other soft tissue lumps', code: '5.3.10–5.3.11',
      syllabus: [
        'Mucosal hyperplastic lesions including surgical management: fibroepithelial hyperplasia, pyogenic granulomas, squamous cell papillomas, epulides, drug-induced gingival overgrowth',
        'Other soft tissue lesions: neuromas, neurilemmomas, neurofibromas; lipomas and fibrolipomas; granular cell tumours; haemangiomas and lymphangiomas; sebaceous cysts; amyloidosis; Kaposi sarcoma, fibrosarcoma and rhabdomyosarcoma'
      ],
      notes: `
<h3>Reactive hyperplastic lesions</h3>
<div class="tbl"><table><tr><th>Lesion</th><th>Features</th><th>Management</th></tr>
<tr><td>Fibroepithelial polyp</td><td>Commonest oral lump; firm pink, sessile or pedunculated; buccal mucosa along occlusal line, lips, tongue; leaf fibroma under a denture</td><td>Excision biopsy; remove irritant</td></tr>
<tr><td>Denture-induced hyperplasia (epulis fissuratum)</td><td>Folds of fibrous tissue in the sulcus at an over-extended denture flange</td><td>Adjust/replace denture; excise residual tissue</td></tr>
<tr><td>Pyogenic granuloma</td><td>Red, soft, lobulated, bleeds easily, grows fast; gingiva (most), lips, tongue; "pregnancy epulis" (2nd–3rd trimester); lobular capillary proliferation</td><td>Excise to periosteum, remove calculus/irritant; in pregnancy, defer unless problematic (may regress postpartum); recurrence ~15%</td></tr>
<tr><td>Peripheral giant cell granuloma</td><td>Purple-red gingival/alveolar swelling anterior to molars; may cause cupped erosion of bone; multinucleated giant cells</td><td>Excise with curettage of the base; check calcium, PTH, ALP if multiple/recurrent (hyperparathyroidism)</td></tr>
<tr><td>Fibrous epulis / peripheral ossifying fibroma</td><td>Firm pink gingival swelling arising from the papilla; POF has calcifications</td><td>Excise to periosteum, scale adjacent teeth; POF recurs ~15%</td></tr>
<tr><td>Squamous papilloma</td><td>HPV 6/11; white or pink cauliflower-like, pedunculated; soft palate, tongue, lips</td><td>Excise including base</td></tr>
<tr><td>Congenital epulis</td><td>Newborn girls, maxillary anterior alveolus</td><td>Excision; doesn't recur</td></tr></table></div>
<h3>Drug-induced gingival overgrowth</h3>
<ul>
<li>Drugs: <b>phenytoin</b> (~50%), <b>ciclosporin</b> (~25–30%), calcium channel blockers (nifedipine most; amlodipine, diltiazem, verapamil), sodium valproate.</li>
<li>Begins at interdental papillae (labial, anterior), firm and fibrous; worse with poor plaque control.</li>
<li>Management: meticulous oral hygiene and periodontal therapy; liaise with the physician about drug substitution (e.g. ciclosporin → tacrolimus; nifedipine → another class); surgical removal (gingivectomy by scalpel, electrosurgery or laser; flap surgery for severe cases); recurrence if drug continued.</li>
</ul>
<div class="box flag"><b>Gingival enlargement — don't miss</b><p>Acute myeloid leukaemia (especially monocytic types) — spongy, bleeding gingiva with ulcers and malaise; granulomatosis with polyangiitis ("strawberry gingivitis", ANCA-positive); scurvy; OFG/Crohn's; hereditary gingival fibromatosis. Check FBC when enlargement is unexplained.</p></div>
<h3>Other soft tissue lesions</h3>
<div class="tbl"><table><tr><th>Lesion</th><th>Features</th><th>Management</th></tr>
<tr><td>Traumatic neuroma</td><td>Painful nodule at a nerve injury site (mental foramen, extraction sites)</td><td>Excision</td></tr>
<tr><td>Neurilemmoma (schwannoma)</td><td>Encapsulated, slow-growing; tongue commonest; Antoni A (Verocay bodies) and Antoni B areas; S-100 positive</td><td>Excision (shells out)</td></tr>
<tr><td>Neurofibroma</td><td>Unencapsulated; solitary or multiple in <b>NF1</b> (café-au-lait, axillary freckling; plexiform neurofibroma; risk of malignant peripheral nerve sheath tumour)</td><td>Excision; genetics referral for NF1</td></tr>
<tr><td>Mucosal neuromas (MEN2B)</td><td>Multiple nodules on lips/tongue, "blubbery" lips, marfanoid habitus; medullary thyroid carcinoma and phaeochromocytoma (RET)</td><td>Urgent endocrine/genetics referral</td></tr>
<tr><td>Lipoma / fibrolipoma</td><td>Soft, yellowish, slow-growing; buccal mucosa, tongue, floor; floats in formalin</td><td>Excision (blunt dissection)</td></tr>
<tr><td>Granular cell tumour</td><td>Firm painless nodule on the dorsum of the tongue; S-100 positive; overlying pseudoepitheliomatous hyperplasia can mimic SCC</td><td>Excision</td></tr>
<tr><td>Haemangioma / lymphangioma</td><td>See vascular lesions</td><td>—</td></tr>
<tr><td>Sebaceous (epidermoid) cyst</td><td>Facial/neck skin; punctum; may become infected</td><td>Excise intact with punctum when not inflamed</td></tr>
<tr><td>Amyloidosis</td><td>Macroglossia with lateral indentations, waxy nodules, purpura; AL amyloid associated with myeloma; Congo red — <b>apple-green birefringence</b> under polarised light</td><td>Biopsy; haematology referral</td></tr>
<tr><td>Kaposi sarcoma</td><td>HHV-8; purple macules/nodules on palate/gingiva</td><td>See cancer topic</td></tr>
<tr><td>Fibrosarcoma</td><td>Rare malignant spindle cell tumour; enlarging mass</td><td>Sarcoma MDT</td></tr>
<tr><td>Rhabdomyosarcoma</td><td>Commonest soft tissue sarcoma of the head and neck in children; rapidly growing mass (orbit, nasopharynx, tongue, cheek)</td><td>Urgent referral; chemotherapy, radiotherapy, surgery</td></tr></table></div>
<p>Also consider dermoid cyst (midline floor of mouth), lymphoepithelial cyst (yellow nodule, floor/ventral tongue), thyroglossal duct cyst (midline neck, moves on tongue protrusion) and branchial cyst (anterior border of sternocleidomastoid).</p>`
    },
    {
      id: 'd5-systemic', title: 'Developmental, metabolic and inherited conditions', code: '5.3.9',
      syllabus: [
        'Manage metabolic, inherited and developmental conditions of the soft tissues, with referral where appropriate',
        'Recognise mucosal disease with underlying systemic disease, form a differential and instigate management'
      ],
      notes: `
<h3>Inherited and developmental conditions with oral features</h3>
<div class="tbl"><table><tr><th>Condition</th><th>Oral/facial features</th><th>Systemic importance</th></tr>
<tr><td>White sponge naevus</td><td>Bilateral spongy white mucosa</td><td>Benign (keratin 4/13)</td></tr>
<tr><td>Dyskeratosis congenita</td><td>Leukoplakia, nail dystrophy, reticulated skin pigmentation</td><td>Telomere disorder; bone marrow failure; high SCC risk</td></tr>
<tr><td>Epidermolysis bullosa</td><td>Blistering, scarring, microstomia, enamel defects</td><td>SCC risk (recessive dystrophic)</td></tr>
<tr><td>Darier's disease</td><td>Cobblestone papules on palate</td><td>Skin keratotic papules</td></tr>
<tr><td>Hereditary haemorrhagic telangiectasia</td><td>Lip and tongue telangiectasia</td><td>Epistaxis, GI bleeding, pulmonary/cerebral AVMs</td></tr>
<tr><td>Peutz–Jeghers</td><td>Perioral/buccal freckles</td><td>GI hamartomas, cancer risk</td></tr>
<tr><td>Gardner's syndrome (FAP)</td><td>Osteomas, supernumerary teeth, odontomes, epidermoid cysts</td><td>Colonic polyps → near-certain colorectal cancer (APC); prophylactic colectomy</td></tr>
<tr><td>Cowden syndrome</td><td>Multiple oral papillomas ("cobblestone" gingiva/tongue)</td><td>PTEN; breast, thyroid, endometrial cancer risk</td></tr>
<tr><td>MEN2B</td><td>Mucosal neuromas</td><td>Medullary thyroid cancer, phaeochromocytoma</td></tr>
<tr><td>Neurofibromatosis type 1</td><td>Neurofibromas, enlarged fungiform papillae</td><td>Café-au-lait, MPNST risk</td></tr>
<tr><td>Tuberous sclerosis</td><td>Oral fibromas, enamel pits, gingival nodules</td><td>Seizures, facial angiofibromas, renal/cardiac tumours</td></tr>
<tr><td>Down syndrome</td><td>Early severe periodontitis, macroglossia, fissured tongue, hypodontia</td><td>Cardiac defects (IE risk assessment), atlantoaxial instability, early dementia</td></tr>
<tr><td>Ehlers–Danlos</td><td>Fragile mucosa, easy bruising, TMJ hypermobility/dislocation</td><td>Vascular fragility (vascular type)</td></tr>
<tr><td>Ectodermal dysplasia</td><td>Hypodontia, conical teeth, dry mouth</td><td>Hypohidrosis, sparse hair</td></tr>
<tr><td>Gorlin syndrome</td><td>Multiple odontogenic keratocysts</td><td>BCCs (avoid radiation), skeletal anomalies</td></tr></table></div>
<h3>Metabolic and systemic disease</h3>
<ul>
<li><b>Haematinic deficiency</b> (iron, B12, folate): glossitis, angular cheilitis, ulcers, burning mouth, candidiasis. Plummer–Vinson syndrome (iron deficiency, dysphagia, oesophageal web — post-cricoid cancer risk).</li>
<li><b>Diabetes</b>: periodontitis, candidiasis, sialosis, xerostomia, burning mouth, delayed healing, infection.</li>
<li><b>Vitamin C deficiency</b> (scurvy): swollen bleeding gingivae, perifollicular haemorrhages, poor healing. <b>Niacin</b> deficiency (pellagra): glossitis, dermatitis, diarrhoea, dementia.</li>
<li><b>Endocrine</b>: Addison's (pigmentation), acromegaly (macroglossia, prognathism, spacing), hypothyroidism (macroglossia), Cushing's.</li>
<li><b>Renal failure</b>: uraemic stomatitis, xerostomia, bleeding, renal osteodystrophy (brown tumours), drug dosing.</li>
<li><b>Liver disease</b>: bleeding (clotting factors, thrombocytopenia), jaundice, sialosis, drug metabolism.</li>
<li><b>Amyloidosis</b>, haemochromatosis, porphyria, GVHD (lichenoid, sclerotic, xerostomia).</li>
</ul>
<p>Management: recognise, investigate (bloods, biopsy), treat oral symptoms, refer to the relevant medical specialty, and coordinate care (e.g. genetics, haematology, gastroenterology).</p>`
    },
    {
      id: 'd5-drugs', title: 'Drugs for mucosal and salivary disease', code: '5.4',
      syllabus: [
        'Prescribe topical antivirals, antifungals, antibacterials, corticosteroids, local anaesthetics (lidocaine, benzydamine)',
        'Prescribe systemic antivirals, antifungals, antibacterials',
        'Theoretical knowledge of dapsone, methotrexate, thalidomide, pentoxifylline, biologic agents, cyclophosphamide, systemic calcineurin inhibitors, azathioprine, colchicine, hydroxychloroquine, mycophenolate mofetil'
      ],
      notes: `
<h3>Topical agents</h3>
<div class="tbl"><table><tr><th>Group</th><th>Examples (adult)</th></tr>
<tr><td>Antivirals</td><td>Aciclovir 5% cream five times daily for 5 days; penciclovir 1% cream every 2 hours while awake for 4 days</td></tr>
<tr><td>Antifungals</td><td>Nystatin suspension 100,000 units/ml, 1 ml qds; miconazole oral gel 24 mg/ml, 2.5 ml qds (warfarin/statin interaction); miconazole cream for angular cheilitis</td></tr>
<tr><td>Antibacterials</td><td>Chlorhexidine 0.2% mouthwash 10 ml twice daily; doxycycline dispersible rinse; fusidic acid cream (staphylococcal angular cheilitis); hydrogen peroxide rinse</td></tr>
<tr><td>Corticosteroids (low → high potency)</td><td>Hydrocortisone 2.5 mg muco-adhesive buccal tablets qds; betamethasone 500 µg soluble tablet in 10 ml water as mouthwash qds; beclometasone 50–100 µg inhaler sprayed onto lesion; fluticasone 400 µg nasule rinse; clobetasol 0.05% in adhesive paste (specialist); intralesional triamcinolone</td></tr>
<tr><td>Local anaesthetic / analgesic</td><td>Lidocaine 5% ointment or 10% spray; benzydamine 0.15% mouthwash/spray (dilute if stinging)</td></tr>
<tr><td>Calcineurin inhibitor</td><td>Tacrolimus 0.1% ointment (off-label, specialist) for OLP/OFG</td></tr></table></div>
<p>Topical steroid side effects: candidiasis (common), rarely adrenal suppression with prolonged high-potency use. Advise not to eat or drink for 30 minutes after use.</p>
<h3>Systemic anti-infectives</h3>
<ul>
<li><b>Antivirals</b>: aciclovir 200 mg five times daily for 5 days (HSV; 400 mg if immunocompromised); 800 mg five times daily for 7 days (zoster); valaciclovir 1 g three times daily (zoster); famciclovir; ganciclovir/valganciclovir (CMV).</li>
<li><b>Antifungals</b>: fluconazole 50 mg daily for 7–14 days; itraconazole; IV agents for invasive disease. Azoles inhibit CYP enzymes (warfarin, statins, midazolam, QT).</li>
<li><b>Antibacterials</b>: metronidazole (NUG), penicillins, doxycycline, long-course penicillin for actinomycosis.</li>
</ul>
<h3>Immunomodulatory drugs (specialist prescribing)</h3>
<div class="tbl"><table><tr><th>Drug</th><th>Mechanism</th><th>Oral medicine uses</th><th>Key risks and monitoring</th></tr>
<tr><td>Dapsone</td><td>Sulfone; inhibits neutrophil myeloperoxidase and chemotaxis</td><td>MMP, linear IgA, dermatitis herpetiformis, RAS/Behçet's</td><td>Check <b>G6PD</b> before (haemolysis); methaemoglobinaemia, agranulocytosis, hypersensitivity syndrome, neuropathy. FBC, LFTs</td></tr>
<tr><td>Methotrexate</td><td>Folate antagonist (DHFR inhibitor)</td><td>OLP, MMP, OFG, sarcoid</td><td><b>Once weekly</b> dosing only; folic acid on another day; myelosuppression, hepatotoxicity, pneumonitis, mouth ulcers (toxicity sign), teratogenic. Interactions: trimethoprim, NSAIDs, penicillins. FBC, LFTs, U&amp;E</td></tr>
<tr><td>Thalidomide</td><td>TNF-α inhibition, immunomodulation, anti-angiogenesis</td><td>Severe RAS, Behçet's, HIV ulcers, OFG</td><td><b>Teratogenic</b> (pregnancy prevention programme), peripheral neuropathy (often irreversible), sedation, VTE</td></tr>
<tr><td>Pentoxifylline</td><td>Phosphodiesterase inhibitor; improves red cell deformability; reduces TNF-α</td><td>RAS, Behçet's; ORN (PENTOCLO)</td><td>GI upset, dizziness, headache; bleeding with anticoagulants</td></tr>
<tr><td>Biologic agents</td><td>Anti-TNF (infliximab, adalimumab, etanercept), anti-CD20 (rituximab), IL-12/23 (ustekinumab); PDE4 inhibitor apremilast and JAK inhibitors are small-molecule alternatives</td><td>Rituximab: pemphigus (first line), MMP. Anti-TNF: Behçet's, OFG/Crohn's</td><td>Infection (screen for TB, hepatitis B before starting), infusion reactions, malignancy</td></tr>
<tr><td>Cyclophosphamide</td><td>Alkylating agent</td><td>Severe MMP (ocular), vasculitis (GPA)</td><td>Haemorrhagic cystitis (mesna), myelosuppression, infertility, malignancy</td></tr>
<tr><td>Ciclosporin, tacrolimus (systemic)</td><td>Calcineurin inhibitors — block IL-2 transcription/T-cell activation</td><td>Severe OLP, Behçet's (eye)</td><td>Nephrotoxicity, hypertension, gingival overgrowth (ciclosporin), diabetes (tacrolimus), skin/lip cancer, infection; CYP3A4 interactions (azoles, macrolides raise levels)</td></tr>
<tr><td>Azathioprine</td><td>Purine antimetabolite (→ 6-mercaptopurine)</td><td>Steroid-sparing: pemphigus, MMP, OLP, Behçet's, OFG</td><td>Check <b>TPMT</b> activity before; myelosuppression, hepatotoxicity, pancreatitis, skin cancer; <b>allopurinol</b> interaction (reduce dose). FBC, LFTs</td></tr>
<tr><td>Colchicine</td><td>Inhibits microtubule polymerisation → reduced neutrophil chemotaxis</td><td>RAS, Behçet's mucocutaneous disease</td><td>Diarrhoea (dose-limiting), myopathy; serious toxicity with <b>clarithromycin/erythromycin</b>, statins, ciclosporin</td></tr>
<tr><td>Hydroxychloroquine</td><td>Antimalarial; lysosomal and TLR modulation</td><td>OLP, lupus, Sjögren's (systemic features)</td><td>Retinopathy (annual screening after 5 years), QT prolongation, hypoglycaemia, blue-grey mucosal pigmentation, lichenoid reactions</td></tr>
<tr><td>Mycophenolate mofetil</td><td>Inhibits inosine monophosphate dehydrogenase → reduced lymphocyte proliferation</td><td>Pemphigus, MMP, OLP</td><td>Teratogenic (pregnancy prevention), GI upset, myelosuppression, infection</td></tr></table></div>
<p>Systemic corticosteroids (prednisolone) for severe flares: short tapering courses; long-term use needs bone protection, gastroprotection, glucose and BP monitoring, and steroid emergency card.</p>`
    },
    {
      id: 'd5-surgery', title: 'Surgical management, techniques and prevention', code: '5.5–5.6',
      syllabus: [
        'Incisional and excisional biopsy of soft tissue lesions; understand and explain histopathology results',
        'Surgical management and when to refer: fibroepithelial polyps, mucoceles, lipomas, epulides, gingival hyperplasia and drug-induced overgrowth, sialoliths, pyogenic granulomas, papillomas, giant cell lesions',
        'Know advantages and disadvantages of cryotherapy, diathermy, lasers, basket retrieval and lithotripsy',
        'Offer preventive oral healthcare advice',
        'Understand the role of other specialties and liaise and refer appropriately'
      ],
      notes: `
<h3>Surgical pearls by lesion</h3>
<ul>
<li><b>Fibroepithelial polyp, papilloma</b>: elliptical excision including the base/stalk; traction suture.</li>
<li><b>Mucocele</b>: excise with underlying minor glands; avoid rupturing; close mucosa only.</li>
<li><b>Lipoma</b>: incise overlying mucosa, blunt dissection of the encapsulated mass.</li>
<li><b>Epulides, pyogenic granuloma, giant cell lesions</b>: excise to periosteum, curette the base, scale adjacent teeth; send for histology.</li>
<li><b>Gingival overgrowth</b>: gingivectomy (external bevel) or flap; laser/electrosurgery gives haemostasis.</li>
<li><b>Submandibular duct stone</b>: stay suture posterior to the stone, incise along the duct, deliver stone, leave duct open or marsupialise (sialodochoplasty).</li>
<li><b>Ranula</b>: sublingual gland excision protecting Wharton's duct and the lingual nerve.</li>
</ul>
<h3>Techniques compared</h3>
<div class="tbl"><table><tr><th>Technique</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Cryotherapy (liquid nitrogen −196 °C; N₂O probes)</td><td>Simple, little bleeding, minimal scarring, repeatable; good for mucoceles, small vascular lesions, papillomas</td><td><b>No histology specimen</b>, unpredictable depth, marked swelling and sloughing, multiple sessions, nerve damage</td></tr>
<tr><td>Diathermy / electrosurgery</td><td>Cutting with haemostasis, fast</td><td>Thermal artefact at margins (impairs histology), delayed healing, smoke/smell, caution with pacemakers (monopolar), fire risk</td></tr>
<tr><td>Laser (CO₂, diode, Nd:YAG, Er:YAG)</td><td>Precise, haemostatic, less post-op pain and swelling, minimal scarring, often no sutures</td><td>Cost and training, safety (eye protection, controlled area, plume), thermal margin artefact, healing by secondary intention</td></tr>
<tr><td>Sialendoscopy with basket retrieval</td><td>Gland-sparing, minimally invasive, diagnostic and therapeutic</td><td>Only for small mobile stones; duct perforation, stricture, equipment and expertise</td></tr>
<tr><td>Lithotripsy (extracorporeal/intracorporeal)</td><td>Fragments larger stones, preserves the gland</td><td>Multiple sessions, residual fragments, limited availability</td></tr></table></div>
<h3>Explaining histopathology results</h3>
<p>Explain in plain language what the lesion is, whether it is benign, whether margins are clear, what follow-up is needed, and any risk of recurrence or malignant change. Use a structured approach for bad news, offer written information and specialist nurse support, and copy letters to the GDP/GP.</p>
<h3>Preventive advice</h3>
<ul>
<li><b>Tobacco</b>: very brief advice (Ask, Advise, Act) and referral to NHS Stop Smoking Services; e-cigarettes as a harm-reduction aid.</li>
<li><b>Alcohol</b>: no more than 14 units a week, spread over 3 or more days.</li>
<li><b>Areca/betel nut</b> cessation; diet rich in fruit and vegetables.</li>
<li><b>HPV vaccination</b> (gender-neutral UK programme since 2019).</li>
<li>Lip sun protection (SPF lip balm, hats) for outdoor workers.</li>
<li>Mouth self-examination; regular dental attendance; high-fluoride toothpaste for dry mouth.</li>
</ul>
<h3>Multidisciplinary care</h3>
<p>Oral medicine, OMFS, head and neck MDT (surgeons, clinical and medical oncologists, radiologists, pathologists, clinical nurse specialists, SLT, dietitians, restorative dentists), dermatology, rheumatology, gastroenterology, ophthalmology (MMP, Behçet's), ENT, haematology (lymphoma, amyloid), immunology (angioedema), sexual health/ID (syphilis, HIV), genetics.</p>`
    }
  ],
  cards: [
    ['NICE NG12 duration for unexplained oral ulceration needing urgent referral?', 'More than 3 weeks.'],
    ['NICE NG36 neck management for early oral SCC with N0 neck?', 'Sentinel lymph node biopsy (or elective neck dissection).'],
    ['FNAC vs core biopsy?', 'FNAC gives cells only (quick, can\'t show architecture); core biopsy gives tissue architecture and allows immunohistochemistry (e.g. lymphoma).'],
    ['What are Fordyce spots?', 'Ectopic sebaceous glands — normal yellow papules on buccal mucosa and lips.'],
    ['Lesion that disappears when the cheek is stretched?', 'Leukoedema.'],
    ['Genetics of white sponge naevus?', 'Autosomal dominant mutation in keratin 4 or 13.'],
    ['Oral hairy leukoplakia — cause and significance?', 'EBV; marker of HIV or other immunosuppression; bilateral lateral tongue, doesn\'t rub off.'],
    ['Definition of leukoplakia?', 'A predominantly white plaque of questionable risk, having excluded other known diseases or disorders that carry no increased risk for cancer.'],
    ['OPMD with highest malignant transformation risk?', 'Erythroplakia (and proliferative verrucous leukoplakia).'],
    ['Features of PVL?', 'Multifocal, progressive, warty leukoplakia — older women, often non-smokers, gingiva; very high transformation; recurs after excision.'],
    ['Cause of oral submucous fibrosis?', 'Areca (betel) nut chewing.'],
    ['TNM 8th: T1 oral cavity?', '≤2 cm and depth of invasion ≤5 mm.'],
    ['TNM 8th: what makes an oral SCC T3?', 'Size &gt;4 cm or depth of invasion &gt;10 mm.'],
    ['Commonest sites of oral SCC in the UK?', 'Lateral/ventral tongue and floor of mouth.'],
    ['Target histological margin in oral SCC surgery?', '≥5 mm clear margin (about 1 cm clinical margin).'],
    ['Commonest oral sites of melanoma?', 'Palate and maxillary gingiva.'],
    ['Virus causing Kaposi sarcoma?', 'HHV-8.'],
    ['The salivary "80% rule"?', '~80% of tumours in parotid, ~80% of parotid tumours benign, ~80% of those pleomorphic adenomas.'],
    ['Why does enucleation of a pleomorphic adenoma recur?', 'Incomplete capsule with pseudopodia — tumour left behind.'],
    ['Warthin\'s tumour key facts?', 'Parotid tail, older male smokers, bilateral in ~10%, hot on Tc-99m.'],
    ['Commonest malignant salivary tumour overall?', 'Mucoepidermoid carcinoma.'],
    ['Salivary tumour with perineural spread and late lung metastases?', 'Adenoid cystic carcinoma.'],
    ['What is Frey\'s syndrome?', 'Gustatory sweating after parotidectomy from aberrant regeneration of auriculotemporal parasympathetic fibres; treat with botulinum toxin.'],
    ['Minor vs major aphthae?', 'Minor &lt;10 mm, heal in 7–14 days without scarring. Major &gt;10 mm, heal over weeks with scarring.'],
    ['Basic blood tests for recurrent aphthae?', 'FBC, ferritin, B12, folate, coeliac serology (tTG IgA + total IgA).'],
    ['Drug causing large persistent painful oral ulcers in cardiac patients?', 'Nicorandil.'],
    ['Licensed oral treatment for Behçet\'s oral ulcers?', 'Apremilast (PDE4 inhibitor).'],
    ['Median rhomboid glossitis association?', 'Candida (smokers, inhaled steroids).'],
    ['Histology of lichen planus?', 'Hyperkeratosis, saw-tooth rete ridges, basal cell liquefaction, Civatte bodies, band-like T-cell infiltrate.'],
    ['Clue to an amalgam-induced lichenoid reaction?', 'Unilateral lesion in direct contact with an amalgam restoration.'],
    ['Malignant transformation risk in OLP?', 'About 1%.'],
    ['Level of split and DIF in pemphigus vulgaris?', 'Intraepithelial (suprabasal) acantholysis; intercellular IgG/C3 "chicken-wire".'],
    ['Level of split and DIF in MMP?', 'Subepithelial; linear IgG/C3 along the basement membrane.'],
    ['Which specialty must review all MMP patients?', 'Ophthalmology (scarring conjunctival disease).'],
    ['First-line treatment for pemphigus vulgaris now?', 'Systemic steroids plus rituximab.'],
    ['Commonest trigger of erythema multiforme?', 'Herpes simplex virus.'],
    ['Angina bullosa haemorrhagica?', 'Benign blood blister on the soft palate in older adults, often with inhaled steroids.'],
    ['Pigmentation from Addison\'s disease — mechanism?', 'Raised ACTH stimulating melanocytes (MSH activity).'],
    ['Peutz–Jeghers features?', 'Perioral/buccal freckling and GI hamartomatous polyps (STK11).'],
    ['ABCDE of pigmented lesions?', 'Asymmetry, Border irregularity, Colour variation, Diameter &gt;6 mm, Evolution.'],
    ['C4 and treatment in hereditary angioedema?', 'Low C4; acute treatment with C1-INH concentrate or icatibant — adrenaline and antihistamines don\'t work.'],
    ['Triad of Melkersson–Rosenthal syndrome?', 'Lip swelling, fissured tongue, facial palsy.'],
    ['Dietary approach for OFG?', 'Cinnamon- and benzoate-free diet.'],
    ['Heerfordt syndrome?', 'Sarcoidosis with parotid swelling, uveitis, facial palsy and fever.'],
    ['Pyostomatitis vegetans is associated with?', 'Ulcerative colitis.'],
    ['Histology and stain for TB?', 'Caseating granulomas; Ziehl–Neelsen stain for acid-fast bacilli.'],
    ['Vascular tumour vs malformation — course?', 'Infantile haemangioma proliferates then involutes; malformations grow with the child and never involute.'],
    ['First-line drug for problematic infantile haemangioma?', 'Propranolol.'],
    ['Simple test for a vascular lesion?', 'Diascopy — blanches under pressure from a glass slide.'],
    ['Metronidazole regimen for necrotising gingivitis?', '400 mg three times daily for 3 days (with debridement).'],
    ['Antifungal contraindicated with warfarin even topically?', 'Miconazole.'],
    ['Newton classification describes?', 'Denture stomatitis: I petechial, II diffuse, III papillary.'],
    ['Aciclovir dose for zoster?', '800 mg five times daily for 7 days (within 72 h).'],
    ['Hutchinson\'s sign?', 'Zoster vesicles on the nose tip — nasociliary (V1) involvement predicts eye involvement.'],
    ['HPV types in squamous papilloma and Heck\'s disease?', 'Papilloma 6/11; focal epithelial hyperplasia 13/32.'],
    ['Six lesions strongly associated with HIV?', 'Candidiasis, hairy leukoplakia, Kaposi sarcoma, NHL, linear gingival erythema, necrotising gingivitis/periodontitis.'],
    ['Why are most stones submandibular?', 'Long uphill duct; alkaline, mucinous saliva rich in calcium and phosphate.'],
    ['First-line imaging for salivary stones?', 'Ultrasound (plus lower occlusal radiograph for submandibular).'],
    ['ACR/EULAR 2016 Sjögren\'s items worth 3 points?', 'Focus score ≥1 on labial gland biopsy; anti-Ro/SSA positive.'],
    ['Sjögren\'s lymphoma type and risk?', 'MALT lymphoma, about 5% lifetime risk.'],
    ['Pilocarpine contraindications?', 'Uncontrolled asthma, narrow-angle glaucoma, significant cardiac disease.'],
    ['Commonest site of a mucocele?', 'Lower lip.'],
    ['Treatment of choice for a ranula?', 'Excision of the sublingual gland.'],
    ['Lesion that mimics SCC on palate and heals in 4–10 weeks?', 'Necrotising sialometaplasia.'],
    ['Drugs causing gingival overgrowth and rough frequency?', 'Phenytoin ~50%, ciclosporin ~25–30%, nifedipine/CCBs ~10–20%.'],
    ['Pregnancy epulis is a type of?', 'Pyogenic granuloma.'],
    ['Blood tests for recurrent peripheral giant cell granuloma?', 'Calcium, PTH, ALP (exclude hyperparathyroidism).'],
    ['Congo red finding in amyloid?', 'Apple-green birefringence under polarised light.'],
    ['Commonest soft tissue sarcoma of head and neck in children?', 'Rhabdomyosarcoma.'],
    ['Mucosal neuromas suggest which syndrome?', 'MEN2B (medullary thyroid cancer, phaeochromocytoma).'],
    ['Test before dapsone?', 'G6PD level.'],
    ['Test before azathioprine?', 'TPMT activity.'],
    ['Methotrexate dosing safety rule?', 'Once weekly only, with folic acid on a different day.'],
    ['Dangerous interaction with colchicine?', 'Clarithromycin/erythromycin (also statins, ciclosporin).'],
    ['Hydroxychloroquine monitoring?', 'Retinal screening (annually after 5 years).'],
    ['Main disadvantage of cryotherapy?', 'No tissue specimen for histology.']
  ],
  mcqs: [
    { q: 'A 62-year-old smoker has a 2 cm speckled red-and-white patch on the lateral tongue. What is the most appropriate management?', o: ['Prescribe antifungals and review in 6 months', 'Urgent referral via the suspected cancer pathway for biopsy', 'Reassure as frictional keratosis', 'Cryotherapy', 'Topical steroids for 4 weeks'], a: 1, e: 'A red-and-white (non-homogeneous) patch on the lateral tongue in a smoker is high risk. NICE NG12 advises urgent referral; biopsy will establish dysplasia or carcinoma.' },
    { q: 'Which is correct about oral SCC staging (AJCC 8th edition)?', o: ['Depth of invasion is not part of T staging', 'A 3 cm tumour with 12 mm depth of invasion is T3', 'Extranodal extension doesn\'t affect N stage', 'T1 tumours are up to 4 cm', 'HPV status is used for oral cavity staging'], a: 1, e: 'Depth of invasion over 10 mm makes a tumour T3 regardless of diameter. ENE upstages N, and HPV-based staging applies to oropharyngeal (not oral cavity) cancer.' },
    { q: 'A 45-year-old has a painless 2 cm firm, mobile lump in the parotid tail, slowly growing for 2 years, with normal facial nerve function. What is the most likely diagnosis?', o: ['Adenoid cystic carcinoma', 'Pleomorphic adenoma', 'Mucoepidermoid carcinoma', 'Lymphoma', 'Sialolith'], a: 1, e: 'A slow-growing, painless, mobile parotid mass with normal facial nerve function is most likely a pleomorphic adenoma. Investigate with US-guided FNAC/core biopsy.' },
    { q: 'Which immunofluorescence pattern fits mucous membrane pemphigoid?', o: ['Intercellular IgG "chicken-wire"', 'Linear IgG/C3 along the basement membrane zone', 'Granular IgA in dermal papillae', 'Shaggy fibrinogen at the basement membrane', 'Negative DIF'], a: 1, e: 'MMP shows linear IgG/C3 (± IgA) at the BMZ with a subepithelial split. Intercellular staining is pemphigus; granular IgA is dermatitis herpetiformis; fibrinogen is lichen planus.' },
    { q: 'A patient with hereditary angioedema needs an extraction. What is the key preventive measure?', o: ['IM adrenaline before treatment', 'Oral antihistamine the night before', 'Short-term prophylaxis with C1 esterase inhibitor concentrate as per the immunology plan', 'No precautions needed under LA', 'Amoxicillin prophylaxis'], a: 2, e: 'Dental procedures trigger HAE attacks (bradykinin-mediated). Short-term prophylaxis with C1-INH concentrate is given per the immunology plan; adrenaline and antihistamines are ineffective.' },
    { q: 'A child has recurrent lower lip swelling, angular cheilitis and full-width gingival swelling. Biopsy shows non-caseating granulomas. What is the most important next step?', o: ['Prescribe aciclovir', 'Refer to gastroenterology to investigate for Crohn\'s disease', 'Excise the lip lesion', 'Start long-term antibiotics', 'Reassure — this is normal'], a: 1, e: 'Orofacial granulomatosis in children is strongly associated with Crohn\'s disease. Investigate (faecal calprotectin, bloods) and refer to gastroenterology.' },
    { q: 'Which drug-based statement is correct?', o: ['Azathioprine is safe with allopurinol at full dose', 'Methotrexate is given daily for oral lichen planus', 'G6PD deficiency should be excluded before dapsone', 'Hydroxychloroquine causes gingival overgrowth', 'Thalidomide is safe in pregnancy'], a: 2, e: 'Dapsone causes haemolysis in G6PD deficiency. Allopurinol greatly increases azathioprine toxicity; methotrexate is weekly; thalidomide is teratogenic.' },
    { q: 'A patient has meal-time swelling of the right submandibular gland. A 4 mm stone is palpable in the anterior third of Wharton\'s duct. What is the most appropriate treatment?', o: ['Submandibular gland excision', 'Transoral removal through the duct with a stay suture behind the stone', 'Long-term antibiotics', 'Extracorporeal lithotripsy as first line', 'Superficial parotidectomy'], a: 1, e: 'A palpable stone in the anterior submandibular duct is removed transorally, placing a stay suture posterior to the stone to prevent it slipping back.' },
    { q: 'A painful deep ulcer appears on the posterior hard palate 2 weeks after a palatal LA injection. Biopsy reports lobular necrosis with squamous metaplasia of ducts. What is the most likely diagnosis?', o: ['Mucoepidermoid carcinoma', 'Necrotising sialometaplasia', 'Major aphthous ulcer', 'Tuberculosis', 'Squamous cell carcinoma'], a: 1, e: 'Necrotising sialometaplasia follows ischaemic injury (e.g. LA, surgery), can mimic malignancy histologically, and heals spontaneously in 4–10 weeks.' },
    { q: 'A 70-year-old on nicorandil has a large, deep, painful tongue ulcer present for 6 weeks. Biopsy excludes malignancy. What is the best management?', o: ['Excise the ulcer', 'Liaise with the cardiologist/GP to switch nicorandil', 'Start thalidomide', 'Prescribe fluconazole', 'Radiotherapy'], a: 1, e: 'Nicorandil causes large persistent painful ulcers that heal only once the drug is withdrawn — liaise with the prescriber for an alternative.' }
  ]
});
