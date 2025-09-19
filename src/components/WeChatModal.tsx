"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  wechatId: string;
}

export function WeChatModal({ isOpen, onClose, wechatId }: WeChatModalProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // 阻止背景滚动
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 清理函数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 overflow-y-auto" style={{ zIndex: 999999 }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
        style={{ zIndex: 999998 }}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4" style={{ zIndex: 999999 }}>
        {/* Modal */}
        <div className="relative bg-amber-50 border-2 border-amber-200 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden" style={{ zIndex: 1000000 }}>
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 px-6 py-4 border-b border-amber-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.099 4.203 2.895 5.594.15.118.25.3.265.5l.055 1.617c.014.426.367.747.795.747.156 0 .312-.053.442-.159l1.543-1.257c.1-.082.226-.128.358-.128.059 0 .117.008.176.023.508.129 1.042.195 1.592.195.22 0 .441-.008.661-.025-.09-.375-.137-.766-.137-1.167 0-4.054 3.891-7.342 8.691-7.342.441 0 .874.024 1.297.071-.708-2.179-3.152-3.771-6.043-3.771zM6.592 7.070c.66 0 1.195.535 1.195 1.195 0 .66-.535 1.195-1.195 1.195-.66 0-1.195-.535-1.195-1.195 0-.66.535-1.195 1.195-1.195zm4.198 0c.66 0 1.195.535 1.195 1.195 0 .66-.535 1.195-1.195 1.195-.66 0-1.195-.535-1.195-1.195 0-.66.535-1.195 1.195-1.195zM24 14.798c0-3.606-3.482-6.531-7.764-6.531s-7.764 2.925-7.764 6.531c0 3.606 3.482 6.531 7.764 6.531.508 0 1.009-.055 1.488-.156.059-.015.117-.023.176-.023.132 0 .258.046.358.128l1.543 1.257c.13.106.286.159.442.159.428 0 .781-.321.795-.747l.055-1.617c.015-.2.115-.382.265-.5C22.901 19.001 24 17.01 24 14.798zM14.592 13.070c-.66 0-1.195.535-1.195 1.195 0 .66.535 1.195 1.195 1.195.66 0 1.195-.535 1.195-1.195 0-.66-.535-1.195-1.195-1.195zm4.198 0c-.66 0-1.195.535-1.195 1.195 0 .66.535 1.195 1.195 1.195.66 0 1.195-.535 1.195-1.195 0-.66-.535-1.195-1.195-1.195z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-900">WeChat</h3>
            </div>
            <button
              onClick={onClose}
              className="text-amber-600 hover:text-amber-800 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          {/* QR Code */}
          <div className="w-48 h-48 mx-auto mb-6 bg-white border-2 border-amber-200 rounded-xl overflow-hidden shadow-inner">
            <Image 
              src="/wechat-qr.jpg" 
              alt="WeChat QR Code"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>

          {/* WeChat ID */}
          <div className="bg-amber-100/50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-amber-700 mb-2 font-medium">WeChat ID</p>
            <div className="flex items-center justify-between bg-white border border-amber-200 rounded-lg px-3 py-2">
              <span className="font-mono text-amber-900 font-semibold">{wechatId}</span>
              <button
                onClick={copyToClipboard}
                className="ml-2 px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-800 text-xs font-medium rounded-md transition-colors flex items-center space-x-1"
              >
                {copied ? (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-xs text-amber-600 space-y-1">
            <p>• Scan the QR code with WeChat</p>
            <p>• Or search for my WeChat ID</p>
            <p>• Feel free to say hello! 👋</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 px-6 py-3 border-t border-amber-200">
          <button
            onClick={onClose}
            className="w-full py-2 bg-amber-800 hover:bg-amber-900 text-amber-50 font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
        </div>
      </div>
    </div>,
    document.body
  );
}