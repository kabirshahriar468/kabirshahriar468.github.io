
import { ExternalLink, FileText } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';

const Research = () => {
  const researchInterests = [
    { label: 'Natural Language Processing', abbr: 'NLP' },
    { label: 'Computer Vision', abbr: 'CV' },
    { label: 'Machine Learning', abbr: 'ML' },
    { label: 'Artificial Intelligence', abbr: 'AI' },
    { label: 'AI for Health', abbr: null },
    { label: 'Large Language Models', abbr: 'LLM' },
  ];

  const publications = [
    {
      title:
        'DualSwinFusionSeg: Multimodal Martian Landslide Segmentation via Dual Swin Transformer with Multi-Scale Fusion and UNet++',
      authors: null,
      venue: 'PBVS @ CVPR 2026',
      venueNote: 'Perception Beyond the Visible Spectrum Workshop, IEEE/CVF CVPR',
      year: '2026',
      status: 'Accepted',
      abstract:
        'Proposes a multimodal segmentation architecture for Martian landslide detection that employs two parallel Swin Transformer V2 encoders on RGB and geophysical inputs with UNet++ decoding. Achieves 0.867 mIoU and 0.905 F1 on the MMLSv2 benchmark.',
      tags: ['Computer Vision', 'Remote Sensing', 'Segmentation', 'Transformers'],
      arxiv: 'https://arxiv.org/abs/2603.14132',
      pdf: 'https://arxiv.org/pdf/2603.14132',
    },
    {
      title:
        'SpectraSentinel: Lightweight Dual-Stream Real-Time Drone Detection, Tracking and Payload Identification',
      authors: null,
      venue: 'IEEE VIP Cup 2025',
      venueNote: 'IEEE Signal Processing Society Video & Image Processing Cup',
      year: '2025',
      status: 'Preprint',
      abstract:
        'A dual-stream drone monitoring framework deploying independent YOLOv11n detectors on parallel IR and RGB streams for real-time drone detection, tracking, and payload identification. Maintains high accuracy across noise, low-light, and motion-blur conditions.',
      tags: ['Object Detection', 'Tracking', 'Multi-modal', 'YOLO'],
      arxiv: 'https://arxiv.org/abs/2507.22650',
      pdf: 'https://arxiv.org/pdf/2507.22650',
    },
    {
      title:
        'Bengali-Loop: Community Benchmarks for Long-Form Bangla ASR and Speaker Diarization',
      authors: null,
      venue: 'arXiv Preprint',
      venueNote: 'Community benchmark for Bangla speech technology',
      year: '2026',
      status: 'Preprint',
      abstract:
        'Presents two community benchmarks: a long-form ASR corpus (158.6 hours, 792k words from 11 YouTube channels) and a speaker diarization corpus (22 hours, 5,744 annotated segments). Establishes baselines with Tugstugi (34.07% WER) and pyannote.audio (40.08% DER).',
      tags: ['ASR', 'NLP', 'Speaker Diarization', 'Bangla'],
      arxiv: 'https://arxiv.org/abs/2602.14291',
      pdf: 'https://arxiv.org/pdf/2602.14291',
    },
  ];

  return (
    <SiteLayout
      command="research"
      heading="Research"
      description="Publications and ongoing work in computer vision, NLP, and applied machine learning."
    >
      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat /etc/research-interests</p>
        <div className="terminal-card flex flex-wrap gap-2.5">
          {researchInterests.map((interest) => (
            <span key={interest.label} className="terminal-chip">
              {interest.label}
              {interest.abbr ? ` (${interest.abbr})` : ''}
            </span>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-4 text-lg font-semibold text-slate-400">$ cat ~/research/publications.json</p>
        <div className="space-y-4">
          {publications.map((pub) => (
            <article key={pub.title} className="terminal-card">
              <h2 className="text-lg font-bold text-cyan-200">{pub.title}</h2>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <span className="font-semibold text-emerald-300">{pub.venue}</span>
                <span>· {pub.year}</span>
                <span className="rounded-md border border-emerald-400/60 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-200">
                  {pub.status}
                </span>
              </div>

              <p className="mt-2 text-xs italic text-slate-400">{pub.venueNote}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{pub.abstract}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span key={tag} className="terminal-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4">
                <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="terminal-link inline-flex items-center gap-2 text-sm font-semibold">
                  <ExternalLink size={15} />
                  arXiv
                </a>
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="terminal-link inline-flex items-center gap-2 text-sm font-semibold">
                  <FileText size={15} />
                  PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Research;
