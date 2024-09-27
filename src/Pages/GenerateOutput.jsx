import React from "react";
import "./out.css";

const data = {
  1: {
    crop: "Corn",
    disease: "Common Rust",
    cause: [
      "Fungal infection caused by Puccinia sorghi.",
      "Favored by cool, moist conditions.",
      "Spread by airborne spores (urediniospores).",
      "High humidity and temperatures between 16-25°C promote rust development."
    ],
    cure: [
      "Early application of fungicides such as mancozeb, azoxystrobin, or pyraclostrobin.",
      "Remove infected plant debris after harvest to reduce spore load.",
      "Foliar sprays during the early stage of the disease to prevent spread."
    ],
    prevention: [
      "Plant rust-resistant corn hybrids.",
      "Rotate crops to disrupt the rust lifecycle (e.g., soybeans or wheat).",
      "Avoid planting in areas prone to prolonged moisture.",
      "Optimize irrigation to minimize leaf wetness (drip irrigation preferred)."
    ]
  },
  2: {
    crop: "Corn",
    disease: "Gray Leaf Spot",
    cause: [
      "Fungal disease caused by Cercospora zeae-maydis.",
      "Thrives in high humidity, fog, or dew.",
      "Survives in infected corn residue from previous seasons.",
      "Often triggered by over-fertilization with nitrogen."
    ],
    cure: [
      "Apply strobilurin or triazole-based fungicides before disease reaches the ear leaf.",
      "Fungicides such as trifloxystrobin and propiconazole can be effective.",
      "Apply fungicides as soon as symptoms are observed (small, rectangular lesions)."
    ],
    prevention: [
      "Plant resistant corn hybrids.",
      "Rotate with non-host crops like soybeans to reduce fungal inoculum.",
      "Use no-till or minimum-tillage practices to reduce the disease spread from crop residues.",
      "Monitor fields for early signs, especially after wet, humid conditions."
    ]
  },
  3: {
    crop: "Corn",
    disease: "Healthy",
    cause: ["No disease present."],
    prevention: [
      "Use disease-resistant hybrids and maintain optimal soil health through balanced fertilization.",
      "Apply nitrogen in moderate amounts to avoid creating conditions favorable for diseases like Gray Leaf Spot.",
      "Ensure proper irrigation to avoid moisture stress, which can make the plant more susceptible to diseases."
    ]
  },
  4: {
    crop: "Corn",
    disease: "Northern Leaf Blight",
    cause: [
      "Caused by Exserohilum turcicum, a fungal pathogen.",
      "Thrives in cool (18-27°C), moist environments.",
      "Spread through wind-borne spores and survives in crop residues.",
      "Development favored by wet leaves and prolonged dew periods."
    ],
    cure: [
      "Apply fungicides like mancozeb, triazole, or strobilurin-based products when early lesions appear.",
      "Early fungicide application is crucial, especially during tasseling.",
      "Destroy infected residue or bury it through deep plowing."
    ],
    prevention: [
      "Plant resistant corn hybrids.",
      "Use proper crop rotation, avoiding continuous corn cropping.",
      "Monitor the field regularly during wet weather to catch the disease early.",
      "Manage nitrogen application to avoid excess vegetation, which retains moisture and promotes disease."
    ]
  },
  5: {
    crop: "Potato",
    disease: "Early Blight",
    cause: [
      "Fungal infection by Alternaria solani.",
      "More prevalent in stressed plants (nutrient deficiencies, drought, etc.).",
      "Thrives in warm (24-29°C), humid conditions.",
      "Infection starts with small brown spots on lower leaves, gradually expanding."
    ],
    cure: [
      "Apply fungicides like chlorothalonil, copper oxychloride, or mancozeb before the disease progresses.",
      "Foliar sprays with systemic fungicides like boscalid or pyraclostrobin are effective.",
      "Remove infected leaves and practice sanitation."
    ],
    prevention: [
      "Use certified disease-free seed potatoes.",
      "Practice proper crop rotation with non-host crops like cereals or legumes.",
      "Avoid overhead irrigation, which leaves moisture on the foliage.",
      "Maintain a balanced fertilization program, focusing on nitrogen and potassium."
    ]
  },
  6: {
    crop: "Potato",
    disease: "Healthy",
    cause: ["No disease detected."],
    prevention: [
      "Use certified, disease-free seed potatoes.",
      "Ensure well-drained soil and avoid waterlogging.",
      "Regularly monitor fields for early disease signs.",
      "Rotate crops to prevent soil-borne diseases."
    ]
  },
  7: {
    crop: "Potato",
    disease: "Late Blight",
    cause: [
      "Fungal infection caused by Phytophthora infestans.",
      "Thrives in cool (10-20°C), wet conditions.",
      "Causes rapid foliar blight and tuber rot in potatoes.",
      "Can survive in infected tubers and spread via air-borne spores."
    ],
    cure: [
      "Apply systemic fungicides such as metalaxyl or fluopicolide early in the growing season.",
      "Destroy all infected plants and tubers to reduce inoculum.",
      "Fungicides with mandipropamid or dimethomorph can help control outbreaks."
    ],
    prevention: [
      "Plant blight-resistant varieties (e.g., 'Sarpo Mira').",
      "Avoid over-irrigation and ensure good drainage in fields.",
      "Regularly scout for symptoms, especially in humid, cool weather.",
      "Use a proper fungicide spray schedule, especially in high-risk areas."
    ]
  },
  8: {
    crop: "Rice",
    disease: "Brown Spot",
    cause: [
      "Caused by Bipolaris oryzae, a fungus.",
      "More common in nutrient-deficient soils (especially potassium and nitrogen).",
      "Infection is promoted by poor water management and drought stress.",
      "Symptoms include small, round, brown spots on leaves and grains."
    ],
    cure: [
      "Apply foliar fungicides like mancozeb or carbendazim during the early stage of infection.",
      "Balanced fertilization with adequate potassium to reduce stress.",
      "Use seed treatments with fungicides like thiram or captan."
    ],
    prevention: [
      "Plant disease-resistant rice varieties.",
      "Ensure a balanced fertilization program, focusing on potassium.",
      "Avoid water stress by managing irrigation properly.",
      "Treat seeds with fungicides before planting to reduce seed-borne infections."
    ]
  },
  9: {
    crop: "Rice",
    disease: "Healthy",
    cause: ["No disease present."],
    prevention: [
      "Maintain proper water management practices to prevent water stress or excess.",
      "Use high-quality, disease-resistant seeds.",
      "Ensure balanced fertilization to promote healthy growth."
    ]
  },
  10: {
    crop: "Rice",
    disease: "Leaf Blast",
    cause: [
      "Fungal infection caused by Magnaporthe oryzae.",
      "High humidity and wet leaves encourage infection.",
      "Infection usually occurs at seedling or tillering stage."
    ],
    cure: [
      "Apply fungicides like tricyclazole, carbendazim, or azoxystrobin.",
      "Systemic fungicides should be applied before flowering.",
      "Increase potassium fertilization to strengthen plant defenses."
    ],
    prevention: [
      "Use resistant rice varieties like IR64 or KAVERI.",
      "Maintain proper irrigation, avoiding waterlogged conditions.",
      "Avoid dense planting to improve air circulation.",
      "Implement balanced nitrogen and potassium fertilization."
    ]
  },
  11: {
    crop: "Rice",
    disease: "Neck Blast",
    cause: [
      "A severe form of rice blast caused by Magnaporthe oryzae, affecting the neck and panicle.",
      "Often triggered by excessive nitrogen use and wet conditions."
    ],
    cure: [
      "Apply systemic fungicides like tricyclazole or edifenphos during the booting stage.",
      "Destroy infected plant debris to prevent spore buildup."
    ],
    prevention: [
      "Ensure balanced nitrogen and potassium fertilization.",
      "Plant resistant varieties.",
      "Improve water management to prevent prolonged leaf wetness."
    ]
  },
  12: {
    crop: "Wheat",
    disease: "Brown Rust",
    cause: [
      "Caused by Puccinia triticina, a fungal pathogen.",
      "Thrives in cool (15-22°C), humid conditions.",
      "Spread through airborne spores, surviving in infected residues."
    ],
    cure: [
      "Apply fungicides like tebuconazole or propiconazole when symptoms first appear.",
      "Regular fungicide application during the growing season."
    ],
    prevention: [
      "Use resistant wheat varieties (e.g., Lr19, Lr24).",
      "Ensure proper crop rotation with non-host crops.",
      "Burn or remove infected residues after harvest."
    ]
  },
  13: {
    crop: "Wheat",
    disease: "Healthy",
    cause: ["No disease detected."],
    prevention: [
      "Use wheat varieties bred for disease resistance.",
      "Regularly scout fields for early signs of pests or disease.",
      "Apply balanced fertilizers with adequate nitrogen, phosphorus, and potassium.",
      "Sow wheat during recommended planting windows to avoid peak disease periods."
    ]
  },
  14: {
    crop: "Wheat",
    disease: "Yellow Rust",
    cause: [
      "Caused by Puccinia striiformis, a fungal pathogen.",
      "Favors cool, moist conditions and is wind-borne."
    ],
    cure: [
      "Apply fungicides like triadimefon or flutriafol early in the disease cycle.",
      "Use multiple fungicide applications during high-risk periods."
    ],
    prevention: [
      "Plant resistant varieties like Yr5 or Yr15.",
      "Monitor weather conditions and apply preventive fungicides accordingly.",
      "Destroy volunteer wheat and other grass hosts to reduce inoculum."
    ]
  },
  15: {
    crop: "Wheat",
    disease: "Loose Smut",
    cause: [
      "Fungal infection by Ustilago tritici, affecting wheat heads.",
      "Spread through infected seed or airborne spores."
    ],
    cure: [
      "Treat seeds with fungicides like carboxin or difenoconazole before planting.",
      "Rogue out and destroy infected plants immediately."
    ],
    prevention: [
      "Use certified, disease-free seed.",
      "Apply systemic seed treatments before sowing.",
      "Implement crop rotation with non-host crops to reduce disease incidence."
    ]
  }
};

const Section = ({ title, items }) => (
  <div className="section">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const GenerateOutput = ({ val }) => {
  const section = data[val];

  if (!section) {
    return <p>No data available.</p>;
  }

  return (
    <div className="output-container">
      <Section title="Cause" items={section.cause} />
      {section.cure && <Section title="Cure" items={section.cure} />}
      <Section title="Prevention" items={section.prevention} />
    </div>
  );
};

export default GenerateOutput;
