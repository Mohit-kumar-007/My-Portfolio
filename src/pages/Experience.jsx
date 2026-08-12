import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CalendarDays, MapPin, Building, ExternalLink } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Backend Engineer',
      company: 'ShriNeo Capital (ShriNeo Vittiyam Pvt. Ltd.)',
      location: 'Jaipur, India',
      duration: 'March 2026 - Present',
      type: 'Full-time',
      description:
        'Own backend development for a vernacular digital lending platform serving Tier-2/Tier-3 India, backed by banking & NBFC partners. Work across the stack in a fast-moving startup environment, collaborating directly with the founding team.',
      achievements: [
        'Build and maintain REST APIs for loan discovery, application management, and loan tracking/servicing',
        "Ship features end-to-end using Node.js and MongoDB across the company's MVP lending platform",
      ],
      technologies: ['Node.js', 'MongoDB', 'Express', 'REST API Design'],
      companyUrl: '#',
      current: true,
    },
    {
      id: 2,
      title: 'AI/ML Trainee — College Training Program',
      company: 'KVON Tech Consultancy Services Pvt. Ltd.',
      location: '',
      duration: 'July 2026 - August 2026',
      type: 'Training',
      description:
        'Completed a structured in-college training program with an initial ~10-day foundation in AI/ML concepts, progressing through applied exercises before a mentored capstone project.',
      achievements: [
        'Completed a ~10-day AI/ML foundation followed by a series of small applied AI/ML exercises',
        'Built a capstone project under mentorship',
        "Gained exposure to KVON Tech's broader delivery stack spanning AI/ML, web development, and automation",
      ],
      technologies: ['AI/ML', 'Python'],
      companyUrl: '#',
      current: false,
    },
    {
      id: 3,
      title: 'Senior Robotics Instructor',
      company: 'Aerophantom',
      location: '',
      duration: 'January 2026 - February 2026',
      type: 'Part-time',
      description:
        'Conducted robotics & STEM training sessions for students, mentoring on Arduino, sensors, motors, and automation.',
      achievements: [
        'Designed hands-on workshops and guided students in building real-world robotics projects',
        'Mentored students on Arduino, sensors, motors, and automation fundamentals',
      ],
      technologies: ['Arduino', 'Sensors', 'Motors', 'Robotics'],
      companyUrl: '#',
      current: false,
    },
    {
      id: 4,
      title: 'Web Developer & Robotics Engineer Intern',
      company: 'Rehabionix',
      location: '',
      duration: 'June 2025 - December 2025',
      type: 'Internship',
      description:
        'Designed and developed the company’s official website, and built a robotic hand for rehabilitation by integrating motors, sensors, and microcontrollers.',
      achievements: [
        "Designed and developed the company's official website using modern web technologies",
        'Assembled and programmed a robotic hand for rehabilitation, integrating motors, sensors, and microcontrollers',
        'Collaborated with the hardware team to test and calibrate robotic movements',
      ],
      technologies: ['React.js', 'Robotics', 'Arduino', 'Sensors', 'Microcontrollers'],
      companyUrl: '#',
      current: false,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Internship':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'Part-time':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Training':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Leadership':
        return 'bg-violet-500/10 text-violet-500 border-violet-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">My professional journey and career milestones</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px" />

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative mb-12 animate-fade-in-scale ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0 ? 'left-6 md:left-auto md:-right-2 top-8' : 'left-6 md:-left-2 top-8'
                } ${experience.current ? 'animate-pulse-glow' : ''}`}
              />

              <Card
                className={`portfolio-card p-6 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <div className="flex items-center text-foreground font-medium">
                      <Building className="w-4 h-4 mr-2" />
                      {experience.companyUrl !== '#' ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center"
                        >
                          {experience.company}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        experience.company
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge className={`border ${getTypeColor(experience.type)}`}>
                      {experience.type}
                      {experience.current && ' • Current'}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  {experience.location && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up">
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">1+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Companies Worked</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="portfolio-card p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies Used</div>
          </div>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
