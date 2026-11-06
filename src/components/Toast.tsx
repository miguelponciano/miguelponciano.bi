"use client";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 bg-wollo-dark text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-sm font-semibold animate-in fade-in slide-in-from-bottom-5">
      <span className="w-2.5 h-2.5 rounded-full bg-wollo-yellow" />
      <span>{message}</span>
    </div>
  );
}
