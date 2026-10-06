window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd9', num: '9', order: 9,
  title: 'Capabilities in Practice',
  summary: 'The five CiPs that show you can work as a specialist: running an outpatient clinic, managing unselected urgent referrals, ongoing care of complex patients, running an operating list, and multidisciplinary working.',
  topics: [
    {
      id: 'd9-clinic', title: 'Managing an outpatient clinic', code: '9.1',
      syllabus: [
        'Assess new and review patients with structured history and focused examination; explain the plan',
        'Account for medical comorbidities and dental and social factors',
        'Identify capacity issues and ensure valid consent',
        'Adapt communication (interpreters, sign language) and use understandable language',
        'Request appropriate investigations without over-investigating; interpret in context',
        'Identify urgent conditions; use time well; promote health (smoking, alcohol, diet, weight)',
        'Integrate supervision and teaching of juniors/students',
        'Identify patients needing other opinions; complete documentation, letters and referrals',
        'Manage difficult situations including breaking bad news and complaints'
      ],
      notes: `
<h3>Running the clinic</h3>
<ul>
<li>Prepare: review referrals and triage, previous notes, imaging and results before the clinic; flag patients needing interpreters, chaperones, longer slots or accessibility support.</li>
<li>Structured consultation: introduce yourself, confirm identity, agenda, history, focused examination, investigations, diagnosis, options (including no treatment), shared decision, safety-net, plan, follow-up.</li>
<li>Time management: start on time, delegate appropriately, keep juniors supported without losing flow, deal with overruns proactively.</li>
</ul>
<h3>Consent and capacity</h3>
<ul>
<li>Valid consent: informed (material risks — Montgomery 2015, alternatives including no treatment), voluntary, by a person with capacity; documented; continuing (re-confirm on the day).</li>
<li><b>Mental Capacity Act 2005</b>: assume capacity; support decision-making; unwise decisions are allowed; act in best interests (consult family/carers, IMCA if unbefriended, check for lasting power of attorney for health or an advance decision); least restrictive option. Capacity is decision- and time-specific.</li>
<li>Children: person with parental responsibility, or a Gillick-competent young person. 16–17-year-olds are presumed to have capacity to consent.</li>
</ul>
<h3>Communication</h3>
<ul>
<li>Use professional interpreters (not family members, especially children) and BSL interpreters; plain language; check understanding (teach-back); written information in accessible formats.</li>
<li>Adjustments for learning disability, dementia, autism, sensory impairment (Accessible Information Standard).</li>
</ul>
<h3>Breaking bad news — SPIKES</h3>
<ol>
<li><b>S</b>etting: private room, time, support person, specialist nurse, no interruptions.</li>
<li><b>P</b>erception: what does the patient already understand?</li>
<li><b>I</b>nvitation: how much do they want to know?</li>
<li><b>K</b>nowledge: warning shot, clear plain language, small chunks, avoid jargon.</li>
<li><b>E</b>motions: acknowledge and respond with empathy; allow silence.</li>
<li><b>S</b>trategy and summary: next steps, contacts, written information, follow-up.</li>
</ol>
<h3>Complaints</h3>
<ul>
<li>Listen, acknowledge, apologise where appropriate (an apology is not an admission of liability), and try to resolve locally.</li>
<li>NHS complaints: acknowledge within 3 working days; investigate and respond in writing; escalation to the Parliamentary and Health Service Ombudsman (England). Involve the PALS team. Reflect and learn.</li>
<li><b>Duty of candour</b>: be open and honest when something goes wrong that causes (or could cause) harm — tell the patient, apologise, explain, and offer support (statutory duty for organisations; professional duty for individuals — GDC).</li>
</ul>
<h3>Health promotion in every consultation</h3>
<ul>
<li><b>Smoking</b>: very brief advice — Ask, Advise (stopping with support is the most effective way), Act (refer to NHS Stop Smoking Services; NRT/varenicline via services; e-cigarettes as a less harmful alternative).</li>
<li><b>Alcohol</b>: UK low-risk guideline ≤14 units/week spread over 3+ days; screen with AUDIT-C; brief advice.</li>
<li>Diet (sugar, fruit and vegetables), weight, oral cancer awareness, oral hygiene.</li>
</ul>
<h3>Investigations and documentation</h3>
<ul>
<li>Request investigations only if they will change management; justify radiographs (IR(ME)R); track results and act on them.</li>
<li>Records: contemporaneous, legible, dated/timed, signed, including discussions, consent, advice and plans.</li>
<li>Clinic letters to the GDP/GP (copy to the patient where appropriate): diagnosis, findings, plan, actions for each party, follow-up.</li>
</ul>
<h3>Teaching and supervision</h3>
<p>Plan teaching around the clinic, give students/juniors appropriate cases, supervise safely (you remain responsible), give feedback (e.g. Pendleton: learner's view of what went well → trainer adds → what could be improved → plan), complete workplace-based assessments.</p>
<div class="box pearl"><b>Safeguarding</b>Be alert to child or adult abuse and neglect (injuries inconsistent with history, delayed presentation, dental neglect, torn labial frenum in infants, coercive control). Follow local safeguarding procedures and refer the same day if a child is at risk.</div>`
    },
    {
      id: 'd9-urgent', title: 'Managing unselected urgent referrals', code: '9.2',
      syllabus: [
        'Structured history and focused examination; explain the plan',
        'Assess for sepsis, airway compromise and conditions needing immediate management',
        'Prescribe safely and effectively without over-prescribing; manage pain and concerns',
        'Manage time; liaise with specialties/GP; identify need for admission or ED assessment',
        'Manage stressful situations; complete documentation; supervise juniors managing urgent patients'
      ],
      notes: `
<h3>Triage priorities</h3>
<div class="tbl"><table><tr><th>Priority</th><th>Examples</th><th>Action</th></tr>
<tr><td>Immediate (life/sight-threatening)</td><td>Airway compromise, spreading infection with red flags, sepsis, uncontrolled haemorrhage, retrobulbar haemorrhage, anaphylaxis</td><td>ABCDE, call for help/999, ED/OMFS admission</td></tr>
<tr><td>Same day</td><td>Facial swelling without airway signs, post-operative bleeding controlled with local measures, displaced fragments, trauma (avulsion, luxation), acute nerve injury with implant/endodontic material in the canal</td><td>Assess and treat today</td></tr>
<tr><td>Urgent (days)</td><td>Dry socket, pericoronitis, suspected malignancy (urgent cancer pathway), fractured restorations with pain</td><td>Book promptly</td></tr>
<tr><td>Routine</td><td>Stable chronic problems</td><td>Clinic appointment</td></tr></table></div>
<h3>Assessment checklist</h3>
<ul>
<li>Airway (trismus, floor of mouth, voice, swallowing, stridor) and sepsis screen (NEWS2, red flags).</li>
<li>Pain history; medical history (anticoagulants, immunosuppression, diabetes, antiresorptives, allergies).</li>
<li>Focused examination; appropriate imaging; bloods if systemically unwell.</li>
</ul>
<h3>Admission or ED referral</h3>
<p>Airway risk, systemic sepsis, inability to swallow/maintain hydration, need for IV antibiotics or drainage under GA, uncontrolled bleeding, significant trauma (head injury, facial fractures), social factors (lives alone and unwell). Refer with SBAR and written handover.</p>
<h3>Prescribing</h3>
<ul>
<li>Treat the cause first (drainage, extraction, dressing); antibiotics only for spreading infection/systemic involvement or immunocompromise; narrow spectrum, shortest effective course; review.</li>
<li>Analgesia: paracetamol + ibuprofen; avoid opioids where possible; check interactions and contraindications.</li>
<li>Document indication, dose, duration and review.</li>
</ul>
<h3>Working under pressure</h3>
<ul>
<li>Prioritise, delegate, ask for senior help early; keep the team informed.</li>
<li>Supervise juniors seeing urgent patients: be available, review high-risk patients yourself, debrief.</li>
<li>Look after yourself and colleagues (breaks, hydration, raising concerns about workload).</li>
</ul>`
    },
    {
      id: 'd9-ongoing', title: 'Managing ongoing care of complex patients', code: '9.3',
      syllabus: [
        'Manage long-term and complex patients needing work-up before surgery (jaw pathology, MRONJ, multidisciplinary implant cases, orofacial pain, complex medical/social factors)',
        'Order special equipment, biomaterials or lab work in advance',
        'Follow up and act on investigations; chase results',
        'Keep thorough records; update the primary care team; handle queries; keep the patient at the centre'
      ],
      notes: `
<h3>Typical patients</h3>
<p>Jaw cysts and tumours under surveillance (OKC, ameloblastoma), MRONJ and ORN, implant rehabilitation (hypodontia, trauma, cancer), chronic orofacial pain, patients with complex medical histories (cardiac, haematological, transplant, oncology), or social complexity (safeguarding, carers, capacity).</p>
<h3>Good practice</h3>
<ul>
<li><b>Plan ahead</b>: order implants, biomaterials, surgical guides, laboratory work and special equipment before the operating date; confirm availability with theatre/clinic staff.</li>
<li><b>Results</b>: own the results you request — use a tracking system, act on them promptly, inform patients (especially abnormal results), and chase outstanding ones.</li>
<li><b>Records</b>: clear long-term care plans, surveillance intervals, MDT outcomes, consent discussions.</li>
<li><b>Communication</b>: regular updates to the GDP/GP (what they need to do — e.g. prevention, avoid extractions in MRONJ-risk patients); a named contact for patient/carer queries.</li>
<li><b>Patient-centred</b>: shared decisions, respect changing preferences, involve carers appropriately, review goals.</li>
<li><b>Safety-netting</b>: robust recall systems so surveillance patients aren't lost to follow-up.</li>
</ul>`
    },
    {
      id: 'd9-theatre', title: 'Managing an operating list', code: '9.4',
      syllabus: [
        'Prepare for the list: investigations complete, plan confirmed, records and imaging reviewed; liaise with waiting list team and colleagues',
        'Obtain valid consent, deal with unexpected issues and disagreements',
        'Lead the team brief; inform the team of equipment needs; liaise with the anaesthetist (airway, throat pack, antibiotics, steroids)',
        'Complete the WHO checklist at start and end',
        'Plan, perform and adapt the operation safely and efficiently; non-technical skills',
        'Write operation notes and post-op instructions; review patients; manage complications; teach'
      ],
      notes: `
<h3>Before the list</h3>
<ul>
<li>Check each patient: indication, imaging (correct side/tooth), pre-operative assessment, bloods (INR, glucose), consent form, anticoagulant plan, special requirements (latex allergy, interpreter, capacity/best interests).</li>
<li>Order the list sensibly (e.g. diabetics and children early, infected cases last, latex-allergic first).</li>
</ul>
<h3>Team brief and WHO Surgical Safety Checklist</h3>
<ul>
<li><b>Team brief</b> at the start of the list: introductions, each case, equipment/implants needed, anticipated problems, anaesthetic plan, throat pack plan.</li>
<li><b>Sign in</b> (before induction): identity, site marking, consent, allergies, airway risk, blood loss risk.</li>
<li><b>Time out</b> (before incision): team introductions, confirm patient, procedure and <b>site/tooth</b> (check against imaging), antibiotic prophylaxis, critical steps, imaging displayed.</li>
<li><b>Sign out</b> (before leaving theatre): procedure recorded, counts complete (including <b>throat pack removed</b>), specimens labelled, equipment problems, post-op plan.</li>
<li><b>NatSSIPs 2 (2023)/LocSSIPs</b>: national and local safety standards for invasive procedures, including outpatient LA procedures.</li>
<li>Wrong-site surgery (including wrong tooth extraction) and retained throat packs are <b>Never Events</b> — prevent with site marking/tooth charts, time-out against radiographs, and throat pack visual reminders (e.g. label on patient and airway) with documented removal.</li>
</ul>
<h3>Liaising with the anaesthetist</h3>
<p>Nasal vs oral intubation (access), throat pack, antibiotic prophylaxis, dexamethasone, LA with vasoconstrictor (amount), anticipated duration and blood loss, post-operative analgesia, day-case discharge criteria.</p>
<h3>Non-technical skills (NOTSS)</h3>
<ul>
<li><b>Situation awareness</b>: gathering information, understanding, projecting ahead.</li>
<li><b>Decision making</b>: considering options, selecting and communicating, reviewing.</li>
<li><b>Communication and teamwork</b>: exchanging information, shared understanding, coordinating.</li>
<li><b>Leadership</b>: setting standards, supporting others, coping with pressure.</li>
</ul>
<h3>Operation notes (RCS Good Surgical Practice)</h3>
<p>Date and time; surgeon, assistant, anaesthetist; procedure; indication; findings; incision and technique; complications and actions; closure (sutures); specimens; estimated blood loss; implants/biomaterials (with lot numbers); drains/packs; post-operative instructions (analgesia, antibiotics, diet, follow-up, suture removal); signature.</p>
<h3>After surgery</h3>
<ul>
<li>Clear verbal and written post-operative instructions to patient/escort/ward staff, with emergency contact.</li>
<li>Review patients before discharge; manage complications safely and ask for help when needed.</li>
<li>Debrief at the end of the list; report incidents.</li>
<li>Teach and supervise trainees appropriately during the list.</li>
</ul>`
    },
    {
      id: 'd9-mdt', title: 'Multidisciplinary working', code: '9.5',
      syllabus: [
        'Select patients for MDT discussion; follow administrative processes; handle inappropriate referrals',
        'Present relevant history, comorbidities and investigations; identify unusual, serious or urgent cases',
        'Engage constructively, manage uncertainty and conflicting opinions',
        'Develop and communicate a clear plan to patient, GP and administrative staff; maintain records; manage time',
        'Arrange follow-up investigations and know indications for follow-up'
      ],
      notes: `
<h3>Which patients need an MDT?</h3>
<p>Hypodontia and trauma implant planning (orthodontics, restorative, oral surgery), ectopic teeth and syndromes (orthodontics), salivary gland disease, head and neck cancer, facial pain, complex jaw pathology, medically complex surgery, cleft.</p>
<h3>Preparing and presenting</h3>
<ul>
<li>Submit cases on time with complete information; postpone discussion if information or imaging is incomplete or out of date.</li>
<li>Present concisely: patient (age, relevant comorbidities, performance status, social factors, wishes), presenting problem, findings, investigations (imaging, histology), the question for the MDT.</li>
<li>Highlight urgent or unusual features.</li>
</ul>
<h3>During the discussion</h3>
<ul>
<li>Listen to all members; contribute your specialty view with evidence; recognise uncertainty and say so.</li>
<li>Manage conflicting opinions respectfully — focus on the patient's interests and preferences; agree further investigation or a second opinion if needed.</li>
<li>Keep to time so the whole list is discussed.</li>
</ul>
<h3>After the MDT</h3>
<ul>
<li>Record the outcome clearly (decision, responsible clinician, actions, timescales).</li>
<li>Communicate the plan to the patient (the MDT recommends; the patient decides), GP/GDP and administrative staff; arrange investigations and follow-up.</li>
<li>Audit MDT decisions and outcomes.</li>
</ul>
<div class="box pearl"><b>Exam pearl</b>CiP questions are often framed as "what would you do?" scenarios. Show patient safety first, clear communication, teamwork, knowing your limits, documentation, and learning from events.</div>`
    }
  ],
  cards: [
    ['Four elements of valid consent?', 'Informed, voluntary, by a person with capacity, and documented/continuing.'],
    ['Five principles of the Mental Capacity Act?', 'Presume capacity; support decision-making; unwise decisions allowed; best interests; least restrictive option.'],
    ['SPIKES?', 'Setting, Perception, Invitation, Knowledge, Emotions, Strategy/summary.'],
    ['NHS complaint acknowledgement timescale?', 'Within 3 working days.'],
    ['What is the duty of candour?', 'Being open and honest with patients when something goes wrong that causes or could cause harm: tell, apologise, explain, support.'],
    ['Very brief advice for smoking?', 'Ask, Advise, Act (refer to stop smoking services).'],
    ['UK low-risk alcohol guideline?', 'No more than 14 units a week, spread over 3 or more days.'],
    ['Three phases of the WHO Surgical Safety Checklist?', 'Sign in, Time out, Sign out.'],
    ['Two Never Events most relevant to oral surgery?', 'Wrong-site surgery (wrong tooth) and retained foreign object (throat pack).'],
    ['NOTSS categories?', 'Situation awareness, decision making, communication and teamwork, leadership.'],
    ['What does NatSSIPs stand for?', 'National Safety Standards for Invasive Procedures (version 2 published 2023).'],
    ['Pendleton feedback model order?', 'Learner says what went well, trainer adds, learner says what to improve, trainer adds, agree a plan.'],
    ['When should an MDT discussion be postponed?', 'When information or imaging is incomplete or out of date.'],
    ['Who makes the final decision after an MDT recommendation?', 'The patient, after informed discussion.']
  ],
  mcqs: [
    { q: 'At the WHO time-out, the radiograph shows the lower right 8 but the consent form says lower left 8. What should you do?', o: ['Proceed with the consent form', 'Proceed with the radiograph', 'Stop, verify with the patient, notes and referral, and re-consent if necessary before proceeding', 'Remove both teeth', 'Ask the nurse to decide'], a: 2, e: 'Any discrepancy at time-out must halt the procedure until the correct site is confirmed with the patient and records, preventing a wrong-site Never Event.' },
    { q: 'A 78-year-old with dementia needs extractions under GA. They can\'t retain information about the procedure. There is no LPA or advance decision. What is the correct approach?', o: ['Their daughter signs consent on their behalf', 'Proceed in their best interests after consulting family/carers, documenting the capacity assessment and best-interests decision (Consent Form 4)', 'Treatment cannot go ahead', 'Ask the GP to consent', 'Wait until capacity returns'], a: 1, e: 'Under the MCA, without an LPA (health) or valid advance decision, the clinician decides in the patient\'s best interests after consulting relevant people, documenting the capacity assessment and decision.' },
    { q: 'An MDT can\'t agree whether to resect or decompress a large OKC. What is the best next step?', o: ['The most senior surgeon decides', 'Discuss options, risks and uncertainty with the patient and agree a shared decision; consider further imaging or a second opinion', 'Choose the cheapest option', 'Do both procedures', 'Discharge the patient'], a: 1, e: 'When uncertainty exists, be transparent with the patient, present the options and risks, and reach a shared decision; additional investigations or opinions can help.' }
  ]
});
