'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Trophy, Award, Users } from 'lucide-react';

interface ChessStats {
  rating: number;
  best: number;
  games: number;
  wins: number;
  losses: number;
  draws: number;
}

export default function ChessProfile() {
  const [stats, setStats] = useState<ChessStats | null>(null);
  const username = 'TheAbhiChess';

  useEffect(() => {
    const fetchChessStats = async () => {
      try {
        const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
        const data = await response.json();
        
        setStats({
          rating: data.chess_rapid?.last?.rating || 0,
          best: data.chess_rapid?.best?.rating || 0,
          games: data.chess_rapid?.record?.win + data.chess_rapid?.record?.loss + data.chess_rapid?.record?.draw || 0,
          wins: data.chess_rapid?.record?.win || 0,
          losses: data.chess_rapid?.record?.loss || 0,
          draws: data.chess_rapid?.record?.draw || 0,
        });
      } catch (error) {
        console.error('Error fetching chess stats:', error);
      }
    };
    fetchChessStats();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#2d2d2d] to-[#1e1e1e] rounded-xl p-8 shadow-2xl border border-[#3c3c3c]"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#4fc1ff] mb-2">Chess Profile</h2>
              <p className="text-[#d4d4d4]">Chess.com Statistics</p>
            </div>
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative w-16 h-16"
            >
              <Crown className="w-full h-full text-[#4fc1ff]" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Profile Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#2d2d2d]/50 p-6 rounded-lg backdrop-blur-sm border border-[#3c3c3c]"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#569cd6] to-[#4fc1ff] p-1">
                    <img
                      src={`https://www.chess.com/bundles/web/images/user-image.007dad08.svg`}
                      alt="Chess.com Profile"
                      className="w-full h-full rounded-full bg-[#2d2d2d] p-1"
                    />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-[#4fc1ff]">{username}</h3>
                  <p className="text-[#d4d4d4]">Rapid Chess Player</p>
                </div>
              </div>

              {stats && (
                <div className="space-y-4">
                  <StatsCard
                    title="Current Rating"
                    value={stats.rating}
                    icon={<Trophy className="w-5 h-5" />}
                    color="text-[#4fc1ff]"
                  />
                  <StatsCard
                    title="Best Rating"
                    value={stats.best}
                    icon={<Award className="w-5 h-5" />}
                    color="text-yellow-500"
                  />
                </div>
              )}
            </motion.div>

            {/* Stats Grid */}
            {stats && (
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  title="Total Games"
                  value={stats.games}
                  icon={<Users className="w-5 h-5" />}
                  color="text-purple-500"
                />
                <StatsCard
                  title="Win Rate"
                  value={Math.round((stats.wins / stats.games) * 100)}
                  icon={<Trophy className="w-5 h-5" />}
                  color="text-green-500"
                  suffix="%"
                />
                <StatsCard
                  title="Wins"
                  value={stats.wins}
                  icon={<Trophy className="w-5 h-5" />}
                  color="text-green-500"
                />
                <StatsCard
                  title="Draws"
                  value={stats.draws}
                  icon={<Award className="w-5 h-5" />}
                  color="text-yellow-500"
                />
              </div>
            )}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href={`https://www.chess.com/member/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#569cd6] to-[#4fc1ff] text-white rounded-lg hover:from-[#4e8ac7] hover:to-[#45aef2] transition-all shadow-lg"
          >
            View Full Profile on Chess.com
            <Crown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color?: string;
  suffix?: string;
}

function StatsCard({ title, value, icon, color = "text-[#4fc1ff]", suffix = "" }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#1e1e1e]/50 p-4 rounded-lg border border-[#3c3c3c]/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`${color} opacity-80`}>{icon}</div>
        <h4 className="text-white text-sm">{title}</h4>
      </div>
      <p className={`text-2xl font-bold ${color}`}>
        {value}{suffix}
      </p>
    </motion.div>
  );
}
