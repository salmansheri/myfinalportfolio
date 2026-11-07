// A rubber stamp inked onto the form. Its colour follows the region (--stamp).
export function Stamp({ children, tilt = -3 }: { children: React.ReactNode; tilt?: number }) {
  return (
    <span
      className="stamp-grain inline-block rotate-(--tilt) rounded-[3px] border-2 border-current px-[0.45em] pt-[0.1em] pb-[0.05em] font-display text-base leading-[1.1] font-bold tracking-[0.08em] whitespace-nowrap text-(--stamp) uppercase"
      style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}

// The visible gap a missing fact leaves on the bill. `what` is read out to screen readers.
export function Awaiting({ what, tilt = -3 }: { what: string; tilt?: number }) {
  return (
    <Stamp tilt={tilt}>
      <span aria-hidden="true">Awaiting</span>
      <span className="sr-only">{what} not supplied yet</span>
    </Stamp>
  );
}

export function Field<T>({
  value,
  what,
  tilt,
  children,
}: {
  value: T | null;
  what: string;
  tilt?: number;
  children?: (value: T) => React.ReactNode;
}) {
  if (value === null || value === undefined || value === "") return <Awaiting what={what} tilt={tilt} />;
  return <>{children ? children(value) : String(value)}</>;
}

// A project's status, stamped: live, or still in progress
export function StatusStamp({ status, tilt = -3 }: { status: "Live" | "In progress" | null; tilt?: number }) {
  if (!status) return <Awaiting what="Status" tilt={tilt} />;
  return <Stamp tilt={tilt}>{status === "Live" ? "Live" : "In progress"}</Stamp>;
}
