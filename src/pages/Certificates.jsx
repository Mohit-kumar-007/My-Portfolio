import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ZoomIn, ExternalLink, Calendar, Building, Award, X, Trophy } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Ranked highest value/prestige first: wins > premier institutions/brands > certifications > hackathons > appreciation
  const certificates = [
    {
      id: 1,
      title: 'HackTech 2025 — Innovation Award',
      issuer: 'Thapar Institute of Engineering & Technology',
      date: 'February 2025',
      category: 'award',
      description: 'Won the Innovation Award at HackTech 2025, organized by Thapar Institute of Engineering and Technology, Patiala with Compucom Institute of Technology & Management, Kota. Competed as Team Aniruddha representing Vivekananda Global University, Jaipur.',
      image: '/certificates/hacktech-2025-innovation-award.jpg',
      highlights: ['Innovation Award Winner', 'Team Aniruddha', 'Hackathon']
    },
    {
      id: 2,
      title: 'Innovastra 2025 Hackathon — 2nd Rank',
      issuer: 'Arya College of Engineering, Jaipur',
      date: '2025',
      category: 'award',
      description: 'Secured 2nd Rank in the Innovastra 2025 Hackathon held at Arya College of Engineering, Jaipur, as part of Team Aniruddha from Vivekananda Global University.',
      image: '/certificates/innovastra-2025-second-rank.png',
      highlights: ['2nd Rank', 'Team Aniruddha', 'Hackathon']
    },
    {
      id: 3,
      title: 'Faculty Development Programme — Quantum Technologies & Applications',
      issuer: 'MNIT Jaipur, IIT Roorkee, IIT Guwahati, NIT Patna, NIT Warangal, IIITDM Jabalpur',
      date: 'March 2025',
      category: 'government',
      description: 'Completed a 40-hour (3-credit equivalent) MeitY-funded Faculty Development Programme on Quantum Technologies & Applications, jointly organized by six premier Electronics & ICT Academies and endorsed by DST-NQM, AICTE and UGC.',
      image: '/certificates/quantum-technologies-fdp.png',
      highlights: ['Quantum Computing', '40-Hour Programme', 'MeitY Funded']
    },
    {
      id: 4,
      title: 'Tech Future Hackathon 4.0',
      issuer: 'FITT, IIT Delhi & MeitY Startup Hub',
      date: 'April 2025',
      category: 'hackathon',
      description: 'Participated in Tech Future Hackathon 4.0 hosted at the Foundation for Innovation and Technology Transfer (FITT), IIT Delhi, in association with the Ministry of Electronics and Information Technology.',
      image: '/certificates/iit-delhi-tech-future-hackathon.jpg',
      highlights: ['Hack · Connect · Code', 'Team Aniruddha', 'IIT Delhi']
    },
    {
      id: 5,
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte (via Forage)',
      date: 'June 2025',
      category: 'certification',
      description: 'Completed practical, job-based tasks in cyber security as part of Deloitte’s virtual job simulation programme delivered through Forage.',
      image: '/certificates/deloitte-cyber-job-simulation.jpg',
      highlights: ['Cyber Security', 'Job Simulation', 'Deloitte']
    },
    {
      id: 6,
      title: 'PBEL Equivalent to Virtual Internship — AI',
      issuer: 'IBM (IBM Developer Skills Network)',
      date: 'July 2025',
      category: 'certification',
      description: 'Successfully completed and received a passing grade in the Project-Based Experiential Learning programme equivalent to a Virtual AI Internship, powered by the IBM Developer Skills Network.',
      image: '/certificates/ibm-pbel-ai-internship.png',
      highlights: ['Artificial Intelligence', 'Virtual Internship', 'IBM Skills Network']
    },
    {
      id: 24,
      title: 'Python with AWS Cloud Training',
      issuer: 'LinuxWorld (#13 — Learn to Lead)',
      date: 'July 2026',
      category: 'certification',
      description: '20+ hours of hands-on Python with AWS Cloud training covering Python fundamentals, OOP, REST APIs, IAM, AWS CLI, Boto3, EC2, S3, DynamoDB, Lambda, SNS and CloudWatch, culminating in 5 real-world cloud projects under the mentorship of Syed Jibbran Ali.',
      image: '/certificates/linuxworld-python-aws-cloud-training.jpg',
      highlights: ['Python', 'AWS Cloud', '5 Real-World Projects']
    },
    {
      id: 7,
      title: 'Adobe India Hackathon — Round 1',
      issuer: 'Adobe (via Unstop)',
      date: '2025',
      category: 'hackathon',
      description: 'Cleared Round 1 (Online MCQ Assessment + Coding) of the Adobe India Hackathon, organized by Adobe on the Unstop platform, as part of Team Aniruddha.',
      image: '/certificates/adobe-india-hackathon.jpg',
      highlights: ['MCQ + Coding Round', 'Team Aniruddha', 'Adobe']
    },
    {
      id: 8,
      title: 'Foundations of Cybersecurity',
      issuer: 'Google (via Coursera)',
      date: 'April 2024',
      category: 'certification',
      description: 'Completed the Foundations of Cybersecurity course, part of the Google Cybersecurity Certificate, authorized by Google and offered through Coursera.',
      image: '/certificates/google-foundations-cybersecurity.png',
      verificationUrl: 'https://coursera.org/verify/HJY25GARLCLQ',
      highlights: ['Cybersecurity Fundamentals', 'Google Career Certificate']
    },
    {
      id: 9,
      title: 'Machine Learning with Python',
      issuer: 'IBM (via Coursera)',
      date: 'September 2025',
      category: 'certification',
      description: 'Completed the Machine Learning with Python course, an online non-credit course authorized by IBM and offered through Coursera.',
      image: '/certificates/ibm-machine-learning-python.jpg',
      verificationUrl: 'https://coursera.org/verify/BXQZJSX6FHGT',
      highlights: ['Machine Learning', 'Python', 'IBM']
    },
    {
      id: 10,
      title: 'Cybersecurity and Mobility',
      issuer: 'Kennesaw State University / University System of Georgia (via Coursera)',
      date: 'April 2024',
      category: 'certification',
      description: 'Completed Cybersecurity and Mobility, an online non-credit course authorized by the University System of Georgia and offered through Coursera.',
      image: '/certificates/kennesaw-cybersecurity-mobility.jpg',
      verificationUrl: 'https://coursera.org/verify/38JCEDGKG2MX',
      highlights: ['Mobile Security', 'Cybersecurity', 'University System of Georgia']
    },
    {
      id: 11,
      title: 'Cyber Hygiene Practices — Stay Safe Online Campaign',
      issuer: 'Ministry of Electronics & IT, Govt. of India (G20 / ISEA)',
      date: 'July 2024',
      category: 'government',
      description: 'Completed the course and quiz on Cyber Hygiene Practices under the Stay Safe Online (SSO) Campaign, led by MeitY and implemented by C-DAC Hyderabad as part of India’s G20 presidency.',
      image: '/certificates/meity-g20-cyber-hygiene.jpg',
      highlights: ['Cyber Hygiene', 'Govt. of India', 'G20 Initiative']
    },
    {
      id: 12,
      title: 'Dreamflow Buildathon 2025',
      issuer: 'Dreamflow x H2S x FlutterFlow',
      date: '2025',
      category: 'hackathon',
      description: 'Successfully built and shipped a functional application during the Dreamflow Buildathon 2025, demonstrating proficiency architecting, designing and deploying app solutions on the Dreamflow/FlutterFlow ecosystem.',
      image: '/certificates/dreamflow-buildathon-2025.png',
      highlights: ['FlutterFlow', 'Shipped an App', 'Buildathon']
    },
    {
      id: 13,
      title: 'HackGround India 2K25',
      issuer: 'Techverse Nexus Community',
      date: '2025',
      category: 'hackathon',
      description: 'Participated as Team Aniruddha, representing Vivekananda Global University, in HackGround India 2K25 organized by the Techverse Nexus Community with GitHub, TruScholar and Unstop.',
      image: '/certificates/hackground-india-2k25.jpg',
      highlights: ['Team Aniruddha', 'GitHub', 'Hackathon']
    },
    {
      id: 14,
      title: 'CodeFiesta — Hackathon 4.0',
      issuer: 'Global Institute of Technology, Jaipur',
      date: 'October 2025',
      category: 'hackathon',
      description: 'Participated in the 24-hour CodeFiesta Hackathon 4.0 organized by Global Institute of Technology, Jaipur, under the Global Innovation Community Technology (H2S) initiative.',
      image: '/certificates/codefiesta-hackathon-4.png',
      highlights: ['24-Hour Hackathon', 'Ideas · Learn · Hack']
    },
    {
      id: 15,
      title: 'Code Red 3.0 Triathlon — Hackathon',
      issuer: 'ACIC-VGU Foundation',
      date: 'October 2023',
      category: 'hackathon',
      description: 'Participated in the Hackathon event held during Code Red 3.0 Triathlon, supported by NITI Aayog, DBS and SIDBI, as part of Team Strategy.',
      image: '/certificates/code-red-3-triathlon-hackathon.jpg',
      highlights: ['Team Strategy', 'NITI Aayog Supported']
    },
    {
      id: 16,
      title: 'Web Security: Find and Fix Bugs Like a Pro',
      issuer: 'DevTown x Google Developer Groups, VIT-AP',
      date: 'June 2025',
      category: 'certification',
      description: 'Completed the Web Security bootcamp covering finding and fixing common web vulnerabilities, hosted by DevTown in collaboration with Google Developer Groups on Campus, VIT-AP.',
      image: '/certificates/devtown-web-security-gdg.jpg',
      verificationUrl: 'https://cert.devtown.in/verify/Z1d2qCI',
      highlights: ['Web Security', 'Bug Fixing', 'Google Developer Groups']
    },
    {
      id: 17,
      title: 'Web Security: Find and Fix Bugs Like a Pro',
      issuer: 'DevTown x Microsoft Student Chapter, MSIT',
      date: 'June 2025',
      category: 'certification',
      description: 'Completed the Web Security bootcamp covering finding and fixing common web vulnerabilities, hosted by DevTown in collaboration with the Microsoft Student Chapter, MSIT.',
      image: '/certificates/devtown-web-security-msit.jpg',
      verificationUrl: 'https://cert.devtown.in/verify/Z1V3Mto',
      highlights: ['Web Security', 'Bug Fixing', 'Microsoft Learn Student Ambassador']
    },
    {
      id: 18,
      title: 'DevOps Bootcamp',
      issuer: 'GeeksforGeeks',
      date: '2025',
      category: 'certification',
      description: 'Successfully completed the DevOps Bootcamp course on GeeksforGeeks, covering core DevOps tooling and practices.',
      image: '/certificates/gfg-devops-bootcamp.jpg',
      verificationUrl: 'https://media.geeksforgeeks.org/courses/certificates/ecc34fdbc7ab5e61bca2082374f909e1.pdf',
      highlights: ['DevOps', 'CI/CD Practices']
    },
    {
      id: 19,
      title: 'Front End Development — HTML',
      issuer: 'Great Learning Academy',
      date: 'December 2023',
      category: 'certification',
      description: 'Successfully completed the free online course Front End Development - HTML, provided by Great Learning Academy.',
      image: '/certificates/great-learning-frontend-html.jpg',
      verificationUrl: 'https://verify.mygreatlearning.com/RFQJUWNX',
      highlights: ['HTML', 'Front-End Basics']
    },
    {
      id: 20,
      title: 'Web Development in Hindi',
      issuer: 'Great Learning Academy',
      date: 'July 2023',
      category: 'certification',
      description: 'Successfully completed the free online course Web Development in Hindi, provided by Great Learning Academy.',
      image: '/certificates/great-learning-web-dev-hindi.jpg',
      verificationUrl: 'https://verify.mygreatlearning.com/ZBLACMDQ',
      highlights: ['Web Development', 'Hindi Medium Course']
    },
    {
      id: 21,
      title: 'Trainer — 2-Week A.I. with Robotics Workshop',
      issuer: 'Aerophantom',
      date: 'February 2026',
      category: 'appreciation',
      description: 'Certificate of Appreciation for successfully serving as a trainer in the 2-Week A.I. with Robotics Workshop held in Bijnor, U.P., organized by Aerophantom.',
      image: '/certificates/aerophantom-ai-robotics-trainer.jpg',
      highlights: ['AI & Robotics', 'Trainer Role', '2-Week Workshop']
    },
    {
      id: 22,
      title: 'Core Team Member — Ethical Hacking Workshop (Hack-O-Shop)',
      issuer: 'Vivekananda Global University, Jaipur',
      date: 'April 2025',
      category: 'appreciation',
      description: 'Letter of Appreciation from the Dean of FOET, VGU, for dedicated contribution as a Core Team Member and volunteer in organizing and executing the Ethical Hacking Workshop: Hack-O-Shop.',
      image: '/certificates/vgu-ethical-hacking-appreciation.png',
      highlights: ['Ethical Hacking', 'Event Coordination', 'Core Team Member']
    },
    {
      id: 23,
      title: 'Certificate of Appreciation',
      issuer: 'SMARTED',
      date: 'June 2025',
      category: 'appreciation',
      description: 'Recognized by SMARTED in grateful appreciation for continuing support in helping grow their community, in association with #StartupIndia.',
      image: '/certificates/smarted-appreciation.jpg',
      highlights: ['Community Support', 'Startup India']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Certificates' },
    { value: 'award', label: 'Wins & Awards' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'certification', label: 'Certifications' },
    { value: 'government', label: 'Govt. / Institutional' },
    { value: 'appreciation', label: 'Appreciation' }
  ];

  const filteredCertificates = selectedCategory === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <PageLayout>
      <div className="min-h-screen pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className={selectedCategory === category.value ? "portfolio-gradient" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate, index) => (
            <Card
              key={certificate.id}
              className="portfolio-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  {certificate.category === 'award' && (
                    <Trophy className="absolute top-2 right-2 w-6 h-6 text-yellow-500 drop-shadow z-10" />
                  )}
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg"
                  aria-label={`View ${certificate.title} certificate details`}
                >
                  <ZoomIn className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary line-clamp-2">{certificate.title}</h3>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Building className="w-4 h-4 mr-2 shrink-0" />
                  <span className="line-clamp-1">{certificate.issuer}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {certificate.date}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {certificate.highlights.slice(0, 3).map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="portfolio-gradient flex-1"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a href={certificate.verificationUrl || certificate.image} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No certificates found in this category.</p>
          </div>
        )}
      </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">{selectedCertificate.title}</h2>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Close certificate details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Issuer</h3>
                    <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Date Issued</h3>
                    <p className="text-muted-foreground">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Description</h3>
                    <p className="text-muted-foreground">{selectedCertificate.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="bg-primary/10 text-primary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full portfolio-gradient">
                    <a href={selectedCertificate.verificationUrl || selectedCertificate.image} target="_blank" rel="noopener noreferrer">
                      {selectedCertificate.verificationUrl ? 'Verify Certificate' : 'View Full Certificate'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Certificates;
