window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd7', num: '7', order: 7,
  title: 'Implants and oral rehabilitation',
  summary: 'Osseointegrated dental implants: training standards, biology and materials, patient and aesthetic risk assessment, implant types and guided surgery, biomaterials, positioning and protocols, hard and soft tissue augmentation, complications, peri-implant disease, medicines and teamwork.',
  topics: [
    {
      id: 'd7-standards', title: 'Training standards and consensus guidance', code: '7.1',
      syllabus: [
        'FGDP Training Standards in Implant Dentistry (2016) — College of General Dentistry',
        'Mentoring in Implant Dentistry: Good Practice Guidelines (CGDent)',
        'Consensus statements from ITI, EAO, Osteology Foundation and other organisations'
      ],
      notes: `
<h3>Training Standards in Implant Dentistry (FGDP 2016, now CGDent)</h3>
<ul>
<li>Sets learning outcomes for clinicians placing and/or restoring implants: theory (biology, anatomy, planning, materials, complications), clinical skills, communication and consent, record keeping, and recognising limits.</li>
<li>Training should be structured, include supervised/mentored clinical practice, and be documented (logbook, outcomes, audit).</li>
<li>Clinicians should only undertake cases within their competence and refer complex cases.</li>
<li>Professional responsibilities: indemnity, informed consent, implant records (system, lot number, dimensions given to the patient), audit of outcomes, CPD.</li>
</ul>
<h3>Mentoring in Implant Dentistry (CGDent)</h3>
<ul>
<li>A mentor is an experienced implant clinician who supports a mentee through early cases — case selection, planning, chairside supervision where appropriate, and review of outcomes.</li>
<li>Clear agreements on roles, responsibility for the patient, indemnity, and documentation.</li>
</ul>
<h3>ITI SAC classification</h3>
<div class="tbl"><table><tr><th>Category</th><th>Meaning</th></tr>
<tr><td>Straightforward</td><td>Low surgical, restorative and aesthetic risk; suitable for clinicians with basic training</td></tr>
<tr><td>Advanced</td><td>Moderate complexity (e.g. simultaneous small GBR, aesthetic zone single tooth with favourable factors)</td></tr>
<tr><td>Complex</td><td>High risk/complexity (e.g. vertical augmentation, sinus grafting with staged approach, multiple adjacent implants in the aesthetic zone, high aesthetic risk) — experienced/specialist teams</td></tr></table></div>
<h3>Consensus highlights (ITI, EAO, Osteology)</h3>
<ul>
<li>Prosthetically driven planning and correct 3D positioning are the basis of aesthetic and biological success.</li>
<li>Immediate placement (type 1) in the aesthetic zone needs strict criteria: intact buccal wall (ideally ≥1 mm), thick soft tissue phenotype, no acute infection, sufficient bone for primary stability, and an experienced clinician — otherwise higher risk of recession.</li>
<li>Short implants are a reasonable alternative to vertical augmentation in atrophic posterior jaws.</li>
<li>Supportive peri-implant care is essential; history of periodontitis, poor plaque control and lack of maintenance are major risk factors for peri-implantitis (EFP S3 guideline 2023 on peri-implant diseases).</li>
</ul>`
    },
    {
      id: 'd7-biology', title: 'Osseointegration, healing and implant materials', code: '7.2',
      syllabus: [
        'Basic science, surgical anatomy, pathology and healing in implant therapy and in hard and soft tissue regeneration',
        'Healing processes involved in implant therapy'
      ],
      notes: `
<h3>Osseointegration</h3>
<p>"A direct structural and functional connection between ordered living bone and the surface of a load-carrying implant" (Brånemark). Albrektsson (1981) identified six factors: implant material (biocompatibility), design, surface, state of the host bed, surgical technique and loading conditions.</p>
<h3>Healing at the implant–bone interface</h3>
<ul>
<li>Haematoma and fibrin clot adhere to the implant surface → osteoprogenitor cells migrate (<b>contact osteogenesis</b> — bone forms directly on the surface, favoured by moderately rough surfaces) and bone grows from the walls (<b>distance osteogenesis</b>).</li>
<li>Woven bone forms in 1–2 weeks, then remodels to lamellar bone over months.</li>
<li><b>Primary stability</b> (mechanical, from bone contact at insertion) falls in weeks 2–4 as bone remodels, while <b>secondary stability</b> (biological) rises — the "stability dip".</li>
<li>Measured by insertion torque (Ncm) and resonance frequency analysis (ISQ 1–100; ~≥60–70 suits immediate loading).</li>
<li>Heat: bone necrosis above <b>47 °C for 1 minute</b> (Eriksson &amp; Albrektsson) — sequential sharp drills, copious cooled irrigation, intermittent pressure.</li>
</ul>
<h3>Bone quality (Lekholm &amp; Zarb 1985)</h3>
<div class="tbl"><table><tr><th>Type</th><th>Description</th><th>Typical site</th></tr>
<tr><td>1</td><td>Almost entirely homogeneous compact bone</td><td>Anterior mandible</td></tr>
<tr><td>2</td><td>Thick cortex around dense trabecular bone</td><td>Mandible</td></tr>
<tr><td>3</td><td>Thin cortex around dense trabecular bone</td><td>Anterior maxilla</td></tr>
<tr><td>4</td><td>Thin cortex around low-density trabecular bone</td><td>Posterior maxilla</td></tr></table></div>
<p>Soft bone: under-prepare the osteotomy, use tapered implants/osteotomes. Dense bone: tap the osteotomy to avoid compression necrosis.</p>
<h3>Peri-implant soft tissues</h3>
<ul>
<li>Supracrestal tissue attachment (formerly "biological width") of ~3–4 mm: junctional epithelium (~2 mm) and connective tissue (~1–1.5 mm).</li>
<li>Collagen fibres run parallel/circumferential to the implant — no inserting Sharpey's fibres — and the tissue is less vascular (no PDL plexus). Inflammation spreads more readily to bone than around teeth.</li>
<li>A band of keratinised mucosa (≥2 mm) helps comfort and plaque control.</li>
<li>Initial crestal bone remodelling (~1–1.5 mm in the first year with older designs) re-establishes the soft tissue seal; platform switching and conical connections reduce it.</li>
</ul>
<h3>Materials and surfaces</h3>
<ul>
<li><b>Commercially pure titanium</b> (grade 4 commonly) and <b>Ti-6Al-4V</b> (grade 5); titanium–zirconium alloy (higher strength for narrow implants); <b>zirconia</b> (ceramic — aesthetic, low plaque affinity, more brittle; often one-piece).</li>
<li>Surfaces: machined (smooth, original Brånemark); <b>moderately rough</b> (Sa ~1–2 µm — sandblasted acid-etched, anodised, hydrophilic modifications) — faster, stronger integration; very rough surfaces associated with more peri-implantitis.</li>
<li>Connections: external hex, internal hex, conical (Morse taper — better seal, less micromovement). Tissue-level vs bone-level designs.</li>
</ul>
<h3>Success criteria (Albrektsson et al. 1986)</h3>
<ul>
<li>Implant immobile when tested clinically</li>
<li>No peri-implant radiolucency</li>
<li>Vertical bone loss &lt;0.2 mm per year after the first year of loading</li>
<li>No persistent pain, infection, neuropathy, paraesthesia or violation of the mandibular canal</li>
<li>Success rates of at least 85% at 5 years and 80% at 10 years</li>
</ul>
<p>Survival (implant still present) differs from success (meeting health criteria). Modern single-implant survival is ~95% at 10 years.</p>`
    },
    {
      id: 'd7-assess', title: 'Patient selection, aesthetic risk and planning', code: '7.2',
      syllabus: [
        'Assess suitability for implants including risk–benefit analysis and dental, social or medical contraindications',
        'Determine an aesthetic risk assessment',
        'Implant planning including CBCT and planning software',
        'Image and interpret imaging for implant therapy',
        'Recognise peri-implant mucositis and peri-implantitis'
      ],
      notes: `
<h3>Patient factors</h3>
<div class="tbl"><table><tr><th>Factor</th><th>Implication</th></tr>
<tr><td>Smoking</td><td>Roughly doubles failure risk and raises peri-implantitis and graft complication risk — cessation advice, may be a contraindication for grafting</td></tr>
<tr><td>Periodontitis history</td><td>Strong risk factor for peri-implantitis — treat and stabilise first; commit to maintenance</td></tr>
<tr><td>Diabetes</td><td>Well-controlled is acceptable; poorly controlled → higher failure/infection</td></tr>
<tr><td>Antiresorptives</td><td>Oral bisphosphonates for osteoporosis: low risk with consent. IV antiresorptives for cancer: implants generally contraindicated (MRONJ)</td></tr>
<tr><td>Head and neck radiotherapy</td><td>Higher failure and ORN risk, especially &gt;50–60 Gy; specialist planning (NHS-commissioned rehabilitation pathways)</td></tr>
<tr><td>Immunosuppression, bleeding disorders, uncontrolled systemic disease</td><td>Medical liaison; may be relative/absolute contraindications</td></tr>
<tr><td>Bruxism</td><td>Mechanical complications — protect with night guard, design accordingly</td></tr>
<tr><td>Growth</td><td>Wait until growth has finished (serial cephalograms/height), especially for anterior maxilla — otherwise implant ends up infraoccluded</td></tr>
<tr><td>Psychological/social</td><td>Unrealistic expectations, body dysmorphic disorder, poor compliance, cost</td></tr>
<tr><td>Medications</td><td>SSRIs and PPIs associated with higher failure in some studies; anticoagulants (bleeding planning)</td></tr></table></div>
<p>Always discuss alternatives: no replacement, removable partial denture, bridge, orthodontic space closure, autotransplantation.</p>
<h3>Local factors</h3>
<ul>
<li>Bone width (aim for ≥1.5–2 mm bone around the implant — ~6–7 mm width for a 4 mm implant), height (to IAN with ~2 mm safety margin, to sinus floor, nasal floor).</li>
<li>Mesiodistal space (~≥7 mm for a standard single implant; ~5.5–6 mm for narrow), interarch space for the restoration.</li>
<li>Soft tissue phenotype (thin vs thick — probe visibility), keratinised mucosa width, smile line.</li>
<li>Adjacent teeth: bone levels, periodontal and endodontic status, restorations.</li>
<li>Occlusion and parafunction.</li>
</ul>
<h3>ITI Esthetic Risk Assessment (ERA)</h3>
<p>Each factor graded low/moderate/high risk:</p>
<ul>
<li>Medical status; smoking; patient's aesthetic expectations</li>
<li>Lip line (high smile = high risk)</li>
<li>Gingival phenotype (thin, scalloped = high risk)</li>
<li>Shape of tooth crowns (triangular = high risk — black triangles)</li>
<li>Infection at the implant site</li>
<li>Bone level at adjacent teeth (≤5 mm from contact point favourable)</li>
<li>Restorative status of neighbouring teeth</li>
<li>Width of edentulous span (single tooth ≥7 mm low risk; multiple teeth high risk)</li>
<li>Soft tissue anatomy; bone anatomy of the alveolar crest (horizontal/vertical deficiency = high risk)</li>
</ul>
<h3>Imaging and planning</h3>
<ul>
<li>Periapical and DPT for initial assessment (DPT magnification and distortion — not for final measurements).</li>
<li><b>CBCT</b>: bone volume and morphology, vital structures, sinus health, 3D planning. Use a radiographic guide or digital wax-up.</li>
<li>Planning software merges CBCT (DICOM) with intraoral/model scans (STL) for <b>prosthetically driven virtual planning</b> and surgical guide fabrication.</li>
<li>Baseline radiograph at prosthesis delivery for future bone-level comparison.</li>
</ul>
<h3>Recognising peri-implant disease</h3>
<p>Probe with light force; look for bleeding on probing, suppuration, increasing probing depths, recession, and radiographic bone loss beyond initial remodelling compared with baseline. Full criteria in the complications topic.</p>`
    },
    {
      id: 'd7-types', title: 'Implant types and guided surgery', code: '7.3',
      syllabus: [
        'Types of dental implants, indications and limitations: endosteal, periosteal, zygomatic',
        'Benefits of guided implant surgery and awareness of dynamic navigation, including indications and risks'
      ],
      notes: `
<h3>Implant types</h3>
<div class="tbl"><table><tr><th>Type</th><th>Description</th><th>Indications / limitations</th></tr>
<tr><td>Endosteal (root-form)</td><td>Threaded screw-type, cylindrical or tapered; standard, narrow (&lt;3.5 mm), short (≤6 mm), mini (overdentures)</td><td>Most cases. Short implants avoid augmentation in atrophic posterior jaws; narrow implants for limited space (fracture risk in molar regions)</td></tr>
<tr><td>Subperiosteal</td><td>Custom framework resting on bone beneath the periosteum, posts through mucosa</td><td>Historically poor outcomes; revived with CAD/CAM 3D-printed titanium frameworks for severely atrophic jaws where grafting isn't feasible. Risks: exposure, infection</td></tr>
<tr><td>Zygomatic</td><td>Long implants (≈30–52.5 mm) from the alveolar crest/palate to the zygoma</td><td>Severely atrophic maxilla, after maxillectomy — avoids grafting, allows immediate loading. Usually two zygomatic + anterior conventional implants, or quad zygoma. Complications: sinusitis (commonest), oro-antral fistula, orbital injury, infraorbital paraesthesia, soft tissue dehiscence. Specialist only</td></tr>
<tr><td>Pterygoid</td><td>Angled implants into the pterygoid plates/tuberosity</td><td>Posterior atrophic maxilla; specialist</td></tr>
<tr><td>Transosteal (historical)</td><td>Through the whole mandible (staple)</td><td>Largely abandoned</td></tr></table></div>
<h3>Guided surgery</h3>
<div class="tbl"><table><tr><th>Approach</th><th>How it works</th><th>Pros</th><th>Cons</th></tr>
<tr><td>Static guide</td><td>CAD/CAM surgical guide from the virtual plan; tooth-, mucosa- or bone-supported; pilot-only, partially or fully guided</td><td>Accurate prosthetically driven position, flapless option, less invasive, shorter surgery, prefabricated provisional possible</td><td>Cost, needs mouth opening, reduced irrigation (heat), guide fit/planning errors, can't adapt during surgery. Typical deviations ~1 mm at entry, ~1.5 mm at apex, a few degrees angular</td></tr>
<tr><td>Dynamic navigation</td><td>Real-time optical tracking of the handpiece relative to the CBCT plan, displayed on screen</td><td>Accuracy similar to static, allows intraoperative changes, good irrigation and access, no guide needed</td><td>Equipment cost, learning curve, calibration, line-of-sight; still depends on plan accuracy</td></tr>
<tr><td>Robotic</td><td>Haptic robotic arm constrains the drill to the plan</td><td>Accuracy, adaptability</td><td>Cost, availability</td></tr></table></div>
<p>Indications for guided surgery: proximity to vital structures, aesthetic zone, multiple implants, flapless or immediate protocols, full-arch immediate loading. Freehand surgery remains acceptable for straightforward cases with good access and bone.</p>`
    },
    {
      id: 'd7-biomaterials', title: 'Membranes and graft materials', code: '7.3',
      syllabus: [
        'Biomaterials for tissue regeneration/augmentation: guided tissue regeneration with membranes; xenograft, alloplast and allograft materials for hard and soft tissue grafting; advantages and disadvantages'
      ],
      notes: `
<h3>Graft properties</h3>
<ul>
<li><b>Osteogenesis</b>: living bone-forming cells in the graft (autograft only).</li>
<li><b>Osteoinduction</b>: stimulates mesenchymal cells to become osteoblasts (BMPs) — autograft, demineralised allograft (weak).</li>
<li><b>Osteoconduction</b>: scaffold for bone ingrowth — all graft types.</li>
</ul>
<div class="tbl"><table><tr><th>Material</th><th>Source</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Autograft</td><td>Patient — intraoral (ramus, symphysis, tuberosity, local chips) or extraoral (iliac crest, calvarium, tibia)</td><td>Gold standard: osteogenic, osteoinductive, osteoconductive; no disease transmission</td><td>Donor site morbidity, limited volume (intraoral), resorption</td></tr>
<tr><td>Allograft</td><td>Human donor bone (tissue bank): fresh-frozen, freeze-dried (FDBA), demineralised (DFDBA)</td><td>Unlimited supply, no donor site; DFDBA may be weakly osteoinductive</td><td>Very small disease transmission risk, variable quality, cost, ethical/religious objections</td></tr>
<tr><td>Xenograft</td><td>Animal — deproteinised bovine bone mineral, porcine, equine</td><td>Osteoconductive, very slow resorption → volume/contour stability (sinus grafts, contour augmentation)</td><td>No osteoinduction; slow replacement by bone; religious/cultural concerns (bovine, porcine); theoretical prion risk</td></tr>
<tr><td>Alloplast</td><td>Synthetic — β-tricalcium phosphate (resorbs quickly), hydroxyapatite (slow), biphasic calcium phosphate, bioactive glass, calcium sulphate</td><td>No disease risk, unlimited, acceptable to all patients</td><td>Osteoconductive only; resorption unpredictable (too fast or too slow)</td></tr></table></div>
<p>Autograft is often mixed 1:1 with xenograft for GBR, combining biological activity with volume stability. Biologics: enamel matrix derivative, rhBMP-2, platelet concentrates (PRF/PRP).</p>
<h3>Barrier membranes (guided bone/tissue regeneration)</h3>
<p>Principle (cell exclusion): the membrane keeps fast-growing epithelium and connective tissue out of the defect so slower osteogenic cells can fill it. <b>PASS principles</b>: Primary wound closure, Angiogenesis, Space maintenance, Stability of the clot/graft.</p>
<div class="tbl"><table><tr><th>Type</th><th>Examples</th><th>Pros</th><th>Cons</th></tr>
<tr><td>Resorbable</td><td>Native or cross-linked collagen (porcine/bovine), synthetic polymers (PLA/PGA)</td><td>No removal surgery, good soft tissue integration, fewer complications if exposed (native collagen)</td><td>Limited space maintenance (needs graft support), unpredictable resorption time; cross-linked types have more exposure problems</td></tr>
<tr><td>Non-resorbable</td><td>e-PTFE, dense PTFE (d-PTFE), titanium-reinforced PTFE, titanium mesh</td><td>Excellent space maintenance — vertical and large horizontal defects</td><td>Second surgery to remove, higher complication rate if exposed (infection, graft loss); technique-sensitive</td></tr></table></div>
<h3>Soft tissue substitutes</h3>
<p>Xenogeneic collagen matrices (to increase keratinised tissue or soft tissue thickness), acellular dermal matrix (allogeneic), volume-stable collagen matrices. Avoid a palatal donor site but are generally less predictable than autogenous connective tissue grafts.</p>`
    },
    {
      id: 'd7-placement', title: 'Positioning, placement and loading protocols', code: '7.5',
      syllabus: [
        'Aseptic surgical technique in implant therapy',
        'Soft tissue surgery and techniques to optimise aesthetic healing',
        'Informed consent and communication of potential complications',
        'Correct prosthetically driven 3D positioning',
        'Different placement protocols and their indications (types I–IV)'
      ],
      notes: `
<h3>Asepsis</h3>
<p>Surgical hand scrub, sterile gown and gloves, sterile drapes, sterile saline irrigation, no-touch handling of implants and components, pre-operative chlorhexidine rinse, perioral skin preparation, minimal traffic. Floss-tie small drivers to prevent inhalation.</p>
<h3>3D positioning — "prosthetically driven"</h3>
<div class="tbl"><table><tr><th>Dimension</th><th>Guideline</th></tr>
<tr><td>Mesiodistal</td><td>≥1.5 mm from adjacent teeth; ≥3 mm between adjacent implants (Tarnow — less leads to inter-implant bone loss and papilla loss)</td></tr>
<tr><td>Orofacial</td><td>Implant shoulder slightly palatal to the planned emergence point; aim for ≥2 mm of buccal bone after placement to resist resorption and recession</td></tr>
<tr><td>Coronoapical</td><td>Bone-level implant shoulder ~3–4 mm apical to the planned mucosal margin (about 1 mm below the CEJ of adjacent teeth with no recession); too shallow → metal show; too deep → bone loss, deep pockets</td></tr>
<tr><td>Angulation</td><td>Screw access through the cingulum/central fossa for screw-retained restorations; avoid labial angulation</td></tr></table></div>
<p><b>Tarnow papilla rules</b>: between teeth, papilla almost always present when contact point to bone crest is ≤5 mm; between two implants, average papilla height is only ~3–4 mm — avoid adjacent implants in the aesthetic zone where possible (consider a cantilever/pontic).</p>
<h3>Placement protocols (ITI)</h3>
<div class="tbl"><table><tr><th>Type</th><th>Timing after extraction</th><th>Indications and notes</th></tr>
<tr><td>Type 1 — immediate</td><td>Same day</td><td>Intact thick buccal wall, thick phenotype, no acute infection, bone apical/palatal for primary stability. Fill gap &gt;2 mm with slowly resorbing graft; consider CTG. Higher recession risk if criteria not met</td></tr>
<tr><td>Type 2 — early, soft tissue healing</td><td>4–8 weeks</td><td>Gain keratinised tissue, resolve infection; buccal wall often still allows simultaneous contour augmentation. Common in aesthetic zone</td></tr>
<tr><td>Type 3 — early, partial bone healing</td><td>12–16 weeks</td><td>Larger periapical lesions; need bone fill for primary stability</td></tr>
<tr><td>Type 4 — late</td><td>≥6 months</td><td>Healed ridge, after ridge preservation, growing patients, large defects</td></tr></table></div>
<h3>Loading protocols</h3>
<ul>
<li><b>Immediate</b>: within 1 week — needs good primary stability (e.g. insertion torque ≥ ~30–35 Ncm, ISQ ≥ ~60–70), controlled occlusion; full-arch cross-arch splinting (e.g. "All-on-4" with tilted posterior implants avoiding the sinus/mental foramina).</li>
<li><b>Early</b>: 1 week to 2 months.</li>
<li><b>Conventional</b>: more than 2 months.</li>
<li>Submerged (two-stage, cover screw, uncovery later) vs non-submerged (one-stage, healing abutment).</li>
</ul>
<h3>Surgical technique essentials</h3>
<ul>
<li>Flap: crestal (slightly palatal to move keratinised tissue buccally) ± sulcular; papilla-sparing; avoid vertical releases in the aesthetic zone where possible. Flapless only with adequate bone and keratinised tissue (guided).</li>
<li>Sequential drilling with irrigation (avoid &gt;47 °C), adapt to bone density, check direction with paralleling pins/radiographs.</li>
<li>Assess primary stability; decide healing protocol.</li>
<li>Tension-free closure; consider simultaneous GBR for dehiscence/fenestration.</li>
</ul>
<h3>Soft tissue management for aesthetics</h3>
<ul>
<li>Connective tissue grafts to thicken a thin phenotype (more stable margins, mask grey abutment); free gingival grafts to increase keratinised mucosa.</li>
<li>Roll flap at uncovery to add buccal volume; provisional restorations to sculpt the emergence profile before the definitive crown.</li>
<li>Zirconia abutments reduce grey show-through in thin tissue.</li>
</ul>
<h3>Consent</h3>
<p>Cover: alternatives (including no treatment), stages and timeline, cost, success/survival rates, risks — pain, swelling, bruising, bleeding, infection, failure to integrate (early failure a few per cent), altered sensation (lip, chin, tongue), sinus involvement, damage to adjacent teeth, need for grafting/further surgery, aesthetic issues (recession, grey show-through, black triangles), mechanical complications, peri-implantitis, effect of smoking, and the need for lifelong maintenance. Give the patient an implant record (system, diameter, length, lot number).</p>`
    },
    {
      id: 'd7-augmentation', title: 'Ridge preservation and hard and soft tissue augmentation', code: '7.5',
      syllabus: [
        'Alveolar ridge preservation/socket grafting: indications and risks',
        'Horizontal and vertical ridge augmentation: block grafting and guided bone regeneration',
        'Sinus augmentation: lateral window and transcrestal',
        'Soft tissue augmentation',
        'Donor sites and their benefits and risks: mandibular ramus, mandibular symphysis, palatal free gingival and connective tissue grafts'
      ],
      notes: `
<h3>Ridge preservation</h3>
<p>See Domain 1. Atraumatic extraction preserving the buccal plate, fill with a slowly resorbing graft, seal with collagen membrane/plug or soft tissue graft. Reduces horizontal loss (~1.5–2 mm benefit) and the need for later augmentation. Risks: infection, graft exposure, delayed implant placement, cost.</p>
<h3>Classifying ridge defects</h3>
<ul>
<li><b>Seibert</b>: class I horizontal, class II vertical, class III combined.</li>
<li><b>Cawood &amp; Howell</b> (edentulous jaws): I dentate, II immediately post-extraction, III rounded ridge with adequate height and width, IV knife-edge (adequate height, inadequate width), V flat (inadequate height and width), VI depressed with basal bone loss.</li>
</ul>
<h3>Horizontal augmentation</h3>
<ul>
<li><b>GBR</b> with particulate graft (often autograft + xenograft) and membrane — simultaneous with the implant if primary stability is achievable and the implant sits within the bony envelope, otherwise staged.</li>
<li><b>Ridge split/expansion</b>: narrow ridges (~3–4 mm) with a cancellous core; piezosurgery; risk of buccal plate fracture.</li>
<li><b>Onlay block grafts</b> (autogenous ramus or symphysis, or allogeneic): fixed with screws, covered with xenograft and membrane to reduce resorption; implant placement after ~4–6 months. "Shell technique" (thin cortical plates as walls, filled with particulate).</li>
</ul>
<h3>Vertical augmentation</h3>
<ul>
<li>Technically demanding with higher complication rates: vertical GBR with titanium-reinforced d-PTFE or titanium mesh, onlay block grafts, interpositional (sandwich) osteotomy, distraction osteogenesis.</li>
<li>Main complication: <b>wound dehiscence and membrane exposure</b> → infection and graft loss. Needs tension-free closure (periosteal releasing incisions).</li>
<li><b>Short implants</b> (≤6 mm) are a well-supported alternative in posterior jaws with fewer complications.</li>
</ul>
<h3>Sinus augmentation</h3>
<div class="tbl"><table><tr><th></th><th>Lateral window</th><th>Transcrestal (osteotome/hydraulic)</th></tr>
<tr><td>Residual bone height</td><td>Low (≤ ~4–5 mm)</td><td>Higher (≥ ~5–6 mm); gains ~3–4 mm</td></tr>
<tr><td>Technique</td><td>Window in the lateral wall (rotary or piezo), elevate the Schneiderian membrane, graft (often xenograft ± autograft), cover window with membrane; implant simultaneous (if primary stability) or staged (6–9 months)</td><td>Osteotomy to just below sinus floor, in-fracture floor with osteotomes (Summers), graft, place implant</td></tr>
<tr><td>Pros</td><td>Large gain, direct vision</td><td>Less invasive, less morbidity, faster</td></tr>
<tr><td>Cons / risks</td><td>Membrane perforation (most common), bleeding from the intraosseous posterior superior alveolar artery anastomosis, more swelling</td><td>Blind (perforation harder to detect), limited gain, benign paroxysmal positional vertigo from malleting</td></tr></table></div>
<p>Contraindications/considerations: acute or chronic sinusitis, polyps, ostial obstruction, heavy smoking, previous sinus surgery. Pre-existing sinus disease on CBCT → ENT assessment first. Complications: perforation (repair small tears with collagen membrane; abort large ones), sinusitis, graft infection/loss, OAF, implant displacement into the sinus. Alternatives: short or tilted implants, zygomatic implants.</p>
<h3>Soft tissue augmentation</h3>
<ul>
<li><b>Connective tissue graft</b> (subepithelial; envelope or tunnel): increases thickness/volume, converts thin to thick phenotype, covers recession.</li>
<li><b>Free gingival graft</b>: increases keratinised mucosa width; poorer colour match.</li>
<li>Soft tissue substitutes; vascularised pedicle flaps (roll flap, VIP-CT flap).</li>
</ul>
<h3>Donor sites</h3>
<div class="tbl"><table><tr><th>Site</th><th>Benefits</th><th>Risks</th></tr>
<tr><td>Mandibular ramus</td><td>Mainly cortical block (resorbs less), lower morbidity, no visible scar, good access in the same field for posterior sites</td><td>Limited volume, slow revascularisation, IAN injury, trismus, buccal nerve, rare fracture</td></tr>
<tr><td>Mandibular symphysis</td><td>Larger corticocancellous volume, easy access</td><td>Higher morbidity: altered sensation of chin and lower incisors (incisive nerve), damage to incisor roots (keep ~5 mm below apices and from mental foramina, preserve inferior border), chin ptosis, wound dehiscence, contour change</td></tr>
<tr><td>Palate (FGG/CTG)</td><td>Reliable autogenous soft tissue; CTG gives thickness and volume</td><td>Bleeding from greater palatine artery (bundle ~7–17 mm from the CEJ depending on vault depth — harvest between distal canine and mesial first molar), post-op pain (FGG heals by secondary intention), necrosis, numbness. Palatal stent helps</td></tr>
<tr><td>Tuberosity</td><td>Dense connective tissue, minimal pain</td><td>Limited size</td></tr>
<tr><td>Iliac crest (extraoral)</td><td>Large cancellous volume</td><td>Gait disturbance, pain, hospital stay — OMFS</td></tr></table></div>`
    },
    {
      id: 'd7-complications', title: 'Complications, peri-implant disease and maintenance', code: '7.4–7.6',
      syllabus: [
        'Recognise and manage complications of implant therapy and tissue regeneration',
        'Monitor implant success',
        'Manage peri-implant mucositis and peri-implantitis',
        'Medications for implant therapy: antimicrobials and analgesics, indications and complications',
        'Liaise with specialties for complex cases; plan, restore and maintain implants with colleagues; know when to refer'
      ],
      notes: `
<h3>Surgical complications</h3>
<div class="tbl"><table><tr><th>Complication</th><th>Prevention / management</th></tr>
<tr><td>Floor-of-mouth haemorrhage</td><td>Lingual cortical perforation (sublingual/submental arteries) in canine–premolar region — CBCT planning. Expanding haematoma threatens the airway: sit patient up, bimanual pressure, call 999/urgent hospital transfer for airway management</td></tr>
<tr><td>Nerve injury (IAN/mental/lingual)</td><td>2 mm safety margin, CBCT, drill stops. New numbness after placement: image, <b>remove or back out the implant urgently (ideally within ~30 hours)</b>, consider steroids, refer</td></tr>
<tr><td>Sinus perforation / implant displacement</td><td>Careful planning; retrieve displaced implants (lateral window/FESS)</td></tr>
<tr><td>Damage to adjacent teeth</td><td>Planning, guides, paralleling radiographs</td></tr>
<tr><td>Lack of primary stability</td><td>Wider/longer implant, submerged healing, or abort and graft</td></tr>
<tr><td>Fracture of atrophic mandible, swallowed/inhaled components</td><td>Careful case selection; floss-tie drivers; manage as Domain 8</td></tr></table></div>
<h3>Failure</h3>
<ul>
<li><b>Early failure</b> (before/at loading — failure to osseointegrate): infection, overheating, micromotion, poor primary stability, smoking, poor bone.</li>
<li><b>Late failure</b> (after loading): peri-implantitis, occlusal overload, implant fracture.</li>
<li>Mobility of an implant means failure — remove, allow healing (± graft), replan.</li>
</ul>
<h3>Mechanical and aesthetic complications</h3>
<p>Screw loosening (commonest technical complication), abutment/screw/implant fracture (narrow implants, bruxism), veneer chipping, loss of retention, residual cement (cause of peri-implantitis — prefer screw-retained restorations). Aesthetic: malposition, recession, grey show-through, papilla loss, infraocclusion with continued facial growth.</p>
<h3>Graft complications</h3>
<p>Wound dehiscence/membrane exposure (most common), infection, graft resorption or failure, donor site morbidity, sinusitis.</p>
<h3>Peri-implant diseases (2017 World Workshop)</h3>
<div class="tbl"><table><tr><th>Condition</th><th>Definition</th></tr>
<tr><td>Peri-implant health</td><td>No erythema, bleeding on probing, swelling or suppuration; no bone loss beyond initial remodelling</td></tr>
<tr><td>Peri-implant mucositis</td><td>BOP and/or suppuration ± erythema, swelling, increased probing depth; <b>no bone loss</b> beyond initial remodelling; reversible with plaque control</td></tr>
<tr><td>Peri-implantitis</td><td>Plaque-associated inflammation of the peri-implant mucosa with <b>progressive loss of supporting bone</b>. With baseline: BOP/suppuration, increased PD and bone loss beyond initial remodelling. Without baseline: BOP/suppuration + PD ≥6 mm + bone level ≥3 mm apical to the most coronal intraosseous part of the implant</td></tr></table></div>
<p>Prevalence (approximate): mucositis ~40% of patients; peri-implantitis ~20%. Risk factors: history of periodontitis, poor plaque control, lack of regular maintenance (strong evidence); smoking, diabetes, residual cement, prostheses that block cleaning, lack of keratinised mucosa.</p>
<h3>Treatment</h3>
<ul>
<li><b>Mucositis</b>: oral hygiene instruction, professional mechanical debridement (plastic/titanium curettes, ultrasonic with PEEK tips, glycine/erythritol air-polishing), modify the prosthesis for cleansability; antiseptics add little.</li>
<li><b>Peri-implantitis</b> (staged, EFP S3 guideline 2023): non-surgical debridement first → reassess → surgical access with surface decontamination (mechanical, chemical, air-abrasion, laser): <b>resective</b> (apically positioned flap, osteoplasty, <b>implantoplasty</b> — smoothing exposed threads; risk of fracture/titanium particles) or <b>reconstructive</b> (contained defects — bone substitute ± membrane); adjunctive systemic antibiotics have limited evidence; <b>explantation</b> for advanced bone loss or mobility.</li>
<li><b>CIST</b> (Lang): A — mechanical debridement; B — antiseptic; C — antibiotics; D — regenerative/resective surgery; E — explantation; escalated by PD, BOP, suppuration and bone loss.</li>
</ul>
<h3>Monitoring success and maintenance</h3>
<ul>
<li>Baseline radiograph at prosthesis delivery; radiograph at 1 year; then when clinically indicated.</li>
<li>Recall every 3–6 months based on risk: plaque, BOP, PD (light force), suppuration, mobility, recession, prosthesis integrity, occlusion, patient-reported outcomes.</li>
<li>Professional cleaning and reinforcement of home care (interdental brushes, water flossers).</li>
</ul>
<h3>Medications</h3>
<div class="box dose"><b>Antimicrobials and analgesia</b><ul><li>Pre-operative <b>amoxicillin 2 g (or 3 g) orally 1 hour before</b> placement reduces early implant failure (Cochrane, Esposito); routine post-operative antibiotics are not well supported (may be used with grafting/sinus augmentation per protocol)</li><li>Penicillin allergy: clindamycin 600 mg (associated with higher failure in some studies) or a macrolide</li><li>Chlorhexidine 0.2% rinse pre-op and for ~2 weeks post-op</li><li>Analgesia: paracetamol + ibuprofen regularly for 2–3 days; long-acting LA (bupivacaine); dexamethasone for extensive grafting</li><li>Risks: allergy/anaphylaxis, GI upset, <i>C. difficile</i>, resistance, interactions (e.g. warfarin)</li></ul></div>
<h3>Multidisciplinary care</h3>
<ul>
<li>Restorative dentist/prosthodontist (planning, restoration, maintenance), periodontist (disease control, soft tissue), orthodontist (space creation, timing after growth in hypodontia), dental technician, radiologist, OMFS (zygomatic implants, iliac crest grafts, cancer reconstruction), GDP for maintenance.</li>
<li>NHS-commissioned implant care is limited mainly to hypodontia, trauma, cleft, head and neck cancer and severe atrophy — usually via restorative dentistry MDTs.</li>
<li>Refer complex cases (SAC complex): high aesthetic risk, vertical augmentation, zygomatic implants, irradiated patients, medically complex patients.</li>
</ul>`
    }
  ],
  cards: [
    ['Definition of osseointegration (Brånemark)?', 'A direct structural and functional connection between ordered living bone and the surface of a load-carrying implant.'],
    ['Albrektsson\'s six factors for osseointegration?', 'Material biocompatibility, implant design, surface, host bed, surgical technique, loading conditions.'],
    ['Temperature threshold for bone necrosis during drilling?', '47 °C for 1 minute.'],
    ['What is the "stability dip"?', 'Fall in primary (mechanical) stability at ~2–4 weeks before secondary (biological) stability increases.'],
    ['Lekholm &amp; Zarb type 4 bone?', 'Thin cortex around low-density trabecular bone — posterior maxilla.'],
    ['Why is peri-implant tissue more vulnerable than periodontium?', 'Parallel collagen fibres without Sharpey\'s fibre insertion and reduced vascularity (no PDL plexus).'],
    ['Albrektsson success criterion for annual bone loss after year 1?', 'Less than 0.2 mm per year.'],
    ['Three categories of the ITI SAC classification?', 'Straightforward, Advanced, Complex.'],
    ['ERA factors that indicate high aesthetic risk?', 'High smile line, thin scalloped phenotype, triangular crowns, high expectations, smoking, multi-tooth gaps, bone deficiency.'],
    ['Distance from contact point to bone crest for papilla presence (Tarnow)?', '≤5 mm between teeth.'],
    ['Minimum distance implant–tooth and implant–implant?', '1.5 mm to a tooth; 3 mm between implants.'],
    ['Buccal bone thickness to aim for after placement?', 'About 2 mm.'],
    ['ITI placement types and timing?', 'Type 1 immediate; Type 2 at 4–8 weeks; Type 3 at 12–16 weeks; Type 4 ≥6 months.'],
    ['Loading protocol definitions?', 'Immediate &lt;1 week; early 1 week–2 months; conventional &gt;2 months.'],
    ['Criteria for type 1 immediate placement in the aesthetic zone?', 'Intact thick buccal wall, thick phenotype, no acute infection, enough bone for primary stability, experienced clinician.'],
    ['Indications for zygomatic implants and commonest complication?', 'Severely atrophic or resected maxilla; sinusitis.'],
    ['Static guide vs dynamic navigation?', 'Static uses a printed guide from the plan; dynamic tracks the handpiece in real time against the CBCT plan, allowing intraoperative changes.'],
    ['Graft property only autograft has?', 'Osteogenesis (living cells).'],
    ['Why use deproteinised bovine bone in sinus/contour grafts?', 'Very slow resorption gives volume stability.'],
    ['PASS principles of GBR?', 'Primary closure, Angiogenesis, Space maintenance, Stability.'],
    ['Resorbable vs non-resorbable membranes — main trade-off?', 'Resorbable: no second surgery, fewer exposure problems, less space maintenance. Non-resorbable: better space maintenance, needs removal, worse if exposed.'],
    ['Residual bone height for lateral window vs transcrestal sinus lift?', 'Lateral ≤ ~4–5 mm; transcrestal ≥ ~5–6 mm (gain ~3–4 mm).'],
    ['Commonest complication of sinus augmentation?', 'Schneiderian membrane perforation.'],
    ['Artery at risk in the lateral sinus wall?', 'Intraosseous anastomosis of the posterior superior alveolar artery.'],
    ['Vertigo after osteotome sinus lift?', 'Benign paroxysmal positional vertigo from malleting.'],
    ['Ramus vs symphysis graft — key difference?', 'Ramus: cortical, less morbidity, less volume. Symphysis: more corticocancellous volume, more morbidity (chin/incisor numbness).'],
    ['Safe area for palatal graft harvest?', 'Between distal canine and mesial first molar, avoiding the greater palatine bundle (~7–17 mm from CEJ).'],
    ['Floor-of-mouth haematoma after implant placement — cause and action?', 'Lingual perforation injuring sublingual/submental arteries; airway emergency — sit up, pressure, urgent hospital transfer.'],
    ['New numbness after lower implant placement?', 'Image and remove/back out the implant urgently, ideally within ~30 hours.'],
    ['Peri-implant mucositis vs peri-implantitis?', 'Both have BOP/suppuration; peri-implantitis also has progressive bone loss.'],
    ['Peri-implantitis case definition without baseline?', 'BOP/suppuration + PD ≥6 mm + bone level ≥3 mm apical to the coronal intraosseous implant.'],
    ['Strongest risk factors for peri-implantitis?', 'History of periodontitis, poor plaque control, no regular maintenance.'],
    ['What is implantoplasty?', 'Smoothing and polishing exposed implant threads during resective surgery for peri-implantitis.'],
    ['Antibiotic regimen shown to reduce early implant failure?', 'Amoxicillin 2 g (or 3 g) orally 1 hour before surgery.'],
    ['Commonest technical complication of implant restorations?', 'Screw loosening.']
  ],
  mcqs: [
    { q: 'A 45-year-old wants an implant to replace a lower first molar. Bone height above the IAN canal is 9 mm. What is the maximum safe implant length if you keep the recommended safety margin?', o: ['11 mm', '10 mm', '9 mm', 'About 7 mm', '5 mm'], a: 3, e: 'Keep about 2 mm above the IAN canal — so roughly a 7 mm implant here (short implants are a good option).' },
    { q: 'A patient wants an immediate implant in the upper central incisor site. CBCT shows a 0.5 mm buccal wall and the patient has a thin, scalloped phenotype and high smile line. What is the most appropriate approach?', o: ['Type 1 immediate placement and immediate loading', 'Extraction with ridge preservation or type 2 early placement with contour augmentation', 'Leave the root and place an implant beside it', 'Zygomatic implant', 'Type 1 placement without grafting'], a: 1, e: 'A thin buccal wall, thin phenotype and high smile line are high-risk for recession with immediate placement. Ridge preservation or early (type 2) placement with GBR/soft tissue grafting is safer.' },
    { q: 'An implant shows bleeding on probing, suppuration, 7 mm probing depth and 4 mm radiographic bone loss compared with the baseline radiograph at crown fitting. What is the diagnosis?', o: ['Peri-implant health', 'Peri-implant mucositis', 'Peri-implantitis', 'Retrograde peri-implantitis', 'Implant failure'], a: 2, e: 'Inflammation with progressive bone loss beyond initial remodelling, compared with baseline, is peri-implantitis.' },
    { q: 'Residual bone height below the sinus is 3 mm in the upper first molar region. Which approach is most appropriate if augmentation is chosen?', o: ['Transcrestal osteotome technique with simultaneous 10 mm implant', 'Lateral window sinus augmentation, usually staged', 'Immediate placement', 'Onlay block graft to the palate', 'No augmentation — place a 10 mm implant'], a: 1, e: 'With very low residual height, lateral window augmentation (often staged because primary stability is unlikely) is indicated. Transcrestal lifts suit higher residual heights.' },
    { q: 'Which graft material provides osteogenesis, osteoinduction and osteoconduction?', o: ['Deproteinised bovine bone', 'β-tricalcium phosphate', 'Autogenous bone', 'Freeze-dried allograft', 'Hydroxyapatite'], a: 2, e: 'Only autogenous bone contains living osteogenic cells as well as inductive proteins and a scaffold.' },
    { q: 'During implant placement in the lower canine region, the floor of the mouth rapidly swells and the patient becomes distressed with noisy breathing. What is the priority?', o: ['Complete implant placement quickly', 'Airway: sit up, apply bimanual pressure, call for emergency help and transfer to hospital', 'Give IM adrenaline 500 µg', 'Give flumazenil', 'Take a CBCT'], a: 1, e: 'Lingual perforation can injure the sublingual/submental arteries, causing an expanding haematoma that threatens the airway — an emergency needing airway support and transfer.' },
    { q: 'What does the Cochrane evidence support regarding antibiotics for implant placement?', o: ['A 7-day post-operative course for all patients', 'A single pre-operative dose of 2–3 g amoxicillin reduces early failures', 'No antibiotics ever', 'Clindamycin is superior to amoxicillin', 'Metronidazole alone pre-operatively'], a: 1, e: 'A single pre-operative dose of 2–3 g amoxicillin about 1 hour before surgery reduces early implant failures; routine post-operative courses are not well supported.' },
    { q: 'Which is the main drawback of mandibular symphysis bone harvest compared with ramus harvest?', o: ['Smaller graft volume', 'Higher risk of altered sensation of the chin and lower incisors', 'Purely cortical graft', 'Higher risk of trismus', 'Requires extraoral access'], a: 1, e: 'Symphysis grafts give more volume but carry more morbidity, including altered sensation of the chin and incisors, root damage and soft tissue changes.' }
  ]
});
