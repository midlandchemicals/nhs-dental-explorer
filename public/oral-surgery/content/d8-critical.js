window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd8', num: '8', order: 8,
  title: 'Critical conditions and emergencies',
  summary: 'Recognising the acutely unwell patient and managing medical emergencies and critical conditions: cardiac, respiratory, metabolic and neurological emergencies, haemorrhage, spreading infection and sepsis, displaced objects, failed extractions, suspected malignancy and trigeminal nerve injury.',
  topics: [
    {
      id: 'd8-principles', title: 'Recognising the acutely ill patient; drugs and equipment', code: '8.1–8.2',
      syllabus: [
        'Common medical emergencies in dental treatment and their pathophysiology',
        'How and when to access training',
        'Recognise and assess the acutely unwell patient, including physical examination',
        'Identify risk factors and institute preventive strategies',
        'Selection and maintenance of emergency drugs and equipment; written documentation'
      ],
      notes: `
<h3>ABCDE assessment</h3>
<div class="tbl"><table><tr><th>Step</th><th>Look for</th><th>Act</th></tr>
<tr><td>Airway</td><td>Talking? Noisy breathing (stridor, gurgling, snoring), swelling, foreign body</td><td>Head tilt–chin lift/jaw thrust, suction, remove object, airway adjunct, call for help</td></tr>
<tr><td>Breathing</td><td>Rate (normal 12–20), effort, SpO₂, wheeze, cyanosis</td><td>Oxygen, sit upright, salbutamol for wheeze</td></tr>
<tr><td>Circulation</td><td>Pulse rate/rhythm, BP, capillary refill (&lt;2 s), skin colour and temperature</td><td>Lie flat and raise legs if hypotensive (unless breathless), control bleeding</td></tr>
<tr><td>Disability</td><td>ACVPU (Alert, new Confusion, Voice, Pain, Unresponsive), pupils, blood glucose</td><td>Treat hypoglycaemia; recovery position if unconscious and breathing</td></tr>
<tr><td>Exposure</td><td>Rash, swelling, bleeding, temperature</td><td>Maintain dignity and warmth</td></tr></table></div>
<p>Call for help early (999/emergency team). Reassess after each intervention.</p>
<h3>NEWS2</h3>
<p>Scores respiratory rate, SpO₂ (scale 1, or scale 2 for hypercapnic patients), supplemental oxygen, systolic BP, pulse, consciousness (ACVPU) and temperature. Aggregate <b>5–6</b> → urgent response (key threshold for sepsis); <b>≥7</b> → emergency response; a single parameter scoring 3 → urgent review.</p>
<h3>Prevention</h3>
<ul>
<li>Thorough, updated medical history; check the patient has taken usual medicines (and eaten — diabetics) and brought inhalers/GTN.</li>
<li>Recognise high-risk patients: cardiac disease, poorly controlled asthma, epilepsy, diabetes, adrenal insufficiency, allergy history.</li>
<li>Anxiety management (reduces syncope, angina, asthma triggers), supine positioning for injections, appropriate LA doses, early morning appointments for some.</li>
<li>Baseline observations (BP, pulse, SpO₂, glucose) for at-risk patients and sedation.</li>
</ul>
<h3>Emergency drugs (Resuscitation Council UK — primary dental care)</h3>
<div class="tbl"><table><tr><th>Drug</th><th>Use</th></tr>
<tr><td>Adrenaline 1 mg/ml (1:1000) for IM injection (auto-injectors or ampoules)</td><td>Anaphylaxis</td></tr>
<tr><td>Aspirin 300 mg dispersible</td><td>Suspected myocardial infarction</td></tr>
<tr><td>Glucagon 1 mg for IM injection</td><td>Hypoglycaemia in uncooperative/unconscious patient</td></tr>
<tr><td>Oral glucose (gel, tablets, powder)</td><td>Hypoglycaemia in a cooperative patient</td></tr>
<tr><td>Glyceryl trinitrate spray 400 µg/dose</td><td>Angina, suspected MI</td></tr>
<tr><td>Midazolam oromucosal (buccal) 10 mg</td><td>Prolonged or repeated seizures</td></tr>
<tr><td>Oxygen (portable cylinder, 15 L/min)</td><td>Most emergencies</td></tr>
<tr><td>Salbutamol inhaler 100 µg/actuation + spacer</td><td>Asthma, bronchospasm</td></tr></table></div>
<p>Plus flumazenil where sedation is provided.</p>
<h3>Equipment</h3>
<p>AED (adult and paediatric pads), portable oxygen with regulator, non-rebreathe masks with reservoir (adult and child), self-inflating bag-valve-mask with reservoir and masks (sizes 0–4), pocket mask, oropharyngeal airways (sizes 0–4), portable suction with Yankauer tips, spacer, blood glucose meter, pulse oximeter, syringes/needles, PPE. Store together, clearly labelled; documented weekly checks of expiry dates, oxygen level and AED status.</p>
<h3>Training and documentation</h3>
<ul>
<li>Whole-team medical emergency and CPR training at least annually, with scenario practice in the clinical environment; ILS for sedation teams. GDC recommends medical emergencies as core CPD (at least 10 hours per 5-year cycle).</li>
<li>Document every event: timeline, observations, drugs (name, dose, route, time, batch), interventions, staff involved, handover, outcome. Complete an incident report/significant event analysis, debrief the team, restock.</li>
<li>Hand over to paramedics with <b>SBAR</b> (Situation, Background, Assessment, Recommendation) and a written summary.</li>
</ul>`
    },
    {
      id: 'd8-cardiac', title: 'Collapse, chest pain, stroke and cardiac arrest', code: '8.3.1',
      syllabus: [
        'Acute angina and myocardial infarction',
        'Stroke',
        'Cardiac and respiratory arrest',
        'Vasovagal syncope'
      ],
      notes: `
<h3>Vasovagal syncope</h3>
<ul>
<li>Most common emergency in dental practice. Triggered by anxiety, pain, sight of needles/blood, upright posture, fasting, heat.</li>
<li>Prodrome: light-headedness, nausea, pallor, sweating, yawning; weak slow pulse; brief loss of consciousness (may have a few jerks — convulsive syncope).</li>
<li>Management: <b>lie flat and raise the legs</b>, loosen tight clothing, oxygen if slow to recover, reassure; recovery within 1–2 minutes. Give oral glucose once recovered if fasted.</li>
<li>If not recovering quickly — check breathing and pulse (cardiac arrest?), blood glucose, consider arrhythmia, stroke, hypoglycaemia, adrenal crisis.</li>
</ul>
<h3>Angina and acute coronary syndrome</h3>
<ul>
<li>Crushing central chest pain, may radiate to arm, jaw or neck; breathlessness, nausea, sweating. MI pain lasts longer and isn't relieved by GTN; may be atypical (elderly, diabetics, women).</li>
</ul>
<div class="box dose"><b>Management</b><ul><li>Stop treatment, sit the patient comfortably (semi-upright)</li><li><b>GTN spray 400 µg</b>: 1–2 sprays under the tongue; can repeat after a few minutes (avoid if systolic BP &lt;90 or recent PDE5 inhibitor)</li><li>If pain persists or MI suspected: <b>call 999</b>, give <b>aspirin 300 mg</b> chewed or dispersed (unless allergic)</li><li>Oxygen only if SpO₂ &lt;94% (high-flow oxygen in normoxic MI can cause harm)</li><li>Monitor and be ready for cardiac arrest (AED)</li></ul></div>
<h3>Stroke</h3>
<ul>
<li><b>FAST</b>: Face drooping, Arm weakness, Speech difficulty, Time to call 999. Also sudden visual loss, ataxia, vertigo, confusion, severe headache.</li>
<li>Check blood glucose (hypoglycaemia mimics stroke). Note the time of onset (thrombolysis within 4.5 h; thrombectomy in selected patients up to 24 h).</li>
<li>Nil by mouth (aspiration risk); oxygen if SpO₂ &lt;94%; recovery position if unconscious. Don't give aspirin pre-hospital (could be haemorrhagic).</li>
<li>Symptoms that have resolved (TIA) still need urgent same-day medical assessment.</li>
</ul>
<h3>Cardiac arrest — adult basic life support (RCUK 2021)</h3>
<ol>
<li>Check for danger; unresponsive and not breathing normally (agonal gasps are not normal breathing) → <b>call 999</b> (speaker phone) and send for the <b>AED</b>.</li>
<li>Lie the dental chair flat (stool under the headrest); start chest compressions: centre of chest, depth <b>5–6 cm</b>, rate <b>100–120/min</b>, full recoil.</li>
<li><b>30 compressions : 2 breaths</b> (pocket mask or bag-valve-mask with oxygen).</li>
<li>Attach the AED as soon as it arrives; follow prompts; minimise interruptions; swap compressors every 2 minutes.</li>
<li>Continue until paramedics take over or the patient shows signs of life.</li>
</ol>
<h3>Paediatric BLS</h3>
<ul>
<li>Open airway; <b>5 rescue breaths</b>, then 15 compressions : 2 breaths.</li>
<li>Depth at least one-third of chest depth (≈4 cm infant, ≈5 cm child), rate 100–120/min. Infants: two-thumb encircling technique.</li>
<li>Use paediatric AED pads/attenuator if available (adult pads are acceptable if not).</li>
</ul>
<div class="box pearl"><b>Exam pearl</b>Respiratory arrest commonly precedes cardiac arrest in children and in sedation-related events — open the airway and ventilate with oxygen early.</div>`
    },
    {
      id: 'd8-respiratory', title: 'Asthma, choking and anaphylaxis', code: '8.3.1',
      syllabus: [
        'Acute asthma',
        'Choking and airway obstruction',
        'Pharmacology and adverse effects of emergency drugs; IM injection in adults and children'
      ],
      notes: `
<h3>Acute asthma</h3>
<div class="tbl"><table><tr><th>Severity</th><th>Features</th></tr>
<tr><td>Moderate</td><td>Increasing symptoms, can speak in sentences, PEF &gt;50–75% best</td></tr>
<tr><td>Acute severe</td><td>Can't complete sentences, RR ≥25, HR ≥110, PEF 33–50%</td></tr>
<tr><td>Life-threatening</td><td>SpO₂ &lt;92%, silent chest, cyanosis, poor respiratory effort, exhaustion, confusion, arrhythmia, hypotension, PEF &lt;33%</td></tr></table></div>
<div class="box dose"><b>Management</b><ul><li>Sit upright; let the patient use their own inhaler or give <b>salbutamol 100 µg/puff via spacer — 4 puffs, then 2 puffs every 2 minutes up to 10 puffs</b></li><li>Oxygen to keep SpO₂ 94–98%</li><li>Call 999 if severe/life-threatening features or no response; continue salbutamol while waiting</li><li>If wheeze is part of anaphylaxis (sudden onset with swelling, rash, hypotension) — give IM adrenaline</li></ul></div>
<p>Prevention: ensure patients bring their inhaler; avoid NSAIDs in NSAID-sensitive asthmatics; manage anxiety.</p>
<h3>Choking (adult and child over 1 year)</h3>
<ol>
<li>Mild obstruction (can cough, speak, breathe): encourage coughing; stay with them.</li>
<li>Severe (ineffective cough, can't speak/breathe): up to <b>5 back blows</b> between the shoulder blades, then up to <b>5 abdominal thrusts</b>; repeat cycles.</li>
<li>If unconscious: call 999, start CPR (look in the mouth before rescue breaths and remove visible objects).</li>
<li>Infants (&lt;1 year): 5 back blows then 5 <b>chest</b> thrusts (no abdominal thrusts).</li>
</ol>
<p>Anyone who received abdominal thrusts should be medically assessed afterwards (internal injury). In the dental chair: sit the patient up, encourage coughing; prevent with throat packs, rubber dam and floss ligatures.</p>
<h3>Anaphylaxis (RCUK 2021)</h3>
<ul>
<li>Sudden onset of <b>airway</b> (swelling, hoarseness, stridor) and/or <b>breathing</b> (wheeze, breathlessness) and/or <b>circulation</b> (hypotension, tachycardia, collapse) problems, usually with skin/mucosal changes (urticaria, flushing, angioedema) — skin signs may be absent.</li>
<li>Dental triggers: latex, chlorhexidine, antibiotics (penicillins), NSAIDs, (very rarely) LA.</li>
</ul>
<div class="box dose"><b>IM adrenaline 1 mg/ml (1:1000) — anterolateral thigh</b><ul><li>Adult and child &gt;12 years: <b>500 µg (0.5 ml)</b></li><li>Child 6–12 years: <b>300 µg (0.3 ml)</b></li><li>Child 6 months–6 years: <b>150 µg (0.15 ml)</b></li><li>Infant &lt;6 months: 100–150 µg (0.1–0.15 ml)</li><li><b>Repeat after 5 minutes</b> if no improvement</li></ul></div>
<p>Also: call 999, remove trigger, lie flat with legs raised (sit up if breathing is difficult; left lateral in pregnancy), high-flow oxygen 15 L/min, monitor, CPR if arrest. Antihistamines and steroids are not part of the immediate emergency treatment. Refer to an allergy clinic afterwards; report suspected drug reactions (Yellow Card).</p>
<h3>Hyperventilation (panic)</h3>
<p>Rapid breathing, tingling around the mouth and fingers, carpopedal spasm (respiratory alkalosis lowers ionised calcium), dizziness, chest tightness. Reassure, coach slow breathing; exclude asthma, hypoglycaemia, cardiac causes. Paper-bag rebreathing is not recommended.</p>`
    },
    {
      id: 'd8-metabolic', title: 'Seizures, hypoglycaemia and adrenal crisis', code: '8.3.1',
      syllabus: [
        'Epileptic seizures and status epilepticus',
        'Hypoglycaemia',
        'Addisonian (adrenal) crisis'
      ],
      notes: `
<h3>Seizures</h3>
<ul>
<li>Tonic–clonic: aura, sudden LOC, stiffening (tonic) then jerking (clonic), cyanosis, incontinence, tongue biting, post-ictal drowsiness/confusion.</li>
<li><b>Status epilepticus</b>: a seizure lasting ≥5 minutes, or repeated seizures without regaining consciousness between them.</li>
<li>Triggers in dental settings: missed medication, fasting/hypoglycaemia, flickering lights, anxiety, sleep deprivation, LA toxicity.</li>
</ul>
<div class="box dose"><b>Management</b><ul><li>Note the time; protect from injury (remove instruments, lower chair); don't restrain or put anything in the mouth</li><li>Oxygen; monitor airway</li><li>If seizure lasts ≥5 minutes or recurs without recovery: <b>buccal midazolam</b> — adult and child ≥10 years <b>10 mg</b>; 5–9 years 7.5 mg; 1–4 years 5 mg; 3–11 months 2.5 mg (between gum and cheek)</li><li>Call 999 for status, first seizure, injury, difficulty breathing, or incomplete recovery</li><li>After the seizure: recovery position, check airway and <b>blood glucose</b>, reassure, don't continue treatment that day; escort home</li></ul></div>
<h3>Hypoglycaemia (blood glucose &lt;4 mmol/l)</h3>
<ul>
<li>Patients on insulin or sulfonylureas, especially if they've skipped a meal or exercised.</li>
<li>Signs: sweating, pallor, tremor, hunger, palpitations, irritability, confusion, aggression, slurred speech, drowsiness → seizure, coma.</li>
</ul>
<div class="box dose"><b>Management</b><ul><li><b>Conscious and cooperative</b>: 15–20 g fast-acting glucose (e.g. 4–5 glucose tablets, glucose gel, 150–200 ml fruit juice); recheck after 10–15 minutes; repeat up to 3 times; then give long-acting carbohydrate (sandwich, biscuits)</li><li><b>Uncooperative or unconscious</b>: <b>glucagon 1 mg IM</b> (child under 8 years or &lt;25 kg: 500 µg); recovery position; call 999. Glucagon may take 10 minutes and works poorly in starvation, alcohol-related or prolonged hypoglycaemia</li><li>Glucose gel on the buccal mucosa only if the patient can protect their airway</li></ul></div>
<h3>Adrenal (Addisonian) crisis</h3>
<ul>
<li>At risk: Addison's disease, hypopituitarism, and anyone on long-term glucocorticoids (e.g. ≥5 mg prednisolone daily for ≥4 weeks, or high-dose inhaled steroids) — they can't increase cortisol under stress (surgery, infection, trauma).</li>
<li>Signs: pallor, dizziness, weakness, confusion, nausea/vomiting, abdominal pain, hypotension, collapse, hypoglycaemia.</li>
<li>Management: lie flat with legs raised, oxygen, <b>call 999</b>, <b>hydrocortisone 100 mg IM</b> (from the patient's emergency kit — not part of the standard dental drug list), treat hypoglycaemia.</li>
<li>Prevention: identify patients (NHS Steroid Emergency Card, 2020 national alert); follow Society for Endocrinology guidance on stress-dose steroid cover (minor procedures under LA often need little or no extra; GA/major surgery needs IV/IM hydrocortisone); never advise stopping steroids.</li>
</ul>`
    },
    {
      id: 'd8-haemorrhage', title: 'Haemorrhage from the mouth and jaws', code: '8.3.2',
      syllabus: [
        'Recognise and manage haemorrhage arising from the mouth and jaws',
        'Recognise when local measures are not controlling haemorrhage and refer appropriately'
      ],
      notes: `
<h3>Assessment</h3>
<ul>
<li>ABCDE: airway (blood, clots, expanding floor-of-mouth haematoma), signs of hypovolaemia (tachycardia, hypotension, pallor, sweating, confusion).</li>
<li>History: timing (primary, reactionary, secondary), procedure, anticoagulants/antiplatelets, liver disease, alcohol, bleeding disorders (haemophilia, von Willebrand disease), thrombocytopenia (leukaemia, chemotherapy), family history.</li>
<li>Clear clots with suction and gauze to find the source: soft tissue edge, bony socket wall, or a named vessel (inferior alveolar, greater palatine).</li>
</ul>
<h3>Local measures — stepwise</h3>
<ol>
<li><b>Pressure</b>: damp rolled gauze bitten on firmly for 10–20 minutes with the patient sitting up.</li>
<li><b>LA with adrenaline</b> infiltrated around the site (vasoconstriction and comfort).</li>
<li><b>Suture</b>: horizontal mattress across the socket to compress the margins.</li>
<li><b>Haemostatic agents</b> in the socket: oxidised regenerated cellulose (Surgicel), gelatin sponge, collagen, fibrin sealant; <b>bone wax</b> for bleeding from bone; tranexamic acid (soaked gauze, mouthwash, or oral 1 g three times daily).</li>
<li><b>Diathermy</b> for soft tissue bleeding points; ligation of a vessel.</li>
</ol>
<h3>Investigations</h3>
<p>FBC (platelets, Hb), coagulation screen (PT/INR, APTT, fibrinogen), group and save/cross-match if significant loss; LFTs.</p>
<div class="box flag"><b>Refer to hospital (OMFS/ED) if</b><ul><li>Bleeding continues despite local measures</li><li>Signs of hypovolaemia or significant blood loss</li><li>Expanding haematoma (floor of mouth, neck) or airway risk</li><li>Known or suspected bleeding disorder, liver disease, or over-anticoagulation (high INR)</li><li>Pulsatile/arterial bleeding or suspected vascular malformation</li></ul></div>
<h3>Hospital management</h3>
<ul>
<li>Correct coagulopathy: warfarin — vitamin K and prothrombin complex concentrate; dabigatran — idarucizumab; apixaban/rivaroxaban — andexanet alfa (or PCC); platelet transfusion; factor concentrates (haemophilia); desmopressin (mild haemophilia A, type 1 vWD).</li>
<li>Intravenous fluids/blood products; interventional radiology (embolisation) or vessel ligation for uncontrolled arterial bleeding or AVM.</li>
</ul>
<h3>Prevention and aftercare advice</h3>
<p>Plan treatment for patients at risk (SDCEP anticoagulant guidance). Post-extraction advice: don't rinse for 24 h, avoid hot drinks, alcohol, smoking, strenuous exercise; bite on a damp gauze for 20 minutes if bleeding restarts; emergency contact number.</p>`
    },
    {
      id: 'd8-infection', title: 'Spreading orofacial infection and sepsis', code: '8.2, 8.3.2',
      syllabus: [
        'Recognise and diagnose spreading infection in the orofacial region; understand the importance of timely management',
        'Sepsis — recognise potentially life-threatening events and institute referral/management'
      ],
      notes: `
<div class="box flag"><b>Red flags of spreading odontogenic infection — same-day hospital referral</b>
<ul><li>Rapidly spreading swelling, especially bilateral submandibular/floor of mouth or periorbital</li><li><b>Trismus</b> (masticator space involvement)</li><li><b>Dysphagia, odynophagia, drooling</b>, inability to swallow saliva</li><li>Voice change ("hot potato"), <b>stridor</b>, breathlessness, inability to lie flat</li><li>Raised floor of mouth, elevated or protruding tongue</li><li>Systemic upset: fever &gt;38 °C, tachycardia, rigors, dehydration</li><li>Eye closed by swelling, visual change, proptosis</li><li>Immunocompromise, diabetes</li></ul></div>
<h3>Key spreading infections</h3>
<ul>
<li><b>Ludwig's angina</b>: bilateral cellulitis of submandibular, sublingual and submental spaces, usually from lower molars. Woody floor of mouth, tongue pushed up and back, airway obstruction.</li>
<li><b>Parapharyngeal/retropharyngeal</b> spread → mediastinitis (chest pain, breathlessness).</li>
<li><b>Cavernous sinus thrombosis</b> (from upper teeth via valveless facial/ophthalmic veins): proptosis, chemosis, ophthalmoplegia (III, IV, VI), V1/V2 sensory loss, becoming bilateral.</li>
<li><b>Necrotising fasciitis</b>, brain abscess, Lemierre's syndrome (internal jugular vein thrombophlebitis — <i>Fusobacterium necrophorum</i>).</li>
</ul>
<h3>Hospital management</h3>
<ol>
<li><b>Airway first</b>: senior anaesthetic/ENT input; awake fibreoptic intubation or tracheostomy if threatened.</li>
<li>IV antibiotics (e.g. co-amoxiclav, or benzylpenicillin + metronidazole; clindamycin in penicillin allergy) per local policy; IV fluids; analgesia; ± dexamethasone for airway oedema.</li>
<li>CT neck with contrast to identify collections.</li>
<li><b>Incision and drainage</b> of all involved spaces (intraoral/extraoral) with drains, and <b>removal of the source</b> (extraction).</li>
<li>Pus for culture; monitor in HDU if airway concern.</li>
</ol>
<h3>Primary care dental abscess</h3>
<ul>
<li>Drainage is the key treatment: incise a fluctuant swelling, extract the tooth, or extirpate the pulp.</li>
<li>Antibiotics only if spreading infection, systemic involvement or immunocompromise: amoxicillin 500 mg three times daily (or phenoxymethylpenicillin) for 5 days; add/alternative metronidazole 400 mg three times daily; review in 2–3 days.</li>
<li>Refer immediately if red flags.</li>
</ul>
<h3>Sepsis</h3>
<ul>
<li>Life-threatening organ dysfunction caused by a dysregulated host response to infection. Septic shock: hypotension needing vasopressors with raised lactate despite fluids.</li>
<li>Think sepsis in any patient with infection who looks unwell: confusion, RR ≥25, SBP ≤90, HR &gt;130, SpO₂ needing oxygen, mottled or ashen skin, non-blanching rash, not passing urine. Use NEWS2 — a score of 5 or more with suspected infection needs urgent assessment.</li>
<li><b>In dental practice</b>: recognise, call 999 or arrange immediate transfer, give oxygen if needed, hand over with SBAR. Don't delay by prescribing oral antibiotics and sending home.</li>
<li><b>Sepsis Six</b> (hospital, within 1 hour): give oxygen, take blood cultures, give IV antibiotics, give IV fluids, measure lactate (and FBC), monitor urine output.</li>
</ul>`
    },
    {
      id: 'd8-displaced', title: 'Displaced objects and failed extractions', code: '8.3.2, 8.5',
      syllabus: [
        'Displaced instruments, equipment, teeth or pieces of teeth — identify where they have gone, communicate with the patient and manage',
        'Failed extractions — manage and communicate without denigrating the previous clinician'
      ],
      notes: `
<h3>Prevention</h3>
<p>Rubber dam, gauze throat screens, floss ligatures on small instruments and implant drivers, secure grip on crowns/teeth, careful patient positioning, adequate suction and assistance.</p>
<h3>Lost object in the airway or gut</h3>
<ol>
<li>Stop; encourage the patient to turn the head to the side and cough; look and suction.</li>
<li>If choking with severe obstruction → choking algorithm (back blows, abdominal thrusts).</li>
<li>Inform the patient honestly.</li>
<li><b>Signs of aspiration</b> (coughing fit, wheeze, breathlessness, stridor) or uncertainty → urgent referral to ED for chest radiograph (PA ± lateral). Inhaled objects usually lodge in the <b>right main bronchus</b> (wider, shorter, more vertical) and need bronchoscopic removal; untreated they cause pneumonia, abscess or collapse.</li>
<li><b>Swallowed</b>, asymptomatic: refer for radiographs to confirm location (if radiopaque). Most pass within days; sharp objects (endodontic files, needles) or objects stuck in the oesophagus may need endoscopic retrieval. Advise to return with pain, vomiting, bleeding or breathing problems.</li>
<li>Document fully, report as an incident, and follow duty of candour.</li>
</ol>
<h3>Displacement into tissues</h3>
<p>Roots/teeth/implants into the sinus, lingual pouch or infratemporal fossa (see Domain 1); broken needles or instruments in soft tissue — stop, keep the patient still with mouth open, retrieve only if visible; otherwise localise with two radiographs at right angles or CBCT and refer.</p>
<h3>Failed extraction</h3>
<ul>
<li>Recognise when to stop: risk to nerve/sinus, inadequate access, uncontrolled bleeding, patient distress, or reaching the limit of your skills.</li>
<li>Ensure haemostasis and comfort; take a radiograph to document what remains.</li>
<li>Explain honestly what has happened and what happens next; analgesia ± antibiotics as indicated; arrange timely referral with a clear letter (history, findings, radiographs, what was attempted).</li>
<li>When you receive such a patient: assess and explain factually without blaming or denigrating the previous clinician (GDC standards). Raise genuine patient-safety concerns through the proper channels, not in front of the patient.</li>
</ul>`
    },
    {
      id: 'd8-malignancy-nerve', title: 'Suspected malignancy and trigeminal nerve injury', code: '8.2, 8.3.2',
      syllabus: [
        'Recognise red flags for malignant conditions of the mouth and jaws and instigate urgent referral',
        'Diagnose a trigeminal nerve injury and instigate appropriate action and referral'
      ],
      notes: `
<h3>Suspected malignancy</h3>
<ul>
<li>Red flags (Domains 5 and 6): ulcer &gt;3 weeks, red/red-white patch, indurated lump, unexplained numbness, loose teeth without periodontitis, non-healing socket, persistent neck lump, rapidly growing swelling, unexplained trismus.</li>
<li>Refer via the <b>urgent suspected cancer pathway</b> with: clinical description and site, duration, photographs, radiographs, smoking/alcohol history, relevant medical history.</li>
<li>Communicate honestly without causing undue alarm: explain the need for urgent specialist assessment "to rule out serious conditions, including cancer". Check the patient understands and knows when to expect contact; safety-net (ask them to call if they haven't heard within the expected time) and track the referral.</li>
<li>Don't attempt excision of a suspected cancer in primary care; the specialist team will biopsy and stage.</li>
</ul>
<h3>Trigeminal nerve injury</h3>
<ul>
<li>Causes: third molar surgery, implants, endodontics (overfill, sodium hypochlorite extrusion), LA injections, trauma, orthognathic surgery.</li>
<li><b>Recognise</b>: altered sensation (numbness, tingling, pain) persisting after LA should have worn off; note any pain (risk of PTTN).</li>
<li><b>Assess and document</b>: map the area, light touch, two-point discrimination, pin-prick, thermal tests; photograph the map; patient-reported impact.</li>
<li><b>Act early</b>: implant or endodontic material in the canal causing new numbness — <b>remove within ~30 hours</b>; consider early steroids/NSAIDs; inform the patient honestly.</li>
<li><b>Refer</b> to a specialist nerve-injury service promptly — suspected transection (seen at surgery), no improvement, or neuropathic pain. Lingual nerve repair has better outcomes if explored early (within ~3 months).</li>
<li>Sodium hypochlorite accident: sudden severe pain, swelling, bruising, bleeding into the canal, paraesthesia — stop, irrigate canal with saline, LA, analgesia, cold compresses, antibiotics and steroids as appropriate; refer to OMFS if extensive swelling or airway risk.</li>
</ul>`
    },
    {
      id: 'd8-drugs', title: 'Emergency drug pharmacology and team working', code: '8.4–8.6',
      syllabus: [
        'Pharmacology and adverse effects of emergency drugs',
        'Identify, prescribe and administer drugs, including by IM injection, in adults and children',
        'Recognise the need for team support; refer with appropriate urgency; communicate with patient, team and paramedics; make timely referrals'
      ],
      notes: `
<div class="tbl"><table><tr><th>Drug</th><th>Mechanism</th><th>Route and dose (adult)</th><th>Adverse effects / cautions</th></tr>
<tr><td>Adrenaline 1 mg/ml</td><td>α1 (vasoconstriction, ↓oedema), β1 (↑heart rate/contractility), β2 (bronchodilation, stabilises mast cells)</td><td>IM anterolateral thigh 500 µg (children: 300 / 150 / 100–150 µg by age); repeat after 5 min</td><td>Tachycardia, arrhythmia, hypertension, tremor, anxiety, pallor. No absolute contraindication in anaphylaxis. Beta-blockers may blunt response</td></tr>
<tr><td>Aspirin 300 mg</td><td>Irreversible COX-1 inhibition → ↓thromboxane A2 → antiplatelet</td><td>Chewed or dispersed orally</td><td>Avoid in true aspirin allergy, active GI bleeding, children &lt;16 (Reye's syndrome)</td></tr>
<tr><td>GTN 400 µg/dose</td><td>Nitric oxide donor → venodilation (↓preload) and coronary vasodilation</td><td>1–2 sprays sublingually, repeat after a few minutes</td><td>Headache, flushing, dizziness, hypotension. Avoid if SBP &lt;90 or PDE5 inhibitor use (sildenafil within 24 h, tadalafil within 48 h)</td></tr>
<tr><td>Salbutamol 100 µg/actuation</td><td>Short-acting β2 agonist → bronchial smooth muscle relaxation</td><td>4 puffs via spacer, then 2 puffs every 2 min up to 10</td><td>Tremor, tachycardia, palpitations, hypokalaemia</td></tr>
<tr><td>Glucagon 1 mg</td><td>Stimulates hepatic glycogenolysis</td><td>IM (500 µg if &lt;8 years or &lt;25 kg)</td><td>Nausea, vomiting; ineffective without glycogen stores (starvation, alcohol)</td></tr>
<tr><td>Oral glucose</td><td>Direct glucose replacement</td><td>15–20 g</td><td>Only if able to swallow safely</td></tr>
<tr><td>Midazolam (buccal)</td><td>Benzodiazepine — GABA-A potentiation → anticonvulsant</td><td>10 mg buccal (age-adjusted in children)</td><td>Respiratory depression, sedation — monitor airway</td></tr>
<tr><td>Oxygen</td><td>Corrects hypoxaemia</td><td>15 L/min via non-rebreathe mask in critical illness; titrate to SpO₂ 94–98% (88–92% if CO₂ retainer)</td><td>Fire risk; avoid unnecessary oxygen in normoxic MI/stroke</td></tr>
<tr><td>Hydrocortisone 100 mg (patient's own)</td><td>Glucocorticoid replacement</td><td>IM/IV</td><td>Adrenal crisis</td></tr>
<tr><td>Flumazenil</td><td>Benzodiazepine antagonist</td><td>200 µg IV, then 100 µg/min (max 1 mg)</td><td>Re-sedation, seizures in epilepsy/benzodiazepine dependence</td></tr></table></div>
<h3>IM injection technique</h3>
<p>Anterolateral thigh (mid-third, outer aspect) is preferred — can be given through clothing with an auto-injector. Needle at 90°; for ampoules, draw up with a filter/blunt needle and inject with a 23–25G needle of adequate length. Record time, dose, batch.</p>
<h3>Teamwork in emergencies</h3>
<ul>
<li>Clear leader; allocate roles (airway, compressions, drugs, scribe, calling 999, meeting paramedics); closed-loop communication.</li>
<li>Know your limits and escalate early. Refer with appropriate urgency: 999 for life-threatening conditions; same-day ED/OMFS for spreading infection, uncontrolled bleeding, suspected aspiration; urgent suspected cancer pathway; urgent nerve injury referral.</li>
<li>Communicate the diagnosis and plan to the patient (and escort), the team and paramedics (SBAR); provide written handover with drugs given.</li>
<li>Debrief, document, restock, report (incident/significant event analysis), support staff well-being.</li>
</ul>`
    }
  ],
  cards: [
    ['Most common medical emergency in dental practice?', 'Vasovagal syncope.'],
    ['NEWS2 aggregate scores for urgent and emergency response?', '5–6 urgent response; 7 or more emergency response.'],
    ['Eight emergency drugs for primary dental care (RCUK)?', 'Adrenaline, aspirin, glucagon, oral glucose, GTN spray, buccal midazolam, oxygen, salbutamol.'],
    ['Management of vasovagal syncope?', 'Lie flat, raise legs, loosen clothing, oxygen if slow to recover; reassure.'],
    ['GTN dose for angina?', '400 µg/spray — 1–2 sprays sublingually, repeat after a few minutes.'],
    ['Contraindications to GTN?', 'SBP &lt;90 mmHg, recent PDE5 inhibitor (sildenafil 24 h, tadalafil 48 h), severe aortic stenosis/HOCM.'],
    ['Aspirin dose in suspected MI?', '300 mg chewed or dispersed.'],
    ['When should oxygen be given in suspected MI?', 'Only if SpO₂ &lt;94%.'],
    ['FAST?', 'Face, Arms, Speech, Time to call 999.'],
    ['Adult CPR compression depth, rate and ratio?', '5–6 cm, 100–120/min, 30:2.'],
    ['Paediatric BLS sequence?', '5 rescue breaths, then 15:2; depth one-third of chest.'],
    ['Salbutamol regimen in acute asthma?', '4 puffs via spacer, then 2 puffs every 2 minutes up to 10.'],
    ['Life-threatening asthma features?', 'SpO₂ &lt;92%, silent chest, cyanosis, exhaustion, confusion, hypotension, PEF &lt;33%.'],
    ['Choking sequence (adult, severe)?', 'Up to 5 back blows then up to 5 abdominal thrusts, repeated; CPR if unconscious.'],
    ['Choking in an infant — what replaces abdominal thrusts?', 'Chest thrusts.'],
    ['IM adrenaline doses in anaphylaxis by age?', '&gt;12 y 500 µg; 6–12 y 300 µg; 6 months–6 y 150 µg; &lt;6 months 100–150 µg.'],
    ['When to repeat IM adrenaline?', 'After 5 minutes if no improvement.'],
    ['Definition of status epilepticus?', 'Seizure lasting ≥5 minutes or repeated seizures without recovery between them.'],
    ['Buccal midazolam dose for an adult?', '10 mg.'],
    ['Hypoglycaemia threshold?', 'Blood glucose below 4 mmol/l.'],
    ['Treatment of a conscious hypoglycaemic patient?', '15–20 g fast-acting glucose, recheck in 10–15 min, then long-acting carbohydrate.'],
    ['Glucagon dose and why it may fail?', '1 mg IM (500 µg in small children); needs glycogen stores — fails in starvation/alcohol.'],
    ['Adrenal crisis treatment?', 'Lie flat, legs up, oxygen, call 999, hydrocortisone 100 mg IM (patient\'s own kit).'],
    ['Stepwise local measures for post-extraction bleeding?', 'Pressure → LA with adrenaline → suture → haemostatic agent (Surgicel, gelatin, tranexamic acid, bone wax) → diathermy/ligation.'],
    ['DOAC reversal agents?', 'Dabigatran: idarucizumab. Apixaban/rivaroxaban: andexanet alfa (or PCC).'],
    ['Ludwig\'s angina?', 'Bilateral cellulitis of submandibular, sublingual and submental spaces with airway risk.'],
    ['Signs of cavernous sinus thrombosis?', 'Proptosis, chemosis, ophthalmoplegia, V1/V2 numbness, becoming bilateral.'],
    ['Sepsis Six?', 'Oxygen, blood cultures, IV antibiotics, IV fluids, lactate (and FBC), urine output — within 1 hour.'],
    ['Where do inhaled objects usually lodge?', 'Right main bronchus.'],
    ['First step when an instrument drops into the oropharynx?', 'Stop, turn the head to the side, encourage coughing, look/suction; assess for choking.'],
    ['Implant or endodontic material causing new IAN numbness — action?', 'Remove within ~30 hours and refer.'],
    ['Signs of a sodium hypochlorite accident?', 'Sudden severe pain, swelling, bruising, bleeding into the canal, paraesthesia.'],
    ['SBAR stands for?', 'Situation, Background, Assessment, Recommendation.'],
    ['Preferred IM injection site for adrenaline?', 'Anterolateral thigh.']
  ],
  mcqs: [
    { q: 'Minutes after an injection, a patient develops wheeze, facial swelling, urticaria and a BP of 80/40. What is the first drug to give?', o: ['Chlorphenamine 10 mg IV', 'Hydrocortisone 200 mg IM', 'Adrenaline 500 µg IM', 'Salbutamol 10 puffs', 'Glucagon 1 mg IM'], a: 2, e: 'This is anaphylaxis. IM adrenaline 500 µg (0.5 ml of 1 mg/ml) into the anterolateral thigh is first line; repeat after 5 minutes if needed. Antihistamines and steroids are not immediate treatments.' },
    { q: 'A 7-year-old has anaphylaxis. What IM adrenaline dose is correct?', o: ['150 µg', '300 µg', '500 µg', '1 mg', '50 µg'], a: 1, e: 'RCUK: 6–12 years 300 µg (0.3 ml of 1 mg/ml).' },
    { q: 'An insulin-treated patient becomes confused, sweaty and uncooperative and won\'t take oral glucose. What is the best management?', o: ['Glucagon 1 mg IM', 'Buccal midazolam 10 mg', 'IM adrenaline', 'Oxygen only and wait', 'Aspirin 300 mg'], a: 0, e: 'Hypoglycaemia in an uncooperative or unconscious patient is treated with glucagon 1 mg IM, then oral carbohydrate once able; call 999 if no recovery.' },
    { q: 'A patient has a tonic–clonic seizure that has lasted 6 minutes. What should you give?', o: ['Glucagon 1 mg IM', 'Buccal midazolam 10 mg', 'Flumazenil 200 µg IV', 'Adrenaline 500 µg IM', 'Nothing — wait for it to stop'], a: 1, e: 'Seizures lasting 5 minutes or more (status epilepticus) are treated with buccal midazolam 10 mg in adults; call 999.' },
    { q: 'A patient has central chest pain not relieved by two doses of GTN. What is the next step?', o: ['Give more GTN and continue treatment', 'Call 999 and give aspirin 300 mg', 'IM adrenaline', 'Glucagon', 'Send home to see GP'], a: 1, e: 'Persistent chest pain despite GTN suggests acute coronary syndrome: call 999, give aspirin 300 mg, monitor and prepare for cardiac arrest.' },
    { q: 'During crown cementation, the crown drops into the throat. The patient coughs briefly and then seems fine. What is the most appropriate action?', o: ['Reassure and continue', 'Refer urgently for chest (± abdominal) radiography to locate the crown', 'Give IM adrenaline', 'Perform abdominal thrusts', 'Wait for the crown to pass and review in a week'], a: 1, e: 'A coughing episode suggests possible aspiration. Even if asymptomatic, radiographs are needed to confirm whether it was swallowed or inhaled; inhaled objects need bronchoscopy.' },
    { q: 'A patient with a lower molar abscess has bilateral submandibular swelling, a raised floor of mouth, drooling and a muffled voice. What is the correct management?', o: ['Prescribe amoxicillin and review in 3 days', 'Incise and drain in the dental chair and discharge', 'Emergency referral to hospital (OMFS/ED) for airway management, IV antibiotics and surgical drainage', 'Extract the tooth under LA and discharge', 'Prescribe metronidazole and analgesia'], a: 2, e: 'These are features of Ludwig\'s angina with airway risk — an emergency needing hospital airway management, IV antibiotics, imaging and surgical drainage.' },
    { q: 'Which statement about the dental emergency drug list is correct?', o: ['Hydrocortisone is a standard drug in every dental practice kit', 'Chlorphenamine is required for anaphylaxis', 'Buccal midazolam, glucagon, GTN, aspirin, salbutamol, adrenaline, glucose and oxygen are the core drugs', 'Atropine must be stocked', 'Naloxone is a core drug'], a: 2, e: 'The RCUK list for primary dental care is adrenaline, aspirin, glucagon, oral glucose, GTN, buccal midazolam, oxygen and salbutamol (flumazenil if providing sedation).' }
  ]
});
