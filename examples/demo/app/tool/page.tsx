'use client';

import { useState } from 'react';
import {
  Badge,
  Button,
  Input,
  Select,
  Textarea,
  Stats,
  SectionHeader,
} from '@vistawtf/ui';

const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Agents', active: false },
  { label: 'Models', active: false },
  { label: 'Logs', active: false },
  { label: 'Settings', active: false },
];

const tableData = [
  { id: 'ag-001', name: 'Customer Support Bot', model: 'Claude 3.5', status: 'active', requests: '12,430', latency: '42ms' },
  { id: 'ag-002', name: 'Code Review Agent', model: 'GPT-4o', status: 'active', requests: '8,291', latency: '156ms' },
  { id: 'ag-003', name: 'Data Pipeline Monitor', model: 'Gemini Pro', status: 'paused', requests: '3,102', latency: '89ms' },
  { id: 'ag-004', name: 'Content Writer', model: 'Claude 3.5', status: 'active', requests: '5,670', latency: '203ms' },
  { id: 'ag-005', name: 'Anomaly Detector', model: 'Mistral Large', status: 'error', requests: '921', latency: '—' },
];

const statusColor: Record<string, 'accent' | 'default' | 'outline'> = {
  active: 'accent',
  paused: 'default',
  error: 'outline',
};

export default function ToolPage() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--surface)] flex flex-col shrink-0">
        <div className="p-6 border-b border-[var(--border)]">
          <span className="text-[1.125rem] font-medium text-[var(--foreground)]">Aura</span>
          <span className="ml-2 text-[0.75rem] text-[var(--muted)]">Dashboard</span>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full text-left px-3 py-2 rounded-[4px] text-[0.875rem] transition-colors duration-200 cursor-pointer ${
                    activeNav === item.label
                      ? 'bg-[var(--surface-hover)] text-[var(--foreground)] font-medium'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-[var(--border)]">
          <div className="text-[0.75rem] text-[var(--muted)]">Free tier</div>
          <div className="text-[0.875rem] text-[var(--foreground)]">8,412 / 10,000 requests</div>
          <div className="mt-2 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--ultra-orange)] rounded-full" style={{ width: '84%' }} />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-[var(--border)] px-8 py-4 flex items-center justify-between">
          <h1 className="vista-text-h1 text-[var(--foreground)]">Dashboard</h1>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm">Export</Button>
            <Button variant="primary" size="sm">New Agent</Button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="p-5 border border-[var(--border)] rounded-[10px]">
              <div className="text-[0.75rem] text-[var(--muted)] mb-1">Total Requests (24h)</div>
              <div className="text-[1.75rem] font-medium text-[var(--foreground)] tabular-nums">30,414</div>
            </div>
            <div className="p-5 border border-[var(--border)] rounded-[10px]">
              <div className="text-[0.75rem] text-[var(--muted)] mb-1">Active Agents</div>
              <div className="text-[1.75rem] font-medium text-[var(--foreground)] tabular-nums">3</div>
            </div>
            <div className="p-5 border border-[var(--border)] rounded-[10px]">
              <div className="text-[0.75rem] text-[var(--muted)] mb-1">Avg Latency</div>
              <div className="text-[1.75rem] font-medium text-[var(--foreground)] tabular-nums">98ms</div>
            </div>
            <div className="p-5 border border-[var(--border)] rounded-[10px]">
              <div className="text-[0.75rem] text-[var(--muted)] mb-1">Error Rate</div>
              <div className="text-[1.75rem] font-medium text-[var(--foreground)] tabular-nums">0.3%</div>
            </div>
          </div>

          {/* Agents Table */}
          <SectionHeader number="01" label="Agents" />
          <div className="border border-[var(--border)] rounded-[10px] overflow-hidden mb-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">ID</th>
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">Name</th>
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">Model</th>
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">Status</th>
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">Requests</th>
                  <th className="px-4 py-3 text-[0.75rem] font-medium text-[var(--muted)] uppercase tracking-[0.05em]">Latency</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface-hover)] transition-colors">
                    <td className="px-4 py-3 text-[0.8125rem] font-mono text-[var(--muted-light)]">{row.id}</td>
                    <td className="px-4 py-3 text-[0.875rem] text-[var(--foreground)] font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-[0.8125rem] text-[var(--muted)]">{row.model}</td>
                    <td className="px-4 py-3">
                      <Badge variant={statusColor[row.status]} size="sm">{row.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-[0.8125rem] text-[var(--foreground)] tabular-nums">{row.requests}</td>
                    <td className="px-4 py-3 text-[0.8125rem] text-[var(--muted)] tabular-nums">{row.latency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Create Agent Form */}
          <SectionHeader number="02" label="Create Agent" />
          <div className="max-w-[480px] space-y-5 mb-10">
            <Input
              label="Agent Name"
              placeholder="e.g. Customer Support Bot"
            />
            <Select
              label="Model"
              placeholder="Select a model"
              options={[
                { value: 'claude-3.5', label: 'Claude 3.5 Sonnet' },
                { value: 'gpt-4o', label: 'GPT-4o' },
                { value: 'gemini-pro', label: 'Gemini Pro' },
                { value: 'mistral-large', label: 'Mistral Large' },
              ]}
            />
            <Textarea
              label="System Prompt"
              placeholder="Describe what this agent should do..."
              rows={4}
              hint="Markdown supported. Keep it under 2000 tokens."
            />
            <Input
              label="Max Tokens"
              type="number"
              placeholder="4096"
              size="sm"
            />
            <div className="flex gap-3 pt-2">
              <Button variant="primary">Create Agent</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
