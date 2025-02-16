import { useEffect, useRef, useState } from "react";
import { ProgressBar, Container } from "react-bootstrap";

const AnimatedProgressBars = () => {
  const progressRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const progressData = [
    { label: "Digital Art", percentage: 90 },
    { label: "Support", percentage: 80 },
    { label: "Marketing", percentage: 85 },
    { label: "Blockchain", percentage: 90 },
  ];

  return (
    <Container ref={progressRef} className="mt-4">
      {progressData.map((item, index) => (
        <div key={index} className="mb-3">
          <strong>{item.label}</strong>
          <ProgressBar
            now={inView ? item.percentage : 0} // Animate only when inView is true
            label={`${item.percentage}%`}
            striped
            animated
            className="mt-1"
          />
        </div>
      ))}
    </Container>
  );
};

export default AnimatedProgressBars;
