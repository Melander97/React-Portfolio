export default function Footer() {
  return (
    <footer className="bg-gray-950 py-6 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Alexander Melander</p>
        <p>Built with React, Vite, and Tailwind</p>
      </div>
    </footer>
  );
}
