window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd4', num: '4', order: 4,
  title: 'Pain and anxiety control',
  summary: 'Managing pain and anxiety: dental anxiety and phobia, local anaesthesia, patient assessment for conscious sedation, intravenous, inhalation and oral/transmucosal sedation, advanced techniques, discharge and referral.',
  topics: [
    {
      id: 'd4-standards', title: 'Sedation standards, governance and definitions', code: '4.1',
      syllabus: [
        'IACSD Standards for Conscious Sedation in the Provision of Dental Care (v1.1, 2020)',
        'SDCEP Conscious Sedation in Dentistry, 3rd edition',
        'ASA Physical Status Classification',
        'AoMRC Safe Sedation Practice for Healthcare Procedures (2013)',
        'NICE Sedation in Children and Young People (2010)',
        'Guidance, governance and legal aspects of safe conscious sedation'
      ],
      notes: `
<h3>Definition of conscious sedation (UK dentistry)</h3>
<div class="box guide"><b>Definition</b><p>"A technique in which the use of a drug or drugs produces a state of depression of the central nervous system enabling treatment to be carried out, but during which <b>verbal contact with the patient is maintained</b> throughout the period of sedation. The drugs and techniques used should carry a <b>margin of safety wide enough to render loss of consciousness unlikely</b>."</p></div>
<p>The patient should respond purposefully to verbal commands (alone or with light tactile stimulation). Anything deeper is deep sedation/GA and requires anaesthetic-level skills and settings.</p>
<h3>IACSD 2020 — standard vs advanced techniques</h3>
<div class="tbl"><table><tr><th>Patient group</th><th>Standard techniques</th></tr>
<tr><td>Adults (16+)</td><td>IV midazolam alone; inhalation sedation with nitrous oxide/oxygen; oral/transmucosal midazolam</td></tr>
<tr><td>Young people (12–16)</td><td>Inhalation sedation; IV midazolam (with appropriate additional training and experience)</td></tr>
<tr><td>Children (under 12)</td><td>Inhalation sedation with nitrous oxide/oxygen</td></tr></table></div>
<p><b>Advanced techniques</b> (need extra training, skills, team and setting): propofol (alone or with midazolam), remimazolam, combinations of sedative drugs or with opioids/ketamine, sevoflurane, and IV or transmucosal midazolam in younger children.</p>
<h3>Governance essentials</h3>
<ul>
<li><b>Team</b>: at least two appropriately trained people — the operator-sedationist (or separate sedationist) and a trained second person (e.g. dental nurse with a sedation qualification) who monitors the patient.</li>
<li><b>Training</b>: IACSD-accredited theoretical and supervised clinical training with logbook; ongoing sedation-related CPD; annual team Immediate Life Support (ILS) training and simulated emergency scenarios.</li>
<li><b>Environment and equipment</b>: pulse oximetry and non-invasive BP for IV sedation (capnography recommended); oxygen, suction, airway adjuncts, bag-valve-mask, AED, emergency drugs including <b>flumazenil</b>; recovery facility.</li>
<li><b>Documentation</b>: written consent, pre-sedation assessment, drugs (name, dose, batch, time), monitoring readings at regular intervals, events, discharge.</li>
<li><b>Audit</b> of outcomes, adverse events and patient experience; clinical governance and registration with CQC (England).</li>
</ul>
<h3>ASA physical status</h3>
<div class="tbl"><table><tr><th>Class</th><th>Description</th><th>Examples</th></tr>
<tr><td>I</td><td>Normal healthy</td><td>Non-smoker, no disease</td></tr>
<tr><td>II</td><td>Mild systemic disease</td><td>Controlled hypertension/diabetes, smoker, pregnancy, BMI 30–40, mild asthma</td></tr>
<tr><td>III</td><td>Severe systemic disease</td><td>Poorly controlled diabetes/hypertension, COPD, BMI ≥40, dialysis, MI/stroke &gt;3 months ago</td></tr>
<tr><td>IV</td><td>Severe disease that is a constant threat to life</td><td>Recent MI/stroke (&lt;3 months), ongoing cardiac ischaemia, sepsis</td></tr>
<tr><td>V</td><td>Moribund, not expected to survive without surgery</td><td>Ruptured aortic aneurysm</td></tr>
<tr><td>VI</td><td>Brain-dead organ donor</td><td>—</td></tr></table></div>
<p>Sedation in primary care is generally for ASA I–II; ASA III patients are better managed in secondary care or after specialist assessment.</p>
<h3>Other key documents</h3>
<ul>
<li><b>AoMRC 2013</b>: sedation is a continuum; practitioners must be able to rescue from one level deeper than intended; standards for training, monitoring and capnography.</li>
<li><b>NICE CG112 (2010)</b> (under 19s): inhalation sedation for children who can't tolerate treatment under LA; midazolam options; fasting is not needed for minimal sedation, nitrous oxide sedation, or moderate sedation where verbal contact is maintained; advanced techniques only with appropriately trained teams.</li>
<li><b>SDCEP Conscious Sedation in Dentistry</b>: practical recommendations aligned with IACSD.</li>
</ul>`
    },
    {
      id: 'd4-anxiety', title: 'Dental anxiety, phobia and the range of techniques', code: '4.1',
      syllabus: [
        'The range of pain and anxiety management techniques available and their limitations',
        'Signs and symptoms of anxiety and phobia',
        'The importance of multidisciplinary input; refer to services outside oral surgery for anxiety and phobia'
      ],
      notes: `
<h3>Recognising anxiety</h3>
<ul>
<li><b>Physiological</b>: tachycardia, palpitations, sweating, pallor, dilated pupils, tremor, hyperventilation, nausea, urge to urinate.</li>
<li><b>Behavioural</b>: avoidance, missed appointments, irregular attendance, gripping the chair, restlessness, excessive talking, irritability, crying.</li>
<li><b>Cognitive</b>: catastrophic thoughts ("I'll choke", "it will hurt"), feeling of loss of control, embarrassment.</li>
</ul>
<p><b>Dental phobia</b> (specific phobia, DSM-5): marked fear or anxiety out of proportion to the actual danger, leading to avoidance, lasting ≥6 months and causing distress or impairment. About 1 in 10 UK adults report extreme dental anxiety.</p>
<h3>Assessment tools</h3>
<ul>
<li><b>Modified Dental Anxiety Scale (MDAS)</b>: 5 questions scored 1–5 (total 5–25). <b>≥19</b> suggests very high anxiety/possible phobia.</li>
<li><b>Indicator of Sedation Need (IOSN)</b>: combines anxiety (MDAS), medical/behavioural factors and treatment complexity → low, moderate, high or very high need for sedation.</li>
</ul>
<h3>Range of techniques and limitations</h3>
<div class="tbl"><table><tr><th>Technique</th><th>Good for</th><th>Limitations</th></tr>
<tr><td>Behavioural (communication, tell–show–do, stop signal, distraction, relaxation, breathing)</td><td>All patients; mild–moderate anxiety</td><td>Time; limited for phobia alone</td></tr>
<tr><td>CBT for dental anxiety</td><td>Phobia; long-term change (most patients then manage without sedation)</td><td>Access/waiting lists; needs motivation</td></tr>
<tr><td>LA alone</td><td>Pain control</td><td>Doesn't treat anxiety; needle fear</td></tr>
<tr><td>Inhalation sedation</td><td>Children, mild–moderate anxiety, needle phobia, gaggers</td><td>Needs nasal breathing and cooperation; nasal hood in the way for upper anteriors; weaker effect</td></tr>
<tr><td>Oral/transmucosal midazolam</td><td>Needle phobia (allows cannulation), learning disability</td><td>Unpredictable absorption; can't titrate; longer recovery</td></tr>
<tr><td>IV midazolam</td><td>Moderate–severe anxiety in adults, longer surgery</td><td>Needs cannulation, escort, recovery; respiratory depression; amnesia means less learning</td></tr>
<tr><td>Advanced sedation (propofol, combinations)</td><td>Severe anxiety, complex cases</td><td>Specialist team, setting, monitoring; narrower safety margin</td></tr>
<tr><td>General anaesthesia</td><td>Uncooperative patients, extensive surgery, when sedation fails/inappropriate</td><td>Hospital setting only, higher risk, cost, waiting lists; doesn't reduce anxiety long-term</td></tr></table></div>
<h3>Multidisciplinary input</h3>
<p>Refer to psychology/CBT dental anxiety services, special care dentistry (learning disability, complex needs), GP/mental health services (generalised anxiety, PTSD, history of abuse, eating disorders), and anaesthetics for GA or advanced sedation.</p>`
    },
    {
      id: 'd4-la', title: 'Local anaesthesia: agents, techniques and complications', code: '4.1–4.4',
      syllabus: [
        'Relevant anatomy, physiology and pharmacology to administer LA infiltrations and blocks',
        'Recognise and manage uncommon effects, interactions and adverse reactions of LA',
        'Prescribe LA: lidocaine, articaine, bupivacaine, prilocaine, EMLA, tetracaine (Ametop)',
        'Give appropriate infiltrations and blocks for surgical procedures'
      ],
      notes: `
<h3>Mechanism</h3>
<p>LAs are weak bases that cross the nerve membrane in the <b>unionised</b> form, then (ionised) block voltage-gated Na⁺ channels from inside. Inflamed tissue is acidic, so less drug is unionised — LA works less well (plus increased nerve excitability). Small myelinated fibres (Aδ) and pain fibres are blocked before large motor fibres. Amides are metabolised in the liver; esters by plasma cholinesterase.</p>
<h3>Dental agents (UK)</h3>
<div class="tbl"><table><tr><th>Agent</th><th>mg per 2.2 ml cartridge</th><th>Typical max dose</th><th>Notes</th></tr>
<tr><td>Lidocaine 2% + adrenaline 1:80,000</td><td>44 mg</td><td>4.4 mg/kg (UK dental convention; BNF allows up to 7 mg/kg with adrenaline, max 500 mg)</td><td>Gold standard amide; ~7 cartridges for a 70 kg adult at 4.4 mg/kg</td></tr>
<tr><td>Articaine 4% + adrenaline 1:100,000 or 1:200,000</td><td>88 mg</td><td>7 mg/kg (max 500 mg)</td><td>Thiophene ring; ester side chain — mostly hydrolysed in plasma (short half-life); diffuses well through bone — buccal infiltration often sufficient for lower molars in adults. Not for under 4s. Some concern about paraesthesia with IANB</td></tr>
<tr><td>Prilocaine 3% + felypressin 0.03 IU/ml</td><td>66 mg</td><td>6 mg/kg (max 400 mg)</td><td>Metabolite o-toluidine → <b>methaemoglobinaemia</b>; felypressin (vasopressin analogue) is an alternative vasoconstrictor</td></tr>
<tr><td>Mepivacaine 3% plain</td><td>66 mg</td><td>4.4 mg/kg (max 300 mg)</td><td>Weak vasodilator — useful plain for short procedures</td></tr>
<tr><td>Bupivacaine 0.5% + adrenaline 1:200,000</td><td>11 mg per 2.2 ml</td><td>~2 mg/kg (max 150 mg)</td><td>Long-acting (soft tissue anaesthesia up to 8+ hours) — post-operative pain control; most cardiotoxic</td></tr></table></div>
<div class="box dose"><b>Calculating dose</b><p>mg/ml = % × 10. So 2% = 20 mg/ml; a 2.2 ml cartridge of 2% lidocaine contains 44 mg. Adrenaline 1:80,000 = 12.5 µg/ml (27.5 µg per 2.2 ml cartridge).</p><p>Adrenaline: reduce dose in significant cardiovascular disease (commonly limit to about 2 cartridges of 1:80,000 with careful aspiration). Interactions: non-selective β-blockers (hypertension with reflex bradycardia), recent cocaine use (avoid adrenaline), TCAs (theoretical at dental doses).</p></div>
<h3>Topical agents</h3>
<ul>
<li><b>EMLA</b> (eutectic mixture of lidocaine 2.5% + prilocaine 2.5%): apply under an occlusive dressing for ~60 minutes before cannulation. Causes vasoconstriction (blanching). Avoid in infants &lt;1 year/methaemoglobinaemia risk.</li>
<li><b>Ametop</b> (tetracaine 4% gel, an ester): 30–45 minutes for venous cannulation, causes vasodilation (helps find veins), longer duration. Higher allergy potential.</li>
<li>Intraoral: lidocaine 5% ointment/10% spray, benzocaine 20% gel (ester — methaemoglobinaemia, allergy).</li>
</ul>
<h3>Key block techniques</h3>
<ul>
<li><b>IANB</b>: thumb in the coronoid notch, needle from the contralateral premolars, entering lateral to the pterygomandibular raphe ~1 cm above the occlusal plane, ~20–25 mm depth to bone; withdraw slightly, aspirate, inject slowly; lingual nerve on withdrawal; separate long buccal. Failure ~15–20%: accessory innervation (mylohyoid, cervical plexus, contralateral incisive), bifid canal, inflammation, technique (too low/anterior).</li>
<li><b>Gow–Gates</b>: high V3 block at the condylar neck (mouth wide open, extraoral guide from intertragic notch to commissure); also anaesthetises lingual, mylohyoid, auriculotemporal and often buccal nerves; lower aspiration rate.</li>
<li><b>Vazirani–Akinosi</b> (closed mouth): for trismus; needle parallel to maxillary occlusal plane at the mucogingival junction of the upper molars, advanced ~25 mm medial to the ramus.</li>
<li><b>Mental/incisive</b>: at the mental foramen (between/below premolars), massage to drive LA into the foramen.</li>
<li><b>Maxillary</b>: infiltration usually enough; PSA (risk of pterygoid plexus haematoma), infraorbital, greater palatine, nasopalatine blocks.</li>
<li>Supplementary: intraligamentary (small volume, high pressure, rapid onset), intraosseous, intrapulpal.</li>
</ul>
<h3>Complications and adverse reactions</h3>
<div class="tbl"><table><tr><th>Problem</th><th>Notes</th></tr>
<tr><td>Vasovagal syncope</td><td>Most common "reaction" — lie flat, raise legs</td></tr>
<tr><td>Haematoma</td><td>PSA (pterygoid plexus), IANB; pressure, cold, reassure</td></tr>
<tr><td>Trismus</td><td>Medial pterygoid trauma/haematoma/infection; heat, analgesia, exercises; antibiotics if infection</td></tr>
<tr><td>Facial palsy</td><td>LA into the parotid (needle too posterior); transient — protect the eye</td></tr>
<tr><td>Nerve injury</td><td>Lingual more than IAN; possibly more with 4% solutions; most recover; may cause PTTN</td></tr>
<tr><td>Needle breakage</td><td>Don't insert to the hub, don't bend needles, avoid sudden movement; if broken — keep patient's mouth open, retrieve if visible, otherwise image and refer</td></tr>
<tr><td>Intravascular injection</td><td>Palpitations, toxicity; aspirate before injecting, inject slowly</td></tr>
<tr><td>Visual disturbance</td><td>Diplopia/amaurosis after PSA/IANB (spread to orbit or vasospasm); transient — reassure, cover eye, don't drive</td></tr>
<tr><td>Self-inflicted trauma</td><td>Lip/cheek biting in children — warn parents</td></tr>
<tr><td>Allergy</td><td>True amide allergy is very rare; consider latex, sodium metabisulfite (adrenaline antioxidant), preservatives, chlorhexidine; refer to an allergy clinic for testing</td></tr>
<tr><td>Methaemoglobinaemia</td><td>Prilocaine, benzocaine (and high-dose articaine): cyanosis with normal-looking oxygen saturation that doesn't improve with O₂ (chocolate-brown blood); treat with IV methylene blue</td></tr></table></div>
<div class="box flag"><b>LA systemic toxicity</b><p>Early: circumoral and tongue numbness, light-headedness, tinnitus, visual disturbance, slurred speech, muscle twitching → seizures → coma, respiratory arrest. Cardiovascular: hypotension, arrhythmias, cardiac arrest (bupivacaine especially).</p><p>Management: stop injecting, call for help, ABC, 100% oxygen, treat seizures (benzodiazepine), <b>IV lipid emulsion 20%</b> (1.5 ml/kg bolus, then infusion 15 ml/kg/h; repeat boluses up to twice at 5-minute intervals), prolonged CPR if arrest.</p></div>`
    },
    {
      id: 'd4-assess', title: 'Assessing patients for sedation', code: '4.1–4.2',
      syllabus: [
        'Principles of patient assessment for conscious sedation in primary care',
        'Assess medical, social, mental health, pain and anxiety status; determine suitability and formulate a plan',
        'Know when to refer for deep sedation or general anaesthesia',
        'Relevant cardiovascular, respiratory and neurological anatomy, physiology and pharmacology'
      ],
      notes: `
<h3>Assessment visit (separate from treatment where possible)</h3>
<ul>
<li><b>Anxiety</b>: history, triggers, previous experiences, MDAS/IOSN.</li>
<li><b>Dental</b>: treatment needed, complexity, duration.</li>
<li><b>Medical</b>: full history, drugs (CYP3A4 interactions, CNS depressants, opioids), allergies, ASA grade, previous sedation/GA problems, pregnancy, airway (Mallampati, BMI, neck mobility, sleep apnoea), veins for cannulation.</li>
<li><b>Social</b>: responsible adult escort available, transport (not public transport for IV), caring responsibilities, work, ability to follow instructions, alcohol and drug use.</li>
<li><b>Mental health and capacity</b>: ability to consent and cooperate; learning disability; psychiatric conditions.</li>
<li>Baseline observations: BP, pulse, SpO₂, weight/BMI, ± blood glucose.</li>
</ul>
<h3>Indications for sedation</h3>
<p>Dental anxiety or phobia; strong gag reflex; unpleasant or lengthy procedures (third molar surgery); medical conditions worsened by stress (angina, asthma, hypertension, epilepsy); mild learning disability or movement disorders where the patient can still cooperate.</p>
<h3>Contraindications / cautions for IV midazolam</h3>
<ul>
<li>Benzodiazepine allergy; patient refusal; no escort; inability to cooperate</li>
<li>Severe respiratory disease (CO₂ retainers), severe obstructive sleep apnoea, high BMI with airway concerns</li>
<li>Pregnancy and breastfeeding (relative); severe hepatic or renal impairment</li>
<li>Myasthenia gravis; psychiatric illness; alcohol/drug dependence (tolerance, paradoxical reactions)</li>
<li>Interacting drugs (macrolides, azoles, HIV protease inhibitors increase effect; enzyme inducers reduce it)</li>
<li>Poor veins (consider oral/transmucosal premedication or inhalation)</li>
<li>Children under 12 (inhalation is the standard technique)</li>
</ul>
<h3>When to refer for deep sedation or GA</h3>
<ul>
<li>ASA III–IV patients needing more than minimal intervention, or difficult airways</li>
<li>Failed conscious sedation; inability to cooperate even when sedated (severe learning disability, young children needing extensive treatment)</li>
<li>Very extensive/complex surgery</li>
<li>Patients needing advanced techniques not available locally</li>
</ul>
<h3>Pre-sedation instructions</h3>
<ul>
<li>Fasting is generally not required for standard conscious sedation techniques where verbal contact is maintained (NICE CG112; IACSD) — a light meal is fine; follow local policy.</li>
<li>Take usual medications; avoid alcohol; wear loose sleeves; remove nail varnish (pulse oximetry).</li>
<li>Escort for IV/oral/transmucosal sedation who can stay with the patient afterwards (typically for the rest of the day/overnight); no driving.</li>
<li>Written consent including risks and alternatives.</li>
</ul>
<h3>Applied physiology</h3>
<ul>
<li>Respiratory: benzodiazepines blunt the ventilatory response to CO₂ and cause upper airway muscle relaxation (obstruction). Elderly, obese, COPD and OSA patients are more sensitive.</li>
<li>Cardiovascular: mild fall in BP and compensatory tachycardia; exaggerated in hypovolaemia/elderly.</li>
<li>Neurological: GABA-A receptor potentiation → anxiolysis, sedation, amnesia, anticonvulsant and muscle relaxant effects.</li>
</ul>`
    },
    {
      id: 'd4-iv', title: 'Intravenous sedation with midazolam', code: '4.2–4.4',
      syllabus: [
        'Upper limb anatomy for cannulation and venepuncture',
        'Practise safe and effective intravenous conscious sedation',
        'Cannulate and administer IV midazolam incrementally to the endpoint; recognise optimal sedation',
        'Recognise and manage complications, interactions and adverse reactions',
        'IV agents: midazolam, diazepam, propofol, remimazolam, flumazenil'
      ],
      notes: `
<h3>Midazolam pharmacology</h3>
<ul>
<li>Benzodiazepine; potentiates GABA-A (increases frequency of chloride channel opening).</li>
<li>Imidazole ring: water-soluble in the acidic ampoule (ring open); at body pH the ring closes → lipid-soluble → crosses the blood–brain barrier rapidly. No propylene glycol, so less painful than diazepam.</li>
<li>Onset 2–3 minutes; elimination half-life ~1.5–2.5 h (longer in elderly, obese, hepatic impairment). Metabolised by <b>CYP3A4</b> to α-hydroxymidazolam (active, short-lived).</li>
<li>Effects: anxiolysis, sedation, anterograde amnesia, anticonvulsant, muscle relaxation. <b>No analgesia</b> — LA is still needed.</li>
<li>Adverse: respiratory depression and airway obstruction (synergistic with opioids/alcohol), hypotension, paradoxical disinhibition (children, elderly), sexual fantasies (always have a chaperone), prolonged amnesia.</li>
</ul>
<h3>Cannulation anatomy</h3>
<ul>
<li><b>Dorsum of hand</b>: dorsal venous network; superficial, no nearby arteries — preferred safety-wise; more painful, mobile veins.</li>
<li><b>Antecubital fossa</b>: median cubital vein — large and easy, but the <b>brachial artery</b> and median nerve lie medially beneath the bicipital aponeurosis (risk of intra-arterial injection). Contents lateral to medial: radial nerve, biceps tendon, brachial artery, median nerve. Cephalic vein laterally, basilic medially.</li>
<li>Technique: tourniquet, clean (2% chlorhexidine in 70% alcohol), anchor the vein, insert at 10–30° bevel up, see flashback, advance cannula off the needle, release tourniquet, secure, flush with saline. Usually 22G (blue) or 20G (pink).</li>
</ul>
<h3>Titration (healthy adult)</h3>
<div class="box dose"><b>Incremental technique</b>
<ul><li>Use <b>1 mg/ml</b> midazolam (high-strength 5 mg/ml products should not be stocked for sedation — NPSA alert)</li><li>Initial bolus 2 mg over ~30 seconds; wait ~90 seconds</li><li>Then 1 mg increments every minute until the endpoint is reached</li><li>Usual total 2.5–7.5 mg; elderly/ASA III: 0.5–1 mg increments, often &lt;3.5 mg total</li></ul></div>
<h3>Endpoint (optimal sedation)</h3>
<p>Relaxed, willing to accept treatment, slowed/slurred speech, delayed response to commands, still responding purposefully to verbal contact. Verrill's sign (ptosis halfway across the pupil) is historical and unreliable. Maintain verbal contact throughout; top-up increments only if needed for longer procedures.</p>
<h3>Monitoring</h3>
<ul>
<li>Clinical: conscious level, response to commands, airway, respiratory rate and pattern, colour.</li>
<li>Continuous pulse oximetry; NIBP before, during and after; capnography recommended (earliest warning of hypoventilation/apnoea).</li>
<li>SpO₂ falling below ~94%: stimulate, encourage deep breaths, check airway (head tilt/chin lift, jaw thrust); below ~90%: supplemental oxygen, stop treatment, consider flumazenil.</li>
<li>Keep the cannula in until recovery is complete.</li>
</ul>
<h3>Flumazenil</h3>
<ul>
<li>Competitive antagonist at the benzodiazepine binding site.</li>
<li><b>200 µg IV over 15 s, then 100 µg every 60 s</b> as needed (usual 300–600 µg; max 1 mg).</li>
<li>Half-life ~50–60 min — shorter than midazolam, so <b>re-sedation</b> can occur. Observe for at least 1 hour after use; don't use routinely to hasten discharge.</li>
<li>Cautions: epilepsy (seizures), benzodiazepine dependence (withdrawal), mixed overdoses.</li>
</ul>
<h3>Complications</h3>
<div class="tbl"><table><tr><th>Complication</th><th>Management</th></tr>
<tr><td>Oversedation / respiratory depression</td><td>Stop, stimulate, airway manoeuvres, oxygen, flumazenil, call for help</td></tr>
<tr><td>Airway obstruction</td><td>Head tilt/chin lift, jaw thrust, suction, airway adjuncts</td></tr>
<tr><td>Paradoxical reaction (agitation, disinhibition)</td><td>Stop; don't give more; consider flumazenil; abandon and refer</td></tr>
<tr><td>Intra-arterial injection</td><td>Severe burning pain distally, blanching, weak pulse: <b>leave the cannula in</b>, stop, call for help, refer urgently (vascular)</td></tr>
<tr><td>Extravasation</td><td>Swelling and pain at the site: remove cannula, elevate, compress; recannulate elsewhere</td></tr>
<tr><td>Haematoma, thrombophlebitis</td><td>Pressure; warm compress; review</td></tr>
<tr><td>Sexual fantasy/allegations</td><td>Prevention — always a chaperone present</td></tr></table></div>
<h3>Other IV agents</h3>
<ul>
<li><b>Diazepam</b> (Diazemuls lipid emulsion): long half-life (20–100 h) with active metabolite nordiazepam — prolonged recovery and rebound; largely replaced by midazolam.</li>
<li><b>Propofol</b>: GABA-A agonist; rapid onset and offset; antiemetic; no analgesia; narrow margin — can quickly reach GA; pain on injection, hypotension, apnoea. Given by target-controlled infusion (TCI) or patient-maintained sedation by trained teams with capnography (advanced technique).</li>
<li><b>Remimazolam</b>: ultra-short-acting benzodiazepine broken down by tissue esterases to an inactive metabolite (not CYP-dependent) → rapid, predictable recovery; reversible with flumazenil. Licensed for procedural sedation in adults (advanced technique in dentistry).</li>
</ul>`
    },
    {
      id: 'd4-inhalation', title: 'Inhalation sedation with nitrous oxide', code: '4.2–4.3',
      syllabus: [
        'Practise safe and effective inhalation conscious sedation',
        'Nitrous oxide/oxygen pharmacology and prescribing',
        'Recognise and manage complications'
      ],
      notes: `
<h3>Pharmacology of nitrous oxide</h3>
<ul>
<li>Colourless, sweet-smelling gas; NMDA antagonist; anxiolytic and mildly analgesic.</li>
<li><b>Blood:gas partition coefficient 0.47</b> — low solubility, so rapid onset and recovery.</li>
<li><b>MAC 104%</b> — cannot produce general anaesthesia at atmospheric pressure alone (wide safety margin).</li>
<li>Not metabolised; excreted unchanged via the lungs.</li>
<li>Inactivates vitamin B12 (methionine synthase) with prolonged/repeated exposure → megaloblastic anaemia, neuropathy (relevant to recreational misuse and staff exposure).</li>
<li>Diffuses into air-filled cavities faster than nitrogen leaves → expands pneumothorax, middle ear, bowel gas, intraocular gas bubbles.</li>
<li><b>Diffusion hypoxia</b> (Fink effect) at the end of sedation — give 100% oxygen for 2–3 minutes.</li>
</ul>
<h3>Equipment safety features (dedicated sedation machines)</h3>
<ul>
<li>Minimum 30% oxygen delivery (maximum 70% N₂O)</li>
<li>Oxygen fail-safe cuts off N₂O if oxygen supply fails; oxygen flush button</li>
<li>Pin index system and colour-coded cylinders/pipelines (N₂O blue; oxygen white)</li>
<li>Reservoir bag, non-rebreathing valve, air entrainment valve</li>
<li>Active <b>scavenging</b> via nasal hood (≈45 L/min); room ventilation; monitoring of staff exposure (UK workplace exposure limit 100 ppm, 8-h TWA)</li>
</ul>
<h3>Technique (titration)</h3>
<ol>
<li>Explain sensations (tingling, warmth, heaviness, light-headedness). Fit nasal hood comfortably.</li>
<li>Start with 100% oxygen at a flow matching minute volume (adults typically 6–8 L/min; reservoir bag should gently move).</li>
<li>Increase N₂O to 10% for a minute, then 20%, then in 5% increments every minute until sedation (usually 20–40%).</li>
<li>Use "hypnotic suggestion" and a calm voice; give LA once sedated.</li>
<li>Signs of oversedation: nausea, persistent mouth closing, giggling/irritability, loss of cooperation, drowsiness — reduce N₂O.</li>
<li>End: 100% oxygen for 2–3 minutes; assess recovery.</li>
</ol>
<h3>Indications and contraindications</h3>
<div class="tbl"><table><tr><th>Good for</th><th>Avoid / caution</th></tr>
<tr><td>Children (standard technique), mild–moderate anxiety, needle phobia, gag reflex, patients who want rapid recovery and no escort</td><td>Nasal obstruction (cold, polyps, enlarged adenoids), inability to nasal-breathe or cooperate, first trimester of pregnancy, severe COPD, B12 deficiency/methotrexate, pneumothorax, recent middle-ear or vitreoretinal surgery with gas, severe psychiatric illness, claustrophobia (hood)</td></tr></table></div>
<h3>Recovery and discharge</h3>
<p>Recovery is fast. Children must leave with a responsible adult. Adults who have fully recovered can usually leave unescorted after inhalation sedation (follow local policy and SDCEP/IACSD advice on driving and activities).</p>`
    },
    {
      id: 'd4-oral', title: 'Oral, transmucosal and paediatric sedation', code: '4.2–4.3',
      syllabus: [
        'Practise safe and effective oral and transmucosal sedation',
        'Oral and transmucosal agents: midazolam, diazepam'
      ],
      notes: `
<h3>Oral midazolam</h3>
<ul>
<li>Bioavailability only ~40% (first-pass metabolism) — effect is less predictable and can't be titrated.</li>
<li>Adults: commonly 7.5–15 mg (up to ~20 mg) taken 30–45 minutes before treatment, in the clinic, under supervision. Children (specialist settings): ~0.3–0.5 mg/kg (max ~20 mg), often in a flavoured drink (bitter taste).</li>
<li>Used for needle-phobic adults to allow cannulation (then IV titration) or for patients with learning disability.</li>
<li>Monitoring and discharge as for IV sedation (escort required).</li>
</ul>
<h3>Transmucosal (intranasal) midazolam</h3>
<ul>
<li>Via mucosal atomiser device; onset 5–15 minutes; bypasses first-pass metabolism.</li>
<li>Doses ~0.2–0.5 mg/kg in children (specialist/advanced technique); stings and tastes bitter.</li>
<li>Useful for patients with severe learning disability or needle phobia to allow cannulation.</li>
</ul>
<h3>Oral diazepam</h3>
<ul>
<li>Sometimes prescribed as an anxiolytic premedication (e.g. a dose the night before and one before the appointment).</li>
<li>Long half-life and active metabolite cause next-day drowsiness; patient must not drive; escort needed. Not a true sedation technique.</li>
</ul>
<h3>Children and young people</h3>
<ul>
<li>Inhalation sedation is the standard technique in under 12s; IV midazolam can be used in 12–16 year olds by appropriately trained teams.</li>
<li>Children are more prone to paradoxical reactions with benzodiazepines.</li>
<li>Consent from a person with parental responsibility (or a Gillick-competent young person).</li>
<li>When sedation is unsuitable or fails: GA in a hospital setting with critical care support.</li>
</ul>`
    },
    {
      id: 'd4-discharge', title: 'Recovery, discharge and multidisciplinary care', code: '4.4–4.5',
      syllabus: [
        'Assess a patient for safe discharge or referral for specialist care',
        'Know the role of other specialties in behaviour, anxiety and pain management',
        'Liaise with special care dentistry, OMFS, anaesthetics and chronic pain teams and refer in a timely way'
      ],
      notes: `
<h3>Recovery</h3>
<ul>
<li>Monitored recovery area; continue observations until stable.</li>
<li>Remove the cannula only when the patient is alert and recovered.</li>
<li>If flumazenil was given, observe for at least 1 hour after the last dose.</li>
</ul>
<h3>Discharge criteria (IV/oral/transmucosal)</h3>
<ul>
<li>Stable vital signs close to baseline; orientated; can walk unaided and steadily</li>
<li>Pain controlled; no nausea; bleeding controlled</li>
<li>Responsible adult escort present, who has received instructions and can stay with the patient</li>
<li>Verbal and <b>written instructions</b> given to patient and escort</li>
</ul>
<div class="box dose"><b>Post-sedation instructions (typically for the rest of the day / 24 hours)</b>
<ul><li>No driving, cycling, operating machinery or cooking</li><li>No alcohol or sedative drugs; take usual medicines</li><li>No signing legal documents, important decisions, or online purchases</li><li>Don't care for young children or dependants alone; don't return to work</li><li>Emergency contact number; post-operative advice for the procedure</li></ul></div>
<h3>Multidisciplinary roles</h3>
<ul>
<li><b>Special care dentistry</b>: patients with disabilities, complex medical/social needs, behaviour management, GA lists.</li>
<li><b>Anaesthetics</b>: GA, advanced sedation, airway concerns, ASA III–IV patients.</li>
<li><b>OMFS</b>: complex surgery under GA, medically complex patients needing inpatient care.</li>
<li><b>Psychology / CBT services</b>: dental phobia — CBT allows most patients to accept treatment without sedation.</li>
<li><b>Chronic pain team</b>: patients with chronic pain and anxiety comorbidity.</li>
<li>GP and community services for ongoing mental health support.</li>
</ul>`
    }
  ],
  cards: [
    ['UK definition of conscious sedation — the two key phrases?', 'Verbal contact is maintained throughout; the margin of safety is wide enough to render loss of consciousness unlikely.'],
    ['IACSD standard techniques in adults?', 'IV midazolam alone; inhalation N₂O/O₂; oral/transmucosal midazolam.'],
    ['IACSD standard technique for children under 12?', 'Inhalation sedation with nitrous oxide/oxygen.'],
    ['ASA II examples?', 'Mild systemic disease: controlled hypertension/diabetes, smoker, pregnancy, BMI 30–40.'],
    ['ASA IV?', 'Severe systemic disease that is a constant threat to life (e.g. MI or stroke within 3 months).'],
    ['MDAS score suggesting dental phobia?', '19 or more (out of 25).'],
    ['What does IOSN stand for?', 'Indicator of Sedation Need.'],
    ['Why is LA less effective in inflamed tissue?', 'Acidic pH reduces the unionised fraction that crosses the nerve membrane (plus nerve hyperexcitability).'],
    ['mg of lidocaine in a 2.2 ml cartridge of 2%?', '44 mg (2% = 20 mg/ml).'],
    ['Max dose of articaine?', '7 mg/kg (max 500 mg).'],
    ['Max dose of prilocaine?', '6 mg/kg (max 400 mg).'],
    ['Which LAs can cause methaemoglobinaemia?', 'Prilocaine (o-toluidine) and benzocaine (and high-dose articaine). Treat with methylene blue.'],
    ['Why does articaine have a short half-life?', 'Its ester side chain is hydrolysed by plasma esterases despite being an amide.'],
    ['Treatment of LA systemic toxicity?', 'Stop, ABC, oxygen, benzodiazepine for seizures, IV 20% lipid emulsion 1.5 ml/kg bolus then 15 ml/kg/h; CPR if arrest.'],
    ['EMLA vs Ametop application times?', 'EMLA ~60 min (vasoconstricts); Ametop (tetracaine) 30–45 min (vasodilates).'],
    ['Which block is used with limited mouth opening?', 'Vazirani–Akinosi closed-mouth block.'],
    ['Facial palsy after IANB — mechanism?', 'LA deposited in the parotid gland (needle too posterior).'],
    ['Midazolam metabolising enzyme and its inhibitors?', 'CYP3A4 — inhibited by macrolides, azoles, HIV protease inhibitors, grapefruit.'],
    ['Why is midazolam water-soluble in the ampoule but lipid-soluble in the body?', 'Its imidazole ring is open at acidic pH and closes at physiological pH.'],
    ['Strength of midazolam recommended for sedation?', '1 mg/ml (not 5 mg/ml — NPSA alert).'],
    ['IV midazolam titration in a healthy adult?', '2 mg over 30 s, wait 90 s, then 1 mg every minute to the endpoint.'],
    ['Flumazenil dosing?', '200 µg IV over 15 s, then 100 µg every 60 s as needed (max 1 mg).'],
    ['Why observe for at least an hour after flumazenil?', 'Its half-life (~1 h) is shorter than midazolam\'s — risk of re-sedation.'],
    ['Structures medial to the median cubital vein in the antecubital fossa?', 'Brachial artery and median nerve (beneath the bicipital aponeurosis).'],
    ['Management of suspected intra-arterial injection?', 'Stop, leave the cannula in place, call for help, urgent vascular referral.'],
    ['Blood:gas partition coefficient and MAC of N₂O?', '0.47 and 104%.'],
    ['What is diffusion hypoxia and how is it prevented?', 'N₂O floods alveoli on stopping, diluting oxygen — give 100% O₂ for 2–3 minutes.'],
    ['Minimum oxygen delivered by a dental inhalation sedation machine?', '30% (maximum 70% N₂O).'],
    ['UK workplace exposure limit for nitrous oxide?', '100 ppm (8-hour time-weighted average).'],
    ['Bioavailability of oral midazolam?', 'About 40% (first-pass metabolism).'],
    ['Remimazolam — why is recovery fast?', 'Metabolised by tissue esterases to an inactive metabolite; reversible with flumazenil.'],
    ['Is fasting required for standard conscious sedation?', 'Generally not (NICE CG112, IACSD) — follow local policy.']
  ],
  mcqs: [
    { q: 'During IV midazolam sedation a patient becomes unresponsive to voice and SpO₂ falls to 88% despite stimulation and jaw thrust. What is the next step?', o: ['Continue treatment quickly', 'Give oxygen and flumazenil 200 µg IV over 15 s, then 100 µg/min as needed', 'Give IM adrenaline 500 µg', 'Give a further 1 mg midazolam', 'Remove the cannula'], a: 1, e: 'Oversedation with hypoxia: stop treatment, maintain the airway, give oxygen and reverse with flumazenil. Keep the cannula in place for drugs and observe for re-sedation.' },
    { q: 'A 70 kg healthy adult: what is the approximate maximum number of 2.2 ml cartridges of 2% lidocaine with adrenaline using 4.4 mg/kg?', o: ['3', '5', '7', '10', '14'], a: 2, e: '70 × 4.4 = 308 mg. Each cartridge contains 44 mg, so about 7 cartridges.' },
    { q: 'A patient on clarithromycin attends for IV midazolam sedation. What is the main concern?', o: ['Reduced sedative effect', 'Prolonged and deeper sedation due to CYP3A4 inhibition', 'Increased bleeding', 'Serotonin syndrome', 'No interaction'], a: 1, e: 'Clarithromycin inhibits CYP3A4, reducing midazolam metabolism and increasing its effect and duration.' },
    { q: 'At the end of inhalation sedation, why is 100% oxygen given for 2–3 minutes?', o: ['To speed elimination of midazolam', 'To prevent diffusion hypoxia', 'To treat methaemoglobinaemia', 'To prevent nausea', 'It is not necessary'], a: 1, e: 'When N₂O is stopped it diffuses rapidly into the alveoli, diluting oxygen (Fink effect). Giving 100% oxygen prevents hypoxia.' },
    { q: 'Which patient is most suitable for inhalation sedation?', o: ['A 9-year-old with dental anxiety needing extractions', 'An adult with a heavy cold and nasal congestion', 'A patient 6 weeks pregnant', 'A patient who had vitreoretinal surgery with an intraocular gas bubble last week', 'An adult with severe claustrophobia of the nasal hood'], a: 0, e: 'Inhalation sedation is the standard technique for children under 12. Nasal obstruction, first trimester pregnancy and intraocular gas are contraindications.' },
    { q: 'After IV cannulation in the antecubital fossa and injection of midazolam, the patient reports severe burning pain down the forearm and the hand looks pale. What should you do?', o: ['Remove the cannula and apply pressure', 'Leave the cannula in place, stop injecting, call for help and arrange urgent referral', 'Flush with 20 ml saline and continue', 'Give flumazenil', 'Reassure — this is normal'], a: 1, e: 'These are signs of intra-arterial injection (the brachial artery lies medial to the median cubital vein). Leave the cannula in place for treatment and arrange urgent vascular help.' },
    { q: 'A patient becomes cyanosed with an SpO₂ reading that does not improve with oxygen after a large dose of prilocaine. What is the likely cause and treatment?', o: ['Anaphylaxis — adrenaline', 'Methaemoglobinaemia — IV methylene blue', 'LA toxicity — lipid emulsion', 'Vasovagal syncope — lie flat', 'Asthma — salbutamol'], a: 1, e: 'Prilocaine\'s metabolite o-toluidine oxidises haemoglobin to methaemoglobin, causing cyanosis unresponsive to oxygen. Treat with IV methylene blue.' },
    { q: 'Which statement about flumazenil is correct?', o: ['It is a benzodiazepine agonist', 'It has a longer half-life than midazolam', 'Re-sedation can occur because its half-life is shorter than midazolam\'s', 'It reverses opioids', 'It should be given routinely to speed discharge'], a: 2, e: 'Flumazenil is a competitive antagonist with a half-life of ~1 hour, shorter than midazolam, so re-sedation can occur. It is not for routine use.' }
  ]
});
