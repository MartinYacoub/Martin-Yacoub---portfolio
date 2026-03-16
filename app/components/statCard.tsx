type Props = {
  number: string;
  label: string;
};

export default function StatCard({ number, label }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        {number}
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}
