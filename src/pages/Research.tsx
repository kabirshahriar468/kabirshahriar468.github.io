
import Navigation from '../components/Navigation';

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
    <div className="min-h-screen bg-neutral-950">
      <Navigation />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-white mb-3">Research</h1>
            <p className="text-base text-neutral-400 max-w-2xl mx-auto">
              Publications and ongoing work across computer vision,
              natural language processing, and applied machine learning.
            </p>
          </div>

          {/* ── Research Interests ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-5 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-neutral-500 rounded-full" />
              Research Interests
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {researchInterests.map((r, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 font-medium"
                >
                  {r.label}
                  {r.abbr && (
                    <span className="ml-1.5 text-neutral-500">({r.abbr})</span>
                  )}
                </span>
              ))}
            </div>
          </section>

          {/* ── Publications ── */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-neutral-500 rounded-full" />
              Publications
            </h2>

            <div className="space-y-6">
              {publications.map((pub, i) => (
                <article
                  key={i}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600 group"
                >
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white leading-snug mb-2">
                    {pub.title}
                  </h3>

                  {/* Venue + Status */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm text-neutral-400 font-medium">
                      {pub.venue}
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-sm text-neutral-500">{pub.year}</span>
                    <span
                      className={`ml-1 px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                        pub.status === 'Accepted'
                          ? 'bg-emerald-900/30 text-emerald-400 ring-1 ring-emerald-600/30'
                          : 'bg-neutral-800 text-neutral-400 ring-1 ring-neutral-700/40'
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>

                  {/* Venue detail */}
                  <p className="text-xs text-neutral-500 mb-3 italic">
                    {pub.venueNote}
                  </p>

                  {/* Abstract */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-neutral-800 text-neutral-500 text-xs rounded border border-neutral-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={pub.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      arXiv
                    </a>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Research;
