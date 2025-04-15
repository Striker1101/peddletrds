import React, { useEffect, useState } from "react";

const actions = ["earned", "withdrew", "deposited"];

const getRandomAmount = () => {
  const min = 1000;
  const max = 100000;
  const step = 1000;
  return Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
};

const fetchRandomTestimony = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];
    const amount = getRandomAmount().toLocaleString();
    const action = actions[Math.floor(Math.random() * actions.length)];

    return {
      name: `${user.name.first} ${user.name.last}`,
      country: user.location.country,
      image: user.picture.medium,
      message: `${user.name.first} ${user.name.last} from ${user.location.country} just ${action} $${amount}`,
    };
  } catch (error) {
    console.error("Error fetching testimony:", error);
    return null;
  }
};

export default function Testimony() {
  const [testimony, setTestimony] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const cycleTestimonies = async () => {
      while (isMounted) {
        const data = await fetchRandomTestimony();
        if (data && isMounted) {
          setTestimony(data);
          setVisible(true);

          await new Promise((res) => setTimeout(res, 5000)); // Show for 5s
          setVisible(false);
          await new Promise((res) => setTimeout(res, 2000)); // Hide for 2s
        }
      }
    };

    cycleTestimonies();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!testimony) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        background: "#fff",
        padding: "12px 16px",
        borderRadius: 10,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <img
        src={testimony.image}
        alt={testimony.name}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
          marginRight: 12,
        }}
      />
      <span style={{ fontSize: 14 }}>{testimony.message}</span>
    </div>
  );
}
