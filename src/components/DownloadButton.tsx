export default function DownloadButton() {
  const handleDownload = () => {
    // Track download if analytics is set up
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        event_category: 'Resume',
        event_label: 'PDF Download',
      });
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = '/Resume-Arumugam-Panchatcharam.pdf';
    link.download = 'Resume-Arumugam-Panchatcharam.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn-primary group"
      aria-label="Download resume PDF"
    >
      <svg
        className="w-5 h-5 mr-2 group-hover:animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Resume
    </button>
  );
}
