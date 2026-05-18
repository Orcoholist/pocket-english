"use client";

import { useEffect, useRef } from "react";

// Define types for VK object and its widgets
interface VKWidgetOptions {
  mode?: number;
  width?: number | string;
  height?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}

interface VKWidgets {
  Group: (containerId: string, options: VKWidgetOptions, groupId: number) => void;
  // Other widget methods could be added here as needed
}

interface VKObject {
  Widgets?: VKWidgets;
}

declare global {
  interface Window {
    VK: VKObject;
  }
}

export default function VkFeedWidget() {
  const initialized = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    function loadWidget() {
      try {
        const vk = window.VK;
        if (vk?.Widgets) {
          vk.Widgets.Group(
            "vk_groups",
            {
              mode: 4,
              width: 900,
              height: 750,
              color1: "#fafaf9",
              color2: "#0c0a09",
              color3: "#f97316",
            },
            225924998,
          );
        }
      } catch (e) {
        console.warn("VK Widget did not load:", e);
      }
    }

    if (window.VK?.Widgets) {
      loadWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://vk.com/js/api/openapi.js?169";
    script.async = true;
    script.onload = loadWidget;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative">
      {/* Gradient edges — hint that there's more to scroll */}
      <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-3xl" />
      <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-3xl" />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 scroll-smooth"
        style={
          {
            scrollbarWidth: "auto",
            scrollbarColor: "#f97316 #fef3c7",
          } as React.CSSProperties
        }
      >
        <style>{`
          .vk-scroll::-webkit-scrollbar {
            height: 12px;
          }
          .vk-scroll::-webkit-scrollbar-track {
            background: #fef3c7;
            border-radius: 6px;
          }
          .vk-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #fb923c, #f97316);
            border-radius: 6px;
            border: 2px solid #fef3c7;
          }
          .vk-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to right, #f97316, #ea580c);
          }
        `}</style>
        <div className="vk-scroll w-[900px] min-h-[580px]">
          <div id="vk_groups" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-3 mt-3 text-sm">
        <span className="w-8 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        <span className="flex items-center gap-1.5 text-brand-500 font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          листай
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span className="w-8 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </div>
    </div>
  );
}