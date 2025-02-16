import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const AnimatedCounters = () => {
  const counterRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counterData = [
    {
      value: 38.98,
      prefix: "$",
      suffix: "M+",
      label: "Digital Products",
      decimals: 2,
    },
    { value: 680, suffix: "K+", label: "Happy Active Users" },
    { value: 380, prefix: "$", suffix: "M+", label: "Transactions Done" },
    { value: 150, suffix: "K+", label: "Community BTC" },
  ];

  return (
    <Container ref={counterRef} className="mt-4 text-center">
      <Row>
        {counterData.map((item, index) => (
          <Col key={index} lg={3} md={6} className="mb-4">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h1 className="fw-bold">
                {item.prefix && <span>{item.prefix}</span>}
                <CountUp
                  start={0}
                  end={inView ? item.value : 0}
                  duration={2.5}
                  separator=","
                  decimals={item.decimals || 0}
                />
                {item.suffix && <span>{item.suffix}</span>}
              </h1>
              <h5 className="mt-2 text-muted">{item.label}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AnimatedCounters;
