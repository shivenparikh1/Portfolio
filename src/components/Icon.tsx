export type IconName = "arrow" | "download" | "external" | "mail";

interface IconProps {
  name: IconName;
}

export function Icon({ name }: IconProps) {
  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5h5v5" />
        <path d="m10 14 9-9" />
        <path d="M19 13v6H5V5h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
