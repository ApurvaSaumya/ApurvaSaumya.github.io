function SignalNode({ children, className = '' }) {
  return (
    <div
      className={`relative border-l-2 border-teal-trace/30 pl-8 md:pl-12 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-amber-signal"
      />
      {children}
    </div>
  )
}

export default SignalNode
