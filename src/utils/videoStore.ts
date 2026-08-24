import { useState, useEffect } from 'react';

export interface VideoSettings {
  videoType: 'youtube' | 'file';
  youtubeUrl: string;
  fileUrl: string;
  fileName?: string;
  title: string;
  subtitle: string;
  enabled: boolean;
}

const VIDEO_STORAGE_KEY = 'thrine_hero_video_settings_v2';
const VIDEO_EVENT_NAME = 'thrine_hero_video_updated';

export const defaultVideoSettings: VideoSettings = {
  videoType: 'youtube',
  youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  fileUrl: '',
  fileName: '',
  title: 'How Thrine Engineers Custom Business Systems',
  subtitle: "Watch this video breakdown before booking your consultation call. It shows the exact system architecture we build for your business.",
  enabled: true,
};

// Helper function to extract YouTube Embed URL from any format (URL, Share link, Embed, or Video ID)
export const getYouTubeEmbedUrl = (input: string): string => {
  if (!input) return 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  // If already an embed URL
  if (input.includes('youtube.com/embed/')) {
    const cleanEmbed = input.split('?')[0];
    return `${cleanEmbed}?autoplay=1&rel=0`;
  }

  // Handle standard YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = input.match(/[?&]v=([^&]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
  }

  // Handle short URL: https://youtu.be/VIDEO_ID
  const shortMatch = input.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`;
  }

  // Handle raw Video ID
  if (input.length === 11 && !input.includes('/')) {
    return `https://www.youtube.com/embed/${input}?autoplay=1&rel=0`;
  }

  return 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';
};

// Helper to get stored or default video settings
export const getVideoSettings = (): VideoSettings => {
  try {
    const stored = localStorage.getItem(VIDEO_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed) {
        return { ...defaultVideoSettings, ...parsed };
      }
    }
  } catch (e) {
    console.error('Failed to read video settings from localStorage', e);
  }
  return defaultVideoSettings;
};

// Helper to save video settings
export const saveVideoSettings = (settings: VideoSettings) => {
  try {
    localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new Event(VIDEO_EVENT_NAME));
  } catch (e) {
    console.error('Failed to save video settings', e);
  }
};

// Custom Hook to reactively use and update video settings
export const useVideoStore = () => {
  const [videoSettings, setVideoSettings] = useState<VideoSettings>(getVideoSettings);

  useEffect(() => {
    const handleUpdate = () => {
      setVideoSettings(getVideoSettings());
    };

    window.addEventListener(VIDEO_EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(VIDEO_EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const updateVideoSettings = (newSettings: Partial<VideoSettings>) => {
    const updated = { ...videoSettings, ...newSettings };
    saveVideoSettings(updated);
    setVideoSettings(updated);
  };

  return {
    videoSettings,
    updateVideoSettings,
    getEmbedUrl: () => getYouTubeEmbedUrl(videoSettings.youtubeUrl),
  };
};
