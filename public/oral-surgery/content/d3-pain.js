window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd3', num: '3', order: 3,
  title: 'Orofacial pain and TMD',
  summary: 'Diagnosing and managing orofacial pain and temporomandibular disorders: dental and mucosal causes, TMD, giant cell arteritis, primary headaches, trigeminal neuralgia and other neuropathic pains, neurological and functional disorders, pharmacology and the biopsychosocial approach.',
  topics: [
    {
      id: 'd3-guidance', title: 'Classifications, guidelines and pain science', code: '3.1',
      syllabus: [
        'ICOP 2020; DC/TMD (2014); NICE neuropathic pain (2020); NICE chronic pain NG193 (2021); FDS TMD guidance (2013); ICHD-3; FDS trigeminal neuralgia guidelines (2021); NICE headaches CG150; GIRFT painful TMD',
        'Range of typical and atypical presentations and differential diagnoses',
        'Applied anatomy and physiology: cranial nerves, pain pathways, receptors, action potentials, central sensitisation',
        'Aetiopathogenesis and natural history of conditions causing pain and neurological signs',
        'Terminology: allodynia, hyperalgesia, paraesthesia, dysaesthesia',
        'The biopsychosocial model of chronic pain'
      ],
      notes: `
<h3>Classifications and guidelines at a glance</h3>
<div class="tbl"><table><tr><th>Document</th><th>What it gives you</th></tr>
<tr><td>ICOP 2020 (International Classification of Orofacial Pain)</td><td>Diagnostic criteria for dentoalveolar, myofascial, TMJ, neuropathic (e.g. PTTN, BMS), and idiopathic (PIFP, PIDAP) orofacial pain</td></tr>
<tr><td>DC/TMD 2014</td><td>Axis I (physical diagnoses: myalgia, arthralgia, disc displacements, degenerative joint disease, headache attributed to TMD) and Axis II (psychosocial: PHQ-9, GAD-7, Graded Chronic Pain Scale)</td></tr>
<tr><td>ICHD-3</td><td>Criteria for migraine, tension-type headache, trigeminal autonomic cephalalgias, trigeminal neuralgia</td></tr>
<tr><td>NICE CG173 (updated 2020) — neuropathic pain</td><td>First line: choose one of amitriptyline, duloxetine, gabapentin or pregabalin; switch if ineffective. Carbamazepine for TN. Capsaicin cream for localised pain. Tramadol only for acute rescue</td></tr>
<tr><td>NICE NG193 (2021) — chronic primary pain</td><td>Offer exercise, psychological therapy (CBT, ACT), acupuncture; consider an antidepressant (amitriptyline, citalopram, duloxetine, fluoxetine, paroxetine, sertraline) in adults. <b>Do not start</b> opioids, gabapentinoids, NSAIDs, paracetamol, benzodiazepines, antiepileptics or local anaesthetics for chronic primary pain</td></tr>
<tr><td>FDS RCS 2021 — trigeminal neuralgia</td><td>MRI for all at diagnosis; carbamazepine/oxcarbazepine first line; early neurosurgical opinion when medication fails or is poorly tolerated</td></tr>
<tr><td>FDS 2013 TMD guidance &amp; GIRFT painful TMD pathway</td><td>Stepped care: most patients managed in primary care with explanation and self-management; refer for red flags, diagnostic doubt or failure of adequate conservative care</td></tr>
<tr><td>NICE CG150 — headaches in over 12s</td><td>Diagnosis and management of tension-type, migraine, cluster, medication-overuse headache</td></tr></table></div>
<h3>Types of pain</h3>
<ul>
<li><b>Nociceptive</b>: tissue damage activating nociceptors (pulpitis, arthralgia).</li>
<li><b>Neuropathic</b>: lesion or disease of the somatosensory nervous system (TN, PTTN, PHN).</li>
<li><b>Nociplastic</b>: altered nociception without clear tissue or nerve damage (many chronic myofascial TMD, fibromyalgia, possibly BMS).</li>
</ul>
<h3>Pain pathways</h3>
<ul>
<li>Nociceptors: <b>Aδ fibres</b> (myelinated, fast, sharp, well-localised "first pain") and <b>C fibres</b> (unmyelinated, slow, dull, poorly localised "second pain").</li>
<li>First-order neurons in the trigeminal (Gasserian) ganglion → <b>spinal trigeminal nucleus, subnucleus caudalis</b> ("medullary dorsal horn") → trigeminothalamic tract → ventral posteromedial (VPM) thalamus → somatosensory cortex, insula, anterior cingulate (affective component).</li>
<li>Action potentials: voltage-gated Na⁺ channels open (depolarisation), K⁺ efflux repolarises. Local anaesthetics and carbamazepine block Na⁺ channels.</li>
<li><b>Gate control theory</b> (Melzack &amp; Wall 1965): non-noxious Aβ input and descending pathways modulate transmission in the dorsal horn.</li>
<li><b>Peripheral sensitisation</b>: inflammatory mediators (bradykinin, prostaglandins, substance P, CGRP) lower nociceptor thresholds.</li>
<li><b>Central sensitisation</b>: increased excitability of central neurons (NMDA receptor activation, "wind-up"), expanded receptive fields, convergence → allodynia, hyperalgesia, referred pain (e.g. lower molar pain felt in the ear).</li>
</ul>
<h3>Terminology (IASP)</h3>
<div class="tbl"><table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Allodynia</td><td>Pain from a stimulus that does not normally provoke pain (light touch triggering pain)</td></tr>
<tr><td>Hyperalgesia</td><td>Increased pain from a stimulus that normally provokes pain</td></tr>
<tr><td>Paraesthesia</td><td>Abnormal sensation, not unpleasant (tingling, pins and needles)</td></tr>
<tr><td>Dysaesthesia</td><td>Unpleasant abnormal sensation, spontaneous or evoked (burning)</td></tr>
<tr><td>Hypoaesthesia / anaesthesia</td><td>Reduced / absent sensation</td></tr>
<tr><td>Anaesthesia dolorosa</td><td>Pain in an area that is numb (e.g. after ablative TN procedures)</td></tr>
<tr><td>Hyperpathia</td><td>Abnormally painful reaction, especially to repetitive stimuli, with raised threshold</td></tr></table></div>
<h3>Biopsychosocial model</h3>
<p>Engel (1977): pain results from biological, psychological (beliefs, mood, catastrophising, fear-avoidance, coping) and social (work, family, culture, litigation) factors. In chronic pain the psychosocial factors often drive disability and treatment response more than the biology. "Yellow flags" (e.g. belief that pain means harm, passive coping, low mood) predict chronicity. Management aims at function and quality of life, not just pain scores.</p>`
    },
    {
      id: 'd3-assess', title: 'Pain history, examination and red flags', code: '3.2',
      syllabus: [
        'Take a thorough pain history and understand its impact on quality of life',
        'Perform a relevant cranial nerve examination',
        'Recognise neurological red flags and emergencies requiring urgent liaison',
        'Apply the principles of diagnostic local anaesthetic blocks',
        'Formulate a diagnosis and management plan, managing expectations'
      ],
      notes: `
<h3>Pain history</h3>
<ul>
<li><b>SOCRATES</b>: site, onset, character, radiation, associations, time course (paroxysmal vs continuous, duration of attacks, daily pattern), exacerbating/relieving factors, severity (0–10).</li>
<li>Triggers (light touch, chewing, cold), autonomic features (lacrimation, rhinorrhoea), parafunction, sleep, previous treatments and response, medication history (including overuse).</li>
<li><b>Impact</b>: eating, speaking, sleep, work, mood, relationships. Tools: Graded Chronic Pain Scale, PHQ-9, GAD-7, pain diaries.</li>
<li>Patient's beliefs and expectations (fear of cancer is common).</li>
</ul>
<h3>Examination</h3>
<ul>
<li>Extraoral: facial asymmetry, swelling, skin lesions, TMJ (opening in mm, deviation/deflection, clicks, crepitus, tenderness), muscle palpation (masseter, temporalis), lymph nodes, temporal arteries in older patients.</li>
<li>Cranial nerves II–XII (see Foundations), especially V (all three divisions, corneal reflex, motor), VII, VIII, IX–XII.</li>
<li>Intraoral: teeth (caries, cracks, percussion, sensibility), periodontium, mucosa, salivary flow, occlusion.</li>
<li>Investigations as indicated: radiographs, MRI (TN, neurological signs), bloods (ESR/CRP in &gt;50s, haematinics, HbA1c in BMS).</li>
</ul>
<div class="box flag"><b>Red flags in orofacial pain</b>
<ul>
<li>Sensory loss or other cranial nerve signs (numbness, weakness, hearing loss, diplopia)</li>
<li>Trigeminal neuralgia-like pain in someone under ~40, bilateral, or with sensory deficit (MS, tumour)</li>
<li>New headache/facial pain over 50, jaw claudication, scalp tenderness, visual symptoms (GCA)</li>
<li>Progressive trismus, unilateral hearing loss/aural fullness, nasal obstruction or epistaxis (nasopharyngeal/infratemporal tumour)</li>
<li>Weight loss, night sweats, fever, lymphadenopathy, history of cancer, immunosuppression</li>
<li>Jaw pain on exertion relieved by rest (cardiac angina)</li>
<li>Thunderclap headache, headache worse on lying/coughing, papilloedema, new neurological deficit</li>
</ul></div>
<h3>Diagnostic local anaesthetic blocks</h3>
<ul>
<li>Purpose: localise the pain source (e.g. intraligamentary injection to identify a tooth; IANB vs infiltration; trigger point injection in myofascial pain; auriculotemporal block for TMJ pain).</li>
<li>Interpretation: complete relief suggests a peripheral source within the anaesthetised area. No relief suggests a central mechanism, referred pain, wrong site, or a nociplastic/psychological component. Placebo response and central sensitisation confound results — use with other findings, ideally blinded/controlled.</li>
<li>In TN, LA to a trigger zone temporarily abolishes paroxysms (useful but not diagnostic).</li>
</ul>
<h3>Formulating the plan</h3>
<p>Give a clear diagnosis and explanation, address fears (especially cancer), agree realistic goals (better function, fewer flares — not necessarily zero pain), discuss options and side effects, plan review, and involve other professionals early.</p>`
    },
    {
      id: 'd3-dental', title: 'Dentoalveolar and mucosal causes of pain', code: '3.3.1',
      syllabus: [
        'Exclude or confirm dental pathology: pulpitis, periapical periodontitis, cracked tooth syndrome, pericoronitis',
        'Periodontal disease; salivary gland disease; oral mucosal disease; maxillary sinusitis; cancer-related pain; osteonecrosis'
      ],
      notes: `
<div class="tbl"><table><tr><th>Condition</th><th>Characteristic features</th><th>Key tests</th></tr>
<tr><td>Reversible pulpitis</td><td>Sharp, provoked by cold/sweet, resolves within seconds of removing stimulus</td><td>Exaggerated, non-lingering cold response</td></tr>
<tr><td>Irreversible pulpitis</td><td>Spontaneous, lingering, throbbing, nocturnal, poorly localised, may refer to ear/temple/opposite jaw (same side)</td><td>Lingering response; heat may worsen, cold may relieve (late)</td></tr>
<tr><td>Periapical periodontitis / abscess</td><td>Continuous, well-localised, tooth feels "high", tender to bite</td><td>TTP, non-vital, radiograph (may be normal early), swelling</td></tr>
<tr><td>Cracked tooth syndrome</td><td>Sharp pain on biting, especially on <b>release</b>; cold sensitivity; hard to locate</td><td>Bite test on individual cusps (Tooth Slooth), transillumination, magnification</td></tr>
<tr><td>Pericoronitis</td><td>Pain around partially erupted 8, swelling, trismus, bad taste, ± lymphadenopathy, fever</td><td>Inflamed operculum, trauma from upper 8</td></tr>
<tr><td>Periodontal abscess / perio-endo lesion</td><td>Localised swelling, deep pocket, vital tooth (perio abscess)</td><td>Probing, vitality, radiographs</td></tr>
<tr><td>Salivary obstruction / sialadenitis</td><td>Meal-time pain and swelling (stone), constant pain with pus (infection)</td><td>Bimanual palpation, duct flow, US</td></tr>
<tr><td>Mucosal disease</td><td>Soreness/burning — ulcers, erosive lichen planus, candidiasis, geographic tongue</td><td>Examination, swab, biopsy</td></tr>
<tr><td>Maxillary sinusitis</td><td>Dull ache in several upper posterior teeth, worse bending forward, nasal congestion/discharge, recent cold</td><td>Several teeth TTP but vital; tender maxilla; CBCT/OM view</td></tr>
<tr><td>Cancer-related pain</td><td>Progressive, constant, ± numbness (perineural invasion), ulcer/mass, loose teeth, trismus, otalgia</td><td>Examination, imaging, biopsy — urgent referral</td></tr>
<tr><td>Osteonecrosis (MRONJ/ORN)</td><td>Exposed bone, pain, swelling, discharge, history of antiresorptives/radiotherapy</td><td>History, imaging</td></tr></table></div>
<p>Referred dental pain: pain from lower molars can be felt in the ear; upper teeth refer to the temple/orbit. Pain usually doesn't cross the midline.</p>
<div class="box pearl"><b>Exam pearl</b>Always exclude dental causes first — but avoid repeated irreversible dental treatment for pain that doesn't match a dental pattern. Persistent pain after RCT/extraction with normal findings suggests PIDAP or PTTN.</div>`
    },
    {
      id: 'd3-tmd', title: 'Temporomandibular disorders', code: '3.3.2',
      syllabus: [
        'Diagnose and know management options for pain-related TMD, disc displacement TMD, and degenerative joint TMD',
        'Know and apply the evidence base for bite-raising appliances',
        'Know the role and indications for physiotherapy, TMJ arthrocentesis and steroid/LA injection, and botulinum toxin'
      ],
      notes: `
<h3>Epidemiology</h3>
<p>Common (~5–12% have symptoms needing care), peak 20–40 years, women ~2:1. Most cases are self-limiting or fluctuate; only a minority become chronic. Risk factors for chronicity: widespread pain, poor sleep, anxiety/depression, catastrophising, parafunction.</p>
<h3>DC/TMD Axis I diagnoses</h3>
<div class="tbl"><table><tr><th>Group</th><th>Diagnosis</th><th>Key features</th></tr>
<tr><td rowspan="3">Pain-related</td><td>Myalgia (local, myofascial, myofascial with referral)</td><td>Pain in masticatory muscles reproduced by palpation/opening; referral beyond muscle boundary in myofascial pain with referral</td></tr>
<tr><td>Arthralgia</td><td>Joint pain reproduced by palpation or movement</td></tr>
<tr><td>Headache attributed to TMD</td><td>Temporal headache modified by jaw function and reproduced by temporalis palpation</td></tr>
<tr><td rowspan="4">Intra-articular</td><td>Disc displacement with reduction</td><td>Click on opening and closing (reciprocal click); normal range of movement. ± intermittent locking</td></tr>
<tr><td>Disc displacement without reduction, with limited opening ("closed lock")</td><td>History of click that stopped, then sudden limited opening (&lt;40 mm including overbite), deflection to affected side, limited contralateral excursion</td></tr>
<tr><td>Degenerative joint disease</td><td>Crepitus; radiological flattening, erosions, osteophytes, sclerosis (CBCT/CT)</td></tr>
<tr><td>Subluxation</td><td>Condyle passes the eminence on wide opening and needs a manoeuvre to close</td></tr></table></div>
<p>Axis II screens psychosocial status: Graded Chronic Pain Scale, PHQ-9, GAD-7, PHQ-15, Jaw Functional Limitation Scale, Oral Behaviours Checklist.</p>
<div class="box flag"><b>When TMD-like symptoms are something else</b><ul><li>Progressive trismus, numbness, hearing loss, nasal symptoms, lymphadenopathy (tumour)</li><li>Jaw claudication, temporal headache, age &gt;50 (GCA)</li><li>Occlusal change — progressive open bite (condylar resorption, RA), progressive crossbite/asymmetry (condylar hyperplasia, osteochondroma)</li><li>Swelling, fever (septic arthritis), recent trauma (fracture)</li><li>Systemic arthritis (RA, psoriatic, ankylosing spondylitis)</li></ul></div>
<h3>Management — stepped care</h3>
<ol>
<li><b>Explain and reassure</b>: common, not serious, usually improves; aim for self-management.</li>
<li><b>Self-care</b>: soft diet for a period, avoid wide opening, gum chewing and nail biting; support the jaw when yawning; jaw rest posture ("lips together, teeth apart, tongue on palate"); habit reversal for daytime clenching; heat or cold packs; massage; gentle exercises; sleep hygiene.</li>
<li><b>Simple analgesia</b>: short-term NSAIDs (oral or topical ibuprofen gel), paracetamol.</li>
<li><b>Splints</b>: full-coverage hard acrylic stabilisation splint (e.g. Michigan) worn at night; soft splints for short-term use. Cochrane and other reviews find evidence for splints is <b>weak/inconclusive</b> — some patients benefit, and they protect teeth from bruxism. Avoid partial-coverage splints (can cause occlusal changes).</li>
<li><b>Physiotherapy</b>: exercises, manual therapy, postural correction.</li>
<li><b>Psychological therapy</b>: CBT, relaxation, biofeedback — good evidence, especially in chronic cases.</li>
<li><b>Medication</b> for persistent myalgia: low-dose amitriptyline (10–25 mg at night, titrated). Short courses of diazepam for acute muscle spasm only.</li>
<li><b>Avoid</b> irreversible occlusal adjustment or orthodontics to "treat" TMD — no evidence.</li>
</ol>
<h3>Interventional options (secondary care)</h3>
<ul>
<li><b>Arthrocentesis</b>: lavage of the upper joint space via two needles with saline/Hartmann's (± steroid or hyaluronic acid). Indications: closed lock (disc displacement without reduction) not responding to conservative care, painful arthralgia/effusion, degenerative joint disease. Removes inflammatory mediators and breaks adhesions.</li>
<li><b>Intra-articular steroid/LA injection</b>: inflammatory arthralgia, degenerative disease. Limit repeat steroid injections (cartilage damage).</li>
<li><b>Botulinum toxin A</b> into masseter/temporalis: off-label, mixed evidence for myofascial pain; reduces bruxism forces. Risks: weakness, altered smile (risorius), dysphagia (rare), reduced condylar/mandibular bone density with repeated use.</li>
<li><b>Arthroscopy</b>, open joint surgery (disc repositioning, discectomy), and <b>total joint replacement</b> (end-stage degeneration, ankylosis, failed surgery) for selected patients.</li>
</ul>`
    },
    {
      id: 'd3-headache', title: 'Giant cell arteritis and primary headaches', code: '3.3.3–3.3.4',
      syllabus: [
        'Theoretical understanding and recognition of giant cell arteritis; signpost appropriately (ED, rheumatology)',
        'Theoretical understanding of migraine, tension-type headache, temporal arteritis, trigeminal autonomic cephalalgias; identify and refer (neurology, headache clinic)'
      ],
      notes: `
<h3>Giant cell (temporal) arteritis</h3>
<div class="box flag"><b>Medical emergency — risk of permanent blindness</b>
<p><b>Features</b>: age ≥50, new headache (often temporal), scalp tenderness (pain combing hair), <b>jaw claudication</b> (most specific symptom — pain in masseter on chewing that builds and eases with rest), visual disturbance (amaurosis fugax, diplopia), polymyalgia rheumatica (shoulder/hip girdle stiffness), fever, weight loss, fatigue. Thickened, tender, pulseless temporal artery.</p>
<p><b>Action (BSR 2020)</b>: same-day referral to a GCA fast-track/rheumatology or ED. Start high-dose glucocorticoid immediately (prednisolone 40–60 mg daily; IV methylprednisolone if visual loss) — don't wait for tests. Bloods: ESR, CRP (usually raised), FBC (thrombocytosis). Temporal artery ultrasound (halo sign) or biopsy (within ~2 weeks of steroid start). Same-day ophthalmology for visual symptoms.</p></div>
<h3>Migraine</h3>
<ul>
<li>Recurrent attacks lasting 4–72 h; at least two of: unilateral, pulsating, moderate/severe, worse with routine activity; plus nausea/vomiting or photophobia and phonophobia.</li>
<li>Aura in about a third (visual zig-zags, scotoma, sensory change) lasting 5–60 min before headache.</li>
<li>Acute: aspirin/NSAID/paracetamol, triptans (e.g. sumatriptan), antiemetic. Prophylaxis: propranolol, topiramate (teratogenic), amitriptyline, candesartan; CGRP monoclonal antibodies and botulinum toxin (chronic migraine) in specialist care.</li>
<li><b>Medication-overuse headache</b>: simple analgesics on ≥15 days/month, or triptans/opioids/combinations on ≥10 days/month.</li>
</ul>
<h3>Tension-type headache</h3>
<p>Bilateral, pressing/tightening (non-pulsating), mild–moderate, not worsened by activity, no nausea (may have photophobia <i>or</i> phonophobia). Treat with simple analgesia (limit days of use); acupuncture or amitriptyline for frequent episodes. Overlaps with TMD myalgia.</p>
<h3>Trigeminal autonomic cephalalgias (TACs)</h3>
<div class="tbl"><table><tr><th>Type</th><th>Attack duration / frequency</th><th>Notes and treatment</th></tr>
<tr><td>Cluster headache</td><td>15–180 min, up to 8/day, in bouts lasting weeks; circadian timing (often wakes at night)</td><td>Severe unilateral orbital/temporal pain, ipsilateral lacrimation, red eye, rhinorrhoea, ptosis/miosis; restless/agitated. Men, smokers, alcohol trigger. Acute: <b>100% oxygen 12–15 L/min</b> via non-rebreathe mask, SC sumatriptan 6 mg or nasal triptan. Prevention: verapamil (ECG monitoring)</td></tr>
<tr><td>Paroxysmal hemicrania</td><td>2–30 min, many per day</td><td>Absolutely responsive to <b>indometacin</b></td></tr>
<tr><td>SUNCT / SUNA</td><td>1–600 seconds, many per day</td><td>Short-lasting unilateral neuralgiform attacks with conjunctival injection and tearing; mimics TN. Lamotrigine</td></tr>
<tr><td>Hemicrania continua</td><td>Continuous with exacerbations</td><td>Indometacin-responsive</td></tr></table></div>
<p>Cluster headache is often mistaken for upper molar pain — check for autonomic features and the stereotyped timing. Refer to neurology/headache clinic.</p>
<div class="box flag"><b>Headache red flags (refer urgently)</b><ul><li>Thunderclap (peak within a minute) — subarachnoid haemorrhage</li><li>New headache with fever, neck stiffness, rash</li><li>New neurological deficit, confusion, papilloedema</li><li>Headache worse lying down, on coughing/straining, or waking the patient</li><li>New headache in someone with cancer, HIV/immunosuppression, or age &gt;50</li></ul></div>`
    },
    {
      id: 'd3-tn', title: 'Trigeminal and glossopharyngeal neuralgia', code: '3.3.5',
      syllabus: [
        'Diagnose, investigate and initially manage trigeminal neuralgia and glossopharyngeal neuralgia',
        'Know the roles of microvascular decompression, radiofrequency ablation, gamma knife radiosurgery, glycerol/alcohol injection and balloon compression'
      ],
      notes: `
<h3>Trigeminal neuralgia (ICHD-3)</h3>
<ul>
<li>Recurrent paroxysms of <b>unilateral</b> facial pain in one or more trigeminal divisions (V2 and V3 commonest; V1 rare alone), lasting a <b>fraction of a second to 2 minutes</b>.</li>
<li>Severe, electric shock-like, shooting, stabbing.</li>
<li><b>Triggered by innocuous stimuli</b> in the distribution: light touch, washing, shaving, talking, eating, brushing teeth, a breeze.</li>
<li>Refractory period after attacks; may have remissions for months. Some have concomitant continuous background pain.</li>
<li>Normal neurological examination in classical/idiopathic TN.</li>
<li>Incidence ~4–13 per 100,000/year; women &gt; men; usually over 50.</li>
</ul>
<div class="tbl"><table><tr><th>Subtype</th><th>Cause</th></tr>
<tr><td>Classical</td><td>Neurovascular compression (usually superior cerebellar artery) with morphological change of the trigeminal root on MRI</td></tr>
<tr><td>Secondary</td><td>Multiple sclerosis (demyelinating plaque in the pons), cerebellopontine angle tumour (meningioma, acoustic neuroma, epidermoid), AVM</td></tr>
<tr><td>Idiopathic</td><td>No abnormality on MRI or electrophysiology</td></tr></table></div>
<div class="box flag"><b>Suspect secondary TN if</b>: age under ~40, bilateral symptoms, sensory loss, other cranial nerve signs, hearing loss, poor response to carbamazepine.</div>
<p><b>Investigation</b>: MRI brain with trigeminal sequences for all patients (FDS 2021). Baseline bloods before carbamazepine: FBC, U&amp;E (sodium), LFTs. Consider HLA-B*15:02 testing in patients of Han Chinese, Thai or other Southeast Asian ancestry (carbamazepine SJS/TEN risk).</p>
<h3>Medical management</h3>
<div class="box dose"><b>First line: carbamazepine</b>
<ul><li>Start 100 mg once or twice daily; increase by 100–200 mg every few days until pain-free (usual 200 mg three to four times daily; maximum 1.2–1.6 g/day)</li><li>Once pain-free for some weeks, try slow reduction to the lowest effective dose</li><li>Adverse effects: drowsiness, dizziness, ataxia, diplopia, nausea, <b>hyponatraemia</b>, rash (SJS/TEN), leucopenia/agranulocytosis, hepatotoxicity, teratogenicity</li><li>Enzyme inducer: reduces efficacy of combined oral contraceptive, warfarin, DOACs and others</li><li>Monitor FBC, sodium and LFTs</li></ul></div>
<ul>
<li><b>Oxcarbazepine</b>: equally effective first line, better tolerated, fewer interactions; more hyponatraemia.</li>
<li>Second line/adjuncts: lamotrigine (slow titration — rash), baclofen, gabapentin, pregabalin.</li>
<li>Acute severe crisis (can't eat or drink): admission, IV fluids, IV phenytoin/fosphenytoin or lidocaine infusion; LA blocks.</li>
</ul>
<h3>Surgical management (refer to neurosurgery early if drugs fail or aren't tolerated)</h3>
<div class="tbl"><table><tr><th>Procedure</th><th>Notes</th></tr>
<tr><td>Microvascular decompression (MVD)</td><td>Posterior fossa craniotomy; vessel separated from the nerve root with Teflon. Best long-term results (~70% pain-free at 10 years) and preserves sensation. Risks: hearing loss, CSF leak, stroke, small mortality (~0.2–0.5%). Only option that addresses cause in classical TN</td></tr>
<tr><td>Radiofrequency thermocoagulation</td><td>Percutaneous via foramen ovale to the Gasserian ganglion; selective heat lesion. Numbness, dysaesthesia, corneal anaesthesia (V1), recurrence</td></tr>
<tr><td>Glycerol rhizolysis / alcohol injection</td><td>Chemical lesion of ganglion or peripheral branch; shorter relief, numbness</td></tr>
<tr><td>Balloon compression</td><td>Percutaneous compression of the ganglion; good for V1 (spares corneal reflex more); masseter weakness, numbness</td></tr>
<tr><td>Gamma knife stereotactic radiosurgery</td><td>Non-invasive focused radiation to the root entry zone; delayed onset (weeks–months), numbness; suits older/frail patients</td></tr></table></div>
<p>Ablative procedures risk numbness and <b>anaesthesia dolorosa</b>; pain recurrence is common over time.</p>
<h3>Glossopharyngeal neuralgia</h3>
<ul>
<li>Paroxysmal unilateral pain in the ear, tonsillar fossa, base of tongue, angle of jaw/pharynx.</li>
<li>Triggered by swallowing, talking, coughing, yawning. Vagal involvement can cause bradycardia, syncope (vagoglossopharyngeal neuralgia).</li>
<li>Topical LA to the tonsillar fossa abolishes attacks (diagnostic aid).</li>
<li>MRI to exclude tumour/compression; consider Eagle syndrome (elongated styloid process). Treat as TN (carbamazepine, oxcarbazepine); MVD for refractory cases.</li>
</ul>`
    },
    {
      id: 'd3-neuropathic', title: 'Other neuropathic and idiopathic facial pain', code: '3.3.5',
      syllabus: [
        'Persistent idiopathic facial/dentoalveolar pain disorders',
        'Postherpetic neuralgia',
        'Oral dysaesthesia (burning mouth)',
        'Post-traumatic trigeminal neuropathic pain'
      ],
      notes: `
<h3>Persistent idiopathic facial pain (PIFP)</h3>
<ul>
<li>ICOP: persistent facial and/or oral pain, recurring daily for &gt;2 h/day for &gt;3 months; poorly localised, not following a nerve distribution; dull, aching or nagging; normal examination and investigations.</li>
<li>Often associated with anxiety, depression, other chronic pain conditions.</li>
<li>Management: diagnosis and explanation, <b>avoid further invasive dental/surgical treatment</b>, TCAs (amitriptyline, nortriptyline), duloxetine, gabapentinoids, CBT, MDT pain management.</li>
</ul>
<h3>Persistent idiopathic dentoalveolar pain (PIDAP; formerly atypical odontalgia)</h3>
<ul>
<li>Persistent unilateral intraoral pain localised to a tooth or extraction site, &gt;2 h/day for &gt;3 months, without a cause on examination or imaging.</li>
<li>Often starts after dental treatment (RCT, extraction) and leads to repeated unnecessary procedures that worsen it.</li>
<li>Management: stop the cycle of dental intervention; topical agents (lidocaine, capsaicin in a stent), TCAs, gabapentinoids, duloxetine, CBT.</li>
</ul>
<h3>Postherpetic neuralgia (PHN)</h3>
<ul>
<li>Pain persisting or recurring ≥3 months after herpes zoster, in the affected dermatome (V1 most often in the face).</li>
<li>Burning, aching, allodynia, itching. Risk factors: older age, severe acute pain and rash, ophthalmic zoster.</li>
<li>Prevention: antivirals within 72 h of rash (aciclovir, valaciclovir, famciclovir); shingles vaccination (UK programme for older adults and immunosuppressed).</li>
<li>Treatment: amitriptyline, gabapentin/pregabalin, duloxetine; topical <b>lidocaine 5% plasters</b>, capsaicin cream.</li>
</ul>
<h3>Burning mouth syndrome / oral dysaesthesia</h3>
<ul>
<li>ICOP: intraoral burning or dysaesthesia recurring daily for &gt;2 h/day for &gt;3 months, with no clinically evident causative lesion. Typically tongue tip/lateral borders, lips, palate; often bilateral; may worsen through the day; eating may help. Often dysgeusia and subjective dry mouth.</li>
<li>Most common in peri- and post-menopausal women.</li>
<li><b>Exclude secondary causes</b>: haematinic deficiency (B12, folate, ferritin), diabetes (HbA1c), hypothyroidism, candidiasis, hyposalivation, lichen planus, geographic tongue, allergy/contact reactions, drugs (ACE inhibitors), parafunction (tongue thrusting), reflux.</li>
<li>Management: reassure (not cancer, not infectious), CBT (good evidence), topical <b>clonazepam</b> (0.5–1 mg tablet sucked and spat out 2–3 times daily) or low-dose systemic clonazepam, gabapentin, amitriptyline; avoid irritants (spicy foods, alcohol, SLS toothpaste, cinnamon). Alpha-lipoic acid has limited evidence.</li>
</ul>
<h3>Painful post-traumatic trigeminal neuropathy (PTTN)</h3>
<ul>
<li>ICOP: facial/oral pain following and caused by trauma to the trigeminal nerve, with other signs of nerve dysfunction (numbness, allodynia, hyperalgesia), developing within 6 months of the injury and confined to the nerve's distribution.</li>
<li>Causes: third molar surgery, implants, endodontic overfill or sodium hypochlorite extrusion, LA injection, trauma, orthognathic surgery.</li>
<li>Features: burning, shooting, "pins and needles", numbness with pain, allodynia; major impact on eating, speaking, kissing, shaving, mood.</li>
<li><b>Prevention and early action</b>: risk assessment and imaging before surgery; if an implant or endodontic material encroaches on the canal and causes new numbness, remove it within ~30 hours; consider early steroids/NSAIDs.</li>
<li>Established pain: topical agents (lidocaine 5% plasters/patches, capsaicin), systemic neuropathic agents (amitriptyline, pregabalin, gabapentin, duloxetine), psychological support/CBT. Nerve repair is mainly for sensory loss (lingual nerve, early) — less effective for established pain.</li>
</ul>`
    },
    {
      id: 'd3-neuro', title: 'Neurological dysfunction and functional disorders', code: '3.3.6–3.3.7',
      syllabus: [
        'Smell and taste disorders: anosmia, dysgeusia',
        'Facial nerve palsy; hypoglossal nerve palsy',
        'Subjective halitosis, subjective xerostomia, subjective hypersalivation — investigate, diagnose and provide initial management'
      ],
      notes: `
<h3>Smell and taste disorders</h3>
<ul>
<li>Taste: anterior two-thirds of tongue — chorda tympani (VII); posterior third — glossopharyngeal (IX); epiglottis — vagus (X). Most complaints of lost "taste" are really loss of smell (flavour).</li>
<li><b>Anosmia/hyposmia causes</b>: post-viral (including COVID-19), chronic rhinosinusitis/polyps, head injury (shearing of olfactory filaments through the cribriform plate), neurodegenerative disease (Parkinson's, Alzheimer's — early sign), tumours (olfactory groove meningioma), Kallmann syndrome, ageing, smoking.</li>
<li><b>Dysgeusia causes</b>: drugs (metronidazole, clarithromycin, metformin, ACE inhibitors, lithium, terbinafine, chemotherapy), radiotherapy, zinc or B12 deficiency, hyposalivation, candidiasis, chorda tympani or lingual nerve injury, Bell's palsy, hypothyroidism, BMS, poor oral hygiene, GORD.</li>
<li>Investigate: history, ENT and neurological examination, smell identification tests, bloods (B12, zinc, glucose, thyroid), imaging (MRI/CT) if neurological signs or unexplained anosmia. Refer ENT/neurology; olfactory training helps post-viral loss.</li>
</ul>
<h3>Facial nerve palsy</h3>
<div class="tbl"><table><tr><th>Feature</th><th>LMN (e.g. Bell's)</th><th>UMN (e.g. stroke)</th></tr>
<tr><td>Forehead</td><td>Affected (can't raise eyebrow)</td><td>Spared (bilateral cortical supply)</td></tr>
<tr><td>Eye closure</td><td>Weak; Bell's phenomenon (eye rolls up)</td><td>Usually preserved</td></tr>
<tr><td>Other</td><td>Hyperacusis, taste loss, reduced tearing depending on level</td><td>Limb weakness, speech disturbance (FAST)</td></tr></table></div>
<ul>
<li><b>Bell's palsy</b> (idiopathic, onset over &lt;72 h, often post-auricular pain): <b>prednisolone within 72 h</b> (e.g. 50 mg daily for 10 days, or 60 mg for 5 days then reduce by 10 mg/day); eye protection (lubricating drops by day, ointment and taping at night); refer if no improvement by ~3 weeks or atypical features. ~70–85% recover fully.</li>
<li><b>Ramsay Hunt syndrome</b> (VZV of geniculate ganglion): palsy with vesicles in the ear canal/palate, otalgia, vertigo, hearing loss — antiviral + steroid; poorer prognosis.</li>
<li>Other causes: parotid malignancy (progressive, partial, with a mass), stroke, trauma, cholesteatoma/otitis media, Lyme disease, sarcoidosis (Heerfordt syndrome), Guillain–Barré (bilateral), MS, Melkersson–Rosenthal syndrome.</li>
<li><b>Iatrogenic (dental)</b>: IANB deposited into the parotid (needle too posterior) → immediate LMN palsy lasting a few hours. Reassure, protect the eye (tape/patch), document, review until resolved.</li>
<li>Grading: House–Brackmann I (normal) to VI (total paralysis).</li>
</ul>
<h3>Hypoglossal nerve palsy</h3>
<ul>
<li>Tongue deviates <b>towards</b> the affected side on protrusion; LMN lesions cause wasting and fasciculation of the ipsilateral tongue; dysarthria.</li>
<li>Causes: skull base or nasopharyngeal tumours, metastases, <b>carotid artery dissection</b> (with neck pain, Horner's syndrome — emergency), surgical injury (submandibular gland excision, carotid endarterectomy, neck dissection), motor neurone disease (bulbar palsy, bilateral), trauma, infection.</li>
<li>Urgent imaging (MRI skull base/neck, CT/MR angiography if dissection suspected) and neurology/ENT referral.</li>
</ul>
<h3>Functional (subjective) disorders</h3>
<h4>Subjective halitosis</h4>
<ul>
<li><b>Genuine halitosis</b>: physiological (morning breath) or pathological — oral (tongue coating, periodontitis, food stagnation, dentures — volatile sulphur compounds), ENT (tonsilloliths, sinusitis), rarely systemic (ketoacidosis — fruity; renal failure — ammoniacal/fishy; liver failure — fetor hepaticus).</li>
<li><b>Pseudohalitosis</b>: no malodour detectable; improves with reassurance and education.</li>
<li><b>Halitophobia</b>: persists despite treatment and reassurance — psychological referral.</li>
<li>Assessment: organoleptic test (gold standard), halimeter/gas chromatography (OralChroma). Management: oral hygiene, tongue cleaning, periodontal treatment, zinc/CPC/chlorhexidine rinses, treat ENT causes; counselling for pseudohalitosis.</li>
</ul>
<h4>Subjective xerostomia</h4>
<ul>
<li>Complaint of dry mouth with normal measured flow. <b>Hyposalivation</b>: unstimulated whole saliva ≤0.1 ml/min, stimulated ≤0.5–0.7 ml/min.</li>
<li>Causes of symptom with normal flow: anxiety/depression, mouth breathing, altered saliva composition, drugs, BMS.</li>
<li>Management: measure flow to reassure, address anxiety and drugs, sips of water, sugar-free gum, saliva substitutes.</li>
</ul>
<h4>Subjective hypersalivation</h4>
<ul>
<li>Feeling of excess saliva with normal flow — often reduced swallowing frequency/efficiency, anxiety, neurological disease, ill-fitting dentures.</li>
<li>True sialorrhoea: clozapine, cholinergic drugs, Parkinson's, cerebral palsy, MND (poor swallow).</li>
<li>Management: measure flow, reassurance, swallowing assessment (SLT), treat cause; anticholinergics (hyoscine patch, glycopyrronium) or botulinum toxin to glands for true drooling.</li>
</ul>`
    },
    {
      id: 'd3-drugs', title: 'Pharmacology of orofacial pain', code: '3.4',
      syllabus: [
        'Role and pharmacological principles of orofacial pain medications; indications, adverse effects and interactions',
        'Risks of analgesia in orofacial pain',
        'Antiepileptics (gabapentin, pregabalin, carbamazepine, oxcarbazepine, lamotrigine); antidepressants (amitriptyline, nortriptyline, duloxetine, sertraline, fluoxetine); benzodiazepines (clonazepam, diazepam); baclofen; topical capsaicin; botulinum toxin A; lidocaine and benzydamine'
      ],
      notes: `
<div class="tbl"><table><tr><th>Drug</th><th>Mechanism</th><th>Typical use and dosing</th><th>Key adverse effects / interactions</th></tr>
<tr><td>Amitriptyline</td><td>TCA: noradrenaline and serotonin reuptake inhibition; Na⁺ channel block</td><td>Chronic myofascial TMD, PIFP, PIDAP, PHN, PTTN. Start 10 mg at night; increase by 10 mg every 1–2 weeks to 25–75 mg</td><td>Dry mouth, drowsiness, constipation, urinary retention, blurred vision, weight gain, postural hypotension, QT prolongation; dangerous in overdose (limit quantities); avoid after recent MI, arrhythmia, glaucoma. Serotonin syndrome with tramadol/SSRIs</td></tr>
<tr><td>Nortriptyline</td><td>TCA (metabolite of amitriptyline)</td><td>As amitriptyline</td><td>Fewer anticholinergic and sedative effects</td></tr>
<tr><td>Duloxetine</td><td>SNRI</td><td>Neuropathic pain, comorbid depression; 30–60 mg daily</td><td>Nausea, insomnia, dizziness, hyponatraemia, raised BP, hepatotoxicity; withdrawal; serotonin syndrome; bleeding with NSAIDs</td></tr>
<tr><td>Sertraline, fluoxetine</td><td>SSRIs</td><td>Comorbid depression/anxiety; little direct analgesic effect</td><td>GI upset, hyponatraemia, sexual dysfunction, GI bleeding with NSAIDs/anticoagulants, serotonin syndrome; fluoxetine inhibits CYP2D6</td></tr>
<tr><td>Gabapentin</td><td>Binds α2δ subunit of voltage-gated Ca²⁺ channels</td><td>Neuropathic pain, TN adjunct, BMS. 300 mg day 1, 300 mg bd day 2, 300 mg tds day 3; titrate to max 3.6 g/day (lower start in elderly)</td><td>Drowsiness, dizziness, ataxia, weight gain, oedema; renal dose adjustment; misuse/dependence (Schedule 3 CD); respiratory depression with opioids</td></tr>
<tr><td>Pregabalin</td><td>α2δ ligand</td><td>Neuropathic pain. 75 mg bd, titrate to max 300 mg bd</td><td>As gabapentin; more predictable absorption; misuse; possible small teratogenic risk (MHRA 2022)</td></tr>
<tr><td>Carbamazepine</td><td>Na⁺ channel blocker</td><td>First line TN. 100 mg od–bd, titrate (usual 200 mg tds–qds)</td><td>See TN topic: hyponatraemia, SJS/TEN (HLA-B*15:02), blood dyscrasias, hepatotoxicity, enzyme induction, teratogenicity</td></tr>
<tr><td>Oxcarbazepine</td><td>Na⁺ channel blocker</td><td>TN first line alternative. 300 mg bd, titrate</td><td>Hyponatraemia (more), rash, dizziness; fewer interactions</td></tr>
<tr><td>Lamotrigine</td><td>Na⁺ channel blocker</td><td>TN second line, SUNCT. Slow titration</td><td>Rash/SJS (especially with fast titration or valproate)</td></tr>
<tr><td>Clonazepam</td><td>Benzodiazepine (GABA-A potentiation)</td><td>BMS: 0.5–1 mg sucked and spat (topical) or low-dose at night</td><td>Sedation, falls, dependence, withdrawal</td></tr>
<tr><td>Diazepam</td><td>Benzodiazepine</td><td>Short course for acute TMD muscle spasm (e.g. 2–5 mg at night ≤2 weeks)</td><td>Dependence, sedation, driving impairment</td></tr>
<tr><td>Baclofen</td><td>GABA-B agonist</td><td>TN adjunct; 5 mg tds, titrate</td><td>Sedation, weakness, confusion; seizures/hallucinations if stopped abruptly</td></tr>
<tr><td>Topical capsaicin</td><td>TRPV1 agonist — defunctionalises C-fibre nociceptors, depletes substance P</td><td>Localised neuropathic pain (PHN), PTTN; 0.025–0.075% cream</td><td>Burning on application; keep away from eyes</td></tr>
<tr><td>Botulinum toxin A</td><td>Cleaves SNAP-25 → blocks acetylcholine release (and pain neuropeptides)</td><td>Myofascial TMD/bruxism (off-label), chronic migraine, recurrent dislocation (lateral pterygoid), sialorrhoea, Frey's syndrome; lasts ~3–4 months</td><td>Local weakness, asymmetric smile, dysphagia, bone density loss with repeated masseter use</td></tr>
<tr><td>Lidocaine</td><td>Na⁺ channel blocker</td><td>Diagnostic blocks; topical 5% ointment or plasters for PHN/PTTN; acute TN crisis (IV, specialist)</td><td>Minimal topical systemic effects</td></tr>
<tr><td>Benzydamine (Difflam)</td><td>NSAID with local anaesthetic properties</td><td>Mucositis, ulcers, painful mucosal conditions; 0.15% rinse or spray</td><td>Stinging (dilute)</td></tr></table></div>
<h3>Analgesics in chronic orofacial pain</h3>
<ul>
<li>Paracetamol and NSAIDs: useful for acute nociceptive pain (pulpitis, acute TMD arthralgia) but little role in chronic primary or neuropathic pain. NSAID risks: GI bleeding, renal injury, cardiovascular events.</li>
<li><b>Opioids</b>: avoid in chronic orofacial pain — tolerance, dependence, opioid-induced hyperalgesia, overdose risk (NICE NG193).</li>
<li>Medication overuse headache with frequent analgesic use.</li>
</ul>
<h3>Interactions to know</h3>
<ul>
<li>Carbamazepine induces CYP3A4: ↓ combined oral contraceptive (advise alternative contraception), warfarin, DOACs, midazolam.</li>
<li>Tramadol + TCAs/SSRIs/SNRIs → serotonin syndrome and seizures.</li>
<li>Gabapentinoids + opioids/benzodiazepines → respiratory depression.</li>
<li>TCAs + adrenaline: interaction is theoretical at dental doses — caution with large volumes.</li>
</ul>`
    },
    {
      id: 'd3-psych', title: 'Counselling, psychology and multidisciplinary pain care', code: '3.5–3.6',
      syllabus: [
        'Counsel patients with chronic orofacial pain; refer to other disciplines when indicated',
        'Principles of neurotoxin injection to muscles of mastication and focal neuropathic areas; TMJ arthrocentesis and steroid/LA injection',
        'Assess patients who may be anxious, depressed or at risk of suicide; know when to seek mental health advice',
        'Role of non-pharmacological methods: interpersonal strategies, clinical psychology, physiotherapy, neurosurgery, OMFS',
        'Identify and manage patients with substance misuse through liaison with other professionals'
      ],
      notes: `
<h3>Counselling the patient with chronic pain</h3>
<ul>
<li>Validate the pain — it is real even when tests are normal. Explain the mechanism in plain language (e.g. "the volume control for pain is turned up").</li>
<li>Address fears (cancer, serious disease) explicitly; explain why further dental treatment won't help if that's the case.</li>
<li>Set realistic shared goals: better function and quality of life, fewer flare-ups.</li>
<li>Encourage self-management: pacing, sleep hygiene, exercise, relaxation, stress management; written information.</li>
<li>Explain medication purpose (e.g. amitriptyline for pain modulation, not depression), expected time to benefit (weeks), side effects, and titration.</li>
</ul>
<h3>Psychological approaches</h3>
<ul>
<li><b>CBT</b>: identify and change unhelpful thoughts (catastrophising) and behaviours (avoidance).</li>
<li><b>Acceptance and commitment therapy (ACT)</b>, mindfulness, biofeedback, habit reversal (parafunction).</li>
<li>Pain management programmes (MDT: psychologist, physiotherapist, pain physician).</li>
</ul>
<h3>Mental health and suicide risk</h3>
<ul>
<li>Chronic pain, especially TN and PTTN, is associated with depression and increased suicide risk.</li>
<li>Screen: PHQ-9 (depression; item 9 asks about self-harm thoughts), GAD-7 (anxiety).</li>
<li>Ask directly about suicidal thoughts — asking does not increase risk. Explore plans, intent, means, protective factors.</li>
<li>Immediate risk: do not leave the patient alone; contact the crisis team/ED/GP urgently. Lower risk: involve the GP, provide crisis contacts (e.g. Samaritans 116 123, NHS 111 mental health option), document.</li>
<li>Seek mental health team advice for significant depression, anxiety, health anxiety, somatic symptom disorder, eating disorders, or when psychological factors dominate.</li>
</ul>
<h3>Procedures — principles</h3>
<ul>
<li><b>Botulinum toxin</b> to masseter/temporalis: identify muscle bulk on clenching, inject at several points away from the parotid duct and risorius; typical total doses vary by product. Focal neuropathic injection (e.g. PTTN, TN) is specialist and off-label.</li>
<li><b>TMJ arthrocentesis</b>: under LA ± sedation; landmarks along the canthotragal line (posterior point ~10 mm anterior to tragus and 2 mm below the line; anterior point ~20 mm anterior and 10 mm below); two needles into the upper joint space; lavage 100–300 ml; optional steroid or hyaluronic acid. Risks: facial nerve weakness (temporary), haematoma, infection, ear injury.</li>
</ul>
<h3>Multidisciplinary care</h3>
<p>Oral medicine, oral surgery, OMFS (TMJ surgery), neurology/headache clinic, neurosurgery (TN), pain medicine, clinical psychology, physiotherapy, rheumatology, ENT, GP and mental health services.</p>
<h3>Substance misuse</h3>
<ul>
<li>Chronic pain patients may misuse opioids, gabapentinoids, benzodiazepines or alcohol. Warning signs: early repeat requests, lost prescriptions, multiple prescribers, requests for specific drugs.</li>
<li>Screen alcohol with AUDIT-C; give brief advice; check the Summary Care Record/medication history.</li>
<li>Avoid prescribing drugs of misuse where possible; liaise with the GP and drug and alcohol services; non-judgemental approach.</li>
<li>Oral effects of substance misuse: caries (methadone syrup, methamphetamine), bruxism (ecstasy), palatal perforation (cocaine), poor healing, bleeding (liver disease), BBV risk.</li>
</ul>`
    }
  ],
  cards: [
    ['Allodynia vs hyperalgesia?', 'Allodynia: pain from a normally non-painful stimulus. Hyperalgesia: increased pain from a normally painful stimulus.'],
    ['Paraesthesia vs dysaesthesia?', 'Paraesthesia: abnormal but not unpleasant sensation. Dysaesthesia: unpleasant abnormal sensation.'],
    ['Where do trigeminal pain fibres synapse centrally?', 'Spinal trigeminal nucleus, subnucleus caudalis ("medullary dorsal horn").'],
    ['NICE first-line drugs for neuropathic pain (non-TN)?', 'Any one of amitriptyline, duloxetine, gabapentin or pregabalin; switch if ineffective.'],
    ['NICE NG193: drugs not to start for chronic primary pain?', 'Opioids, gabapentinoids, NSAIDs, paracetamol, benzodiazepines, antiepileptics, local anaesthetics (antidepressants may be considered).'],
    ['DC/TMD: features of disc displacement without reduction with limited opening?', 'Previous click that stopped, sudden limited opening (&lt;40 mm), deflection to affected side, reduced contralateral excursion.'],
    ['Sound associated with degenerative joint disease?', 'Crepitus.'],
    ['Evidence for stabilisation splints in TMD?', 'Weak/inconclusive — may help some patients and protect against bruxism; avoid irreversible occlusal adjustment.'],
    ['Indication for TMJ arthrocentesis?', 'Closed lock (disc displacement without reduction) or painful arthralgia not responding to conservative care.'],
    ['Most specific symptom of giant cell arteritis?', 'Jaw claudication.'],
    ['Immediate management of suspected GCA without visual loss?', 'Start prednisolone 40–60 mg daily and refer same day to GCA fast-track/rheumatology; ESR/CRP; ultrasound or biopsy.'],
    ['Acute treatment of cluster headache?', '100% oxygen at 12–15 L/min via non-rebreathe mask, or SC sumatriptan 6 mg.'],
    ['Which TAC is absolutely responsive to indometacin?', 'Paroxysmal hemicrania (and hemicrania continua).'],
    ['Duration of trigeminal neuralgia paroxysms (ICHD-3)?', 'A fraction of a second up to 2 minutes.'],
    ['Commonest vessel compressing the trigeminal root in classical TN?', 'Superior cerebellar artery.'],
    ['Features suggesting secondary TN?', 'Age &lt;40, bilateral pain, sensory loss, other cranial nerve signs, poor carbamazepine response — think MS or tumour.'],
    ['Bloods to check on carbamazepine?', 'FBC, sodium (U&amp;E) and LFTs.'],
    ['Genetic test before carbamazepine in Han Chinese/Thai patients?', 'HLA-B*15:02 (SJS/TEN risk).'],
    ['Surgical TN procedure with best long-term pain relief and preserved sensation?', 'Microvascular decompression (~70% pain-free at 10 years).'],
    ['What abolishes glossopharyngeal neuralgia attacks diagnostically?', 'Topical local anaesthetic to the tonsillar fossa.'],
    ['ICOP time criteria for PIFP and BMS?', 'Daily for more than 2 hours per day for more than 3 months.'],
    ['Old name for PIDAP?', 'Atypical odontalgia.'],
    ['Secondary causes to exclude in burning mouth?', 'Haematinic deficiency, diabetes, hypothyroidism, candidiasis, hyposalivation, lichen planus, geographic tongue, allergy, ACE inhibitors.'],
    ['Topical clonazepam regimen for BMS?', '0.5–1 mg tablet sucked (held in the mouth) then spat out, 2–3 times daily.'],
    ['ICOP onset criterion for PTTN?', 'Pain develops within 6 months of trauma to the trigeminal nerve.'],
    ['Forehead involvement: LMN vs UMN facial palsy?', 'LMN (Bell\'s) involves the forehead; UMN (stroke) spares it.'],
    ['Steroid for Bell\'s palsy?', 'Prednisolone within 72 h — e.g. 50 mg daily for 10 days (or 60 mg for 5 days then taper); plus eye protection.'],
    ['Ramsay Hunt syndrome?', 'VZV reactivation in the geniculate ganglion: facial palsy, vesicles in ear/palate, otalgia, vertigo, hearing loss.'],
    ['Facial palsy straight after an IANB — cause?', 'LA deposited into the parotid gland; transient — protect the eye and reassure.'],
    ['Hypoglossal palsy plus neck pain and Horner\'s?', 'Carotid artery dissection — emergency imaging.'],
    ['Unstimulated salivary flow threshold for hyposalivation?', '≤0.1 ml/min (stimulated ≤0.5–0.7 ml/min).'],
    ['Gold standard test for halitosis?', 'Organoleptic assessment.'],
    ['Mechanism of gabapentin and pregabalin?', 'Bind the α2δ subunit of voltage-gated calcium channels.'],
    ['Mechanism of botulinum toxin A?', 'Cleaves SNAP-25, preventing acetylcholine release at the neuromuscular junction.'],
    ['Mechanism of capsaicin?', 'TRPV1 agonist; defunctionalises C-fibre nociceptors and depletes substance P.']
  ],
  mcqs: [
    { q: 'A 68-year-old reports new right temporal headache, pain in the jaw muscles on chewing that eases with rest, and a brief episode of blurred vision yesterday. What is the most appropriate action?', o: ['Prescribe a stabilisation splint', 'Start high-dose steroids and refer urgently the same day', 'Prescribe amitriptyline and review in 4 weeks', 'Arrange routine MRI', 'Prescribe NSAIDs and review in 2 weeks'], a: 1, e: 'Jaw claudication, new headache over 50 and visual symptoms suggest giant cell arteritis. Start high-dose glucocorticoid immediately (IV methylprednisolone if visual loss) and refer same day, with ophthalmology input.' },
    { q: 'A 35-year-old has unilateral electric-shock pains in the V2 distribution triggered by touch, and reduced sensation over the cheek on examination. What is the most important next step?', o: ['Start carbamazepine and review in 3 months', 'MRI brain', 'Extract the upper molars', 'Refer for microvascular decompression', 'Prescribe gabapentin'], a: 1, e: 'Young age and sensory loss are red flags for secondary TN (e.g. MS or a tumour). MRI is essential; FDS 2021 recommends MRI for all patients with TN anyway.' },
    { q: 'Which statement about carbamazepine in trigeminal neuralgia is correct?', o: ['It is a GABA-B agonist', 'It inhibits liver enzymes and raises warfarin levels', 'It commonly causes hyponatraemia and requires blood monitoring', 'It must be started at 1200 mg daily', 'It has no effect on oral contraceptives'], a: 2, e: 'Carbamazepine blocks sodium channels, induces liver enzymes (reducing warfarin and COC efficacy), and can cause hyponatraemia, blood dyscrasias and hepatotoxicity — so FBC, sodium and LFTs are monitored. Start low and titrate.' },
    { q: 'A patient has had clicking in the left TMJ for years. Two days ago the clicking stopped and they can now open only 28 mm, deviating to the left. What is the most likely diagnosis?', o: ['Myofascial pain', 'Disc displacement with reduction', 'Disc displacement without reduction with limited opening', 'Degenerative joint disease', 'Subluxation'], a: 2, e: 'Loss of a previous click with sudden limited opening and deflection to the affected side is the classic "closed lock" — disc displacement without reduction with limited opening.' },
    { q: 'A 55-year-old woman has bilateral burning of the tongue for 8 months with normal mucosa. Which investigation is most important first?', o: ['MRI brain', 'FBC, ferritin, B12, folate and HbA1c', 'Tongue biopsy', 'Sialography', 'Patch testing only'], a: 1, e: 'Before diagnosing primary burning mouth syndrome, exclude secondary causes such as haematinic deficiency and diabetes (and candidiasis, hyposalivation, medication).' },
    { q: 'A man has severe left orbital pain lasting 45 minutes, waking him at the same time each night, with a watering left eye and runny nose. He paces around during attacks. What is the best acute treatment?', o: ['Carbamazepine', 'High-flow 100% oxygen', 'Indometacin', 'Oral sumatriptan only after 2 hours', 'Paracetamol and codeine'], a: 1, e: 'This is cluster headache. Acute treatment is 100% oxygen at 12–15 L/min via a non-rebreathe mask or SC sumatriptan; verapamil is used for prevention.' },
    { q: 'NICE NG193 for chronic primary pain recommends which of the following can be considered?', o: ['Pregabalin', 'Long-term codeine', 'An antidepressant such as amitriptyline or duloxetine', 'Diazepam', 'Regular NSAIDs'], a: 2, e: 'For chronic primary pain, NICE advises exercise, psychological therapy and acupuncture, and allows consideration of an antidepressant. It advises against starting opioids, gabapentinoids, NSAIDs, benzodiazepines and others.' },
    { q: 'Immediately after an inferior alveolar nerve block, a patient cannot close their eye or raise the eyebrow on that side. What is the cause and management?', o: ['Stroke — call 999', 'LA in the parotid affecting the facial nerve — protect the eye and reassure', 'Bell\'s palsy — start prednisolone', 'Allergic reaction — give adrenaline', 'Hypoglossal nerve injury — refer'], a: 1, e: 'A needle placed too posteriorly deposits LA in the parotid, temporarily blocking the facial nerve. It resolves within hours as the LA wears off; protect the cornea and document.' },
    { q: 'Six weeks after implant placement in the lower premolar region a patient has burning pain, allodynia and numbness of the lower lip. What is the likely diagnosis?', o: ['Burning mouth syndrome', 'Trigeminal neuralgia', 'Painful post-traumatic trigeminal neuropathy', 'Persistent idiopathic facial pain', 'Postherpetic neuralgia'], a: 2, e: 'Pain with sensory dysfunction in a nerve territory developing within 6 months of trauma (implant surgery) fits PTTN. Ideally an implant causing new numbness is removed within ~30 hours.' }
  ]
});
