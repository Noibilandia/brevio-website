export function AiIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Chip */}
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 7V5" />
      <path d="M12 7V5" />
      <path d="M15 7V5" />
      <path d="M9 19v-2" />
      <path d="M12 19v-2" />
      <path d="M15 19v-2" />
      <path d="M7 9H5" />
      <path d="M7 12H5" />
      <path d="M7 15H5" />
      <path d="M19 9h-2" />
      <path d="M19 12h-2" />
      <path d="M19 15h-2" />

      {/* "AI" mark */}
      <path d="M9.5 16 11 11l1.5 5" />
      <path d="M10.1 14h1.8" />
      <path d="M14.6 11v5" />
    </svg>
  );
}
