import React from "react";

// Define demo data as an array of objects with name, description, and image
const demoData = [
  {
    name: "E security guard",
    description: "This module helps in giving temporary access to guests in the department through facial recognition, sending OTP through mail to unlock doors upon successful detection, and also gives the details of a person's time of entering into the department using a speaker.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243523/IMG_0740_-_rocky_bhai_kj1vju.png",
  },
  {
    name: "Electric vehicle using Theo Jansen Mechanism",
    description: "Electric vehicle using Theo Jansen mechanism integrates motor-driven mechanical legs instead of wheels, enabling smooth and efficient multi-terrain mobility. Theo Jansen mechanism mimics natural walking patterns, reducing energy consumption compared to traditional wheeled vehicles. This design enhances adaptability on uneven surfaces, making it suitable for exploration and transport applications. Its bio-inspired design allows for better obstacle negotiation, making it ideal for off-road and rugged environments.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243522/IMG-20250129-WA0005_-_sreejaya_zqx1lt.jpg",
  },
  {
    name: "Musical Staircase",
    description: "The Musical Staircase is an interactive installation that uses PIR motion sensors mounted on stairs to detect movement and trigger musical notes. When someone walks up or down the stairs, the Arduino UNO detects their presence through the PIR sensors and sends signals to a computer, which then plays corresponding notes through a Python script, effectively turning the staircase into a musical instrument.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243520/musicalstaircase_-_Pragati_Nayak_m7hsdx.jpg",
  },
  {
    name: "Indigenous fabrication of flexible neural implants",
    description: "This custom-designed and indigenously fabricated ECoG neural implant is used for the exploration of brain regions related to Parkinson's disease in small animal models before proposing in humans. The design is very unique in the world. The Polyimide flexible substrate material is a good biocompatible material. The electrode materials are chosen such that they support electrophysiological signal acquisition/brain stimulation.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243522/Indigenous_fabrication_of_flexible_neural_implants_-_Sreenivas_Bhaskara_kcmgsz.png",
  },
  {
    name: "Polarization-based Optical system for Heart Tissue Characterization",
    description: "An optical system is developed to perform real-time and precise characterization of healthy and fibrotic myocardial tissues, facilitating quicker and more accurate diagnosis of cardiovascular disorders. It is envisaged that the developed technology has the potential to transform cardiac care and improve patient outcomes, thus reducing the global burden of heart diseases.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243520/Polarization-based_Optical_system_for_Heart_Tissue_Characterization_-_Twinkle_Bagha_dtm0fu.png",
  },
  {
    name: "Handheld Fluorescence Imaging System",
    description: "The Handheld Fluorescence Imaging System is a portable device that uses fluorescence imaging to detect and visualize biological markers, aiding in medical diagnostics. It captures real-time images of fluorescent signals emitted by tissues or cells, enabling non-invasive detection of diseases like cancer or infections. The compact design makes it ideal for point-of-care applications in clinical settings.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243523/HFIS_-_Aloysious_Benoy_qhj8s7.png",
  },
  {
    name: "Vein visualizer for assisting with cannulation.",
    description: "The Vein Visualizer uses Near-Infrared (NIR) imaging to enhance vein visibility for easier cannulation. It captures and displays real-time vein patterns on a screen, aiding healthcare professionals in locating optimal insertion points. This reduces needle insertion attempts, improving accuracy and patient comfort, especially for those with difficult venous access (DVA).",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243519/vein_visualizer_-_Manikumar_R_wsagfa.jpg",
  },
  {
    name: "Van de Graaff generator",
    description: "A Van de Graaff generator is an electrostatic generator that uses a moving belt to accumulate electric charge on a hollow metal globe on the top of an insulated column, creating very high electric potentials. It produces very high-voltage direct current (DC) electricity at low current levels.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243518/Van_de_graaff_generator_-_AJINKYA_DESHPANDE_hfkljj.jpg",
  },
  {
    name: "Cytology scanner for oral cancer screening",
    description: "An affordable and portable miniaturized version of a slide scanner for automated scanning and digitization of pathological slides.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243519/Cytology_scanner_for_oral_cancer_screening_-_Anujkumar_Prajapati_y5bcdt.jpg",
  },
  {
    name: "ML-based Hand Gesture Recognition System at the Edge",
    description: "Hand Gesture Recognition System for Edge devices, that senses EMG signals, then uses a hardware classifier to classify them into respective gestures.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740244117/tmp_2c2e7fdb-66c1-47e5-8c70-409200be5e4c_-_Swarnima_Mishra_ytoa5v.jpg",
  },
  {
    name: "Vein Visualiser",
    description: "The Vein Visualizer is a biomedical device designed to assist healthcare professionals in locating veins for cannulation using Near-Infrared (NIR) imaging. NIR light penetrates the skin and is absorbed differently by blood and surrounding tissues, enhancing vein contrast. The captured vein patterns are processed and displayed on a screen in real-time, allowing medical personnel to identify optimal insertion points. This system is particularly useful for patients with difficult venous access (DVA), such as infants, elderly individuals, and those with obesity or dark skin tones. By improving vein visibility, the device enhances the accuracy of cannulation, reduces multiple needle insertion attempts, and minimizes patient discomfort.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243517/Vein_Visualiser_-_Aravind_Karthik_gojjff.jpg",
  },
  {
    name: "Electrical Impedance-based Multiplexed Biosensor for Point-of-Care Diagnosis",
    description: "This project focuses on developing an innovative, cost-effective biosensor multiple analyte detection. The interdigitated electrodes (IDEs) on a PCB with a soft gold finish utilize electrical impedance sensing. The IDEs are chemically modified using various surface chemistries to enhance antibody immobilization and stability. This impedance-based biosensor can be tailored with specific bioreceptors to target multiple analytes in a single bioassay. The biosensor is paired with a compact impedance sensing module for precise EIS measurements.Additionally, the project aims to address the limitations of traditional biosensors, which typically detect single analytes and require individual measurements. By designing a simultaneous multiple analyte detection immunosensor array, this project seeks to enable large-scale manufacturing, reduce costs, and create reusable sensors for various scientific and industrial applications, from environmental monitoring to medical diagnostics. This immunosensor is a compact benchtop system that can be used as a reusable point-of-care device, unlike screenprinted electrode-based biosensors. This impedance-based biosensor can be tailored with specific bioreceptors to target various analytes.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243519/Electrical_Impedance-based_Multiplexed_Biosensor_for_Point-of-Care_Diagnosis_-_MOODE_SUSHMA_NAIK_li6lfh.png",
  },
  {
    name: "Optical modality for breast cancer tumor delineation",
    description: "Breast cancer is one of the leading causes of death in the female population worldwide. This research explores a robust and cost-effective Elastic Scattering Spectroscopy (ESS)-based probe that aids surgeons in effectively diagnosing breast cancer during surgery, reducing the mortality rate through early and precise detection.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243519/Optical_modality_for_breast_cancer_tumor_deliration_-_Apurva_Dahake_e22v9p.png",
  },
  {
    name: "Head bands for Auditory Hearing Screening",
    description: "A novel system for detecting auditory malfunctions and defects in humans using headbands equipped with sensors to analyze auditory responses, enabling early diagnosis of hearing impairments.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243529/Auditory_Hearing_screenign_system_-_saravanan_murugaiyan_qe0phd.png",
  },
  {
    name: "QCM for liver cirrhosis screening",
    description: "The system consists of a sensor array module for an E-Nose system featuring a combination of Quartz Crystal Microbalance (QCM) sensors, metal oxide sensors, and system parameter monitors. It also includes an acquisition module that integrates electronic and pneumatic components to analyze exhaled breath signatures for liver cirrhosis screening.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243526/QCM_for_liver_cirrhosis_screening_-_Amaresh_S_xhbo0p.png",
  },
  {
    name: "Keyword Spotting in Audio Data for Edge Devices using Machine Learning Algorithms on an FPGA Platform",
    description: "Implementing real-time keyword spotting on an FPGA platform using machine learning algorithms optimized for edge devices, enabling low-power and efficient voice recognition for edge AI applications.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243516/Keyword_Spotting_in_Audio_Data_for_Edge_Devices_using_Machine_Learning_Algorithms_on_an_FPGA_Platforms_-_SHOBHIT_VERMA_ruhjir.png",
  },
  {
    name: "Solving Graph Max Cut with FPGA Acceleration",
    description: "This project explores the efficacy of probabilistic computing in solving the max-cut problem, a common challenge in optimization. It uses a fast and scalable 2048-node system, called pc-COP, implemented on a Xilinx UltraScale+ FPGA.",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1740243516/Solving_Graph_Max_Cut_with_FPGA_-_Elizabeth_Kuruvilla_nupigv.png",
  },
];

const DemoPage = () => {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Demo Projects
        </h1>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience cutting-edge technology through our innovative demonstrations
        </p>

        <div className="space-y-12"> 
          {demoData.map((demo, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0b2e]/80 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20 max-w-3xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <img
                  src={demo.image}
                  alt={demo.name}
                  className="w-full h-64 object-contain rounded-xl mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                />
                <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
                  {demo.name}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;