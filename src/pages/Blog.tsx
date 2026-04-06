import { ExternalLink } from 'lucide-react';
import SiteLayout from '../components/SiteLayout';

const posts = [
  {
    title: 'DualSwinFusionSeg: Multimodal Martian Landslide Segmentation',
    summary:
      'A multimodal segmentation architecture using parallel Swin Transformer encoders and UNet++ decoding for high-accuracy landslide detection on Mars datasets.',
    tags: ['Computer Vision', 'Segmentation', 'Transformers'],
    readTime: '12 minute read',
    link: 'https://arxiv.org/abs/2603.14132',
  },
  {
    title: 'SpectraSentinel: Real-Time Drone Detection and Payload Identification',
    summary:
      'A dual-stream RGB and IR detection system for robust drone monitoring under difficult visual conditions including low light and motion blur.',
    tags: ['Object Detection', 'Multi-modal', 'YOLO'],
    readTime: '10 minute read',
    link: 'https://arxiv.org/abs/2507.22650',
  },
  {
    title: 'Bengali-Loop: Benchmarks for Long-Form Bangla ASR and Diarization',
    summary:
      'Community benchmark datasets and baseline measurements for long-form Bangla speech recognition and speaker diarization tasks.',
    tags: ['ASR', 'NLP', 'Speech'],
    readTime: '11 minute read',
    link: 'https://arxiv.org/abs/2602.14291',
  },
];

const Research = () => {
  return (
    <SiteLayout
      command="research"
      heading="Research"
      description="Publications and research-focused technical work across computer vision, multimodal systems, and Bangla language technologies."
    >
      <p className="text-lg font-semibold text-slate-400">$ cat ~/research/publications.json</p>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="terminal-card">
            <div className="flex flex-wrap items-center gap-3">
              <span className="terminal-chip">{post.readTime}</span>
              {post.tags.map((tag) => (
                <span key={tag} className="terminal-chip">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mt-4 text-xl font-bold text-cyan-200">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{post.summary}</p>

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-link mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Read publication
              <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Research;
