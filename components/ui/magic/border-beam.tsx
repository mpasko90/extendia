export const BorderBeam = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 justify-center">
        <div className="h-[40rem] w-[90rem] origin-top-left -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-green-600 to-green-800 blur-3xl opacity-30" />
      </div>
    </div>
  );
};
