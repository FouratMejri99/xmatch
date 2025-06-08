export default function LanguageSelect({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-gray-800 text-white p-2 rounded"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      {/* Add more languages as needed */}
    </select>
  );
}
