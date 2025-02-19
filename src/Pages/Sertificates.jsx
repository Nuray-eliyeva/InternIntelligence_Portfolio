import { useState } from "react";

const events = [
  { id: 1, image: "/Images/highhonor.jpg" },
  { id: 2, image: "/Images/code.jpg" },
  { id: 3, image: "/Images/html.png" },
  { id: 4, image: "/Images/web.png" },
  { id: 5, image: "/Images/css.png" },
  { id: 6, image: "/Images/learnjs.png" },
  { id: 7, image: "/Images/javascript.png" },
  { id: 8, image: "/Images/sql.png" },
];

export default function Timeline() {
  const [selected, setSelected] = useState(events.map(event => event.id));

  const toggleImage = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="sertificate-section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "170vh" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "12px", background: "white",borderRadius: "10px", height: "100%", position: "absolute", left: "50%", transform: "translateX(-50%)" }}></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            style={{ position: "relative", display: "flex", alignItems: "center", margin: "60px 0", cursor: "pointer" }}
            onClick={() => toggleImage(event.id)}
          >
            <div style={{ width: "50px", height: "50px", background: "white", borderRadius: "50%" }} className="cont"></div>
            {selected.includes(event.id) && (
              <div className="cont-item"
                style={{
                  position: "absolute",
                  top:-25,
                  [index % 2 === 0 ? "right" : "left"]: "130px",
                }}
              >
                <img src={event.image} alt="Event" className="sertificate" 
                style={{ 
                  width: event.id === 1 ? "150px" : "220px", 
                   borderRadius: "8px", 
                   boxShadow: "0 4px 20px rgba(250, 250, 250, 0.72)"
                    }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
