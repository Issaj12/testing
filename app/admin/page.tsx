"use client";

import { AdminEditor } from 'next-inline-editor';
import homeContent from '../../content/home.json';
import HomePage from '../../components/HomePage';

export default function AdminPage() {
  return (
    <AdminEditor
      initialContent={homeContent}
      contentFile="content/home.json"
      pageLabel="Home"
    >
      {(content) => <HomePage content={content} />}
    </AdminEditor>
  );
}
