const cardiologyData = [
  {
    id: "coronaries",
    title: "Coronaries & Structural Heart Disease",
    icon: "🫀",
    color: "#c0392b",
    description: "ACS, revascularization, valvular interventions",
    subsections: [
      {
        id: "acs",
        title: "ACS / STEMI / Antiplatelet Therapy",
        color: "#e74c3c",
        trials: [
          {
            id: "isis2",
            name: "ISIS-2",
            fullName: "Second International Study of Infarct Survival",
            year: 1988,
            n: "17,187",
            question: "In acute MI, do early aspirin and/or IV streptokinase reduce vascular mortality?",
            result: "Both aspirin and streptokinase independently reduced 5-week vascular mortality, with additive benefit when combined.",
            takeaways: [
              "Aspirin reduced vascular death, reinfarction, and stroke.",
              "Streptokinase also reduced mortality.",
              "Combination therapy produced the greatest benefit.",
              "Benefit was achieved with simple, widely available therapies.",
              "Bleeding risk existed but was outweighed by mortality benefit."
            ],
            whyLandmark: "Established immediate aspirin as foundational acute MI therapy and helped confirm fibrinolysis as lifesaving in STEMI-era care.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/2903874/"
          },
          {
            id: "pami",
            name: "PAMI",
            fullName: "Primary Angioplasty in Myocardial Infarction",
            year: 1993,
            n: "395",
            question: "In acute MI, is immediate primary angioplasty superior to thrombolytic therapy?",
            result: "Immediate PTCA reduced the composite of death or nonfatal reinfarction compared with IV tPA.",
            takeaways: [
              "Primary angioplasty improved short-term clinical outcomes.",
              "Lower reinfarction and less intracranial hemorrhage than thrombolysis.",
              "Benefit depended heavily on rapid access and experienced PCI centers.",
              "Conducted before modern stents, P2Y12 inhibitors, and radial PCI."
            ],
            whyLandmark: "Helped shift STEMI reperfusion strategy from routine thrombolysis toward primary PCI when timely available.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/8433725/"
          },
          {
            id: "shock",
            name: "SHOCK",
            fullName: "Should We Emergently Revascularize Occluded Coronaries for Cardiogenic Shock",
            year: 1999,
            n: "302",
            question: "In AMI with cardiogenic shock, does early revascularization improve survival compared with initial medical stabilization?",
            result: "Early revascularization did not significantly reduce 30-day mortality but improved 6-month and long-term survival.",
            takeaways: [
              "30-day mortality: numerically lower but not statistically significant.",
              "6-month mortality improved with early revascularization.",
              "Long-term follow-up confirmed survival benefit.",
              "Benefit was most clinically important despite very high absolute mortality.",
              "Older patients had less clear early benefit in subgroup analyses."
            ],
            whyLandmark: "Established urgent revascularization as the default strategy for AMI-related cardiogenic shock.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJM199908263410901"
          },
          {
            id: "cure",
            name: "CURE",
            fullName: "Clopidogrel in Unstable Angina to Prevent Recurrent Events",
            year: 2001,
            n: "12,562",
            question: "In NSTE-ACS, does adding clopidogrel to aspirin reduce ischemic events?",
            result: "Clopidogrel plus aspirin reduced CV death, MI, or stroke compared with aspirin alone, but increased major bleeding.",
            takeaways: [
              "Primary outcome reduced: 9.3% vs 11.4%.",
              "Benefit mainly driven by reduction in MI.",
              "Bleeding increased, especially perioperative bleeding if CABG occurred soon after therapy.",
              "Supported prolonged dual antiplatelet therapy after ACS."
            ],
            whyLandmark: "Established dual antiplatelet therapy as standard care in NSTE-ACS.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa010746"
          },
          {
            id: "triton",
            name: "TRITON-TIMI 38",
            fullName: "Trial to Assess Improvement in Therapeutic Outcomes by Optimizing Platelet Inhibition with Prasugrel",
            year: 2007,
            n: "13,608",
            question: "In ACS patients undergoing PCI, is prasugrel superior to clopidogrel?",
            result: "Prasugrel reduced CV death, MI, or stroke but increased major bleeding.",
            takeaways: [
              "Primary endpoint reduced: 9.9% vs 12.1%.",
              "MI and stent thrombosis were significantly reduced.",
              "Major bleeding increased.",
              "Net harm in prior stroke/TIA.",
              "Caution in age ≥75 years or weight <60 kg."
            ],
            whyLandmark: "Defined prasugrel as a more potent P2Y12 option for selected ACS-PCI patients and highlighted the ischemia–bleeding tradeoff.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa0706482"
          },
          {
            id: "plato",
            name: "PLATO",
            fullName: "Platelet Inhibition and Patient Outcomes",
            year: 2009,
            n: "18,624",
            question: "In ACS, is ticagrelor superior to clopidogrel for preventing ischemic events?",
            result: "Ticagrelor reduced CV death, MI, or stroke and reduced mortality compared with clopidogrel, without increasing overall major bleeding.",
            takeaways: [
              "Primary endpoint reduced: 9.8% vs 11.7%.",
              "All-cause mortality was lower with ticagrelor.",
              "Non-CABG-related bleeding increased.",
              "Dyspnea and bradyarrhythmias were more common.",
              "Benefit applied across invasive and noninvasive ACS strategies."
            ],
            whyLandmark: "Made ticagrelor a preferred P2Y12 inhibitor in many ACS patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa0904327"
          },
          {
            id: "complete",
            name: "COMPLETE",
            fullName: "Complete vs Culprit-Only Revascularization to Treat Multi-vessel Disease After Early PCI for STEMI",
            year: 2019,
            n: "4,041",
            question: "After culprit-lesion PCI for STEMI with multivessel disease, does staged complete revascularization improve outcomes?",
            result: "Complete revascularization reduced CV death/MI and reduced CV death/MI/ischemia-driven revascularization.",
            takeaways: [
              "Benefit was driven by fewer recurrent MIs and fewer ischemia-driven revascularizations.",
              "Complete PCI could be done during index admission or staged after discharge.",
              "Excluded cardiogenic shock.",
              "Reinforced treatment of significant nonculprit lesions after STEMI stabilization."
            ],
            whyLandmark: "Changed STEMI multivessel management toward planned complete revascularization in stable patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1907775"
          }
        ]
      },
      {
        id: "ccs",
        title: "Stable CAD / Ischemia / Physiology-Guided PCI",
        color: "#2980b9",
        trials: [
          {
            id: "courage",
            name: "COURAGE",
            fullName: "Clinical Outcomes Utilizing Revascularization and Aggressive Drug Evaluation",
            year: 2007,
            n: "2,287",
            question: "In stable CAD, does PCI added to optimal medical therapy reduce death or MI?",
            result: "PCI plus optimal medical therapy did not reduce death or MI compared with optimal medical therapy alone.",
            takeaways: [
              "PCI improved angina earlier, but the advantage narrowed over time.",
              "No hard-outcome advantage for routine PCI in stable CAD.",
              "Trial used bare-metal stents or early-generation PCI approaches.",
              "Excluded very high-risk anatomy such as significant left main disease."
            ],
            whyLandmark: "Shifted stable CAD management toward optimal medical therapy first, with PCI mainly for symptoms or high-risk anatomy.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa070829"
          },
          {
            id: "fame",
            name: "FAME",
            fullName: "Fractional Flow Reserve Versus Angiography for Multivessel Evaluation",
            year: 2009,
            n: "1,005",
            question: "Does FFR-guided PCI improve outcomes compared with angiography-guided PCI?",
            result: "FFR-guided PCI reduced major adverse cardiac events and reduced the number of stents used.",
            takeaways: [
              "Fewer lesions were stented with FFR guidance.",
              "Lower death/MI/repeat revascularization at 1 year.",
              "Demonstrated that angiographic stenosis severity alone overestimates ischemic significance.",
              "Encouraged physiology-guided revascularization."
            ],
            whyLandmark: "Made FFR-guided PCI a standard concept in stable multivessel CAD.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa0807611"
          },
          {
            id: "ischemia",
            name: "ISCHEMIA",
            fullName: "International Study of Comparative Health Effectiveness with Medical and Invasive Approaches",
            year: 2020,
            n: "5,179",
            question: "In stable CAD with moderate/severe ischemia, does an initial invasive strategy reduce major CV events compared with conservative therapy?",
            result: "An initial invasive strategy did not significantly reduce major ischemic outcomes or death compared with conservative therapy over median 3.2 years.",
            takeaways: [
              "Invasive strategy improved angina and quality of life, especially in symptomatic patients.",
              "No early hard-outcome advantage in the overall cohort.",
              "Left main disease was excluded by CT angiography.",
              "Early procedural MI tradeoff vs later spontaneous MI reduction complicates interpretation."
            ],
            whyLandmark: "Reinforced that stable CAD is not automatically a 'stent-first' disease; symptoms and anatomy should guide invasive management.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1915922"
          }
        ]
      },
      {
        id: "cabg-pci",
        title: "Revascularization Strategy / CABG vs PCI",
        color: "#8e44ad",
        trials: [
          {
            id: "syntax",
            name: "SYNTAX",
            fullName: "Synergy Between PCI With TAXUS and Cardiac Surgery",
            year: 2009,
            n: "1,800",
            question: "In complex left main or three-vessel CAD, is PCI noninferior to CABG?",
            result: "CABG had lower 1-year MACCE than PCI, mainly due to less repeat revascularization; stroke was higher with CABG.",
            takeaways: [
              "PCI had more repeat revascularization.",
              "CABG favored in higher anatomic complexity.",
              "Introduced and validated the clinical importance of the SYNTAX score.",
              "Used first-generation paclitaxel-eluting stents."
            ],
            whyLandmark: "Established anatomy-based decision-making for PCI vs CABG and embedded the Heart Team concept.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa0804626"
          },
          {
            id: "freedom",
            name: "FREEDOM",
            fullName: "Future Revascularization Evaluation in Patients with Diabetes Mellitus: Optimal Management of Multivessel Disease",
            year: 2012,
            n: "1,900",
            question: "In diabetic patients with multivessel CAD, is CABG superior to PCI with DES?",
            result: "CABG reduced death and MI compared with PCI, but increased stroke.",
            takeaways: [
              "Primary composite of death/MI/stroke favored CABG.",
              "CABG benefit mainly from lower death and MI.",
              "Stroke was more frequent after CABG.",
              "Most PCI used first-generation DES.",
              "Strongly influenced guidelines favoring CABG in diabetics with multivessel CAD."
            ],
            whyLandmark: "Defined CABG as preferred revascularization for many patients with diabetes and multivessel CAD.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1211585"
          },
          {
            id: "noble",
            name: "NOBLE",
            fullName: "Nordic–Baltic–British Left Main Revascularisation Study",
            year: 2016,
            n: "1,201",
            question: "In left main CAD, is PCI noninferior to CABG?",
            result: "PCI was inferior to CABG for MACCE at 5 years, driven by nonprocedural MI and repeat revascularization; mortality was similar.",
            takeaways: [
              "CABG had fewer spontaneous MIs and repeat revascularizations.",
              "Stroke difference was not clearly significant in the original report.",
              "Results contrasted partly with EXCEL, fueling debate.",
              "Reinforced careful left main PCI selection."
            ],
            whyLandmark: "Key trial shaping modern left main revascularization discussions and Heart Team decision-making.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/27810312/"
          }
        ]
      },
      {
        id: "ischemic-cm",
        title: "Ischemic Cardiomyopathy",
        color: "#27ae60",
        trials: [
          {
            id: "stiches",
            name: "STICHES",
            fullName: "STICH Extension Study",
            year: 2016,
            n: "1,212",
            question: "In ischemic LV dysfunction, does CABG plus medical therapy improve long-term survival compared with medical therapy alone?",
            result: "At 10 years, CABG plus medical therapy reduced all-cause mortality compared with medical therapy alone.",
            takeaways: [
              "Early surgical risk was offset by long-term survival benefit.",
              "All-cause mortality: 58.9% vs 66.1%.",
              "CV mortality and CV hospitalization also improved.",
              "Viability testing did not clearly identify who benefits most.",
              "Benefit is long-term, not immediate."
            ],
            whyLandmark: "Established CABG as survival-improving therapy in selected patients with ischemic cardiomyopathy and surgically suitable CAD.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1602001"
          }
        ]
      },
      {
        id: "structural",
        title: "Structural Heart Disease / Transcatheter Valve / LAAO",
        color: "#e67e22",
        trials: [
          {
            id: "partner1",
            name: "PARTNER 1",
            fullName: "Placement of Aortic Transcatheter Valves Trial, Cohort B",
            year: 2010,
            n: "358",
            question: "In inoperable severe AS, does TAVR improve survival compared with standard therapy?",
            result: "TAVR significantly reduced mortality compared with standard therapy but increased vascular complications and stroke risk.",
            takeaways: [
              "One of the first randomized trials showing survival benefit of TAVR.",
              "Standard therapy often included balloon valvuloplasty.",
              "TAVR improved symptoms and survival in otherwise inoperable patients.",
              "Early-generation devices had significant vascular and neurologic complications."
            ],
            whyLandmark: "Launched the modern TAVR era by proving transcatheter valve replacement could be lifesaving.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1008232"
          },
          {
            id: "partner3",
            name: "PARTNER 3",
            fullName: "PARTNER 3 Low-Risk Trial",
            year: 2019,
            n: "1,000",
            question: "In low-risk severe AS, is balloon-expandable TAVR at least as good as surgery?",
            result: "At 1 year, TAVR reduced the composite of death, stroke, or rehospitalization compared with surgery.",
            takeaways: [
              "Primary endpoint: 8.5% TAVR vs 15.1% surgery at 1 year.",
              "Faster recovery and shorter hospital stay with TAVR.",
              "Longer-term durability and reintervention remain key considerations.",
              "Mainly applies to selected low-risk patients with suitable anatomy."
            ],
            whyLandmark: "Expanded TAVR from high/intermediate-risk populations into carefully selected low-risk severe AS patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1814052"
          },
          {
            id: "coapt",
            name: "COAPT",
            fullName: "Cardiovascular Outcomes Assessment of the MitraClip Percutaneous Therapy for Heart Failure Patients with Functional Mitral Regurgitation",
            year: 2018,
            n: "614",
            question: "In symptomatic HF with significant secondary MR despite GDMT, does mitral TEER improve outcomes?",
            result: "MitraClip plus GDMT reduced HF hospitalization and all-cause mortality compared with GDMT alone.",
            takeaways: [
              "HF hospitalization at 24 months markedly reduced.",
              "Mortality reduced at 2 years.",
              "Patient selection was crucial: severe MR disproportionate to LV size and optimized GDMT.",
              "Results differed from MITRA-FR, likely due to selection and MR/LV phenotype differences."
            ],
            whyLandmark: "Established mitral TEER as outcome-improving therapy in selected patients with secondary MR and HFrEF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1806640"
          },
          {
            id: "triluminate",
            name: "TRILUMINATE Pivotal",
            fullName: "TRILUMINATE Pivotal Trial",
            year: 2023,
            n: "350",
            question: "In symptomatic severe tricuspid regurgitation, does tricuspid TEER improve outcomes compared with medical therapy?",
            result: "Tricuspid TEER improved the hierarchical composite endpoint, mainly driven by better quality of life and TR reduction, with good short-term safety.",
            takeaways: [
              "KCCQ quality-of-life improvement was significant.",
              "TR reduction to moderate or less was much more frequent with TEER.",
              "Mortality and HF hospitalization differences were not clearly established in the early report.",
              "Procedural safety was favorable in selected patients."
            ],
            whyLandmark: "First major randomized trial supporting transcatheter edge-to-edge repair for severe symptomatic TR.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa2300525"
          },
          {
            id: "protectaf",
            name: "PROTECT-AF",
            fullName: "Watchman Left Atrial Appendage System for Embolic Protection in Patients with Atrial Fibrillation",
            year: 2009,
            n: "707",
            question: "Can percutaneous LAA closure replace warfarin for stroke prevention in nonvalvular AF?",
            result: "Watchman LAA closure was noninferior to warfarin for stroke/systemic embolism/CV death but had early procedural safety concerns.",
            takeaways: [
              "Demonstrated proof-of-concept for mechanical stroke prevention in AF.",
              "Early complications included pericardial effusion and procedural stroke.",
              "Longer-term follow-up showed improving safety with operator experience.",
              "Most relevant for patients unsuitable for long-term anticoagulation, though initial trial compared with warfarin-eligible patients."
            ],
            whyLandmark: "Created the evidence foundation for modern left atrial appendage occlusion.",
            pubLink: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(09)61343-X/fulltext"
          }
        ]
      },
      {
        id: "periop",
        title: "Perioperative Coronary Revascularization",
        color: "#8e44ad",
        trials: [
          {
            id: "carp",
            name: "CARP",
            fullName: "Coronary Artery Revascularization Prophylaxis Trial",
            year: 2004,
            n: "510",
            question: "In patients with stable CAD undergoing elective major vascular surgery, does prophylactic coronary revascularization before surgery improve outcomes?",
            result: "Routine coronary revascularization before elective major vascular surgery did not reduce long-term mortality or perioperative outcomes compared with medical therapy.",
            takeaways: [
              "No mortality benefit from routine prophylactic revascularization.",
              "No major reduction in perioperative MI or early postoperative death.",
              "Supported a more conservative, evidence-based preoperative strategy.",
              "Established that revascularization before noncardiac surgery should follow standard cardiac indications, not surgical risk reduction alone.",
              "Findings do not apply to patients with independent indications such as left main disease or very high-risk coronary anatomy."
            ],
            whyLandmark: "CARP changed perioperative cardiology practice by demonstrating that stable CAD patients undergoing vascular surgery generally do not benefit from prophylactic revascularization unless they already meet standard indications.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa041905"
          }
        ]
      },
      {
        id: "hcm",
        title: "Hypertrophic Cardiomyopathy",
        color: "#1abc9c",
        trials: [
          {
            id: "explorerhcm",
            name: "EXPLORER-HCM",
            fullName: "Clinical Study to Evaluate Mavacamten in Adults with Symptomatic Obstructive Hypertrophic Cardiomyopathy",
            year: 2020,
            n: "251",
            question: "In symptomatic obstructive HCM, does mavacamten improve functional capacity, symptoms, and LVOT obstruction compared with placebo?",
            result: "Mavacamten significantly improved the composite functional endpoint, reduced LVOT gradients, improved symptoms, and improved health status compared with placebo.",
            takeaways: [
              "Primary endpoint achieved more often with mavacamten than placebo.",
              "Mavacamten reduced resting and provoked LVOT gradients.",
              "More patients improved in NYHA functional class.",
              "NT-proBNP and cardiac troponin improved, suggesting reduced myocardial wall stress.",
              "Transient reductions in LVEF occurred in some patients, requiring echocardiographic surveillance.",
              "Applies to obstructive HCM, not all HCM phenotypes."
            ],
            whyLandmark: "EXPLORER-HCM introduced the first major positive phase 3 evidence for a cardiac myosin inhibitor in obstructive HCM, moving treatment beyond nonspecific negative inotropes toward mechanism-based therapy.",
            pubLink: "https://www.sciencedirect.com/science/article/pii/S014067362031792X"
          }
        ]
      }
    ]
  },
  {
    id: "heart-failure",
    title: "Heart Failure",
    icon: "❤️",
    color: "#e84393",
    description: "HFrEF, HFpEF, pharmacotherapy",
    subsections: [
      {
        id: "hfref-medical",
        title: "Foundational HFrEF Pharmacotherapy",
        color: "#e74c3c",
        trials: [
          {
            id: "consensus",
            name: "CONSENSUS",
            fullName: "Cooperative North Scandinavian Enalapril Survival Study",
            year: 1987,
            n: "253",
            question: "Does enalapril reduce mortality in severe heart failure?",
            result: "Enalapril significantly reduced mortality compared with placebo.",
            takeaways: [
              "Six-month mortality: 26% enalapril vs 44% placebo.",
              "Benefit mainly from reduction in progressive HF death.",
              "Conducted in very sick HF patients.",
              "Established neurohormonal blockade as survival therapy."
            ],
            whyLandmark: "First major proof that ACE inhibition improves survival in severe HF.",
            pubLink: "https://www.nejm.org/doi/abs/10.1056/NEJM198706043162301"
          },
          {
            id: "merithf",
            name: "MERIT-HF",
            fullName: "Metoprolol CR/XL Randomized Intervention Trial in Congestive Heart Failure",
            year: 1999,
            n: "3,991",
            question: "Does metoprolol CR/XL reduce mortality in chronic HFrEF?",
            result: "Metoprolol CR/XL reduced all-cause mortality and sudden death compared with placebo.",
            takeaways: [
              "Mortality reduced by about 34%.",
              "Sudden death and death from worsening HF were reduced.",
              "Reinforced that beta-blockers are beneficial, not harmful, in stable HFrEF.",
              "Requires careful initiation and titration."
            ],
            whyLandmark: "Helped establish beta-blockers as core disease-modifying therapy in HFrEF.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/10376614/"
          },
          {
            id: "rales",
            name: "RALES",
            fullName: "Randomized Aldactone Evaluation Study",
            year: 1999,
            n: "1,663",
            question: "Does spironolactone improve survival in severe HFrEF?",
            result: "Spironolactone reduced all-cause mortality and HF hospitalization.",
            takeaways: [
              "Mortality: 35% spironolactone vs 46% placebo.",
              "Benefit included fewer deaths from progressive HF and sudden cardiac death.",
              "Hyperkalemia risk requires renal function and potassium monitoring.",
              "Conducted before widespread ARNI/SGLT2 inhibitor use."
            ],
            whyLandmark: "Established mineralocorticoid receptor antagonists as survival therapy in HFrEF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJM199909023411001"
          },
          {
            id: "shift",
            name: "SHIFT",
            fullName: "Systolic Heart Failure Treatment with the If Inhibitor Ivabradine Trial",
            year: 2010,
            n: "6,505",
            question: "Does heart-rate reduction with ivabradine improve outcomes in HFrEF patients in sinus rhythm?",
            result: "Ivabradine reduced CV death or HF hospitalization, mainly by reducing HF hospitalization.",
            takeaways: [
              "Benefit was strongest in patients with higher baseline heart rate.",
              "No clear all-cause mortality reduction.",
              "Only applies to sinus rhythm, not AF.",
              "Useful when heart rate remains elevated despite maximally tolerated beta-blocker."
            ],
            whyLandmark: "Validated heart rate as a therapeutic target in selected HFrEF patients.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/20801500/"
          },
          {
            id: "paradigmhf",
            name: "PARADIGM-HF",
            fullName: "Prospective Comparison of ARNI with ACEI to Determine Impact on Global Mortality and Morbidity in Heart Failure",
            year: 2014,
            n: "8,442",
            question: "Is sacubitril/valsartan superior to enalapril in HFrEF?",
            result: "Sacubitril/valsartan reduced CV death or HF hospitalization and reduced all-cause mortality compared with enalapril.",
            takeaways: [
              "Trial stopped early for benefit.",
              "Reduced CV death, HF hospitalization, and all-cause mortality.",
              "More hypotension; less cough and hyperkalemia than enalapril.",
              "Run-in phase may limit generalizability to less tolerant patients."
            ],
            whyLandmark: "Introduced ARNI as a new foundational therapy replacing ACEI/ARB in many HFrEF patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1409077"
          },
          {
            id: "dapahf",
            name: "DAPA-HF",
            fullName: "Dapagliflozin and Prevention of Adverse Outcomes in Heart Failure",
            year: 2019,
            n: "4,744",
            question: "Does dapagliflozin improve outcomes in HFrEF regardless of diabetes status?",
            result: "Dapagliflozin reduced worsening HF or CV death in HFrEF, with benefit regardless of diabetes.",
            takeaways: [
              "Primary endpoint: 16.3% vs 21.2%.",
              "Reduced HF events and CV death.",
              "Benefit occurred in patients with and without diabetes.",
              "Good safety profile overall."
            ],
            whyLandmark: "Made SGLT2 inhibitors foundational HFrEF therapy beyond glucose lowering.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1911303"
          },
          {
            id: "victoria",
            name: "VICTORIA",
            fullName: "Vericiguat Global Study in Subjects with Heart Failure with Reduced Ejection Fraction",
            year: 2020,
            n: "5,050",
            question: "Does vericiguat improve outcomes in high-risk HFrEF after recent worsening?",
            result: "Vericiguat modestly reduced CV death or HF hospitalization, mainly through fewer HF hospitalizations.",
            takeaways: [
              "Primary endpoint: 35.5% vs 38.5%.",
              "Absolute event rates were high, so modest relative benefit may still matter.",
              "No clear mortality reduction alone.",
              "Studied a sicker post-worsening HF population."
            ],
            whyLandmark: "Introduced soluble guanylate cyclase stimulation as an additional option for selected high-risk HFrEF patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1915928"
          },
          {
            id: "aheft",
            name: "A-HeFT",
            fullName: "African-American Heart Failure Trial",
            year: 2004,
            n: "1,050",
            question: "In Black patients with advanced HFrEF, does fixed-dose hydralazine plus isosorbide dinitrate improve outcomes when added to standard heart failure therapy?",
            result: "Hydralazine/isosorbide dinitrate significantly improved the composite clinical score, reduced mortality, reduced HF hospitalization, and improved quality of life. Trial stopped early for benefit.",
            takeaways: [
              "All-cause mortality significantly reduced.",
              "First hospitalization for heart failure was reduced.",
              "Quality of life improved.",
              "Studied only self-identified Black patients.",
              "Conducted before modern quadruple HFrEF therapy (ARNI, MRA, beta-blocker, SGLT2i).",
              "Biologic signal may relate to nitric oxide pathway responsiveness rather than race itself."
            ],
            whyLandmark: "Established hydralazine/isosorbide dinitrate as evidence-based add-on therapy in Black patients with symptomatic HFrEF despite standard therapy, providing mortality and hospitalization evidence for a nitric oxide–based strategy.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa042934"
          }
        ]
      },
      {
        id: "hfpef",
        title: "HFpEF / HFmrEF Trials",
        color: "#27ae60",
        trials: [
          {
            id: "topcat",
            name: "TOPCAT",
            fullName: "Treatment of Preserved Cardiac Function Heart Failure with an Aldosterone Antagonist",
            year: 2014,
            n: "3,445",
            question: "Does spironolactone improve outcomes in HFpEF?",
            result: "Spironolactone did not significantly reduce the primary composite outcome, though HF hospitalization was reduced.",
            takeaways: [
              "Primary endpoint not statistically significant.",
              "HF hospitalization was lower.",
              "Major concerns about regional heterogeneity, especially Russia/Georgia vs Americas.",
              "Hyperkalemia and creatinine rise were more common."
            ],
            whyLandmark: "Important negative/neutral HFpEF trial that shaped cautious MRA use in selected HFpEF patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1313731",
            flag: "warning"
          },
          {
            id: "paragonhf",
            name: "PARAGON-HF",
            fullName: "Prospective Comparison of ARNI with ARB Global Outcomes in HFpEF",
            year: 2019,
            n: "4,822",
            question: "Does sacubitril/valsartan reduce HF hospitalization and CV death in HFpEF compared with valsartan?",
            result: "Sacubitril/valsartan did not significantly reduce total HF hospitalizations and CV death versus valsartan.",
            takeaways: [
              "Primary endpoint narrowly missed statistical significance.",
              "Possible benefit in patients with lower EF range and in women.",
              "More hypotension and angioedema; less hyperkalemia.",
              "Helped define the concept of EF spectrum rather than rigid HFpEF cutoffs."
            ],
            whyLandmark: "A key HFpEF/HFmrEF trial influencing ARNI use in patients with EF below normal but not classic HFrEF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1908655",
            flag: "warning"
          },
          {
            id: "emperorpreserved",
            name: "EMPEROR-Preserved",
            fullName: "Empagliflozin Outcome Trial in Patients with Chronic Heart Failure with Preserved Ejection Fraction",
            year: 2021,
            n: "5,988",
            question: "Does empagliflozin improve outcomes in HFpEF/HFmrEF?",
            result: "Empagliflozin reduced CV death or HF hospitalization, mainly by reducing HF hospitalization.",
            takeaways: [
              "Benefit was consistent regardless of diabetes.",
              "Effect mainly driven by fewer HF hospitalizations.",
              "No clear mortality reduction alone.",
              "Included EF >40%, therefore HFmrEF and HFpEF."
            ],
            whyLandmark: "First clearly positive major outcomes trial of a drug in HFpEF/HFmrEF, establishing SGLT2 inhibitors as core therapy across EF ranges.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107038"
          }
        ]
      }
    ]
  },
  {
    id: "electrophysiology",
    title: "Electrophysiology",
    icon: "⚡",
    color: "#f39c12",
    description: "Devices, AF anticoagulation, rhythm control, ventricular arrhythmia",
    subsections: [
      {
        id: "device-therapy",
        title: "ICD / CRT / Device Therapy",
        color: "#2980b9",
        trials: [
          {
            id: "maditii",
            name: "MADIT-II",
            fullName: "Multicenter Automatic Defibrillator Implantation Trial II",
            year: 2002,
            n: "1,232",
            question: "Does prophylactic ICD implantation reduce mortality in prior MI patients with severe LV dysfunction?",
            result: "ICD therapy reduced all-cause mortality compared with conventional medical therapy.",
            takeaways: [
              "Mortality: 14.2% ICD vs 19.8% conventional therapy.",
              "No EP study or inducibility testing was required.",
              "Expanded ICD eligibility based on EF and ischemic history.",
              "Some patients received shocks and device-related complications."
            ],
            whyLandmark: "Major foundation for primary-prevention ICD indications in ischemic cardiomyopathy.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa013474"
          },
          {
            id: "scdheft",
            name: "SCD-HeFT",
            fullName: "Sudden Cardiac Death in Heart Failure Trial",
            year: 2005,
            n: "2,521",
            question: "In symptomatic HFrEF, does ICD or amiodarone improve survival compared with placebo?",
            result: "ICD reduced mortality; amiodarone did not improve survival.",
            takeaways: [
              "Mortality: 22% ICD vs 29% placebo.",
              "Amiodarone had no mortality benefit.",
              "Included ischemic and nonischemic cardiomyopathy.",
              "ICD benefit strongest in NYHA II compared with NYHA III."
            ],
            whyLandmark: "Established broad primary-prevention ICD use in HFrEF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa043399"
          },
          {
            id: "carehf",
            name: "CARE-HF",
            fullName: "Cardiac Resynchronization–Heart Failure Study",
            year: 2005,
            n: "813",
            question: "Does CRT improve morbidity and mortality in selected HF patients with dyssynchrony?",
            result: "CRT reduced death and HF hospitalization and improved symptoms and LV function.",
            takeaways: [
              "Reduced composite of death or unplanned CV hospitalization.",
              "Improved NYHA class, quality of life, and LV remodeling.",
              "Demonstrated mortality benefit from CRT pacing.",
              "Patient selection required dyssynchrony criteria."
            ],
            whyLandmark: "Established CRT as disease-modifying device therapy for selected patients with HFrEF and dyssynchrony.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa050496"
          },
          {
            id: "maditrit",
            name: "MADIT-RIT",
            fullName: "Multicenter Automatic Defibrillator Implantation Trial–Reduce Inappropriate Therapy",
            year: 2012,
            n: "1,500",
            question: "Can modern ICD programming reduce inappropriate therapy and improve outcomes?",
            result: "High-rate or delayed ICD therapy programming markedly reduced inappropriate therapy; high-rate programming also reduced mortality.",
            takeaways: [
              "Inappropriate therapy reduced by about 79% with high-rate programming and 76% with delayed therapy.",
              "High-rate therapy was associated with lower mortality.",
              "Many slower ventricular arrhythmias self-terminated.",
              "Changed default ICD programming toward delayed/high-rate detection."
            ],
            whyLandmark: "Transformed ICD programming from 'treat early' to 'treat only when necessary,' reducing shocks and improving safety.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1211107",
            examPearl: "One of the few device-programming trials showing a mortality benefit from changing ICD settings rather than changing the device itself."
          },
          {
            id: "dinamit",
            name: "DINAMIT",
            fullName: "Defibrillator in Acute Myocardial Infarction Trial",
            year: 2004,
            n: "674",
            question: "In high-risk patients early after MI, does prophylactic ICD implantation reduce all-cause mortality?",
            result: "Early ICD implantation reduced arrhythmic death but did not reduce all-cause mortality because nonarrhythmic deaths increased.",
            takeaways: [
              "ICD therapy reduced arrhythmic death.",
              "No all-cause mortality benefit.",
              "Increased nonarrhythmic mortality offset the reduction in arrhythmic death.",
              "Demonstrated that early post-MI mortality involves competing nonarrhythmic mechanisms.",
              "Findings do not support routine primary-prevention ICD implantation within 40 days after MI."
            ],
            whyLandmark: "DINAMIT is the key trial behind the principle of delaying primary-prevention ICD implantation after MI, establishing that reducing arrhythmic death does not improve overall survival when nonarrhythmic mortality remains high.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa041489"
          }
        ]
      },
      {
        id: "af-rate-rhythm",
        title: "AF Rate vs Rhythm Control",
        color: "#d35400",
        trials: [
          {
            id: "affirm",
            name: "AFFIRM",
            fullName: "Atrial Fibrillation Follow-up Investigation of Rhythm Management",
            year: 2002,
            n: "4,060",
            question: "In atrial fibrillation, is a rhythm-control strategy superior to a rate-control strategy for survival?",
            result: "Rhythm control did not improve survival compared with rate control; there was a nonsignificant trend toward higher mortality and more hospitalizations in the rhythm-control group.",
            takeaways: [
              "Established rate control as a safe and acceptable strategy for many older or minimally symptomatic AF patients.",
              "Rhythm control was associated with more hospitalizations and antiarrhythmic-drug adverse effects.",
              "Rhythm control did not eliminate the need for anticoagulation when stroke risk remained elevated.",
              "Used older antiarrhythmic drugs with limited catheter ablation.",
              "Later trials (EAST-AFNET 4) modified interpretation for early AF.",
              "Anticoagulation should be guided by thromboembolic risk, not rhythm strategy alone."
            ],
            whyLandmark: "AFFIRM shaped AF management for nearly two decades by supporting rate control plus appropriate anticoagulation as a reasonable default strategy in many patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa021328"
          },
          {
            id: "raceii",
            name: "RACE II",
            fullName: "Rate Control Efficacy in Permanent Atrial Fibrillation II",
            year: 2010,
            n: "614",
            question: "In permanent AF, is lenient rate control (resting HR <110 bpm) noninferior to strict rate control for cardiovascular outcomes?",
            result: "Lenient rate control was noninferior to strict rate control for major cardiovascular outcomes and was easier to achieve with fewer clinic visits.",
            takeaways: [
              "Primary composite outcome was similar between lenient and strict strategies.",
              "Lenient control required fewer clinic visits and medication adjustments.",
              "Supports resting HR target below 110 bpm in stable, asymptomatic permanent AF patients.",
              "Not applicable to patients with tachycardia-induced cardiomyopathy, decompensated HF, or significant symptoms.",
              "Open-label design; permanent AF population only."
            ],
            whyLandmark: "RACE II changed guideline targets by making lenient rate control acceptable for stable patients with permanent AF, simplifying management without compromising outcomes.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1001337"
          }
        ]
      },
      {
        id: "af-anticoag",
        title: "Anticoagulation / AF Stroke Prevention",
        color: "#e74c3c",
        trials: [
          {
            id: "baataf",
            name: "BAATAF",
            fullName: "Boston Area Anticoagulation Trial for Atrial Fibrillation",
            year: 1990,
            n: "420",
            question: "Does warfarin reduce stroke risk in nonrheumatic AF?",
            result: "Low-intensity warfarin markedly reduced stroke compared with control therapy.",
            takeaways: [
              "Warfarin reduced stroke risk substantially.",
              "Minor bleeding was more frequent.",
              "Major bleeding was relatively uncommon in the trial.",
              "Control group management reflected older practice."
            ],
            whyLandmark: "One of the foundational trials establishing anticoagulation for stroke prevention in AF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJM199011293232201"
          },
          {
            id: "rely",
            name: "RE-LY",
            fullName: "Randomized Evaluation of Long-Term Anticoagulation Therapy",
            year: 2009,
            n: "18,113",
            question: "Is dabigatran noninferior or superior to warfarin for stroke prevention in AF?",
            result: "Dabigatran 150 mg BID was superior to warfarin for stroke/systemic embolism; 110 mg BID was noninferior with less bleeding.",
            takeaways: [
              "Both dabigatran doses reduced intracranial hemorrhage.",
              "150 mg dose had better ischemic protection.",
              "GI bleeding was more common with higher-dose dabigatran.",
              "Open-label warfarin design was a limitation."
            ],
            whyLandmark: "First major DOAC trial to challenge warfarin and launch the modern DOAC era.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa0905561"
          },
          {
            id: "aristotle",
            name: "ARISTOTLE",
            fullName: "Apixaban for Reduction in Stroke and Other Thromboembolic Events in Atrial Fibrillation",
            year: 2011,
            n: "18,201",
            question: "Is apixaban superior to warfarin for stroke prevention in AF?",
            result: "Apixaban reduced stroke/systemic embolism, major bleeding, and mortality compared with warfarin.",
            takeaways: [
              "Lower intracranial bleeding than warfarin.",
              "Lower major bleeding overall.",
              "Mortality benefit was seen.",
              "Strong safety and efficacy profile made apixaban widely adopted."
            ],
            whyLandmark: "Established apixaban as one of the most favorable DOACs for AF stroke prevention.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1107039"
          },
          {
            id: "river",
            name: "RIVER",
            fullName: "Rivaroxaban in Patients with Atrial Fibrillation and a Bioprosthetic Mitral Valve",
            year: 2020,
            n: "1,005",
            question: "Is rivaroxaban noninferior to warfarin in AF patients with a bioprosthetic mitral valve?",
            result: "Rivaroxaban was noninferior to warfarin for death, major CV events, or major bleeding.",
            takeaways: [
              "Important because many pivotal DOAC trials excluded valve prostheses.",
              "Mostly bioprosthetic mitral valves, not mechanical valves.",
              "Stroke was numerically lower with rivaroxaban.",
              "Open-label design and regional enrollment limit generalizability."
            ],
            whyLandmark: "Supported DOAC use in selected AF patients with bioprosthetic mitral valves, distinct from mechanical valves.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa2029603"
          },
          {
            id: "augustus",
            name: "AUGUSTUS",
            fullName: "Antithrombotic Therapy after Acute Coronary Syndrome or PCI in Atrial Fibrillation",
            year: 2019,
            n: "4,614",
            question: "In AF with ACS/PCI on P2Y12 therapy, what antithrombotic strategy reduces bleeding?",
            result: "Apixaban caused less bleeding than VKA, and aspirin caused more bleeding than placebo without clear ischemic benefit.",
            takeaways: [
              "2×2 factorial design: apixaban vs VKA and aspirin vs placebo.",
              "Apixaban reduced major or clinically relevant nonmajor bleeding.",
              "Aspirin nearly doubled bleeding risk.",
              "Most patients received clopidogrel.",
              "Supports early aspirin discontinuation in many AF-PCI patients."
            ],
            whyLandmark: "Helped define modern 'dual therapy' strategies after PCI/ACS in AF.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1817083"
          }
        ]
      },
      {
        id: "af-rhythm",
        title: "AF Rhythm Control / Ablation / Risk Factor Modification",
        color: "#16a085",
        trials: [
          {
            id: "castleaf",
            name: "CASTLE-AF",
            fullName: "Catheter Ablation versus Standard Conventional Therapy in Patients with LV Dysfunction and AF",
            year: 2018,
            n: "363",
            question: "In AF with HFrEF, does catheter ablation improve hard outcomes compared with medical therapy?",
            result: "Catheter ablation reduced death or HF hospitalization compared with medical therapy.",
            takeaways: [
              "Primary endpoint: 28.5% ablation vs 44.6% control.",
              "All-cause mortality and HF hospitalization were both reduced.",
              "Small, highly selected population.",
              "Required implanted device for rhythm monitoring."
            ],
            whyLandmark: "Provided strong evidence that AF ablation can improve outcomes in selected HFrEF patients.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1707855"
          },
          {
            id: "cabana",
            name: "CABANA",
            fullName: "Catheter Ablation vs Antiarrhythmic Drug Therapy for Atrial Fibrillation",
            year: 2019,
            n: "2,204",
            question: "Does catheter ablation reduce major clinical outcomes compared with drug therapy in AF?",
            result: "In intention-to-treat analysis, ablation did not significantly reduce the primary composite outcome, but improved AF recurrence and quality of life.",
            takeaways: [
              "Primary outcome: 8.0% ablation vs 9.2% drug therapy; not statistically significant.",
              "AF recurrence and CV hospitalization were lower with ablation.",
              "Major crossover from drug therapy to ablation diluted ITT results.",
              "Quality-of-life benefit was clinically important."
            ],
            whyLandmark: "Clarified that AF ablation is excellent for rhythm control and symptoms, while hard-outcome benefit depends on patient selection and interpretation.",
            pubLink: "https://jamanetwork.com/journals/jama/fullarticle/2728676",
            flag: "warning"
          },
          {
            id: "eastafnet4",
            name: "EAST-AFNET 4",
            fullName: "Early Treatment of Atrial Fibrillation for Stroke Prevention Trial",
            year: 2020,
            n: "2,789",
            question: "Does early rhythm control improve CV outcomes in recently diagnosed AF?",
            result: "Early rhythm control reduced CV death, stroke, or hospitalization for HF/ACS compared with usual care.",
            takeaways: [
              "Rhythm control included antiarrhythmic drugs and ablation.",
              "Benefit was seen early in the AF disease course.",
              "Challenged older 'rate control is enough' interpretations.",
              "Rhythm-control-related adverse events were more frequent, but overall clinical benefit favored early rhythm control."
            ],
            whyLandmark: "Changed AF thinking toward early rhythm control in appropriate patients, not rhythm control only after symptom failure.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa2019422"
          },
          {
            id: "legacy",
            name: "LEGACY",
            fullName: "Long-Term Effect of Goal-Directed Weight Management in an Atrial Fibrillation Cohort",
            year: 2015,
            n: "355",
            question: "Does sustained weight loss reduce AF burden and improve rhythm outcomes?",
            result: "Sustained weight loss ≥10% was associated with markedly greater arrhythmia-free survival and reduced AF burden.",
            takeaways: [
              "Not a randomized trial.",
              "Weight loss ≥10% had the strongest association with AF freedom.",
              "Weight fluctuation reduced benefit.",
              "Supports aggressive risk-factor modification as part of AF care."
            ],
            whyLandmark: "Helped establish obesity and risk-factor management as central to AF rhythm-control success.",
            pubLink: "https://www.jacc.org/doi/10.1016/j.jacc.2015.03.002"
          }
        ]
      },
      {
        id: "ventricular-arrhythmia",
        title: "Ventricular Arrhythmia Pharmacology / Safety",
        color: "#c0392b",
        trials: [
          {
            id: "cast",
            name: "CAST",
            fullName: "Cardiac Arrhythmia Suppression Trial",
            year: 1989,
            n: "1,455",
            question: "Does suppressing asymptomatic ventricular ectopy after MI with class Ic drugs improve survival?",
            result: "Encainide and flecainide increased arrhythmic death/cardiac arrest and total mortality.",
            takeaways: [
              "Suppression of PVCs did not translate into better outcomes.",
              "Arrhythmic death/cardiac arrest increased.",
              "Total mortality increased.",
              "Trial stopped early for harm.",
              "Classic example of surrogate endpoint failure."
            ],
            whyLandmark: "Transformed arrhythmia management and showed that antiarrhythmic suppression can be dangerous despite improving ECG appearance.",
            pubLink: "https://www.nejm.org/doi/abs/10.1056/NEJM198908103210629"
          }
        ]
      }
    ]
  },
  {
    id: "preventive",
    title: "Preventive Cardiology",
    icon: "🧬",
    color: "#27ae60",
    description: "Lipids, lifestyle, primary prevention",
    subsections: [
      {
        id: "lifestyle",
        title: "Diet / Lifestyle / Metabolic Risk",
        color: "#2980b9",
        trials: [
          {
            id: "predimed",
            name: "PREDIMED",
            fullName: "Prevención con Dieta Mediterránea",
            year: 2013,
            n: "7,447",
            question: "Does a Mediterranean diet reduce major CV events in high-risk primary prevention?",
            result: "Mediterranean diet supplemented with extra-virgin olive oil or nuts reduced major CV events compared with low-fat diet advice.",
            takeaways: [
              "Primary prevention population at high CV risk.",
              "Benefit seen for composite of MI, stroke, or CV death.",
              "Randomization irregularities led to 2013 article retraction and corrected 2018 republication.",
              "Corrected analyses still supported benefit."
            ],
            whyLandmark: "Most influential randomized dietary trial supporting Mediterranean diet for CV prevention.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389",
            pubLink2: "https://www.nejm.org/doi/full/10.1056/NEJMoa1200303",
            examPearl: "The original 2013 publication was retracted and republished in 2018 due to randomization irregularities, but the overall conclusions remained unchanged."
          },
          {
            id: "stampede",
            name: "STAMPEDE",
            fullName: "Surgical Treatment and Medications Potentially Eradicate Diabetes Efficiently",
            year: 2012,
            n: "150",
            question: "Does bariatric surgery improve diabetes control more than intensive medical therapy?",
            result: "Bariatric surgery plus intensive medical therapy achieved superior and durable glycemic control compared with medical therapy alone.",
            takeaways: [
              "Gastric bypass and sleeve gastrectomy outperformed medical therapy.",
              "Benefits persisted at 3 and 5 years.",
              "Improved weight, medication burden, and cardiometabolic risk factors.",
              "Not powered for hard CV outcomes."
            ],
            whyLandmark: "Established metabolic surgery as a powerful diabetes and cardiometabolic risk intervention.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1200225",
            pubLink2: "https://www.nejm.org/doi/full/10.1056/NEJMoa1600869"
          }
        ]
      },
      {
        id: "lipids",
        title: "Lipid Lowering / LDL Hypothesis",
        color: "#e74c3c",
        trials: [
          {
            id: "4s",
            name: "4S",
            fullName: "Scandinavian Simvastatin Survival Study",
            year: 1994,
            n: "4,444",
            question: "Does simvastatin reduce mortality in patients with established CHD?",
            result: "Simvastatin reduced all-cause mortality, coronary death, and major coronary events.",
            takeaways: [
              "All-cause mortality reduced: 8.2% vs 11.5%.",
              "Major coronary events and revascularization reduced.",
              "No excess non-CV mortality signal.",
              "Confirmed LDL lowering improves survival in secondary prevention."
            ],
            whyLandmark: "The trial that firmly established statins as lifesaving therapy in secondary prevention.",
            pubLink: "https://pubmed.ncbi.nlm.nih.gov/7968073/"
          },
          {
            id: "proveit",
            name: "PROVE-IT TIMI 22",
            fullName: "Pravastatin or Atorvastatin Evaluation and Infection Therapy–Thrombolysis in Myocardial Infarction 22",
            year: 2004,
            n: "4,162",
            question: "After ACS, is intensive statin therapy superior to moderate statin therapy?",
            result: "Atorvastatin 80 mg reduced death or major CV events compared with pravastatin 40 mg.",
            takeaways: [
              "Supported 'lower LDL is better' after ACS.",
              "Benefit emerged early.",
              "High-intensity statin became default after ACS.",
              "Compared atorvastatin 80 mg vs pravastatin 40 mg."
            ],
            whyLandmark: "Established high-intensity statin therapy as standard after ACS.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa040583"
          },
          {
            id: "improveit",
            name: "IMPROVE-IT",
            fullName: "Improved Reduction of Outcomes: Vytorin Efficacy International Trial",
            year: 2015,
            n: "18,144",
            question: "Does adding ezetimibe to statin therapy improve CV outcomes after ACS?",
            result: "Ezetimibe plus simvastatin modestly reduced CV events compared with simvastatin alone.",
            takeaways: [
              "Achieved lower LDL than statin alone.",
              "Primary endpoint reduction was statistically significant but modest.",
              "No major safety penalty.",
              "Benefit supported LDL lowering beyond statins."
            ],
            whyLandmark: "First outcomes trial showing that nonstatin LDL lowering added to statin therapy improves CV outcomes.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1410489"
          },
          {
            id: "fourier",
            name: "FOURIER",
            fullName: "Further Cardiovascular Outcomes Research with PCSK9 Inhibition in Subjects with Elevated Risk",
            year: 2017,
            n: "27,564",
            question: "Does evolocumab reduce CV events when added to statins in ASCVD?",
            result: "Evolocumab markedly lowered LDL and reduced major CV events, without clear mortality reduction over short follow-up.",
            takeaways: [
              "LDL reduced by about 59%.",
              "Primary endpoint reduced.",
              "Key secondary endpoint of CV death/MI/stroke reduced.",
              "No significant all-cause or CV mortality reduction in median 2.2 years.",
              "Very low LDL levels appeared safe during trial follow-up."
            ],
            whyLandmark: "Confirmed the clinical benefit of PCSK9 inhibition and strengthened the 'lower LDL is better' paradigm.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1615664"
          }
        ]
      },
      {
        id: "primary-prevention",
        title: "Aspirin / Primary Prevention",
        color: "#8e44ad",
        trials: [
          {
            id: "ascend",
            name: "ASCEND",
            fullName: "A Study of Cardiovascular Events in Diabetes",
            year: 2018,
            n: "15,480",
            question: "Does aspirin provide net benefit for primary prevention in diabetes?",
            result: "Aspirin reduced serious vascular events but increased major bleeding, producing a narrow or neutral net benefit.",
            takeaways: [
              "Serious vascular events reduced modestly.",
              "Major bleeding increased, mainly GI and extracranial bleeding.",
              "Absolute benefit and harm were similar.",
              "Reinforced individualized aspirin use in primary prevention."
            ],
            whyLandmark: "Helped move guidelines away from routine aspirin for primary prevention, even in diabetes.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1804988"
          }
        ]
      },
      {
        id: "hypertension",
        title: "Hypertension / Blood Pressure Targets",
        color: "#16a085",
        trials: [
          {
            id: "sprint",
            name: "SPRINT",
            fullName: "Systolic Blood Pressure Intervention Trial",
            year: 2015,
            n: "9,361",
            question: "In high-risk hypertensive adults without diabetes or prior stroke, does targeting SBP <120 mmHg improve outcomes compared with SBP <140 mmHg?",
            result: "Intensive SBP control reduced major cardiovascular events and all-cause mortality, but increased treatment-related adverse events.",
            takeaways: [
              "Reduced the composite of MI, ACS, stroke, heart failure, or cardiovascular death.",
              "Reduced all-cause and cardiovascular mortality.",
              "Reduced heart failure events.",
              "Benefit seen in selected high-risk patients including older adults and CKD patients.",
              "Excluded patients with diabetes or prior stroke.",
              "Increased hypotension, syncope, electrolyte abnormalities, and AKI.",
              "BP was measured using standardized automated office readings, not casual clinic BP.",
              "Requires individualized application in frail patients, orthostatic symptoms, advanced CKD, or high fall risk."
            ],
            whyLandmark: "SPRINT reshaped hypertension targets by showing that selected high-risk adults benefit from intensive SBP lowering below 120 mmHg. It strongly influenced modern guideline discussions on lower BP goals while highlighting the need to balance CV benefit against adverse events.",
            pubLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1511939"
          }
        ]
      }
    ]
  }
];
