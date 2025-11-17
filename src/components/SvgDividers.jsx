export function WaveDivider({ flip = false, color = '#ffffff' }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function CurveDivider({ flip = false, color = '#ffffff' }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20"
      >
        <path
          d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function TiltDivider({ flip = false, color = '#ffffff' }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12"
      >
        <path d="M0,0 L1440,60 L1440,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}

export function AbstractDivider({ color = '#f9fafb' }) {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <path
          d="M0,40 C240,80 480,20 720,60 C960,100 1200,40 1440,60 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
