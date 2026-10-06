window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd6', num: '6', order: 6,
  title: 'Hard tissue lesions of the jaws',
  summary: 'Cysts, odontogenic tumours, fibro-osseous and giant cell lesions, MRONJ, osteoradionecrosis, osteomyelitis and malignant bone disease — recognition, investigation, medical and surgical management and follow-up.',
  topics: [
    {
      id: 'd6-assess', title: 'Guidelines, radiological description and investigations', code: '6.1–6.2',
      syllabus: [
        'WHO Classification of Head and Neck Tumours, 5th edition (2022)',
        'AAOMS Position Paper on MRONJ (2022)',
        'Pathogenesis and clinical, radiological and histopathological features of malignant and benign bone pathology, fibro-osseous and giant cell lesions, and osteonecrosis',
        'Principles, indications and interpretation of microbiological, haematological, cytological, histological and radiological investigations of the jaws'
      ],
      notes: `
<h3>Describing a jaw lesion on a radiograph</h3>
<ol>
<li><b>Site and size</b>: maxilla/mandible, region, relation to teeth (periapical, pericoronal, interradicular), mm.</li>
<li><b>Shape and locularity</b>: unilocular, multilocular ("soap bubble", "honeycomb", "tennis racket"), scalloped.</li>
<li><b>Margins</b>: well-defined corticated (slow, benign) vs well-defined non-corticated vs ill-defined/"moth-eaten"/permeative (infection, malignancy) vs blending (fibrous dysplasia).</li>
<li><b>Internal structure</b>: radiolucent, mixed, radiopaque; calcifications ("driven snow", "snowflakes", ground glass).</li>
<li><b>Effect on surroundings</b>: tooth displacement, root resorption (smooth/knife-edge in benign; spiky in malignant), expansion and cortical thinning, perforation, displacement of the IAN canal or sinus floor, periosteal reaction (onion-skin, sunray).</li>
<li><b>Number</b>: single or multiple (Gorlin, myeloma, metastases, COD).</li>
</ol>
<h3>Investigations</h3>
<div class="tbl"><table><tr><th>Investigation</th><th>Use</th></tr>
<tr><td>Vitality testing</td><td>Radicular cyst (non-vital) vs lateral periodontal cyst, NPDC, COD, simple bone cyst (vital)</td></tr>
<tr><td>Aspiration</td><td>Before surgery on a radiolucency: straw-coloured fluid with cholesterol (cyst); creamy keratin with low soluble protein (OKC); blood (vascular lesion — stop; or aneurysmal bone cyst); empty (simple bone cyst); air (sinus)</td></tr>
<tr><td>DPT, intraoral views, occlusals</td><td>Initial assessment</td></tr>
<tr><td>CBCT / CT</td><td>3D extent, cortical perforation, relation to IAN/sinus/roots, surgical planning</td></tr>
<tr><td>MRI</td><td>Soft tissue extension, marrow involvement (osteomyelitis, tumour), cystic vs solid content</td></tr>
<tr><td>Bone scintigraphy / PET-CT</td><td>Metastases, polyostotic disease, active condylar hyperplasia, staging</td></tr>
<tr><td>Bloods</td><td>Calcium, phosphate, ALP, PTH, vitamin D (giant cell lesions, brown tumour); FBC, ESR/CRP (infection, myeloma); serum protein electrophoresis and light chains (myeloma)</td></tr>
<tr><td>Microbiology</td><td>Pus and bone culture (osteomyelitis — include anaerobes, actinomyces)</td></tr>
<tr><td>Histopathology</td><td>Incisional biopsy for diagnosis before major surgery (ameloblastoma, giant cell lesions, malignancy); excisional (enucleation) for small cysts; frozen section; bone needs decalcification</td></tr></table></div>
<h3>WHO 2022 — points to remember</h3>
<ul>
<li>Odontogenic keratocyst is classified as a <b>cyst</b>.</li>
<li>Ameloblastoma subtypes: conventional, unicystic, extraosseous/peripheral, metastasising; adenoid ameloblastoma newly recognised.</li>
<li>Cemento-ossifying fibroma is a mesenchymal odontogenic tumour; juvenile trabecular and psammomatoid ossifying fibromas are separate (non-odontogenic).</li>
<li>Cemento-osseous dysplasia (periapical, focal, florid, familial gigantiform cementoma) and fibrous dysplasia are fibro-osseous lesions.</li>
</ul>`
    },
    {
      id: 'd6-inflam', title: 'Inflammatory odontogenic cysts', code: '6.3.1',
      syllabus: [
        'Radicular (periapical) cyst; residual cyst; inflammatory collateral (paradental) cyst'
      ],
      notes: `
<h3>Radicular cyst</h3>
<ul>
<li>Commonest jaw cyst (~50–60%). Arises from <b>epithelial rests of Malassez</b> stimulated by inflammation from a <b>non-vital tooth</b>.</li>
<li>Usually asymptomatic unless infected; may cause swelling, discolouration of the tooth.</li>
<li>Radiograph: round, well-defined, unilocular radiolucency with corticated margin, continuous with the lamina dura at the apex of a non-vital tooth. Can't reliably be distinguished from a periapical granuloma radiographically (size &gt;1 cm makes cyst more likely).</li>
<li>Histology: non-keratinised stratified squamous epithelium (arcading in inflamed areas), Rushton hyaline bodies, cholesterol clefts with foreign-body giant cells, foamy macrophages, inflamed fibrous capsule.</li>
<li>Treatment: RCT (most small lesions heal), periradicular surgery with enucleation, or extraction with enucleation/curettage. Large cysts: decompression first.</li>
</ul>
<h3>Residual cyst</h3>
<p>A radicular cyst left behind after the tooth was extracted — well-defined radiolucency in an edentulous area. Enucleate (histology to exclude other lesions).</p>
<h3>Inflammatory collateral cysts</h3>
<ul>
<li><b>Paradental cyst</b>: distal or buccal to a <b>partially erupted mandibular third molar</b> with a history of pericoronitis; vital tooth. Usually removed with the tooth.</li>
<li><b>Mandibular buccal bifurcation cyst</b>: children (6–11), buccal to an erupting first (or second) molar, which tips lingually; tooth vital; buccal swelling. Enucleation without extraction (some resolve spontaneously).</li>
</ul>`
    },
    {
      id: 'd6-dev', title: 'Developmental odontogenic cysts and Gorlin syndrome', code: '6.3.1',
      syllabus: [
        'Dentigerous cyst; odontogenic keratocyst; lateral periodontal cyst; gingival cyst; glandular odontogenic cyst',
        'Awareness of related systemic conditions and syndromes'
      ],
      notes: `
<h3>Dentigerous cyst</h3>
<ul>
<li>Second most common jaw cyst (~15–20%). Arises from <b>reduced enamel epithelium</b>; attached at the <b>cemento-enamel junction</b> enclosing the crown of an unerupted tooth.</li>
<li>Teeth: lower third molars &gt; upper canines &gt; lower second premolars &gt; upper third molars.</li>
<li>Radiograph: unilocular pericoronal radiolucency (central, lateral or circumferential); follicular space &gt;3–4 mm is suspicious (normal ≤2.5–3 mm); can displace teeth and resorb adjacent roots.</li>
<li>Histology: thin non-keratinised epithelium 2–4 cells thick. May harbour unicystic ameloblastoma, OKC (imaging can't tell), rarely carcinoma — send all linings for histology.</li>
<li>Treatment: enucleation with removal of the tooth; <b>marsupialisation/decompression</b> in children (to allow the tooth to erupt) or for large cysts near vital structures.</li>
<li>Eruption cyst: soft tissue counterpart over an erupting tooth (bluish swelling) — usually resolves.</li>
</ul>
<h3>Odontogenic keratocyst (OKC)</h3>
<ul>
<li>~10% of jaw cysts; arises from <b>dental lamina remnants</b> (rests of Serres); <b>PTCH1</b> mutation (Hedgehog pathway).</li>
<li>Posterior body and ramus of the mandible (~70%); peaks in 2nd–3rd decades.</li>
<li>Grows <b>anteroposteriorly along the medulla with little expansion</b> — can be large at diagnosis; uni- or multilocular with scalloped corticated margins; may surround an unerupted tooth (mimics dentigerous cyst).</li>
<li>Aspirate: thick creamy keratin, soluble protein &lt;4 g/dl.</li>
<li>Histology: thin, uniform <b>parakeratinised</b> epithelium 5–8 cells thick with <b>corrugated surface</b>, <b>palisaded hyperchromatic basal layer</b>, flat interface with no rete ridges, friable lining that separates from the capsule, satellite (daughter) cysts in the wall.</li>
<li><b>Recurrence</b> ~25–30% after simple enucleation (higher in Gorlin syndrome) due to the thin friable lining, satellite cysts and intrinsic growth potential. Recurrences can appear many years later.</li>
</ul>
<div class="box dose"><b>OKC treatment options</b><ul><li>Enucleation with an adjunct: <b>modified Carnoy's solution</b> (chloroform-free — absolute alcohol, glacial acetic acid, ferric chloride) applied for a few minutes, <b>peripheral ostectomy</b> (burring 1–2 mm of the cavity wall), or <b>liquid nitrogen cryotherapy</b></li><li><b>Decompression/marsupialisation</b> then later enucleation for large lesions near the IAN or teeth (lining thickens, cyst shrinks)</li><li>Resection for multiply recurrent or very extensive lesions</li><li>Topical 5-fluorouracil (emerging)</li><li>Radiographic follow-up yearly for at least 5–10 years</li></ul></div>
<p><b>Orthokeratinised odontogenic cyst</b> is a separate, less aggressive entity with lower recurrence.</p>
<h3>Gorlin–Goltz syndrome (naevoid basal cell carcinoma syndrome)</h3>
<ul>
<li>Autosomal dominant, <b>PTCH1</b> (occasionally SUFU).</li>
<li>Major features: multiple OKCs (often in children), multiple BCCs (or one before 20), palmar/plantar pits, bilamellar <b>calcification of the falx cerebri</b>, bifid/fused/splayed ribs, first-degree relative affected.</li>
<li>Minor features: macrocephaly, frontal bossing, hypertelorism, cleft lip/palate, medulloblastoma (childhood), ovarian and cardiac fibromas, vertebral anomalies, polydactyly.</li>
<li>Management: genetics, dermatology, lifelong surveillance of jaws (starting in childhood); <b>minimise ionising radiation</b> (radiation induces BCCs) — consider MRI/low-dose protocols.</li>
</ul>
<h3>Lateral periodontal cyst</h3>
<ul>
<li>Dental lamina origin; lateral to roots of <b>vital</b> lower canines/premolars (most); middle-aged.</li>
<li>Small, round, well-defined corticated radiolucency between roots. Botryoid variant is multilocular and more likely to recur.</li>
<li>Histology: thin non-keratinised epithelium with glycogen-rich clear-cell plaques.</li>
<li>Enucleate, preserving the teeth.</li>
</ul>
<h3>Gingival cysts</h3>
<ul>
<li><b>Gingival cyst of adults</b>: soft tissue counterpart of the lateral periodontal cyst — small bluish gingival nodule in the canine–premolar region. Excise.</li>
<li><b>Gingival cysts of the newborn</b>: Epstein pearls (palatal midline), Bohn's nodules (palate/alveolus), dental lamina cysts (alveolar ridge) — resolve spontaneously.</li>
</ul>
<h3>Glandular odontogenic cyst</h3>
<ul>
<li>Uncommon; anterior mandible, often crossing the midline; middle-aged.</li>
<li>Uni/multilocular, expansile; histology with mucous cells, ciliated cells and microcysts (can mimic low-grade mucoepidermoid carcinoma).</li>
<li>Recurrence common (~25–50%) — enucleation with adjunct or marginal resection; long-term follow-up.</li>
</ul>`
    },
    {
      id: 'd6-nonodont', title: 'Non-odontogenic cysts and pseudocysts', code: '6.3.1',
      syllabus: [
        'Nasopalatine duct cyst; nasolabial cyst',
        'Pseudocysts: Stafne\'s bone cyst; solitary bone cyst'
      ],
      notes: `
<div class="tbl"><table><tr><th>Lesion</th><th>Key features</th><th>Management</th></tr>
<tr><td>Nasopalatine duct cyst</td><td>Commonest non-odontogenic cyst; from nasopalatine duct epithelial remnants; midline anterior maxilla between central incisor roots; <b>heart-shaped</b> radiolucency (nasal spine superimposed); incisive canal width &gt;6 mm suspicious; palatal swelling behind incisors, salty discharge; <b>incisors vital</b>; lining squamous and/or respiratory with neurovascular bundle in wall</td><td>Enucleation via palatal flap (nasopalatine nerve sacrificed — anterior palatal numbness usually minimal)</td></tr>
<tr><td>Nasolabial (nasoalveolar) cyst</td><td>Soft tissue cyst (not in bone) in the nasolabial fold/upper lip; elevates the ala and fills the labial sulcus; middle-aged women; may cause shallow erosion of maxilla</td><td>Bimanual palpation, US/CT; excision via sublabial approach</td></tr>
<tr><td>Stafne bone cavity (lingual salivary gland depression)</td><td>Asymptomatic incidental well-defined ovoid radiolucency <b>below the IAN canal</b> near the angle (between first molar and angle); lingual cortical concavity containing submandibular gland or fat; men</td><td>No treatment; CBCT/MRI if diagnosis uncertain. Rare anterior variant (sublingual gland)</td></tr>
<tr><td>Solitary (simple, traumatic) bone cyst</td><td>Pseudocyst with <b>no epithelial lining</b>; teenagers; mandibular body; scalloped margins extending between roots; <b>vital teeth</b>, no displacement or resorption; empty cavity or straw-coloured/blood-stained fluid at surgery; older patients may have it with florid COD</td><td>Surgical exploration (inducing bleeding) usually leads to healing; may resolve spontaneously; radiographic review</td></tr></table></div>
<div class="box pearl"><b>Exam pearl</b>"Vital teeth" questions: radicular cyst is the only common cyst associated with a non-vital tooth. NPDC, lateral periodontal cyst, simple bone cyst and periapical COD all occur with vital teeth — test vitality before RCT.</div>`
    },
    {
      id: 'd6-tumours', title: 'Benign odontogenic tumours and osteoma', code: '6.3.2',
      syllabus: [
        'Ameloblastoma; calcifying epithelial odontogenic tumour; adenomatoid odontogenic tumour; squamous odontogenic tumour; ameloblastic fibroma; odontoma; odontogenic fibroma; odontogenic myxoma/myxofibroma; cementoblastoma; cemento-ossifying fibroma; osteoma'
      ],
      notes: `
<h3>Ameloblastoma</h3>
<ul>
<li>Most important benign epithelial odontogenic tumour — locally aggressive, high recurrence if under-treated.</li>
<li>3rd–6th decades; ~80% mandible (molar–ramus).</li>
<li>Slow painless expansion, tooth mobility, malocclusion; "eggshell crackling" over thinned cortex.</li>
<li>Radiograph: multilocular "soap bubble"/"honeycomb" radiolucency (can be unilocular), expansion, <b>knife-edge root resorption</b>. Desmoplastic variant (anterior) is mixed radiolucent–radiopaque with ill-defined margins.</li>
<li>Histology: follicular or plexiform islands with peripheral palisaded columnar cells showing <b>reverse polarity</b> and subnuclear vacuolation, central stellate reticulum-like cells; acanthomatous, granular, basal cell, desmoplastic variants. <b>BRAF V600E</b> in most mandibular tumours; SMO in maxillary.</li>
</ul>
<div class="tbl"><table><tr><th>Subtype (WHO 2022)</th><th>Features and treatment</th></tr>
<tr><td>Conventional</td><td>Infiltrates cancellous bone beyond radiographic margin → <b>resection with ~1–1.5 cm bony margin</b> (marginal or segmental mandibulectomy) and reconstruction (e.g. fibula free flap). Curettage alone recurs in most cases. Maxillary tumours are more dangerous (thin bone, spread to sinus/skull base)</td></tr>
<tr><td>Unicystic</td><td>Younger patients, often around an unerupted third molar (mimics dentigerous cyst). Luminal/intraluminal types: enucleation (± adjunct) with close follow-up. <b>Mural</b> type (tumour infiltrates the wall): treat like conventional</td></tr>
<tr><td>Extraosseous/peripheral</td><td>Gingival soft tissue, older adults; conservative excision</td></tr>
<tr><td>Metastasising</td><td>Histologically benign but metastasises (usually lung)</td></tr></table></div>
<p>Long-term follow-up (recurrence can occur decades later). BRAF inhibitors (dabrafenib ± trametinib) are being used in selected cases. Ameloblastic carcinoma is the malignant counterpart.</p>
<h3>Other benign odontogenic tumours</h3>
<div class="tbl"><table><tr><th>Tumour</th><th>Key features</th><th>Treatment</th></tr>
<tr><td>Calcifying epithelial odontogenic tumour (Pindborg)</td><td>30–50 years; posterior mandible; often with unerupted tooth; mixed lesion with "<b>driven snow</b>" calcifications; polyhedral epithelial cells, amyloid-like material (Congo red +), Liesegang ring calcifications</td><td>Resection with margin (recurrence ~15%)</td></tr>
<tr><td>Adenomatoid odontogenic tumour</td><td>"<b>Two-thirds tumour</b>": ~2/3 maxilla, ~2/3 young females (teens), ~2/3 with unerupted tooth (usually canine); well-defined pericoronal radiolucency extending <b>beyond the CEJ</b> (unlike dentigerous), with fine "snowflake" calcifications; encapsulated; duct-like structures and rosettes</td><td>Enucleation; recurrence very rare</td></tr>
<tr><td>Squamous odontogenic tumour</td><td>Rare; triangular radiolucency between roots (periodontal); islands of bland squamous epithelium</td><td>Conservative excision</td></tr>
<tr><td>Ameloblastic fibroma</td><td>Children/adolescents; posterior mandible; uni/multilocular with unerupted tooth; ameloblastic epithelium in primitive dental papilla-like stroma</td><td>Enucleation; may recur; rare sarcomatous change</td></tr>
<tr><td>Odontoma</td><td><b>Commonest odontogenic "tumour"</b> (hamartoma). Compound: anterior maxilla, many small tooth-like denticles. Complex: posterior mandible, amorphous radiopaque mass with radiolucent rim. Cause delayed eruption; multiple in Gardner's</td><td>Enucleation; doesn't recur</td></tr>
<tr><td>Odontogenic fibroma</td><td>Central or peripheral; fibrous stroma with odontogenic epithelial rests</td><td>Enucleation/excision</td></tr>
<tr><td>Odontogenic myxoma / myxofibroma</td><td>2nd–4th decades; posterior mandible; multilocular with thin straight septa ("<b>tennis racket</b>", "stepladder"); gelatinous, unencapsulated, infiltrative</td><td>Resection with margin (curettage recurs 10–30%)</td></tr>
<tr><td>Cementoblastoma</td><td>Young adults; <b>attached to the root</b> of a mandibular first molar/premolar; radiopaque mass fused to the root with radiolucent rim; pain, expansion; tooth vital</td><td>Extract tooth with lesion (or root amputation + RCT)</td></tr>
<tr><td>Cemento-ossifying fibroma</td><td>3rd–4th decades, females; mandibular premolar–molar region; <b>well-defined</b>, corticated; radiolucent → mixed → radiopaque; expansion with downward bowing of the inferior cortex; displaces teeth</td><td>Enucleation — "shells out"; contrast with fibrous dysplasia (ill-defined, blends)</td></tr>
<tr><td>Osteoma (non-odontogenic)</td><td>Benign bone tumour: periosteal (exophytic, lower border/angle) or endosteal; <b>multiple → Gardner's syndrome</b> (colonic polyps — refer)</td><td>Excise if symptomatic</td></tr></table></div>`
    },
    {
      id: 'd6-fibro', title: 'Fibro-osseous and giant cell lesions', code: '6.3.3',
      syllabus: [
        'Fibrous dysplasia; cemento-osseous dysplasia',
        'Giant cell lesions: central giant cell lesion, peripheral giant cell lesion, cherubism, brown tumour of hyperparathyroidism, aneurysmal bone cyst',
        'Awareness of related systemic conditions and syndromes'
      ],
      notes: `
<h3>Fibrous dysplasia</h3>
<ul>
<li>Post-zygotic activating <b>GNAS</b> mutation → normal bone replaced by fibrous tissue and immature woven bone.</li>
<li>Monostotic (most) or polyostotic. Craniofacial FD often involves several contiguous bones. <b>McCune–Albright syndrome</b>: polyostotic FD + café-au-lait macules ("coast of Maine") + endocrinopathy (precocious puberty, hyperthyroidism, GH excess).</li>
<li>Painless unilateral expansion in children/adolescents (maxilla &gt; mandible); facial asymmetry; tooth displacement; orbital/optic canal involvement (visual risk).</li>
<li>Radiograph: "<b>ground glass</b>" (or "orange peel", "fingerprint") with <b>ill-defined margins blending into normal bone</b>; obscured lamina dura.</li>
<li>Histology: irregular "Chinese character" woven bone trabeculae without osteoblastic rimming in cellular fibrous stroma. ALP may be raised.</li>
<li>Usually stabilises after puberty. Management: observe; cosmetic recontouring after growth stops; bisphosphonates for bone pain; optic nerve decompression if vision threatened. <b>Avoid radiotherapy</b> (sarcomatous change); investigate rapid growth or pain (malignant change rare, secondary ABC).</li>
</ul>
<h3>Cemento-osseous dysplasia (COD)</h3>
<ul>
<li>Commonest fibro-osseous lesion; non-neoplastic process in tooth-bearing areas; middle-aged women, especially of African or East Asian descent.</li>
<li>Forms: <b>periapical</b> (anterior mandible, several incisors), <b>focal</b> (single site, posterior mandible), <b>florid</b> (multiple quadrants), familial gigantiform cementoma.</li>
<li>Radiograph: periapical radiolucency → mixed → radiopaque mass with radiolucent rim. <b>Teeth are vital</b> — don't mistake early lesions for periapical pathology and root-treat.</li>
<li>Diagnosed radiologically — biopsy usually unnecessary (and risks infection).</li>
<li>No treatment if asymptomatic. The sclerotic, poorly vascularised bone is prone to <b>osteomyelitis</b> if exposed (extraction, periodontal disease, denture trauma): prevention, avoid surgery in affected areas; if extraction is unavoidable — atraumatic, primary closure, consider antibiotics.</li>
</ul>
<h3>Giant cell lesions</h3>
<p>Central giant cell granuloma, brown tumour and cherubism look identical histologically (multinucleated giant cells in vascular fibrous stroma) — clinical context and <b>bloods (calcium, phosphate, ALP, PTH, vitamin D)</b> are essential.</p>
<div class="tbl"><table><tr><th>Lesion</th><th>Key features</th><th>Management</th></tr>
<tr><td>Central giant cell granuloma/lesion</td><td>Under 30, females; ~2/3 mandible, anterior, often crossing midline; painless expansion; uni/multilocular radiolucency with wispy septa. Aggressive form: pain, rapid growth, root resorption, cortical perforation, recurrence</td><td>Curettage/enucleation (recurrence ~15–20%); <b>intralesional triamcinolone</b> (weekly for ~6 weeks), calcitonin, denosumab, interferon-α for aggressive/large lesions; resection if refractory</td></tr>
<tr><td>Peripheral giant cell granuloma</td><td>Soft tissue gingival lesion (Domain 5); purple, may "cup" underlying bone</td><td>Excision with curettage of base</td></tr>
<tr><td>Cherubism</td><td>Autosomal dominant (<b>SH3BP2</b>); bilateral symmetrical painless multilocular expansion of mandibular angles/rami (± maxilla) from age 2–5; upturned eyes (scleral show); tooth displacement and missing teeth</td><td>Regresses after puberty — conservative; recontouring later if needed; genetics</td></tr>
<tr><td>Brown tumour of hyperparathyroidism</td><td>Primary (adenoma: ↑Ca, ↑PTH) or secondary (renal failure: low/normal Ca, ↑PTH); generalised loss of lamina dura, ground-glass bone</td><td>Treat the parathyroid disease — lesions regress</td></tr>
<tr><td>Aneurysmal bone cyst</td><td>Pseudocyst of blood-filled spaces with fibrous septa containing giant cells; primary (USP6 rearrangement) or secondary (within FD, CGCG, ossifying fibroma); young; rapid "blow-out" expansion</td><td>Curettage/enucleation (expect bleeding), resection for recurrence; sclerotherapy</td></tr></table></div>
<h3>Associated systemic conditions</h3>
<p>Hyperparathyroidism (and hyperparathyroidism–jaw tumour syndrome: ossifying fibromas + parathyroid carcinoma, CDC73), Noonan syndrome (giant cell lesions), NF1, McCune–Albright, Paget's disease (cotton-wool appearance, hypercementosis, raised ALP, enlarging maxilla, sarcoma risk), Gorlin, Gardner's.</p>`
    },
    {
      id: 'd6-mronj', title: 'Medication-related osteonecrosis of the jaw', code: '6.3.4',
      syllabus: [
        'MRONJ: pathogenesis, features, prevention and management',
        'Pharmacology of drugs causing MRONJ; medical management',
        'Plan extractions to minimise MRONJ risk'
      ],
      notes: `
<div class="box guide"><b>AAOMS 2022 definition — all three</b><ol><li>Current or previous treatment with antiresorptive therapy alone or with immune modulators or antiangiogenic medications</li><li>Exposed bone, or bone that can be probed through an intraoral or extraoral fistula, in the maxillofacial region, persisting for <b>more than 8 weeks</b></li><li>No history of radiation therapy to the jaws or metastatic disease to the jaws</li></ol></div>
<h3>Drugs</h3>
<div class="tbl"><table><tr><th>Drug</th><th>Mechanism</th><th>Notes</th></tr>
<tr><td>Bisphosphonates — alendronate, risedronate (oral weekly), ibandronate, zoledronic acid (IV: yearly for osteoporosis, ~4-weekly in cancer)</td><td>Bind hydroxyapatite; nitrogen-containing BPs inhibit <b>farnesyl pyrophosphate synthase</b> in osteoclasts (mevalonate pathway) → osteoclast dysfunction/apoptosis; also anti-angiogenic</td><td>Skeletal half-life of years — effect persists after stopping</td></tr>
<tr><td>Denosumab — 60 mg SC 6-monthly (osteoporosis), 120 mg SC 4-weekly (cancer)</td><td>Monoclonal antibody against <b>RANKL</b> → blocks osteoclast formation</td><td>Doesn't bind bone; effect wears off within ~6 months. <b>Stopping or delaying causes rebound bone loss and multiple vertebral fractures</b> — never stop without the prescriber</td></tr>
<tr><td>Romosozumab</td><td>Anti-sclerostin antibody</td><td>MRONJ reported</td></tr>
<tr><td>Antiangiogenics — bevacizumab, aflibercept, sunitinib, sorafenib, cabozantinib; mTOR inhibitors</td><td>Inhibit VEGF signalling/angiogenesis</td><td>Risk alone and additive with antiresorptives</td></tr></table></div>
<h3>Risk</h3>
<ul>
<li>Cancer patients on high-dose IV zoledronic acid or denosumab: roughly <b>1–5%</b> (denosumab slightly higher).</li>
<li>Osteoporosis patients on oral bisphosphonates: very low (&lt;0.05%); denosumab for osteoporosis also low.</li>
<li>Risk factors: drug potency, dose and duration (oral BPs &gt;~4–5 years), <b>dentoalveolar surgery (extraction — commonest trigger)</b>, periodontal/periapical infection, denture trauma, mandible (2/3) &gt; maxilla, tori and mylohyoid ridge, systemic glucocorticoids, diabetes, smoking, chemotherapy, previous MRONJ.</li>
</ul>
<div class="box guide"><b>SDCEP (2017) risk groups</b>
<p><b>Low risk</b>: osteoporosis/non-malignant bone disease on oral bisphosphonates or quarterly/yearly IV bisphosphonates for &lt;5 years, or denosumab — without systemic glucocorticoids.</p>
<p><b>Higher risk</b>: osteoporosis treatment for ≥5 years (bisphosphonates), or any osteoporosis antiresorptive with systemic glucocorticoids; antiresorptive or antiangiogenic drugs for <b>cancer</b>; <b>previous MRONJ</b>.</p>
<p>SDCEP does not recommend a drug holiday; antibiotic prophylaxis is not routinely recommended.</p></div>
<h3>AAOMS 2022 staging and treatment</h3>
<div class="tbl"><table><tr><th>Stage</th><th>Features</th><th>Treatment</th></tr>
<tr><td>At risk</td><td>On drugs, no necrotic bone</td><td>Prevention, education</td></tr>
<tr><td>Stage 0</td><td>No exposed bone; non-specific symptoms (unexplained pain, loose teeth, fistula not due to pulpal necrosis) or radiographic changes (sclerosis, non-healing socket, thickened lamina dura)</td><td>Symptomatic: analgesia, antibiotics if infection, close monitoring</td></tr>
<tr><td>Stage 1</td><td>Exposed/necrotic bone or fistula probing to bone, <b>asymptomatic, no infection</b></td><td>Antimicrobial mouthwash (chlorhexidine), follow-up, education; surgery may be considered</td></tr>
<tr><td>Stage 2</td><td>Exposed bone/fistula <b>with infection</b>: pain, erythema, ± pus</td><td>Antimicrobial mouthwash + systemic antibiotics (e.g. amoxicillin ± metronidazole; alternatives clindamycin/doxycycline), analgesia, debridement or resection</td></tr>
<tr><td>Stage 3</td><td>Stage 2 plus any of: necrosis extending beyond the alveolar bone (inferior border/ramus; sinus/zygoma), pathological fracture, extraoral fistula, oro-antral/oro-nasal communication, osteolysis to inferior border or sinus floor</td><td>As above + surgical resection with reconstruction</td></tr></table></div>
<p>AAOMS 2022 recognises that surgical debridement/resection can be effective at all stages. Adjuncts with limited evidence: teriparatide (contraindicated with bone metastases or skeletal radiotherapy), pentoxifylline + tocopherol, leucocyte–platelet-rich fibrin, laser, HBO.</p>
<h3>Prevention and planning extractions</h3>
<ul>
<li><b>Before starting</b> antiresorptives (especially for cancer): dental assessment; complete extractions and invasive treatment before starting where possible; prevention (fluoride, oral hygiene, smoking cessation, denture fit).</li>
<li><b>During treatment</b>: avoid extractions if a reasonable alternative exists — RCT and decoronation of non-restorable teeth (leave roots), periodontal treatment. Don't withhold necessary treatment.</li>
<li><b>If extraction is needed</b>: discuss risk and document consent; atraumatic technique; smooth sharp bone; primary closure where feasible; chlorhexidine; one quadrant/sextant at a time in high-risk patients; review at intervals until healed (healing expected by 8 weeks) — refer non-healing sockets.</li>
<li>Denosumab: liaise with the prescriber about timing (procedures are sometimes timed towards the end of a dosing interval) but don't stop the drug unilaterally.</li>
</ul>`
    },
    {
      id: 'd6-orn', title: 'Osteoradionecrosis', code: '6.3.4',
      syllabus: [
        'Osteoradionecrosis: pathogenesis, prevention, recognition and management',
        'Plan extractions to minimise ORN risk; medical management'
      ],
      notes: `
<h3>Definition and risk</h3>
<ul>
<li>Exposed irradiated bone that fails to heal over a period (commonly 3 months) without residual or recurrent tumour. Newer classifications also recognise radiological ORN without exposure.</li>
<li>Incidence a few per cent in the IMRT era (historically 5–15%). Lifelong risk.</li>
<li>Risk factors: <b>mandibular dose &gt;60 Gy</b> and volume irradiated, extractions after radiotherapy (especially mandibular molars), periodontal disease, poor oral hygiene, smoking, alcohol, mandibular surgery, oral cavity/oropharyngeal primary, concurrent chemotherapy, poor nutrition, denture trauma.</li>
<li>Mandible (posterior body) far more often than maxilla.</li>
</ul>
<h3>Pathogenesis</h3>
<ul>
<li><b>Marx (1983) "3H"</b>: hypoxic, hypocellular, hypovascular tissue — the basis for HBO.</li>
<li><b>Radiation-induced fibroatrophy</b> (Delanian &amp; Lefaix 2004): free radicals, endothelial dysfunction, myofibroblast activation (TGF-β), fibrosis and bone cell death — the basis for PENTOCLO.</li>
</ul>
<h3>Prevention</h3>
<div class="box guide"><b>Before radiotherapy (RCS/BSDH 2018)</b><ul><li>Dental assessment as soon as head and neck radiotherapy is planned</li><li>Extract teeth of poor or doubtful prognosis in the high-dose field (unrestorable caries, advanced periodontitis, partially erupted third molars) — ideally <b>at least 10–14 days before</b> radiotherapy starts</li><li>Stabilise disease, oral hygiene, smoking and alcohol cessation</li><li>High-fluoride toothpaste (5000 ppm) lifelong; consider custom fluoride trays</li></ul></div>
<p><b>After radiotherapy</b>: avoid extractions when possible — RCT and decoronation instead. If extraction is unavoidable:</p>
<ul>
<li>Obtain the radiotherapy dose map from oncology to judge risk at the site.</li>
<li>Atraumatic technique, minimal flap, smooth sharp bone, primary closure where possible.</li>
<li>Peri-operative antibiotics and chlorhexidine per local protocol; some units use prophylactic pentoxifylline + tocopherol.</li>
<li><b>Hyperbaric oxygen</b>: the HOPON randomised trial (Shaw et al. 2019) found no significant benefit of HBO for preventing ORN after extractions in irradiated mandibles — not routinely recommended for prevention.</li>
<li>Review until healed.</li>
</ul>
<h3>Management</h3>
<ul>
<li><b>Conservative</b>: chlorhexidine rinses, analgesia, antibiotics for infection, irrigation, removal of loose sequestra, smoothing sharp edges, smoking cessation, nutrition.</li>
<li><b>Medical</b>: <b>PENTOCLO</b> — pentoxifylline 400 mg twice daily + tocopherol (vitamin E) 1000 IU daily ± clodronate, for months.</li>
<li><b>Surgical</b>: sequestrectomy and debridement; marginal or segmental resection with vascularised free flap reconstruction (fibula, DCIA, scapula) for advanced disease (pathological fracture, orocutaneous fistula, extensive osteolysis).</li>
<li>HBO may still be used as an adjunct in selected cases.</li>
<li>Exclude tumour recurrence (biopsy) in any atypical or progressive lesion.</li>
</ul>
<p><b>Notani classification</b>: I — confined to dentoalveolar bone; II — limited to dentoalveolar bone and/or mandible above the IAN canal; III — extends below the IAN canal, or pathological fracture, or skin fistula.</p>`
    },
    {
      id: 'd6-osteomyelitis', title: 'Osteomyelitis of the jaws', code: '6.3.4',
      syllabus: [
        'Osteomyelitis: chronic/acute, sclerosing/suppurative, focalising or widespread'
      ],
      notes: `
<h3>Classification</h3>
<div class="tbl"><table><tr><th>Type</th><th>Features</th></tr>
<tr><td>Acute suppurative (&lt;4 weeks)</td><td>Deep throbbing pain, swelling, fever, malaise, trismus, loose tender teeth, pus, <b>lower lip numbness (Vincent's sign)</b>; radiographic changes appear after ~10–14 days: ill-defined "moth-eaten" radiolucency</td></tr>
<tr><td>Chronic suppurative (&gt;4 weeks)</td><td>Persistent or recurrent pain and swelling, discharging sinuses, <b>sequestra</b> (radiopaque islands of dead bone) and <b>involucrum</b> (new bone around)</td></tr>
<tr><td>Focal sclerosing (condensing osteitis)</td><td>Localised periapical radiopacity at a non-vital or chronically inflamed tooth (usually lower first molar); treat the tooth</td></tr>
<tr><td>Diffuse sclerosing (primary chronic)</td><td>Recurrent pain/swelling without pus or sinus; diffuse sclerosis; may be part of SAPHO; differentials florid COD, Paget's; NSAIDs, bisphosphonates</td></tr>
<tr><td>Proliferative periostitis (Garré's)</td><td>Children; low-grade infection from a carious lower molar; "<b>onion-skin</b>" layers of periosteal new bone at the lower border; treat the tooth</td></tr></table></div>
<h3>Predisposing factors</h3>
<p>Host: diabetes, immunosuppression, steroids, alcohol, malnutrition, sickle cell disease. Bone: radiotherapy, Paget's, osteopetrosis, COD, antiresorptives. The mandible is more often affected (dense cortex, single main blood supply).</p>
<h3>Investigations</h3>
<ul>
<li>Bloods: WCC, CRP, ESR, glucose/HbA1c.</li>
<li>Pus and bone culture (aerobic, anaerobic, actinomyces) and histology (exclude malignancy).</li>
<li>Imaging: DPT; CT (sequestra, cortical destruction, periosteal reaction); MRI (early marrow oedema, extent); bone scintigraphy.</li>
</ul>
<h3>Management</h3>
<ol>
<li>Remove the source (tooth, foreign body), drain pus.</li>
<li>Antibiotics: empirical (e.g. co-amoxiclav, or amoxicillin + metronidazole; clindamycin if allergic), then culture-directed; <b>prolonged courses</b> (typically 4–6 weeks or longer for chronic disease), IV initially if severe.</li>
<li>Surgery: sequestrectomy, debridement, saucerisation, decortication; resection and reconstruction for extensive disease or pathological fracture.</li>
<li>Manage host factors (glycaemic control, nutrition, smoking).</li>
<li>HBO as adjunct for refractory chronic disease in some centres.</li>
</ol>`
    },
    {
      id: 'd6-malignant', title: 'Malignant bone disease', code: '6.3.5',
      syllabus: [
        'Recognise red flag signs and symptoms of malignant bone disease',
        'Initiate appropriate diagnostic and onward referral pathways'
      ],
      notes: `
<div class="box flag"><b>Red flags</b>
<ul><li>Rapidly enlarging swelling; pain without a dental cause</li><li>Paraesthesia or anaesthesia (<b>numb chin</b>)</li><li>Loose teeth without periodontal disease ("floating teeth")</li><li>Non-healing extraction socket, especially with exuberant tissue</li><li>Unexplained trismus, pathological fracture, weight loss</li><li>Radiograph: ill-defined, permeative/"moth-eaten" margins, cortical destruction, spiky root resorption, <b>symmetrical PDL widening</b>, sunray spicules, onion-skin periosteal reaction, soft tissue mass</li></ul></div>
<h3>Primary malignant bone tumours</h3>
<div class="tbl"><table><tr><th>Tumour</th><th>Key features</th></tr>
<tr><td>Osteosarcoma</td><td>Commonest primary jaw malignancy of bone; 3rd–4th decade (older than long-bone osteosarcoma); swelling, pain, numbness, loose teeth; mixed or lytic with "<b>sunray</b>" spicules, Codman triangle, symmetrical PDL widening (Garrington sign). Risks: prior radiation, Paget's, FD, retinoblastoma (RB1), Li–Fraumeni (TP53). Neoadjuvant chemotherapy + radical resection</td></tr>
<tr><td>Chondrosarcoma</td><td>Older adults; anterior maxilla; slow; mixed lesion; wide resection</td></tr>
<tr><td>Ewing's sarcoma</td><td>Children/adolescents; EWSR1–FLI1 t(11;22); "onion-skin" periosteal reaction; chemotherapy, radiotherapy, surgery</td></tr>
<tr><td>Multiple myeloma / plasmacytoma</td><td>Older adults; <b>punched-out</b> radiolucencies in skull and jaws; CRAB (hypercalcaemia, renal failure, anaemia, bone lesions); paraprotein on electrophoresis, Bence Jones protein; amyloid macroglossia; many patients on bisphosphonates/denosumab (MRONJ)</td></tr>
<tr><td>Lymphoma of bone</td><td>Non-Hodgkin; <b>Burkitt's</b> (EBV, African children, rapidly growing jaw mass, among the fastest-growing human tumours)</td></tr>
<tr><td>Langerhans cell histiocytosis</td><td>Children/young adults; punched-out alveolar bone loss → "<b>floating teeth</b>", premature tooth loss; CD1a/langerin positive; BRAF V600E; curettage, steroids, chemotherapy</td></tr></table></div>
<h3>Secondary malignancy</h3>
<ul>
<li><b>Direct invasion</b> by oral SCC (erosive or infiltrative pattern) or antral carcinoma.</li>
<li><b>Metastases</b>: breast, lung, prostate, kidney, thyroid, colon; posterior mandible most often (red marrow); may be the first sign of an occult primary. Prostate and breast can be osteoblastic/mixed.</li>
</ul>
<h3>Pathway</h3>
<ol>
<li>Urgent referral via the suspected cancer pathway to OMFS/head and neck.</li>
<li>Imaging: CT/MRI, ± PET-CT; chest imaging.</li>
<li>Biopsy (incisional) at the specialist centre; bloods (FBC, calcium, ALP, electrophoresis, PSA if indicated).</li>
<li>Staging and MDT management (sarcoma MDT for primary bone sarcomas).</li>
</ol>`
    },
    {
      id: 'd6-pharm', title: 'Medicines for hard tissue disease', code: '6.4',
      syllabus: [
        'Prescribe antimicrobials and analgesia',
        'Pharmacology of drugs causing MRONJ and other bone disease',
        'Medical management of MRONJ, ORN, osteomyelitis, fibro-osseous and giant cell lesions',
        'Intralesional medications including baseline investigations and monitoring'
      ],
      notes: `
<h3>Antimicrobials</h3>
<ul>
<li>Acute odontogenic infection/osteomyelitis: amoxicillin or co-amoxiclav ± metronidazole; clindamycin or doxycycline in penicillin allergy; culture-guided, prolonged courses for osteomyelitis.</li>
<li>MRONJ stage 2–3: chlorhexidine rinse plus systemic antibiotics (penicillin/amoxicillin ± metronidazole).</li>
<li>Actinomycosis: long-course penicillin.</li>
</ul>
<h3>Drugs causing bone disease</h3>
<ul>
<li>MRONJ: bisphosphonates, denosumab, romosozumab, antiangiogenics (see MRONJ topic).</li>
<li>Osteoporosis: long-term corticosteroids, PPIs, aromatase inhibitors, androgen deprivation, some antiepileptics (enzyme inducers → osteomalacia), heparin.</li>
<li>Radiotherapy (ORN); methotrexate and immune modulators (impaired healing).</li>
</ul>
<h3>Medical management of specific conditions</h3>
<div class="tbl"><table><tr><th>Condition</th><th>Medical options</th></tr>
<tr><td>MRONJ</td><td>Chlorhexidine, antibiotics, analgesia; teriparatide (not with bone metastases/skeletal radiation); pentoxifylline + tocopherol</td></tr>
<tr><td>ORN</td><td>PENTOCLO: pentoxifylline 400 mg bd + tocopherol 1000 IU daily ± clodronate</td></tr>
<tr><td>Osteomyelitis</td><td>Prolonged culture-directed antibiotics; NSAIDs/bisphosphonates for diffuse sclerosing osteomyelitis</td></tr>
<tr><td>Fibrous dysplasia</td><td>Bisphosphonates for bone pain; treat endocrine disease in McCune–Albright</td></tr>
<tr><td>Central giant cell granuloma</td><td>Intralesional corticosteroid, calcitonin, denosumab, interferon-α</td></tr>
<tr><td>Brown tumour</td><td>Treat hyperparathyroidism</td></tr></table></div>
<h3>Intralesional corticosteroid for CGCG</h3>
<ul>
<li><b>Baseline</b>: confirm diagnosis by biopsy; calcium, phosphate, ALP, PTH (exclude hyperparathyroidism); baseline imaging (CBCT/CT).</li>
<li><b>Regimen</b> (commonly): triamcinolone acetonide (e.g. 10 mg/ml, or 40 mg/ml mixed 1:1 with LA) injected into several sites of the lesion weekly for about 6 weeks.</li>
<li><b>Monitoring</b>: clinical and radiographic response (increasing radiopacity/corticated margins) at ~3–6 months; repeat course if partial response; surgery for residual lesion.</li>
<li>Side effects are uncommon: local atrophy, transient pain; systemic absorption small.</li>
</ul>
<h3>Other systemic agents for CGCG</h3>
<ul>
<li><b>Calcitonin</b> (SC or intranasal, daily for 12–24 months): inhibits osteoclasts; nausea, flushing; monitor calcium; long-term use linked with small cancer risk.</li>
<li><b>Denosumab</b>: for aggressive lesions; risk of rebound hypercalcaemia (especially children) on stopping and MRONJ.</li>
<li><b>Interferon-α</b>: anti-angiogenic; flu-like symptoms; monitor FBC, LFTs, thyroid function.</li>
</ul>`
    },
    {
      id: 'd6-surgery', title: 'Surgical management and follow-up of jaw lesions', code: '6.5–6.6',
      syllabus: [
        'Holistic assessment, examination and valid consent',
        'Incisional and excisional biopsy of hard tissue lesions; explain histopathology',
        'Excise/enucleate cysts (radicular, dentigerous, keratocyst) with or without adjuncts; manage ameloblastomas with referral as needed',
        'Marsupialise or decompress cysts and know when this is correct',
        'Debride and recontour diseased bone; plan extractions to minimise complications with COD, ORN and MRONJ',
        'Identify patients needing long-term monitoring; MDT working'
      ],
      notes: `
<h3>Enucleation vs marsupialisation/decompression</h3>
<div class="tbl"><table><tr><th></th><th>Enucleation (Partsch II)</th><th>Marsupialisation (Partsch I) / decompression</th></tr>
<tr><td>What</td><td>Shell out the whole lining; primary closure</td><td>Create a window, suture lining to oral mucosa (marsupialisation) or place a drain/tube (decompression); the cyst shrinks as pressure is relieved</td></tr>
<tr><td>Indications</td><td>Most cysts of manageable size: radicular, dentigerous, LPC, NPDC, small OKC</td><td>Large cysts near the IAN, sinus or tooth roots; children (allow dentigerous cyst tooth to erupt); risk of jaw fracture; medically unfit patients; first stage before enucleation of large OKCs</td></tr>
<tr><td>Advantages</td><td>Complete histology; single procedure; no patient maintenance</td><td>Simple, preserves vital structures and teeth, reduces fracture risk</td></tr>
<tr><td>Disadvantages</td><td>Risk to adjacent structures (IAN, teeth vitality, sinus), fracture, large dead space</td><td>Prolonged treatment, cavity hygiene and obturator/bung, patient compliance, incomplete histology (residual lining may hide pathology), usually needs a second procedure</td></tr></table></div>
<h3>Operative principles for enucleation</h3>
<ol>
<li>Aspirate first; confirm diagnosis (incisional biopsy if a tumour is possible).</li>
<li>Full-thickness flap with margins on sound bone.</li>
<li>Bony window; separate the lining from bone with curettes (lining comes away more easily in non-keratinised cysts; OKC lining is friable).</li>
<li>Adjunct for OKC (modified Carnoy's, peripheral ostectomy, cryotherapy), protecting the IAN.</li>
<li>Manage associated teeth (RCT, apicectomy or extraction).</li>
<li>Irrigate; primary closure; large cavities fill with clot (grafting rarely needed) or are packed (BIPP/Whitehead's varnish) if left open.</li>
<li>Send all tissue for histology.</li>
</ol>
<h3>Ameloblastoma and other aggressive lesions</h3>
<p>Refer for MDT planning: resection with margins (marginal mandibulectomy preserving ≥1 cm lower border, or segmental with free flap reconstruction); unicystic luminal types may be enucleated with close follow-up.</p>
<h3>Debriding and recontouring bone</h3>
<p>Sequestrectomy (MRONJ, ORN, osteomyelitis), saucerisation and decortication (chronic osteomyelitis), smoothing sharp edges, recontouring fibrous dysplasia after growth has ceased (shaving), alveoloplasty.</p>
<h3>Planning extractions in high-risk bone</h3>
<div class="tbl"><table><tr><th>Condition</th><th>Planning points</th></tr>
<tr><td>Cemento-osseous dysplasia</td><td>Avoid where possible; atraumatic, minimal bone removal; primary closure; consider antibiotics; warn about infection/osteomyelitis</td></tr>
<tr><td>MRONJ risk</td><td>Risk group (SDCEP), alternatives (RCT, decoronation), atraumatic, smooth bone, primary closure, chlorhexidine, review to 8 weeks, liaise with prescriber</td></tr>
<tr><td>ORN risk</td><td>Dose map, alternatives, atraumatic, primary closure, antibiotics per protocol, ± pentoxifylline/tocopherol; HBO not routine</td></tr></table></div>
<h3>Long-term monitoring</h3>
<ul>
<li>OKC: annual radiographs for at least 5–10 years. Gorlin syndrome: lifelong.</li>
<li>Ameloblastoma: long-term/lifelong (late recurrence).</li>
<li>Glandular odontogenic cyst, myxoma, CEOT, CGCG: several years.</li>
<li>Fibrous dysplasia: until growth stops, then as symptoms dictate.</li>
<li>MRONJ/ORN: until healed, then regular review; ongoing prevention.</li>
<li>Communicate follow-up plans to the patient and GDP; use reliable recall systems.</li>
</ul>
<h3>Multidisciplinary care</h3>
<p>OMFS, head and neck MDT, restorative dentistry (rehabilitation after resection), radiology, pathology, endocrinology (hyperparathyroidism, McCune–Albright), genetics (Gorlin, cherubism, Gardner's), oncology/haematology (antiresorptives, myeloma), and the patient's GDP for prevention.</p>`
    }
  ],
  cards: [
    ['Commonest jaw cyst and its epithelial origin?', 'Radicular cyst — rests of Malassez.'],
    ['Histological features of a radicular cyst?', 'Non-keratinised squamous epithelium (arcading), Rushton hyaline bodies, cholesterol clefts, foamy macrophages.'],
    ['Where is a mandibular buccal bifurcation cyst?', 'Buccal to an erupting first/second molar in a child; tooth vital and tipped lingually.'],
    ['Dentigerous cyst attaches where and arises from what?', 'At the CEJ of an unerupted tooth; reduced enamel epithelium.'],
    ['Normal follicular space vs suspicious?', 'Normal ≤2.5–3 mm; &gt;3–4 mm suggests a dentigerous cyst.'],
    ['Gene mutated in OKC and Gorlin syndrome?', 'PTCH1.'],
    ['Growth pattern of OKC?', 'Anteroposteriorly along the medulla with little expansion.'],
    ['Five histological features of OKC?', 'Parakeratinised, corrugated surface, palisaded basal layer, 5–8 cells thick, flat interface/satellite cysts with friable lining.'],
    ['Recurrence of OKC after simple enucleation?', 'About 25–30%.'],
    ['Adjuncts used with OKC enucleation?', 'Modified (chloroform-free) Carnoy\'s solution, peripheral ostectomy, cryotherapy.'],
    ['Major features of Gorlin syndrome?', 'Multiple OKCs, BCCs, palmar/plantar pits, calcified falx cerebri, bifid ribs, affected relative.'],
    ['Why limit radiographs in Gorlin syndrome?', 'Ionising radiation induces BCCs.'],
    ['Lateral periodontal cyst — typical site and vitality?', 'Between roots of vital lower canine/premolars.'],
    ['Radiographic shape of a nasopalatine duct cyst?', 'Heart-shaped midline radiolucency (incisive canal &gt;6 mm); incisors vital.'],
    ['Nasolabial cyst — bone involvement?', 'None (soft tissue cyst); elevates the nasal ala and fills the labial sulcus.'],
    ['Stafne bone cavity location?', 'Below the IAN canal near the angle — lingual depression containing submandibular gland.'],
    ['Solitary bone cyst features?', 'No epithelial lining; teenager; scalloping between roots of vital teeth; empty cavity; heals after exploration.'],
    ['Root resorption pattern in ameloblastoma?', 'Knife-edge (smooth) resorption.'],
    ['Mutation found in most mandibular ameloblastomas?', 'BRAF V600E.'],
    ['Bony margin for conventional ameloblastoma resection?', 'About 1–1.5 cm.'],
    ['Unicystic ameloblastoma subtype needing resection?', 'Mural type (tumour invading the cyst wall).'],
    ['"Driven snow" calcifications and Liesegang rings?', 'Calcifying epithelial odontogenic tumour (Pindborg).'],
    ['The "two-thirds tumour"?', 'Adenomatoid odontogenic tumour — maxilla, young females, unerupted canine.'],
    ['Commonest odontogenic tumour?', 'Odontoma (compound anterior maxilla; complex posterior mandible).'],
    ['"Tennis racket" septa?', 'Odontogenic myxoma.'],
    ['Radiopaque mass fused to a lower first molar root with lucent rim?', 'Cementoblastoma — extract tooth with lesion.'],
    ['Cemento-ossifying fibroma vs fibrous dysplasia margins?', 'COF well-defined and shells out; FD ill-defined, blending into normal bone.'],
    ['Multiple jaw osteomas suggest?', 'Gardner\'s syndrome (FAP) — refer for colonic screening.'],
    ['Gene in fibrous dysplasia?', 'GNAS (activating, post-zygotic).'],
    ['McCune–Albright triad?', 'Polyostotic fibrous dysplasia, café-au-lait macules ("coast of Maine"), endocrinopathy.'],
    ['Why avoid radiotherapy in fibrous dysplasia?', 'Risk of sarcomatous transformation.'],
    ['Vitality of teeth in periapical COD?', 'Vital — don\'t root-treat.'],
    ['Main risk with florid COD?', 'Osteomyelitis after exposure (extractions, perio disease, dentures).'],
    ['Bloods for any jaw giant cell lesion?', 'Calcium, phosphate, ALP, PTH (± vitamin D).'],
    ['Gene and pattern in cherubism?', 'SH3BP2, autosomal dominant; bilateral mandibular angle expansion that regresses after puberty.'],
    ['Intralesional steroid regimen for CGCG?', 'Triamcinolone injected weekly for about 6 weeks.'],
    ['AAOMS 2022 MRONJ: duration of exposed bone?', 'More than 8 weeks.'],
    ['Mechanism of nitrogen-containing bisphosphonates?', 'Inhibit farnesyl pyrophosphate synthase in osteoclasts.'],
    ['Why must denosumab not be stopped abruptly?', 'Rebound bone loss with multiple vertebral fractures.'],
    ['MRONJ risk in cancer patients on zoledronate/denosumab?', 'Roughly 1–5%.'],
    ['SDCEP higher-risk MRONJ groups?', 'Cancer patients; osteoporosis ≥5 years BPs or with systemic steroids; previous MRONJ.'],
    ['AAOMS stage 2 vs stage 1?', 'Stage 2 has infection (pain, erythema, pus); stage 1 is asymptomatic exposed bone.'],
    ['What defines AAOMS stage 3?', 'Extension beyond alveolus, pathological fracture, extraoral fistula, oro-antral/nasal communication, or osteolysis to inferior border/sinus floor.'],
    ['Marx\'s 3H theory of ORN?', 'Hypoxic, hypocellular, hypovascular tissue.'],
    ['Dose above which ORN risk rises sharply?', 'About 60 Gy to the mandible.'],
    ['Timing of extractions before radiotherapy?', 'Ideally at least 10–14 days before starting.'],
    ['Result of the HOPON trial?', 'HBO did not significantly reduce ORN after extractions in irradiated mandibles.'],
    ['PENTOCLO components?', 'Pentoxifylline, tocopherol (vitamin E) ± clodronate.'],
    ['Vincent\'s sign?', 'Lower lip numbness from IAN involvement in acute mandibular osteomyelitis (or malignancy).'],
    ['Sequestrum vs involucrum?', 'Sequestrum: dead bone fragment. Involucrum: new bone formed around it.'],
    ['Garré\'s osteomyelitis?', 'Proliferative periostitis with "onion-skin" periosteal new bone in children, from a carious lower molar.'],
    ['Garrington sign?', 'Symmetrical PDL widening — early osteosarcoma.'],
    ['Radiographic signs of osteosarcoma?', 'Sunray spicules, Codman triangle, symmetrical PDL widening.'],
    ['Punched-out lesions + CRAB features?', 'Multiple myeloma.'],
    ['"Floating teeth" in a child?', 'Langerhans cell histiocytosis (also aggressive periodontitis, malignancy).'],
    ['Commonest primaries metastasising to the jaws?', 'Breast, lung, prostate, kidney, thyroid (and colon).'],
    ['Partsch I vs Partsch II?', 'I = marsupialisation; II = enucleation with primary closure.']
  ],
  mcqs: [
    { q: 'A 22-year-old has an asymptomatic multilocular radiolucency in the right mandibular ramus extending into the body, with little buccolingual expansion. Aspiration yields thick creamy material. What is the most likely diagnosis?', o: ['Ameloblastoma', 'Odontogenic keratocyst', 'Dentigerous cyst', 'Central giant cell granuloma', 'Radicular cyst'], a: 1, e: 'Growth along the medulla with minimal expansion and keratin on aspiration are classic for OKC.' },
    { q: 'An incidental, well-defined ovoid radiolucency lies below the IAN canal near the right mandibular angle in a 55-year-old man. The overlying teeth are normal. What is the best management?', o: ['Enucleation', 'Incisional biopsy', 'No treatment — likely a Stafne bone cavity; confirm with CBCT if needed', 'Marsupialisation', 'Resection'], a: 2, e: 'A lingual salivary gland depression lies below the canal near the angle and needs no treatment.' },
    { q: 'A 40-year-old woman has multiple periapical radiolucencies associated with vital, symptom-free lower incisors. What is the most appropriate management?', o: ['Root canal treatment of all affected incisors', 'Extraction and enucleation', 'Observation with radiographic review — periapical cemento-osseous dysplasia', 'Biopsy of each lesion', 'Antibiotics'], a: 2, e: 'Periapical COD occurs at vital teeth in middle-aged women; it needs no treatment and must not be mistaken for periapical pathology.' },
    { q: 'A 15-year-old girl has a well-defined pericoronal radiolucency around an unerupted upper canine with fine calcifications, extending apical to the CEJ. What is the likely diagnosis?', o: ['Dentigerous cyst', 'Adenomatoid odontogenic tumour', 'CEOT', 'Ameloblastoma', 'Odontoma'], a: 1, e: 'AOT: young female, maxilla, unerupted canine, calcifications, and the radiolucency extends beyond the CEJ (a dentigerous cyst attaches at the CEJ).' },
    { q: 'A patient with metastatic breast cancer on 4-weekly denosumab has exposed bone in the lower molar region for 10 weeks with pain, erythema and pus. No history of jaw radiotherapy. What is the AAOMS stage?', o: ['At risk', 'Stage 0', 'Stage 1', 'Stage 2', 'Stage 3'], a: 3, e: 'Exposed bone for more than 8 weeks with infection (pain, erythema, pus) and no extension beyond the alveolus is stage 2.' },
    { q: 'Which statement about denosumab is correct?', o: ['It binds hydroxyapatite and persists for years', 'It inhibits farnesyl pyrophosphate synthase', 'Stopping it abruptly risks rebound vertebral fractures', 'It does not cause MRONJ', 'Drug holidays of 2 years are routinely recommended'], a: 2, e: 'Denosumab is an anti-RANKL antibody; its effect wears off within months and stopping it causes rebound bone loss and vertebral fractures.' },
    { q: 'A patient who had 66 Gy to the mandible 3 years ago needs a lower molar extraction. Which approach is best supported?', o: ['Routine hyperbaric oxygen before and after extraction', 'Extraction without precautions', 'Check dose map, consider alternatives, atraumatic extraction with primary closure and antibiotics per protocol; HBO not routinely indicated', 'Refuse treatment', 'Extract all remaining teeth at once'], a: 2, e: 'After HOPON, HBO is not routinely recommended for prevention. Assess site dose, consider RCT/decoronation, and if extracting, use atraumatic technique, primary closure and local protocols.' },
    { q: 'A 25-year-old has an expansile multilocular lesion of the anterior mandible crossing the midline. Biopsy shows multinucleated giant cells in a vascular stroma. What is the most important next investigation?', o: ['Serum calcium, phosphate, ALP and PTH', 'HLA typing', 'Serum ACE', 'Coeliac serology', 'Bone marrow biopsy'], a: 0, e: 'CGCG and brown tumour of hyperparathyroidism are histologically identical — check calcium, phosphate, ALP and PTH.' },
    { q: 'Which radiographic sign is an early feature of osteosarcoma of the jaw?', o: ['Onion-skin periosteal reaction', 'Symmetrical widening of the PDL space', 'Heart-shaped radiolucency', 'Ground-glass appearance', 'Knife-edge root resorption'], a: 1, e: 'Symmetrical PDL widening (Garrington sign) is an early sign; sunray spicules come later. Onion-skin suggests Ewing\'s or Garré\'s osteomyelitis.' },
    { q: 'An 8-year-old has a large dentigerous cyst around an unerupted lower second premolar. What is the most appropriate treatment?', o: ['Enucleation with the premolar', 'Marsupialisation/decompression to allow eruption', 'Resection', 'Observation only', 'Cryotherapy'], a: 1, e: 'In children, decompression/marsupialisation relieves pressure, shrinks the cyst and often allows the tooth to erupt.' }
  ]
});
