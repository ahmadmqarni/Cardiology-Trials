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
        title: "ACS",
        color: "#e74c3c",
        trials: [
          {
            id: "isis2",
            name: "ISIS-2",
            year: 1988,
            n: "17,187",
            question: "Aspirin ± streptokinase in STEMI?",
            result: "Aspirin reduced vascular mortality by 23%; streptokinase also reduced mortality.",
            pearl: "Established aspirin as the cornerstone of ACS therapy.",
            examPearl: null
          },
          {
            id: "pami",
            name: "PAMI",
            year: 1993,
            n: "395",
            question: "Primary PCI vs thrombolysis in STEMI?",
            result: "PCI reduced death, reinfarction, and stroke.",
            pearl: "Helped establish primary PCI as preferred reperfusion strategy.",
            examPearl: null
          },
          {
            id: "cure",
            name: "CURE",
            year: 2001,
            n: "12,562",
            question: "Clopidogrel + aspirin vs aspirin alone in NSTEMI/UA?",
            result: "Reduced CV death, MI, and stroke.",
            pearl: "Established DAPT in ACS.",
            examPearl: null
          },
          {
            id: "triton",
            name: "TRITON-TIMI 38",
            year: 2007,
            n: "13,608",
            question: "Prasugrel vs clopidogrel in ACS undergoing PCI?",
            result: "Reduced ischemic events and stent thrombosis but increased major bleeding.",
            pearl: "Avoid prasugrel in prior stroke/TIA.",
            examPearl: null
          },
          {
            id: "plato",
            name: "PLATO",
            year: 2009,
            n: "18,624",
            question: "Ticagrelor vs clopidogrel in ACS?",
            result: "Reduced CV death, MI, and stroke.",
            pearl: "Only major P2Y12 trial showing mortality reduction.",
            examPearl: null
          },
          {
            id: "complete",
            name: "COMPLETE",
            year: 2019,
            n: "4,041",
            question: "Complete vs culprit-only revascularization after STEMI?",
            result: "Complete revascularization reduced CV death and MI.",
            pearl: "Multivessel STEMI should generally undergo staged complete revascularization.",
            examPearl: null
          }
        ]
      },
      {
        id: "ccs",
        title: "Chronic Coronary Syndrome",
        color: "#2980b9",
        trials: [
          {
            id: "courage",
            name: "COURAGE",
            year: 2007,
            n: "2,287",
            question: "PCI + OMT vs OMT alone in stable CAD?",
            result: "No reduction in death or MI.",
            pearl: "PCI improves symptoms, not prognosis.",
            examPearl: null
          },
          {
            id: "fame",
            name: "FAME",
            year: 2009,
            n: "1,005",
            question: "FFR-guided PCI vs angiography-guided PCI?",
            result: "Reduced MACE and unnecessary stenting.",
            pearl: "Physiology beats anatomy.",
            examPearl: null
          },
          {
            id: "ischemia",
            name: "ISCHEMIA",
            year: 2020,
            n: "5,179",
            question: "Initial invasive vs conservative strategy in moderate-severe ischemia?",
            result: "No reduction in major CV events.",
            pearl: "Revascularization mainly improves angina.",
            examPearl: null
          }
        ]
      },
      {
        id: "cabg-pci",
        title: "CABG vs PCI",
        color: "#8e44ad",
        trials: [
          {
            id: "syntax",
            name: "SYNTAX",
            year: 2009,
            n: "1,800",
            question: "PCI vs CABG in LM or 3-vessel disease?",
            result: "CABG superior in complex CAD.",
            pearl: "Introduced the SYNTAX score.",
            examPearl: null
          },
          {
            id: "freedom",
            name: "FREEDOM",
            year: 2012,
            n: "1,900",
            question: "CABG vs PCI in diabetes with multivessel CAD?",
            result: "CABG reduced death and MI.",
            pearl: "CABG remains preferred in diabetic multivessel disease.",
            examPearl: null
          },
          {
            id: "noble",
            name: "NOBLE",
            year: 2016,
            n: "1,201",
            question: "PCI vs CABG in left main disease?",
            result: "Higher long-term event rates with PCI.",
            pearl: "Supports CABG in complex LM disease.",
            examPearl: null
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
            year: 2016,
            n: "1,212",
            question: "CABG + OMT vs OMT alone in EF ≤35%?",
            result: "Improved 10-year survival.",
            pearl: "One of the few revascularization trials demonstrating mortality benefit.",
            examPearl: null
          }
        ]
      },
      {
        id: "aortic-stenosis",
        title: "Aortic Stenosis",
        color: "#e67e22",
        trials: [
          {
            id: "partner1",
            name: "PARTNER 1",
            year: 2010,
            n: "358",
            question: "TAVI vs medical therapy in inoperable AS?",
            result: "Major mortality reduction with TAVI.",
            pearl: "Started the TAVI era.",
            examPearl: null
          },
          {
            id: "partner3",
            name: "PARTNER 3",
            year: 2019,
            n: "1,000",
            question: "TAVI vs SAVR in low-risk AS?",
            result: "TAVI superior for composite endpoint.",
            pearl: "Expanded TAVI to low-risk patients.",
            examPearl: null
          }
        ]
      },
      {
        id: "mitral-teer",
        title: "Mitral TEER",
        color: "#16a085",
        trials: [
          {
            id: "coapt",
            name: "COAPT",
            year: 2018,
            n: "614",
            question: "MitraClip + GDMT vs GDMT in secondary MR?",
            result: "Reduced mortality and HF hospitalization.",
            pearl: "One of the most practice-changing SHD trials.",
            examPearl: null
          }
        ]
      },
      {
        id: "tricuspid-teer",
        title: "Tricuspid TEER",
        color: "#f39c12",
        trials: [
          {
            id: "triluminate",
            name: "TRILUMINATE Pivotal",
            year: 2023,
            n: "350",
            question: "TriClip vs medical therapy in severe TR?",
            result: "Improved symptoms, QoL, and TR severity.",
            pearl: "First landmark positive RCT for tricuspid TEER.",
            examPearl: null
          }
        ]
      },
      {
        id: "laao",
        title: "LAAO",
        color: "#795548",
        trials: [
          {
            id: "protectaf",
            name: "PROTECT-AF",
            year: 2009,
            n: "707",
            question: "Watchman vs warfarin?",
            result: "Non-inferior stroke prevention.",
            pearl: "Established LAAO as alternative to long-term anticoagulation.",
            examPearl: null
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
    description: "HFrEF, HFpEF, device therapy",
    subsections: [
      {
        id: "hfref-medical",
        title: "HFrEF – Medical Therapy",
        color: "#e74c3c",
        trials: [
          {
            id: "consensus",
            name: "CONSENSUS",
            year: 1987,
            n: "253",
            question: "Enalapril in severe HFrEF?",
            result: "Reduced mortality.",
            pearl: "Started the ACE inhibitor era.",
            examPearl: null
          },
          {
            id: "merithf",
            name: "MERIT-HF",
            year: 1999,
            n: "3,991",
            question: "Metoprolol CR/XL in HFrEF?",
            result: "Reduced mortality and hospitalization.",
            pearl: "Confirmed beta-blockers as life-saving therapy.",
            examPearl: null
          },
          {
            id: "rales",
            name: "RALES",
            year: 1999,
            n: "1,663",
            question: "Spironolactone in severe HFrEF?",
            result: "Reduced mortality by ~30%.",
            pearl: "Established MRAs as standard therapy.",
            examPearl: null
          },
          {
            id: "shift",
            name: "SHIFT",
            year: 2010,
            n: "6,558",
            question: "Ivabradine in HFrEF with HR ≥70 bpm?",
            result: "Reduced HF hospitalization.",
            pearl: "Benefit largely driven by HR reduction.",
            examPearl: null
          },
          {
            id: "paradigmhf",
            name: "PARADIGM-HF",
            year: 2014,
            n: "8,442",
            question: "Sacubitril/valsartan vs enalapril?",
            result: "Reduced CV death and HF hospitalization.",
            pearl: "Replaced ACEi as preferred therapy.",
            examPearl: null
          },
          {
            id: "dapahf",
            name: "DAPA-HF",
            year: 2019,
            n: "4,744",
            question: "Dapagliflozin in HFrEF?",
            result: "Reduced CV death and HF hospitalization.",
            pearl: "Benefit independent of diabetes.",
            examPearl: null
          },
          {
            id: "victoria",
            name: "VICTORIA",
            year: 2020,
            n: "5,050",
            question: "Vericiguat in worsening HFrEF?",
            result: "Modest reduction in CV death/HF hospitalization.",
            pearl: "Reserved for high-risk recently decompensated patients.",
            examPearl: null
          }
        ]
      },
      {
        id: "hfpef",
        title: "HFpEF",
        color: "#27ae60",
        trials: [
          {
            id: "topcat",
            name: "TOPCAT",
            year: 2014,
            n: "3,445",
            question: "Spironolactone in HFpEF?",
            result: "No overall primary endpoint benefit; fewer HF hospitalizations.",
            pearl: "Results affected by regional enrollment issues.",
            examPearl: null,
            flag: "warning"
          },
          {
            id: "paragonhf",
            name: "PARAGON-HF",
            year: 2019,
            n: "4,822",
            question: "Sacubitril/valsartan vs valsartan in HFpEF?",
            result: "Missed statistical significance.",
            pearl: "Signal of benefit in EF closer to 50%.",
            examPearl: null,
            flag: "warning"
          },
          {
            id: "emperorpreserved",
            name: "EMPEROR-Preserved",
            year: 2021,
            n: "5,988",
            question: "Empagliflozin in HFpEF?",
            result: "Reduced HF hospitalization.",
            pearl: "First clearly positive HFpEF outcome trial.",
            examPearl: null
          }
        ]
      },
      {
        id: "device-therapy",
        title: "Device Therapy",
        color: "#2980b9",
        trials: [
          {
            id: "maditii",
            name: "MADIT-II",
            year: 2002,
            n: "1,232",
            question: "ICD in prior MI with EF ≤30%?",
            result: "Reduced all-cause mortality.",
            pearl: "Established primary-prevention ICD without EP testing.",
            examPearl: null
          },
          {
            id: "scdheft",
            name: "SCD-HeFT",
            year: 2005,
            n: "2,521",
            question: "ICD in ischemic/non-ischemic HFrEF?",
            result: "Reduced mortality.",
            pearl: "Expanded ICD indications beyond ischemic disease.",
            examPearl: null
          },
          {
            id: "carehf",
            name: "CARE-HF",
            year: 2005,
            n: "813",
            question: "CRT in HFrEF with dyssynchrony?",
            result: "Reduced mortality and hospitalization.",
            pearl: "Landmark CRT mortality trial.",
            examPearl: null
          },
          {
            id: "maditrit",
            name: "MADIT-RIT",
            year: 2012,
            n: "1,500",
            question: "Can ICD programming reduce inappropriate shocks in primary-prevention ICD patients?",
            result: "High-rate detection (>200 bpm) or delayed therapy significantly reduced inappropriate ICD shocks and reduced all-cause mortality compared with conventional programming.",
            pearl: "Changed ICD programming worldwide. Modern ICDs are programmed to \"wait longer\" and/or treat only faster VT/VF, reducing unnecessary therapies without increasing syncope.",
            examPearl: "One of the few device-programming trials showing a mortality benefit from changing ICD settings rather than changing the device itself."
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
    description: "AF anticoagulation, rhythm control, ventricular arrhythmia",
    subsections: [
      {
        id: "af-anticoag",
        title: "AF – Anticoagulation",
        color: "#e74c3c",
        trials: [
          {
            id: "baataf",
            name: "BAATAF",
            year: 1990,
            n: "420",
            question: "Warfarin vs no anticoagulation in AF?",
            result: "Markedly reduced stroke.",
            pearl: "Helped establish anticoagulation as standard of care.",
            examPearl: null
          },
          {
            id: "rely",
            name: "RE-LY",
            year: 2009,
            n: "18,113",
            question: "Dabigatran vs warfarin?",
            result: "Non-inferior/superior stroke prevention with less ICH.",
            pearl: "Started the DOAC era.",
            examPearl: null
          },
          {
            id: "aristotle",
            name: "ARISTOTLE",
            year: 2011,
            n: "18,201",
            question: "Apixaban vs warfarin?",
            result: "Reduced stroke, bleeding, and mortality.",
            pearl: "Often considered the strongest DOAC trial.",
            examPearl: null
          },
          {
            id: "river",
            name: "RIVER",
            year: 2020,
            n: "1,005",
            question: "Rivaroxaban vs warfarin in AF + bioprosthetic MVR?",
            result: "Non-inferior efficacy and safety.",
            pearl: "Supports DOAC use in bioprosthetic mitral valves.",
            examPearl: null
          },
          {
            id: "augustus",
            name: "AUGUSTUS",
            year: 2019,
            n: "4,614",
            question: "Best antithrombotic regimen in AF + ACS/PCI?",
            result: "Apixaban reduced bleeding; aspirin increased bleeding.",
            pearl: "Supports DOAC + P2Y12 without routine aspirin.",
            examPearl: null
          }
        ]
      },
      {
        id: "af-rhythm",
        title: "AF – Rhythm Control",
        color: "#2980b9",
        trials: [
          {
            id: "castleaf",
            name: "CASTLE-AF",
            year: 2018,
            n: "363",
            question: "AF ablation in HFrEF?",
            result: "Reduced mortality and HF hospitalization.",
            pearl: "Most important AF ablation outcome trial.",
            examPearl: null
          },
          {
            id: "cabana",
            name: "CABANA",
            year: 2019,
            n: "2,204",
            question: "AF ablation vs drug therapy?",
            result: "No significant mortality benefit (ITT).",
            pearl: "Improved rhythm control and quality of life.",
            examPearl: null,
            flag: "warning"
          },
          {
            id: "eastafnet4",
            name: "EAST-AFNET 4",
            year: 2020,
            n: "2,789",
            question: "Early rhythm vs usual care?",
            result: "Reduced CV death, stroke, and HF hospitalization.",
            pearl: "Changed AF guidelines toward early rhythm control.",
            examPearl: null
          },
          {
            id: "legacy",
            name: "LEGACY",
            year: 2015,
            n: "355",
            question: "Does weight loss reduce AF burden?",
            result: "≥10% weight loss markedly reduced AF recurrence.",
            pearl: "Risk factor modification became a pillar of AF care.",
            examPearl: null
          }
        ]
      },
      {
        id: "ventricular-arrhythmia",
        title: "Ventricular Arrhythmia",
        color: "#e74c3c",
        trials: [
          {
            id: "cast",
            name: "CAST",
            year: 1989,
            n: "2,309",
            question: "Class IC drugs after MI?",
            result: "Increased mortality despite suppressing PVCs.",
            pearl: "One of the most important negative trials in cardiology history.",
            examPearl: null
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
        title: "Lifestyle / Nutrition",
        color: "#2980b9",
        trials: [
          {
            id: "predimed",
            name: "PREDIMED",
            year: 2013,
            n: "7,447",
            question: "Does a Mediterranean diet reduce cardiovascular events in high-risk individuals without established CVD?",
            result: "Mediterranean diet supplemented with extra-virgin olive oil or nuts reduced major cardiovascular events compared with a low-fat diet.",
            pearl: "One of the strongest trials supporting dietary intervention for cardiovascular prevention. Demonstrated that diet can reduce \"hard\" cardiovascular outcomes, not just risk factors.",
            examPearl: "The original 2013 publication was retracted and republished in 2018 due to randomization irregularities, but the overall conclusions remained unchanged."
          }
        ]
      },
      {
        id: "lipids",
        title: "Lipid Management",
        color: "#e74c3c",
        trials: [
          {
            id: "4s",
            name: "4S",
            year: 1994,
            n: "4,444",
            question: "Simvastatin in CAD?",
            result: "Reduced mortality and major CV events.",
            pearl: "Started the statin era.",
            examPearl: null
          },
          {
            id: "proveit",
            name: "PROVE-IT TIMI 22",
            year: 2004,
            n: "4,162",
            question: "Intensive vs moderate statin after ACS?",
            result: "Intensive therapy superior.",
            pearl: "\"Lower is better\" for LDL.",
            examPearl: null
          },
          {
            id: "improveit",
            name: "IMPROVE-IT",
            year: 2015,
            n: "18,144",
            question: "Add ezetimibe to statin after ACS?",
            result: "Further LDL lowering reduced events.",
            pearl: "First proof that non-statin LDL lowering improves outcomes.",
            examPearl: null
          },
          {
            id: "fourier",
            name: "FOURIER",
            year: 2017,
            n: "27,564",
            question: "Evolocumab in ASCVD?",
            result: "Reduced MACE with very low LDL levels.",
            pearl: "Established PCSK9 inhibitors.",
            examPearl: null
          }
        ]
      },
      {
        id: "primary-prevention",
        title: "Primary Prevention / Metabolic",
        color: "#2980b9",
        trials: [
          {
            id: "ascend",
            name: "ASCEND",
            year: 2018,
            n: "15,480",
            question: "Aspirin for primary prevention in diabetes?",
            result: "Reduced vascular events but increased major bleeding.",
            pearl: "No routine aspirin for most diabetics.",
            examPearl: null
          },
          {
            id: "stampede",
            name: "STAMPEDE",
            year: 2012,
            n: "150",
            question: "Bariatric surgery vs intensive medical therapy in obesity/T2DM?",
            result: "Greater weight loss and glycemic control with surgery.",
            pearl: "Landmark cardiometabolic intervention study.",
            examPearl: null
          }
        ]
      }
    ]
  }
];
