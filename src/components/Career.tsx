import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  // Extract all 4 digit numbers (years)
  const years = period.match(/\d{4}/g);
  // Return the last year found (the exit year)
  if (years && years.length > 0) {
    return years[years.length - 1];
  }
  return period;
};

const Career = () => {
  // Combine and sort career + education
  const timelineItems = [
    ...config.experiences.map(exp => ({ ...exp, type: 'experience', title: exp.position, subtitle: exp.company })),
    ...config.education.map(edu => ({ ...edu, type: 'education', title: edu.degree, subtitle: edu.institution }))
  ].sort((a, b) => {
    const getYear = (p: string) => {
      if (p.includes("Present")) return 9999;
      const years = p.match(/\d{4}/g);
      return years && years.length > 0 ? parseInt(years[years.length - 1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timelineItems.map((item, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.subtitle}</h5>
                </div>
                <h3>{getDisplayYear(item.period)}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
