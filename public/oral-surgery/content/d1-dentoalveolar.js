window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd1', num: '1', order: 1,
  title: 'Dentoalveolar surgery',
  summary: 'Assessment, diagnosis and management of patients requiring dentoalveolar surgery: exodontia and third molars, coronectomy, autotransplantation, orthodontic exposures, oro-antral communications, surgical endodontics and biopsy.',
  topics: [
    {
      id: 'd1-guidance', title: 'Key guidelines for dentoalveolar surgery', code: '1.1',
      syllabus: [
        'SDCEP (2018) implementation advice for NICE CG64 — prophylaxis against infective endocarditis',
        'Guidelines for Periradicular Surgery (2020), British Endodontic Society',
        'Parameters of care for patients undergoing mandibular third molar surgery (FDS RCS Eng, 2020)',
        'Management of the Palatally Ectopic Maxillary Canine (FDS RCS Eng, 2022)',
        'Management of Unerupted Maxillary Incisors (FDS RCS Eng, 2022)',
        'Management of Dental Patients Taking Anticoagulant or Antiplatelet Drugs, 2nd edition (SDCEP, 2022)'
      ],
      notes: `
<h3>Infective endocarditis (NICE CG64 + SDCEP 2018)</h3>
<p>NICE: antibiotic prophylaxis is <b>not recommended routinely</b> for dental procedures. SDCEP advises that for patients at <b>increased risk</b>, the decision is individual and should involve the patient (and cardiologist where needed).</p>
<div class="box guide"><b>Patients at special risk (SDCEP)</b>
<ul><li>Previous infective endocarditis</li><li>Prosthetic heart valve, or prosthetic material used for valve repair (including transcatheter valves)</li><li>Cyanotic congenital heart disease, or CHD repaired with prosthetic material (within 6 months, or lifelong if residual shunt/valve regurgitation)</li></ul>
<p>Other cardiac conditions (e.g. most valve disease, rheumatic disease, pacemakers): no special consideration.</p></div>
<div class="box dose"><b>If prophylaxis is agreed (for invasive procedures — gingival manipulation, periapical region, mucosal perforation)</b>
<ul><li>Amoxicillin 3 g oral, 60 minutes before (child: 50 mg/kg, max 3 g)</li><li>Penicillin allergy: clindamycin 600 mg oral, 60 minutes before (child: 20 mg/kg, max 600 mg) — note the ESC 2023 guideline no longer recommends clindamycin; check current local advice</li></ul></div>
<p>Explain the risk of IE, its symptoms (flu-like illness, fever, night sweats) and the importance of good oral health.</p>
<h3>Mandibular third molar parameters of care (FDS RCS 2020)</h3>
<ul>
<li>Builds on NICE TA1 (2000): remove for pathology, not prophylactically.</li>
<li>Recognises <b>distal cervical caries of the second molar</b> from a partially erupted mesioangular/horizontal third molar as an indication — consider early removal where this risk is high.</li>
<li>Covers assessment, imaging (DPT; CBCT if DPT shows close IAN relationship and it will change management), coronectomy, consent, and when to refer to a specialist.</li>
</ul>
<h3>Palatally ectopic maxillary canine (2022) and unerupted maxillary incisors (2022)</h3>
<p>Both covered in detail under <b>Orthodontic-related surgery</b>. Key messages: early detection (palpate canines from age 10), interceptive extraction of the primary canine in suitable 10–13 year olds, and removing supernumeraries with space creation for impacted incisors.</p>
<h3>Periradicular surgery (BES 2020)</h3>
<p>Microsurgical technique (magnification, ultrasonic root-end preparation, bioceramic root-end fillings) is now standard. Full detail under <b>Surgical endodontics</b>.</p>
<h3>Anticoagulants and antiplatelets (SDCEP 2022)</h3>
<p>Most patients can be treated in primary care without stopping their medication, using local haemostatic measures. Full protocol under <b>Medicines for dentoalveolar surgery</b>.</p>`
    },
    {
      id: 'd1-assess', title: 'Assessment, imaging and deciding not to treat', code: '1.2',
      syllabus: [
        'Assess a patient requiring dentoalveolar surgery',
        'Determine when no treatment is the best option',
        'Knowledge of 2D and 3D imaging techniques and reports for diagnosis and planning',
        'Knowledge of common pathology that may need dentoalveolar surgery and the investigations required'
      ],
      notes: `
<h3>Pre-operative assessment</h3>
<ul>
<li><b>Patient factors</b>: medical history (bleeding risk, antiresorptives, radiotherapy, immunosuppression, cardiac risk), age (older patients: denser bone, slower healing, higher nerve injury risk), anxiety, access/mouth opening, ability to cooperate, social factors (escort for sedation).</li>
<li><b>Tooth factors</b>: crown condition, root number and morphology (curvature, divergence, hypercementosis), ankylosis, position and depth, relation to adjacent teeth, IAN, lingual nerve, sinus.</li>
<li><b>Choice of anaesthesia</b>: LA, LA + sedation, or GA (consider anxiety, extent, medical status, patient preference).</li>
</ul>
<h3>Imaging</h3>
<ul>
<li><b>Periapical</b>: highest detail for single teeth and roots.</li>
<li><b>DPT (OPT)</b>: third molars, multiple teeth, jaw pathology, fractures. Limitations: magnification (~25%), ghost images, focal trough — anterior region often blurred.</li>
<li><b>Parallax</b> (horizontal or vertical tube shift) to localise impacted teeth — SLOB: Same Lingual, Opposite Buccal.</li>
<li><b>CBCT</b>: when 2D imaging suggests a close relationship with a vital structure and 3D information will change the plan (e.g. coronectomy vs extraction, canine resorbing incisor roots, displaced root location).</li>
</ul>
<h3>When no treatment is the best option</h3>
<ul>
<li>Asymptomatic, disease-free impacted teeth (NICE TA1) — especially deeply impacted teeth in older patients where risk exceeds benefit.</li>
<li>Retained roots that are asymptomatic, covered by bone, with no pathology (particularly near the IAN or sinus) — monitor radiographically.</li>
<li>Impacted canines in good position with no resorption or pathology in an adult who doesn't want orthodontics.</li>
<li>Patients with high MRONJ/ORN risk where an alternative (e.g. endodontics, decoronation) is feasible.</li>
</ul>
<p>Document the discussion, the rationale and the follow-up plan (e.g. radiographic review intervals, symptoms to report).</p>
<h3>Pathology that may require dentoalveolar surgery</h3>
<p>Pericoronitis, caries/periapical disease, cysts (dentigerous, radicular, OKC), tumours (ameloblastoma, odontoma), resorption (internal/external), supernumeraries, retained roots, root fractures. Investigations: vitality tests, radiographs, CBCT, aspiration, biopsy.</p>
<div class="box pearl"><b>Exam pearl</b>"No treatment" is an active decision. Show you weighed risk against benefit, explained it to the patient, and arranged follow-up.</div>`
    },
    {
      id: 'd1-m3m', title: 'Exodontia, impacted teeth and third molars', code: '1.3.1',
      syllabus: [
        'Assess impacted teeth and roots, including supplemental and supernumerary teeth',
        'Accurately assess the risks of removing impacted teeth',
        'Select management for teeth whose removal is likely to cause complications; decide when risks outweigh benefits',
        'Recognise and manage complications'
      ],
      notes: `
<h3>NICE TA1 (2000) — indications for third molar removal</h3>
<ul>
<li>Unrestorable caries; non-treatable pulpal and/or periapical pathology</li>
<li>Cellulitis, abscess, osteomyelitis</li>
<li>Internal/external resorption of the tooth or adjacent teeth</li>
<li>Fracture of the tooth; disease of the follicle including cyst/tumour</li>
<li>Tooth impeding surgery or reconstructive jaw surgery; tooth in the field of tumour resection</li>
<li><b>Pericoronitis</b>: a first episode is not an indication unless severe; <b>recurrent</b> episodes are</li>
<li>Plus (FDS 2020): caries or periodontal disease affecting the second molar related to the third molar</li>
</ul>
<p>Other considerations: autotransplantation donor, before radiotherapy/antiresorptive therapy/organ transplant in a symptomatic or pathology-prone tooth, patients undergoing GA for other teeth, and those with limited access to care.</p>
<h3>Classification</h3>
<div class="tbl"><table><tr><th>System</th><th>Categories</th></tr>
<tr><td>Winter's (angulation)</td><td>Mesioangular (most common, ~40%), vertical, horizontal, distoangular (hardest lower), transverse. Upper: distoangular easiest, mesioangular hardest.</td></tr>
<tr><td>Pell &amp; Gregory — ramus</td><td>Class I: enough space between ramus and 7; Class II: space less than crown width; Class III: tooth mostly in ramus</td></tr>
<tr><td>Pell &amp; Gregory — depth</td><td>A: occlusal surface at/above occlusal plane of 7; B: between occlusal plane and cervical line; C: below cervical line</td></tr></table></div>
<p><b>WHARFE</b> assessment: Winter's angulation, Height of mandible, Angulation of second molar, Root shape and development, Follicle width, Exit path.</p>
<h3>Assessing IAN risk on DPT (Rood &amp; Shehab 1990)</h3>
<div class="tbl"><table><tr><th>Root signs</th><th>Canal signs</th></tr>
<tr><td>Darkening of the root ★</td><td>Interruption of the white lines (cortex) ★</td></tr>
<tr><td>Deflection of the root</td><td>Diversion of the canal ★</td></tr>
<tr><td>Narrowing of the root</td><td>Narrowing of the canal</td></tr>
<tr><td>Dark and bifid apex</td><td></td></tr></table></div>
<p>★ The three most predictive signs: <b>darkening of the root, interruption of the white line, diversion of the canal</b>. If present, consider CBCT; if CBCT shows direct contact without corticated separation (especially a lingually positioned or grooved canal), discuss coronectomy.</p>
<h3>Quoted nerve injury risks (third molar surgery)</h3>
<div class="tbl"><table><tr><th>Nerve</th><th>Temporary</th><th>Permanent</th></tr>
<tr><td>Inferior alveolar</td><td>~0.4–8% (higher with high-risk signs)</td><td>~0.1–1%</td></tr>
<tr><td>Lingual</td><td>~0.2–2% (higher with lingual flap retraction)</td><td>~0.1–0.5%</td></tr></table></div>
<h3>Supernumerary and supplemental teeth</h3>
<p>Mesiodens (midline, conical), tuberculate (palatal, often paired, delay incisor eruption), supplemental (normal morphology; often upper laterals, lower premolars), odontomes. Associated syndromes: cleidocranial dysplasia, Gardner's, cleft lip and palate.</p>
<h3>Retained roots</h3>
<p>Remove if symptomatic, associated with pathology, or in a denture-bearing area/implant site. Small, asymptomatic, bone-covered roots near the IAN or sinus may be left and monitored (document and tell the patient).</p>
<h3>Risk vs benefit</h3>
<p>Higher risk: age &gt;25 (complete roots, denser bone), deep (C) or horizontal impaction, close IAN signs, lingual nerve exposure, medical risk (MRONJ, ORN, bleeding). Alternatives: coronectomy, monitoring, operculectomy (rarely effective long-term), extraction of the opposing third molar for traumatic pericoronitis.</p>`
    },
    {
      id: 'd1-coronectomy', title: 'Coronectomy and socket preservation', code: '1.3.1',
      syllabus: [
        'Assess when coronectomy is appropriate and when no treatment or full exodontia would be better',
        'Knowledge of socket preservation techniques and when to use them'
      ],
      notes: `
<h3>Coronectomy (intentional partial odontectomy)</h3>
<p>Removal of the crown of a lower third molar, deliberately leaving vital roots in place to avoid IAN injury.</p>
<div class="box guide"><b>Indications</b><ul><li>High radiological IAN risk (DPT signs confirmed on CBCT: contact, loss of cortication, canal grooving roots)</li><li>Vital tooth with a clear indication for removal (e.g. caries in the crown, distal caries of 7, pericoronitis)</li></ul></div>
<div class="box flag"><b>Contraindications</b><ul><li>Non-vital tooth, periapical infection, mobile tooth</li><li>Pathology involving the roots (cyst/tumour)</li><li>Horizontally impacted teeth where sectioning risks the nerve</li><li>Relative: immunosuppression, uncontrolled diabetes, planned radiotherapy or high-risk antiresorptives (retained root could become a focus)</li></ul></div>
<h4>Technique</h4>
<ol>
<li>Buccal flap (± lingual retraction with protection).</li>
<li>Section the crown at the cemento-enamel junction with a bur angled ~45°, ideally without fully cutting through the lingual plate.</li>
<li>Remove the crown without mobilising the roots — <b>if roots become mobile, remove them</b>.</li>
<li>Reduce the remaining root surface to <b>~3–4 mm below the alveolar crest</b>, removing all enamel.</li>
<li>No pulp treatment. Irrigate and close (primary closure optional).</li>
</ol>
<h4>Outcomes</h4>
<ul>
<li>IAN injury far lower than extraction in high-risk cases (close to 0–1%).</li>
<li>Root migration occurs in many cases (usually within the first 1–2 years, away from the nerve).</li>
<li>Re-operation (root exposure, infection) ~2–5%; roots that migrate usually come away from the canal, making later removal safer.</li>
<li>Follow-up: clinical review and radiograph (e.g. at 6–12 months and as needed).</li>
</ul>
<p>Consent: risk of failure (roots mobilised — full extraction needed, with IAN risk), later root removal, infection, dry socket, plus usual risks.</p>
<h3>Socket (alveolar ridge) preservation</h3>
<ul>
<li>After extraction the ridge loses ~50% width within a year (mostly buccal). Preservation limits this by roughly 1.5–2 mm horizontally vs spontaneous healing.</li>
<li>Indications: planned implant (especially aesthetic zone), thin or damaged buccal plate, where loss would preclude implant placement without major grafting.</li>
<li>Techniques: atraumatic extraction (periotomes, luxators, vertical extraction systems) preserving the buccal plate → fill with slowly resorbing graft (e.g. deproteinised bovine bone mineral) → seal with collagen membrane/plug or free gingival graft punch, or leave with partial closure.</li>
<li>Alternatives: immediate implant placement, socket shield technique (specialist).</li>
</ul>`
    },
    {
      id: 'd1-displaced', title: 'Displaced teeth, roots and implants', code: '1.3.1',
      syllabus: [
        'Assess and manage teeth, roots or dental implants displaced into the maxillary sinus, lingual pouch and infratemporal fossa'
      ],
      notes: `
<h3>General principles</h3>
<ol>
<li><b>Stop.</b> Don't make blind attempts with suction or instruments.</li>
<li>Tell the patient honestly what has happened (duty of candour).</li>
<li>Localise with imaging (DPT, occipitomental views, CBCT/CT).</li>
<li>Decide: retrieve now (if visible and accessible, and you have the skills), or refer to OMFS/ENT.</li>
<li>Antibiotics, analgesia, sinus precautions as appropriate. Document fully.</li>
</ol>
<h3>Maxillary sinus</h3>
<ul>
<li>Upper molar/premolar roots, upper third molars, implants. Risk factors: large sinus, thin floor, roots between sinus recesses, excessive apical force.</li>
<li>Retrieval options: through the socket (widen, irrigate with saline, suction — only if the fragment is visible), <b>lateral window (Caldwell-Luc)</b> approach, or <b>functional endoscopic sinus surgery (FESS)</b> by ENT.</li>
<li>Close the resulting OAC (buccal advancement flap). Sinus precautions, decongestant (e.g. ephedrine 0.5% nasal drops), antibiotics if the sinus is contaminated.</li>
<li>A small root apex free of infection is sometimes left and monitored after discussion, but most guidance favours retrieval to prevent sinusitis.</li>
</ul>
<h3>Lingual pouch (submandibular space)</h3>
<ul>
<li>Lower third molar roots or whole teeth pushed through a thin or perforated lingual plate, usually below the mylohyoid.</li>
<li>Immediately place a finger on the lingual aspect in the floor of the mouth to push the fragment back up — if it doesn't reappear, stop.</li>
<li>Localise with CBCT/CT; retrieval via a lingual flap (protecting the lingual nerve) or extraoral approach, usually by OMFS.</li>
</ul>
<h3>Infratemporal fossa</h3>
<ul>
<li>Upper third molars (usually unerupted) displaced posterosuperiorly, through the periosteum, when force is applied without a distal guard.</li>
<li>Stop, image with CT/CBCT, refer. Retrieval is sometimes delayed (several weeks) to let fibrosis fix the tooth; risks include infection, trismus and haemorrhage from the pterygoid plexus.</li>
<li>Prevention: adequate flap and bone removal; place a retractor/finger distal to the tooth during elevation.</li>
</ul>
<h3>Displaced implants</h3>
<p>Into the sinus (lack of primary stability, sinus augmentation failure) or mandibular canal/floor of mouth. Remove via lateral window or FESS. An implant encroaching on the IAN canal with new numbness should be removed or backed out urgently — ideally within about 30 hours.</p>
<div class="box pearl"><b>Exam pearl</b>Know which way the fragment goes for each site, how you'd prevent it, and that the first move is always to stop and localise, then refer if you can't see it.</div>`
    },
    {
      id: 'd1-auto', title: 'Autotransplantation', code: '1.3.2',
      syllabus: [
        'Know the different autotransplantation techniques and indications',
        'Autotransplant teeth where appropriate and provide aftercare as part of a multidisciplinary team'
      ],
      notes: `
<h3>Indications</h3>
<ul>
<li>Replacing a lost or unrestorable incisor in a growing patient (often a premolar donor, e.g. after trauma) — keeps alveolar bone and allows growth.</li>
<li>Third molar to replace an unrestorable first molar.</li>
<li>Repositioning an ectopic canine that can't be aligned orthodontically.</li>
<li>Hypodontia, where orthodontic space closure or implants aren't suitable.</li>
</ul>
<h3>Patient and tooth selection</h3>
<ul>
<li>Good oral hygiene, cooperative, MDT plan (orthodontist, restorative dentist, surgeon).</li>
<li>Donor tooth with <b>½ to ¾ root development</b> and a wide open apex (&gt;1 mm) — the pulp can revascularise and roots continue to form.</li>
<li>Recipient site with adequate bone width and height, no active infection.</li>
</ul>
<h3>Technique</h3>
<ol>
<li>Plan with CBCT; a 3D-printed replica of the donor can be used to prepare the socket and cut extraoral time.</li>
<li>Prepare the recipient socket first.</li>
<li>Extract the donor atraumatically, <b>preserving the periodontal ligament</b> and Hertwig's root sheath — handle by the crown only.</li>
<li>Minimal extraoral time (seconds to a few minutes); store in saline/the socket if needed.</li>
<li>Position slightly out of occlusion; for premolar-to-incisor, rotate 90° so the wide buccolingual dimension fills the mesiodistal space.</li>
<li>Stabilise with a flexible splint or sutures for about 2–4 weeks.</li>
</ol>
<h3>Aftercare and follow-up</h3>
<ul>
<li>Soft diet, chlorhexidine, analgesia, ± antibiotics.</li>
<li>Review at 2 weeks, 1, 3, 6 and 12 months, then yearly: mobility, percussion note (high metallic = ankylosis), radiographs for PDL space, root development, resorption.</li>
<li><b>Immature teeth</b>: pulp often revascularises — pulp canal obliteration is a sign of healing; RCT only if necrosis/infection.</li>
<li><b>Mature teeth</b>: start root canal treatment at around 2 weeks to prevent inflammatory resorption.</li>
<li>Survival: &gt;90% for immature donors in experienced hands. Failure modes: replacement resorption (ankylosis), inflammatory resorption, pulp necrosis.</li>
</ul>`
    },
    {
      id: 'd1-ortho', title: 'Orthodontic-related surgery: canines, incisors, TADs', code: '1.3.3',
      syllabus: [
        'Know the types of exposure techniques for impacted teeth, their risks, benefits and indications',
        'Assess and treatment-plan teeth for exposure',
        'Perform open and closed exposure techniques and provide aftercare',
        'Know the uses of temporary anchorage devices and place them with orthodontic colleagues'
      ],
      notes: `
<h3>Palatally ectopic maxillary canine (RCS 2022)</h3>
<ul>
<li>Affects ~1.5–2% of people; palatal displacement is more common than buccal (~2–3:1 in Europeans); more common in females; associated with missing or peg-shaped lateral incisors.</li>
<li><b>Detection</b>: palpate for the canine bulge buccally from age 10. Suspect if not palpable by 10–11, asymmetry, or a retained primary canine after ~13.</li>
<li><b>Localisation</b>: horizontal parallax (two periapicals or occlusal + DPT) or vertical parallax (DPT + upper standard occlusal), SLOB rule. CBCT if incisor root resorption is suspected or position is unclear.</li>
</ul>
<div class="box guide"><b>Management options</b>
<ul>
<li><b>Interceptive extraction of the primary canine</b>: consider in patients aged ~10–13 with a palatally displaced canine and no crowding. If no improvement after ~12 months, consider other options. Space creation/maintenance (e.g. with an appliance) may help in crowded arches.</li>
<li><b>Surgical exposure and orthodontic alignment</b>: when the patient is motivated, the canine is in a favourable position, and the rest of the dentition is healthy.</li>
<li><b>Surgical removal</b>: unfavourable position, root resorption, patient declines orthodontics, good contact between the lateral and first premolar.</li>
<li><b>Leave in situ and monitor</b> with periodic radiographs (risk of resorption of adjacent roots or cystic change).</li>
<li>Autotransplantation (rarely).</li></ul></div>
<h3>Exposure techniques</h3>
<div class="tbl"><table><tr><th>Technique</th><th>How</th><th>Best for</th></tr>
<tr><td>Open exposure (palatal)</td><td>Remove overlying mucosa and bone to expose the crown, place a surgical pack for ~7–10 days; tooth may erupt spontaneously before bonding</td><td>Palatal canines, especially superficial ones</td></tr>
<tr><td>Closed exposure</td><td>Raise a flap, remove bone around the crown, bond a bracket/eyelet with gold chain, replace the flap; traction starts ~2 weeks later</td><td>Deep palatal or high buccal canines</td></tr>
<tr><td>Apically repositioned flap</td><td>Raise a split/full flap including attached gingiva, reposition apically to leave keratinised tissue over the crown</td><td>Low labial canines with little attached gingiva</td></tr></table></div>
<p>The UK multicentre PAC randomised trial found no meaningful difference in periodontal outcome or patient experience between open and closed exposure for palatal canines — choice depends on depth, operator and orthodontist preference.</p>
<p>Bonding tips: dry field (haemostasis with adrenaline, suction), etch–prime–bond, position the attachment where traction will move the crown in the right direction (often on the palatal surface near the cusp tip), chain exiting at the crest of the ridge or through the flap.</p>
<p>Risks: failure of bond (re-operation), ankylosis (no movement — may need removal), damage to adjacent roots, gingival recession, loss of vitality.</p>
<h3>Unerupted maxillary incisors (RCS 2022)</h3>
<ul>
<li><b>Investigate if</b>: the contralateral incisor erupted &gt;6 months ago, a delay of &gt;1 year beyond normal eruption, or laterals erupt before centrals.</li>
<li><b>Causes</b>: supernumerary teeth (commonest), dilaceration (trauma to the primary predecessor), crowding/retained primary tooth, odontomes, cysts, cleft lip and palate, syndromes (cleidocranial dysplasia).</li>
<li><b>Management</b>: remove the supernumerary and ensure adequate space (extract primary teeth, create/maintain space with an appliance). Many incisors then erupt spontaneously (roughly half to three-quarters, usually within 18 months). Some clinicians expose and bond at the same operation to avoid a second GA.</li>
<li>If no eruption after a reasonable period with adequate space (often ~12 months), carry out closed exposure with a gold chain.</li>
<li>Dilacerated incisors: prognosis depends on severity and root development; may need removal and space management.</li>
</ul>
<h3>Temporary anchorage devices (TADs)</h3>
<ul>
<li>Mini-screws (~1.2–2 mm diameter, 6–12 mm length), placed under LA, often self-drilling, loaded immediately with light forces.</li>
<li>Uses: absolute anchorage for retraction, intrusion, molar distalisation, protraction, uprighting.</li>
<li>Sites: interradicular in attached gingiva (buccal between premolar/molar roots), paramedian palate, infrazygomatic crest, retromolar.</li>
<li>Risks: root damage, failure/loosening (~10–15%), peri-implant inflammation, fracture, sinus/nerve injury.</li>
<li>Plan positions with the orthodontist using radiographs; verify divergence of adjacent roots.</li>
</ul>`
    },
    {
      id: 'd1-oac', title: 'Oro-antral communications and fistulae', code: '1.3.4',
      syllabus: [
        'Assess and diagnose oro-antral communications/fistulae',
        'Manage OACs/OAFs, including fistula excision, buccal advancement, buccal fat pad and rotational flaps, with or without adjunct materials'
      ],
      notes: `
<h3>Definitions</h3>
<p><b>OAC</b>: an opening between the mouth and maxillary sinus (usually after extraction of upper molars/premolars). <b>OAF</b>: an epithelialised tract that persists — typically after a few weeks of non-healing.</p>
<h3>Risk factors</h3>
<p>Upper first molar (commonest), second molar and third molar; large pneumatised sinus; isolated molar; divergent/curved roots; periapical pathology; ankylosis; surgical extraction; tuberosity fracture.</p>
<h3>Diagnosis</h3>
<ul>
<li>Inspection: sinus lining visible, bubbling of blood in the socket, air escape.</li>
<li>Bony fragment (sinus floor) attached to roots.</li>
<li>Gentle nose-blowing test with nostrils pinched (Valsalva) — may enlarge a thin membrane; use judiciously.</li>
<li><b>Avoid probing</b> — it can tear the membrane and introduce infection.</li>
<li>Late presentation: fluid/air through the nose when drinking, altered voice, unilateral nasal discharge, foul taste, sinusitis, granulation tissue in the opening.</li>
<li>Imaging: DPT, occipitomental, CBCT (sinus disease, displaced roots, bone defect size).</li>
</ul>
<h3>Management of acute OAC</h3>
<div class="tbl"><table><tr><th>Size</th><th>Management</th></tr>
<tr><td>Small (≤ ~2 mm), sinus healthy</td><td>Encourage clot formation, suture socket margins (figure-of-eight) ± haemostatic agent; usually heals spontaneously</td></tr>
<tr><td>Larger (&gt; ~2–3 mm), or displaced root, or sinus membrane torn</td><td>Primary closure, ideally within 24–48 h — buccal advancement flap first line</td></tr></table></div>
<div class="box dose"><b>Post-operative sinus care</b>
<ul><li>No nose-blowing for ~2 weeks; sneeze with mouth open; avoid straws, smoking, wind instruments, flying/diving</li><li>Decongestant: ephedrine 0.5% nasal drops or steam/menthol inhalations</li><li>Antibiotics (e.g. amoxicillin or doxycycline) if pre-existing sinusitis, contamination or displaced root (practice varies)</li><li>Analgesia and soft diet; review at 1–2 weeks</li></ul></div>
<h3>Closure flaps</h3>
<div class="tbl"><table><tr><th>Flap</th><th>Technique</th><th>Pros</th><th>Cons</th></tr>
<tr><td>Buccal advancement (Rehrmann)</td><td>Trapezoidal buccal flap; horizontal periosteal release incisions allow tension-free advancement over the defect onto palatal tissue</td><td>Simple, good blood supply, workhorse</td><td>Reduces buccal sulcus depth (denture problems), less suited to large defects</td></tr>
<tr><td>Buccal fat pad</td><td>Pedicled fat pad mobilised through incision in periosteum behind the zygomatic buttress; can be covered by buccal flap or left to epithelialise (~2–3 weeks)</td><td>Excellent for large posterior defects, rich blood supply, preserves sulcus</td><td>Limited volume, partial necrosis if overstretched</td></tr>
<tr><td>Palatal rotation</td><td>Full-thickness palatal flap based on the greater palatine artery, rotated over the defect</td><td>Thick, robust, keratinised; good for revisions</td><td>Exposed donor palate heals by secondary intention, painful; kinking at pivot</td></tr></table></div>
<p>Adjuncts: platelet-rich fibrin, collagen membranes, bone substitutes, pedicled tongue flap (historical), and two-layer closures for large defects.</p>
<h3>Oro-antral fistula</h3>
<ol>
<li>Treat sinusitis first (antibiotics, decongestant; ENT/FESS if chronic sinus disease or polyps — obstructed ostium causes failure).</li>
<li>Excise the epithelialised tract and debride.</li>
<li>Close with an appropriate flap (buccal advancement, buccal fat pad, palatal rotation).</li>
</ol>
<div class="box pearl"><b>Exam pearl</b>Failure of OAF closure is usually due to untreated sinus disease or flap tension. Always address the sinus and make the flap tension-free.</div>`
    },
    {
      id: 'd1-endo', title: 'Surgical endodontics (periradicular surgery)', code: '1.3.5',
      syllabus: [
        'Assess teeth with periapical pathology and select those that may benefit from surgical endodontics',
        'Know surgical approaches, equipment and restorative materials',
        'Manage periapical pathology including retrograde procedures, liaising with endodontics/restorative dentistry',
        'Describe why orthograde and retrograde root treatment can fail'
      ],
      notes: `
<h3>Indications (BES 2020)</h3>
<ul>
<li>Persistent periradicular disease after root canal treatment where <b>orthograde retreatment is not possible or would risk the tooth</b> (well-fitting post-crown, non-retrievable separated instrument, blocked/calcified canal, ledge)</li>
<li>Failed orthograde retreatment</li>
<li>Need for biopsy of periradicular tissue</li>
<li>Perforation/resorption repair not accessible orthogradely; apical root fracture (remove apical fragment)</li>
<li>Symptomatic overextended material</li>
</ul>
<p>Orthograde retreatment is the first choice where feasible — surgery doesn't address coronal infection.</p>
<h3>Contraindications</h3>
<p>Unrestorable tooth, poor periodontal support or vertical root fracture, inadequate access (thick external oblique ridge on lower 7s), proximity to the IAN/mental nerve or sinus (relative), medical (bleeding, MRONJ risk, recent MI), poor patient cooperation.</p>
<h3>Assessment</h3>
<p>Clinical (sinus tract, probing depths — isolated deep pocket suggests vertical root fracture, mobility, restoration quality), periapical radiographs, CBCT (lesion size, root and canal anatomy, relation to nerve/sinus, buccal plate thickness).</p>
<h3>Technique (modern microsurgical)</h3>
<ol>
<li><b>LA with vasoconstrictor</b> (haemostasis is critical).</li>
<li><b>Flap</b>: full sulcular (triangular/rectangular) — safe, good access, possible recession; <b>papilla-base incision</b> — preserves papillae in aesthetic zone; <b>submarginal (Ochsenbein–Luebke)</b> — needs ≥ 2 mm attached gingiva beyond the probing depth, avoids recession but may scar.</li>
<li><b>Osteotomy</b>: minimal size needed, under irrigation.</li>
<li><b>Curettage</b> of periradicular tissue — send for histology.</li>
<li><b>Root-end resection</b>: remove <b>3 mm</b> of apex (removes ~98% of apical ramifications and ~93% of lateral canals) with <b>0–10° bevel</b> (minimises exposed dentinal tubules).</li>
<li><b>Inspection</b> under magnification (operating microscope/endoscope, micro-mirror, methylene blue) for isthmuses, missed canals, cracks.</li>
<li><b>Root-end preparation</b>: 3 mm along the long axis with ultrasonic tips.</li>
<li><b>Haemostasis</b>: adrenaline pellets, ferric sulphate (remove — impairs healing), calcium sulphate.</li>
<li><b>Root-end filling</b>: MTA or bioceramic (e.g. Biodentine, bioceramic putty) preferred; IRM or Super-EBA acceptable alternatives. Amalgam is obsolete.</li>
<li>Reposition and suture with fine monofilament (5/0–6/0); remove sutures at ~3–5 days.</li>
</ol>
<h3>Outcomes</h3>
<ul>
<li>Modern microsurgical technique: ~90%+ success vs ~60% for traditional technique (Setzer 2010 meta-analysis: 94% vs 59%).</li>
<li>Review at ~6–12 months, then up to 4 years. Radiographic healing (Molven): complete, incomplete (scar tissue), uncertain, unsatisfactory.</li>
</ul>
<h3>Why root canal treatment fails</h3>
<div class="tbl"><table><tr><th>Orthograde failure</th><th>Retrograde (surgical) failure</th></tr>
<tr><td>Persistent intraradicular infection: missed canals, poor cleaning, short/poorly condensed fill</td><td>Inadequate root-end seal or preparation; isthmus missed</td></tr>
<tr><td>Coronal leakage (poor restoration)</td><td>Coronal leakage not addressed — reinfection from above</td></tr>
<tr><td>Extraradicular infection (e.g. Actinomyces), true cysts</td><td>Insufficient resection, steep bevel exposing tubules</td></tr>
<tr><td>Foreign body reaction (extruded material)</td><td>Vertical root fracture, periodontal breakdown</td></tr>
<tr><td>Vertical root fracture, iatrogenic perforation</td><td>Incomplete removal of pathology, poor case selection</td></tr></table></div>`
    },
    {
      id: 'd1-biopsy', title: 'Biopsy techniques', code: '1.3.6',
      syllabus: [
        'Knowledge of biopsy techniques for soft and hard tissues of the oral cavity and perioral area',
        'Carry out biopsies where appropriate',
        'Provide aftercare and inform patients of results sensitively and promptly',
        'Instigate further management or referral based on results'
      ],
      notes: `
<h3>Types</h3>
<div class="tbl"><table><tr><th>Technique</th><th>Use</th></tr>
<tr><td>Incisional</td><td>Large lesions, suspected malignancy, mucosal disease — sample the most representative area (red/ulcerated/indurated) ± margin of normal tissue</td></tr>
<tr><td>Excisional</td><td>Small (typically &lt;1 cm), clinically benign lesions — removes lesion with a margin (~2–3 mm)</td></tr>
<tr><td>Punch (4–6 mm)</td><td>Mucosal disease (lichen planus, dysplasia mapping); quick, uniform depth</td></tr>
<tr><td>Perilesional</td><td>Vesiculobullous disease — normal-looking tissue next to a blister for <b>direct immunofluorescence</b>; send <b>fresh or in Michel's medium</b>, not formalin</td></tr>
<tr><td>Brush cytology</td><td>Adjunct/screening only — not diagnostic</td></tr>
<tr><td>FNAC / core biopsy</td><td>Salivary and neck masses, usually ultrasound-guided. FNAC: cells only; core: architecture</td></tr>
<tr><td>Aspiration</td><td>Before opening a radiolucent jaw lesion — exclude a vascular lesion; fluid analysis (keratin in OKC)</td></tr></table></div>
<h3>Soft tissue technique</h3>
<ol>
<li>Consent (including scar, numbness, the chance that further surgery is needed).</li>
<li>LA <b>around</b> the lesion, not into it (distorts histology).</li>
<li>Traction suture through the specimen to lift it — avoid crushing with forceps.</li>
<li>Elliptical incision ~3:1 length to width, parallel to nerves/vessels (e.g. lip), deep enough to include submucosa.</li>
<li>Haemostasis, close with resorbable sutures.</li>
<li>Specimen into <b>10% neutral buffered formalin</b> (~10–20× specimen volume) promptly; orientation suture if margins matter.</li>
<li>Label pot and form; give full clinical details, site, duration, differential diagnosis, relevant history (smoking, drugs).</li>
</ol>
<h3>Hard tissue</h3>
<p>Aspirate first; raise a flap, create a bony window, sample lining/lesional tissue (send bone separately — needs decalcification which delays reporting). Consider frozen section for intraoperative decisions. Avoid biopsy of suspected vascular lesions and fibrous dysplasia without specialist input.</p>
<h3>Special considerations</h3>
<ul>
<li>Suspected SCC: refer urgently via the suspected cancer pathway; the treating unit usually biopsies (and may want imaging first) — avoid excising a suspected cancer in primary care.</li>
<li>Pigmented lesions: excisional biopsy where possible (melanoma staging depends on thickness).</li>
<li>Minor salivary gland (lip) biopsy for Sjögren's: small incision in lower labial mucosa, harvest ≥4–5 glands; risk of lip numbness.</li>
</ul>
<h3>Results and aftercare</h3>
<ul>
<li>Have a system to track results (log, named clinician). Give results in person when serious — use a structured approach (SPIKES) and have support available.</li>
<li>Act on results: further excision, MDT referral, surveillance, or reassurance. Copy to GDP/GP.</li>
<li>If the histology doesn't match the clinical picture, discuss with the pathologist and consider re-biopsy.</li>
</ul>`
    },
    {
      id: 'd1-implants', title: 'Implants in dentoalveolar practice', code: '1.3.7',
      syllabus: [
        'Knowledge of techniques for replacing teeth with osseointegrated implants',
        'Assess and treatment-plan patients for implants',
        'Liaise with other specialties in planning, placement and maintenance'
      ],
      notes: `
<p>Oral surgeons often place implants as part of a restorative team. The full syllabus is in <b>Domain 7</b>; the dentoalveolar essentials are:</p>
<ul>
<li><b>Prosthetically driven planning</b>: start with the planned tooth position (diagnostic wax-up/digital set-up), then plan the implant in CBCT software.</li>
<li><b>Site preservation</b> at the time of extraction (atraumatic technique, ridge preservation where an implant is planned).</li>
<li><b>Timing</b>: immediate (type 1), early with soft tissue healing (type 2, 4–8 weeks), early with partial bone healing (type 3, 12–16 weeks), late (type 4, ≥ 6 months).</li>
<li><b>Risk factors</b>: smoking, uncontrolled diabetes, periodontitis history, IV antiresorptives, head and neck radiotherapy, bruxism, incomplete growth.</li>
<li><b>Safety margins</b>: ~2 mm above the IAN canal; ≥1.5 mm from adjacent teeth; ≥3 mm between implants; awareness of the lingual concavity (floor-of-mouth haemorrhage).</li>
<li><b>Overdenture abutments</b>: two implants in the anterior mandible supporting an overdenture are the minimum standard of care for the edentulous mandible (McGill consensus 2002).</li>
</ul>`
    },
    {
      id: 'd1-pharm', title: 'Medicines for dentoalveolar surgery', code: '1.4',
      syllabus: [
        'Medications that may be required: antimicrobials, analgesics, steroid cover, biomaterials for periradicular surgery',
        'Medications affecting care: antiplatelets and anticoagulants, antiresorptives, antiangiogenics, biological and small-molecule immunomodulators and targeted therapies'
      ],
      notes: `
<h3>Anticoagulants and antiplatelets (SDCEP 2022)</h3>
<div class="tbl"><table><tr><th>Bleeding risk</th><th>Procedures</th></tr>
<tr><td>Low</td><td>Simple extraction of 1–3 teeth with restricted wound size, incision and drainage, basic periodontal treatment, restorations, endodontics, LA</td></tr>
<tr><td>Higher</td><td>Complex extractions, adjacent extractions creating a large wound, &gt;3 extractions at once, flap raising, biopsies, periodontal surgery</td></tr></table></div>
<div class="tbl"><table><tr><th>Drug</th><th>Low risk</th><th>Higher risk</th></tr>
<tr><td>Antiplatelets (single or dual)</td><td>Treat without interruption</td><td>Treat without interruption; expect prolonged bleeding with dual therapy — limit area treated</td></tr>
<tr><td>Warfarin</td><td colspan="2">Check INR (ideally ≤24 h before, up to 72 h if stable). INR &lt;4: treat without interruption. INR ≥4: delay and contact the anticoagulant service</td></tr>
<tr><td>Apixaban, dabigatran (twice daily)</td><td>Treat without interruption</td><td><b>Miss the morning dose</b>; take the evening dose as usual (≥4 h after haemostasis)</td></tr>
<tr><td>Rivaroxaban, edoxaban (once daily)</td><td>Treat without interruption</td><td>If taken in the morning, <b>delay</b> the dose until 4 h after haemostasis</td></tr>
<tr><td>LMWH (injectable)</td><td colspan="2">Prophylactic doses: usually no change. Therapeutic doses: consult the prescriber</td></tr></table></div>
<div class="box dose"><b>Local haemostatic measures</b><ul><li>Treat early in the day and week; plan staged treatment (limit initial extractions)</li><li>Atraumatic technique; consider infiltration/intraligamentary LA instead of an IANB where practical</li><li>Pack sockets (oxidised regenerated cellulose, collagen sponge) and suture</li><li>Pressure with damp gauze for 20 minutes</li><li>Consider tranexamic acid mouthwash where available</li><li>Paracetamol rather than NSAIDs for analgesia; check interactions (e.g. metronidazole, azoles, macrolides with warfarin)</li><li>Give written post-op instructions and an emergency contact</li></ul></div>
<p>Refer to secondary care: congenital bleeding disorders, liver disease, thrombocytopenia, chemotherapy, combined anticoagulant + antiplatelet with other risk factors, or INR outside range.</p>
<h3>Antimicrobials</h3>
<ul>
<li>Not routinely needed for dentoalveolar surgery in healthy patients. A Cochrane review (Lodi 2021) shows prophylactic antibiotics reduce infection and dry socket after third molar surgery, but the absolute benefit is small and adverse effects are common — weigh against stewardship.</li>
<li>Pre-operative chlorhexidine 0.12–0.2% rinse reduces dry socket. Check for chlorhexidine allergy (anaphylaxis reported — MHRA).</li>
<li>Indications: spreading infection, systemic involvement, immunocompromise, IE prophylaxis in special-risk patients, ORN-risk extractions (local protocols).</li>
</ul>
<h3>Analgesia and steroids</h3>
<ul>
<li>Ibuprofen 400 mg + paracetamol 1 g (both regularly for 2–3 days) is the most effective simple combination after third molar surgery.</li>
<li><b>Dexamethasone</b> (e.g. 4–8 mg IV/IM/submucosal or oral peri-operatively) reduces swelling and trismus after third molar surgery.</li>
<li>Long-term steroid users: the issue is adrenal insufficiency — follow current Society for Endocrinology guidance on stress-dose supplementation (more relevant for GA/major procedures than simple LA extractions). Never stop steroids abruptly.</li>
</ul>
<h3>Bone-modifying and immunomodulatory drugs</h3>
<ul>
<li><b>Antiresorptives</b> (bisphosphonates, denosumab) and <b>antiangiogenics</b> (bevacizumab, sunitinib, aflibercept): MRONJ risk — assess per SDCEP; high-risk patients (cancer, previous MRONJ) need careful planning; prefer alternatives to extraction where reasonable. See Domain 6.</li>
<li><b>Biologic and small-molecule immunomodulators</b> (anti-TNF, rituximab, JAK inhibitors, methotrexate): infection risk and delayed healing; liaise with the prescriber about timing relative to dosing cycles. Some (e.g. anti-TNF, mTOR inhibitors) have been linked with osteonecrosis.</li>
</ul>
<h3>Biomaterials for periradicular surgery</h3>
<ul>
<li><b>MTA</b> (calcium silicate): excellent seal, biocompatible, induces cementum and hard tissue; long setting time; grey MTA can discolour.</li>
<li><b>Biodentine / bioceramic putties</b>: tricalcium silicate, faster setting, easier handling.</li>
<li><b>IRM</b> and <b>Super-EBA</b> (reinforced zinc oxide–eugenol): acceptable, cheaper; lower success than bioceramics in some studies.</li>
</ul>`
    },
    {
      id: 'd1-technique', title: 'Operative technique: flaps, bone removal and closure', code: '1.5',
      syllabus: [
        'Perform routine and surgical exodontia: design and raise a mucoperiosteal flap, bone removal, tooth/root division, debridement, suturing',
        'Use scalpels, diathermy, elevators, luxators, forceps and handpieces safely',
        'Select suture materials and techniques',
        'Carry out coronectomies; perform peri-radicular surgery',
        'Surgically expose teeth; close OACs; incisional and excisional biopsy; place implants'
      ],
      notes: `
<h3>Flap design principles</h3>
<ul>
<li>Base broader than the free margin to preserve blood supply.</li>
<li>Full-thickness mucoperiosteal flap; incisions on sound bone, not over a bony defect.</li>
<li>Relieving incisions at line angles (not across papillae or over the mental foramen region).</li>
<li>Adequate size for access and visibility — small flaps cause tearing.</li>
<li>Lower third molar: distal incision from the distobuccal corner of the 7 directed <b>buccally</b> (lingual nerve may lie at the crest/lingual plate), with a buccal relieving incision (two-sided/triangular) or envelope flap.</li>
</ul>
<h3>Bone removal and sectioning</h3>
<ul>
<li>Surgical handpiece with sterile saline irrigation. Use an electric or rear-exhaust handpiece — <b>never an air turbine that exhausts into the wound</b> (surgical emphysema).</li>
<li>Buccal guttering around the crown to the CEJ/below; preserve lingual plate.</li>
<li>Section to create a path of withdrawal: mesioangular — remove distal crown; horizontal — section crown from roots, then separate roots; distoangular — remove distal portion and section roots.</li>
<li>Elevate with controlled force (Coupland's chisels, Warwick James, Cryer's). Use a point of application and fulcrum on bone, not on adjacent teeth.</li>
<li>Lingual split technique (chisel) is largely historical due to lingual nerve risk.</li>
</ul>
<h3>Debridement and closure</h3>
<ul>
<li>Remove follicle and debris, smooth sharp bone, irrigate under the flap.</li>
<li>Close with resorbable sutures (e.g. 3/0 or 4/0 Vicryl Rapide). Interrupted sutures are most common; horizontal mattress for socket haemostasis; continuous for long flaps; figure-of-eight over sockets.</li>
<li>Avoid tension; don't place sutures over the bony defect.</li>
</ul>
<h3>Instruments</h3>
<ul>
<li><b>Scalpel</b>: No. 15 blade (most intraoral incisions), 12 (curved — distal of molars, sulcus), 11 (stab incisions).</li>
<li><b>Luxators</b>: sharp blades to cut PDL and luxate — not designed to lever.</li>
<li><b>Forceps</b>: grasp on root surface, apical pressure first, then controlled movements (buccal-lingual for most; rotation for single conical roots).</li>
<li><b>Diathermy</b>: bipolar near nerves/pacemakers; avoid with alcohol-based prep or oxygen near the field.</li>
</ul>
<div class="box pearl"><b>Exam pearl</b>For any operative question, describe: anaesthesia → incision and flap → bone removal → sectioning → elevation → debridement → closure → haemostasis → post-op instructions and follow-up.</div>`
    },
    {
      id: 'd1-complications', title: 'Complications of dentoalveolar surgery', code: '1.5',
      syllabus: [
        'Dry socket; infected socket; non-healing or delayed healing',
        'Osteonecrosis; osteoradionecrosis',
        'Primary and secondary haemorrhage',
        'Fractured tuberosity and fractured buccal plate',
        'Oroantral communication and fistula',
        'Displaced teeth, roots and implants (maxillary antrum, lingual pouch, infratemporal fossa)',
        'Soft tissue injuries; TMJ injuries; nerve injuries'
      ],
      notes: `
<h3>Dry socket (alveolar osteitis)</h3>
<ul>
<li>Onset <b>2–4 days</b> after extraction: severe throbbing pain often radiating to the ear, empty socket with exposed bone, halitosis, bad taste; analgesics ineffective. No fever.</li>
<li>Incidence ~1–5% of routine extractions; up to ~20–30% after surgical mandibular third molar removal.</li>
<li>Risk factors: smoking, oral contraceptive, female, previous dry socket, traumatic/difficult extraction, mandibular molars, poor oral hygiene, pericoronitis.</li>
<li>Management: LA, gentle irrigation with warm saline, dressing (e.g. Alvogyl — contains iodoform, butamben, eugenol; or BIPP on ribbon gauze — check iodine allergy), analgesia, review every few days. <b>Antibiotics are not indicated</b> without systemic infection.</li>
<li>Prevention: chlorhexidine rinse/gel, atraumatic technique, smoking advice.</li>
</ul>
<h3>Infected socket and delayed healing</h3>
<p>Infected socket: pus, swelling, ± fever — drain, debride, irrigate, antibiotics if spreading/systemic. A socket not healing after a few weeks needs investigation: retained root or foreign body, sequestrum, MRONJ, ORN, malignancy (biopsy).</p>
<h3>Haemorrhage</h3>
<div class="tbl"><table><tr><th>Type</th><th>Timing</th><th>Cause</th></tr>
<tr><td>Primary</td><td>During surgery</td><td>Vessel injury, bleeding disorder, inflamed tissue</td></tr>
<tr><td>Reactionary</td><td>Within ~48 h (usually hours)</td><td>Vasoconstrictor wears off, BP rises, clot dislodged, suture slips</td></tr>
<tr><td>Secondary</td><td>~5–10 days</td><td>Infection eroding vessels</td></tr></table></div>
<p>Management: see Domain 8 (pressure, LA with vasoconstrictor, haemostatic packing, sutures, tranexamic acid, investigate cause, refer if uncontrolled).</p>
<h3>Fractured tuberosity</h3>
<ul>
<li>Risk: isolated upper molar, large sinus, ankylosis, divergent roots, upper third molar extraction without support.</li>
<li>Prevention: radiograph, surgical approach/sectioning, support the tuberosity with fingers.</li>
<li>Management: if small and free of periosteum — remove, smooth, close (check for OAC). If large and attached — stop, consider splinting (wire/composite to adjacent teeth for ~6–8 weeks) and remove the tooth surgically later, or section the tooth from the tuberosity; close OAC. Antibiotics and sinus precautions if sinus involved.</li>
</ul>
<h3>Fractured buccal plate</h3>
<p>Remove fragments stripped of periosteum; reposition attached fragments; smooth sharp edges.</p>
<h3>Nerve injury</h3>
<ul>
<li>Record pre-op sensation; assess at review: subjective symptoms, mapping of the affected area, light touch, two-point discrimination, pin-prick, thermal tests; photograph the map.</li>
<li>Review at ~1 week, 1 month and 3 months. Little recovery by 3 months suggests permanent deficit. Painful post-traumatic trigeminal neuropathy may follow.</li>
<li>Refer early to a specialist nerve-injury service if suspected transection (seen at surgery) or no recovery — lingual nerve repair outcomes are best when explored early (within ~3 months).</li>
<li>Implant or endodontic material in the canal causing new numbness: remove within ~30 hours.</li>
<li>Some protocols use early high-dose steroid and NSAIDs; evidence is limited.</li>
</ul>
<h3>Other complications</h3>
<ul>
<li><b>TMJ</b>: dislocation (reduce immediately — see Domain 2), joint pain from prolonged opening — use a bite block and support the mandible.</li>
<li><b>Soft tissue</b>: lip/commissure burns from handpieces, tears from retraction, lip biting after LA in children.</li>
<li><b>Surgical emphysema</b>: crepitus from air in tissues (air-turbine use) — usually resolves; give antibiotics, monitor airway.</li>
<li><b>Mandible fracture</b>: rare; deeply impacted teeth in atrophic or older mandibles; may occur weeks later when chewing — advise soft diet.</li>
<li><b>Damage to adjacent teeth</b>, wrong-site surgery (a <b>Never Event</b> — use LocSSIPs/WHO checklist with site marking and time-out).</li>
<li>OAC/OAF and displaced teeth — see their own topics.</li>
<li>MRONJ/ORN — see Domain 6.</li>
</ul>`
    }
  ],
  cards: [
    ['Three most predictive Rood &amp; Shehab signs of IAN proximity?', 'Darkening of the root, interruption of the white line of the canal, and diversion of the canal.'],
    ['Pell &amp; Gregory depth classes?', 'A: occlusal surface at/above the occlusal plane of the 7. B: between occlusal plane and cervical line. C: below the cervical line.'],
    ['Most common Winter\'s angulation of lower 8s, and the hardest to remove?', 'Mesioangular is commonest; distoangular is usually hardest in the mandible.'],
    ['Is a first episode of pericoronitis an indication for M3M removal (NICE)?', 'No — unless severe. Recurrent (second or subsequent) episodes are.'],
    ['How far below the crest are roots reduced in coronectomy?', 'About 3–4 mm below the alveolar crest, with all enamel removed.'],
    ['What to do if roots become mobile during coronectomy?', 'Remove them — mobile roots act as a foreign body and become infected.'],
    ['Ideal root development for autotransplantation?', 'One-half to three-quarters of root length with an open apex (&gt;1 mm) — the pulp can revascularise.'],
    ['When should RCT start after transplanting a mature tooth?', 'At about 2 weeks, to prevent inflammatory resorption.'],
    ['SLOB rule?', 'Same Lingual, Opposite Buccal: if the object moves in the same direction as the tube shift it is lingual/palatal.'],
    ['Interceptive extraction of the primary canine — who benefits?', 'Patients aged ~10–13 with a palatally displaced permanent canine and no crowding; reassess after ~12 months.'],
    ['When should an unerupted upper central incisor be investigated?', 'If the contralateral incisor erupted &gt;6 months earlier, there is a &gt;1 year delay, or laterals erupt first.'],
    ['Most common cause of an unerupted maxillary central incisor?', 'A supernumerary tooth (often tuberculate).'],
    ['Best exposure technique for a low labially impacted canine with little attached gingiva?', 'Apically repositioned flap (preserves keratinised tissue).'],
    ['Size threshold for primary closure of an OAC?', 'Larger than about 2–3 mm (or with displaced root/torn membrane) — close within 24–48 h.'],
    ['First-line flap for OAC closure and its main drawback?', 'Buccal advancement (Rehrmann) flap — reduces buccal sulcus depth.'],
    ['Why might an OAF closure fail?', 'Untreated sinus disease (blocked ostium) or flap tension.'],
    ['How much root apex is resected in periradicular surgery and at what bevel?', '3 mm, with a 0–10° bevel.'],
    ['Preferred root-end filling materials?', 'MTA or bioceramics (e.g. Biodentine); IRM/Super-EBA are acceptable alternatives.'],
    ['Success of modern microsurgical vs traditional apicectomy?', 'About 94% vs 59% (Setzer 2010 meta-analysis).'],
    ['Transport medium for a perilesional biopsy for DIF?', 'Fresh (to lab immediately) or Michel\'s medium — not formalin.'],
    ['Why give LA around rather than into a lesion being biopsied?', 'Injecting into it distorts the tissue architecture.'],
    ['SDCEP: warfarin INR threshold for extraction in primary care?', 'INR below 4, checked ideally within 24 h (up to 72 h if stable).'],
    ['SDCEP: apixaban before a higher-risk procedure?', 'Miss the morning dose; take the evening dose as usual (at least 4 h after haemostasis).'],
    ['SDCEP: rivaroxaban taken in the morning before a higher-risk procedure?', 'Delay the dose until 4 hours after haemostasis.'],
    ['SDCEP: dual antiplatelet therapy before extraction?', 'Do not interrupt; use local measures and limit the treatment area.'],
    ['Timing and features of dry socket?', '2–4 days post-op: severe radiating pain, empty socket with bare bone, halitosis.'],
    ['Reactionary vs secondary haemorrhage?', 'Reactionary: within ~48 h (vasoconstrictor wears off). Secondary: ~5–10 days (infection).'],
    ['Why not use an air turbine for surgical bone removal?', 'Air exhausts into the tissues causing surgical emphysema.'],
    ['Which direction should the distal incision for a lower 8 run?', 'Buccally — the lingual nerve may be at or above the lingual crest.'],
    ['Timing for removing an implant impinging on the IAN with new numbness?', 'As soon as possible — ideally within about 30 hours.'],
    ['Antibiotic prophylaxis for IE if agreed (SDCEP)?', 'Amoxicillin 3 g orally 60 minutes before (clindamycin 600 mg if allergic — check current advice).']
  ],
  mcqs: [
    { q: 'A 32-year-old has recurrent pericoronitis around a vital, vertically impacted lower third molar. DPT shows darkening of the roots and interruption of the canal\'s white line; CBCT shows the canal in direct contact with the roots without cortication. What is the most appropriate management?', o: ['Leave and review annually', 'Full surgical extraction', 'Coronectomy', 'Operculectomy', 'Long-term chlorhexidine'], a: 2, e: 'A vital tooth with a clear indication for removal and high radiological IAN risk is the classic indication for coronectomy. It is contraindicated if the tooth is non-vital, infected at the roots, mobile, or horizontally impacted along the nerve.' },
    { q: 'A patient taking apixaban twice daily needs surgical removal of a lower third molar under LA at 9 am. What does SDCEP advise?', o: ['Stop apixaban 48 hours before', 'Bridge with LMWH', 'Miss the morning dose and take the evening dose as usual', 'Delay the morning dose until 4 h after haemostasis', 'No change needed'], a: 2, e: 'For twice-daily DOACs (apixaban, dabigatran) before higher-risk procedures, miss the morning dose. Delaying the dose applies to once-daily rivaroxaban/edoxaban.' },
    { q: 'An upper first molar is extracted and a 5 mm OAC is visible. The sinus appears healthy. What is the best immediate management?', o: ['Leave to heal and review in 3 weeks', 'Pack the socket with BIPP', 'Buccal advancement flap with sinus precautions', 'Refer for FESS', 'Prescribe antibiotics only'], a: 2, e: 'A communication larger than about 2–3 mm should be closed primarily, ideally within 24–48 h; the buccal advancement flap is the workhorse.' },
    { q: 'Three days after a lower molar extraction a patient has severe pain radiating to the ear and an empty socket with exposed bone. They are apyrexial. What is the best management?', o: ['Amoxicillin 500 mg tds for 5 days', 'Curette the socket to induce bleeding and prescribe metronidazole', 'Irrigate with warm saline, place a dressing, and give analgesia', 'Refer to OMFS', 'Reassure only'], a: 2, e: 'Dry socket is managed with irrigation, an obtundent dressing and analgesia. Antibiotics are not indicated without systemic infection.' },
    { q: 'Which statement about modern periradicular surgery is correct?', o: ['A 45° bevel improves visibility and outcome', 'Root-end preparation is done with a slow round bur', 'Around 3 mm of apex is resected to remove most ramifications', 'Amalgam is the preferred root-end filling', 'Surgery is first choice for all failed RCTs'], a: 2, e: 'Resecting 3 mm removes ~98% of apical ramifications. Bevels are 0–10°, preparation is ultrasonic, bioceramics/MTA are preferred, and orthograde retreatment comes first where possible.' },
    { q: 'While removing an upper third molar, the tooth disappears posteriorly and superiorly. What is the most appropriate next step?', o: ['Continue searching with suction and elevators', 'Close the wound and arrange imaging and referral', 'Make a Caldwell-Luc approach', 'Apply downward pressure behind the tuberosity', 'Prescribe antibiotics and review in 6 months without imaging'], a: 1, e: 'A tooth displaced into the infratemporal fossa should not be chased blindly. Stop, inform the patient, image (CT/CBCT), and refer; retrieval is often delayed until fibrosis fixes the tooth.' },
    { q: 'An 11-year-old has a palatally displaced upper canine, uncrowded arches and a retained primary canine. What is the most appropriate first step?', o: ['Surgical removal of the permanent canine', 'Closed exposure and gold chain', 'Extraction of the primary canine and review in 12 months', 'No action until age 16', 'Autotransplantation'], a: 2, e: 'Interceptive extraction of the primary canine in 10–13 year olds without crowding often improves canine position (RCS 2022). Review radiographically after about 12 months.' },
    { q: 'Which biopsy handling is correct for suspected mucous membrane pemphigoid?', o: ['Lesional biopsy of the ulcer base in formalin', 'Perilesional biopsy sent fresh or in Michel\'s medium for DIF', 'Brush cytology', 'FNAC', 'Excisional biopsy with 5 mm margins'], a: 1, e: 'Direct immunofluorescence needs perilesional tissue transported fresh or in Michel\'s medium; formalin destroys the antigens. A second sample in formalin for routine histology is usually also taken.' },
    { q: 'What is the strongest indication for removing an asymptomatic tooth before treatment begins?', o: ['A patient starting oral alendronate for osteoporosis', 'A patient about to start head and neck radiotherapy with a tooth of poor prognosis in the field', 'A patient on warfarin', 'A patient with a pacemaker', 'A patient on dual antiplatelets'], a: 1, e: 'Teeth of poor prognosis in the radiotherapy field should be extracted before treatment (ideally ≥10–14 days before) to reduce ORN risk.' },
    { q: 'Which flap design is most likely to cause gingival recession over crowns in the aesthetic zone during periradicular surgery?', o: ['Submarginal (Ochsenbein–Luebke)', 'Papilla base incision', 'Full sulcular (intrasulcular) flap', 'Semilunar flap', 'None cause recession'], a: 2, e: 'Full sulcular flaps carry the greatest risk of papillary and marginal recession; the papilla-base incision and submarginal flap reduce it (submarginal risks scarring).' }
  ]
});
