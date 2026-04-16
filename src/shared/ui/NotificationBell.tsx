"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export type NotificationType = "bid" | "overdue" | "award" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  packageId?: string;
  packageName?: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationBellProps {
  notifications: Notification[];
  onNotificationClick?: (notification: Notification) => void;
  onMarkAllRead?: () => void;
}

const Icons = {
  bell: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
};

const typeConfig: Record<NotificationType, { emoji: string; color: string; bg: string }> = {
  bid:     { emoji: "📥", color: "var(--status-bidding)",   bg: "var(--status-bidding-bg)" },
  overdue: { emoji: "⚠️", color: "var(--status-overdue)",   bg: "var(--status-overdue-bg)" },
  award:   { emoji: "✅", color: "var(--status-awarded)",   bg: "var(--status-awarded-bg)" },
  system:  { emoji: "🔔", color: "var(--text-muted)",       bg: "var(--bg)" },
};

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

function isToday(date: Date): boolean {
  const now = new Date();
  return date.toDateString() === now.toDateString();
}

export function NotificationBell({
  notifications,
  onNotificationClick,
  onMarkAllRead,
}: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Group notifications
  const todayNotifications = notifications.filter((n) => isToday(n.timestamp));
  const earlierNotifications = notifications.filter((n) => !isToday(n.timestamp));

  const renderNotification = (notification: Notification) => {
    const config = typeConfig[notification.type];
    return (
      <button
        key={notification.id}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          background: notification.read ? 'transparent' : 'rgba(37, 99, 235, 0.03)',
          border: 'none',
          borderBottom: '1px solid var(--border)',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.12s',
          fontFamily: 'var(--font)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = notification.read ? 'transparent' : 'rgba(37, 99, 235, 0.03)')}
        onClick={() => {
          onNotificationClick?.(notification);
          setIsOpen(false);
        }}
      >
        <span style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: config.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          flexShrink: 0,
        }}>
          {config.emoji}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '13px',
            fontWeight: notification.read ? 500 : 600,
            color: 'var(--text)',
            marginBottom: '2px',
          }}>
            {notification.title}
          </div>
          <div style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            lineHeight: 1.4,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {notification.message}
          </div>
          <div style={{
            fontSize: '11px',
            color: 'var(--text-light)',
            marginTop: '4px',
            fontFamily: 'var(--mono)',
          }}>
            {formatTimeAgo(notification.timestamp)}
          </div>
        </div>
        {!notification.read && (
          <span style={{
            width: '7px',
            height: '7px',
            background: 'var(--status-bidding)',
            borderRadius: '50%',
            flexShrink: 0,
            marginTop: '6px',
          }} />
        )}
      </button>
    );
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        style={{
          position: 'relative',
          padding: '8px',
          borderRadius: '8px',
          transition: 'all 0.15s',
          color: isOpen ? 'white' : 'rgba(255,255,255,0.5)',
          background: isOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
          border: '1px solid transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'white'; }}
        onMouseLeave={(e) => { if (!isOpen) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}}
        aria-label={`Notifications (${unreadCount} unread)`}
      >
        {Icons.bell}
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '16px',
            height: '16px',
            background: 'var(--status-overdue)',
            color: 'white',
            fontSize: '10px',
            fontWeight: 800,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--mono)',
          }}>
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          right: 0,
          top: 'calc(100% + 8px)',
          width: '360px',
          background: 'var(--card)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          zIndex: 1000,
          animation: 'slideInDown 0.2s ease',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            borderBottom: '1px solid var(--border)',
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
              Notifications
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllRead}
                style={{
                  fontSize: '12px',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font)',
                }}
              >
                Mark all read
              </button>
            )}
          </div>

          {/* Notifications grouped */}
          <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
            {notifications.length === 0 ? (
              <div style={{
                padding: '40px 16px',
                textAlign: 'center',
                color: 'var(--text-muted)',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px', opacity: 0.5 }}>🔔</div>
                <div style={{ fontSize: '13px', fontWeight: 600 }}>No notifications yet</div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>You&apos;re all caught up!</div>
              </div>
            ) : (
              <>
                {todayNotifications.length > 0 && (
                  <>
                    <div style={{
                      padding: '8px 16px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      background: 'var(--bg)',
                    }}>
                      Today
                    </div>
                    {todayNotifications.map(renderNotification)}
                  </>
                )}
                {earlierNotifications.length > 0 && (
                  <>
                    <div style={{
                      padding: '8px 16px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      background: 'var(--bg)',
                    }}>
                      Earlier
                    </div>
                    {earlierNotifications.map(renderNotification)}
                  </>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div style={{
              padding: '10px 16px',
              borderTop: '1px solid var(--border)',
              background: 'var(--bg)',
              textAlign: 'center',
            }}>
              <button style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                fontWeight: 600,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font)',
              }}>
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Hook with seed notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    // Seed with realistic notifications
    const now = new Date();
    return [
      {
        id: "seed-1",
        type: "bid" as NotificationType,
        title: "New bid received",
        message: "Peterson Contractors submitted a bid for Mobilization",
        packageName: "Mobilization",
        timestamp: new Date(now.getTime() - 15 * 60000), // 15 min ago
        read: false,
      },
      {
        id: "seed-2",
        type: "overdue" as NotificationType,
        title: "Package approaching deadline",
        message: "PortaPotty is due today — review required",
        packageName: "PortaPotty",
        timestamp: new Date(now.getTime() - 2 * 3600000), // 2 hours ago
        read: false,
      },
      {
        id: "seed-3",
        type: "award" as NotificationType,
        title: "Ready to award",
        message: "Mobilization has 2 bids and is ready for award decision",
        packageName: "Mobilization",
        timestamp: new Date(now.getTime() - 5 * 3600000), // 5 hours ago
        read: false,
      },
      {
        id: "seed-4",
        type: "system" as NotificationType,
        title: "Weekly report generated",
        message: "Your buyout summary for this week is ready to download",
        timestamp: new Date(now.getTime() - 86400000), // Yesterday
        read: true,
      },
      {
        id: "seed-5",
        type: "bid" as NotificationType,
        title: "Bid updated",
        message: "Sub Surface revised their bid amount for Mobilization",
        packageName: "Mobilization",
        timestamp: new Date(now.getTime() - 2 * 86400000), // 2 days ago
        read: true,
      },
    ];
  });

  const addNotification = (notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      read: false,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return {
    notifications,
    addNotification,
    markAsRead,
    markAllRead,
    removeNotification,
  };
}
