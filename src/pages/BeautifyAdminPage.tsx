import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, Key, CheckCircle2, Plus, Trash2, Upload, RefreshCw, Eye, EyeOff, AlertCircle, ArrowLeft, Video 
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { useHowItWorksStore } from '../utils/howItWorksStore';
import { useVideoStore } from '../utils/videoStore';
import { WorkflowStep } from '../data/howItWorksData';

export const BeautifyAdminPage: React.FC = () => {
  const { data, updateStep, addStep, deleteStep, resetData } = useHowItWorksStore();
  const { videoSettings, updateVideoSettings } = useVideoStore();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');

  // Admin View State
  const [selectedProject, setSelectedProject] = useState<'bakery' | 'travel'>('bakery');
  const [activeSide, setActiveSide] = useState<'customer' | 'admin'>('admin');
  const [editingStepId, setEditingStepId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Required Password from ENV or fallback
  const REQUIRED_PASSWORD = import.meta.env.VITE_BEAUTIFY_PASSWORD || 'Imamfaiz02@';

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('beautify_authenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === REQUIRED_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('beautify_authenticated', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect admin password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('beautify_authenticated');
    setPasswordInput('');
  };

  const currentProjectData = data[selectedProject];
  const currentFlow = activeSide === 'customer' ? currentProjectData.customerFlow : currentProjectData.adminFlow;

  const triggerSuccessNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleImageFileUpload = (stepId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      updateStep(selectedProject, activeSide, stepId, { mockupId: dataUrl });
      triggerSuccessNotification('Image updated successfully!');
    };
    reader.readAsDataURL(file);
  };

  const handleAddNewStep = () => {
    const currentSteps = currentFlow.steps;
    const nextNumber = String(currentSteps.length + 1).padStart(2, '0');
    const newStepId = `${selectedProject.charAt(0)}-${activeSide.charAt(0)}-${Date.now()}`;

    const newStep: WorkflowStep = {
      id: newStepId,
      stepNumber: nextNumber,
      title: `New ${selectedProject === 'bakery' ? 'Bakery' : 'Travel'} Step ${nextNumber}`,
      shortLabel: `Step ${nextNumber}`,
      description: 'Enter a detailed description of this custom step workflow.',
      statusTag: 'Live',
      metadata: [
        { label: 'Feature', value: 'Custom Module' },
        { label: 'Status', value: 'Active' }
      ],
      mockupId: '/images/mockups/step1_overview.png'
    };

    addStep(selectedProject, activeSide, newStep);
    setEditingStepId(newStepId);
    triggerSuccessNotification('Added successfully!');
  };

  const handleAddMetadataItem = (step: WorkflowStep) => {
    const existing = step.metadata || [];
    const updatedMetadata = [...existing, { label: 'New Label', value: 'New Value' }];
    updateStep(selectedProject, activeSide, step.id, { metadata: updatedMetadata });
  };

  const handleUpdateMetadataItem = (
    step: WorkflowStep,
    idx: number,
    field: 'label' | 'value',
    val: string
  ) => {
    const existing = [...(step.metadata || [])];
    if (existing[idx]) {
      existing[idx] = { ...existing[idx], [field]: val };
      updateStep(selectedProject, activeSide, step.id, { metadata: existing });
    }
  };

  const handleDeleteMetadataItem = (step: WorkflowStep, idx: number) => {
    const existing = [...(step.metadata || [])];
    existing.splice(idx, 1);
    updateStep(selectedProject, activeSide, step.id, { metadata: existing });
  };

  // =========================================================================
  // 🔒 PASSWORD LOCK SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-paper text-editorial flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-studio-surface border border-studio-border rounded-sm p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Top Security Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-terracotta"></div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-paper border border-studio-border flex items-center justify-center mx-auto text-terracotta shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold block">
                PROTECTED SYSTEM ROUTE
              </span>
              <h1 className="text-2xl font-extrabold text-editorial font-sans tracking-tight">
                Beautify Admin Panel
              </h1>
              <p className="text-xs text-editorial-muted">
                Enter your administrative password to edit walkthrough images, titles, and workflow options live.
              </p>
            </div>

            {authError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-sm text-red-600 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 font-mono text-xs">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-editorial-muted block font-semibold">
                  Admin Access Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full bg-paper border border-studio-border rounded-sm px-3 py-2 text-editorial focus:border-terracotta focus:outline-none pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-editorial-muted hover:text-editorial"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-dark text-paper font-bold py-2.5 rounded-sm hover:bg-terracotta transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Key className="w-4 h-4 text-terracotta" />
                <span>Unlock Beautify Admin</span>
              </button>
            </form>

            <div className="text-center pt-2 border-t border-studio-border font-mono text-[11px]">
              <Link to="/work" className="text-editorial-muted hover:text-editorial flex items-center justify-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 🔓 AUTHENTICATED BEAUTIFY ADMIN PANEL WORKSPACE
  // =========================================================================
  return (
    <div className="py-8 bg-paper text-editorial min-h-screen">
      <Container>
        {/* Top Header Bar */}
        <div className="bg-studio-surface border border-studio-border/80 rounded-3xl p-5 sm:p-7 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                BEAUTIFY ENGINE • ADMIN ACCESS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-editorial font-sans tracking-tight">
              Walkthrough UI & Image Manager
            </h1>
            <p className="text-xs text-editorial-muted">
              Update screenshots, step names, descriptions, or add new options live for Bakery and Travel & Hault.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                triggerSuccessNotification('Updated successfully!');
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Update / Add</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Reset all walkthrough steps back to factory default values?')) {
                  resetData();
                  triggerSuccessNotification('Reset all data to default!');
                }
              }}
              className="px-3.5 py-2 bg-paper border border-studio-border rounded-full text-xs font-mono text-editorial-muted hover:text-editorial flex items-center gap-1.5 transition-all"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-2 bg-dark text-paper rounded-full text-xs font-mono font-bold hover:bg-terracotta transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3 h-3 text-terracotta" />
              <span>Lock Admin</span>
            </button>
          </div>
        </div>

        {/* Floating Toast Notification Popup */}
        {successMessage && (
          <div className="fixed top-24 right-6 z-50 p-4 bg-dark text-paper border border-emerald-500/50 rounded-2xl shadow-2xl flex items-center gap-3 font-mono text-xs max-w-sm animate-bounce-short">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-emerald-400 uppercase text-[10px] tracking-widest">Notification</div>
              <div className="text-paper font-bold text-xs">{successMessage}</div>
            </div>
          </div>
        )}

        {/* 🎬 HOMEPAGE HERO YOUTUBE VIDEO MANAGER */}
        <div className="bg-studio-surface border border-studio-border p-5 rounded-2xl mb-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-studio-border pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-600/10 border border-red-500/30 rounded-lg text-red-600">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-editorial font-sans">
                  Homepage YouTube System Video Manager
                </h2>
                <p className="text-xs text-editorial-muted">
                  Update the embedded YouTube video URL, title, or visibility for the section right below the Hero.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={videoSettings.enabled}
                  onChange={(e) => {
                    updateVideoSettings({ enabled: e.target.checked });
                    triggerSuccessNotification(e.target.checked ? 'Video section enabled!' : 'Video section hidden!');
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-paper peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
              <span className="text-xs font-mono font-bold text-editorial">
                {videoSettings.enabled ? 'Enabled' : 'Hidden'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* YouTube URL Input */}
            <div className="md:col-span-6 space-y-1.5 font-mono text-xs">
              <label className="font-bold text-editorial text-[11px] block">
                YOUTUBE VIDEO URL / SHARE LINK / EMBED ID:
              </label>
              <input
                type="text"
                value={videoSettings.youtubeUrl}
                onChange={(e) => updateVideoSettings({ youtubeUrl: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="w-full p-2.5 bg-paper border border-studio-border rounded-sm font-mono text-xs text-editorial focus:border-red-600 focus:outline-none"
              />
              <span className="text-[10px] text-editorial-muted block">
                Paste any YouTube link (standard watch link, short link, or embed URL).
              </span>
            </div>

            {/* Video Section Title */}
            <div className="md:col-span-6 space-y-1.5 font-mono text-xs">
              <label className="font-bold text-editorial text-[11px] block">
                SECTION TITLE:
              </label>
              <input
                type="text"
                value={videoSettings.title}
                onChange={(e) => updateVideoSettings({ title: e.target.value })}
                placeholder="How Thrine Engineers Custom Business Systems"
                className="w-full p-2.5 bg-paper border border-studio-border rounded-sm font-mono text-xs text-editorial focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Video Subtitle */}
            <div className="md:col-span-12 space-y-1.5 font-mono text-xs">
              <label className="font-bold text-editorial text-[11px] block">
                SECTION SUBTITLE / CAPTION:
              </label>
              <input
                type="text"
                value={videoSettings.subtitle}
                onChange={(e) => updateVideoSettings({ subtitle: e.target.value })}
                placeholder="Watch this video breakdown before booking your consultation call."
                className="w-full p-2.5 bg-paper border border-studio-border rounded-sm font-mono text-xs text-editorial focus:border-red-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono">
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Live Sync Active — Updates save immediately to Homepage
            </span>
            <button
              type="button"
              onClick={() => {
                triggerSuccessNotification('YouTube video settings saved successfully!');
              }}
              className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-sm font-bold transition-colors cursor-pointer"
            >
              Save Video Settings
            </button>
          </div>
        </div>

        {/* Project & Side Switcher Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Project Switcher */}
          <div className="bg-studio-surface border border-studio-border p-3 rounded-2xl space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-bold block pl-1">
              1. SELECT CASE STUDY PROJECT
            </span>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
              <button
                type="button"
                onClick={() => setSelectedProject('bakery')}
                className={`py-2 px-3 rounded-full font-bold text-center border transition-all ${
                  selectedProject === 'bakery'
                    ? 'bg-dark text-paper border-dark shadow-sm'
                    : 'bg-paper text-editorial border-studio-border hover:border-editorial'
                }`}
              >
                🍰 Bakery (Homely Cakes)
              </button>
              <button
                type="button"
                onClick={() => setSelectedProject('travel')}
                className={`py-2 px-3 rounded-full font-bold text-center border transition-all ${
                  selectedProject === 'travel'
                    ? 'bg-dark text-paper border-dark shadow-sm'
                    : 'bg-paper text-editorial border-studio-border hover:border-editorial'
                }`}
              >
                🏔️ Travel (Travel & Hault)
              </button>
            </div>
          </div>

          {/* Workflow Side Switcher */}
          <div className="bg-studio-surface border border-studio-border p-3 rounded-2xl space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-bold block pl-1">
              2. SELECT WORKFLOW SIDE
            </span>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveSide('customer')}
                className={`py-2 px-3 rounded-full font-bold text-center border transition-all ${
                  activeSide === 'customer'
                    ? 'bg-terracotta text-paper border-terracotta shadow-sm'
                    : 'bg-paper text-editorial border-studio-border hover:border-editorial'
                }`}
              >
                👤 Customer View
              </button>
              <button
                type="button"
                onClick={() => setActiveSide('admin')}
                className={`py-2 px-3 rounded-full font-bold text-center border transition-all ${
                  activeSide === 'admin'
                    ? 'bg-terracotta text-paper border-terracotta shadow-sm'
                    : 'bg-paper text-editorial border-studio-border hover:border-editorial'
                }`}
              >
                💼 Business / Admin
              </button>
            </div>
          </div>
        </div>

        {/* Header Title Editor & Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-studio-surface border border-studio-border p-4 rounded-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block">
              ACTIVE WORKFLOW
            </span>
            <h2 className="text-lg font-bold text-editorial font-sans">
              {currentFlow.heading} ({currentFlow.steps.length} Steps)
            </h2>
          </div>

          <button
            type="button"
            onClick={handleAddNewStep}
            className="px-4 py-2 bg-terracotta text-paper font-mono font-bold text-xs rounded-sm hover:bg-dark transition-colors flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>➕ Add New Step / Option</span>
          </button>
        </div>

        {/* Steps List Grid */}
        <div className="space-y-6">
          {currentFlow.steps.map((step, index) => {
            const isEditing = editingStepId === step.id;

            return (
              <div
                key={step.id}
                className={`bg-studio-surface border rounded-sm p-6 space-y-6 transition-all ${
                  isEditing ? 'border-terracotta ring-1 ring-terracotta/30' : 'border-studio-border'
                }`}
              >
                {/* Step Bar Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-studio-border pb-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-terracotta">{step.stepNumber}</span>
                    <span className="font-bold text-editorial text-sm">{step.shortLabel}</span>
                    <Badge variant={step.statusTag === 'Live' ? 'brand' : 'outline'}>{step.statusTag}</Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    {isEditing && (
                      <button
                        type="button"
                        onClick={() => {
                          triggerSuccessNotification('Updated successfully!');
                          setEditingStepId(null);
                        }}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setEditingStepId(isEditing ? null : step.id)}
                      className="px-3 py-1 bg-paper border border-studio-border rounded-sm text-editorial hover:border-editorial font-bold"
                    >
                      {isEditing ? 'Close Editor' : '✏️ Edit Step'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Delete Step ${step.stepNumber} (${step.title})?`)) {
                          deleteStep(selectedProject, activeSide, step.id);
                          triggerSuccessNotification(`Deleted Step ${step.stepNumber}`);
                        }
                      }}
                      className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-sm hover:bg-red-500/20"
                      title="Delete Step"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Step Details & Live Image Uploader */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Form Controls */}
                  <div className="lg:col-span-7 space-y-4 font-mono text-xs">
                    
                    {/* Step Number & Short Label */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                          Step Number
                        </label>
                        <input
                          type="text"
                          value={step.stepNumber}
                          onChange={(e) => updateStep(selectedProject, activeSide, step.id, { stepNumber: e.target.value })}
                          className="w-full bg-paper border border-studio-border rounded-sm px-2.5 py-1.5 font-bold text-editorial focus:border-terracotta focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                          Short Tab Label
                        </label>
                        <input
                          type="text"
                          value={step.shortLabel}
                          onChange={(e) => updateStep(selectedProject, activeSide, step.id, { shortLabel: e.target.value })}
                          className="w-full bg-paper border border-studio-border rounded-sm px-2.5 py-1.5 font-bold text-editorial focus:border-terracotta focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Step Full Title */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                        Full Step Title
                      </label>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => updateStep(selectedProject, activeSide, step.id, { title: e.target.value })}
                        className="w-full bg-paper border border-studio-border rounded-sm px-2.5 py-1.5 font-bold text-editorial text-sm font-sans focus:border-terracotta focus:outline-none"
                      />
                    </div>

                    {/* Step Description */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                        Step Description Paragraph
                      </label>
                      <textarea
                        rows={3}
                        value={step.description}
                        onChange={(e) => updateStep(selectedProject, activeSide, step.id, { description: e.target.value })}
                        className="w-full bg-paper border border-studio-border rounded-sm p-2.5 text-editorial leading-relaxed focus:border-terracotta focus:outline-none font-sans text-xs"
                      />
                    </div>

                    {/* Status Tag Picker */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                        Status Tag
                      </label>
                      <select
                        value={step.statusTag}
                        onChange={(e) => updateStep(selectedProject, activeSide, step.id, { statusTag: e.target.value as any })}
                        className="w-full bg-paper border border-studio-border rounded-sm px-2.5 py-1.5 text-editorial focus:border-terracotta focus:outline-none"
                      >
                        <option value="Live">Live</option>
                        <option value="Implemented">Implemented</option>
                        <option value="System Workflow">System Workflow</option>
                      </select>
                    </div>

                    {/* Metadata Items List Editor */}
                    <div className="pt-3 border-t border-studio-border space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase text-terracotta font-bold">
                          Step Key-Value Metadata Pairs
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddMetadataItem(step)}
                          className="text-[10px] text-editorial font-bold underline hover:text-terracotta"
                        >
                          + Add Metadata Pair
                        </button>
                      </div>

                      {step.metadata && step.metadata.length > 0 ? (
                        <div className="space-y-2">
                          {step.metadata.map((meta, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2">
                              <input
                                type="text"
                                value={meta.label}
                                onChange={(e) => handleUpdateMetadataItem(step, mIdx, 'label', e.target.value)}
                                placeholder="Label"
                                className="w-1/3 bg-paper border border-studio-border rounded-sm px-2 py-1 text-[11px] focus:border-terracotta"
                              />
                              <input
                                type="text"
                                value={meta.value}
                                onChange={(e) => handleUpdateMetadataItem(step, mIdx, 'value', e.target.value)}
                                placeholder="Value"
                                className="w-2/3 bg-paper border border-studio-border rounded-sm px-2 py-1 text-[11px] font-bold focus:border-terracotta"
                              />
                              <button
                                type="button"
                                onClick={() => handleDeleteMetadataItem(step, mIdx)}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-[11px] text-editorial-muted italic">No metadata items attached.</div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Screenshot Image Uploader & Live Preview */}
                  <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-terracotta block font-bold">
                        Screenshot Image Source
                      </label>
                      <input
                        type="text"
                        value={step.mockupId}
                        onChange={(e) => updateStep(selectedProject, activeSide, step.id, { mockupId: e.target.value })}
                        placeholder="Image URL or Preset Mockup ID..."
                        className="w-full bg-paper border border-studio-border rounded-sm px-2.5 py-1.5 text-editorial focus:border-terracotta focus:outline-none text-[11px]"
                      />
                    </div>

                    {/* Direct File Upload Button */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-editorial-muted block font-semibold">
                        Upload New Image File directly
                      </label>
                      <label className="w-full bg-paper border border-dashed border-studio-border hover:border-terracotta rounded-sm py-3 px-4 flex items-center justify-center gap-2 cursor-pointer transition-colors text-editorial">
                        <Upload className="w-4 h-4 text-terracotta" />
                        <span className="font-bold text-[11px]">Choose File from Device...</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageFileUpload(step.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Live Preview Box */}
                    <div className="space-y-1 pt-2">
                      <span className="text-[10px] uppercase text-editorial-muted block font-semibold">
                        Current Image Preview:
                      </span>
                      <div className="border border-studio-border rounded-sm p-2 bg-paper max-h-56 overflow-hidden flex items-center justify-center">
                        <img
                          src={
                            step.mockupId.startsWith('/') || step.mockupId.startsWith('data:') || step.mockupId.startsWith('http')
                              ? step.mockupId
                              : `/images/mockups/step${index + 1}_overview.png`
                          }
                          alt={step.title}
                          className="max-h-48 w-auto object-contain rounded-sm shadow-sm"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Add Step Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleAddNewStep}
            className="px-6 py-3 bg-dark text-paper font-mono font-bold text-xs rounded-sm hover:bg-terracotta transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <Plus className="w-4 h-4 text-terracotta" />
            <span>➕ Add New Step / Option to {selectedProject === 'bakery' ? 'Bakery' : 'Travel'} ({activeSide})</span>
          </button>
        </div>

      </Container>
    </div>
  );
};
