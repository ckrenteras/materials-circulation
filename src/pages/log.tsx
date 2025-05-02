import { useState } from 'react';
import Link from 'next/link';

export default function LogPage() {
  const [form, setForm] = useState({
    name: '',
    action: 'donated',
    material: '',
    quantity: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      window.location.reload();
      setForm({ name: '', action: 'donated', material: '', quantity: '' });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Log Materials</h1>
      {submitted && <p className="text-green-600 mb-4">Thank you! Your entry was recorded.</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <select
          name="action"
          value={form.action}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="donated">Donated</option>
          <option value="checked-out">Checked Out</option>
        </select>
        <input
          type="text"
          name="material"
          placeholder="Material type"
          value={form.material}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity (e.g. 3x3 meters, 5 sheets)"
          value={form.quantity}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <Link href="/" className="block mt-6">
      <button className="px-4 py-2 bg-black-200 rounded hover:bg-black-300">
        ← Back
      </button>
    </Link>
    </div>
  );
}
