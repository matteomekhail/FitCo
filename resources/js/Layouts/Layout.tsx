import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function AppLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head title={title} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}