window.OS = window.OS || { domains: [], guidelines: [] };
OS.domains.push({
  id: 'd2', num: '2', order: 2,
  title: 'Hard and soft tissue trauma',
  summary: 'Assessment and management of trauma to the dentition, alveolus, facial skeleton, soft tissues and TMJ — from the ABCDE primary survey to IADT splinting protocols and recognising when OMFS must take over.',
  topics: [
    {
      id: 'd2-systems', title: 'Trauma systems, guidelines and classification', code: '2.1',
      syllabus: [
        'Know a systematic, prioritised method of trauma management and injury scoring',
        'Know current dental trauma guidelines (IADT; dentaltrauma.co.uk)',
        'Know complications of cervical spine injuries',
        'Know classification systems for dentoalveolar and facial injuries (e.g. AO Foundation Surgery Reference)'
      ],
      notes: `
<h3>ATLS primary survey: &lt;C&gt;ABCDE</h3>
<div class="tbl"><table><tr><th>Step</th><th>What to do</th></tr>
<tr><td>&lt;C&gt; Catastrophic haemorrhage</td><td>Direct pressure, packing, tourniquet (limbs)</td></tr>
<tr><td>A — Airway with c-spine control</td><td>Look, listen, feel; clear debris, teeth, dentures, blood; jaw thrust (not head tilt if c-spine risk); adjuncts; definitive airway if GCS ≤8 or threatened airway</td></tr>
<tr><td>B — Breathing</td><td>RR, SpO₂, chest movement; high-flow oxygen</td></tr>
<tr><td>C — Circulation</td><td>HR, BP, cap refill; control bleeding; IV access, bloods, cross-match; tranexamic acid within 3 h of injury (CRASH-2)</td></tr>
<tr><td>D — Disability</td><td>GCS, pupils, blood glucose</td></tr>
<tr><td>E — Exposure</td><td>Full exposure, prevent hypothermia, log roll</td></tr></table></div>
<p>Then the <b>secondary survey</b> (head-to-toe, including maxillofacial examination) and AMPLE history (Allergies, Medications, Past history, Last meal, Events).</p>
<h3>Glasgow Coma Scale (3–15)</h3>
<div class="tbl"><table><tr><th>Eyes (4)</th><th>Verbal (5)</th><th>Motor (6)</th></tr>
<tr><td>4 spontaneous<br>3 to voice<br>2 to pain<br>1 none</td><td>5 orientated<br>4 confused<br>3 inappropriate words<br>2 sounds<br>1 none</td><td>6 obeys<br>5 localises<br>4 withdraws<br>3 abnormal flexion<br>2 extension<br>1 none</td></tr></table></div>
<p>Injury severity scoring: Injury Severity Score (ISS, from the Abbreviated Injury Scale; &gt;15 = major trauma), Revised Trauma Score.</p>
<h3>Dental trauma guidelines</h3>
<ul>
<li><b>IADT 2020</b> (International Association of Dental Traumatology): fractures and luxations, avulsion of permanent teeth, injuries in the primary dentition, general introduction.</li>
<li><b>Dental Trauma Guide / dentaltrauma.co.uk</b> (UK): treatment algorithms and follow-up schedules.</li>
</ul>
<h3>Cervical spine injury</h3>
<ul>
<li>Suspect with high-energy mechanism, facial fractures (especially mandible and midface), head injury, neck pain, neurological signs.</li>
<li>Clearance: Canadian C-spine rule / NEXUS; CT if indicated.</li>
<li><b>Complications</b>: spinal cord injury (tetraplegia/paraplegia), <b>neurogenic shock</b> (hypotension with bradycardia — loss of sympathetic tone), respiratory failure (C3–5 phrenic nerve), autonomic dysreflexia (later, lesions above T6), pressure sores, VTE.</li>
<li>Airway management with manual in-line stabilisation; jaw thrust rather than head tilt.</li>
</ul>
<h3>Classifications</h3>
<ul>
<li><b>Teeth (Andreasen/IADT)</b>: infraction, enamel fracture, enamel–dentine fracture, complicated crown fracture, crown–root fracture, root fracture; concussion, subluxation, extrusive, lateral, intrusive luxation, avulsion; alveolar fracture.</li>
<li><b>Mandible</b>: by site (condyle, coronoid, ramus, angle, body, parasymphysis, symphysis, alveolar), pattern (simple, compound, comminuted, greenstick, pathological), favourability.</li>
<li><b>Midface</b>: Le Fort I, II, III; zygomatic complex; orbital floor; naso-orbito-ethmoid (NOE); nasal.</li>
<li><b>AO CMF</b> trauma classification: systematic, levels of detail for mandible, midface, skull base.</li>
</ul>`
    },
    {
      id: 'd2-assess', title: 'Assessing the trauma patient and critical conditions', code: '2.2',
      syllabus: [
        'Assess a patient who has suffered trauma, including ABCDE assessment',
        'Recognise life-threatening airway compromise, head injury, sight-threatening trauma and haemorrhage from the mouth, jaws, face and neck, and manage or refer urgently'
      ],
      notes: `
<h3>Airway threats in maxillofacial trauma</h3>
<ul>
<li><b>Bilateral parasymphyseal mandible fractures</b>: loss of genioglossus support → tongue falls back. Pull the tongue forward (suture/towel clip) or the anterior fragment.</li>
<li><b>Posteriorly displaced Le Fort fractures</b>: maxilla slides down and back along the skull base, obstructing the nasopharynx — disimpact by pulling the maxilla forward (fingers behind the soft palate).</li>
<li>Bleeding, broken teeth/dentures, vomit, swelling (floor of mouth haematoma, burns, expanding neck haematoma), laryngeal injury (hoarseness, surgical emphysema).</li>
<li>Patients with facial fractures often prefer to sit forward — let them if the c-spine is cleared.</li>
</ul>
<h3>Head injury — NICE NG232 (2023)</h3>
<div class="box flag"><b>CT head within 1 hour if any</b><ul><li>GCS &lt;13 on initial assessment, or &lt;15 two hours after injury</li><li>Suspected open or depressed skull fracture</li><li>Signs of basal skull fracture: haemotympanum, "panda" eyes, CSF from ear or nose, Battle's sign</li><li>Post-traumatic seizure; focal neurological deficit; more than one episode of vomiting</li></ul></div>
<p>Also consider CT for patients on anticoagulants, and for those with amnesia or loss of consciousness plus age ≥65, bleeding disorder or dangerous mechanism. Always ask about loss of consciousness, amnesia, headache and vomiting.</p>
<h3>Sight-threatening injuries</h3>
<div class="box flag"><b>Retrobulbar haemorrhage — emergency</b><p>Severe eye pain, proptosis, tense globe, falling visual acuity, ophthalmoplegia, RAPD/dilated pupil. Irreversible optic nerve ischaemia within ~90 minutes. Treat immediately: <b>lateral canthotomy and inferior cantholysis</b>; medical adjuncts (IV mannitol, acetazolamide, dexamethasone); urgent OMFS/ophthalmology.</p></div>
<ul>
<li><b>"White-eyed" orbital floor blowout</b> (children): trapdoor fracture entraps inferior rectus — little bruising but restricted upgaze, pain, nausea, vomiting, bradycardia (oculocardiac reflex). Needs urgent release.</li>
<li>Check visual acuity (each eye), pupils, eye movements, diplopia, and fundi in all midface/orbital injuries. Globe rupture: do not press on the eye.</li>
</ul>
<h3>Haemorrhage from the mouth, jaws, face and neck</h3>
<ul>
<li>Direct pressure, packing, sutures, bone wax, LA with vasoconstrictor.</li>
<li>Midface: anterior/posterior nasal packs, Foley catheters, bite blocks, temporary reduction of fractures (IMF).</li>
<li>Persistent: interventional radiology (embolisation) or ligation of the external carotid branches.</li>
<li>Neck wounds that breach platysma — don't probe; ATLS approach, urgent surgical assessment.</li>
</ul>
<h3>Maxillofacial examination (secondary survey)</h3>
<ul>
<li>Inspect: asymmetry, swelling, lacerations, bruising (periorbital, mastoid, sublingual), CSF leak.</li>
<li>Palpate systematically: frontal bone, orbital rims, zygomatic arches and bodies, nasal bones, mandibular border and condyles (in the ear canal on opening).</li>
<li>Eyes (above). Sensation: supraorbital, infraorbital, mental nerves. Facial nerve function.</li>
<li>Intraoral: occlusion, steps, mobile segments, sublingual haematoma, mucosal tears, tooth injuries, mobility of the maxilla (grasp anterior maxilla, stabilise the head).</li>
</ul>`
    },
    {
      id: 'd2-fractures', title: 'Tooth fractures', code: '2.3.1',
      syllabus: [
        'Diagnose tooth and root fractures',
        'Know current management protocols for tooth and root fractures',
        'Provide emergency management and refer on for specialist management if necessary'
      ],
      notes: `
<h3>Crown fractures (permanent teeth, IADT 2020)</h3>
<div class="tbl"><table><tr><th>Injury</th><th>Management</th><th>Follow-up</th></tr>
<tr><td>Enamel infraction</td><td>None, or seal with resin</td><td>Usually none needed</td></tr>
<tr><td>Enamel fracture</td><td>Reattach fragment or smooth/composite</td><td>6–8 weeks, 1 year</td></tr>
<tr><td>Enamel–dentine (uncomplicated)</td><td>Reattach fragment or composite; if within 0.5 mm of pulp, place calcium hydroxide/GIC liner</td><td>6–8 weeks, 1 year</td></tr>
<tr><td>Complicated crown fracture (pulp exposed)</td><td>Preserve the pulp: <b>pulp cap or partial pulpotomy (Cvek)</b> with non-staining calcium silicate cement — especially in immature teeth; then restore. Mature teeth may need RCT (e.g. if a post is needed)</td><td>6–8 weeks, 3 months, 6 months, 1 year, then yearly to 5 years</td></tr></table></div>
<p>Cvek partial pulpotomy: remove 2 mm of inflamed pulp below the exposure — high success even days after injury, because exposed pulp becomes inflamed only superficially.</p>
<h3>Crown–root fracture</h3>
<p>Emergency: stabilise the loose fragment (bond to adjacent teeth) or remove it and cover exposed dentine/pulp. Definitive options:</p>
<ul>
<li>Fragment removal and supragingival restoration (if fracture is shallow palatally)</li>
<li>Orthodontic or surgical extrusion to bring the margin supragingival</li>
<li>RCT and post-retained crown, crown lengthening</li>
<li>Intentional replantation with 180° rotation</li>
<li><b>Decoronation</b> in growing patients if non-restorable (preserves alveolar bone)</li>
<li>Extraction (vertical fractures, non-restorable) with space management</li>
</ul>
<h3>Root fractures</h3>
<ul>
<li>Horizontal/oblique; usually middle third. Diagnosis: mobile crown segment, radiographs at different angles or CBCT (fracture may only show at specific angulations).</li>
<li>Reposition the coronal fragment if displaced; <b>flexible splint for 4 weeks</b> (cervical-third fractures: up to 4 months).</li>
<li>Monitor pulp. Pulp necrosis usually affects only the coronal fragment — if needed, RCT the coronal segment to the fracture line only.</li>
<li>Prognosis best for apical-third fractures. Cervical-third fractures above the bone crest have poor prognosis.</li>
<li>Healing types (Andreasen): hard tissue (calcified callus), interposition of connective tissue (PDL), bone and connective tissue, interposition of granulation tissue (non-healing — infection).</li>
</ul>
<h3>Pulp assessment after trauma</h3>
<p>Sensibility tests (cold, EPT) are unreliable for weeks to months after trauma — a negative response alone doesn't mean necrosis. Signs of necrosis: persistent grey discolouration, periapical radiolucency, sinus tract, infection-related resorption. Pulse oximetry and laser Doppler flowmetry measure blood flow more reliably.</p>`
    },
    {
      id: 'd2-luxation', title: 'Luxation injuries and splinting', code: '2.3.1',
      syllabus: [
        'Assess and diagnose luxation injuries',
        'Know current management protocols for luxation injuries',
        'Provide emergency management, splint appropriately, and refer for specialist management if needed'
      ],
      notes: `
<h3>Permanent teeth (IADT 2020)</h3>
<div class="tbl"><table><tr><th>Injury</th><th>Signs</th><th>Treatment</th><th>Splint</th></tr>
<tr><td>Concussion</td><td>Tender to percussion; no mobility, no displacement</td><td>Monitor pulp</td><td>None</td></tr>
<tr><td>Subluxation</td><td>Increased mobility, no displacement, sulcular bleeding</td><td>Monitor; soft diet</td><td>Optional, flexible, up to 2 weeks for comfort</td></tr>
<tr><td>Extrusion</td><td>Tooth appears elongated, very mobile</td><td>Reposition gently into socket under LA</td><td>Flexible, 2 weeks</td></tr>
<tr><td>Lateral luxation</td><td>Crown displaced (usually palatally), often locked in bone, high metallic percussion note</td><td>Disengage from bony lock (push apex out of its locked position) and reposition</td><td>Flexible, 4 weeks</td></tr>
<tr><td>Intrusion</td><td>Tooth pushed into bone, immobile, metallic note</td><td>See below</td><td>Flexible, 4 weeks after repositioning</td></tr></table></div>
<h4>Intrusion — permanent teeth</h4>
<ul>
<li><b>Immature root</b>: allow spontaneous re-eruption regardless of degree. If no movement within ~4 weeks, orthodontic repositioning.</li>
<li><b>Mature root</b>: &lt;3 mm — allow spontaneous re-eruption (if none in 8 weeks, reposition surgically or orthodontically); 3–7 mm — surgical or orthodontic repositioning; &gt;7 mm — surgical repositioning.</li>
<li>Mature intruded teeth almost always lose vitality — start RCT within ~2 weeks (calcium hydroxide intracanal dressing).</li>
</ul>
<p>Pulp necrosis risk rises with the degree of displacement and root maturity: highest for intrusion and lateral luxation of mature teeth; lowest for concussion of immature teeth. For mature teeth after extrusion, lateral luxation or intrusion, anticipate necrosis and start RCT early when indicated.</p>
<h3>Splinting</h3>
<div class="box guide"><b>IADT splint principles</b><ul><li><b>Passive and flexible</b>: stainless steel wire up to 0.4 mm diameter, or nylon line (0.13–0.25 mm), bonded with composite to the labial surfaces; or titanium trauma splint</li><li>Include one sound tooth either side</li><li>Keep composite away from gingivae and proximal areas (hygiene)</li><li>2 weeks: subluxation (optional), extrusion, avulsion</li><li>4 weeks: lateral luxation, intrusion, root fracture (middle/apical third), alveolar fracture</li><li>Up to 4 months: cervical-third root fracture</li></ul></div>
<h3>Primary teeth (IADT 2020)</h3>
<ul>
<li>Main aim: protect the developing permanent successor. Treatment is simpler and more conservative.</li>
<li><b>Intrusion</b>: allow spontaneous repositioning, irrespective of direction of displacement; review closely.</li>
<li><b>Lateral luxation</b>: if no occlusal interference, allow spontaneous repositioning; if severe displacement, extract or gently reposition.</li>
<li><b>Extrusion</b>: minor — reposition or allow to settle; severe (&gt;3 mm) in a young child — extract.</li>
<li><b>Avulsion</b>: <b>never replant</b> avulsed primary teeth.</li>
<li><b>Root fracture</b>: displaced coronal fragment — remove it, leave the apical fragment to resorb.</li>
<li>Warn parents about possible sequelae in the permanent tooth: enamel hypoplasia/discolouration (Turner tooth), crown or root dilaceration, eruption disturbance.</li>
</ul>
<h3>Follow-up</h3>
<p>Typical schedule after significant luxation: 2 weeks (splint removal for extrusion), 4 weeks, 8 weeks, 12 weeks, 6 months, 1 year, then yearly for at least 5 years. Each visit: symptoms, mobility, percussion note, colour, sensibility, radiographs (PDL space, apical status, resorption, root development).</p>`
    },
    {
      id: 'd2-avulsion', title: 'Avulsion and replantation', code: '2.3.1',
      syllabus: [
        'Assess and diagnose avulsion injuries of the primary and permanent dentition',
        'Know the indications for replanting teeth',
        'Know the current splinting guidelines and review protocol',
        'Reimplant avulsed teeth, splint, and provide aftercare and follow-up'
      ],
      notes: `
<h3>First aid (phone advice)</h3>
<ol>
<li>Find the tooth; hold it by the <b>crown</b>, not the root.</li>
<li>If dirty, rinse briefly in cold running water or milk (≤10 seconds).</li>
<li><b>Replant immediately</b> if possible; bite on a handkerchief to hold it; attend urgently.</li>
<li>If not possible: store in milk (best widely available), HBSS (Hank's balanced salt solution), saline, or the patient's saliva (in the buccal sulcus or spat into a cup). Not water (hypotonic — kills PDL cells).</li>
</ol>
<p>The critical factor for PDL survival is <b>extraoral dry time</b>: after ~60 minutes dry, PDL cells are non-viable; after ~30 minutes outcomes worsen.</p>
<h3>Contraindications to replantation</h3>
<p>Primary teeth; severe medical conditions (immunosuppression, severe cardiac risk — relative); poor cooperation; severely damaged supporting tissues; non-restorable tooth. Patient's/parent's informed choice after discussing prognosis.</p>
<h3>Clinic management — closed apex (IADT 2020)</h3>
<div class="tbl"><table><tr><th>Situation</th><th>Management</th></tr>
<tr><td>Already replanted</td><td>Clean area with saline/chlorhexidine; check position clinically and radiographically; LA if adjustment needed; flexible splint 2 weeks; suture lacerations</td></tr>
<tr><td>Stored physiologically or dry &lt;60 min</td><td>Clean root surface with saline (don't scrub); LA; irrigate socket and remove clot; replant slowly with light digital pressure; verify; flexible splint 2 weeks</td></tr>
<tr><td>Dry &gt;60 min</td><td>Remove necrotic PDL gently with gauze; replant (long-term prognosis poor — expect replacement resorption/ankylosis); splint 2 weeks. RCT can be done before replantation or within 2 weeks</td></tr></table></div>
<ul>
<li>Start <b>root canal treatment within 2 weeks</b> (calcium hydroxide or corticosteroid–antibiotic intracanal medicament).</li>
<li>Systemic antibiotics (e.g. amoxicillin or phenoxymethylpenicillin; doxycycline in older children/adults, avoiding tetracycline staining in young children).</li>
<li>Check tetanus status — refer for booster if needed (soil contamination).</li>
<li>Advise soft diet for 2 weeks, chlorhexidine 0.12% rinses, careful brushing; avoid contact sport.</li>
</ul>
<h3>Open apex</h3>
<ul>
<li>If replanted within 60 minutes dry time, the pulp may revascularise. Avoid RCT unless signs of necrosis/infection appear; then consider regenerative endodontics or apexification.</li>
<li>Topical antibiotics on the root (minocycline/doxycycline) may be considered — evidence is limited.</li>
<li>Dry &gt;60 min in a growing patient: ankylosis likely → tooth becomes infraoccluded as the alveolus grows. Plan <b>decoronation</b> (Malmgren technique: remove crown below bone level, leave root to be replaced by bone) when infraposition develops — preserves ridge width and height for future implant.</li>
</ul>
<h3>Follow-up after replantation</h3>
<p>2 weeks (splint off, start RCT), 4 weeks, 3 months, 6 months, 1 year, then yearly for at least 5 years.</p>
<h3>Outcomes and complications</h3>
<ul>
<li><b>PDL healing</b>: normal mobility and percussion note, intact lamina dura.</li>
<li><b>Replacement resorption (ankylosis)</b>: high metallic percussion note, no physiological mobility, loss of PDL space, infraocclusion in growing patients.</li>
<li><b>Inflammatory (infection-related) resorption</b>: bowl-shaped radiolucencies in root and adjacent bone; rapid in young patients — prevented/arrested by timely RCT.</li>
<li>Pulp necrosis, pulp canal obliteration (immature teeth).</li>
</ul>
<div class="box pearl"><b>Exam pearl</b>The two numbers: <b>60 minutes</b> dry time and <b>2 weeks</b> (flexible splint, start of RCT for closed-apex teeth). And never replant a primary tooth.</div>`
    },
    {
      id: 'd2-alveolar', title: 'Dentoalveolar fractures', code: '2.3.2',
      syllabus: [
        'Assess and diagnose dentoalveolar fractures',
        'Manage isolated dentoalveolar fractures'
      ],
      notes: `
<h3>Diagnosis</h3>
<ul>
<li>A segment of alveolar bone with teeth moves as a unit; teeth in the segment may also be injured.</li>
<li>Gingival laceration, malocclusion, step, tenderness; mobility testing one tooth moves its neighbours.</li>
<li>Radiographs: periapicals at different angles, occlusal, DPT; CBCT if needed. Exclude fractures of the jaw itself (mandibular body, maxilla).</li>
</ul>
<h3>Management</h3>
<ol>
<li>LA; reposition the segment manually (disimpact if locked).</li>
<li>Suture gingival lacerations.</li>
<li>Stabilise with a <b>flexible splint for 4 weeks</b> (wire-composite or arch bar for larger segments).</li>
<li>Antibiotics (compound fracture), chlorhexidine, soft diet, analgesia, tetanus check.</li>
<li>Follow up: pulp status of teeth in the segment (necrosis common), root resorption, bony healing. Schedule as for luxation injuries.</li>
</ol>
<p>Refer to OMFS if the fracture extends beyond the alveolus, the segment cannot be reduced, or there is significant comminution/bone loss.</p>`
    },
    {
      id: 'd2-mandible', title: 'Mandibular fractures', code: '2.3.3',
      syllabus: [
        'Assess and diagnose mandibular fractures',
        'Instigate appropriate management, which may mean referral to OMFS for definitive treatment',
        'Know the managements (IMF, ORIF) and their complications and risks'
      ],
      notes: `
<h3>Distribution</h3>
<p>Condyle (~30%), angle (~25%), body (~20%), symphysis/parasymphysis (~15–20%), ramus, coronoid, alveolar. The mandible behaves like a ring: look for a second fracture (e.g. parasymphysis + contralateral angle or condyle).</p>
<h3>Clinical signs</h3>
<ul>
<li>Pain, swelling, bruising; <b>sublingual haematoma</b> (highly suggestive of body/symphysis fracture)</li>
<li>Malocclusion, step in the occlusion, abnormal mobility, crepitus</li>
<li>Lower lip and chin numbness (IAN injury in angle/body fractures)</li>
<li>Gingival tear between teeth, bleeding, trismus, drooling, foul breath (late)</li>
<li><b>Condyle</b>: preauricular pain/swelling, bleeding from the ear (torn external auditory meatus); unilateral — deviation of chin to the <b>affected side</b> on opening, premature contact on the affected side, contralateral open bite; bilateral — <b>anterior open bite</b> and retrusion</li>
</ul>
<h3>Imaging</h3>
<p>Two views at right angles: <b>DPT + PA mandible</b>. CT for condylar, comminuted or complex fractures and associated injuries.</p>
<h3>Favourable vs unfavourable</h3>
<p>Depends on fracture line direction relative to muscle pull. <b>Horizontally unfavourable</b> angle fracture: masseter, temporalis and medial pterygoid pull the posterior fragment upwards. <b>Vertically unfavourable</b>: medial pterygoid pulls the posterior fragment medially.</p>
<h3>Initial management (oral surgeon)</h3>
<ul>
<li>ABCDE, airway check (bilateral parasymphyseal fractures).</li>
<li>Analgesia; antibiotics for compound fractures (any fracture through tooth-bearing bone is compound into the mouth), e.g. co-amoxiclav or penicillin + metronidazole.</li>
<li>Temporary stabilisation (bridle wire around teeth either side of the fracture) reduces pain and movement.</li>
<li>Urgent referral to OMFS; soft diet, chlorhexidine, nil by mouth if surgery imminent.</li>
</ul>
<h3>Definitive management (OMFS)</h3>
<ul>
<li><b>ORIF</b> with titanium miniplates (monocortical screws) along <b>Champy's ideal lines of osteosynthesis</b>: at the angle, one plate along the external oblique ridge/superior border; between the mental foramina, two plates (upper and lower) to resist torsion. Load-bearing reconstruction plates for comminuted, atrophic or defect fractures.</li>
<li><b>Closed reduction and IMF</b> (arch bars, IMF screws, eyelet wires) for 4–6 weeks: some condylar, comminuted or paediatric fractures, or where ORIF isn't possible. Wire cutters/scissors must accompany the patient (vomiting/airway).</li>
<li><b>Conservative</b>: undisplaced fractures with normal occlusion — soft diet, analgesia, close review.</li>
<li><b>Condylar fractures</b>: children — conservative (remodelling potential; early mobilisation to avoid ankylosis). Adults — conservative/IMF with elastic guidance or ORIF for displaced/dislocated fractures, shortened ramus height, inability to restore occlusion.</li>
<li><b>Teeth in the fracture line</b>: keep if they help reduction and are healthy; remove if mobile, fractured root, periodontally compromised, infected, preventing reduction (partially erupted third molars are often removed).</li>
</ul>
<h3>Complications</h3>
<p>Infection (commonest — especially angle fractures), malunion, non-union, malocclusion, IAN/mental nerve paraesthesia, plate exposure/loosening (plate removal), damage to tooth roots by screws, TMJ ankylosis (intracapsular condylar fracture in children), growth disturbance, weight loss on IMF.</p>`
    },
    {
      id: 'd2-midface', title: 'Midface, zygomatic, orbital and nasal fractures', code: '2.3.3',
      syllabus: [
        'Knowledge of how to assess and diagnose maxillary, zygomatic, nasal and other facial fractures',
        'Instigate appropriate management, which may mean referral to OMFS'
      ],
      notes: `
<h3>Le Fort fractures</h3>
<div class="tbl"><table><tr><th>Type</th><th>Fracture line</th><th>Key signs</th></tr>
<tr><td>Le Fort I (Guérin)</td><td>Horizontal, above the tooth apices, through the lateral and medial maxillary walls and pterygoid plates</td><td>Mobile tooth-bearing maxilla ("floating palate"), malocclusion with posterior gagging, palatal haematoma</td></tr>
<tr><td>Le Fort II (pyramidal)</td><td>Across nasal bones, medial orbital wall, orbital floor, infraorbital rim, zygomaticomaxillary suture, pterygoid plates</td><td>"Dish face", bilateral periorbital bruising, infraorbital numbness, epistaxis, possible CSF rhinorrhoea, nasomaxillary complex moves</td></tr>
<tr><td>Le Fort III (craniofacial dysjunction)</td><td>Through frontozygomatic sutures, orbits, nasofrontal junction, zygomatic arches</td><td>Elongated flattened face, "panda eyes", CSF leak, whole midface moves relative to the skull</td></tr></table></div>
<p>Common to all: anterior open bite with posterior gagging (maxilla displaced down and back), epistaxis. Test mobility by grasping the anterior maxilla while stabilising the forehead. CSF rhinorrhoea: halo/target sign on tissue, glucose, β2-transferrin (definitive). Management: ABCDE, airway (disimpaction), head-injury assessment, CT, OMFS for ORIF.</p>
<h3>Zygomatic complex (tetrapod) fracture</h3>
<ul>
<li>Fractures at the frontozygomatic suture, infraorbital rim/orbital floor, zygomatic buttress and zygomatic arch.</li>
<li>Signs: flattening of the cheek (masked by swelling), periorbital bruising, <b>subconjunctival haemorrhage with no posterior limit</b>, step at the infraorbital rim, infraorbital nerve numbness (cheek, side of nose, upper lip, upper teeth), unilateral epistaxis, <b>trismus</b> (depressed arch impinges on the coronoid), diplopia, enophthalmos, surgical emphysema after nose blowing.</li>
<li>Imaging: occipitomental views (OM15°, OM30°), submentovertex for the arch; CT for surgical planning.</li>
<li>Management: undisplaced — conservative, advise <b>no nose blowing</b>; displaced — elevation (Gillies temporal approach for isolated arch or simple ZMC) or ORIF; urgent eye examination.</li>
</ul>
<h3>Orbital floor (blowout) fracture</h3>
<ul>
<li>Signs: diplopia (especially upgaze), restricted eye movement (inferior rectus entrapment), enophthalmos, infraorbital numbness, periorbital emphysema.</li>
<li>CT orbits. Indications for repair: entrapment (urgent in children — oculocardiac reflex), persistent diplopia, enophthalmos &gt;2 mm, large floor defect (&gt;50%). Repair with titanium mesh, PDS sheet or bone graft.</li>
<li>Advise no nose blowing; ophthalmology review.</li>
</ul>
<h3>Nasal fractures</h3>
<ul>
<li>Deviation, epistaxis, swelling, crepitus. Clinical diagnosis — X-rays not routinely needed.</li>
<li><b>Septal haematoma</b>: bluish boggy swelling of the septum — drain urgently to prevent avascular necrosis of cartilage (saddle nose) and septal abscess.</li>
<li>Manipulation under anaesthesia once swelling settles (~5–10 days, within 2–3 weeks).</li>
</ul>
<h3>Naso-orbito-ethmoid (NOE) fractures</h3>
<p>Telecanthus (widened intercanthal distance &gt; ~35 mm), flattened nasal bridge, CSF leak, lacrimal injury. Specialist reconstruction.</p>
<div class="box pearl"><b>Exam pearl</b>As an oral surgeon your job here is to recognise, protect the airway and eyes, document, and refer promptly — not to perform definitive midface fixation.</div>`
    },
    {
      id: 'd2-soft', title: 'Soft tissue injuries of the face and mouth', code: '2.3.4',
      syllabus: [
        'Assess and diagnose perioral and intraoral soft tissue injuries',
        'Manage perioral and intraoral soft tissue injuries, liaising with other specialties for extensive injuries',
        'Knowledge of managing facial soft tissue injuries; refer when too extensive (plastics, OMFS)',
        'Debride and repair soft tissue injuries of the mouth and perioral area'
      ],
      notes: `
<h3>Assessment</h3>
<ul>
<li>Mechanism (sharp, blunt, bite, burn), time since injury, contamination, tetanus status, anticoagulants.</li>
<li>Depth and tissue loss; involvement of key structures: <b>facial nerve</b> (test all branches before LA), <b>parotid duct</b> (wound on a line from tragus to mid-upper lip; saliva in wound), lacrimal apparatus, vermilion border, eyelids, nasal cartilage.</li>
<li><b>Foreign bodies</b>: tooth fragments in the lip — soft tissue radiograph (reduced exposure) of the lip.</li>
</ul>
<h3>Repair principles</h3>
<ol>
<li>LA (consider regional blocks — infraorbital, mental — to avoid distorting tissues).</li>
<li>Copious saline irrigation; remove debris (prevent traumatic tattooing — scrub grit within hours).</li>
<li><b>Minimal debridement</b> — the face has an excellent blood supply; preserve tissue.</li>
<li>Close in layers: muscle with resorbable (e.g. 4/0 Vicryl), mucosa with resorbable (4/0 Vicryl Rapide), skin with fine non-resorbable monofilament (5/0–6/0 nylon or Prolene) or subcuticular Monocryl. Evert edges.</li>
<li>Facial wounds can be closed primarily up to ~24 h (later if clean) because of good vascularity.</li>
<li>Remove facial skin sutures at ~5 days; apply Steri-Strips; sun protection for scars for 6–12 months.</li>
</ol>
<h3>Specific sites</h3>
<ul>
<li><b>Lip</b>: the first suture realigns the <b>vermilion border (white roll)</b> — a 1 mm step is visible. Through-and-through: close mucosa, orbicularis oris, then skin.</li>
<li><b>Tongue</b>: suture large, gaping, bleeding or flap lacerations (deep bites with resorbable sutures); small ones heal spontaneously.</li>
<li><b>Intraoral mucosa/gingiva</b>: reposition and suture degloving injuries; check underlying fractures.</li>
<li><b>Facial nerve</b>: repair branches lateral to a vertical line through the lateral canthus within ~72 h (nerve stimulator still works); medial branches often recover by arborisation.</li>
<li><b>Parotid duct</b>: repair over a stent (cannula) by OMFS.</li>
<li><b>Eyelids, lacrimal canaliculi, tissue loss</b>: refer to oculoplastics/plastics/OMFS.</li>
</ul>
<h3>Bites</h3>
<ul>
<li>Human and animal bites have high infection risk (<i>Pasteurella</i>, <i>Eikenella</i>, streptococci, staphylococci, anaerobes).</li>
<li>Irrigate thoroughly, debride; facial bites are usually closed primarily (good blood supply) after cleaning.</li>
<li>Antibiotic prophylaxis: <b>co-amoxiclav</b> (penicillin allergy: doxycycline + metronidazole) — typically 3 days prophylaxis.</li>
<li>Human bites: assess blood-borne virus risk (HBV, HCV, HIV). Tetanus and (rarely) rabies risk assessment.</li>
</ul>
<h3>Tetanus</h3>
<p>Tetanus-prone wounds: soil/manure contamination, puncture wounds, devitalised tissue, burns, bites, compound fractures, delay &gt;6 h. Check immunisation history (UK full course = 5 doses). Booster vaccine if incomplete; human tetanus immunoglobulin for high-risk wounds in incompletely immunised patients.</p>`
    },
    {
      id: 'd2-tmj', title: 'TMJ dislocation', code: '2.3.5',
      syllabus: [
        'Assess and diagnose mandibular dislocations',
        'Relocate dislocated mandibles',
        'Refer to an appropriate specialty (e.g. OMFS) for further management when needed'
      ],
      notes: `
<h3>Presentation</h3>
<ul>
<li>Condyle displaced <b>anterior to the articular eminence</b> and held by muscle spasm.</li>
<li>Causes: yawning, wide opening during dental treatment, vomiting, seizures, trauma, ligamentous laxity (Ehlers–Danlos, Marfan), drug-induced dystonia (metoclopramide, phenothiazines, antipsychotics).</li>
<li>Signs: unable to close, open mouth, pain, drooling, difficulty speaking, preauricular hollow, prominent chin. Unilateral: chin deviated to the <b>opposite</b> side.</li>
<li>Radiograph (DPT) if trauma or diagnostic doubt — exclude a condylar fracture.</li>
</ul>
<h3>Reduction</h3>
<ol>
<li>Explain and reassure; seat patient low (head against a wall/headrest), clinician in front.</li>
<li><b>Hippocratic method</b>: wrap thumbs in gauze, place on the lower molars/external oblique ridges, fingers under the mandible. Press <b>downwards</b> to free the condyle from the eminence, then <b>backwards</b>, while rotating the chin upwards. Reduce one side at a time if bilateral.</li>
<li>Alternatives: extraoral (wrist pivot) or syringe technique; thumbs placed buccally to avoid being bitten.</li>
<li>If muscle spasm prevents reduction: LA into the joint space/masseter (auriculotemporal block), IV sedation (midazolam), or GA.</li>
<li>After reduction: support the jaw (barrel bandage or advise supporting when yawning), restrict opening for ~2 weeks, soft diet, NSAIDs.</li>
</ol>
<h3>Recurrent or chronic dislocation (refer OMFS)</h3>
<ul>
<li>Conservative: limit opening, physiotherapy.</li>
<li>Injections: <b>autologous blood</b> into the joint/pericapsular tissues (fibrosis), <b>botulinum toxin</b> to lateral pterygoid, sclerosants.</li>
<li>Surgery: eminectomy, eminence augmentation (Dautrey procedure — downfracture of the zygomatic arch to block forward translation), capsular plication, lateral pterygoid myotomy.</li>
<li>Long-standing dislocation (days–weeks): often needs GA and sometimes open reduction.</li>
</ul>`
    },
    {
      id: 'd2-management', title: 'Medicines, operative care and complications of trauma', code: '2.4–2.6',
      syllabus: [
        'Understand medications and fluids used in trauma management',
        'Prescribe analgesics and antibiotics for soft and hard tissue injuries',
        'Manage dentoalveolar trauma including soft and hard tissue injuries; provide aftercare and follow-up',
        'Manage complications of dental and dentoalveolar trauma',
        'Know the role of other specialties and work collaboratively'
      ],
      notes: `
<h3>Fluids and medicines in major trauma</h3>
<ul>
<li>Haemorrhagic shock: permissive hypotension until bleeding is controlled; early blood products (balanced transfusion 1:1:1 packed cells : plasma : platelets) rather than large crystalloid volumes.</li>
<li><b>Tranexamic acid</b> within 3 hours of injury: 1 g IV over 10 minutes then 1 g over 8 hours (CRASH-2).</li>
<li>Analgesia: IV opioids titrated; avoid NSAIDs where bleeding or renal risk.</li>
<li>Antibiotics: compound facial fractures (co-amoxiclav or as local policy), avulsed teeth, bites, contaminated wounds.</li>
<li>Tetanus prophylaxis as needed.</li>
</ul>
<h3>Prescribing for dentoalveolar injuries</h3>
<ul>
<li>Analgesia: paracetamol ± ibuprofen.</li>
<li>Chlorhexidine 0.12–0.2% mouthwash while splinted.</li>
<li>Avulsion: systemic antibiotics (amoxicillin/phenoxymethylpenicillin; doxycycline in adults and older children).</li>
<li>Bites: co-amoxiclav.</li>
</ul>
<h3>Complications of dental trauma</h3>
<div class="tbl"><table><tr><th>Complication</th><th>Recognition</th><th>Management</th></tr>
<tr><td>Pulp necrosis</td><td>Persistent grey colour, periapical radiolucency, sinus, tenderness</td><td>RCT (regenerative endodontics/apexification if immature)</td></tr>
<tr><td>Pulp canal obliteration</td><td>Yellow crown, narrowing canal on radiograph</td><td>Monitor; treat only if necrosis develops</td></tr>
<tr><td>Inflammatory (infection-related) external resorption</td><td>Bowl-shaped root and bone radiolucencies</td><td>Prompt RCT with calcium hydroxide</td></tr>
<tr><td>Replacement resorption / ankylosis</td><td>High metallic note, no mobility, no PDL space, infraocclusion</td><td>Monitor; decoronation in growing patients; plan replacement</td></tr>
<tr><td>Surface resorption</td><td>Small shallow defects</td><td>Self-limiting; monitor</td></tr>
<tr><td>Marginal bone loss, gingival recession</td><td>Probing, radiographs</td><td>Periodontal care</td></tr>
<tr><td>Disturbance of successor (primary trauma)</td><td>Hypoplasia, dilaceration, eruption disturbance</td><td>Paediatric/orthodontic management</td></tr></table></div>
<h3>Complications of fracture management</h3>
<p>Conservative: malunion, non-union, malocclusion. IMF: airway risk, weight loss, TMJ stiffness, poor hygiene, decalcification. ORIF: infection, plate exposure, screw damage to roots/nerve, need for plate removal, facial nerve injury with extraoral approaches.</p>
<h3>Multidisciplinary care</h3>
<p>Paediatric dentistry, orthodontics (repositioning intruded teeth, space management, decoronation planning), restorative dentistry (endodontics, prosthodontics, implants after growth), OMFS (facial fractures), ophthalmology, plastics, neurosurgery, ED/trauma teams, safeguarding (non-accidental injury — torn frenum in infants, injuries inconsistent with history, delayed presentation).</p>`
    }
  ],
  cards: [
    ['Components of the &lt;C&gt;ABCDE primary survey?', 'Catastrophic haemorrhage, Airway with c-spine control, Breathing, Circulation, Disability, Exposure.'],
    ['GCS components and maximum scores?', 'Eyes 4, Verbal 5, Motor 6 — total 15 (minimum 3). GCS ≤8 → secure the airway.'],
    ['Why do bilateral parasymphyseal fractures threaten the airway?', 'Loss of genioglossus attachment lets the tongue fall back.'],
    ['Signs of retrobulbar haemorrhage and treatment?', 'Severe pain, proptosis, tense globe, falling acuity, ophthalmoplegia, RAPD. Immediate lateral canthotomy and cantholysis.'],
    ['What is a "white-eyed blowout"?', 'A paediatric trapdoor orbital floor fracture entrapping inferior rectus with little bruising — restricted upgaze, nausea, bradycardia. Needs urgent surgery.'],
    ['Neurogenic shock?', 'Hypotension with bradycardia after cervical/high thoracic cord injury from loss of sympathetic tone.'],
    ['Cvek pulpotomy depth?', 'About 2 mm of pulp below the exposure, capped with calcium silicate cement.'],
    ['Splint duration for a mid-root fracture?', '4 weeks (cervical third: up to 4 months).'],
    ['Splint duration for extrusion vs lateral luxation?', 'Extrusion 2 weeks; lateral luxation 4 weeks.'],
    ['Intrusion of a mature permanent incisor by 5 mm?', 'Surgical or orthodontic repositioning; start RCT within ~2 weeks.'],
    ['Intrusion of an immature permanent incisor?', 'Allow spontaneous re-eruption regardless of degree; orthodontic repositioning if no movement in ~4 weeks.'],
    ['IADT splint specification?', 'Passive, flexible: stainless steel wire up to 0.4 mm or nylon line, bonded to one sound tooth either side.'],
    ['Should an avulsed primary tooth be replanted?', 'Never.'],
    ['Best widely available storage medium for an avulsed tooth?', 'Milk (also HBSS, saline, saliva). Not water.'],
    ['Critical extraoral dry time for PDL survival?', '60 minutes.'],
    ['When to start RCT after replanting a closed-apex tooth?', 'Within 2 weeks (at splint removal).'],
    ['What is decoronation and when is it used?', 'Removing the crown of an ankylosed tooth below bone level, leaving the root to be replaced by bone — in growing patients to preserve the ridge.'],
    ['Percussion sign of ankylosis?', 'A high metallic note with no physiological mobility.'],
    ['Most common site of mandibular fracture?', 'The condyle (~30%), then angle.'],
    ['Highly suggestive sign of a mandibular body fracture?', 'Sublingual haematoma.'],
    ['Chin deviation in a unilateral condylar fracture?', 'Towards the fractured side on opening.'],
    ['Occlusion with bilateral condylar fractures?', 'Anterior open bite (with retrusion).'],
    ['Minimum radiographs for a suspected mandibular fracture?', 'Two views at right angles: DPT and PA mandible.'],
    ['Champy\'s line at the angle?', 'One miniplate along the external oblique ridge/superior border.'],
    ['Classic signs of a zygomatic complex fracture?', 'Flattened cheek, subconjunctival haemorrhage with no posterior limit, infraorbital numbness, step at rim, trismus, diplopia, epistaxis.'],
    ['Imaging for a zygomatic fracture?', 'Occipitomental views (OM15 and OM30) ± submentovertex; CT for planning.'],
    ['Which Le Fort fracture causes CSF rhinorrhoea and panda eyes with whole-midface mobility?', 'Le Fort III (craniofacial dysjunction).'],
    ['Nasal septal haematoma — why urgent?', 'Cartilage necrosis → saddle nose and septal abscess; drain urgently.'],
    ['First suture in a lip laceration crossing the vermilion?', 'Realign the vermilion border (white roll).'],
    ['When are facial skin sutures removed?', 'About 5 days.'],
    ['Antibiotic for a dog or human bite?', 'Co-amoxiclav (penicillin allergy: doxycycline + metronidazole).'],
    ['Direction of force when reducing a dislocated mandible?', 'Downwards (to clear the eminence) then backwards, rotating the chin upwards.'],
    ['Chin deviation in a unilateral TMJ dislocation?', 'Towards the opposite (unaffected) side.'],
    ['Tranexamic acid in major trauma (CRASH-2)?', '1 g IV over 10 min, then 1 g over 8 h — within 3 hours of injury.']
  ],
  mcqs: [
    { q: 'An 8-year-old avulsed an upper central incisor 40 minutes ago; it has been kept in milk. The apex is wide open. What is the best management?', o: ['Do not replant — primary teeth must not be replanted', 'Replant, flexible splint 2 weeks, antibiotics, monitor for revascularisation', 'Replant and start RCT at 1 week', 'Replant with a rigid splint for 6 weeks', 'Store and refer for implant at age 18'], a: 1, e: 'A permanent incisor with an open apex replanted within 60 min of dry time (milk storage preserves PDL) may revascularise. Splint flexibly for 2 weeks, give antibiotics, check tetanus, and monitor — start endodontics only if necrosis develops.' },
    { q: 'A 30-year-old has a mature upper central incisor intruded by 8 mm. What is the recommended management?', o: ['Allow spontaneous re-eruption', 'Orthodontic extrusion starting at 3 months', 'Surgical repositioning, flexible splint for 4 weeks, start RCT within 2 weeks', 'Extract immediately', 'Rigid splint for 8 weeks'], a: 2, e: 'IADT: mature teeth intruded more than 7 mm need surgical repositioning; splint for 4 weeks; pulp necrosis is almost certain, so start RCT within about 2 weeks.' },
    { q: 'After an assault, a patient has a step at the left infraorbital rim, numb left cheek and upper lip, and can open only 15 mm. Which structure is most likely limiting opening?', o: ['Fractured condyle', 'Depressed zygomatic arch impinging on the coronoid process', 'Masseter haematoma', 'Lateral pterygoid spasm', 'TMJ effusion'], a: 1, e: 'In zygomatic complex fractures, a depressed arch can impinge on the coronoid process and mechanically limit opening.' },
    { q: 'A patient with facial trauma has increasing eye pain, proptosis and falling visual acuity. What is the immediate management?', o: ['Order an urgent MRI', 'Lateral canthotomy and cantholysis', 'Topical steroid drops', 'Elevation of the zygoma via Gillies approach', 'Observe and repeat acuity in 4 hours'], a: 1, e: 'Retrobulbar haemorrhage threatens the optic nerve within ~90 minutes. Decompress immediately with lateral canthotomy and cantholysis while arranging urgent senior help.' },
    { q: 'Which splint duration is correct according to IADT 2020?', o: ['Avulsion — 4 weeks', 'Lateral luxation — 2 weeks', 'Extrusion — 2 weeks', 'Alveolar fracture — 2 weeks', 'Subluxation — 6 weeks'], a: 2, e: 'Extrusion, avulsion (and optional subluxation): 2 weeks. Lateral luxation, intrusion, alveolar and root fractures: 4 weeks.' },
    { q: 'A patient can\'t close their mouth after yawning. The chin is deviated to the right. Which joint is dislocated?', o: ['Right TMJ', 'Left TMJ', 'Both TMJs', 'Neither — this is a condylar fracture', 'Cannot be determined'], a: 1, e: 'In unilateral anterior dislocation, the chin deviates away from the dislocated side — here the left condyle is anterior to its eminence.' },
    { q: 'A 4-year-old has an intruded upper primary incisor. The child is cooperative and there are no other injuries. What does IADT recommend?', o: ['Extract immediately', 'Reposition and splint for 4 weeks', 'Allow spontaneous repositioning irrespective of direction and review', 'Surgical repositioning under GA', 'Start pulpectomy'], a: 2, e: 'IADT 2020 advises allowing intruded primary teeth to reposition spontaneously regardless of displacement direction, with close follow-up and warning about effects on the successor.' },
    { q: 'Which finding most strongly suggests a mandibular fracture rather than soft tissue bruising alone?', o: ['Facial swelling', 'Sublingual haematoma', 'Lip laceration', 'Submandibular tenderness', 'Pain on chewing'], a: 1, e: 'A sublingual haematoma (floor-of-mouth bruising) is a strong indicator of a mandibular body or symphyseal fracture.' }
  ]
});
